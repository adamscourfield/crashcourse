// Supabase Edge Function: manage-students
// Teachers create student logins, reset passwords and delete students for classes they own.
// It is the only code that holds the service-role key; the browser never sees it.
//
// POST JSON with the teacher's session (Authorization: Bearer <access token>):
//   {action: 'create', classId, names: ['Amira Khan', ...]}   -> {students: [{studentId, displayName, username, password}]}
//   {action: 'reset',  classId, studentId}                     -> {username, password}
//   {action: 'delete', classId, studentId}                     -> {deleted: true}   (removes the account and all its data)
//
// Environment: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY (provided by Supabase),
// STUDENT_EMAIL_DOMAIN (optional; default pupils.crashcourse.invalid), ALLOWED_ORIGIN (optional).
import {createClient} from 'npm:@supabase/supabase-js@2.117.3';
import {usernameFor, newPassword, studentEmail, cleanDisplayName} from './identity.js';

const MAX_PER_REQUEST = 40;
const MAX_PER_CLASS = 60;

const cors = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Vary': 'Origin',
});

Deno.serve(async (req: Request) => {
  const origin = Deno.env.get('ALLOWED_ORIGIN') ?? '*';
  const headers = {...cors(origin), 'Content-Type': 'application/json'};
  const reply = (status: number, body: unknown) => new Response(JSON.stringify(body), {status, headers});
  if (req.method === 'OPTIONS') return new Response('ok', {headers: cors(origin)});
  if (req.method !== 'POST') return reply(405, {error: 'Use POST'});

  const url = Deno.env.get('SUPABASE_URL')!;
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const domain = Deno.env.get('STUDENT_EMAIL_DOMAIN') ?? 'pupils.crashcourse.invalid';

  // Identify the caller with their own token, so RLS applies to the ownership check.
  const caller = createClient(url, anonKey, {
    global: {headers: {Authorization: req.headers.get('Authorization') ?? ''}},
    auth: {persistSession: false},
  });
  const {data: {user}} = await caller.auth.getUser();
  if (!user) return reply(401, {error: 'Sign in as a teacher first'});

  let body: {action?: string; classId?: string; names?: unknown; studentId?: string};
  try { body = await req.json(); } catch { return reply(400, {error: 'Invalid JSON'}); }
  const {action, classId} = body;
  if (!classId) return reply(400, {error: 'classId is required'});

  const {data: cls} = await caller.from('classes').select('id, join_code, teacher_id').eq('id', classId).eq('teacher_id', user.id).maybeSingle();
  if (!cls) return reply(403, {error: 'You can only manage students in your own classes'});

  const admin = createClient(url, serviceKey, {auth: {persistSession: false}});
  const {data: members, error: mErr} = await admin.from('class_members').select('student_id, profiles!inner(username, display_name)').eq('class_id', classId);
  if (mErr) return reply(500, {error: mErr.message});
  const roster = (members ?? []) as unknown as {student_id: string; profiles: {username: string; display_name: string}}[];

  if (action === 'create') {
    const names = Array.isArray(body.names) ? body.names.map(cleanDisplayName).filter(Boolean) : [];
    if (!names.length) return reply(400, {error: 'Add at least one student name'});
    if (names.length > MAX_PER_REQUEST) return reply(400, {error: `Add at most ${MAX_PER_REQUEST} students at a time`});
    if (roster.length + names.length > MAX_PER_CLASS) return reply(400, {error: `A class can have at most ${MAX_PER_CLASS} students`});
    const taken = new Set(roster.map(r => r.profiles.username));
    const created = [];
    for (const displayName of names) {
      const username = usernameFor(displayName, taken);
      taken.add(username);
      const password = newPassword();
      const {data, error} = await admin.auth.admin.createUser({
        email: studentEmail(username, cls.join_code, domain),
        password,
        email_confirm: true,
        app_metadata: {role: 'student', username},
        user_metadata: {display_name: displayName},
      });
      if (error || !data.user) return reply(500, {error: `Could not create ${displayName}: ${error?.message}`, students: created});
      const {error: jErr} = await admin.from('class_members').insert({class_id: classId, student_id: data.user.id});
      if (jErr) return reply(500, {error: jErr.message, students: created});
      created.push({studentId: data.user.id, displayName, username, password});
    }
    return reply(200, {students: created});
  }

  const member = roster.find(r => r.student_id === body.studentId);
  if (!member) return reply(404, {error: 'That student is not in this class'});

  if (action === 'reset') {
    const password = newPassword();
    const {error} = await admin.auth.admin.updateUserById(member.student_id, {password});
    if (error) return reply(500, {error: error.message});
    return reply(200, {username: member.profiles.username, password});
  }

  if (action === 'delete') {
    // Student accounts belong to one class, so deleting the account removes their attempts and progress too.
    const {error} = await admin.auth.admin.deleteUser(member.student_id);
    if (error) return reply(500, {error: error.message});
    return reply(200, {deleted: true});
  }

  return reply(400, {error: 'Unknown action'});
});
