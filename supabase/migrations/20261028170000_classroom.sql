-- Crash Course classroom: teachers set lessons; students' attempts and progress are stored so
-- teachers can see each student's answers and the whole class's progress.
--
-- Security model (row-level security on every table):
--   * Students read and write only their own attempts and progress, and read only the classes
--     and assignments they belong to. Attempts are append-only for students.
--   * Teachers read and manage only the classes they own, and read only the profiles, attempts and
--     progress of students in those classes.
--   * Student accounts and class membership are created only by the manage-students edge
--     function (service role), never by the browser. A signed-up user is a teacher unless the
--     service role has stamped app_metadata.role = 'student' (users cannot edit app_metadata).
-- Test data only until a DPIA and school sign-off are in place (see CLASSROOM.md).

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- tables
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null check (role in ('teacher', 'student')),
  display_name text not null default '' check (length(display_name) <= 80),
  username text check (username is null or username ~ '^[a-z0-9-]{3,32}$'),
  created_at timestamptz not null default now()
);

create or replace function public.new_join_code() returns text
language sql volatile set search_path = public as $$
  -- 6 characters with no easily confused letters or digits (no 0/O, 1/I/L).
  select string_agg(substr('ABCDEFGHJKMNPQRSTUVWXYZ23456789', 1 + floor(random() * 31)::int, 1), '')
  from generate_series(1, 6);
$$;

create table public.classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles (id) on delete cascade,
  name text not null check (length(btrim(name)) between 1 and 80),
  join_code text not null unique default public.new_join_code() check (join_code ~ '^[A-HJKMNP-Z2-9]{6}$'),
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
create index classes_teacher_idx on public.classes (teacher_id);

create table public.class_members (
  class_id uuid not null references public.classes (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (class_id, student_id)
);
create index class_members_student_idx on public.class_members (student_id);

create table public.assignments (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes (id) on delete cascade,
  created_by uuid not null references public.profiles (id) on delete cascade,
  title text not null check (length(btrim(title)) between 1 and 120),
  subject text not null check (subject in ('science', 'maths', 'english-literature', 'history', 'geography')),
  lesson_ids text[] not null check (cardinality(lesson_ids) between 1 and 60),
  due_at timestamptz,
  note text not null default '' check (length(note) <= 1000),
  created_at timestamptz not null default now()
);
create index assignments_class_idx on public.assignments (class_id);

create table public.attempts (
  id bigint generated always as identity primary key,
  student_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  subject text not null check (subject in ('science', 'maths', 'english-literature', 'history', 'geography')),
  lesson_id text not null check (length(lesson_id) <= 120),
  question_id text not null check (length(question_id) <= 160),
  stage text not null check (stage in ('practice', 'check', 'challenge', 'review', 'assessment', 'model', 'writing')),
  prompt text not null default '' check (length(prompt) <= 2000),
  answer text not null default '' check (length(answer) <= 20000),  -- written responses can be long
  correct_answer text not null default '' check (length(correct_answer) <= 2000),
  correct boolean,
  client_id text not null check (length(client_id) between 8 and 80),
  answered_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (student_id, client_id)
);
create index attempts_student_lesson_idx on public.attempts (student_id, subject, lesson_id, answered_at);

create table public.lesson_progress (
  student_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  subject text not null check (subject in ('science', 'maths', 'english-literature', 'history', 'geography')),
  lesson_id text not null check (length(lesson_id) <= 120),
  stages_done smallint not null default 0 check (stages_done between 0 and 4),
  started boolean not null default false,
  complete boolean not null default false,
  check_correct integer not null default 0 check (check_correct >= 0),
  check_total integer not null default 0 check (check_total >= check_correct),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (student_id, subject, lesson_id)
);

-- ---------------------------------------------------------------- helpers
-- security definer so policies can test membership without recursive RLS.
create or replace function public.is_teacher() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'teacher');
$$;
create or replace function public.is_student() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'student');
$$;
create or replace function public.teaches_class(cid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from classes where id = cid and teacher_id = auth.uid());
$$;
create or replace function public.in_class(cid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from class_members where class_id = cid and student_id = auth.uid());
$$;
create or replace function public.teaches_student(sid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from class_members m join classes c on c.id = m.class_id
    where m.student_id = sid and c.teacher_id = auth.uid());
$$;
revoke all on function public.is_teacher(), public.is_student(), public.teaches_class(uuid),
  public.in_class(uuid), public.teaches_student(uuid), public.new_join_code() from public;
grant execute on function public.is_teacher(), public.is_student(), public.teaches_class(uuid),
  public.in_class(uuid), public.teaches_student(uuid), public.new_join_code() to authenticated;

-- A profile is created for every new auth user. Role comes from app_metadata, which only the
-- service role can set; ordinary sign-ups become teachers.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, role, display_name, username)
  values (
    new.id,
    case when new.raw_app_meta_data ->> 'role' = 'student' then 'student' else 'teacher' end,
    left(coalesce(new.raw_user_meta_data ->> 'display_name', new.raw_app_meta_data ->> 'display_name', ''), 80),
    case when new.raw_app_meta_data ->> 'role' = 'student' then new.raw_app_meta_data ->> 'username' end
  );
  return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Keep progress timestamps honest and set completed_at once.
create or replace function public.touch_progress() returns trigger
language plpgsql set search_path = public as $$
begin
  new.updated_at := now();
  if new.complete and (tg_op = 'INSERT' or not old.complete) then new.completed_at := now(); end if;
  if not new.complete then new.completed_at := null; end if;
  return new;
end;
$$;
create trigger lesson_progress_touch before insert or update on public.lesson_progress
  for each row execute function public.touch_progress();

-- ---------------------------------------------------------------- row-level security
alter table public.profiles enable row level security;
alter table public.classes enable row level security;
alter table public.class_members enable row level security;
alter table public.assignments enable row level security;
alter table public.attempts enable row level security;
alter table public.lesson_progress enable row level security;

create policy profiles_read on public.profiles for select to authenticated
  using (id = auth.uid() or public.teaches_student(id));
create policy profiles_update_own on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy classes_read on public.classes for select to authenticated
  using (teacher_id = auth.uid() or public.in_class(id));
create policy classes_insert on public.classes for insert to authenticated
  with check (teacher_id = auth.uid() and public.is_teacher());
create policy classes_update on public.classes for update to authenticated
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());
create policy classes_delete on public.classes for delete to authenticated
  using (teacher_id = auth.uid());

create policy members_read on public.class_members for select to authenticated
  using (student_id = auth.uid() or public.teaches_class(class_id));
create policy members_remove on public.class_members for delete to authenticated
  using (public.teaches_class(class_id));

create policy assignments_read on public.assignments for select to authenticated
  using (public.teaches_class(class_id) or public.in_class(class_id));
create policy assignments_insert on public.assignments for insert to authenticated
  with check (public.teaches_class(class_id) and created_by = auth.uid());
create policy assignments_update on public.assignments for update to authenticated
  using (public.teaches_class(class_id)) with check (public.teaches_class(class_id));
create policy assignments_delete on public.assignments for delete to authenticated
  using (public.teaches_class(class_id));

create policy attempts_insert_own on public.attempts for insert to authenticated
  with check (student_id = auth.uid() and public.is_student());
create policy attempts_read on public.attempts for select to authenticated
  using (student_id = auth.uid() or public.teaches_student(student_id));

create policy progress_insert_own on public.lesson_progress for insert to authenticated
  with check (student_id = auth.uid() and public.is_student());
create policy progress_update_own on public.lesson_progress for update to authenticated
  using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy progress_read on public.lesson_progress for select to authenticated
  using (student_id = auth.uid() or public.teaches_student(student_id));

-- ---------------------------------------------------------------- privileges
-- Column-level grants stop users changing roles, owners or join codes even where a policy allows
-- an update. anon gets nothing: every request must be signed in.
revoke all on public.profiles, public.classes, public.class_members, public.assignments,
  public.attempts, public.lesson_progress from anon, authenticated;
grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant update (display_name) on public.profiles to authenticated;
grant select, delete on public.classes to authenticated;
grant insert (teacher_id, name) on public.classes to authenticated;
grant update (name, archived) on public.classes to authenticated;
grant select, delete on public.class_members to authenticated;
grant select, delete on public.assignments to authenticated;
grant insert (class_id, created_by, title, subject, lesson_ids, due_at, note) on public.assignments to authenticated;
grant update (title, lesson_ids, due_at, note) on public.assignments to authenticated;
grant select on public.attempts to authenticated;
grant insert (subject, lesson_id, question_id, stage, prompt, answer, correct_answer, correct, client_id, answered_at, student_id)
  on public.attempts to authenticated;
grant select on public.lesson_progress to authenticated;
grant insert (student_id, subject, lesson_id, stages_done, started, complete, check_correct, check_total)
  on public.lesson_progress to authenticated;
-- Upserts from the browser re-send the key columns; the update policy still pins student_id to the caller.
grant update (student_id, subject, lesson_id, stages_done, started, complete, check_correct, check_total) on public.lesson_progress to authenticated;
