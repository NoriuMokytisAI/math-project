
import os
path = 'content/generated/11/olimpiada-11.json'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
# Fix double newlines
text = text.replace('\n\n', '\n')

replacements = {
    'Ä…': 'ą', 'Ä': 'č', 'Ä™': 'ę', 'Ä—': 'ė', 'Ä¯': 'į', 'Å¡': 'š', 'Å³': 'ų', 'Å«': 'ū', 'Å¾': 'ž',
    'Ä„': 'Ą', 'ÄŒ': 'Č', 'Ä˜': 'Ę', 'Ä–': 'Ė', 'Ä®': 'Į', 'Å ': 'Š', 'Å²': 'Ų', 'Åª': 'Ū', 'Å½': 'Ž',
    'â€“': '–', 'â€”': '—', 'â€ž': '„', 'â€œ': '“', 'â€™': '’'
}
for old, new in replacements.items():
    text = text.replace(old, new)
with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(text)
print('Fixed encoding and spacing')
