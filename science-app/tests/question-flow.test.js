import test from 'node:test';
import assert from 'node:assert/strict';
import {createAdvanceClock} from '../dist/question-flow.js';
function harness(){let jobs=[],calls=0,allowed=true;const clock=createAdvanceClock({schedule:f=>{jobs.push(f);return jobs.length;},unschedule:()=>{}});const start=()=>clock.start({delay:1,guard:()=>allowed,next:()=>calls++});return {clock,start,jobs,get calls(){return calls;},deny(){allowed=false;}};}
test('answered question advances once when context is still valid',()=>{const h=harness();h.start();h.jobs[0]();assert.equal(h.calls,1);});
test('cancelled callbacks cannot move a different lesson even if already queued',()=>{const h=harness();h.start();h.clock.cancel();h.jobs[0]();assert.equal(h.calls,0);});
test('only newest question owns navigation',()=>{const h=harness();h.start();h.start();h.jobs[0]();h.jobs[1]();assert.equal(h.calls,1);});
test('hidden or detached context rejects automatic navigation',()=>{const h=harness();h.start();h.deny();h.jobs[0]();assert.equal(h.calls,0);});
