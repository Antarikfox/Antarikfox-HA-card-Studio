"""Check the installation package without Home Assistant or third-party dependencies."""
from pathlib import Path
from html.parser import HTMLParser
import json, re, subprocess, tempfile
root = Path(__file__).resolve().parents[1]
m = json.loads((root / 'hacs.json').read_text())
assert m['filename'] == 'antarikfox-glass-card.js'
assert (root / 'dist' / m['filename']).is_file()
class Scripts(HTMLParser):
    def __init__(self):
        super().__init__(); self.active=False; self.code=[]; self.external=[]
    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            src=dict(attrs).get('src')
            if src: self.external.append(src.split('?')[0])
            self.active=not src
    def handle_endtag(self, tag):
        if tag == 'script': self.active=False
    def handle_data(self, data):
        if self.active: self.code.append(data)
p=Scripts(); p.feed((root/'dist/antarikfox-studio.html').read_text())
assert m['filename'] in p.external
for src in p.external: assert (root/'dist'/src).is_file(),src
with tempfile.TemporaryDirectory() as d:
    for i, code in enumerate(p.code):
        file=Path(d)/f'script-{i}.js'; file.write_text(code)
        subprocess.run(['node','--check',str(file)],check=True)
for path in ('dist/antarikfox-glass-card.js','dist/antarikfox-studio.html'):
    assert '3.8.0' in (root/path).read_text()
assert (root/'dist/antarikfox_glass.yaml').is_file()
assert (root/'docs/overview.png').is_file()
print('Package paths, resource loading, versions and JavaScript syntax: OK')
