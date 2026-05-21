import re

path = r'c:\Users\BmiSs\Desktop\MATH\AImath\frontend\src\components\Practice.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace practiceMode checks with selectedTrack
content = content.replace("practiceMode === 'olympiad'", "selectedTrack === 'olympiad'")
content = content.replace("practiceMode === 'curriculum'", "selectedTrack === 'curriculum'")
content = content.replace("setPracticeMode('curriculum')", "setSelectedTrack('curriculum')")
content = content.replace("setPracticeMode('olympiad')", "setSelectedTrack('olympiad')")

# Replace old practice-tabs block with the track-toggle-bar
old_tabs_pattern = r'\{hasOlympiad && \(\s*<div className="practice-tabs">\s*<button[\s\S]*?Bendroji programa\s*</button>\s*<button[\s\S]*?Olimpiadinis stiprinimas\s*</button>\s*</div>\s*\)\}'

new_toggle_bar = '''<div className="track-toggle-bar">
        <button className={selectedTrack === 'curriculum' ? 'active' : ''} onClick={() => setSelectedTrack('curriculum')}>Mokyklinis turinys</button>
        <button className={selectedTrack === 'olympiad' ? 'active' : ''} onClick={() => setSelectedTrack('olympiad')}>Olimpiadinis turinys</button>
      </div>'''

content = re.sub(old_tabs_pattern, new_toggle_bar, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated Practice.tsx')
