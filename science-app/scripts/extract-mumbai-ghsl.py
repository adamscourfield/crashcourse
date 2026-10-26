import requests,zipfile,io,rasterio,json,hashlib,math
from rasterio.warp import transform
from rasterio.windows import Window
from pathlib import Path
out=Path('science-app/dist/geography/data')
x,y=transform('EPSG:4326','ESRI:54009',[72.9],[19.1]);print('point',x,y)
# Same source-aligned 60 x 60 km window centred broadly on Greater Mumbai.
rows=[]
for year in [1975,2020]:
 name=f'GHS_BUILT_S_E{year}_GLOBE_R2023A_54009_1000_V1_0_R7_C26'
 url=f'https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/GHS_BUILT_S_GLOBE_R2023A/GHS_BUILT_S_E{year}_GLOBE_R2023A_54009_1000/V1-0/tiles/{name}.zip'
 r=requests.get(url);r.raise_for_status();z=zipfile.ZipFile(io.BytesIO(r.content));tif=next(n for n in z.namelist() if n.endswith('.tif'));path='/tmp/'+name+'.tif';Path(path).write_bytes(z.read(tif))
 with rasterio.open(path) as ds:
  print(year,ds.bounds,ds.res)
  rr,cc=ds.index(x[0],y[0]);win=Window(cc-30,rr-30,60,60);a=ds.read(1,window=win);assert a.shape==(60,60)
  bounds=list(rasterio.windows.bounds(win,ds.transform)); rows.append({'epoch':year,'source':url,'sourceZipSHA256':hashlib.sha256(r.content).hexdigest(),'bounds':bounds,'values':a.tolist()})
assert rows[0]['bounds']==rows[1]['bounds']
meta={'product':'GHS-BUILT-S R2023A V1.0','credit':'European Commission, Joint Research Centre, GHSL','licence':'CC BY 4.0','licenceURL':'https://jeodpp.jrc.ec.europa.eu/ftp/jrc-opendata/GHSL/copyright.txt','checked':'2026-10-26','crs':'ESRI:54009','cellMetres':1000,'unit':'square metres of built-up surface per 1 km grid cell','width':60,'height':60,'method':'Source-aligned 60 by 60 cell window; no resampling. Epoch estimates derived from Landsat and Sentinel-2; not single-date photographs or population counts. Not a municipal boundary. 2020 epoch is modelled/interpolated, not a 2020 photograph.','rows':rows}
(out/'mumbai-ghsl-window.json').write_text(json.dumps(meta,separators=(',',':'))+'\n');print('saved',len(json.dumps(meta)))
