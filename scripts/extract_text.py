import os
import re

components_dir = r'c:\Users\BmiSs\Desktop\MATH\AImath\frontend\src\components'
files = [os.path.join(components_dir, f) for f in os.listdir(components_dir) if f.endswith('.tsx')]
files.append(r'c:\Users\BmiSs\Desktop\MATH\AImath\frontend\src\App.tsx')

out_path = r'c:\Users\BmiSs\Desktop\MATH\AImath\scripts\texts.txt'
with open(out_path, 'w', encoding='utf-8') as out_f:
    for path in files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        texts = re.findall(r'>([^<{}]+)<', content)
        toasts = re.findall(r'showToast\([\'"](.*?)[\'"]\)', content)
        
        found = set()
        for t in texts + toasts:
            t = t.strip()
            if len(t) > 2 and re.search('[a-zA-Z]', t):
                if not t.startswith('KaTeX'):
                    found.add(t)
                    
        if found:
            out_f.write(f'\n--- {os.path.basename(path)} ---\n')
            for t in sorted(found):
                out_f.write(t + '\n')
print('Done')
