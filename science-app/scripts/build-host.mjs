import {cpSync,existsSync,mkdirSync,readdirSync,rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url)),runtime=path.join(root,'runtime'),source=path.join(root,'dist'),pub=path.join(runtime,'public');
rmSync(pub,{recursive:true,force:true});mkdirSync(pub,{recursive:true});
for(const entry of readdirSync(source)){if(['server','client','.openai'].includes(entry))continue;cpSync(path.join(source,entry),path.join(pub,entry),{recursive:true});}
const run=spawnSync(process.execPath,['scripts/run-framework.mjs','build'],{cwd:runtime,stdio:'inherit'});if(run.status!==0)process.exit(run.status||1);
for(const name of ['server','client','.openai']){const from=path.join(runtime,'dist',name);if(!existsSync(from))continue;const to=path.join(source,name);rmSync(to,{recursive:true,force:true});cpSync(from,to,{recursive:true});}
