import os

def cleanup_file(path, end_marker):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    idx = content.find(end_marker)
    if idx != -1:
        # For systems.ts, we want the LAST occurrence of a specific block or just a cleaner end
        if path == 'frontend/src/systems.ts':
             # Find the last valid function
             marker = 'return tests.filter((test) => test.topicIds.includes(topicId));\n}'
             idx = content.find(marker)
             if idx != -1:
                 new_content = content[:idx + len(marker)]
                 with open(path, 'w', encoding='utf-8') as f:
                     f.write(new_content)
                 print(f"Cleaned up {path}")
                 return

        new_content = content[:idx + len(end_marker)]
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned up {path}")

cleanup_file('frontend/src/systems.ts', '') # Custom logic inside
