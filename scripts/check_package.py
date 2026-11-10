"""Check installation resources, matching versions, syntax and upload boundaries."""
from pathlib import Path
from html.parser import HTMLParser
import json, re, subprocess, tempfile
root = Path(__file__).resolve().parents[1]
m = json.loads((root / 'hacs.json').read_text())
assert m['filename'] == 'antarikfox-glass-card.js'
js=(root/'dist'/m['filename']).read_text()
html=(root/'dist/antarikfox-studio.html').read_text()
version=re.search(r"const VERSION = '([^']+)';",js).group(1)
assert f"const STUDIO_VERSION = '{version}';" in html
class Scripts(HTMLParser):
    def __init__(self):
        super().__init__(); self.active=False; self.code=[]; self.external=[]
    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            src=dict(attrs).get('src')
            if src: self.external.append(src.split('?')[0])
            self.active=not src
            self.code.append('')
    def handle_endtag(self, tag):
        if tag == 'script': self.active=False
    def handle_data(self, data):
        if self.active: self.code[-1]+=data
p=Scripts();p.feed(html)
# Studio deliberately loads the adjacent script dynamically to refresh old caches.
p.external += re.findall(r'<script src="([^"?]+)\?', '\n'.join(p.code))
assert m['filename'] in p.external
for src in p.external: assert (root/'dist'/src).is_file(),src
with tempfile.TemporaryDirectory() as d:
    for i,code in enumerate(p.code):
        file=Path(d)/f'script-{i}.js';file.write_text(code)
        subprocess.run(['node','--check',str(file)],check=True)
for marker in ('viaFileEditor','core_configurator','ingress_session','supervisor/api','api/newfolder','/config/www/antarikfox/','/local/antarikfox/'):
    assert marker not in js and marker not in html,marker
assert '/api/image/upload' in js
for path in ('dist/antarikfox_glass.yaml','dist/antarikfox-favicon.png','docs/overview.png'):
    assert (root/path).is_file(),path
print(f'Package, versions ({version}), JavaScript syntax and upload boundaries: OK')
