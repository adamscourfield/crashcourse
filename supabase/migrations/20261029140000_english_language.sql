-- Add the new subject to existing checks; ownership policies and grants stay unchanged.
begin;
alter table public.assignments drop constraint assignments_subject_check;
alter table public.assignments add constraint assignments_subject_check check (subject in ('science','maths','english-language','english-literature','history','geography'));
alter table public.attempts drop constraint attempts_subject_check;
alter table public.attempts add constraint attempts_subject_check check (subject in ('science','maths','english-language','english-literature','history','geography'));
alter table public.lesson_progress drop constraint lesson_progress_subject_check;
alter table public.lesson_progress add constraint lesson_progress_subject_check check (subject in ('science','maths','english-language','english-literature','history','geography'));
commit;
