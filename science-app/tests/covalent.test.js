import test from 'node:test';
import assert from 'node:assert/strict';
import {moleculeTasks,checkMolecule,valence} from '../dist/covalent-builder.js';
import {lessons} from '../dist/content.js';
import {restore,session} from '../dist/progress.js';
test('all eight required molecular diagrams conserve electrons and fill shells',()=>{assert.deepEqual(moleculeTasks.map(t=>t.id),['H2','Cl2','HCl','O2','N2','H2O','NH3','CH4']);for(const t of moleculeTasks){assert.equal(checkMolecule(t,t.orders,t.lone).ok,true,t.id);assert.equal(2*[...t.orders,...t.lone].reduce((a,b)=>a+b,0),t.atoms.reduce((n,a)=>n+valence[a],0));}});
test('builder rejects incomplete pairs, invented electrons and wrong sharing',()=>{const cl=moleculeTasks[1];assert.equal(checkMolecule(cl,[0],[3,3]).ok,false);assert.equal(checkMolecule(cl,[2],[3,3]).ok,false);assert.equal(checkMolecule(cl,[2],[2,3]).ok,false);assert.equal(checkMolecule(cl,[1],[2.5,3.5]).ok,false);const water=moleculeTasks[5];assert.equal(checkMolecule(water,[2,0],[2,0,0]).ok,false);});
test('unfinished molecular construction survives reload without inventing success',()=>{const s=restore(null,null,lessons),id='science.chemistry.bonding.covalent-molecules';const p=session(s,id);p.widget={task:2,passed:['O2'],builds:{NH3:{orders:[1,0,1],lone:[1,0,0,0]}}};const r=restore(JSON.stringify(s),null,lessons);assert.deepEqual(session(r,id).widget,p.widget);assert.equal(session(r,id).widgetDone,false);});
