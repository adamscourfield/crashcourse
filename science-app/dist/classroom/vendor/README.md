# Vendored libraries

`supabase-2.117.3.js` is `@supabase/supabase-js` version 2.117.3 from npm, bundled as one ES module with esbuild (`--bundle --format=esm --minify`). It is MIT-licensed, copyright Supabase. Licence: https://github.com/supabase/supabase-js/blob/master/LICENSE

The library is vendored so the app has no CDN dependency at runtime. It is loaded only when `classroom/config.js` has a Supabase URL. To upgrade, rebuild from a release at least two weeks old, rename the file, and update the import in `../backend.js`.
