// Runs the classroom migration and its row-level security tests on a throwaway Postgres database.
// Needs psql and a server you can create databases on, e.g.
//   CC_TEST_PG="-h /var/tmp/pgtest -p 54329 -U postgres" npm test
// Skipped (not failed) when CC_TEST_PG is not set, so the suite still runs where Postgres is absent.
import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const supa = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'supabase');
const conn = process.env.CC_TEST_PG;

test('classroom schema: row-level security keeps students and teachers to their own data', {skip: conn ? false : 'set CC_TEST_PG to run against Postgres'}, () => {
  const args = conn.split(/\s+/).filter(Boolean);
  const db = `cc_test_${process.pid}`;
  const psql = (extra, opts = {}) => execFileSync('psql', [...args, '-q', '-v', 'ON_ERROR_STOP=1', ...extra], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts});
  psql(['-d', 'postgres', '-c', `create database ${db}`]);
  try {
    psql(['-d', db, '-f', join(supa, 'tests/auth-stub.sql'), '-f', join(supa, 'migrations/20261028170000_classroom.sql')]);
    let out;
    try { out = execFileSync('psql', [...args, '-d', db, '-v', 'ON_ERROR_STOP=1', '-t', '-f', join(supa, 'tests/classroom-rls.sql')], {encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']}); }
    catch (err) { assert.fail(String(err.stderr).split('\n').filter(l => /ERROR|EXPECTED|COUNT/.test(l)).join('\n') || err.message); }
    assert.match(out, /ALL CLASSROOM RLS TESTS PASSED/);
  } finally {
    psql(['-d', 'postgres', '-c', `drop database if exists ${db}`]);
  }
});
