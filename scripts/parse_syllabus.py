import re
from pathlib import Path

ROOT = Path(r"c:\Users\BmiSs\Desktop\MATH\AImath")
SYLLABUS_PATH = ROOT / "app" / "OLYMPIAD_MATH_SYLLABUS.md"

def parse_syllabus():
    content = SYLLABUS_PATH.read_text(encoding="utf-8")
    grades = {}
    current_grade = None
    current_category = None
    
    lines = content.splitlines()
    for line in lines:
        if line.startswith("## Cross-Grade"):
            break
        grade_match = re.match(r"^##\s+Grade\s+(\d+)", line)
        if grade_match:
            current_grade = int(grade_match.group(1))
            grades[current_grade] = {}
            current_category = None
            continue
            
        category_match = re.match(r"^###\s+(.*)", line)
        if category_match and current_grade is not None:
            current_category = category_match.group(1).strip()
            # Clean up category names
            if current_category not in ["Number Theory", "Algebra & Arithmetic", "Algebra", "Geometry", "Combinatorics & Logic", "Combinatorics"]:
                current_category = None
            else:
                grades[current_grade][current_category] = []
            continue
            
        point_match = re.match(r"^-\s+([✅🔵🔶❌])\s+(.*)", line)
        if point_match and current_grade is not None and current_category is not None:
            tier = point_match.group(1)
            desc = point_match.group(2).strip()
            grades[current_grade][current_category].append((tier, desc))
            
    total_all = 0
    for grade, categories in sorted(grades.items()):
        print(f"Grade {grade}:")
        total = 0
        for cat, items in categories.items():
            print(f"  {cat}: {len(items)} items")
            total += len(items)
        print(f"  Total items: {total}")
        total_all += total
    print(f"Grand Total Syllabus Points: {total_all}")

if __name__ == "__main__":
    parse_syllabus()
