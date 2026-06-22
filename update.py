import os
import re
import urllib.request
import json

urls = {
    'home': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YzM2ZiYmVmODRhNTRjMjliNWVjMGY0NzYxODczM2IyEgsSBxCExODeqQQYAZIBIwoKcHJvamVjdF9pZBIVQhM2NDA2MDk1NTQ3NTE3MDcwOTQy&filename=&opi=89354086',
    'story': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2E3ZDE5YTgwNjg1YTQ4NzhiMDQyNDI5ZjU3MGExODI4EgsSBxCExODeqQQYAZIBIwoKcHJvamVjdF9pZBIVQhM2NDA2MDk1NTQ3NTE3MDcwOTQy&filename=&opi=89354086',
    'menu': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzczYjY3ODg4Yjc4YTRkOGI5NGExOTgyOWI5NGE3MGYwEgsSBxCExODeqQQYAZIBIwoKcHJvamVjdF9pZBIVQhM2NDA2MDk1NTQ3NTE3MDcwOTQy&filename=&opi=89354086'
}

os.makedirs('scratch_html', exist_ok=True)

for name, url in urls.items():
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        with open(f'scratch_html/{name}.html', 'wb') as out_file:
            out_file.write(response.read())

def html_to_jsx(html):
    jsx = html
    jsx = jsx.replace('class=', 'className=')
    jsx = re.sub(r'style="background-image: url\(\'(.*?)\'\)"', r'style={{ backgroundImage: "url(\1)" }}', jsx)
    jsx = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', jsx)
    jsx = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', jsx)
    jsx = re.sub(r'<br(.*?)(?<!/)>', r'<br\1/>', jsx)
    jsx = re.sub(r'<hr(.*?)(?<!/)>', r'<hr\1/>', jsx)
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx)
    return jsx

def extract_body(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL)
    if body_match:
        return html_to_jsx(body_match.group(1))
    return ''

for page, title, dest in [('home', 'Home', 'src/app/page.tsx'), ('story', 'Our Story', 'src/app/our-story/page.tsx'), ('menu', 'Our Menu', 'src/app/our-menu/page.tsx')]:
    jsx = extract_body(f'scratch_html/{page}.html')
    jsx = jsx.replace('href="#"', 'href="/"')
    jsx = jsx.replace('>Menu</a>', ' href="/our-menu">Menu</a>').replace('href="/" href="/our-menu"', 'href="/our-menu"')
    jsx = jsx.replace('>Our Story</a>', ' href="/our-story">Our Story</a>').replace('href="/" href="/our-story"', 'href="/our-story"')
    
    content = f'''import Link from "next/link";\n\nexport default function {title.replace(' ', '')}() {{\n  return (\n    <>\n{jsx}\n    </>\n  );\n}}\n'''
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(dest, 'w', encoding='utf-8') as f:
        f.write(content)

# Also update tailwind config
with open('scratch_html/home.html', 'r', encoding='utf-8') as f:
    content = f.read()
config_match = re.search(r'<script id="tailwind-config">\s*tailwind\.config\s*=\s*({.*?})\s*</script>', content, re.DOTALL)
if config_match:
    config_js = config_match.group(1)
    config_js = config_js.replace('darkMode: "class",', 'darkMode: "class",\n  content: [\n    "./src/pages/**/*.js",\n    "./src/pages/**/*.ts",\n    "./src/pages/**/*.jsx",\n    "./src/pages/**/*.tsx",\n    "./src/components/**/*.js",\n    "./src/components/**/*.ts",\n    "./src/components/**/*.jsx",\n    "./src/components/**/*.tsx",\n    "./src/app/**/*.js",\n    "./src/app/**/*.ts",\n    "./src/app/**/*.jsx",\n    "./src/app/**/*.tsx",\n  ],')
    tw_config = f"/** @type {{import('tailwindcss').Config}} */\nmodule.exports = {config_js};\n"
    with open('tailwind.config.js', 'w', encoding='utf-8') as f:
        f.write(tw_config)

