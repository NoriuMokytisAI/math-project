import json
import re
import sys

# Reconfigure stdout to use UTF-8
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Read frontend content files to count exercises by topic and level
def load_js_object(filename, var_name):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # find where "export const name = {" or "export const name = [" starts
    match = re.search(r'export\s+const\s+' + var_name + r'\s*=\s*(.*?);$', content, re.DOTALL | re.MULTILINE)
    if not match:
        match = re.search(r'const\s+' + var_name + r'\s*=\s*(.*?);$', content, re.DOTALL | re.MULTILINE)
    
    if not match:
        start_idx = content.find('=')
        if start_idx == -1:
            return None
        js_str = content[start_idx+1:].strip()
        if js_str.endswith(';'):
            js_str = js_str[:-1].strip()
    else:
        js_str = match.group(1).strip()
    
    js_str = re.sub(r',\s*([\]}])', r'\1', js_str)
    try:
        env = {'true': True, 'false': False, 'null': None}
        return eval(js_str, env)
    except Exception as e:
        print(f"Eval failed for {filename}: {e}")
        try:
            return json.loads(js_str)
        except Exception as e2:
            return None

topics = load_js_object('frontend/src/generated/topics.generated.js', 'topics')

all_exercises = []
for i in range(5, 13):
    exs = load_js_object(f'frontend/src/generated/exercises_{i:02d}.generated.js', f'exercises_{i:02d}')
    if exs:
        all_exercises.extend(exs)

print(f"Total topics loaded: {len(topics) if topics else 0}")
print(f"Total exercises loaded: {len(all_exercises)}")

# Count olympiad vs standard exercises by topic
topic_stats = {}
for ex in all_exercises:
    t_id = ex.get('topicId')
    lvl = ex.get('level')
    if t_id not in topic_stats:
        topic_stats[t_id] = {'school': 0, 'olympiad': 0}
    if lvl == 'olympiad':
        topic_stats[t_id]['olympiad'] += 1
    else:
        topic_stats[t_id]['school'] += 1

print("\nTopic Stats with Olympiad exercises:")
count = 0
for t_id, stats in topic_stats.items():
    topic_info = topics.get(t_id, {})
    title = topic_info.get('title', 'Unknown')
    t_lvl = topic_info.get('level', 'curriculum')
    if stats['olympiad'] > 0:
        print(f"- {t_id} ({t_lvl}) [{title}]: school={stats['school']}, olympiad={stats['olympiad']}")
        count += 1

print(f"\nTotal topics with at least one olympiad exercise: {count}")
