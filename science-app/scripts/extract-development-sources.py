# Authoring-only: run from repository root with requests installed.
# Source websites can revise data; inspect new vintage/hashes before accepting changes.
from pathlib import Path
import requests,csv,io,json,hashlib,re
out=Path('science-app/dist/geography/data');
Path('/tmp/cc-undp25.csv').write_bytes(requests.get('https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Composite_indices_complete_time_series.csv').content)
Path('/tmp/cc-wb-gdp.json').write_text(json.dumps(requests.get('https://api.worldbank.org/v2/country/NOR;QAT;GBR;IND;BRA;NER/indicator/NY.GDP.PCAP.PP.CD?date=2023&format=json&per_page=100').json()))
rows=list(csv.DictReader(io.StringIO(Path('/tmp/cc-undp25.csv').read_bytes().decode('cp1252'))))
hdi=[dict(code=r['iso3'],name=r['country'],hdi=float(r['hdi_2023']),rank=int(r['hdi_rank_2023']),group=r['hdicode']) for r in rows if r['hdi_2023'] and r['hdi_rank_2023'] and r['iso3'] and r['hdicode']]
print('hdi countries',len(hdi))
wb=json.loads(Path('/tmp/cc-wb-gdp.json').read_text());wbmeta=requests.get('https://api.worldbank.org/v2/indicator/NY.GDP.PCAP.PP.CD?format=json').json()
sel=[dict(code=r['countryiso3code'],name=r['country']['value'],gdp=r['value'],hdi=next(p['hdi'] for p in hdi if p['code']==r['countryiso3code'])) for r in wb[1]]
onsurl='https://www.ons.gov.uk/economy/regionalaccounts/grossdisposablehouseholdincome/bulletins/regionalgrossdisposablehouseholdincomegdhi/1997to2024'
html=requests.get(onsurl).text
# Direct source table extract: don't substitute the outdated 2023 release.
from html import unescape
tr=re.findall(r'<tr[^>]*>(.*?)</tr>',html,re.S);ons=[]
for row in tr:
 cells=[re.sub('<[^>]+>','',unescape(x)).strip() for x in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>',row,re.S)]
 if cells and cells[0] in ['United Kingdom','North East','London','South East','Scotland','Wales','Northern Ireland','North West','South West','East of England','East Midlands','West Midlands','Yorkshire and The Humber']:
  try:v=int(cells[1].replace(',',''));ons.append(dict(name=cells[0],value=v))
  except:pass
assert len(ons)==13,(len(ons),ons)
d=dict(checked='2026-10-26',hdi=dict(year=2023,release='Human Development Report 2025',source='https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Composite_indices_complete_time_series.csv',sha256=hashlib.sha256(Path('/tmp/cc-undp25.csv').read_bytes()).hexdigest(),licence='CC BY 3.0 IGO',countries=hdi),gdp=dict(year=2023,indicator='NY.GDP.PCAP.PP.CD',unit='current international dollars per person (PPP)',source='https://api.worldbank.org/v2/country/NOR;QAT;GBR;IND;BRA;NER/indicator/NY.GDP.PCAP.PP.CD?date=2023&format=json&per_page=100',response=wb,metadata=wbmeta,selected=sel,licence='CC BY 4.0'),uk=dict(year=2024,released='2026-08-19',provisional=True,measure='Gross disposable household income per head at current market prices',unit='GBP per person',source=onsurl,regions=ons,licence='Open Government Licence v3.0'),cpi=dict(year=2025,released='2026-02-10',source='https://www.transparency.org/en/cpi/2025',measure='Perceived public-sector corruption;0 highly corrupt,100 very clean;not percentage of corrupt residents',countries=[dict(code='NOR',name='Norway',score=81),dict(code='GBR',name='UK',score=70),dict(code='QAT',name='Qatar',score=58),dict(code='IND',name='India',score=39)]))
(out/'development-selected.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
u='https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson';g=requests.get(u).json();fs=[]
for f in g['features']:
 if f['properties']['ADM0_A3']=='ATA':continue
 fs.append(dict(type='Feature',properties={k:f['properties'][k] for k in ['ADM0_A3','NAME_EN']},geometry=f['geometry']))
g=dict(type='FeatureCollection',source=u,licence='Natural Earth public domain',features=fs);(out/'world-natural-earth.geojson').write_text(json.dumps(g,separators=(',',':'))+'\n')
def xy(p):return [20+(p[0]+180)/360*400,55+(85-p[1])/145*200]
def path(f):
 coords=f['geometry']['coordinates'];polys=coords if f['geometry']['type']=='MultiPolygon' else [coords];return ''.join('M'+'L'.join(','.join(f'{v:.2f}' for v in xy(p)) for p in ring)+'Z' for poly in polys for ring in poly)
paths=[dict(code=f['properties']['ADM0_A3'],name=f['properties']['NAME_EN'],d=path(f)) for f in fs]
# Display subset only; complete country scores remain in archived data for traceability.
Path('science-app/dist/geography/development-data.js').write_text('export const developmentData='+json.dumps(d,separators=(',',':'),ensure_ascii=False)+';\nexport const developmentPaths='+json.dumps(paths,separators=(',',':'),ensure_ascii=False)+';\n')
print('UK',ons);print('naturalearth',len(paths))
