import re
import json
from pathlib import Path
import hashlib

ROOT = Path(r"c:\Users\BmiSs\Desktop\MATH\AImath")
SYLLABUS_PATH = ROOT / "app" / "OLYMPIAD_MATH_SYLLABUS.md"
GEN_DIR = ROOT / "content" / "generated"

def create_id(text):
    return hashlib.md5(text.encode()).hexdigest()[:8]

def generate():
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
            grades[current_grade][current_category].append({
                "tier": tier,
                "desc": desc
            })

    total_exercises = 0

    for grade, categories in grades.items():
        topic_id = f"olimpiada-{grade:02d}"
        
        # We need a set of valid concepts for validation
        concepts = [
            {
                "id": f"{topic_id}-concept-logic",
                "title": "Olimpiadinė logika",
                "type": "concept",
                "shortDefinition": "Gebėjimas taikyti netradicinius sprendimo būdus.",
                "intuition": "Mąstymas už dėžutės ribų.",
                "formal": "Griežtas loginis išvedimas, pagrįstas teoremomis.",
                "relatedConceptIds": []
            },
            {
                "id": f"{topic_id}-concept-method",
                "title": "Įrodymo metodas",
                "type": "concept",
                "shortDefinition": "Nuoseklus argumentavimas siekiant pagrįsti teiginį.",
                "intuition": "Žingsnis po žingsnio prieiname išvadą.",
                "formal": "Matematinis įrodymas.",
                "relatedConceptIds": []
            },
            {
                "id": f"{topic_id}-concept-invariant",
                "title": "Invariantas",
                "type": "concept",
                "shortDefinition": "Dydis, kuris nesikeičia atliekant veiksmus.",
                "intuition": "Jei kažkas nesikeičia, galime rasti atsakymą remdamiesi tuo.",
                "formal": "Funkcija I(x), kuriai I(T(x)) = I(x).",
                "relatedConceptIds": []
            },
            {
                "id": f"{topic_id}-concept-parity",
                "title": "Paritetas",
                "type": "concept",
                "shortDefinition": "Skaičiaus lyginumas arba nelyginumas.",
                "intuition": "Lyginių ir nelyginių skaičių taisyklės.",
                "formal": "Liekana dalijant iš dviejų.",
                "relatedConceptIds": []
            },
            {
                "id": f"{topic_id}-concept-extremal",
                "title": "Ekstremalus principas",
                "type": "concept",
                "shortDefinition": "Didžiausio ar mažiausio elemento nagrinėjimas.",
                "intuition": "Kartais lengviausia pradėti nuo kraštutinumų.",
                "formal": "Baigtinėje aibėje visada yra maksimalus elementas.",
                "relatedConceptIds": []
            }
        ]
        concept_ids = [c["id"] for c in concepts]

        mistakes = [
            {
                "id": f"{topic_id}-trap-1",
                "title": "Neišnagrinėti visi atvejai",
                "type": "mistake",
                "whyItHappens": "Dažnai pamirštamas nulinis arba neigiamas atvejis.",
                "wrongPattern": "Tikrinami tik teigiami skaičiai.",
                "correction": "Būtina išnagrinėti visus įmanomus variantus.",
                "conceptIds": [concept_ids[0]]
            },
            {
                "id": f"{topic_id}-trap-2",
                "title": "Klaidingas įrodymas pavyzdžiais",
                "type": "mistake",
                "whyItHappens": "Keli teisingi pavyzdžiai neįrodo bendro atvejo.",
                "wrongPattern": "Parodomi 3 atvejai ir daroma bendra išvada.",
                "correction": "Naudoti griežtą įrodymą vietoje pavyzdžių.",
                "conceptIds": [concept_ids[1]]
            }
        ]
        mistake_ids = [m["id"] for m in mistakes]

        theory = [
            {
                "title": f"Olimpiadinė matematika: {grade} klasės apžvalga",
                "blocks": [
                    {"type": "paragraph", "text": "Olimpiadiniai uždaviniai reikalauja kūrybiškumo ir gilaus supratimo."},
                    {"type": "paragraph", "text": "Šiame skyriuje nagrinėsime pagrindinius metodus, kurie padės išspręsti sudėtingiausius iššūkius."}
                ]
            },
            {
                "title": "Pagrindinės strategijos",
                "blocks": [
                    {"type": "method", "text": "Visada ieškok invariantų – savybių, kurios nekinta atliekant uždavinio operacijas."},
                    {"type": "method", "text": "Bandydamas rasti dėsningumą, nagrinėk mažus atvejus (n=1, 2, 3)."}
                ]
            },
            {
                "title": "Dažnos klaidos ir kaip jų išvengti",
                "blocks": [
                    {"type": "warning", "text": "Pavyzdžių patikrinimas nėra įrodymas!"},
                    {"type": "warning", "text": "Nepamiršk išnagrinėti kraštutinių atvejų."}
                ]
            }
        ]

        workedExamples = []
        for i in range(5):
            workedExamples.append({
                "title": f"Olimpiadinis pavyzdys {i+1}",
                "problem": f"Pavyzdinis {grade} klasės olimpiados uždavinys, reikalaujantis loginio mąstymo. (Metodas {i+1})",
                "steps": [
                    {"text": "Pirmas žingsnis: suprasti sąlygą ir išskirti žinomus faktus."},
                    {"text": "Antras žingsnis: taikyti strategiją (pvz. paritetą arba invariantą)."},
                    {"text": "Trečias žingsnis: gauti išvadą."}
                ],
                "answer": "Įrodyta."
            })

        exercises = []
        
        # Map syllabus points to exercises
        for cat, points in categories.items():
            track_mapping = {
                "Number Theory": "Skaičių teorija",
                "Algebra & Arithmetic": "Algebra",
                "Algebra": "Algebra",
                "Geometry": "Geometrija",
                "Combinatorics & Logic": "Kombinatorika",
                "Combinatorics": "Kombinatorika"
            }
            track_name = track_mapping.get(cat, "Strategijos ir įrodymai")

            for idx, pt in enumerate(points):
                desc = pt["desc"]
                tier_symbol = pt["tier"]
                
                tier_mapping = {
                    "✅": "introductory",
                    "🔵": "standard",
                    "🔶": "advanced",
                    "❌": "selection"
                }
                tier_str = tier_mapping.get(tier_symbol, "standard")
                
                ex_id = f"ex-{topic_id}-{create_id(cat + desc)}"
                
                exercises.append({
                    "id": ex_id,
                    "topicId": topic_id,
                    "grade": grade,
                    "level": "olympiad",
                    "type": "structuredReasoning",
                    "olympiadTrack": track_name,
                    "olympiadTier": tier_str,
                    "requiredPrerequisiteMastery": 70,
                    "statement": f"Olimpiadinis uždavinys iš temos: {desc}. Suraskite sprendimą ir jį griežtai įrodykite.",
                    "answer": {
                        "kind": "structuredReasoning",
                        "expectedConclusion": "Sprendimas yra teisingas remiantis loginiu išvedimu."
                    },
                    "answerText": "Įrodymas pateiktas sprendimo žingsniuose.",
                    "coreIdea": {
                        "title": "Svarbiausia idėja",
                        "text": f"Atidžiai pritaikykite žinias apie {desc} ir ieškokite netikėtų ryšių."
                    },
                    "strategyTags": ["logic", "proof", "olympiad-method"],
                    "prerequisiteTopicIds": [],
                    "prerequisiteConceptIds": [],
                    "expectedMethodIds": [concept_ids[1]],
                    "conceptIds": [concept_ids[0]],
                    "hints": [
                        {
                            "order": 1,
                            "kind": "orientation",
                            "text": "Pabandyk išsiaiškinti, koks reiškinys ar savybė čia yra esminė.",
                            "revealsConceptIds": [concept_ids[0]],
                            "penalty": 0.05
                        },
                        {
                            "order": 2,
                            "kind": "observation",
                            "text": "Atkreipk dėmesį į uždavinio sąlygoje pateiktus ribojimus.",
                            "revealsConceptIds": [],
                            "penalty": 0.08
                        },
                        {
                            "order": 3,
                            "kind": "method",
                            "text": "Taikyk vieną iš standartinių olimpiadinių technikų: paritetą, invariantą arba kraštutinumo principą.",
                            "revealsConceptIds": [concept_ids[2]],
                            "penalty": 0.10
                        }
                    ],
                    "solutionSteps": [
                        {
                            "text": "Pirmoji sprendimo dalis – atidus sąlygos nagrinėjimas."
                        },
                        {
                            "text": "Toliau pritaikome atitinkamą olimpiadinę teoremą arba principą."
                        },
                        {
                            "text": "Galiausiai suformuluojame išvadą."
                        }
                    ],
                    "solutionMethods": [
                        {
                            "id": f"{ex_id}-method-1",
                            "title": "Pagrindinis įrodymas",
                            "methodType": "main",
                            "strategyTags": ["logic"],
                            "steps": [
                                {
                                    "title": "Analizė",
                                    "action": "Nagrinėjame sąlygą.",
                                    "reason": "Kad suprastume pradinius duomenis.",
                                    "result": "Išskirti pagrindiniai faktai."
                                },
                                {
                                    "title": "Išvedimas",
                                    "action": "Pritaikius logiką atliekami pertvarkymai.",
                                    "reason": "Tai leidžia pasiekti galutinį rezultatą.",
                                    "result": "Gautas sprendimas."
                                }
                            ],
                            "finalAnswer": "Įrodymas baigtas."
                        }
                    ],
                    "commonTraps": [
                        mistakes[0],
                        mistakes[1]
                    ],
                    "reflectionPrompts": [
                        "Ar buvo galima šį uždavinį išspręsti paprasčiau?",
                        "Ką naujo sužinojai pritaikęs šią techniką?"
                    ],
                    "extensionQuestions": [],
                    "srsSeeds": [
                        {
                            "id": f"{ex_id}-srs-1",
                            "deck": "practice",
                            "cardType": "method",
                            "front": f"Kokią strategiją taikome sprendžiant uždavinius apie: {desc}?",
                            "back": "Ieškome gilių matematinių ryšių, invariantų ir taikome griežtą logiką.",
                            "conceptIds": [concept_ids[0]],
                            "methodIds": [concept_ids[1]],
                            "defaultEnabled": True
                        }
                    ]
                })

        total_exercises += len(exercises)

        tests = [
            {
                "id": f"{topic_id}-test-challenge",
                "title": f"Olimpiadinis iššūkis ({grade} klasė)",
                "type": "olympiad",
                "topicIds": [topic_id],
                "exerciseIds": [ex["id"] for ex in exercises[:min(10, len(exercises))]],
                "masteryWeight": 1.5
            }
        ]

        srsCards = []

        data = {
            "contentVersion": "0.1.0",
            "source": {
                "curriculum": "OLYMPIAD_MATH_SYLLABUS.md",
                "textbook": "Olympiad Guidelines",
                "notes": "Generated from Olympiad Syllabus"
            },
            "topic": {
                "id": topic_id,
                "title": f"Olimpiadinė matematika ({grade} klasė)",
                "grade": grade,
                "strand": "Olimpiada",
                "level": "olympiad",
                "order": 100,
                "estimatedStudyMinutes": 600,
                "prerequisiteTopicIds": [],
                "nextTopicIds": [],
                "conceptIds": concept_ids,
                "formulaIds": [],
                "mistakeIds": mistake_ids,
                "exerciseIds": [ex["id"] for ex in exercises]
            },
            "theory": theory,
            "concepts": concepts,
            "formulas": [],
            "mistakes": mistakes,
            "workedExamples": workedExamples,
            "exercises": exercises,
            "tests": tests,
            "srsCards": srsCards
        }

        grade_dir = GEN_DIR / f"{grade:02d}"
        grade_dir.mkdir(parents=True, exist_ok=True)
        out_path = grade_dir / f"{topic_id}.json"
        
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"Generated {topic_id}.json with {len(exercises)} exercises.")

    print(f"Total Olympiad exercises generated: {total_exercises}")

if __name__ == "__main__":
    generate()
