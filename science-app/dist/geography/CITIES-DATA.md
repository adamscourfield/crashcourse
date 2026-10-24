# Cities01 source data

Retrieved and verified 24 October 2026. All assets are local; charts do not call a live data service.

- Urban national-share series: World Bank SP.URB.TOTL.IN.ZS, UN WUP national definitions. API update 8 October2026; 153 actual annual entries,51 each for UK/China/Nigeria,1975–2025. Original response and indicator metadata in data/urban-national-wb-api.json. CC BY4.0, attribution beside charts. Country examples are not uniform development-category histories. No mixing with DEGURBA city-only measures.
- INPE PRODES2024 consolidated technical note, tables1–2, downloaded PDF SHA256 retained in data/prodes2024-selected.json. Table1 visually checked after pdfplumber rendering; table2 text extracted withpypdf. Consolidated2024ALB6518km²,not preliminary6288. Four selected state rows only;2024period1Aug2023–31Jul2024. Indicator uses completeprimarycanopyremoval;polygons>6.25ha counted forcomparable rate. Not every tree-cover change,subsequent land use,or zero values for omitted states.
- Natural Earth10madmin1 state geometry: actual four Brazilian feature subset in data/brazil-selected-states.geojson,ISOjoinBR-PA/AM/MT/RO. Original source https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson . Natural Earth110madmin0UKgeometry in data/uk-natural-earth.geojson. Source https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson . Bothpublicdomain. Generated displaypaths useRamer–Douglas–Peucker0.03degreegeneralisation and simpleequirectangular projection;not area measurements. Regionalindicator areas come fromINPE,not fromdisplaygeometry. Whole-statecolourdoesnotlocateclearingpolygons;someMT/PAterritoryliesoutsidemonitoredforestregion. AnattempttoIBGEAPI timedout;noIBGEgeometryclaim.
- UKselected citymarkersapproximatecentres fororientation,noturbanfootprints/densitysurfaces/rankings. Defra2025digest2021RUC83.1urban/16.9rural appliesEnglandonly. ONSdefinitionchangesmeanearlierclassificationsarenotautomaticallycomparable.

Source URLs and scientific boundaries also appear in curriculum/briefs/geography-a-cities-01.md and the student Sources dialog. No new photoreal asset was needed. Source PDF not redistributed; own diagrams,local source-table data and public-domain geometries used.

## Local source checksums

- urban-national-wb-api.json: `23e2e95e4bfca4b9b58f3fb5358baf6fc7fadc533124e648b35182793c0fa6ba`
- prodes2024-selected.json: `82edf8249773bd654ce36c0c046a986d75b99e4105b58d28dfb0f5d2c0a45162`
- brazil-selected-states.geojson: `7e070bf5fdc2f96cdf9f5df0d54c9eb32f31fd1871795ae05a48b0570056f451`
- uk-natural-earth.geojson: `bcfecb77a40b973621febed2acfec3851cd683d64bfd18e4fd0a1c3bb7da70ad`
