-- Row-level security tests for the classroom migration. Run after auth-stub.sql and the migration
-- on a throwaway database (see science-app/tests/classroom-db.test.js). Any failed expectation
-- raises an exception, so psql -v ON_ERROR_STOP=1 exits non-zero.
\set ON_ERROR_STOP 1

create or replace function pg_temp.expect_fail(q text, label text) returns void language plpgsql as $$
begin
  begin execute q; exception when others then raise notice 'ok (refused): %', label; return; end;
  raise exception 'EXPECTED FAILURE BUT SUCCEEDED: %', label;
end $$;
create or replace function pg_temp.expect_count(q text, n int, label text) returns void language plpgsql as $$
declare got int;
begin
  execute 'select count(*) from (' || q || ') x' into got;
  if got <> n then raise exception 'COUNT % expected %, got %', label, n, got; end if;
  raise notice 'ok (% rows): %', n, label;
end $$;
create or replace function pg_temp.as_user(uid uuid) returns void language plpgsql as $$
begin
  perform set_config('request.jwt.claims', json_build_object('sub', uid, 'role', 'authenticated')::text, false);
  execute 'set role authenticated';
end $$;
grant execute on function pg_temp.expect_fail(text, text), pg_temp.expect_count(text, int, text) to authenticated, anon;

-- Fixtures, created as the service role would (bypassing RLS).
insert into auth.users (id, email, raw_user_meta_data) values
  ('00000000-0000-0000-0000-0000000000a1', 'teacher.a@example.test', '{"display_name":"Teacher A"}'),
  ('00000000-0000-0000-0000-0000000000b1', 'teacher.b@example.test', '{"display_name":"Teacher B"}');
-- A self-signup that tries to claim the student role through user_metadata must still be a teacher.
insert into auth.users (id, email, raw_user_meta_data) values
  ('00000000-0000-0000-0000-0000000000c1', 'sneaky@example.test', '{"role":"student","display_name":"Sneaky"}');
insert into auth.users (id, email, raw_app_meta_data, raw_user_meta_data) values
  ('00000000-0000-0000-0000-000000000001', 's1@demo.invalid', '{"role":"student","username":"amira-k"}', '{"display_name":"Amira K"}'),
  ('00000000-0000-0000-0000-000000000002', 's2@demo.invalid', '{"role":"student","username":"ben-o"}', '{"display_name":"Ben O"}'),
  ('00000000-0000-0000-0000-000000000003', 's3@demo.invalid', '{"role":"student","username":"chen-l"}', '{"display_name":"Chen L"}');

select pg_temp.expect_count($$select 1 from profiles where role = 'teacher'$$, 3, 'three teacher profiles from ordinary sign-up');
select pg_temp.expect_count($$select 1 from profiles where role = 'student' and username is not null$$, 3, 'three student profiles from app_metadata');
select pg_temp.expect_count($$select 1 from profiles where id = '00000000-0000-0000-0000-0000000000c1' and role = 'teacher'$$, 1, 'user_metadata cannot grant the student role');

-- Teacher A creates a class; teacher B creates another.
select pg_temp.as_user('00000000-0000-0000-0000-0000000000a1');
insert into classes (teacher_id, name) values ('00000000-0000-0000-0000-0000000000a1', '10A History');
select pg_temp.expect_fail($$insert into classes (teacher_id, name) values ('00000000-0000-0000-0000-0000000000b1', 'Spoofed owner')$$, 'teacher cannot create a class owned by someone else');
select pg_temp.expect_fail($$insert into classes (teacher_id, name, join_code) values ('00000000-0000-0000-0000-0000000000a1', 'x', 'AAAAAA')$$, 'teacher cannot choose a join code');

reset role;
select pg_temp.as_user('00000000-0000-0000-0000-0000000000b1');
insert into classes (teacher_id, name) values ('00000000-0000-0000-0000-0000000000b1', '11C Science');
reset role;
select id as class_a from classes where name = '10A History' \gset
select id as class_b from classes where name = '11C Science' \gset

-- Membership is added by the service role (edge function).
insert into class_members (class_id, student_id)
  select c.id, s from classes c, unnest(array['00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002']::uuid[]) s
  where c.name = '10A History';
insert into class_members (class_id, student_id)
  select id, '00000000-0000-0000-0000-000000000003' from classes where name = '11C Science';

-- Teacher A sets work for their class only.
select pg_temp.as_user('00000000-0000-0000-0000-0000000000a1');
insert into assignments (class_id, created_by, title, subject, lesson_ids, due_at)
  select id, '00000000-0000-0000-0000-0000000000a1', 'Weimar recap', 'history', array['history.germany.origins', 'history.germany.versailles'], now() + interval '7 days'
  from classes where name = '10A History';
select pg_temp.expect_count($$select 1 from classes$$, 1, 'teacher A sees only their own class');
select pg_temp.expect_fail(format($$insert into assignments (class_id, created_by, title, subject, lesson_ids) values (%L, '00000000-0000-0000-0000-0000000000a1', 'x', 'science', array['particles'])$$, :'class_b'), 'teacher A cannot set work for teacher B''s class');
select pg_temp.expect_fail(format($$insert into assignments (class_id, created_by, title, subject, lesson_ids) values (%L, '00000000-0000-0000-0000-0000000000b1', 'x', 'science', array['particles'])$$, :'class_a'), 'teacher cannot set work under another teacher''s name');
select pg_temp.expect_count(format($$select 1 from class_members where class_id = %L$$, :'class_b'), 0, 'teacher A cannot see teacher B''s roster');
select pg_temp.expect_fail($$update classes set join_code = 'ZZZZZZ'$$, 'join code cannot be changed');
select pg_temp.expect_fail($$update profiles set role = 'student' where id = auth.uid()$$, 'teacher cannot change their role');
select pg_temp.expect_fail($$insert into attempts (subject, lesson_id, question_id, stage, client_id) values ('history', 'x', 'q', 'check', 'teacher-attempt-1')$$, 'teachers cannot record attempts');
reset role;

-- Student 1 works on the set lessons.
select pg_temp.as_user('00000000-0000-0000-0000-000000000001');
select pg_temp.expect_count($$select 1 from classes$$, 1, 'student sees only their class');
select pg_temp.expect_count($$select 1 from assignments$$, 1, 'student sees their class assignment');
insert into attempts (subject, lesson_id, question_id, stage, prompt, answer, correct_answer, correct, client_id) values
  ('history', 'history.germany.origins', 'gd1.p1', 'practice', 'About how many German soldiers died?', 'Two hundred thousand', 'Two million', false, 'a1-0001-practice'),
  ('history', 'history.germany.origins', 'gd1.p1', 'practice', 'About how many German soldiers died?', 'Two million', 'Two million', true, 'a1-0002-practice');
select pg_temp.expect_fail($$insert into attempts (subject, lesson_id, question_id, stage, client_id) values ('history', 'history.germany.origins', 'gd1.p1', 'practice', 'a1-0001-practice')$$, 'duplicate client_id is rejected (idempotent sync)');
select pg_temp.expect_fail($$insert into attempts (student_id, subject, lesson_id, question_id, stage, client_id) values ('00000000-0000-0000-0000-000000000002', 'history', 'x', 'q', 'check', 'forged-0001')$$, 'student cannot record attempts for another student');
select pg_temp.expect_fail($$update attempts set correct = true$$, 'attempts are append-only');
select pg_temp.expect_fail(format($$insert into class_members (class_id, student_id) values (%L, auth.uid())$$, :'class_b'), 'student cannot join another class from the browser');
select pg_temp.expect_fail($$delete from attempts$$, 'students cannot delete attempts');
insert into lesson_progress (subject, lesson_id, stages_done, started, complete, check_correct, check_total)
  values ('history', 'history.germany.origins', 4, true, true, 7, 8);
select pg_temp.expect_count($$select 1 from lesson_progress where completed_at is not null$$, 1, 'completed_at is stamped');
select pg_temp.expect_fail($$insert into classes (teacher_id, name) values (auth.uid(), 'Student class')$$, 'students cannot create classes');
-- The exact statements the browser sends: idempotent attempt batches and progress upserts.
insert into attempts (subject, lesson_id, question_id, stage, client_id) values
  ('history', 'history.germany.origins', 'gd1.p2', 'check', 'a1-0001-practice'),
  ('history', 'history.germany.origins', 'gd1.p2', 'check', 'a1-0003-check')
  on conflict (student_id, client_id) do nothing;
select pg_temp.expect_count($$select 1 from attempts$$, 3, 're-sent batch adds only the new attempt');
insert into lesson_progress (student_id, subject, lesson_id, stages_done, started, complete, check_correct, check_total)
  values (auth.uid(), 'history', 'history.germany.versailles', 2, true, false, 0, 0)
  on conflict (student_id, subject, lesson_id) do update set stages_done = excluded.stages_done, started = excluded.started,
  complete = excluded.complete, check_correct = excluded.check_correct, check_total = excluded.check_total,
  student_id = excluded.student_id, subject = excluded.subject, lesson_id = excluded.lesson_id;
insert into lesson_progress (student_id, subject, lesson_id, stages_done, started, complete, check_correct, check_total)
  values (auth.uid(), 'history', 'history.germany.versailles', 3, true, false, 4, 8)
  on conflict (student_id, subject, lesson_id) do update set stages_done = excluded.stages_done, started = excluded.started,
  complete = excluded.complete, check_correct = excluded.check_correct, check_total = excluded.check_total,
  student_id = excluded.student_id, subject = excluded.subject, lesson_id = excluded.lesson_id;
select pg_temp.expect_count($$select 1 from lesson_progress where lesson_id = 'history.germany.versailles' and stages_done = 3$$, 1, 'progress upsert updates in place');
select pg_temp.expect_fail($$update lesson_progress set student_id = '00000000-0000-0000-0000-000000000002'$$, 'student cannot move progress to another student');
select pg_temp.expect_fail($$insert into lesson_progress (student_id, subject, lesson_id) values ('00000000-0000-0000-0000-000000000002', 'history', 'x')$$, 'student cannot create progress for another student');
select pg_temp.expect_fail($$update lesson_progress set check_total = 1, check_correct = 2$$, 'progress values are validated');
reset role;

select pg_temp.as_user('00000000-0000-0000-0000-000000000002');
select pg_temp.expect_count($$select 1 from attempts$$, 0, 'student 2 cannot see student 1''s attempts');
select pg_temp.expect_count($$select 1 from lesson_progress$$, 0, 'student 2 cannot see student 1''s progress');
select pg_temp.expect_count($$select 1 from profiles$$, 1, 'student sees only their own profile');
reset role;

select pg_temp.as_user('00000000-0000-0000-0000-000000000003');
select pg_temp.expect_count($$select 1 from assignments$$, 0, 'student in another class cannot see the assignment');
reset role;

-- Teachers see their own students' answers and nobody else's.
select pg_temp.as_user('00000000-0000-0000-0000-0000000000a1');
select pg_temp.expect_count($$select 1 from attempts$$, 3, 'teacher A sees every attempt by their students');
select pg_temp.expect_count($$select 1 from lesson_progress$$, 2, 'teacher A sees their students'' progress');
select pg_temp.expect_count($$select 1 from profiles where role = 'student'$$, 2, 'teacher A sees only their two students');
select pg_temp.expect_count($$select 1 from class_members$$, 2, 'teacher A sees their class roster');
reset role;
select pg_temp.as_user('00000000-0000-0000-0000-0000000000b1');
select pg_temp.expect_count($$select 1 from attempts$$, 0, 'teacher B cannot see teacher A''s students'' attempts');
select pg_temp.expect_count($$select 1 from profiles where role = 'student'$$, 1, 'teacher B sees only their own student');
reset role;

-- Signed-out visitors see nothing.
set role anon;
select pg_temp.expect_fail($$select * from attempts$$, 'anon cannot read attempts');
select pg_temp.expect_fail($$select * from classes$$, 'anon cannot read classes');
reset role;

-- Removing a student from the class removes the teacher's access.
select pg_temp.as_user('00000000-0000-0000-0000-0000000000a1');
delete from class_members where student_id = '00000000-0000-0000-0000-000000000002';
select pg_temp.expect_count($$select 1 from profiles where role = 'student'$$, 1, 'removed student is no longer visible to the teacher');
reset role;

select 'ALL CLASSROOM RLS TESTS PASSED' as result;
