#!/usr/bin/env python3
"""Compile authored, title-aligned English workshop records; no credentials/network."""
import csv,json,pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
profiles={}
for p in sorted((ROOT/'curriculum/authoring').glob('language-*-workshops.txt')):
 group=None
 for line in p.read_text().splitlines():
  if line.startswith('# '):group=line[2:];profiles.setdefault(group,[])
  elif line.strip():
   fields=line.split('|')
   if len(fields)!=8:raise ValueError('Expected eight authored fields')
   profiles[group].append(fields)
roadmap=list(csv.DictReader((ROOT/'curriculum/english-language-lesson-roadmap.csv').open()))
rows=[]
for r in roadmap[20:]:
 group=r['topic_id'].split('.')[-1];n=int(r['lesson_id'].split('-')[-1]);profile=profiles[group][n-1]
 rows.append(dict(id=f'lang.{group}.lesson-{n:02}',curriculumId=r['lesson_id'],topicId=r['topic_id'],title=r['title'],refs=r['refs'].split(';'),profile=profile))
assert len(rows)==155 and sum(map(len,profiles.values()))==155
out=ROOT/'science-app/dist/language/completion-data.js'
out.write_text('// Compiled from curriculum/authoring/language-*-workshops.txt and stable roadmap.\nexport const completionData='+json.dumps(rows,ensure_ascii=False,indent=2)+';\n')
bank=json.loads((ROOT/'science-app/dist/language/source-bank.json').read_text())
(ROOT/'science-app/dist/language/source-bank.js').write_text('export const sourceBank='+json.dumps(bank,ensure_ascii=False,indent=2)+';\n')
print('Compiled155 authored workshop profiles and5 attributed sustained extracts')
