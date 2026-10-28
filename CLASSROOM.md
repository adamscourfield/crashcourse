# Crash Course classroom: set work, progress and answers

Teachers create classes, give students logins, set specific lessons and see each student's progress and every answer, per student and for the whole class.

**Status (28 October 2026):** implemented and tested in **demo mode** only. No Supabase project has been created, the edge function has never run, and no real student data exists anywhere. Do not use with real pupils until the data-protection steps below are complete.

## How it fits together

| Part | Where | What it does |
|---|---|---|
| Teacher dashboard | `science-app/dist/teacher/` | Teachers sign in or create an account, manage classes and students, set work, and view progress and answers (grid, per student, per lesson for the whole class, CSV export) |
| Student join | `science-app/dist/classroom/student.js` | Adds a "Join your class" sidebar box to the lessons app. Students see their set work, open the lessons, and their answers are shared |
| Answer tracking | `classroom/track.js` plus hooks in `app.js` and each studio | Every practice, check, challenge, review, assessment, model and writing attempt is sent as an event |
| Offline queue | `classroom/sync.js` | Attempts and progress go to localStorage first, then upload in batches. Each attempt has a client ID, so a re-sent batch is never double-counted. There is one queue per student |
| Backend adapter | `classroom/backend.js` | Uses Supabase when `config.js` has a URL; otherwise uses a demo backend in localStorage |
| Database | `supabase/migrations/20261028170000_classroom.sql` | Tables, row-level security, column grants and the profile trigger |
| Student accounts | `supabase/functions/manage-students/` | An edge function that holds the service key: creates students, resets passwords, deletes students |
| Lesson catalogue | `classroom/catalog.json` (`tools/build-classroom-catalog.mjs`) | 896 lessons across 5 subjects for the lesson picker. A test fails if this file is stale |

### Security model

- Students never have an email address. Teachers create them, and they sign in with a **class code + username + password**. Internally the login is `username@classcode.<STUDENT_EMAIL_DOMAIN>`. Only the edge function (service role) can create an account with the `student` role; anyone signing up through the public API becomes a teacher with no classes.
- Row-level security:
  - Students can read and write only their own attempts and progress, and read their own classes and assignments.
  - Teachers can see only students in classes they own. Attempts are append-only.
  - `anon` gets nothing.
  - Column-level grants stop clients changing ownership columns.
- These rules are covered by 39 SQL checks (`supabase/tests/classroom-rls.sql`), run against real Postgres 16 with a test-only `auth` stub. That stub is not Supabase itself.
- **Shared computers:** lesson progress lives in the browser. If a different student signs in where another student's lessons are saved, they must clear the browser copy or sign out. Closing the prompt signs them out. Shared answers remain with the teacher.
- Answers given while signed out are discarded, not buffered.
- The service key exists only as an edge-function secret. **Never put it in `config.js` or the repo.**

## Demo mode (current)

Leave `science-app/dist/classroom/config.js` with an empty `supabaseUrl`. Everything is stored in this browser's localStorage under `crash-course-classroom-demo-v1`.

- Teacher: `/teacher/`, sign in as `demo.teacher@example.test` / `demo-teacher`, or create an account. Use **Reset demo data** to start again.
- Students: on the lessons app, choose Join your class with code `TRYME2`, username `amira-k`, password `demo-amira` (also `ben-o`/`demo-ben`, `chen-l`/`demo-chen`).

Demo mode is a single-browser simulation. A teacher and students on different devices only share data once Supabase is configured.

## Going live with Supabase

1. Create a Supabase project in an **EU (London or Frankfurt) region**, on a plan your school's data-protection officer approves.
2. Run the migration: `supabase db push`, or paste `supabase/migrations/20261028170000_classroom.sql` into the SQL editor.
3. Auth settings:
   - turn off email confirmation for sign-ups, or keep it for teachers and confirm that student accounts created by the admin API are auto-confirmed (the function sets `email_confirm: true`);
   - set the site URL;
   - keep rate limits on.
4. Deploy the function and set its secrets:
   ```
   supabase functions deploy manage-students
   supabase secrets set STUDENT_EMAIL_DOMAIN=pupils.crashcourse.invalid ALLOWED_ORIGIN=https://<your app origin>
   ```
   `SUPABASE_URL`, `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically.
5. Put **only** the project URL and the **anon** key into `config.js`, keeping `studentEmailDomain` the same as the secret.
6. Smoke-test with made-up students:
   - teacher sign-up, create class, add students;
   - student sign-in on a second device;
   - answer questions, then check the teacher grid and answers;
   - reset a password, delete a student.

   Check first that Supabase accepts the `.invalid` synthetic domain; if not, use a domain you control with no mailbox.
7. **Hosting:** the published Site is owner-private, so students and other teachers cannot open it. A school audience needs a different hosting audience or host. That is a publication decision and has not been made.

## Before any real pupil data (required)

- A DPIA signed off by the school, with the school as data controller and a data-processing agreement covering Supabase.
- A privacy notice for pupils and parents covering what is collected, as follows:
  - the display name the teacher types;
  - the username;
  - every answer with its timestamp;
  - lesson progress.

  It must also say why, and for how long.
- Data minimisation: use first name plus initial, never full names, dates of birth or other identifiers.
- Retention: decide a period, e.g. end of the academic year.
  - **Delete student** removes the account and, by cascade, all of that student's answers and progress.
  - Deleting a class (database only; there is no UI yet) removes its assignments and memberships.
- Subject access: the teacher CSV export, plus the student view, covers a pupil's data. Document who handles requests.
- Passwords are three words plus two digits, about 26 bits. That is acceptable only with Supabase rate limiting and short-lived class codes. Reset passwords whenever a printout is lost.

## Known limitations

- Supabase path not tested end to end; edge function not executed here (no Deno). Only the SQL and RLS layer and demo mode are verified.
- Written answers (Literature, History and Geography extended writing) are stored and shown verbatim, but not marked.
- Science lessons limited to separate sciences or Higher tier only open for students on that route or tier; the student sees the reason. Geography lessons for options a student has not chosen likewise.
- Maths question IDs are per generated instance. The whole-class view groups them by skill and level.
- No co-teachers, class archiving UI, class transfer or bulk import from MIS.
- Progress figures come from the student's browser (stages and check scores), so they can be lost if the browser is cleared before syncing. Answers are queued and retried.

## Tests

- `npm test` in `science-app/` covers the classroom unit tests.
- With `CC_TEST_PG="-h <socket dir> -p <port> -U postgres"` it also runs the migration and RLS checks against Postgres.
- `node tools/classroom-browser-flow.mjs` (with `OUT=<dir>`, and the app served on :4173) walks the full demo journey in Chromium and writes `classroom-browser-evidence.json`.
