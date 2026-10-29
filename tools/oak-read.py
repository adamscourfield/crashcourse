#!/usr/bin/env python3
"""Read-only Oak v1 metadata client. Credentials/cache never enter app assets."""
import json, pathlib, re, subprocess, sys
ROOT = pathlib.Path(__file__).resolve().parents[1]
def read(path):
    if not re.fullmatch(r'/[a-z0-9/\-]+', path) or '..' in path:
        raise ValueError('Only relative Oak metadata paths are accepted')
    key = (ROOT / '.private/oak-key').read_text().strip()
    if not re.fullmatch(r'[A-Za-z0-9\-]+', key):
        raise ValueError('Invalid credential format')
    config = 'header = "Authorization: Bearer ' + key + '"\n'
    result = subprocess.run(['curl', '--silent', '--show-error', '--fail', '--max-time', '45', '--proto', '=https', '--config', '-', 'https://open-api.thenational.academy/api/v1'+path], input=config, text=True, capture_output=True)
    if result.returncode:
        raise RuntimeError('Oak request failed; curl exit '+str(result.returncode)+' (response and credentials withheld)')
    return json.loads(result.stdout)
if __name__ == '__main__':
    path = sys.argv[1] if len(sys.argv)>1 else '/subjects'
    try:
        data = read(path)
        cache = ROOT / '.private/oak-cache'
        cache.mkdir(parents=True, exist_ok=True)
        target = cache / (path.strip('/').replace('/', '__')+'.json')
        target.write_text(json.dumps(data, indent=2))
        target.chmod(0o600)
        print(json.dumps({'path':path,'cached':True,'records':len(data) if isinstance(data,list) else None,'fields':list(data) if isinstance(data,dict) else None}))
    except Exception as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
