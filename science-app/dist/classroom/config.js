// Classroom settings. Leave supabaseUrl and supabaseAnonKey empty to run in demo mode (made-up data
// stored only in this browser). To use real accounts, create a Supabase project, run the migration
// and deploy the manage-students function (see CLASSROOM.md), then paste the project URL and the
// public anon key here. The anon key is designed to be public: row-level security protects the data.
// Never put the service-role key in this file.
export const classroomConfig = {
  supabaseUrl: '',
  supabaseAnonKey: '',
  // Must match the STUDENT_EMAIL_DOMAIN secret of the manage-students function.
  studentEmailDomain: 'pupils.crashcourse.invalid',
};
