# Authoring-only: run from repository root; uses the retained Natural Earth geometry.
from pathlib import Path
import json
base=Path('science-app/dist/geography');g=json.loads((base/'data/world-natural-earth.geojson').read_text())
selected=['IND','PAK','CHN','NPL','BTN','BGD','MMR','LKA'];features=[f for f in g['features'] if f['properties']['ADM0_A3'] in selected]
def xy(p):return [20+(p[0]-55)/55*400,60+(42-p[1])/42*240]
def path(f):
 coords=f['geometry']['coordinates'];polys=coords if f['geometry']['type']=='MultiPolygon' else [coords]
 return ''.join('M'+'L'.join(','.join(f'{v:.2f}' for v in xy(p)) for p in ring)+'Z' for poly in polys for ring in poly)
paths=[dict(code=f['properties']['ADM0_A3'],name=f['properties']['NAME_EN'],d=path(f)) for f in features]
def intersects(f):
 coords=f['geometry']['coordinates'];polys=coords if f['geometry']['type']=='MultiPolygon' else [coords];pts=[p for poly in polys for ring in poly for p in ring];return min(p[0] for p in pts)<=110 and max(p[0] for p in pts)>=55 and min(p[1] for p in pts)<=42 and max(p[1] for p in pts)>=0
context=[dict(code=f['properties']['ADM0_A3'],name=f['properties']['NAME_EN'],d=path(f)) for f in g['features'] if intersects(f)]
d=dict(checked='2026-10-26',water=dict(year=2024,release=2025,unit='billion people',withoutSafelyManaged=2.1,basicWithinWithout=1.4,rounded=True,source='https://cdn.who.int/media/docs/default-source/wash-documents/wash-coverage/jmp/jmp-2025-wash-households-lowres-launch.pdf',definitionSource='https://www.who.int/data/gho/indicator-metadata-registry/imr-details/4819'),covax=dict(statement='2023-12-19',closed='2023-12-31',unit='percent with two-dose coverage',groups=[dict(name='AMC lower-income participants',value=57),dict(name='Global average',value=67)],doses='nearly 2 billion',economies=146,source='https://www.unicef.org/press-releases/covid-19-vaccinations-shift-regular-immunisation-covax-draws-close'),tfa=dict(concluded=2013,indiaRatified='2016-04-21',enteredForce='2017-02-22',source='https://www.wto.org/english/news_e/news16_e/fac_21apr16_e.htm',forceSource='https://www.wto.org/english/res_e/publications_e/ai17_e/tfa_general_oth.pdf'),paris=dict(adopted='2015-12-12',enteredForce='2016-11-04',source='https://unfccc.int/process-and-meetings/the-paris-agreement'),india=dict(source='https://ncert.nic.in/textbook/pdf/iess101.pdf',edition='2025–26',projection=dict(type='equirectangular',extent=[55,0,110,42],display=[20,60,400,240]),geometrySource=g['source'],licence='Natural Earth public domain',selectedCodes=selected,contextCodes=[p['code'] for p in context],capital=dict(name='New Delhi',lat=28.6,lon=77.2,approximate=True),limitations='Generalised orientation only;selected neighbours;small islands/detail not fully represented;not a boundary survey.'),toyBudget=dict(total=100,delivery=60,training=25,maintenance=15,invented=True))
(base/'data/development-strategies-selected.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
(base/'strategy-data.js').write_text('export const strategyData='+json.dumps(d,ensure_ascii=False,separators=(',',':'))+';\nexport const indiaRegionalPaths='+json.dumps(paths,ensure_ascii=False,separators=(',',':'))+';\nexport const indiaContextPaths='+json.dumps(context,ensure_ascii=False,separators=(',',':'))+';\n')
print('regional features',len(paths))
