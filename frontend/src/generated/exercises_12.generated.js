// Generated split content chunk. Source: scripts/build_frontend_content.py
export const exercises_12 = [
  {
    "id": "atsit-ex-001",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Skirstinio lentelėje p1=0.2, p2=0.5. Kokia turi būti p3 reikšmė, kad tai būtų pilnas skirstinys?",
    "answer": "0.3",
    "acceptedAnswers": [
      "0.3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skirstinio-lentele"
    ],
    "hints": [
      "Tikimybių suma turi būti lygi 1."
    ],
    "solution": "1 - (0.2 + 0.5) = 0.3.",
    "alternate": "",
    "estimatedSeconds": 20
  },
  {
    "id": "atsit-ex-002",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuokite E(X), jei X įgyja reikšmę 10 su p=0.4 ir 20 su p=0.6.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "matematine-viltis"
    ],
    "hints": [
      "Dauginkite reikšmes iš jų tikimybių ir sudėkite."
    ],
    "solution": "10 * 0.4 + 20 * 0.6 = 4 + 12 = 16.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "atsit-ex-003",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Raskite standartinį nuokrypį σ, jei dispersija Var(X) = 25.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "standartinis-nuokrypis"
    ],
    "hints": [
      "Ištraukite šaknį iš dispersijos."
    ],
    "solution": "sqrt(25) = 5.",
    "alternate": "",
    "estimatedSeconds": 15
  },
  {
    "id": "atsit-ex-004",
    "topicId": "atsitiktiniai-dydziai",
    "type": "multipleChoice",
    "level": "easy",
    "statement": "Kuris iš šių dydžių yra diskretusis?",
    "answer": "Vaikų skaičius šeimoje",
    "acceptedAnswers": [
      "Vaikų skaičius šeimoje"
    ],
    "answerTolerance": 0,
    "choices": [
      "Žmogaus ūgis",
      "Vaikų skaičius šeimoje",
      "Oro temperatūra",
      "Automobilio greitis"
    ],
    "concepts": [
      "diskretusis-atsitiktinis-dydis"
    ],
    "hints": [
      "Diskretūs dydžiai įgyja tik sveikus arba atskirus skaičius."
    ],
    "solution": "Vaikų skaičius gali būti tik 0, 1, 2... tai diskretus dydis.",
    "alternate": "",
    "estimatedSeconds": 25
  },
  {
    "id": "atsit-ex-005",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite dispersiją, jei E(X) = 2, o E(X^2) = 10.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "dispersija"
    ],
    "hints": [
      "Var(X) = E(X^2) - (E(X))^2."
    ],
    "solution": "10 - 2^2 = 10 - 4 = 6.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "atsit-ex-006",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Moneta metama 3 kartus. Kokia tikimybė, kad herbas atsivers lygiai 1 kartą?",
    "answer": "0.375",
    "acceptedAnswers": [
      "0.375"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "bernulio-bandymai"
    ],
    "hints": [
      "Naudokite Bernulio formulę: n=3, k=1, p=0.5."
    ],
    "solution": "C(3, 1) * 0.5^1 * 0.5^2 = 3 * 0.125 = 0.375.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "atsit-ex-007",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "X: 1(0.1), 2(0.2), 3(0.7). Raskite E(X).",
    "answer": "2.6",
    "acceptedAnswers": [
      "2.6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "matematine-viltis"
    ],
    "hints": [
      "1*0.1 + 2*0.2 + 3*0.7."
    ],
    "solution": "0.1 + 0.4 + 2.1 = 2.6.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "atsit-ex-008",
    "topicId": "atsitiktiniai-dydziai",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kokia yra Gauso kreivės simetrijos ašis normaliajame skirstinyje N(μ, σ²)?",
    "answer": "x = μ",
    "acceptedAnswers": [
      "x = μ"
    ],
    "answerTolerance": 0,
    "choices": [
      "x = 0",
      "x = μ",
      "x = σ",
      "x = 1"
    ],
    "concepts": [
      "gauso-kreive",
      "normalusis-skirstinys"
    ],
    "hints": [
      "Simetrija visada eina per vidurkį."
    ],
    "solution": "Normalioji kreivė yra simetriška vidurkio μ atžvilgiu.",
    "alternate": "",
    "estimatedSeconds": 20
  },
  {
    "id": "atsit-ex-009",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Bernulio bandyme sėkmės tikimybė p=0.4. Atliekami 2 bandymai. Raskite sėkmių skaičiaus X dispersiją Var(X).",
    "answer": "0.48",
    "acceptedAnswers": [
      "0.48"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "dispersija",
      "bernulio-bandymai"
    ],
    "hints": [
      "Bernulio skirstinio (binominio) dispersija yra Var(X) = n * p * q.",
      "Čia n=2, p=0.4, q=0.6."
    ],
    "solution": "2 * 0.4 * 0.6 = 0.48.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "atsit-ex-010",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Atsitiktinis dydis X įgyja reikšmes -1, 0, 1 su lygiomis tikimybėmis. Raskite E(X^2).",
    "answer": "0.6667",
    "acceptedAnswers": [
      "0.6667"
    ],
    "answerTolerance": 0.001,
    "choices": [],
    "concepts": [
      "matematine-viltis"
    ],
    "hints": [
      "Kiekviena tikimybė p = 1/3.",
      "E(X^2) = (-1)^2 * (1/3) + 0^2 * (1/3) + 1^2 * (1/3)."
    ],
    "solution": "1/3 + 0 + 1/3 = 2/3 ≈ 0.6667.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "atsit-ex-011",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kokia tikimybė, kad normaliojo skirstinio reikšmė bus DIDESNĖ už vidurkį μ?",
    "answer": "0.5",
    "acceptedAnswers": [
      "0.5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "normalusis-skirstinys"
    ],
    "hints": [
      "Kreivė yra simetriška."
    ],
    "solution": "Pusė ploto yra kairėje, pusė – dešinėje nuo vidurkio. Todėl P(X > μ) = 0.5.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "atsit-ex-012",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Loterijoje bilietas kainuoja 2 eurus. Tikimybė laimėti 10 eurų yra 0.1, o 0 eurų – 0.9. Kokia yra šios loterijos matematinė viltis (tikėtinas pelnas žaidėjui, atėmus bilieto kainą)?",
    "answer": "-1",
    "acceptedAnswers": [
      "-1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "matematine-viltis"
    ],
    "hints": [
      "Pirma raskite tikėtiną laimėjimą: 10 * 0.1 + 0 * 0.9.",
      "Atimkite išlaidas (bilieto kainą)."
    ],
    "solution": "Tikėtinas laimėjimas = 1. Pelno viltis = 1 - 2 = -1.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "atsit-ex-013",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite C(4, 2) * 0.1^2 * 0.9^2. (Tai dalis Bernulio skaičiavimo).",
    "answer": "0.0486",
    "acceptedAnswers": [
      "0.0486"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "C(4, 2) = 6."
    ],
    "solution": "6 * 0.01 * 0.81 = 0.0486.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "atsit-ex-014",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Jei X vidurkis yra 5, koks bus dydžio Y = 2X + 3 vidurkis?",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "matematine-viltis"
    ],
    "hints": [
      "Naudokite savybę E(aX + b) = a*E(X) + b."
    ],
    "solution": "2 * 5 + 3 = 13.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "atsit-ex-015",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Normaliojo skirstinio parametrai μ=50, σ=5. Kokia tikimybė, kad X įgis reikšmę tarp 45 ir 55?",
    "answer": "0.68",
    "acceptedAnswers": [
      "0.68"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "normalusis-skirstinys"
    ],
    "hints": [
      "Tai vieno standartinio nuokrypio intervalas."
    ],
    "solution": "Intervalas [μ-σ, μ+σ] visada apima apie 68% tikimybės.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "atsit-ex-016",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kauliukas metamas 100 kartų. Kokia yra iškritusių 'šešetų' skaičiaus matematinė viltis?",
    "answer": "16.6667",
    "acceptedAnswers": [
      "16.6667"
    ],
    "answerTolerance": 0.01,
    "choices": [],
    "concepts": [
      "matematine-viltis",
      "bernulio-bandymai"
    ],
    "hints": [
      "Binominio skirstinio E(X) = n * p.",
      "n=100, p=1/6."
    ],
    "solution": "100 / 6 = 16.6667.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "atsit-ex-017",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Atsitiktinis dydis X: 0(p), 1(2p), 2(0.4). Raskite p.",
    "answer": "0.2",
    "acceptedAnswers": [
      "0.2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skirstinio-lentele"
    ],
    "hints": [
      "p + 2p + 0.4 = 1.",
      "Išspręskite 3p = 0.6."
    ],
    "solution": "3p = 0.6 => p = 0.2.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "atsit-ex-018",
    "topicId": "atsitiktiniai-dydziai",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Jei visos atsitiktinio dydžio reikšmės padidės 5-iais, kaip pasikeis jo dispersija?",
    "answer": "Nepasikeis",
    "acceptedAnswers": [
      "Nepasikeis"
    ],
    "answerTolerance": 0,
    "choices": [
      "Padidės 5-iais",
      "Padidės 25-iais",
      "Nepasikeis",
      "Sumažės"
    ],
    "concepts": [
      "dispersija"
    ],
    "hints": [
      "Dispersija matuoja sklaidą (atstumus tarp reikšmių)."
    ],
    "solution": "Visiems nariams pajudėjus per tą patį atstumą, atstumai tarp jų nesikeičia. Var(X + c) = Var(X).",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "atsit-ex-019",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite Var(X), jei X įgyja reikšmes 0 ir 1 su tikimybėmis 0.5.",
    "answer": "0.25",
    "acceptedAnswers": [
      "0.25"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "dispersija"
    ],
    "hints": [
      "E(X) = 0.5. E(X^2) = 0.5."
    ],
    "solution": "0.5 - 0.5^2 = 0.5 - 0.25 = 0.25.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "atsit-ex-020",
    "topicId": "atsitiktiniai-dydziai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kokia tikimybė, kad sėkmės nebus nei karto (k=0) per 5 Bernulio bandymus, jei p=0.1?",
    "answer": "0.59049",
    "acceptedAnswers": [
      "0.59049"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "P = q^n = (1 - p)^n."
    ],
    "solution": "0.9^5 = 0.59049.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-001",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Stačiakampio kraštinės 7 ir 9. Rask perimetrą.",
    "answer": "32",
    "acceptedAnswers": [
      "32"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-002",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kvadrato kraštinė 6. Rask perimetrą.",
    "answer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-003",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Trikampio kraštinės 5, 7 ir 8. Rask perimetrą.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-004",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Lygiagretainio kraštinės 8 ir 5. Rask perimetrą.",
    "answer": "26",
    "acceptedAnswers": [
      "26"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-005",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Stačiakampis 8x5.",
    "answer": "40",
    "acceptedAnswers": [
      "40"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-006",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Trikampis pagrindas 10, aukštinė 6.",
    "answer": "30",
    "acceptedAnswers": [
      "30"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-007",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Kvadratas kraštinė 7.",
    "answer": "49",
    "acceptedAnswers": [
      "49"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-008",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Apskritimas r=5, pi~3.14.",
    "answer": "78.5",
    "acceptedAnswers": [
      "78.5"
    ],
    "answerTolerance": 0.01,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-009",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kuri kraštinė stačiajame trikampyje yra įžambinė?",
    "answer": "Priešinga stačiajam kampui",
    "acceptedAnswers": [
      "Priešinga stačiajam kampui"
    ],
    "answerTolerance": 0,
    "choices": [
      "Trumpiausia",
      "Priešinga stačiajam kampui",
      "Kraštinė prie pagrindo",
      "Bet kuri"
    ],
    "concepts": [
      "pitagoro-teorema"
    ],
    "hints": [
      "Ji yra prieš stačiajį kampą."
    ],
    "solution": "Įžambinė yra prieš 90° kampą.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-010",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stačiajame trikampyje vienas statinis 9, įžambinė 15. Rask kitą statinį.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "pitagoro-teorema"
    ],
    "hints": [
      "Taikome Pitagoro teoremą.",
      "Skaičiuojame 15²-9²."
    ],
    "solution": "c²=a²+b². x=12.",
    "alternate": "",
    "estimatedSeconds": 95
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-011",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-012",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-013",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-014",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-015",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-016",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-017",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-018",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-019",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "briaunainiai-sukiniai-ir-pjuviai-ex-020",
    "topicId": "briaunainiai-sukiniai-ir-pjuviai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-001",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuok a_3, kai a_n=2n+1.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Įstatyk n=3."
    ],
    "solution": "a_3=7",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-002",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 2.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-003",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 3.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-004",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 4.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-005",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-006",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-007",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-008",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-009",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-010",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-011",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-012",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-013",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-014",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-015",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-016",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-017",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-018",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-019",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "isvestines-taisykles-ir-optimizavimas-ex-020",
    "topicId": "isvestines-taisykles-ir-optimizavimas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kombi-ex-001",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuokite 4!.",
    "answer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "faktorialas"
    ],
    "hints": [
      "Faktorialas yra sandauga nuo 1 iki n.",
      "Sudauginkite 1 * 2 * 3 * 4."
    ],
    "solution": "4! = 1 * 2 * 3 * 4 = 24.",
    "alternate": "",
    "estimatedSeconds": 20
  },
  {
    "id": "kombi-ex-002",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kiek skirtingų būdų yra sudėlioti žodžio 'MAMA' raides? (Tarkime, kad visos raidės yra skirtingos: M1, A1, M2, A2).",
    "answer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "keliniai"
    ],
    "hints": [
      "Tai yra kėliniai iš 4 elementų."
    ],
    "solution": "P_4 = 4! = 24.",
    "alternate": "",
    "estimatedSeconds": 25
  },
  {
    "id": "kombi-ex-003",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Parduotuvėje yra 5 rūšių obuoliai ir 3 rūšių kriaušės. Kiek yra būdų pasirinkti vieną vaisių (obuolį arba kriaušę)?",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "sudeties-taisykle"
    ],
    "hints": [
      "Naudokite sudėties taisyklę."
    ],
    "solution": "5 + 3 = 8.",
    "alternate": "",
    "estimatedSeconds": 15
  },
  {
    "id": "kombi-ex-004",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuokite derinių skaičių C(5, 2).",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "deriniai"
    ],
    "hints": [
      "Naudokite formulę n! / (k! * (n-k)!)."
    ],
    "solution": "5! / (2! * 3!) = (5 * 4) / 2 = 10.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "kombi-ex-005",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuokite gretinių skaičių A(4, 2).",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "gretiniai"
    ],
    "hints": [
      "Gretinių formulė n! / (n-k)!."
    ],
    "solution": "4! / (4-2)! = 4! / 2! = 4 * 3 = 12.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "kombi-ex-006",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kiek galima sudaryti keturženklių skaičių, naudojant tik skaitmenis 1, 2, 3, 4, kai skaitmenys negali kartotis?",
    "answer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "keliniai"
    ],
    "hints": [
      "Tai yra visų 4 skaitmenų sukeitimas vietomis (kėliniai)."
    ],
    "solution": "P_4 = 4! = 24.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "kombi-ex-007",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Krepšinio komandoje yra 12 žaidėjų. Kiek būdų yra išrinkti startinį penketuką (5 žaidėjus)?",
    "answer": "792",
    "acceptedAnswers": [
      "792"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "deriniai"
    ],
    "hints": [
      "Ar svarbi žaidėjų eilė juos išrenkant? Ne.",
      "Naudokite C(12, 5)."
    ],
    "solution": "C(12, 5) = 12! / (5! * 7!) = (12 * 11 * 10 * 9 * 8) / (5 * 4 * 3 * 2 * 1) = 792.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "kombi-ex-008",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite (10! + 9!) / 9!.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "faktorialas"
    ],
    "hints": [
      "Iškelkite 9! prieš skliaustus skaitiklyje."
    ],
    "solution": "(9!(10 + 1)) / 9! = 11.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kombi-ex-009",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Niutono binomo (a + b)^5 skleidinyje raskite nario a^3 * b^2 koeficientą.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "binominis-koeficientas",
      "niutono-binomas"
    ],
    "hints": [
      "Koeficientas yra derinių skaičius C(n, k), kur k yra b laipsnis.",
      "Apskaičiuokite C(5, 2)."
    ],
    "solution": "Koeficientas yra C(5, 2) = 10.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "kombi-ex-010",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kiek yra triženklių skaičių, kurių visi skaitmenys skirtingi, sudarytų iš {1, 2, 3, 4, 5}?",
    "answer": "60",
    "acceptedAnswers": [
      "60"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "gretiniai"
    ],
    "hints": [
      "Naudokite gretinių formulę A(5, 3)."
    ],
    "solution": "A(5, 3) = 5 * 4 * 3 = 60.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "kombi-ex-011",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite laisvąjį narį (be x) skleidinyje (x + 1/x)^4.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "niutono-binomas",
      "binominis-koeficientas"
    ],
    "hints": [
      "Narys be x yra tas, kur x ir 1/x laipsniai susiprastina.",
      "Tai nutinka viduriniajam nariui, kai x^2 * (1/x)^2.",
      "Raskite C(4, 2)."
    ],
    "solution": "Laisvasis narys yra C(4, 2) * x^2 * (1/x)^2 = 6 * 1 = 6.",
    "alternate": "",
    "estimatedSeconds": 90
  },
  {
    "id": "kombi-ex-012",
    "topicId": "kombinatorika-ir-binomas",
    "type": "multipleChoice",
    "level": "hard",
    "statement": "Apskaičiuokite sumą C(5, 0) + C(5, 1) + C(5, 2) + C(5, 3) + C(5, 4) + C(5, 5).",
    "answer": "32",
    "acceptedAnswers": [
      "32"
    ],
    "answerTolerance": 0,
    "choices": [
      "16",
      "32",
      "25",
      "64"
    ],
    "concepts": [
      "niutono-binomas"
    ],
    "hints": [
      "Visų n-tosios eilės derinių suma lygi 2^n."
    ],
    "solution": "Suma lygi 2^5 = 32.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kombi-ex-013",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Iš 5 vyrų ir 4 moterų reikia sudaryti komisiją iš 3 žmonių, kurioje būtų bent 2 moterys. Kiek yra būdų?",
    "answer": "34",
    "acceptedAnswers": [
      "34"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "deriniai",
      "sudeties-taisykle",
      "daugybos-taisykle"
    ],
    "hints": [
      "Suskaidykite į atvejus: 2 moterys + 1 vyras ARBA 3 moterys.",
      "2 moterys ir 1 vyras: C(4, 2) * C(5, 1).",
      "3 moterys: C(4, 3)."
    ],
    "solution": "Atvejis 1: C(4, 2) * C(5, 1) = 6 * 5 = 30. Atvejis 2: C(4, 3) = 4. Iš viso 30 + 4 = 34.",
    "alternate": "",
    "estimatedSeconds": 100
  },
  {
    "id": "kombi-ex-014",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kiek yra būdų surikiuoti 6 žmones į eilę, jei du draugai būtinai nori stovėti greta?",
    "answer": "240",
    "acceptedAnswers": [
      "240"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "keliniai"
    ],
    "hints": [
      "Suriškite draugus į vieną 'bloką'. Dabar turite 5 elementus.",
      "Apskaičiuokite 5!.",
      "Bloko viduje draugai gali stovėti 2 būdais. Padauginkite iš 2."
    ],
    "solution": "5! * 2! = 120 * 2 = 240.",
    "alternate": "",
    "estimatedSeconds": 80
  },
  {
    "id": "kombi-ex-015",
    "topicId": "kombinatorika-ir-binomas",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Apskaičiuokite C(100, 98).",
    "answer": "4950",
    "acceptedAnswers": [
      "4950"
    ],
    "answerTolerance": 0,
    "choices": [
      "4950",
      "9900",
      "100",
      "5050"
    ],
    "concepts": [
      "deriniai"
    ],
    "hints": [
      "Naudokite savybę C(n, k) = C(n, n-k).",
      "Apskaičiuokite C(100, 2)."
    ],
    "solution": "C(100, 2) = (100 * 99) / 2 = 4950.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "kombi-ex-016",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kiek skirtingų variantų gali iškristi metant du standartinius lošimo kauliukus?",
    "answer": "36",
    "acceptedAnswers": [
      "36"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "daugybos-taisykle"
    ],
    "hints": [
      "Kiekvienas kauliukas turi 6 puses."
    ],
    "solution": "6 * 6 = 36.",
    "alternate": "",
    "estimatedSeconds": 20
  },
  {
    "id": "kombi-ex-017",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Raskite n, jei P(n) = 120.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "faktorialas",
      "keliniai"
    ],
    "hints": [
      "n! = 120. Koks tai skaičius?"
    ],
    "solution": "1*2*3*4*5 = 120.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "kombi-ex-018",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kiek Niutono binomo (x + y)^10 skleidinyje yra narių?",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "niutono-binomas"
    ],
    "hints": [
      "Narių skaičius skleidinyje yra n + 1."
    ],
    "solution": "10 + 1 = 11.",
    "alternate": "",
    "estimatedSeconds": 25
  },
  {
    "id": "kombi-ex-019",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Apskaičiuokite A(n, 2) = 20 sprendinį n.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "gretiniai"
    ],
    "hints": [
      "A(n, 2) = n * (n - 1).",
      "Išspręskite lygtį n^2 - n - 20 = 0."
    ],
    "solution": "n(n-1) = 20. Skaičiai 5 ir 4 tinka. Kadangi n turi būti teigiamas, n=5.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "kombi-ex-020",
    "topicId": "kombinatorika-ir-binomas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Iš 10 skirtingų gėlių reikia sudaryti puokštę. Kiek galima sudaryti skirtingų puokščių, kuriose būtų bent viena gėlė?",
    "answer": "1023",
    "acceptedAnswers": [
      "1023"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "deriniai"
    ],
    "hints": [
      "Kiekviena gėlė gali būti arba paimta, arba ne (2 galimybės).",
      "Iš viso 2^10 galimybių.",
      "Atimkite variantą, kai neimama nei viena gėlė."
    ],
    "solution": "2^10 - 1 = 1024 - 1 = 1023.",
    "alternate": "",
    "estimatedSeconds": 70
  },
  {
    "id": "kompleksiniai-skaiciai-ex-001",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask |3+4i|.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kompleksinis-skaicius",
      "modulis"
    ],
    "hints": [
      "Naudok Pitagoro idėją."
    ],
    "solution": "sqrt(3²+4²).",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "kompleksiniai-skaiciai-ex-002",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kas yra i²?",
    "answer": "-1",
    "acceptedAnswers": [
      "-1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kompleksinis-skaicius"
    ],
    "hints": [
      "Pagal apibrėžimą."
    ],
    "solution": "i²=-1.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "kompleksiniai-skaiciai-ex-003",
    "topicId": "kompleksiniai-skaiciai",
    "type": "expressionInput",
    "level": "medium",
    "statement": "Užrašyk kompleksinį skaičių su a=2, b=-3.",
    "answer": "2-3i",
    "acceptedAnswers": [
      "2-3i"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kompleksinis-skaicius"
    ],
    "hints": [
      "Forma a+bi."
    ],
    "solution": "a+bi forma.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "kompleksiniai-skaiciai-ex-004",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 4.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-005",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-006",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-007",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-008",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-009",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-010",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-011",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-012",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-013",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-014",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-015",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-016",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-017",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-018",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-019",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "kompleksiniai-skaiciai-ex-020",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Kompleksiniai skaičiai: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "olympiad-grade12-complex",
    "topicId": "kompleksiniai-skaiciai",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Tegul z yra toks kompleksinis skaičius, kad z + 1/z = 1. Raskite z^{72} + 1/z^{72} reikšmę.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kompleksinis-skaicius"
    ],
    "hints": [
      "Padauginkite lygtį z + 1/z = 1 iš z, kad gautumėte kvadratinę lygtį z^2 - z + 1 = 0.",
      "Padauginkite lygtį z^2 - z + 1 = 0 iš (z + 1). Gausite z^3 + 1 = 0.",
      "Vadinasi, z^3 = -1. Išreikškite z^{72} per z^3 laipsnį.",
      "z^{72} = (z^3)^{24} = (-1)^{24} = 1. Analogiškai apskaičiuokite 1/z^{72} ir sudėkite."
    ],
    "solution": "Duota lygtis: z + 1/z = 1. Padauginame abi puses iš z (kadangi z != 0), gauname: z^2 + 1 = z, arba z^2 - z + 1 = 0. Pastebime, kad sandauga (z + 1)(z^2 - z + 1) = z^3 + 1. Kadangi z^2 - z + 1 = 0, tai z^3 + 1 = 0, iš kur seka z^3 = -1. Mums reikia rasti z^{72} + 1/z^{72}. Kadangi 72 dalijasi iš 3 (72 = 3 * 24), galime užrašyti z^{72} = (z^3)^{24}. Kadangi z^3 = -1, turime: z^{72} = (-1)^{24} = 1. Panašiai 1/z^{72} = 1/1 = 1. Sudėję gauname: z^{72} + 1/z^{72} = 1 + 1 = 2.",
    "alternate": "",
    "estimatedSeconds": 150,
    "olympiadTrack": "Algebra",
    "olympiadTier": "introductory",
    "requiredPrerequisiteMastery": 50,
    "coreIdea": null,
    "strategyTags": [],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [],
    "hintsRaw": [
      {
        "order": 1,
        "text": "Padauginkite lygtį z + 1/z = 1 iš z, kad gautumėte kvadratinę lygtį z^2 - z + 1 = 0.",
        "revealsConceptIds": [
          "kompleksinis-skaicius"
        ],
        "penalty": 0.05
      },
      {
        "order": 2,
        "text": "Padauginkite lygtį z^2 - z + 1 = 0 iš (z + 1). Gausite z^3 + 1 = 0.",
        "penalty": 0.05
      },
      {
        "order": 3,
        "text": "Vadinasi, z^3 = -1. Išreikškite z^{72} per z^3 laipsnį.",
        "penalty": 0.1
      },
      {
        "order": 4,
        "text": "z^{72} = (z^3)^{24} = (-1)^{24} = 1. Analogiškai apskaičiuokite 1/z^{72} ir sudėkite.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-07",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Raskite visas tolydžias funkcijas $f: \\mathbb{R} \\to \\mathbb{R}$, tenkinančias Koši lygtį $f(x+y) = f(x) + f(y)$. Užrašykite bendrąją formą per kintamąjį c.",
    "answer": "f(x) = cx",
    "acceptedAnswers": [
      "f(x) = cx"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-tangent-trick"
    ],
    "hints": [
      "Pirmiausia nustatykite $f(0)$ ir parodykite, kad $f(nx) = nf(x)$ natūraliesiems $n$.",
      "Išplėskite savybę iki racionaliųjų skaičių $q$: $f(qx) = qf(x)$.",
      "Naudokite tolydumo sąlygą, kad 'užpildytumėte' tarpus tarp racionaliųjų skaičių bet kokiam realiam skaičiui."
    ],
    "solution": "$f(0+0) = f(0)+f(0) \\implies f(0) = 0$. Indukcija: $f(nx) = nf(x)$ visiems $n \\in \\mathbb{N}$. Tegu $n/m = q \\in \\mathbb{Q}$. Tada $mf(qx) = f(mqx) = f(nx) = nf(x) \\implies f(qx) = qf(x)$. Tegu $x = 1$. Tada $f(q) = f(1) \\cdot q = cq$, kur $c = f(1)$. Kadangi $f$ tolydi, o racionalieji skaičiai yra tiršti $\\mathbb{R}$, tai $f(x) = cx$ visiems $x \\in \\mathbb{R}$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Koši funkcinė lygtis",
      "text": "Tai bazinė funkcinė lygtis. Nors ji turi be galo daug sprendinių virš racionaliųjų skaičių, bet koks papildomas apribojimas (tolydumas, monotoniškumas arba ribotumas) susiaurina sprendinius iki tiesinių funkcijų."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-07-method-1",
        "title": "Tankumo metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Racionalusis pagrindimas",
            "action": "Įrodome tiesiškumą virš $\\mathbb{Q}$.",
            "reason": "Tai visų Koši lygčių sprendimo pagrindas.",
            "result": "Gauta $f(q) = cq$.",
            "latex": ""
          }
        ],
        "finalAnswer": "f(x) = cx"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-07-trap-1",
        "title": "Tolydumo ignoravimas",
        "wrongMove": "Sakoma, kad tiesinė forma yra vienintelė be jokių papildomų sąlygų.",
        "whyTempting": "Mokyklos matematikoje funkcija dažniausiai suprantama kaip 'graži'.",
        "correction": "Be papildomų sąlygų (pvz., naudojant Hamelio bazę), egzistuoja patologiniai netiesiniai sprendiniai.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-07-trap-2",
        "title": "Laisvojo nario pridėjimas",
        "wrongMove": "Rašoma $f(x) = cx + d$.",
        "whyTempting": "Įprasta tiesinės funkcijos forma.",
        "correction": "Įstačius į lygtį $c(x+y)+d = cx+d+cy+d \\implies d=0$. Funkcija privalo eiti per koordinačių pradžią.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kas nutiktų, jei $f$ būtų ribota tik viename intervale?",
      "Kaip pasikeistų lygtis, jei sąlyga būtų $f(xy) = f(x)f(y)$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-07-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra tolydus sprendinys $f(x+y) = f(x) + f(y)$?",
        "back": "$f(x) = cx$, kur $c$ yra konstanta.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pirmiausia nustatykite $f(0)$ ir parodykite, kad $f(nx) = nf(x)$ natūraliesiems $n$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Išplėskite savybę iki racionaliųjų skaičių $q$: $f(qx) = qf(x)$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Naudokite tolydumo sąlygą, kad 'užpildytumėte' tarpus tarp racionaliųjų skaičių bet kokiam realiam skaičiui.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-08",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Tegu $a, b, c > 0$ ir $a+b+c=3$. Įrodykite, kad $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} \\ge 3$. Kokia minimali reikšmė pasiekiama, kai kintamieji lygūs?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-tangent-trick"
    ],
    "hints": [
      "Pritaikykite AM-HM nelygybę trims kintamiesiems $a, b, c$.",
      "Kairėje AM-HM pusėje turite $(a+b+c)/3$, dešinėje – $3/(1/a+1/b+1/c)$.",
      "Įstatykite žinomą sumą $a+b+c=3$ ir išreikškite apverstų narių sumą."
    ],
    "solution": "Naudojame AM-HM nelygybę: $\\frac{a+b+c}{3} \\ge \\frac{3}{\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}}$. Kadangi $a+b+c=3$, tai $\\frac{3}{3} = 1$. $1 \\ge \\frac{3}{\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c}} \\implies \\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} \\ge 3$. Lygybė pasiekiama tik tada, kai $a=b=c=1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Vidurkių nelygybės (AM-HM)",
      "text": "Aritmetinio ir harmoninio vidurkių nelygybė teigia, kad teigiamų skaičių aritmetinis vidurkis yra ne mažesnis už jų harmoninį vidurkį."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-08-method-1",
        "title": "AM-HM taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Vidurkių sulyginimas",
            "action": "Susiejame sumą su reciprokiniais nariais.",
            "reason": "Vidurkių nelygybės yra standartinis įrankis simetriškoms nelygybėms.",
            "result": "Įrodyta.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-08-trap-1",
        "title": "Nelygybės ženklo supainiojimas",
        "wrongMove": "Rašoma $1/a + 1/b + 1/c \\le 3$.",
        "whyTempting": "Klaidingas AM-HM interpretavimas.",
        "correction": "Harmoninis vidurkis yra mažiausias, todėl jo vardiklyje esanti suma turi būti didelė, kad bendra vertė būtų maža.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-08-trap-2",
        "title": "Netinkamo taško spėjimas",
        "wrongMove": "Bandoma minimizuoti ties $a=3, b=0, c=0$.",
        "whyTempting": "Ribinių taškų tikrinimas.",
        "correction": "Funkcija $1/x$ neapibrėžta ties 0, o artėjant prie 0 ji neapribotai didėja, todėl minimumas yra simetriniame taške.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų rezultatas, jei sąlyga būtų $abc=1$?",
      "Ar galėtume pritaikyti Jeneseno nelygybę šiam uždaviniui?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-08-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra $\\sum 1/a$ minimumo reikšmė, jei $\\sum a = 3$ ($a,b,c>0$)?",
        "back": "3 (pasiekiama, kai $a=b=c=1$).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pritaikykite AM-HM nelygybę trims kintamiesiems $a, b, c$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kairėje AM-HM pusėje turite $(a+b+c)/3$, dešinėje – $3/(1/a+1/b+1/c)$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Įstatykite žinomą sumą $a+b+c=3$ ir išreikškite apverstų narių sumą.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-09",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Apskaičiuokite sumą $S = \\binom{n}{0} + \\binom{n}{3} + \\binom{n}{6} + \\dots$ išreikštą per n naudojant kompleksines vieneto šaknis.",
    "answer": "\\frac{2^n + 2\\cos(n\\pi/3)}{3}",
    "acceptedAnswers": [
      "\\frac{2^n + 2\\cos(n\\pi/3)}{3}"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-unity-filter"
    ],
    "hints": [
      "Naudokite trečiojo laipsnio vieneto šaknį $\\omega = e^{2\\pi i / 3}$.",
      "Užrašykite tris eilutes: $(1+1)^n$, $(1+\\omega)^n$ ir $(1+\\omega^2)^n$ skleidinius.",
      "Sudedant šiuos skleidinius, koeficientai prie $\\binom{n}{k}$ bus $1^k + \\omega^k + \\omega^{2k}$."
    ],
    "solution": "Pagal filtrą: $S = \\frac{1}{3} ((1+1)^n + (1+\\omega)^n + (1+\\omega^2)^n)$. Pastebime: $1+\\omega = 1 + \\cos(2\\pi/3) + i\\sin(2\\pi/3) = 1/2 + i\\sqrt{3}/2 = e^{i\\pi/3}$. $1+\\omega^2 = e^{-i\\pi/3}$. $S = \\frac{2^n + (e^{i\\pi/3})^n + (e^{-i\\pi/3})^n}{3} = \\frac{2^n + e^{in\\pi/3} + e^{-in\\pi/3}}{3}$. Naudojant Eulerio formulę: $e^{i\\theta} + e^{-i\\theta} = 2\\cos(\\theta)$. $S = \\frac{2^n + 2\\cos(n\\pi/3)}{3}$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Vieneto šaknų filtras",
      "text": "Norint susumuoti kas $k$-tą binominį koeficientą, naudojama $k$-tojo laipsnio vieneto šaknų savybė: jų laipsnių suma lygi $k$, jei laipsnis dalijasi iš $k$, ir 0 kitais atvejais."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [
      "olimpiada-12-concept-unity-filter"
    ],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-09-method-1",
        "title": "Generuojančių funkcijų metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Filtravimas",
            "action": "Pritaikome vieneto šaknų savybę sumai išgryninti.",
            "reason": "Tai galingas būdas spręsti kombinatorikos sumas su cikliškais apribojimais.",
            "result": "Gauta uždara forma.",
            "latex": ""
          }
        ],
        "finalAnswer": "\\frac{2^n + 2\\cos(n\\pi/3)}{3}"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-09-trap-1",
        "title": "Klaidingas nario 1+omega skaičiavimas",
        "wrongMove": "Manoma, kad $|1+\\omega| = 1$.",
        "whyTempting": "Nes $|\\omega| = 1$.",
        "correction": "Brėžkite vektorius: $1$ ir $\\omega$ sudaro $120$ laipsnių kampą, jų suma yra rombo įstrižainė lygi 1 (bet kryptis pasikeičia).",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-09-trap-2",
        "title": "Dalybos iš 3 pamiršimas",
        "wrongMove": "Sudedamos trys reikšmės ir paliekamas bendras rezultatas.",
        "whyTempting": "Dėmesys sutelkiamas į kompleksinius skaičiavimus.",
        "correction": "Kadangi filtras $1+\\omega^k + \\omega^{2k}$ duoda reikšmę 3 (o ne 1), būtina padalyti iš m=3.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų suma, jei reikėtų $\\binom{n}{1} + \\binom{n}{4} + \\dots$?",
      "Ar šis metodas tinka bet kokiam žingsniui $k$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-09-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra binominių koeficientų suma kas 3 žingsnius?",
        "back": "$(2^n + 2\\cos(n\\pi/3))/3$ (naudojant vieneto šaknų filtrą).",
        "conceptIds": [
          "olimpiada-12-concept-unity-filter"
        ],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite trečiojo laipsnio vieneto šaknį $\\omega = e^{2\\pi i / 3}$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Užrašykite tris eilutes: $(1+1)^n$, $(1+\\omega)^n$ ir $(1+\\omega^2)^n$ skleidinius.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Sudedant šiuos skleidinius, koeficientai prie $\\binom{n}{k}$ bus $1^k + \\omega^k + \\omega^{2k}$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-10",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Pagal Gauso-Luko teoremą kompleksinėje plokštumoje, kuriame objekte guli daugianario išvestinės $P'(z)$ šaknys, palyginti su paties daugianario $P(z)$ šaknimis?",
    "answer": "Iškiliame kevale",
    "acceptedAnswers": [
      "Iškiliame kevale"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Daugianarį užrašykite kaip $P(z) = a \\prod (z-z_k)$.",
      "Apskaičiuokite logaritminę išvestinę $P'(z)/P(z)$.",
      "Išnagrinėkite lygtį $\\sum \\frac{1}{w-z_k} = 0$, kur $w$ yra išvestinės šaknis."
    ],
    "solution": "Tegu $z_1, \\dots, z_n$ yra $P(z)$ šaknys. Išvestinės šaknis $w$ tenkina $\\sum \\frac{1}{w-z_k} = 0$. Jungtinių skaičių suma $\\sum \\frac{\\bar{w}-\\bar{z}_k}{|w-z_k|^2} = 0$. Tai parodo, kad $w$ yra $z_k$ svertinis vidurkis su teigiamais svoriais. Bet koks svertinis vidurkis su teigiamais svoriais privalo gulėti taškų iškiliame kevale.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Gauso-Luko teorema",
      "text": "Ši teorema susieja daugianario ir jo išvestinės šaknų geometrinį išsidėstymą. Ji teigia, kad visos $P'(z)$ šaknys priklauso mažiausiai iškiliai aibei (kevalui), kurioje yra visos $P(z)$ šaknys."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-10-method-1",
        "title": "Geometrinė interpretacija",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Logaritminis išvedimas",
            "action": "Parodome, kad išvestinės šaknys yra 'pritraukiamos' prie daugianario šaknų.",
            "reason": "Vektorių suma lygi nuliui reiškia pusiausvyros tašką sistemoje.",
            "result": "Gauta priklausomybė nuo iškilaus kevalo.",
            "latex": ""
          }
        ],
        "finalAnswer": "Iškiliame kevale"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-10-trap-1",
        "title": "Tapatinimas su vidurkiu",
        "wrongMove": "Manoma, kad šaknys guli svorio centre.",
        "whyTempting": "Supaprastinta vidurkio samprata.",
        "correction": "Jos guli bet kurioje kevalo vietoje, nebūtinai centre, priklausomai nuo šaknų kartotinumo.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-10-trap-2",
        "title": "Iškilias aibės nesupratimas",
        "wrongMove": "Teigiama, kad šaknys guli ant apskritimo.",
        "whyTempting": "Daugianariai su $z^n-1$ turi šaknis ant apskritimo.",
        "correction": "Iškili aibė yra 'įtempta gumelė' aplink taškus, nebūtinai apskritimas.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kas nutinka, jei visos $P(z)$ šaknys guli realiojoje tiesėje (Rolio teorema)?",
      "Ar ši teorema galioja visoms išvestinėms $P^{(k)}(z)$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-10-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kur guli daugianario išvestinės šaknys pagal Gauso-Luko teoremą?",
        "back": "Originalaus daugianario šaknų iškiliame kevale.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Daugianarį užrašykite kaip $P(z) = a \\prod (z-z_k)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Apskaičiuokite logaritminę išvestinę $P'(z)/P(z)$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Išnagrinėkite lygtį $\\sum \\frac{1}{w-z_k} = 0$, kur $w$ yra išvestinės šaknis.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-11",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Tegu $f(x)$ yra išgaubta funkcija intervale $I$. Įrodykite, kad bet kokiems $x_1, x_2, \\dots, x_n \\in I$ galioja nelygybė $f\\left(\\frac{x_1+\\dots+x_n}{n}\\right) \\le \\frac{f(x_1)+\\dots+f(x_n)}{n}$. Kaip vadinama ši nelygybė?",
    "answer": "Jenseno nelygybė",
    "acceptedAnswers": [
      "Jenseno nelygybė"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Pradėkite nuo n=2 atvejo, kuris tiesiogiai seka iš išgaubtumo apibrėžimo.",
      "Naudokite matematinę indukciją, kad išplėstumėte teiginį bet kokiam n.",
      "Apsvarstykite funkciją $f(x) = x^2$ arba $\\ln(x)$ kaip pavyzdžius."
    ],
    "solution": "Išgaubtumo apibrėžimas: $f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y)$ visiems $\\lambda \\in [0,1]$. Tegu $n=2$. Įstačius $\\lambda = 1/2$, gauname $f(\\frac{x+y}{2}) \\le \\frac{f(x)+f(y)}{2}$. Indukcijos būdu įrodoma visoms dvejeto laipsnio vertėms $n=2^k$. Naudojant 'atgalinę indukciją' (Koši metodas), teiginys išplečiamas visiems natūraliesiems n.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Išgaubtumo savybė",
      "text": "Išgaubtos funkcijos vidurkio reikšmė niekada neviršija reikšmių vidurkio. Geometriškai tai reiškia, kad funkcijos grafikas guli po styga, jungiančia bet kuriuos du jo taškus."
    },
    "strategyTags": [
      "proof",
      "bounding"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-11-method-1",
        "title": "Indukcinis įrodymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Bazė ir plėtra",
            "action": "Nuo dviejų kintamųjų pereiname prie n kintamųjų.",
            "reason": "Išgaubtumas yra lokali savybė, kurią galima apibendrinti visai aibei.",
            "result": "Įrodyta bendroji forma.",
            "latex": ""
          }
        ],
        "finalAnswer": "Jenseno nelygybė"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-11-trap-1",
        "title": "Išgaubtumo krypties painiojimas",
        "wrongMove": "Teigiama, kad $f(vidurkio) \\ge vidurkio(f)$ išgaubtai funkcijai.",
        "whyTempting": "Painiojamos sąvokos 'convex' (išgaubta žemyn) ir 'concave' (išgaubta aukštyn).",
        "correction": "Išgaubta (convex) funkcija (kaip $x^2$) turi minimumą, todėl vidurio taškas yra 'žemiau' nei kraštų vidurkis.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeičia nelygybė, jei funkcija yra įgaubta (concave)?",
      "Kokia funkcija Jenseno nelygybę paverčia lygybe?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-11-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia nelygybė sieja išgaubtos funkcijos vidurkio reikšmę su reikšmių vidurkiu?",
        "back": "Jenseno nelygybė: $f(\\sum x_i / n) \\le \\sum f(x_i) / n$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pradėkite nuo n=2 atvejo, kuris tiesiogiai seka iš išgaubtumo apibrėžimo.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Naudokite matematinę indukciją, kad išplėstumėte teiginį bet kokiam n.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Apsvarstykite funkciją $f(x) = x^2$ arba $\\ln(x)$ kaip pavyzdžius.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-12",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Įrodykite Koši-Švarco nelygybę dviem vektoriams $(a_1, a_2)$ ir $(b_1, b_2)$. Užrašykite bendrąją formą per sumos simbolius.",
    "answer": "(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)",
    "acceptedAnswers": [
      "(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išskleiskite $(a_1b_1 + a_2b_2)^2$ ir $(a_1^2+a_2^2)(b_1^2+b_2^2)$.",
      "Atimkite vieną iš kito ir parodykite, kad skirtumas yra pilnas kvadratas.",
      "Lagranžo tapatybė: $(a_1^2+a_2^2)(b_1^2+b_2^2) - (a_1b_1+a_2b_2)^2 = (a_1b_2 - a_2b_1)^2$."
    ],
    "solution": "Skleidžiame: $(a_1^2+a_2^2)(b_1^2+b_2^2) = a_1^2b_1^2 + a_1^2b_2^2 + a_2^2b_1^2 + a_2^2b_2^2$. Skleidžiame: $(a_1b_1+a_2b_2)^2 = a_1^2b_1^2 + 2a_1b_1a_2b_2 + a_2^2b_2^2$. Skirtumas: $a_1^2b_2^2 - 2a_1b_1a_2b_2 + a_2^2b_1^2 = (a_1b_2 - a_2b_1)^2$. Kadangi kvadratas visada $\\ge 0$, tai $(a_1^2+a_2^2)(b_1^2+b_2^2) \\ge (a_1b_1+a_2b_2)^2$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Skaliarinė sandauga ir ilgiai",
      "text": "Vektorių skaliarinės sandaugos kvadratas niekada neviršija jų ilgių kvadratų sandaugos. Tai ekvivalentu teiginiui, kad kosinusas neviršija 1."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-12-method-1",
        "title": "Lagranžo tapatybė",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Tiesioginis palyginimas",
            "action": "Išreiškiame nelygybę kaip neneigiamą formą.",
            "reason": "Tai stipriausias įrodymo būdas, nes parodo ir lygybės sąlygą.",
            "result": "Įrodyta.",
            "latex": ""
          }
        ],
        "finalAnswer": "(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-12-trap-1",
        "title": "Sumos kvadratas vs kvadratų suma",
        "wrongMove": "Painiojama $(\\sum a_i)^2$ su $\\sum a_i^2$.",
        "whyTempting": "Panašios simbolikos nelygybėse.",
        "correction": "Koši-Švarco nelygybėje kvadratai yra sumų viduje dešinėje pusėje, o kairėje kvadratas yra už visos sumos.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kada pasiekiama lygybė Koši-Švarco nelygybėje?",
      "Kaip ši nelygybė padeda rasti funkcijos $f(x) = a\\cos x + b\\sin x$ maksimumą?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-12-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Koši-Švarco nelygybę sumos pavidalu.",
        "back": "$(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išskleiskite $(a_1b_1 + a_2b_2)^2$ ir $(a_1^2+a_2^2)(b_1^2+b_2^2)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Atimkite vieną iš kito ir parodykite, kad skirtumas yra pilnas kvadratas.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Lagranžo tapatybė: $(a_1^2+a_2^2)(b_1^2+b_2^2) - (a_1b_1+a_2b_2)^2 = (a_1b_2 - a_2b_1)^2$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-13",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Naudodami Vijetos šuolio metodą, įrodykite, kad jei teigiamiems sveikiesiems skaičiams $a, b$ reiškinys $\\frac{a^2+b^2}{ab+1}$ yra sveikasis skaičius $k$, tai $k$ privalo būti pilnas kvadratas.",
    "answer": "k yra pilnas kvadratas",
    "acceptedAnswers": [
      "k yra pilnas kvadratas"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tarkime, kad egzistuoja fiksuotas $k$, kuris nėra pilnas kvadratas.",
      "Iš visų porų $(a,b)$, tenkinančių lygtį, pasirinkite tą, kurios suma $a+b$ yra mažiausia.",
      "Laikykite lygtį kvadratine $x^2 - (kb)x + (b^2-k) = 0$ kintamojo $x$ atžvilgiu."
    ],
    "solution": "Tarkime $k$ nėra kvadratas. Pasirenkame sprendinį $(a,b)$ su minimalia suma $a+b$, kur $a \\ge b$. Kita lygties $x^2 - kbx + b^2-k = 0$ šaknis $x_2$ tenkina $x_2 = kb - a$ ir $x_2 = (b^2-k)/a$. Iš pirmos lygties $x_2$ yra sveikasis, iš antros $x_2 \neq 0$ (nes k ne kvadratas). Galima parodyti, kad $x_2 > 0$ ir $x_2 < a$, todėl sprendinio $(x_2, b)$ suma mažesnė. Prieštara su minimalumo sąlyga reiškia, kad prielaida apie ne kvadratą buvo klaidinga.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Vijetos šuolis (Vieta Jumping)",
      "text": "Tai technika, skirta Diofantinėms lygtims. Mes fiksuojame $k$ ir nagrinėjame mažiausią sprendinį $(a,b)$. Jei $k$ nėra kvadratas, galime sukonstruoti dar mažesnį sprendinį, o tai prieštarauja minimalumui."
    },
    "strategyTags": [
      "proof",
      "contradiction"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-13-method-1",
        "title": "Begalinio nusileidimo variacija",
        "methodType": "main",
        "strategyTags": [
          "proof",
          "contradiction"
        ],
        "steps": [
          {
            "title": "Kvadratinės lygties sudarymas",
            "action": "Pertvarkome trupmeną į polinominę lygtį.",
            "reason": "Vijetos formulės galioja tik polinomams.",
            "result": "Gauta forma $x^2 - S x + P = 0$.",
            "latex": ""
          }
        ],
        "finalAnswer": "k yra pilnas kvadratas"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-13-trap-1",
        "title": "Tikrinimas tik su mažais skaičiais",
        "wrongMove": "Mokinys sako, kad kai $a=b$, $2a^2/(a^2+1)$ nėra sveikasis išskyrus $k=1$.",
        "whyTempting": "Maži skaičiai dažnai atskleidžia dėsningumą.",
        "correction": "Olimpiadoje būtinas bendras įrodymas visoms galimoms reikšmėms, o ne tik simetriniams atvejams.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kuo skiriasi Vijetos šuolis nuo įprasto begalinio nusileidimo?",
      "Kurioje garsioje olimpiadoje (IMO) šis uždavinys pasirodė pirmą kartą?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-13-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia technika naudojama įrodyti, kad $\\frac{a^2+b^2}{ab+1}$ yra kvadratas?",
        "back": "Vijetos šuolis (Vieta Jumping).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tarkime, kad egzistuoja fiksuotas $k$, kuris nėra pilnas kvadratas.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Iš visų porų $(a,b)$, tenkinančių lygtį, pasirinkite tą, kurios suma $a+b$ yra mažiausia.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Laikykite lygtį kvadratine $x^2 - (kb)x + (b^2-k) = 0$ kintamojo $x$ atžvilgiu.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-14",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Taikydami liestinės triuką, įrodykite nelygybę $\\sum_{i=1}^n f(a_i) \\ge n f(1)$, kai $\\sum a_i = n$ ir $f(x)$ yra išgaubta funkcija. Kokia yra liestinės lygtis taške $x=1$?",
    "answer": "y = f'(1)(x-1) + f(1)",
    "acceptedAnswers": [
      "y = f'(1)(x-1) + f(1)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-tangent-trick"
    ],
    "hints": [
      "Raskite liestinės lygtį funkcijai $f(x)$ taške $x_0 = 1$.",
      "Naudokite išgaubtumo savybę: $f(x) \\ge f'(1)(x-1) + f(1)$.",
      "Sumuokite nelygybes visiems $i=1, \\dots, n$."
    ],
    "solution": "Liestinės lygtis taške $x=1$ yra $L(x) = f(1) + f'(1)(x-1)$. Kadangi $f$ išgaubta, $f(a_i) \\ge L(a_i)$ visiems $a_i$. Sumuojame: $\\sum f(a_i) \\ge \\sum (f(1) + f'(1)(a_i-1))$. $\\sum f(a_i) \\ge n f(1) + f'(1) (\\sum a_i - n)$. Kadangi $\\sum a_i = n$, tai paskutinis narys lygus 0.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Liestinės įvertis",
      "text": "Jei funkcija yra išgaubta, jos grafikas visada yra virš liestinės. Tai leidžia kiekvieną dėmenį $f(a_i)$ pakeisti tiesine išraiška, kurios sumą lengviau apskaičiuoti."
    },
    "strategyTags": [
      "proof",
      "bounding"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [
      "olimpiada-12-concept-tangent-trick"
    ],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-14-method-1",
        "title": "Tiesinis įvertis",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Liestinės radimas",
            "action": "Apskaičiuojame išvestinę ir sudarome tiesę.",
            "reason": "Liestinė yra geriausias tiesinis artinys taške.",
            "result": "Gauta nelygybė $f(x) \\ge L(x)$.",
            "latex": ""
          }
        ],
        "finalAnswer": "y = f'(1)(x-1) + f(1)"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-14-trap-1",
        "title": "Netinkamo taško pasirinkimas",
        "wrongMove": "Bandoma vesti liestinę taške $x=0$.",
        "whyTempting": "Nulis atrodo paprastas skaičius.",
        "correction": "Liestinę reikia vesti vidurkio taške (šiuo atveju $n/n=1$), kad kintamieji sumoje išsiprastintų.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kuo liestinės triukas pranašesnis už Jenseno nelygybę?",
      "Kas nutiktų, jei liestinė kirstų funkcijos grafiką?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-14-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kada nelygybėse naudojamas liestinės triukas?",
        "back": "Kai reikia įrodyti $\\sum f(x_i) \\ge C$ su sumos apribojimu, naudojant išgaubtumą aplink vidurkį.",
        "conceptIds": [
          "olimpiada-12-concept-tangent-trick"
        ],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Raskite liestinės lygtį funkcijai $f(x)$ taške $x_0 = 1$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Naudokite išgaubtumo savybę: $f(x) \\ge f'(1)(x-1) + f(1)$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Sumuokite nelygybes visiems $i=1, \\dots, n$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-15",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Bernulio nelygybė teigia, kad $(1+x)^n \\ge 1+nx$ visiems $n \\ge 1$ ir $x > -1$. Įrodykite šią nelygybę natūraliesiems $n$ naudodami binomo formulę, kai $x \\ge 0$.",
    "answer": "Įrodyta per binomo skleidinį",
    "acceptedAnswers": [
      "Įrodyta per binomo skleidinį"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Užrašykite Niutono binomo formulę $(1+x)^n$ skleidiniui.",
      "Kokie yra pirmieji du skleidinio nariai?",
      "Paaiškinkite, kodėl likusių narių suma yra neneigiama."
    ],
    "solution": "$(1+x)^n = \\binom{n}{0}1^n + \\binom{n}{1}1^{n-1}x + \\binom{n}{2}1^{n-2}x^2 + \\dots + \\binom{n}{n}x^n$. $(1+x)^n = 1 + nx + \\frac{n(n-1)}{2}x^2 + \\dots + x^n$. Kadangi $x \\ge 0$ ir $\\binom{n}{k} > 0$, visi nariai yra neneigiami. Todėl $(1+x)^n \\ge 1+nx$, nes atimami tik teigiami dydžiai.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "introductory",
    "requiredPrerequisiteMastery": 60,
    "coreIdea": {
      "title": "Binomo atmetimas",
      "text": "Skleidžiant laipsnį $(1+x)^n$, visi nariai yra teigiami (kai $x \\ge 0$). Atmetę visus narius, išskyrus pirmuosius du, gauname mažesnę reikšmę."
    },
    "strategyTags": [
      "proof",
      "bounding"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-15-method-1",
        "title": "Binominis įvertis",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Skleidimas",
            "action": "Pritaikome binomo formulę.",
            "reason": "Tai lengviausias būdas pamatyti nelygybės struktūrą.",
            "result": "Gauta narių suma.",
            "latex": ""
          }
        ],
        "finalAnswer": "Įrodyta per binomo skleidinį"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-15-trap-1",
        "title": "Neigiamų x atvejis",
        "wrongMove": "Bandoma naudoti binomą, kai $-1 < x < 0$.",
        "whyTempting": "Noras apibendrinti lengvą įrodymą.",
        "correction": "Kai $x < 0$, binomo nariai keičia ženklus, todėl paprastas atmetimas nebegalioja. Tam reikia indukcijos arba išvestinių.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip šią nelygybę įrodyti realiesiems $n > 1$?",
      "Kur skaičių teorijoje naudojama Bernulio nelygybė?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-15-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Bernulio nelygybę.",
        "back": "$(1+x)^n \\ge 1+nx$ (kai $n \\ge 1, x > -1$).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Užrašykite Niutono binomo formulę $(1+x)^n$ skleidiniui.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kokie yra pirmieji du skleidinio nariai?",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Paaiškinkite, kodėl likusių narių suma yra neneigiama.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-16",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Šūro (Schur) nelygybė teigia, kad teigiamiems $a, b, c$ ir $r > 0$ galioja: $a^r(a-b)(a-c) + b^r(b-a)(b-c) + c^r(c-a)(c-b) \\ge 0$. Įrodykite ją dažniausiai pasitaikančiu atveju $r=1$.",
    "answer": "Įrodyta naudojant simetriją",
    "acceptedAnswers": [
      "Įrodyta naudojant simetriją"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tarkime, be bendrumo praradimo, kad $a \\ge b \\ge c$.",
      "Perrašykite kairę pusę kaip $a(a-b)(a-c) - b(a-b)(b-c) + c(c-a)(c-b)$.",
      "Parodykite, kad pirmų dviejų narių suma yra teigiama, o trečias narys taip pat $\\ge 0$."
    ],
    "solution": "Tarkime $a \\ge b \\ge c$. Pirmas narys: $a(a-b)(a-c) \\ge b(a-b)(a-c) \\ge b(a-b)(b-c)$. Atimame antrą narį: $a(a-b)(a-c) - b(a-b)(b-c) \\ge 0$. Trečias narys: $c(c-a)(c-b) \\ge 0$, nes abu skliaustai $\\le 0$, o jų sandauga $\\ge 0$. Suma trijų neneigiamų dydžių (po grupavimo) yra neneigiama.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Simetrijos praradimas ir grupavimas",
      "text": "Nelygybė yra simetriška, todėl galime daryti prielaidą apie kintamųjų tvarką. Sugrupavę narius pamatysime, kad bendra suma susideda iš neneigiamų blokų."
    },
    "strategyTags": [
      "proof",
      "symmetry"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-16-method-1",
        "title": "Sutvarkymo metodas",
        "methodType": "main",
        "strategyTags": [
          "symmetry"
        ],
        "steps": [
          {
            "title": "Sąlyginė analizė",
            "action": "Išnaudojame kintamųjų eiliškumą.",
            "reason": "Simetrija leidžia tirti tik vieną atvejį.",
            "result": "Įrodyta.",
            "latex": ""
          }
        ],
        "finalAnswer": "Įrodyta naudojant simetriją"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-16-trap-1",
        "title": "Išskleidimas be grupavimo",
        "wrongMove": "Mokinys bando viską išskleisti: $a^3+b^3+c^3 - a^2b - a^2c \\dots$",
        "whyTempting": "Atrodo, kad paprasta algebra viską išspręs.",
        "correction": "Išskleidus gaunama daug narių, kurių ženklą sunku nustatyti be specialių nelygybių (pvz. Muirhead). Grupavimas yra daug elegantiškesnis.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kada Šūro nelygybė tampa lygybe?",
      "Kas nutinka, jei $r=0$ (AM-GM ryšys)?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-16-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Šūro nelygybę trims kintamiesiems.",
        "back": "$\\sum a^r(a-b)(a-c) \\ge 0$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tarkime, be bendrumo praradimo, kad $a \\ge b \\ge c$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Perrašykite kairę pusę kaip $a(a-b)(a-c) - b(a-b)(b-c) + c(c-a)(c-b)$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Parodykite, kad pirmų dviejų narių suma yra teigiama, o trečias narys taip pat $\\ge 0$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-17",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Titu lema (arba Koši-Švarco nelygybė trupmenine forma) teigia: $\\sum_{i=1}^n \\frac{a_i^2}{b_i} \\ge \\frac{(\\sum a_i)^2}{\\sum b_i}$. Pritaikykite šią lemą trims nariams: $\\frac{x^2}{a} + \\frac{y^2}{b} + \\frac{z^2}{c}$.",
    "answer": "\\frac{(x+y+z)^2}{a+b+c}",
    "acceptedAnswers": [
      "\\frac{(x+y+z)^2}{a+b+c}"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Sutapatinkite $a_1=x, a_2=y, a_3=z$ ir $b_1=a, b_2=b, b_3=c$.",
      "Lemos skaitiklyje turi būti visų $a_i$ sumos kvadratas.",
      "Vardiklyje tiesiog sudedami visi $b_i$."
    ],
    "solution": "Pagal Titu lemą, kairė pusė yra $\\frac{x^2}{a} + \\frac{y^2}{b} + \\frac{z^2}{c}$. Skaitiklių suma yra $(x+y+z)$, jos kvadratas yra $(x+y+z)^2$. Vardiklių suma yra $a+b+c$. Rezultatas: $\\frac{(x+y+z)^2}{a+b+c}$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Trupmeninė nelygybė",
      "text": "Titu lema yra vienas dažniausiai naudojamų Koši-Švarco nelygybės pavidalų olimpiadose, nes leidžia lengvai 'sujungti' trupmenas su kvadratiniais skaitikliais."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-17-method-1",
        "title": "Tiesioginis taikymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Formulės užpildymas",
            "action": "Įstatome kintamuosius į lemos pavidalą.",
            "reason": "Tai standartinė procedūra trupmeninėms nelygybėms.",
            "result": "Gauta apatinė riba.",
            "latex": ""
          }
        ],
        "finalAnswer": "\\frac{(x+y+z)^2}{a+b+c}"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-17-trap-1",
        "title": "Kvadrato pamiršimas",
        "wrongMove": "Rašoma $\\frac{x+y+z}{a+b+c}$ (be kvadrato skaitiklyje).",
        "whyTempting": "Skubėjimas sudėti narius.",
        "correction": "Titu lema visada reikalauja kvadrato skaitiklyje, kad būtų išlaikyta dimensija (laipsnis).",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip įrodyti Titu lemą naudojant standartinę Koši-Švarco nelygybę?",
      "Kokia turi būti vardiklių $b_i$ reikšmė (teigiami ar bet kokie)?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-17-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Titu lemą.",
        "back": "$\\sum a_i^2 / b_i \\ge (\\sum a_i)^2 / \\sum b_i$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Sutapatinkite $a_1=x, a_2=y, a_3=z$ ir $b_1=a, b_2=b, b_3=c$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Lemos skaitiklyje turi būti visų $a_i$ sumos kvadratas.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Vardiklyje tiesiog sudedami visi $b_i$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-18",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Sutvarkymo nelygybė (Rearrangement Inequality) teigia, kad dviejų vienodai surikiuotų sekų sandaugų suma yra didžiausia, o priešingai surikiuotų – mažiausia. Jei $a_1 \\ge a_2$ ir $b_1 \\ge b_2$, palyginkite $a_1b_1 + a_2b_2$ su $a_1b_2 + a_2b_1$.",
    "answer": "a_1b_1 + a_2b_2 \\ge a_1b_2 + a_2b_1",
    "acceptedAnswers": [
      "a_1b_1 + a_2b_2 \\ge a_1b_2 + a_2b_1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Apskaičiuokite skirtumą $(a_1b_1 + a_2b_2) - (a_1b_2 + a_2b_1)$.",
      "Iškelkite bendrus daugiklius.",
      "Analizuokite sandaugos $(a_1-a_2)(b_1-b_2)$ ženklą."
    ],
    "solution": "Atimame: $S = a_1b_1 + a_2b_2 - a_1b_2 - a_2b_1$. Grupuojame: $S = a_1(b_1-b_2) - a_2(b_1-b_2)$. Iškeliame skliaustą: $S = (a_1-a_2)(b_1-b_2)$. Kadangi $a_1 \\ge a_2$ ir $b_1 \\ge b_2$, tai abu skliaustai $\\ge 0$. Sandauga $\\ge 0$, vadinasi $a_1b_1 + a_2b_2 \\ge a_1b_2 + a_2b_1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "introductory",
    "requiredPrerequisiteMastery": 50,
    "coreIdea": {
      "title": "Didžiausias efektas",
      "text": "Norint gauti didžiausią sumą, didžiausią vienos sekos skaičių reikia dauginti iš didžiausio kitos sekos skaičiaus."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-18-method-1",
        "title": "Skirtumo analizė",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Faktoriavimas",
            "action": "Paverčiame sumą sandauga.",
            "reason": "Sandaugos ženklą nustatyti lengviau nei sumos.",
            "result": "Gauta neneigiama išraiška.",
            "latex": ""
          }
        ],
        "finalAnswer": "a_1b_1 + a_2b_2 \\ge a_1b_2 + a_2b_1"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-18-trap-1",
        "title": "Netinkamas surikiavimas",
        "wrongMove": "Teigiama, kad atsitiktinis surikiavimas duoda tą patį rezultatą.",
        "whyTempting": "Jei skaičiai maži, skirtumas gali neatrodyti didelis.",
        "correction": "Tikslus surikiavimas pagal didėjimą/mažėjimą yra kritinis šiai nelygybei.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip ši nelygybė įrodo $a^2+b^2 \\ge 2ab$?",
      "Kas nutiktų, jei viena seka didėtų, o kita mažėtų?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-18-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kada sandaugų suma $\\sum a_i b_{\\sigma(i)}$ yra didžiausia?",
        "back": "Kai sekos $a$ ir $b$ surikiuotos vienodai (pvz., abi didėja).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Apskaičiuokite skirtumą $(a_1b_1 + a_2b_2) - (a_1b_2 + a_2b_1)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Iškelkite bendrus daugiklius.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Analizuokite sandaugos $(a_1-a_2)(b_1-b_2)$ ženklą.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-19",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Raskite visas funkcijas $f: \\mathbb{R} \\to \\mathbb{R}$, kurios yra griežtai didėjančios ir tenkina sąlygą $f(f(x)) = x$.",
    "answer": "f(x) = x",
    "acceptedAnswers": [
      "f(x) = x"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tarkime, kad egzistuoja $x_0$, toks, kad $f(x_0) > x_0$.",
      "Pritaikykite griežtai didėjančios funkcijos savybę abiem nelygybės pusėms.",
      "Naudokite sąlygą $f(f(x)) = x$, kad gautumėte prieštarą."
    ],
    "solution": "Tarkime $f(x) > x$. Kadangi $f$ yra griežtai didėjanti, tai $f(f(x)) > f(x)$. Pagal sąlygą $f(f(x)) = x$, todėl $x > f(x)$. Gavome prieštarą: $f(x) > x$ ir $x > f(x)$ tuo pačiu metu neįmanoma. Analogiškai, jei $f(x) < x$, tai $f(f(x)) < f(x) \\implies x < f(x)$ (prieštara). Vadinasi, vienintelė galimybė yra $f(x) = x$ visiems $x$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 75,
    "coreIdea": {
      "title": "Monotoniškumas ir involiucija",
      "text": "Jei griežtai didėjanti funkcija yra savo pačios atvirkštinė, ji privalo būti tapatumo funkcija. Bet koks nuokrypis nuo $f(x)=x$ sukeltų prieštarą su monotoniškumo sąlyga."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-19-method-1",
        "title": "Prieštaros metodas",
        "methodType": "main",
        "strategyTags": [
          "proof",
          "logic"
        ],
        "steps": [
          {
            "title": "Nelygybės taikymas",
            "action": "Ištiriame nukrypimą nuo tapatumo.",
            "reason": "Monotoniškumas išlaiko nelygybės ženklą.",
            "result": "Gauta prieštara.",
            "latex": ""
          }
        ],
        "finalAnswer": "f(x) = x"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-19-trap-1",
        "title": "Mažėjančių funkcijų ignoravimas",
        "wrongMove": "Mokinys pamiršta, kad jei funkcija būtų mažėjanti, sprendinių būtų daugiau (pvz. $f(x) = c-x$).",
        "whyTempting": "Sąlygoje nurodyta 'didėjanti', bet mokinys gali neįvertinti šios sąlygos svarbos.",
        "correction": "Visada atkreipkite dėmesį, ar monotoniškumas yra didėjimas, ar mažėjimas, nes tai visiškai keičia sprendinių aibę.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kas pasikeistų, jei $f$ būtų griežtai mažėjanti?",
      "Ar egzistuoja netolydžios griežtai didėjančios funkcijos, tenkinančios $f(f(x))=x$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-19-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra vienintelė griežtai didėjanti funkcija, tokia kad $f(f(x))=x$?",
        "back": "$f(x) = x$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tarkime, kad egzistuoja $x_0$, toks, kad $f(x_0) > x_0$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pritaikykite griežtai didėjančios funkcijos savybę abiem nelygybės pusėms.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Naudokite sąlygą $f(f(x)) = x$, kad gautumėte prieštarą.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-20",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Tegu $x_1, x_2, x_3$ yra daugianario $x^3 + px + q = 0$ šaknys. Naudodami Niutono sumas, apskaičiuokite šaknų kvadratų sumą $S_2 = x_1^2 + x_2^2 + x_3^2$.",
    "answer": "-2p",
    "acceptedAnswers": [
      "-2p"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Nustatykite koeficientus $a_1, a_2, a_3$ iš duotos lygties.",
      "Pastebėkite, kad $a_1 = 0$ (nėra $x^2$ nario) ir $a_2 = p$.",
      "Pritaikykite formulę $S_2 + a_1 S_1 + 2a_2 = 0$."
    ],
    "solution": "Daugianario koeficientai: $a_1 = 0$, $a_2 = p$, $a_3 = q$. $S_1 = -a_1 = 0$. $S_2 = -a_1 S_1 - 2a_2 = -0 \\cdot 0 - 2p$. $S_2 = -2p$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Niutono sumos",
      "text": "Niutono sumos susieja daugianario koeficientus su jo šaknų laipsnių sumomis $S_k = \\sum x_i^k$. Trečiojo laipsnio daugianariui $x^3 + a_1x^2 + a_2x + a_3 = 0$ galioja $S_1 + a_1 = 0$ ir $S_2 + a_1 S_1 + 2a_2 = 0$."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-20-method-1",
        "title": "Rekurentinis skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Koeficientų tapatinimas",
            "action": "Susiejame lygtį su bendra forma.",
            "reason": "Tai leidžia naudoti standartines formules.",
            "result": "Gauta reikšmė -2p.",
            "latex": ""
          }
        ],
        "finalAnswer": "-2p"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-20-trap-1",
        "title": "Ženklo klaida koeficientuose",
        "wrongMove": "Mokinys rašo $S_2 = 2p$.",
        "whyTempting": "Painiojamos Vijetos formulės su Niutono sumų ženklais.",
        "correction": "Formulėje yra $+2a_2$, todėl keliant į kitą pusę ženklas tampa neigiamas.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip apskaičiuoti $S_3$ naudojant Niutono sumas?",
      "Koks būtų rezultatas, jei lygtis būtų $x^3+1=0$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-20-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia Niutono suma sieja šaknų kvadratus su koeficientais $a_1, a_2$?",
        "back": "$S_2 + a_1 S_1 + 2a_2 = 0$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Nustatykite koeficientus $a_1, a_2, a_3$ iš duotos lygties.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pastebėkite, kad $a_1 = 0$ (nėra $x^2$ nario) ir $a_2 = p$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Pritaikykite formulę $S_2 + a_1 S_1 + 2a_2 = 0$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-21",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Apskaičiuokite visų $n$-tojo laipsnio vieneto šaknų sumą $1 + \\omega + \\omega^2 + \\dots + \\omega^{n-1}$, kai $n > 1$ ir $\\omega = e^{2\\pi i / n}$.",
    "answer": "0",
    "acceptedAnswers": [
      "0"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Naudokite geometrinės progresijos sumos formulę $S = (q^n-1)/(q-1)$.",
      "Kokia yra $\\omega^n$ reikšmė pagal apibrėžimą?",
      "Įstatykite $\\omega^n=1$ į sumos formulę."
    ],
    "solution": "Suma $S = 1 + \\omega + \\dots + \\omega^{n-1} = \\frac{\\omega^n - 1}{\\omega - 1}$. Pagal Moivre formulę arba eksponentės apibrėžimą, $\\omega^n = (e^{2\\pi i / n})^n = e^{2\\pi i} = 1$. Tada $S = \\frac{1 - 1}{\\omega - 1} = 0$. Sąlyga $n>1$ užtikrina, kad $\\omega \\neq 1$, todėl dalyba galima.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 75,
    "coreIdea": {
      "title": "Geometrinės progresijos suma",
      "text": "Vieneto šaknys sudaro geometrinę progresiją. Jų suma lygi nuliui, nes jos yra išsidėsčiusios simetriškai aplink koordinačių pradžią taisyklingo daugiakampio viršūnėse."
    },
    "strategyTags": [
      "algebraic-transformation",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-21-method-1",
        "title": "Progresijos metodas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Sumavimas",
            "action": "Pritaikome standartinę sumos formulę kompleksiniams skaičiams.",
            "reason": "Vieneto šaknys tenkina progresijos savybes.",
            "result": "Gauta reikšmė 0.",
            "latex": ""
          }
        ],
        "finalAnswer": "0"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-21-trap-1",
        "title": "Dalyba iš nulio",
        "wrongMove": "Bandoma taikyti formulę, kai $n=1$.",
        "whyTempting": "Noro apibendrinti visiems n.",
        "correction": "Kai $n=1$, $\\omega=1$ ir suma lygi 1. Formulė galioja tik kai vardiklis $\\omega-1 \\neq 0$.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip šią sumą interpretuoti vektorių pagalba?",
      "Kokia būtų kvadratų $\\omega^{2k}$ suma?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-21-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra visų n-tojo laipsnio vieneto šaknų suma ($n>1$)?",
        "back": "0.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite geometrinės progresijos sumos formulę $S = (q^n-1)/(q-1)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kokia yra $\\omega^n$ reikšmė pagal apibrėžimą?",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Įstatykite $\\omega^n=1$ į sumos formulę.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-22",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Raskite minimalią reiškinio $a^2 + b^2 + c^2$ reikšmę, jei $a + b + c = 1$.",
    "answer": "1/3",
    "acceptedAnswers": [
      "1/3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Naudokite Koši-Švarco nelygybę vektoriams $(a, b, c)$ ir $(1, 1, 1)$.",
      "Sandauga $(a+b+c)^2$ turi būti kairėje pusėje.",
      "Išreikškite $a^2+b^2+c^2$ per žinomą sumą."
    ],
    "solution": "Koši-Švarco nelygybė: $(a \\cdot 1 + b \\cdot 1 + c \\cdot 1)^2 \\le (a^2 + b^2 + c^2)(1^2 + 1^2 + 1^2)$. $(a+b+c)^2 \\le (a^2 + b^2 + c^2) \\cdot 3$. $1^2 \\le 3 (a^2 + b^2 + c^2)$. $a^2 + b^2 + c^2 \\ge 1/3$. Lygybė pasiekiama, kai $a=b=c=1/3$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "introductory",
    "requiredPrerequisiteMastery": 50,
    "coreIdea": {
      "title": "Kvadratinis vidurkis vs aritmetinis",
      "text": "Pagal nelygybę tarp kvadratinio ir aritmetinio vidurkio (QM-AM), kvadratų suma yra minimizuojama, kai visi kintamieji yra lygūs."
    },
    "strategyTags": [
      "proof",
      "bounding"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-22-method-1",
        "title": "Koši-Švarco taikymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Nelygybės sudarymas",
            "action": "Pasirenkame papildomą vektorių (1,1,1).",
            "reason": "Tai leidžia išskirti sumą $a+b+c$.",
            "result": "Gautas įvertis 1/3.",
            "latex": ""
          }
        ],
        "finalAnswer": "1/3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-22-trap-1",
        "title": "Atsakymas 1",
        "wrongMove": "Mokinys mano, kad minimumas pasiekiamas ties $(1, 0, 0)$.",
        "whyTempting": "Ribiniai taškai dažnai būna sprendiniai.",
        "correction": "Kvadratinė funkcija auga greičiau, todėl naudingiau 'paskirstyti' reikšmę po lygiai visiems kintamiesiems.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų minimumas n kintamųjų atveju?",
      "Ar galime tai spręsti naudojant Lagranžo daugiklius?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-22-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra $a^2+b^2+c^2$ minimumas, kai $a+b+c=1$?",
        "back": "1/3.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite Koši-Švarco nelygybę vektoriams $(a, b, c)$ ir $(1, 1, 1)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Sandauga $(a+b+c)^2$ turi būti kairėje pusėje.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Išreikškite $a^2+b^2+c^2$ per žinomą sumą.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-23",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Daugianario $P(x) = x^n + a_{n-1}x^{n-1} + \\dots + a_0$ šaknys yra $r_1, \\dots, r_n$. Užrašykite $a_{n-1}$ išraišką per šaknis.",
    "answer": "-(r_1 + \\dots + r_n)",
    "acceptedAnswers": [
      "-(r_1 + \\dots + r_n)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išskleiskite sandaugą $(x-r_1)(x-r_2)\\dots(x-r_n)$.",
      "Pažiūrėkite, kokie nariai sudaro $x^{n-1}$ koeficientą.",
      "Kiekvieną kartą pasirenkame $n-1$ 'x' ir vieną laisvąjį narį $-r_i$."
    ],
    "solution": "$P(x) = (x-r_1)(x-r_2)\\dots(x-r_n)$. Dauginant skliaustus, narys su $x^{n-1}$ gaunamas sudėjus visus variantus, kur iš vieno skliausto paimamas $-r_i$, o iš kitų $x$. Tai duoda $(-r_1)x^{n-1} + (-r_2)x^{n-1} + \\dots + (-r_n)x^{n-1}$. Iškėlus $x^{n-1}$, koeficientas yra $-(r_1 + r_2 + \\dots + r_n)$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Vijetos formulės",
      "text": "Vijetos formulės susieja daugianario koeficientus su elementariais simetriniais šaknų polinomais. Pirmasis koeficientas po vyriausiojo nario visada atitinka šaknų sumą su priešingu ženklu."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-23-method-1",
        "title": "Skleidimo metodas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Kombinatorinė analizė",
            "action": "Suskaičiuojame kelius nario laipsniui gauti.",
            "reason": "Tai parodo kiekvieno šaknies indėlį į koeficientą.",
            "result": "Gauta šaknų suma su minuso ženklu.",
            "latex": ""
          }
        ],
        "finalAnswer": "-(r_1 + \\dots + r_n)"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-23-trap-1",
        "title": "Ženklo pamiršimas",
        "wrongMove": "Mokinys rašo $a_{n-1} = \\sum r_i$.",
        "whyTempting": "Intuicija sako, kad koeficientas lygus sumai.",
        "correction": "Kadangi šaknis $r$ įeina kaip $(x-r)$, kiekvienas narys turi minusą.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kokia yra $a_0$ išraiška per šaknis?",
      "Kaip Vijetos formulės keičiasi, jei vyriausias koeficientas $a_n \\neq 1$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-23-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Ką sako Vijetos formulė apie daugianario šaknų sumą?",
        "back": "Šaknų suma lygi $-a_{n-1}/a_n$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išskleiskite sandaugą $(x-r_1)(x-r_2)\\dots(x-r_n)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pažiūrėkite, kokie nariai sudaro $x^{n-1}$ koeficientą.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Kiekvieną kartą pasirenkame $n-1$ 'x' ir vieną laisvąjį narį $-r_i$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-24",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Raskite visas funkcijas $f: \\mathbb{Q}^+ \\to \\mathbb{Q}^+$, tenkinančias sąlygą $f(xy) = f(x)f(y)$ ir $f(x+y) = f(x) + f(y)$.",
    "answer": "f(x) = x",
    "acceptedAnswers": [
      "f(x) = x"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Raskite galimas $f(1)$ reikšmes.",
      "$f(1) = f(1 \\cdot 1) = f(1)f(1) \\implies f(1) = 1$ (nes reikšmės teigiamos).",
      "Naudokite indukciją natūraliesiems n, o tada išplėskite racionaliems $p/q$."
    ],
    "solution": "$f(1)^2 = f(1) \\implies f(1)=1$. $f(n) = f(1+\\dots+1) = f(1)+\\dots+f(1) = n$. $f(q \\cdot p/q) = f(p) \\implies f(q)f(p/q) = f(p) \\implies q f(p/q) = p$. $f(p/q) = p/q$ visiems $p, q \\in \\mathbb{N}$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Struktūrinis stabilumas virš racionalų",
      "text": "Dvi Koši lygtys kartu (sudėtis ir daugyba) virš racionaliųjų skaičių yra labai griežtos. Kadangi racionalieji skaičiai sukonstruoti iš 1 per šiuos veiksmus, funkcija yra visiškai apibrėžta jos reikšme taške 1."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-24-method-1",
        "title": "Aritmetinis išvedimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Taško 1 fiksavimas",
            "action": "Nustatome bazinę reikšmę.",
            "reason": "Tai visų multiplikatyvių lygčių pradžia.",
            "result": "Gauta $f(1)=1$.",
            "latex": ""
          }
        ],
        "finalAnswer": "f(x) = x"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-24-trap-1",
        "title": "Nulinio sprendinio ignoravimas",
        "wrongMove": "Mokinys sako, kad $f(1)$ gali būti tik 1.",
        "whyTempting": "Sąlygoje nurodyta teigiamų skaičių sritis.",
        "correction": "Jei sritis būtų visi realieji skaičiai, $f(x)=0$ taip pat būtų sprendinys, bet čia $\\mathbb{Q}^+$ tai neleidžia.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Ar šis įrodymas veikia be tolydumo sąlygos?",
      "Kas nutiktų, jei sąlyga $f(x+y)=f(x)+f(y)$ būtų pakeista į nelygybę?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-24-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia funkcija tenkina $f(xy)=f(x)f(y)$ ir $f(x+y)=f(x)+f(y)$ virš $\\mathbb{Q}^+$?",
        "back": "$f(x) = x$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Raskite galimas $f(1)$ reikšmes.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$f(1) = f(1 \\cdot 1) = f(1)f(1) \\implies f(1) = 1$ (nes reikšmės teigiamos).",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Naudokite indukciją natūraliesiems n, o tada išplėskite racionaliems $p/q$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-25",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Seka apibrėžta taip: $a_1 = 1$, $a_{n+1} = a_n + \\frac{1}{a_n}$. Įrodykite, kad $a_{100} > 14$.",
    "answer": "a_{100} > 14",
    "acceptedAnswers": [
      "a_{100} > 14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Pakelkite sąlygą $a_{n+1} = a_n + 1/a_n$ kvadratu.",
      "$a_{n+1}^2 = a_n^2 + 2 + 1/a_n^2$. Ką tai sako apie skirtumą $a_{n+1}^2 - a_n^2$?",
      "Sumuokite šiuos skirtumus nuo $n=1$ iki 99."
    ],
    "solution": "$a_{n+1}^2 = (a_n + 1/a_n)^2 = a_n^2 + 2 + 1/a_n^2 > a_n^2 + 2$. Tai reiškia $a_2^2 > a_1^2 + 2$, $a_3^2 > a_2^2 + 2$, ir t.t. Teleskopinė suma: $a_n^2 > a_1^2 + 2(n-1)$. $a_{100}^2 > 1 + 2(99) = 199$. Kadangi $14^2 = 196$, o $a_{100}^2 > 199$, tai $a_{100} > \\sqrt{199} > 14$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Kvadratinis augimas",
      "text": "Nagrinėjant sekos kvadratus $a_{n+1}^2$, galima pamatyti, kad seka auga panašiai kaip $\\sqrt{2n}$. Tai standartinis triukas sekų įvertinimui, kai narys priklauso nuo savo atvirkštinio."
    },
    "strategyTags": [
      "proof",
      "bounding"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-25-method-1",
        "title": "Kvadratų metodas",
        "methodType": "main",
        "strategyTags": [
          "bounding"
        ],
        "steps": [
          {
            "title": "Transformacija",
            "action": "Pereiname prie laipsnių, kad atsikratytume trupmenos.",
            "reason": "Kvadratas leidžia lengviau sumuoti pokyčius.",
            "result": "Gauta nelygybė $a_n^2 > 2n-1$.",
            "latex": ""
          }
        ],
        "finalAnswer": "a_{100} > 14"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-25-trap-1",
        "title": "Tiesioginis skaičiavimas",
        "wrongMove": "Mokinys bando skaičiuoti $a_1, a_2, a_3, a_4$ ir spėti dėsningumą.",
        "whyTempting": "Pradžia atrodo lengva.",
        "correction": "Seka auga lėtai ir skaičiavimai greitai tampa komplikuoti dėl trupmenų. Reikia ieškoti bendro įverčio.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip gauti dar tikslesnį $a_n$ įvertį?",
      "Kas nutiktų, jei formulė būtų $a_{n+1} = a_n + 2/a_n$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-25-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kaip vertinti seką $a_{n+1} = a_n + 1/a_n$?",
        "back": "Nagrinėti kvadratų skirtumus $a_{n+1}^2 - a_n^2 \\approx 2$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pakelkite sąlygą $a_{n+1} = a_n + 1/a_n$ kvadratu.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$a_{n+1}^2 = a_n^2 + 2 + 1/a_n^2$. Ką tai sako apie skirtumą $a_{n+1}^2 - a_n^2$?",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Sumuokite šiuos skirtumus nuo $n=1$ iki 99.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-26",
    "topicId": "olimpiada-12-algebra",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Muirheado nelygybė leidžia palyginti simetrines sumas $\\sum_{sym} x_1^{a_1}\\dots x_n^{a_n}$. Kokia yra sąlyga vektoriams $A$ ir $B$, kad viena suma dominuotų kitą?",
    "answer": "Majorizacija (A majorizuoja B)",
    "acceptedAnswers": [
      "Majorizacija (A majorizuoja B)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Vektorius $A$ majorizuoja $B$, jei sumos $\\sum_{i=1}^k a_i \\ge \\sum_{i=1}^k b_i$ visoms $k < n$.",
      "Taip pat turi galioti bendra lygybė $\\sum a_i = \\sum b_i$.",
      "Patikrinkite $(1,0,0)$ ir $(1/3, 1/3, 1/3)$ pavyzdį."
    ],
    "solution": "Apibrėžiame majorizaciją: $A \\succ B$. Sąlygos: $a_1 \\ge a_2 \\ge \\dots \\ge a_n$ ir $b_1 \\ge b_2 \\ge \\dots \\ge b_n$. Dalinės sumos: $a_1 + \\dots + a_k \\ge b_1 + \\dots + b_k$. Paskutinė suma lygi: $a_1 + \\dots + a_n = b_1 + \\dots + b_n$. Jei šios sąlygos tenkinamos, tai $\\sum_{sym} x^A \\ge \\sum_{sym} x^B$ visiems teigiamiems $x_i$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Algebra",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Majorizacijos principas",
      "text": "Muirheado nelygybė yra AM-GM apibendrinimas. Ji sako, kad jei laipsnių vektorius $A$ yra 'labiau išbarstytas' (majorizuoja) nei vektorius $B$, tai atitinkama simetrinė suma su laipsniais $A$ yra didesnė."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-26-method-1",
        "title": "Struktūrinė analizė",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Sąlygų nustatymas",
            "action": "Apibrėžiame nelygybės galiojimo sritį.",
            "reason": "Tai galingas įrankis spręsti homogenines nelygybes.",
            "result": "Identifikuota majorizacijos sąlyga.",
            "latex": ""
          }
        ],
        "finalAnswer": "Majorizacija (A majorizuoja B)"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-26-trap-1",
        "title": "Laipsnių sumos ignoravimas",
        "wrongMove": "Mokinys mano, kad galima lyginti bet kokius laipsnius.",
        "whyTempting": "Noras lyginti $x^2+y^2$ su $x+y$.",
        "correction": "Muirhead galioja tik kai bendra laipsnių suma yra vienoda (homogeniškumas).",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip AM-GM nelygybė užrašoma per Muirhead simboliką?",
      "Kokia yra minimali ir maksimali laipsnių vektoriaus 'išbarstymo' būsena?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-26-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kada galioja Muirheado nelygybė $\\sum_{sym} x^A \\ge \\sum_{sym} x^B$?",
        "back": "Kai vektorius A majorizuoja vektorių B ($A \\succ B$).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Vektorius $A$ majorizuoja $B$, jei sumos $\\sum_{i=1}^k a_i \\ge \\sum_{i=1}^k b_i$ visoms $k < n$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Taip pat turi galioti bendra lygybė $\\sum a_i = \\sum b_i$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Patikrinkite $(1,0,0)$ ir $(1/3, 1/3, 1/3)$ pavyzdį.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-12",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Kiek sutampančių taškų reikšmių pakanka įrodyti, kad projektinė transformacija (homografija) tiesėje yra tapati?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Užrašykite bendrąją trupmeninę-tiesinę funkciją $f(z)$.",
      "Suskaičiuokite nepriklausomus koeficientus lygtyje.",
      "Kiek lygčių reikia sudaryti, kad rasti $a, b, c, d$ santykius?"
    ],
    "solution": "Projektinė transformacija $f(x) = \\frac{ax+b}{cx+d}$ turi 3 laisvės laipsnius. Tapatumo transformacija yra $f(x) = x$, t.y. $a=1, b=0, c=0, d=1$. Fiksavus 3 taškus $x_1, x_2, x_3$, gauname sistemą, kuri turi tik vieną sprendinį. Jei 3 taškai lieka vietoje, tai visa funkcija yra tapati.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Projektinė geometrija: Homografijos",
      "text": "Projektinė transformacija tiesėje apibrėžiama lygtimi $f(x) = (ax+b)/(cx+d)$. Kadangi turime 3 laisvės laipsnius (koeficientus galima padalyti iš vieno iš jų), 3 taškai vienareikšmiškai apibrėžia transformaciją."
    },
    "strategyTags": [
      "logic",
      "proof"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-12-method-1",
        "title": "Koeficientų analizė",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Laisvės laipsnių skaičiavimas",
            "action": "Nustatome minimalų taškų kiekį sistemai uždaryti.",
            "reason": "Tai pagrindinė projektinės geometrijos teorema.",
            "result": "Gauta reikšmė 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-12-trap-1",
        "title": "Painiojimas su tiesine funkcija",
        "wrongMove": "Sakoma, kad užtenka 2 taškų.",
        "whyTempting": "Tiesei $y=ax+b$ užtenka dviejų taškų.",
        "correction": "Projektinė transformacija yra bendresnė ir apima dalybą iš $cx+d$.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-12-trap-2",
        "title": "Laisvės laipsnių klaida",
        "wrongMove": "Manoma, kad reikia 4 taškų, nes yra 4 raidės $a,b,c,d$.",
        "whyTempting": "Tiesioginis kintamųjų skaičiavimas.",
        "correction": "Svarbūs tik santykiai (pvz. $a/d$), todėl vienas koeficientas visada gali būti fiksuotas kaip 1.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Koks objektas išlieka nekintamas projektinėje transformacijoje (dvigubas santykis)?",
      "Kaip ši teorema padeda įrodyti Desargo teoremą?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-12-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek taškų apibrėžia homografiją tiesėje?",
        "back": "3 taškai.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Užrašykite bendrąją trupmeninę-tiesinę funkciją $f(z)$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Suskaičiuokite nepriklausomus koeficientus lygtyje.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Kiek lygčių reikia sudaryti, kad rasti $a, b, c, d$ santykius?",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-13",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Jei $a, b, c$ yra taisyklingojo trikampio viršūnės kompleksinėje plokštumoje, tenkinančios sąlygą $a + b\\omega + c\\omega^2 = 0$, koks yra $\\omega$ apibrėžimas, užtikrinantis šį ryšį?",
    "answer": "e^{2\\pi i / 3}",
    "acceptedAnswers": [
      "e^{2\\pi i / 3}"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Viršūnes laikykite vektoriais iš trikampio centro (tada $a+b+c=0$).",
      "Vektorius $b$ gaunamas pasukus $a$ per $120^\\circ$ kampą.",
      "Užrašykite šį sukinį per kompleksinę eksponentę."
    ],
    "solution": "Taisyklingajame trikampyje viršūnės yra išsidėsčiusios kas $120^\\circ$ aplink centrą. Pasukimas per $120^\\circ$ atitinka daugybą iš $e^{2\\pi i / 3}$. Lygties struktūra $a + b\\omega + c\\omega^2 = 0$ yra ekvivalenti teiginiui, kad taškai sudaro taisyklingąjį trikampį. Išvada: $\\omega$ yra trečiojo laipsnio vieneto šaknis.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Kompleksiniai skaičiai ir sukiniai",
      "text": "Taisyklingasis trikampis pasižymi simetrija sukiniui per 120 laipsnių. Kompleksinis skaičius $\\omega = e^{2\\pi i / 3}$ atlieka būtent šį sukinį."
    },
    "strategyTags": [
      "algebraic-transformation",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-13-method-1",
        "title": "Rotacinė analizė",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Vektorių sulyginimas",
            "action": "Išreiškiame viršūnes per centro sukinį.",
            "reason": "Tai patogiausias būdas dirbti su taisyklingomis figūromis.",
            "result": "Identifikuotas kampas $120^\\circ$.",
            "latex": ""
          }
        ],
        "finalAnswer": "e^{2\\pi i / 3}"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-13-trap-1",
        "title": "Kampo sumaišymas",
        "wrongMove": "Manoma, kad $\\omega$ atitinka $60^\\circ$ kampą.",
        "whyTempting": "Taisyklingo trikampio vidaus kampai yra $60^\\circ$.",
        "correction": "Centrinis kampas (nuo centro iki viršūnių) yra $360/3 = 120$ laipsnių.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-13-trap-2",
        "title": "Ženklo klaida eksponentėje",
        "wrongMove": "Rašoma $e^{\\pi i / 3}$.",
        "whyTempting": "Panašių formulių gausa trigonometrijoje.",
        "correction": "Visada pasitikrinkite: visas ratas yra $2\\pi$, todėl trečdalis rato yra $2\\pi/3$.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip atrodytų lygtis kvadratui kompleksinėje plokštumoje?",
      "Kokia yra $1 + \\omega + \\omega^2$ reikšmė?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-13-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia kompleksinė konstanta susieja taisyklingo trikampio viršūnes?",
        "back": "$\\omega = e^{2\\pi i / 3}$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Viršūnes laikykite vektoriais iš trikampio centro (tada $a+b+c=0$).",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Vektorius $b$ gaunamas pasukus $a$ per $120^\\circ$ kampą.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Užrašykite šį sukinį per kompleksinę eksponentę.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-14",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Raskite trikampio $ABC$ pusiaukraštinių susikirtimo taško (centroido) $G$ baricentrines koordinates.",
    "answer": "(1 : 1 : 1)",
    "acceptedAnswers": [
      "(1 : 1 : 1)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-barycentric"
    ],
    "hints": [
      "Prisiminkite centroido apibrėžimą: $G = (A+B+C)/3$.",
      "Baricentrines koordinates sudaro viršūnių koeficientai lygtyje.",
      "Patikrinkite trikampių $GAB, GBC, GCA$ plotų santykį."
    ],
    "solution": "Centroidas dalija kiekvieną pusiaukraštinę santykiu 2:1. Tai lemia, kad trikampiai $GBC, GCA, GAB$ turi vienodus plotus. Kadangi baricentrinės koordinatės proporcingos priešpriešinių trikampių plotams, jos turi būti lygios. Normalizuota forma: $1/3 : 1/3 : 1/3$, o standartinė santykio forma yra $(1 : 1 : 1)$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Svorio centras ir plotai",
      "text": "Baricentrinės koordinatės $(x:y:z)$ nurodo, kokias 'mases' reikia padėti viršūnėse, kad taškas būtų masės centras. Centroidui visos viršūnės turi vienodą įtaką."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [
      "olimpiada-12-concept-barycentric"
    ],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-14-method-1",
        "title": "Plotų santykio metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Geometrinė analizė",
            "action": "Parodome plotų lygybę.",
            "reason": "Tai giliausias baricentrinių koordinačių supratimas.",
            "result": "Koordinatės nustatytos.",
            "latex": ""
          }
        ],
        "finalAnswer": "(1 : 1 : 1)"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-14-trap-1",
        "title": "Klaidingas kraštinių ilgio naudojimas",
        "wrongMove": "Manoma, kad koordinatės yra $(a:b:c)$.",
        "whyTempting": "Centroidas atrodo susijęs su kraštinėmis.",
        "correction": "Koordinatės $(a:b:c)$ atitinka įbrėžtinio apskritimo centrą, o ne centroidą.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-14-trap-2",
        "title": "Vektorinė sumaištis",
        "wrongMove": "Pamirštama, kad koordinačių suma turi būti lygi 1 (arba jos turi būti santykio formoje).",
        "whyTempting": "Nepakankamas baricentrinių koordinačių formalizmo išmanymas.",
        "correction": "Visada užtikrinkite, kad santykis būtų supaprastintas iki paprasčiausių sveikųjų skaičių.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kokie yra ortocentro koeficientai?",
      "Kaip naudojant šias koordinates rasti tašką pusiaukraštinėje?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-14-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokios yra centroido baricentrinės koordinatės?",
        "back": "$(1 : 1 : 1)$.",
        "conceptIds": [
          "olimpiada-12-concept-barycentric"
        ],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Prisiminkite centroido apibrėžimą: $G = (A+B+C)/3$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Baricentrines koordinates sudaro viršūnių koeficientai lygtyje.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Patikrinkite trikampių $GAB, GBC, GCA$ plotų santykį.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-15",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Tegu turime tris apskritimus plokštumoje, kurių centrai nesudaro vienos tiesės. Kiek bendrų radikalių centrų (taškų, turinčių vienodą laipsnį visų trijų apskritimų atžvilgiu) jie turi?",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Nagrinėkite tris radikalias ašis poroms (1,2), (2,3) ir (3,1).",
      "Jei taškas priklauso pirmai ir antrai ašiai, jo laipsnis $L_1 = L_2$ ir $L_2 = L_3$.",
      "Iš tranzityvumo seka, kad jis priklauso ir trečiajai ašiai."
    ],
    "solution": "Radikali ašis dviem apskritimams yra tiesė. Dvi ašys (nesant lygiagretumo) kertasi viename taške. Šiame taške laipsnis visų trijų apskritimų atžvilgiu yra vienodas. Vadinasi, trečioji radikali ašis taip pat privalo eiti per šį tašką. Kadangi centrai nesudaro tiesės, ašys negali būti lygiagrečios, todėl sankirta yra unikali.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Radikalių ašių sankirta",
      "text": "Dviem apskritimams egzistuoja radikali ašis – tiesė, kurios taškai turi vienodą laipsnį abiejų apskritimų atžvilgiu. Trys tokios ašys, priklausančios apskritimų poroms, visada kertasi viename taške."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-15-method-1",
        "title": "Tranzityvumo įrodymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Laipsnio sulyginimas",
            "action": "Parodome, kad bendras taškas tenkina visas sąlygas.",
            "reason": "Tai fundamentalus geometrijos konstravimo principas.",
            "result": "Gauta reikšmė 1.",
            "latex": ""
          }
        ],
        "finalAnswer": "1"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-15-trap-1",
        "title": "Sumišimas su susikirtimo taškais",
        "wrongMove": "Manoma, kad atsakymas priklauso nuo to, ar apskritimai kertasi.",
        "whyTempting": "Radikali ašis sutampa su bendra styga, kai apskritimai kertasi.",
        "correction": "Radikali ašis egzistuoja ir nekertantiems apskritimams; tai nekeitžia taškų skaičiaus.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-15-trap-2",
        "title": "Ašies lygiagretumas",
        "wrongMove": "Teigiama, kad taškų gali nebūti.",
        "whyTempting": "Jei centrai būtų vienoje tiesėje, radikalios ašys būtų lygiagrečios.",
        "correction": "Sąlygoje pasakyta, kad centrai nesudaro vienos tiesės, todėl ašys privalo kirstis.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kas nutinka, jei apskritimai yra koncentriniai?",
      "Kaip radikalus centras naudojamas konstruojant statmeną apskritimą?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-15-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek radikalių centrų turi 3 apskritimai (nesant kolineariems centrams)?",
        "back": "1.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Nagrinėkite tris radikalias ašis poroms (1,2), (2,3) ir (3,1).",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Jei taškas priklauso pirmai ir antrai ašiai, jo laipsnis $L_1 = L_2$ ir $L_2 = L_3$.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Iš tranzityvumo seka, kad jis priklauso ir trečiajai ašiai.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-16",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Kiek mišrių įbrėžtinių apskritimų, kurie liečia dvi trikampio kraštines ir apibrėžtinį apskritimą, turi bet koks trikampis?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-feuerbach"
    ],
    "hints": [
      "Apsvarstykite vieną viršūnę, pavyzdžiui, A.",
      "Apskritimas turi liesti kraštines AB ir AC.",
      "Kadangi trikampis turi 3 viršūnes, pakartokite šį mąstymą kiekvienai iš jų."
    ],
    "solution": "Viršūnei A egzistuoja unikalus apskritimas liečiantis AB, AC ir lanką BC. Viršūnei B egzistuoja unikalus apskritimas liečiantis BA, BC ir lanką AC. Viršūnei C egzistuoja unikalus apskritimas liečiantis CA, CB ir lanką AB. Sumažinus iki visų įmanomų porų, gauname 3 tokius apskritimus.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Mixtilinear apskritimų konfigūracija",
      "text": "Kiekvienai viršūnei galima sukonstruoti vieną apskritimą, kuris yra įsispraudęs tarp dviejų iš tos viršūnės išeinančių kraštinių ir liečia trikampio apibrėžtinį apskritimą."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [
      "olimpiada-12-concept-feuerbach"
    ],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-16-method-1",
        "title": "Viršūnių perrinkimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Simetrijos išnaudojimas",
            "action": "Parodome unikalumą kiekvienai viršūnei.",
            "reason": "Konfigūracija yra simetriška trikampio elementų atžvilgiu.",
            "result": "Nustatyta reikšmė 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-16-trap-1",
        "title": "Painiojimas su priabrėžtiniais apskritimais",
        "wrongMove": "Manoma, kad tai yra tie patys apskritimai, kurie liečia kraštines iš išorės.",
        "whyTempting": "Abu tipai liečia visas 3 tieses (arba jų tęsinius/apibrėžtinius objektus).",
        "correction": "Mixtilinear apskritimai liečia apibrėžtinį apskritimą, o ne trečią kraštinę.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-16-trap-2",
        "title": "Skaičiavimo klaida",
        "wrongMove": "Sakoma 6 (skaičiuojant išorines ir vidines galimybes).",
        "whyTempting": "Dvigubo lanko egzistavimas (mažasis ir didysis lankas).",
        "correction": "Standartiškai 'mixtilinear incircle' nurodo tik įbrėžtinę pusę (mažąjį lanką).",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kur guli šių apskritimų sąlyčio su apibrėžtiniu apskritimu taškai?",
      "Kaip šie apskritimai susiję su įbrėžtiniu apskritimu (Incircle)?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-16-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek mixtilinear incircles turi trikampis?",
        "back": "3.",
        "conceptIds": [
          "olimpiada-12-concept-feuerbach"
        ],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Apsvarstykite vieną viršūnę, pavyzdžiui, A.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Apskritimas turi liesti kraštines AB ir AC.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Kadangi trikampis turi 3 viršūnes, pakartokite šį mąstymą kiekvienai iš jų.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-17",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Taisyklingo trikampio aukštinė yra $h$. Pagal Vivianio teoremą, raskite statmenų, nuleistų iš bet kurio vidinio taško į visas tris kraštines, ilgių sumą.",
    "answer": "h",
    "acceptedAnswers": [
      "h"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Sujunkite vidinį tašką $P$ su visomis trimis viršūnėmis $A, B, C$.",
      "Trikampio $ABC$ plotas yra trijų mažų trikampių $PAB, PBC, PCA$ plotų suma.",
      "Užrašykite plotus naudodami kraštinę $s$ ir atstumus $h_1, h_2, h_3$."
    ],
    "solution": "Trikampio $ABC$ plotas $S = \\frac{1}{2} s \\cdot h$, kur $s$ yra kraštinė. Mažųjų trikampių plotų suma: $\\frac{1}{2} s h_1 + \\frac{1}{2} s h_2 + \\frac{1}{2} s h_3$. Išlyginame: $\\frac{1}{2} s h = \\frac{1}{2} s (h_1 + h_2 + h_3)$. Suprastiname $s$ ir $1/2$, gauname $h = h_1 + h_2 + h_3$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Vivianio teorema",
      "text": "Tai elegantiška teorema, teigianti, kad taisyklingame trikampyje atstumų nuo taško iki kraštinių suma yra pastovi ir lygi trikampio aukštinei. Tai įrodoma per plotų lygybę."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-17-method-1",
        "title": "Plotų sumavimo metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Skaidymas",
            "action": "Padaliname trikampį į tris dalis su bendra viršūne $P$.",
            "reason": "Tai leidžia tiesiogiai susieti atstumus su bendru plotu.",
            "result": "Gauta pastovi suma $h$.",
            "latex": ""
          }
        ],
        "finalAnswer": "h"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-17-trap-1",
        "title": "Priklausomybė nuo taško padėties",
        "wrongMove": "Manoma, kad centre suma kitokia nei prie kraštinės.",
        "whyTempting": "Atrodo, kad arčiau viršūnės atstumai turėtų 'pasikeisti' reikšmingai.",
        "correction": "Suma išlieka identiška bet kuriam taškui trikampio viduje.",
        "conceptIds": []
      },
      {
        "id": "ex-olimpiada-12-17-trap-2",
        "title": "Taikymas netaisyklingam trikampiui",
        "wrongMove": "Bandoma taikyti tą pačią konstanta bet kokiam trikampiui.",
        "whyTempting": "Noras apibendrinti teoremas.",
        "correction": "Suma yra pastovi tik tada, kai visos kraštinės lygios (kad plotų formulėse $s$ būtų bendras vardiklis).",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kaip ši teorema apibendrinama taisyklingiems daugiakampiams?",
      "Kas nutinka, jei taškas yra trikampio išorėje?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-17-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra atstumų nuo taško iki kraštinių suma taisyklingame trikampyje?",
        "back": "Lygi trikampio aukštinei $h$ (Vivianio teorema).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Sujunkite vidinį tašką $P$ su visomis trimis viršūnėmis $A, B, C$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Trikampio $ABC$ plotas yra trijų mažų trikampių $PAB, PBC, PCA$ plotų suma.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Užrašykite plotus naudodami kraštinę $s$ ir atstumus $h_1, h_2, h_3$.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-18",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Menelajo teorema teigia, kad taškai $D, E, F$ ant trikampio $ABC$ kraštinių (arba jų tęsinių) yra kolinearūs tada ir tik tada, kai tam tikras santykių sandaugos modulis lygus 1. Užrašykite šią sandaugą.",
    "answer": "\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1",
    "acceptedAnswers": [
      "\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tarkime, kad taškai $F \\in AB$, $D \\in BC$, $E \\in CA$.",
      "Sekite trikampio apėjimo ratu taisyklę: viršūnė-taškas, taškas-viršūnė.",
      "Sandauga turi apimti visas tris kraštines ir visus tris kolinearius taškus."
    ],
    "solution": "Pasirenkame taškus ant kraštinių: $F$ ant $AB$, $D$ ant $BC$, $E$ ant $CA$. Užrašome santykius: $AF/FB$, $BD/DC$, $CE/EA$. Pagal teoremą, jei taškai vienoje tiesėje, tai $\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Kraštinių santykiai",
      "text": "Menelajo teorema yra viena pagrindinių kolinearumo tikrinimo priemonių. Ji susieja taškų padėtį ant tiesių su trikampio viršūnėmis."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-18-method-1",
        "title": "Santykių analizė",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Sandaugos sudarymas",
            "action": "Nuosekliai užrašome visus segmentus.",
            "reason": "Tai leidžia formaliai patikrinti kolinearumą.",
            "result": "Gauta Menelajo lygtis.",
            "latex": ""
          }
        ],
        "finalAnswer": "\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-18-trap-1",
        "title": "Santykių sumaišymas",
        "wrongMove": "Mokinys rašo $AF/FB \\cdot CD/DB \\dots$",
        "whyTempting": "Lengva supainioti atkarpų eiliškumą.",
        "correction": "Visada judėkite viena kryptimi aplink trikampį, kad nepasimestumėte tarp viršūnių.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kuo skiriasi Menelajo teorema nuo Čevos teoremos?",
      "Kada sandaugos reikšmė laikoma -1?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-18-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Menelajo teoremą trikampiui ABC.",
        "back": "$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tarkime, kad taškai $F \\in AB$, $D \\in BC$, $E \\in CA$.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Sekite trikampio apėjimo ratu taisyklę: viršūnė-taškas, taškas-viršūnė.",
        "revealsConceptIds": [],
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Sandauga turi apimti visas tris kraštines ir visus tris kolinearius taškus.",
        "revealsConceptIds": [],
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-19",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Čevos teorema teigia, kad trys tiesės, jungiančios trikampio viršūnes su taškais $D, E, F$ priešpriešinėse kraštinėse, kertasi viename taške tada ir tik tada, kai $\frac{AF}{FB} \\cdot \frac{BD}{DC} \\cdot \frac{CE}{EA} = 1$. Koks taškas gaunamas, kai visi santykiai lygūs 1?",
    "answer": "Centroidas",
    "acceptedAnswers": [
      "Centroidas"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Jei santykis $AF/FB = 1$, tai taškas $F$ yra kraštinės $AB$ vidurio taškas.",
      "Kas nutinka, kai visos tiesės yra pusiaukraštinės?"
    ],
    "solution": "Sąlyga $AF/FB = 1 \\implies AF = FB$, t.y. $F$ yra vidurio taškas. Tiesės $AD, BE, CF$ yra trikampio pusiaukraštinės. Pusiaukraštinių susikirtimo taškas vadinamas centroidu.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Konkurencija (Concurrence)",
      "text": "Čevos teorema nustato sąlygą, kada trys tiesės susitinka viename taške. Jei taškai yra kraštinių viduriai, čevianės yra pusiaukraštinės."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-19-method-1",
        "title": "Geometrinė dedukcija",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Vidurio taškų nustatymas",
            "action": "Interpretuojame santykių lygybę.",
            "reason": "Vienetas reiškia atkarpų lygybę.",
            "result": "Gautos pusiaukraštinės.",
            "latex": ""
          }
        ],
        "finalAnswer": "Centroidas"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-19-trap-1",
        "title": "Painiojimas su ortocentru",
        "wrongMove": "Mokinys sako, kad tai ortocentras.",
        "whyTempting": "Abu yra trikampio centrai.",
        "correction": "Ortocentrui reikia statmenų tiesių, o čia turime atkarpų lygybę.",
        "conceptIds": []
      }
    ],
    "reflectionPrompts": [
      "Kokie taškai gaunami, kai santykiai susiję su kampų pusiaukampinėmis?",
      "Ar Čevos teorema galioja, kai sankirtos taškas yra trikampio išorėje?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-19-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia teorema tikrina, ar trys tiesės trikampyje kertasi viename taške?",
        "back": "Čevos teorema.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Jei santykis $AF/FB = 1$, tai taškas $F$ yra kraštinės $AB$ vidurio taškas.",
        "revealsConceptIds": [],
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kas nutinka, kai visos tiesės yra pusiaukraštinės?",
        "revealsConceptIds": [],
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-20",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Oilerio tiesė jungia kelis svarbius trikampio taškus. Kurie iš išvardintų taškų guli šioje tiesėje: centroidas (G), ortocentras (H), apibrėžtinio apskritimo centras (O)?",
    "answer": "Visi trys (G, H, O)",
    "acceptedAnswers": [
      "Visi trys (G, H, O)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Prisiminkite Oilerio tiesės apibrėžimą."
    ],
    "solution": "Oilerio tiesė apibrėžiama kaip tiesė einanti per H, G ir O. Centroidas (G) visada dalija atkarpą HO santykiu 2:1.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 60,
    "coreIdea": {
      "title": "Oilerio tiesė",
      "text": "Bet kuriame netaisyklingame trikampyje ortocentras, centroidas ir apibrėžtinio apskritimo centras visada yra vienoje tiesėje."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-20-method-1",
        "title": "Taškų identifikavimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Teoremos citavimas",
            "action": "Išvardiname kolinearius taškus.",
            "reason": "Tai bazinė trikampio geometrijos savybė.",
            "result": "Nustatyta aibė {G, H, O}.",
            "latex": ""
          }
        ],
        "finalAnswer": "Visi trys (G, H, O)"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [
      "Koks dar taškas guli šioje tiesėje?",
      "Kada Oilerio tiesė virsta tašku?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-20-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokie trys pagrindiniai trikampio taškai sudaro Oilerio tiesę?",
        "back": "Ortocentras (H), Centroidas (G) ir Apibrėžtinio apskritimo centras (O).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Prisiminkite Oilerio tiesės apibrėžimą.",
        "revealsConceptIds": [],
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-21",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Koks yra devynių taškų apskritimo spindulys, palyginti su apibrėžtinio apskritimo spinduliu R?",
    "answer": "R/2",
    "acceptedAnswers": [
      "R/2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "olimpiada-12-concept-feuerbach"
    ],
    "hints": [
      "Apsvarstykite trikampį, sudarytą iš kraštinių vidurio taškų."
    ],
    "solution": "Kraštinių vidurio taškai sudaro medialinį trikampį, kurio apibrėžtinio apskritimo spindulys yra $R/2$. Šis apskritimas ir yra devynių taškų apskritimas.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 75,
    "coreIdea": {
      "title": "Homotetija geometrijoje",
      "text": "Devynių taškų apskritimas yra apibrėžtinio apskritimo vaizdas per homotetiją su koeficientu 1/2."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [
      "olimpiada-12-concept-feuerbach"
    ],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-21-method-1",
        "title": "Panašumo metodas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Trikampių sulyginimas",
            "action": "Susiejame medialinį trikampį su pradiniu.",
            "reason": "Vidurio linijos visada perpus trumpesnės.",
            "result": "Gautas spindulys R/2.",
            "latex": ""
          }
        ],
        "finalAnswer": "R/2"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-21-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra devynių taškų apskritimo spindulys?",
        "back": "R/2.",
        "conceptIds": [
          "olimpiada-12-concept-feuerbach"
        ],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Apsvarstykite trikampį, sudarytą iš kraštinių vidurio taškų.",
        "revealsConceptIds": [],
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-22",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Simsono tiesė gaunama nuleidus statmenis iš taško P į trikampio kraštines. Kur privalo būti taškas P, kad šie statmenų pagrindai būtų kolinearūs?",
    "answer": "Ant apibrėžtinio apskritimo",
    "acceptedAnswers": [
      "Ant apibrėžtinio apskritimo"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Ištirkite kampų lygybes įbrėžtiniuose keturkampuose."
    ],
    "solution": "Statmenų pagrindai yra kolinearūs tada ir tik tada, kai P guli ant apibrėžtinio apskritimo.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Simsono tiesė",
      "text": "Tai specifinė kolinearumo savybė, galiojanti tik taškams ant apibrėžtinio apskritimo."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-22-method-1",
        "title": "Kampų analizė",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Sąlygos radimas",
            "action": "Nustatome P padėtį.",
            "reason": "Tai klasikinė teorema.",
            "result": "P guli ant apskritimo.",
            "latex": ""
          }
        ],
        "finalAnswer": "Ant apibrėžtinio apskritimo"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-22-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kada statmenų pagrindai iš taško P yra kolinearūs?",
        "back": "Kai P guli ant apibrėžtinio apskritimo.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Ištirkite kampų lygybes įbrėžtiniuose keturkampuose.",
        "revealsConceptIds": [],
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-23",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Užrašykite Ptolemėjo teoremą įbrėžtiniam keturkampiui ABCD.",
    "answer": "AB \\cdot CD + BC \\cdot DA = AC \\cdot BD",
    "acceptedAnswers": [
      "AB \\cdot CD + BC \\cdot DA = AC \\cdot BD"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Įbrėžtiniam keturkampiui galioja: $AB \\cdot CD + BC \\cdot DA = AC \\cdot BD$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Ptolemėjo teorema",
      "text": "Kraštinių sandaugų suma lygi įstrižainių sandaugai."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-23-method-1",
        "title": "Tiesioginis užrašymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Formulė",
            "action": "Pateikiame tapatybę.",
            "reason": "Tai metrinis ryšys.",
            "result": "Gauta lygtis.",
            "latex": ""
          }
        ],
        "finalAnswer": "AB \\cdot CD + BC \\cdot DA = AC \\cdot BD"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-23-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Užrašykite Ptolemėjo teoremą.",
        "back": "$AB \\cdot CD + BC \\cdot DA = AC \\cdot BD$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-24",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Kokia tiesė jungia priešingų įbrėžtinio šešiakampio kraštinių sankirtas?",
    "answer": "Paskalio tiesė",
    "acceptedAnswers": [
      "Paskalio tiesė"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Tai Paskalio teoremos rezultatas.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Paskalio teorema",
      "text": "Priešingų kraštinių sankirtos taškai visada yra kolinearūs."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-24-method-1",
        "title": "Identifikavimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Teoremos pavadinimas",
            "action": "Nurodome autorių.",
            "reason": "Tai fundamentalus rezultatas.",
            "result": "Paskalio tiesė.",
            "latex": ""
          }
        ],
        "finalAnswer": "Paskalio tiesė"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-24-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kaip vadinama tiesė iš Paskalio teoremos?",
        "back": "Paskalio tiesė.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-25",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Inversija apskritimo $C(O, r)$ atžvilgiu tašką P atvaizduoja į P'. Koks yra ryšys tarp atstumų $OP$ ir $OP'$?",
    "answer": "OP \\cdot OP' = r^2",
    "acceptedAnswers": [
      "OP \\cdot OP' = r^2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Pagal apibrėžimą $OP \\cdot OP' = r^2$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Inversijos principas",
      "text": "Inversija 'išverčia' plokštumą apskritimo atžvilgiu: taškai viduje keliauja į išorę ir atvirkščiai."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-25-method-1",
        "title": "Apibrėžimo taikymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Formulė",
            "action": "Užrašome inversijos ryšį.",
            "reason": "Tai geometrinės transformacijos pagrindas.",
            "result": "OP * OP' = r^2.",
            "latex": ""
          }
        ],
        "finalAnswer": "OP \\cdot OP' = r^2"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-25-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia lygybė apibrėžia inversiją spindulio r apskritime?",
        "back": "$OP \\cdot OP' = r^2$.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-26",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Steinerio teorema teigia, kad bet kuriai Simsono tiesei simetriška tiesė trikampio kraštinių atžvilgiu eina per tam tikrą tašką. Koks tai taškas?",
    "answer": "Ortocentras (H)",
    "acceptedAnswers": [
      "Ortocentras (H)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Steinerio tiesė (Simsono tiesės homotetija) visada eina per ortocentrą.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Simsono ir Steinerio ryšys",
      "text": "Simsono tiesė yra pusiaukelėje tarp taško P ir ortocentro H."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-26-method-1",
        "title": "Identifikavimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Taškas H",
            "action": "Nurodome ortocentrą.",
            "reason": "Tai klasikinė Steinerio savybė.",
            "result": "H.",
            "latex": ""
          }
        ],
        "finalAnswer": "Ortocentras (H)"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-26-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Per kokį tašką eina Steinerio tiesė?",
        "back": "Ortocentrą (H).",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-27",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Monžo (Monge) teorema teigia, kad trijų apskritimų išorinių liestinių porų susikirtimo taškai yra kolinearūs. Kokia yra šios tiesės savybė?",
    "answer": "Jie guli vienoje tiesėje",
    "acceptedAnswers": [
      "Jie guli vienoje tiesėje"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Tai trimatės erdvės (kūgių) projekcija į plokštumą.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Monžo teorema",
      "text": "Trijų apskritimų bendrų išorinių liestinių sankirtos taškai yra kolinearūs."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-27-method-1",
        "title": "Geometrinė savybė",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Kolinearumas",
            "action": "Nurodome išsidėstymą.",
            "reason": "Monžo teoremos esmė.",
            "result": "Viena tiesė.",
            "latex": ""
          }
        ],
        "finalAnswer": "Jie guli vienoje tiesėje"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-27-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Ką sako Monžo teorema apie trijų apskritimų liestines?",
        "back": "Išorinių liestinių sankirtos taškai yra kolinearūs.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-28",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Desargo teorema teigia, kad jei du trikampiai yra perspektyvūs iš taško, tai jie yra perspektyvūs ir iš tam tikro kito objekto. Koks tai objektas?",
    "answer": "Tiesės (ašies)",
    "acceptedAnswers": [
      "Tiesės (ašies)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Atitinkamų kraštinių sankirtos taškai guli vienoje tiesėje (Desargo ašyje).",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Desargo teorema",
      "text": "Perspektyvumas iš taško (centrinė projekcija) implikuoja perspektyvumą iš tiesės (atitinkamų kraštinių sankirtos yra kolinearios)."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-28-method-1",
        "title": "Dualumo principas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Ašis",
            "action": "Identifikuojame objektą.",
            "reason": "Tai projektinės geometrijos pamatas.",
            "result": "Tiesė.",
            "latex": ""
          }
        ],
        "finalAnswer": "Tiesės (ašies)"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-28-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Ką jungia Desargo ašis?",
        "back": "Perspektyvių trikampių atitinkamų kraštinių sankirtas.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-29",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Kokia yra harmoninio ketverto (A, B; C, D) dvigubo santykio vertė?",
    "answer": "-1",
    "acceptedAnswers": [
      "-1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Dvigubas santykis $(AC/CB) / (AD/DB) = -1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Harmoninis santykis",
      "text": "Harmoninis ketvertas yra keturių kolinearių taškų konfigūracija, kurios dvigubas santykis lygus -1."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-29-method-1",
        "title": "Skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Vertė",
            "action": "Nurodome konstantą.",
            "reason": "Tai apibrėžimas.",
            "result": "-1.",
            "latex": ""
          }
        ],
        "finalAnswer": "-1"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-29-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra harmoninio santykio reikšmė?",
        "back": "-1.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-30",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Izogonalinės konjugacijos metu spindulys iš viršūnės atvaizduojamas į kitą spindulį, simetrišką tam tikros tiesės atžvilgiu. Kas tai per tiesė?",
    "answer": "Kampo pusiaukampinė",
    "acceptedAnswers": [
      "Kampo pusiaukampinė"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Simetrija atliekama vidaus kampo pusiaukampinės atžvilgiu.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 80,
    "coreIdea": {
      "title": "Izogonalinės konjugatės",
      "text": "Dvi tiesės per viršūnę yra izogonalinės, jei jos sudaro vienodus kampus su kampo pusiaukampine."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-30-method-1",
        "title": "Simetrijos ašis",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Pusiaukampinė",
            "action": "Nurodome tiesę.",
            "reason": "Tai izogonalumo apibrėžimas.",
            "result": "Kampo pusiaukampinė.",
            "latex": ""
          }
        ],
        "finalAnswer": "Kampo pusiaukampinė"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-30-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokios tiesės atžvilgiu simetriškos izogonalinės tiesės?",
        "back": "Kampo pusiaukampinės.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-31",
    "topicId": "olimpiada-12-geometrija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Simediana yra tiesė, izogonaliai konjuguota kuriam kitam trikampio elementui?",
    "answer": "Pusiaukraštinei",
    "acceptedAnswers": [
      "Pusiaukraštinei"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [],
    "solution": "Simediana yra pusiaukraštinės (medianos) izogonalė.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Geometrija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Simedianos",
      "text": "Simediana yra pusiaukraštinės atspindys pusiaukampinės atžvilgiu."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-31-method-1",
        "title": "Identifikavimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Mediana",
            "action": "Nurodome originalų spindulį.",
            "reason": "Tai simedianos apibrėžimas.",
            "result": "Pusiaukraštinė.",
            "latex": ""
          }
        ],
        "finalAnswer": "Pusiaukraštinei"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-31-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia tiesė yra simediana?",
        "back": "Pusiaukraštinės (medianos) izogonalė.",
        "conceptIds": [],
        "methodIds": [],
        "defaultEnabled": true
      }
    ],
    "hintsRaw": []
  },
  {
    "id": "ex-olimpiada-12-05",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Ar Šuro teorema garantuoja, kad nuspalvinus teigiamus sveikuosius skaičius baigtiniu skaičiumi spalvų, visada rasime vienspalvį sprendinį $x+y=z$? Atsakykite 'Taip' arba 'Ne'.",
    "answer": "Taip",
    "acceptedAnswers": [
      "Taip"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Prisiminkite Šuro teoremos formuluotę kombinatorikoje.",
      "Teorema tiesiogiai mini lygtį $x+y=z$.",
      "Ar svarbu, kad $x$ ir $y$ gali būti lygūs? Teorema leidžia $x=y$."
    ],
    "solution": "Identifikuojame uždavinį kaip Rėmzio teorijos dalį. Šuro teorema garantuoja vienspalvį trejetą bet kuriam baigtiniam spalvų skaičiui. Kadangi klausiama apie garantiją, atsakymas yra teigiamas.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Šuro teorema ir sumų aibės",
      "text": "Šuro teorema teigia, kad bet kuriam spalvų skaičiui $k$ egzistuoja riba $S(k)$, tokia, kad intervale $[1, S(k)]$ bet koks $k$-spalvinimas turės vienspalvį trejetą $(x, y, x+y)$."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-05-method-1",
        "title": "Teorinis patvirtinimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Apibrėžimo taikymas",
            "action": "Susiejame teoremos sąlygą su uždavinio klausimu.",
            "reason": "Teorema yra egzistencinis teiginys.",
            "result": "Patvirtinta.",
            "latex": ""
          }
        ],
        "finalAnswer": "Taip"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-05-trap-1",
        "title": "Sumišimas su Van der Vardeno teorema",
        "wrongMove": "Manoma, kad ieškome aritmetinės progresijos.",
        "whyTempting": "Abi temos nagrinėja spalvinimus ir skaičių struktūras.",
        "correction": "Van der Vardenas nagrinėja $a, a+d, a+2d$, o Šuras nagrinėja $x, y, x+y$."
      }
    ],
    "reflectionPrompts": [
      "Koks yra mažiausias $x+y=z$ sprendinys 2-spalvinimui?",
      "Kaip Šuro skaičiai $S(k)$ susiję su Rėmzio skaičiais?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-05-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Ką garantuoja Šuro teorema spalvinant sveikuosius skaičius?",
        "back": "Egzistuoja vienspalvis sprendinys lygčiai $x+y=z$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Prisiminkite Šuro teoremos formuluotę kombinatorikoje.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Teorema tiesiogiai mini lygtį $x+y=z$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Ar svarbu, kad $x$ ir $y$ gali būti lygūs? Teorema leidžia $x=y$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-11",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite $2 \\times 2$ matricos, kurios visi keturi elementai lygūs $1/2$, permanentą.",
    "answer": "0.5",
    "acceptedAnswers": [
      "0.5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Užrašykite matricos struktūrą $A = \\begin{pmatrix} a & b \\ c & d \\end{pmatrix}$.",
      "Permanento formulė $2 \\times 2$ matricai yra $ad + bc$.",
      "Įstatykite visas reikšmes $1/2$."
    ],
    "solution": "Matrica yra $\\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \\end{pmatrix}$. Pagal formulę $\\text{perm}(A) = (1/2)(1/2) + (1/2)(1/2)$. Skaičiuojame: $1/4 + 1/4 = 2/4 = 1/2$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Permanento apibrėžimas",
      "text": "Permanentas skaičiuojamas panašiai kaip determinantas, tačiau visos sandaugos imamos su teigiamu ženklu."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-11-method-1",
        "title": "Tiesioginis skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Apibrėžimo taikymas",
            "action": "Sudauginame narius be atimties ženklo.",
            "reason": "Permanentas skiriasi nuo determinanto būtent šiuo aspektu.",
            "result": "Gautas 1/2.",
            "latex": ""
          }
        ],
        "finalAnswer": "1/2"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-11-trap-1",
        "title": "Painiojimas su determinantu",
        "wrongMove": "Apskaičiuojamas $1/4 - 1/4 = 0$.",
        "whyTempting": "Determinantas yra daug dažniau naudojama operacija.",
        "correction": "Visada atidžiai perskaitykite operacijos pavadinimą; permanentui nereikia keisti ženklų."
      }
    ],
    "reflectionPrompts": [
      "Kodėl permanentą skaičiuoti yra sunkiau nei determinantą didelėms matricoms?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-11-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra permanentas $2 \\times 2$ matricos su visais $1/2$?",
        "back": "1/2 (nes $1/4 + 1/4 = 1/2$).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Užrašykite matricos struktūrą $A = \\begin{pmatrix} a & b \\ c & d \\end{pmatrix}$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Permanento formulė $2 \\times 2$ matricai yra $ad + bc$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Įstatykite visas reikšmes $1/2$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-18",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Atsitiktinis dydis $X \\ge 0$ turi vidurkį $E[X] = 10$ ir dispersiją $\\text{Var}(X) = 5$. Įvertinkite tikimybę $P(X=0)$ iš viršaus naudodami antrojo momento metodo principą (Čebyševo nelygybės formą).",
    "answer": "0.05",
    "acceptedAnswers": [
      "0.05"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Naudokite nelygybę $P(X=0) \\le \\frac{\\text{Var}(X)}{(E[X])^2}$.",
      "Apskaičiuokite vardiklį: $10^2$.",
      "Padalykite dispersiją iš gauto rezultato."
    ],
    "solution": "Formulė: $P(X=0) \\le \\frac{\\text{Var}(X)}{E[X]^2}$. Įstatome duomenis: $E[X] = 10$, $\\text{Var}(X) = 5$. $P(X=0) \\le \\frac{5}{100} = 0.05$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Antrojo momento metodas",
      "text": "Tikimybiniame metode antrasis momentas (dispersija) leidžia parodyti, kad atsitiktinis dydis yra teigiamas su didele tikimybe."
    },
    "strategyTags": [
      "logic",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-18-method-1",
        "title": "Čebyševo nelygybės taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Momentų skaičiavimas",
            "action": "Įvertiname nuokrypio tikimybę.",
            "reason": "Tai pagrindinis įrankis tikimybiniuose įrodymuose.",
            "result": "Tikimybė neviršija 5%.",
            "latex": ""
          }
        ],
        "finalAnswer": "0.05"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-18-trap-1",
        "title": "Vardiklio klaida",
        "wrongMove": "Dalijama iš $E[X]$ vietoj $E[X]^2$.",
        "whyTempting": "Painiojimas su Markovo nelygybe.",
        "correction": "Antrojo momento metodui būtinas kvadratas dispersijai atliepti."
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų įvertis, jei dispersija būtų 100?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-18-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia formulė įvertina $P(X=0)$ naudojant dispersiją?",
        "back": "$P(X=0) \\le \\text{Var}(X)/E[X]^2$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite nelygybę $P(X=0) \\le \\frac{\\text{Var}(X)}{(E[X])^2}$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Apskaičiuokite vardiklį: $10^2$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Padalykite dispersiją iš gauto rezultato.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-19",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite pilnojo grafo $K_3$ (trikampio) gretimumo matricos didžiausią tikrinę reikšmę.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Užrašykite $K_3$ gretimumo matricą.",
      "Koks yra kiekvienos viršūnės laipsnis (kaimynų skaičius) grafe $K_3$?",
      "Prisiminkite ryšį tarp $d$-reguliaraus grafo ir jo spektro."
    ],
    "solution": "$K_3$ yra grafas su 3 viršūnėmis, kur kiekviena sujungta su visomis kitomis. Viršūnės laipsnis $d = 3-1 = 2$. Matrica yra $\\begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \\end{pmatrix}$. Didžiausia tikrinė reikšmė reguliariam grafui lygi jo laipsniui, t.y. 2.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Spektrinė grafų teorija",
      "text": "Reguliariam grafui, kurio kiekviena viršūnė turi laipsnį $d$, didžiausia tikrinė reikšmė visada lygi $d$."
    },
    "strategyTags": [
      "algebraic-transformation",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-19-method-1",
        "title": "Reguliarumo savybė",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Laipsnio identifikavimas",
            "action": "Nustatome grafo kaimynų skaičių.",
            "reason": "Tai greičiausias būdas rasti spektrinį spindulį reguliariems objektams.",
            "result": "Gauta reikšmė 2.",
            "latex": ""
          }
        ],
        "finalAnswer": "2"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-19-trap-1",
        "title": "Viršūnių skaičiaus painiojimas su laipsniu",
        "wrongMove": "Sako, kad atsakymas yra 3.",
        "whyTempting": "Grafas vadinamas $K_3$.",
        "correction": "Laipsnis visada lygus $n-1$, todėl atsakymas yra 2."
      }
    ],
    "reflectionPrompts": [
      "Koks būtų pilnojo grafo $K_n$ spektrinis spindulys?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-19-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia didžiausia $K_3$ matricos tikrinė reikšmė?",
        "back": "2 (lygi grafo laipsniui).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Užrašykite $K_3$ gretimumo matricą.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Koks yra kiekvienos viršūnės laipsnis (kaimynų skaičius) grafe $K_3$?",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Prisiminkite ryšį tarp $d$-reguliaraus grafo ir jo spektro.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-20",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite incidencyvumo matricos (virš lauko $\\mathbb{F}_2$) rangą jungiamame grafe su 5 viršūnėmis.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Apsvarstykite paprasčiausią jungiamą grafą su 5 viršūnėmis – medį.",
      "Kiek briaunų turi medis su $n$ viršūnių? ($n-1$).",
      "Pastebėkite, kad visų eilučių suma $\\mathbb{F}_2$ yra nulinis vektorius."
    ],
    "solution": "Incidencyvumo matrica turi $n=5$ eilučių. Kiekvienas stulpelis turi lygiai du vienetus, todėl visų eilučių suma moduliu 2 yra 0. Tai reiškia, kad $Rangas \\le n-1$. Jungiamam grafui $Rangas = n-1 = 4$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Algebrinė grafų teorija: Rangas",
      "text": "Jungiamam grafui su $n$ viršūnių incidencyvumo matricos rangas virš $\\mathbb{F}_2$ yra lygus $n-1$."
    },
    "strategyTags": [
      "logic",
      "proof"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-20-method-1",
        "title": "Matricų teorija grafuose",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Priklausomybės nustatymas",
            "action": "Parodome, kad viršūnių vektoriai sumuojasi į nulį.",
            "reason": "Tai nustato viršutinę rango ribą.",
            "result": "Gauta reikšmė 4.",
            "latex": ""
          }
        ],
        "finalAnswer": "4"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-20-trap-1",
        "title": "Briaunų skaičiaus tapatinimas su rangu",
        "wrongMove": "Sakoma, kad rangas lygus briaunų skaičiui.",
        "whyTempting": "Matricos stulpelių skaičius atrodo svarbus.",
        "correction": "Rangas negali viršyti eilučių skaičiaus."
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų rangas, jei grafas turėtų 2 atskiras dalis?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-20-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra 5 viršūnių jungiamo grafo incidencyvumo matricos rangas?",
        "back": "4 (t.y. $n-1$).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Apsvarstykite paprasčiausią jungiamą grafą su 5 viršūnėmis – medį.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kiek briaunų turi medis su $n$ viršūnių? ($n-1$).",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Pastebėkite, kad visų eilučių suma $\\mathbb{F}_2$ yra nulinis vektorius.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-21",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite Rėmzio skaičių $R(3,3)$ – mažiausią žmonių grupę, kurioje visada yra bent trys tarpusavyje pažįstami arba trys tarpusavyje nepažįstami asmenys.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Apsvarstykite 5 žmonių grupę ir nupieškite grafą, kuriame nėra $K_3$ ir $\\bar{K}_3$.",
      "Paimkite vieną žmogų iš 6 ir pažiūrėkite į jo 5 ryšius.",
      "Pagal Dirichlė principą, bent 3 iš jų privalo būti tos pačios spalvos."
    ],
    "solution": "Parodome, kad 5 neužtenka: ciklas $C_5$ neturi trikampių. Nagrinėjame 6 žmones. Pasirenkame viršūnę $V$. Pagal Dirichlė principą, bent 3 briaunos iš $V$ yra vienos spalvos. Bet kuriuo atveju trikampis egzistuoja, tad $R(3,3)=6$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Rėmzio teorija: R(3,3)",
      "text": "Rėmzio skaičiai nurodo minimalią struktūrą, kurioje neišvengiamai atsiranda tam tikra vienspalvė dalis."
    },
    "strategyTags": [
      "logic",
      "proof"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-21-method-1",
        "title": "Dirichlė principo taikymas grafuose",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Dvipusis įrodymas",
            "action": "Parodome pavyzdį 5 ir prieštarą 6-etui.",
            "reason": "Rėmzio skaičiui reikia nustatyti tikslią ribą iš abiejų pusių.",
            "result": "Gauta reikšmė 6.",
            "latex": ""
          }
        ],
        "finalAnswer": "6"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-21-trap-1",
        "title": "Klaidingas atsakymas 5",
        "wrongMove": "Manoma, kad 5 žmonių užtenka.",
        "whyTempting": "5 yra 'apvali' reikšmė.",
        "correction": "Pavyzdys su $C_5$ parodo, kad 5 žmonės gali sudaryti grupę be trikampių."
      }
    ],
    "reflectionPrompts": [
      "Kodėl $R(4,4)$ yra žymiai didesnis (18)?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-21-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra R(3,3) reikšmė?",
        "back": "6.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Apsvarstykite 5 žmonių grupę ir nupieškite grafą, kuriame nėra $K_3$ ir $\\bar{K}_3$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Paimkite vieną žmogų iš 6 ir pažiūrėkite į jo 5 ryšius.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Pagal Dirichlė principą, bent 3 iš jų privalo būti tos pačios spalvos.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-22",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite didžiausią įmanomą briaunų skaičių grafe su 5 viršūnėmis, kuriame nėra nė vieno trikampio ($K_3$-free).",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Pabandykite padalyti 5 viršūnes į dvi grupes.",
      "Suskaičiuokite briaunas skaidymams (1, 4) ir (2, 3).",
      "Taikykite Mantelio formulę $\\lfloor n^2/4 \\rfloor$."
    ],
    "solution": "Pagal Mantelio teoremą, ekstremalus grafas yra dvidalis. Suskirstome viršūnes į aibes po 2 ir 3. Briaunų skaičius $2 \\cdot 3 = 6$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Mantelio teorema",
      "text": "Grafas be trikampių gali turėti ne daugiau kaip $n^2/4$ briaunų."
    },
    "strategyTags": [
      "logic",
      "proof"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-22-method-1",
        "title": "Ekstremalių grafikų konstravimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Dvidališkumo optimizavimas",
            "action": "Subalansuojame dalių dydžius sandaugai maksimizuoti.",
            "reason": "Tai pagrindinis ekstremaliosios grafų teorijos principas.",
            "result": "Gauta reikšmė 6.",
            "latex": ""
          }
        ],
        "finalAnswer": "6"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-22-trap-1",
        "title": "Ciklo C5 pasirinkimas",
        "wrongMove": "Manoma, kad 5-kampis yra geriausias.",
        "whyTempting": "Ciklas be trikampio atrodo labai efektyvus.",
        "correction": "Dvidalis grafas $K_{2,3}$ leidžia pridėti dar vieną briauną."
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų atsakymas, jei draustume $K_4$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-22-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek max briaunų turi n=5 grafas be trikampių?",
        "back": "6 (pagal Mantelio teoremą).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pabandykite padalyti 5 viršūnes į dvi grupes.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Suskaičiuokite briaunas skaidymams (1, 4) ir (2, 3).",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Taikykite Mantelio formulę $\\lfloor n^2/4 \\rfloor$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-23",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Pagal Rotho teoremą adityviojoje kombinatorikoje, kokio minimalaus ilgio aritmetinę progresiją garantuotai rasime bet kurioje teigiamo tankio sveikųjų skaičių aibėje?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Atskirkite Rotho teoremą nuo bendrosios Szemerédi teoremos.",
      "Rotho rezultatas buvo istorinis lūžis būtent konkrečiam ilgiui.",
      "Klausimas apie tankį, o ne spalvinimą."
    ],
    "solution": "Rotho teorema (1953) įrodė, kad tanki aibė turi 3 narių progresiją. Atsakymas remiantis konkrečia Rotho pavarde yra 3.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Rotho teorema",
      "text": "Rotho teorema teigia, kad jei aibė $A \\subset \\mathbb{N}$ turi teigiamą tankį, joje yra 3 narių aritmetinių progresijų."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-23-method-1",
        "title": "Teorinis priskyrimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Konteksto analizė",
            "action": "Susiejame autorių su jo pasiekta konstanta.",
            "reason": "Olimpiadose svarbu skirti specifinius matematinius teiginius.",
            "result": "Gauta reikšmė 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-23-trap-1",
        "title": "Sumišimas su Van der Vardeno teorema",
        "wrongMove": "Manoma, kad aibė turi būti spalvinama.",
        "whyTempting": "Abi nagrinėja aritmetines progresijas.",
        "correction": "Van der Vardenas nagrinėja visas spalvas, o Rothas – tik vieną tankią aibę."
      }
    ],
    "reflectionPrompts": [
      "Kaip Rotho teorema susijusi su Furstenbergo ergodine teorija?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-23-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokio ilgio progresiją garantuoja Rotho teorema?",
        "back": "3.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Atskirkite Rotho teoremą nuo bendrosios Szemerédi teoremos.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Rotho rezultatas buvo istorinis lūžis būtent konkrečiam ilgiui.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Klausimas apie tankį, o ne spalvinimą.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-24",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Tegu $|A|=3$ ir $|B|=4$ yra poaibiai lauke $\\mathbb{Z}_{11}$. Raskite mažiausią galimą sumos aibės $A+B$ dydį pagal Koši-Davenporto teoremą.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Identifikuokite $p=11$, $|A|=3$ ir $|B|=4$.",
      "Apskaičiuokite $|A|+|B|-1$.",
      "Palyginkite rezultatą su $p$ ir pasirinkite mažesnįjį."
    ],
    "solution": "$|A| + |B| - 1 = 3 + 4 - 1 = 6$. Tikriname rėžį: $\\min(11, 6) = 6$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Koši-Davenporto teorema",
      "text": "Sumos aibės dydis moduliu $p$ tenkina nelygybę $|A+B| \\ge \\min(p, |A|+|B|-1)$."
    },
    "strategyTags": [
      "algebraic-transformation",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-24-method-1",
        "title": "Sumų aibės įvertis",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Formulės taikymas",
            "action": "Apskaičiuojame teorinį minimumą.",
            "reason": "Tai bazinė adityviosios kombinatorikos teorema.",
            "result": "Gauta reikšmė 6.",
            "latex": ""
          }
        ],
        "finalAnswer": "6"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-24-trap-1",
        "title": "Sumažinimas vienetu pamirštas",
        "wrongMove": "Manoma, kad minimumas yra $|A|+|B| = 7$.",
        "whyTempting": "Intuityvus sudėjimas.",
        "correction": "Teoremoje yra '-1', nes elementai gali 'persidengti'."
      }
    ],
    "reflectionPrompts": [
      "Kada pasiekiamas tikslus minimumas 6?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-24-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia Koši-Davenporto formulė sumos aibei?",
        "back": "min(p, |A|+|B|-1).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Identifikuokite $p=11$, $|A|=3$ ir $|B|=4$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Apskaičiuokite $|A|+|B|-1$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Palyginkite rezultatą su $p$ ir pasirinkite mažesnįjį.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-25",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Keliais būdais 4 asmenys gali apsikeisti kepurėmis taip, kad nė vienas neatgautų savo kepurės?",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tai yra netvarkų skaičiaus $D_4$ radimas.",
      "Naudokite formulę $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$.",
      "Apskaičiuokite $D_4 = 24(1 - 1 + 1/2 - 1/6 + 1/24)$."
    ],
    "solution": "Naudojame įtraukimo-išbraukimo principą. $D_4 = 4! (1/2! - 1/3! + 1/4!) = 24 (1/2 - 1/6 + 1/24)$. $D_4 = 12 - 4 + 1 = 9$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Netvarkos (Derangements)",
      "text": "Netvarka yra kėlinys be fiksuotų taškų. Skaičius žymimas $D_n$ arba $!n$."
    },
    "strategyTags": [
      "combinatorial-counting",
      "invariant"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-25-method-1",
        "title": "Netvarkų formulės taikymas",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Skaidymas",
            "action": "Taikome bendrąją netvarkų formulę.",
            "reason": "Tai efektyviausias būdas rasti kėlinius be fiksuotų taškų.",
            "result": "Gauta reikšmė 9.",
            "latex": ""
          }
        ],
        "finalAnswer": "9"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-25-trap-1",
        "title": "Visų kėlinių skaičiavimas",
        "wrongMove": "Sakoma $4! = 24$.",
        "whyTempting": "Pamirštamas apribojimas 'nė vienas neatgauna'.",
        "correction": "Būtina atimti kėlinius, turinčius bent vieną fiksuotą tašką."
      }
    ],
    "reflectionPrompts": [
      "Koks yra $D_n/n!$ santykis, kai $n$ artėja į begalybę?",
      "Kaip šis uždavinys susijęs su tikimybe, kad niekas neatgaus kepurės?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-25-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra $D_4$ (netvarkų iš 4) reikšmė?",
        "back": "9.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tai yra netvarkų skaičiaus $D_4$ radimas.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Naudokite formulę $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Apskaičiuokite $D_4 = 24(1 - 1 + 1/2 - 1/6 + 1/24)$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-26",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Keliais būdais galima nuspalvinti kvadrato viršūnes dvejomis spalvomis (balta ir juoda), jei pasukimai laikomi identiškais?",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Identifikuokite kvadrato simetrijos grupę (šiuo atveju tik pasukimai).",
      "Pasukimai yra 0°, 90°, 180°, 270°. Iš viso 4 elementai.",
      "Kiekvienam pasukimui suskaičiuokite spalvinimus, kurie nesikeičia."
    ],
    "solution": "Iš viso yra $2^4 = 16$ spalvinimų be simetrijos. 0°: visi 16 spalvinimų nesikeičia. 90°: tik 2 spalvinimai (visos viršūnės vienodos) nesikeičia. 180°: $2^2 = 4$ spalvinimai nesikeičia (priešingos viršūnės turi būti vienodos). 270°: 2 spalvinimai nesikeičia. Pagal Burnside'o lemą: $(16 + 2 + 4 + 2) / 4 = 24 / 4 = 6$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Burnside'o lema",
      "text": "Orbitų skaičius lygus vidutiniam fiksuotų taškų skaičiui pagal grupės elementus."
    },
    "strategyTags": [
      "combinatorial-counting",
      "symmetry"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-26-method-1",
        "title": "Burnside'o lemos taikymas",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Fiksuotų taškų radimas",
            "action": "Nagrinėjame kiekvieną simetrijos grupės narį.",
            "reason": "Tai leidžia teisingai suskaičiuoti neekvivalentinius spalvinimus.",
            "result": "Gauta reikšmė 6.",
            "latex": ""
          }
        ],
        "finalAnswer": "6"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-26-trap-1",
        "title": "Tik akivaizdžių atvejų skaičiavimas",
        "wrongMove": "Perrinkimas rankiniu būdu be sistemos.",
        "whyTempting": "Mažas kvadratas leidžia lengvai piešti.",
        "correction": "Sunkiau pastebėti paslėptas simetrijas, Burnside'o lema suteikia garantiją."
      }
    ],
    "reflectionPrompts": [
      "Kaip pasikeistų rezultatas, jei būtų leidžiami ir atspindžiai?",
      "Kokia generuojanti funkcija (ciklinis indeksas) aprašo šį uždavinį?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-26-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia formulė naudojama Burnside'o lemoje?",
        "back": "$|X/G| = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Identifikuokite kvadrato simetrijos grupę (šiuo atveju tik pasukimai).",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pasukimai yra 0°, 90°, 180°, 270°. Iš viso 4 elementai.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Kiekvienam pasukimui suskaičiuokite spalvinimus, kurie nesikeičia.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-27",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite skaičiaus 5 skaidinių (partitions) skaičių.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Surašykite skaidinius mažėjančia tvarka, pradedant nuo didžiausio dėmens.",
      "Pvz., 5 pati savaime yra vienas skaidinys.",
      "Skaidinys 4+1 yra kitas. Tęskite sistemingai."
    ],
    "solution": "5 4 + 1 3 + 2 3 + 1 + 1 2 + 2 + 1 2 + 1 + 1 + 1 1 + 1 + 1 + 1 + 1 Iš viso 7 būdai.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Skaidiniai (Partitions)",
      "text": "Skaidinys yra skaičiaus išskaidymas į teigiamų sveikųjų skaičių sumą, kur dėmenų tvarka nesvarbi."
    },
    "strategyTags": [
      "combinatorial-counting",
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-27-method-1",
        "title": "Sisteminis išvardijimas",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Leksikografinis perrinkimas",
            "action": "Surašome visas galimybes mažėjančia tvarka.",
            "reason": "Tai apsaugo nuo praleidimų ir pasikartojimų.",
            "result": "Gauta reikšmė 7.",
            "latex": ""
          }
        ],
        "finalAnswer": "7"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-27-trap-1",
        "title": "Tvarkos paisymas",
        "wrongMove": "Suskaičiuojama 3+2 ir 2+3 kaip skirtingi.",
        "whyTempting": "Painiojama su kompozicijomis.",
        "correction": "Skaidiniuose tvarka nėra svarbi."
      }
    ],
    "reflectionPrompts": [
      "Kokia generuojanti funkcija aprašo skaidinių seką?",
      "Kuo skiriasi skaidiniai nuo kompozicijų?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-27-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek skaidinių turi skaičius 5?",
        "back": "7.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Surašykite skaidinius mažėjančia tvarka, pradedant nuo didžiausio dėmens.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pvz., 5 pati savaime yra vienas skaidinys.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Skaidinys 4+1 yra kitas. Tęskite sistemingai.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-28",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite didžiausios šeimos poaibių po 2 elementus iš 5 elementų aibės dydį, jei bet kurie du poaibiai kertasi.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Užfiksuokite vieną elementą iš 5.",
      "Kiek yra poaibių po 2, kuriuose yra šis elementas?",
      "Apskaičiuokite $\\binom{n-1}{k-1}$ reikšmę."
    ],
    "solution": "Turime $n=5, k=2$. Sąlyga $n \\ge 2k$ galioja ($5 \\ge 4$). Erdos-Ko-Rado teorema sako, kad didžiausia šeima yra visų poaibių, turinčių tam tikrą elementą $x$, šeima. Dydis yra $\\binom{5-1}{2-1} = \\binom{4}{1} = 4$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Erdos-Ko-Rado teorema",
      "text": "Jei $n \\ge 2k$, tai didžiausia $k$-elementų susikertanti šeima gaunama fiksuojant vieną elementą."
    },
    "strategyTags": [
      "logic",
      "extremal-principle"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-28-method-1",
        "title": "Fiksuoto elemento strategija",
        "methodType": "main",
        "strategyTags": [
          "extremal-principle"
        ],
        "steps": [
          {
            "title": "Teoremos taikymas",
            "action": "Naudojame EKR teoremą.",
            "reason": "Tai suteikia tiesioginį atsakymą ekstremaliosioms šeimoms.",
            "result": "Gauta reikšmė 4.",
            "latex": ""
          }
        ],
        "finalAnswer": "4"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-28-trap-1",
        "title": "Neteisingas derinys",
        "wrongMove": "Skaičiuojama $\\binom{5}{2} = 10$.",
        "whyTempting": "Visų poaibių skaičius atrodo kaip riba.",
        "correction": "Ne visi 10 poaibių kertasi tarpusavyje (pvz., {1,2} ir {3,4} nesikerta)."
      }
    ],
    "reflectionPrompts": [
      "Kas nutiktų, jei $n=3, k=2$?",
      "Kodėl sąlyga $n \\ge 2k$ yra kritinė?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-28-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra EKR teoremos rezultatas susikertančioms šeimoms?",
        "back": "$\\binom{n-1}{k-1}$ (kai $n \\ge 2k$).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Užfiksuokite vieną elementą iš 5.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kiek yra poaibių po 2, kuriuose yra šis elementas?",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Apskaičiuokite $\\binom{n-1}{k-1}$ reikšmę.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-29",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Grafe yra dvi dalys $X$ ir $Y$ po 4 viršūnes. Jei kiekvienas poaibis $S \\subseteq X$ turi kaimynų aibę $N(S)$, tokią kad $|N(S)| \\ge |S|$, ar visada egzistuoja pilnas $X$ sutapdinimas? Atsakykite 'Taip' arba 'Ne'.",
    "answer": "Taip",
    "acceptedAnswers": [
      "Taip"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tai tiesioginis Holo teoremos formuluotės patikrinimas.",
      "Sąlyga $|N(S)| \\ge |S|$ vadinama Holo sąlyga."
    ],
    "solution": "Identifikuojame teoremą. Sąlyga yra išpildyta visoms $X$ dalims. Išvada: Taip.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Holo vedybų teorema",
      "text": "Dvidaliame grafe pilnas sutapdinimas egzistuoja tada ir tik tada, kai kiekvienam $S \\subseteq X$ galioja $|N(S)| \\ge |S|$."
    },
    "strategyTags": [
      "logic",
      "graph-interpretation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-29-method-1",
        "title": "Teorinis patvirtinimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Holo sąlygos analizė",
            "action": "Sulyginame uždavinio tekstą su teorema.",
            "reason": "Teorema yra dvikryptė (tada ir tik tada).",
            "result": "Patvirtinta.",
            "latex": ""
          }
        ],
        "finalAnswer": "Taip"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-29-trap-1",
        "title": "Tikėjimas, kad reikia papildomų sąlygų",
        "wrongMove": "Manoma, kad viršūnių laipsniai turi būti vienodi.",
        "whyTempting": "Reguliarūs grafai visada turi sutapdinimus.",
        "correction": "Holo sąlyga yra pakankama bet kokiam dvidaliui grafui."
      }
    ],
    "reflectionPrompts": [
      "Kaip šis uždavinys susijęs su lotynų kvadratais?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-29-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra Holo vedybų teoremos sąlyga?",
        "back": "$|N(S)| \\ge |S|$ visiems $S$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tai tiesioginis Holo teoremos formuluotės patikrinimas.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Sąlyga $|N(S)| \\ge |S|$ vadinama Holo sąlyga.",
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-30",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite didžiausios antiaibės (šeimos, kurioje jokis poaibis nėra kito poaibio dalis) dydį 3 elementų aibėje.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išbandykite poaibius pagal jų dydį (sluoksnius).",
      "Ar visi poaibiai po 2 elementus sudaro antiaibę?",
      "Apskaičiuokite $\\binom{3}{1}$ arba $\\binom{3}{2}$."
    ],
    "solution": "Antiaibė reiškia, kad jei $A, B$ priklauso šeimai, tai $A \\not\\subseteq B$. Visi poaibiai po 1 elementą: {1}, {2}, {3} (dydis 3). Visi poaibiai po 2 elementus: {1,2}, {1,3}, {2,3} (dydis 3). Pagal Spernerio teoremą: $\\binom{3}{1} = 3$ arba $\\binom{3}{2} = 3$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Spernerio teorema",
      "text": "Didžiausia antiaibė $n$ elementų aibėje turi dydį $\\binom{n}{\\lfloor n/2 \\rfloor}$."
    },
    "strategyTags": [
      "logic",
      "extremal-principle"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-30-method-1",
        "title": "Spernerio teoremos taikymas",
        "methodType": "main",
        "strategyTags": [
          "extremal-principle"
        ],
        "steps": [
          {
            "title": "Sluoksnių analizė",
            "action": "Pasirenkame vidurinį sluoksnį.",
            "reason": "Tai visada duoda maksimalią antiaibę.",
            "result": "Gauta reikšmė 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-30-trap-1",
        "title": "Visų poaibių skaičiavimas",
        "wrongMove": "Sakoma $2^3 = 8$.",
        "whyTempting": "Visų poaibių aibė (power set).",
        "correction": "Dauguma šių poaibių yra vienas kito dalys."
      }
    ],
    "reflectionPrompts": [
      "Kaip Spernerio teorema susijusi su Dilwortho teorema?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-30-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra Spernerio teoremos rezultatas antiaibėms?",
        "back": "$\\binom{n}{\\lfloor n/2 \\rfloor}$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išbandykite poaibius pagal jų dydį (sluoksnius).",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Ar visi poaibiai po 2 elementus sudaro antiaibę?",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Apskaičiuokite $\\binom{3}{1}$ arba $\\binom{3}{2}$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-31",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite Rėmzio skaičių $R(3,4)$.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Naudokite nelygybę $R(r,s) \\le R(r-1,s) + R(r,s-1)$.",
      "Žinome $R(2,4) = 4$ ir $R(3,3) = 6$.",
      "$R(3,4) \\le 4 + 6 = 10$. Reikia patikslinti ribą."
    ],
    "solution": "Pagal formulę $R(3,4) \\le R(2,4) + R(3,3) = 4 + 6 = 10$. Kadangi $R(2,4)$ ir $R(3,3)$ yra abu lyginiai, galioja griežta nelygybė $R(3,4) < 10$, t.y. $R(3,4) \\le 9$. Parodoma, kad 8 neužtenka, o 9 visada tenkina sąlygą.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Rėmzio teorija: R(3,4)",
      "text": "Minimalus viršūnių skaičius, garantuojantis arba trikampį ($K_3$), arba 4 viršūnių tuščią grafą (independet set)."
    },
    "strategyTags": [
      "logic",
      "proof"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-31-method-1",
        "title": "Rekurentinė Rėmzio riba",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Viršutinės ribos radimas",
            "action": "Taikome $R(r,s)$ rekurentinę formulę.",
            "reason": "Tai suteikia pradinį įvertį.",
            "result": "Gauta reikšmė 9.",
            "latex": ""
          }
        ],
        "finalAnswer": "9"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-31-trap-1",
        "title": "Klaidingas atsakymas 10",
        "wrongMove": "Tiesioginis sudėjimas $4+6=10$.",
        "whyTempting": "Pamirštama patikslinta lyginumo sąlyga.",
        "correction": "Jei abi vertės $R(r-1,s)$ ir $R(r,s-1)$ yra lyginės, viršutinė riba sumažėja vienetu."
      }
    ],
    "reflectionPrompts": [
      "Koks yra $R(4,4)$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-31-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra $R(3,4)$ reikšmė?",
        "back": "9.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite nelygybę $R(r,s) \\le R(r-1,s) + R(r,s-1)$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Žinome $R(2,4) = 4$ ir $R(3,3) = 6$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "$R(3,4) \\le 4 + 6 = 10$. Reikia patikslinti ribą.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-32",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite didžiausią briaunų skaičių grafe su 6 viršūnėmis be $K_4$ (pilnojo grafo su 4 viršūnėmis).",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Dalinkite 6 viršūnes į 3 lygias dalis.",
      "Kiekviena dalis turi po 2 viršūnes.",
      "Sujunkite visas briaunas tarp skirtingų dalių."
    ],
    "solution": "Naudojame Turano teoremą su $n=6, r=3$. Grafas yra 3-dalis su dalimis po 2 viršūnes. Briaunų skaičius: $2\\cdot 2 + 2\\cdot 2 + 2\\cdot 2 = 4 + 4 + 4 = 12$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Turano teorema",
      "text": "Ekstremalus grafas be $K_{r+1}$ yra Turano grafas $T(n,r)$."
    },
    "strategyTags": [
      "logic",
      "extremal-principle"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-32-method-1",
        "title": "Turano grafo konstravimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Dalių subalansavimas",
            "action": "Padaliname viršūnes kuo tolygiau.",
            "reason": "Tai maksimizuoja briaunų skaičių neleidžiant susidaryti draudžiamai klikai.",
            "result": "Gauta reikšmė 12.",
            "latex": ""
          }
        ],
        "finalAnswer": "12"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-32-trap-1",
        "title": "Sumišimas su Mantelio teorema",
        "wrongMove": "Skaičiuojama $n^2/4$.",
        "whyTempting": "Mantelio teorema yra dažniau naudojama.",
        "correction": "Mantelio teorema draudžia $K_3$, o Turano teorema leidžia apibendrinti bet kuriam $K_r$."
      }
    ],
    "reflectionPrompts": [
      "Kokia yra bendra Turano briaunų skaičiaus formulė?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-32-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kas yra Turano grafas $T(n,r)$?",
        "back": "Pilnas r-dalis grafas, kurio dalių dydžiai skiriasi ne daugiau nei 1.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Dalinkite 6 viršūnes į 3 lygias dalis.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kiekviena dalis turi po 2 viršūnes.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Sujunkite visas briaunas tarp skirtingų dalių.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-33",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Kokia yra mažiausia reali skaičių seka, kurioje visada yra bent 3 narių didėjanti arba 3 narių mažėjanti posekis?",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Nustatykite $n=3$ ir $m=3$.",
      "Taikykite formulę $(n-1)(m-1)+1$."
    ],
    "solution": "$(3-1)(3-1) + 1 = 2 \\cdot 2 + 1 = 5$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Erdos-Szekeres teorema",
      "text": "Bet kurioje sekoje ilgio $(n-1)(m-1)+1$ yra arba ilgio $n$ didėjantis posekis, arba ilgio $m$ mažėjantis posekis."
    },
    "strategyTags": [
      "logic",
      "invariant"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-33-method-1",
        "title": "Teoremos taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Parametrų įstatymas",
            "action": "Apskaičiuojame ribinę reikšmę.",
            "reason": "Tai pagrindinis rezultatas apie sekų monotonines savybes.",
            "result": "Gauta reikšmė 5.",
            "latex": ""
          }
        ],
        "finalAnswer": "5"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-33-trap-1",
        "title": "Spėjimas pagal n²",
        "wrongMove": "Sakoma 9.",
        "whyTempting": "Didesni skaičiai atrodo 'saugiau'.",
        "correction": "Teorema nurodo tikslią minimalią ribą, kuri yra gerokai mažesnė."
      }
    ],
    "reflectionPrompts": [
      "Kaip šis įrodymas naudoja Dirichlė principą?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-33-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia Erdos-Szekeres formulė posekiams?",
        "back": "$(n-1)(m-1)+1$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Nustatykite $n=3$ ir $m=3$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Taikykite formulę $(n-1)(m-1)+1$.",
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-34",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Kiek surjekcijų (atvaizdžių 'į') egzistuoja iš 4 elementų aibės į 3 elementų aibę?",
    "answer": "36",
    "acceptedAnswers": [
      "36"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Iš viso yra $3^4 = 81$ atvaizdis.",
      "Atimkite atvaizdžius, kurie praleidžia bent vieną elementą.",
      "Naudokite formulę $n! S(m,n)$, kur $S(m,n)$ yra antros rūšies Stirlingo skaičius."
    ],
    "solution": "Skaidymas: iš 4 elementų į 3 grupes. Grupių dydžiai gali būti tik (2, 1, 1) bet kokia tvarka. Būdų parinkti, kuris gaus 2 elementus: $\\binom{3}{1} = 3$. Būdų parinkti 2 elementus iš 4: $\\binom{4}{2} = 6$. Likusius 2 elementus paskirstyti: $2! = 2$. Viso: $3 \\cdot 6 \\cdot 2 = 36$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Surjekcijų skaičiavimas",
      "text": "Naudojamas įtraukimo-išbraukimo principas, atimant atvaizdžius, kurie nepasiekia tam tikrų reikšmių aibės elementų."
    },
    "strategyTags": [
      "combinatorial-counting"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-34-method-1",
        "title": "Stirlingo skaičių taikymas",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Skaidymas į blokus",
            "action": "Suskaičiuojame aibės skaidinius ir dauginame iš kėlinių.",
            "reason": "Tai sistemingas būdas skaičiuoti surjekcijas.",
            "result": "Gauta reikšmė 36.",
            "latex": ""
          }
        ],
        "finalAnswer": "36"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-34-trap-1",
        "title": "Visų atvaizdžių skaičiavimas",
        "wrongMove": "Sakoma 81.",
        "whyTempting": "Tai bendras funkcijų skaičius.",
        "correction": "Būtina, kad visi 3 elementai turėtų bent vieną pirmvaizdį."
      }
    ],
    "reflectionPrompts": [
      "Koks ryšys tarp surjekcijų ir Stirlingo skaičių?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-34-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek surjekcijų iš m=4 į n=3?",
        "back": "36.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Iš viso yra $3^4 = 81$ atvaizdis.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Atimkite atvaizdžius, kurie praleidžia bent vieną elementą.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Naudokite formulę $n! S(m,n)$, kur $S(m,n)$ yra antros rūšies Stirlingo skaičius.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-35",
    "topicId": "olimpiada-12-kombinatorika",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Keliais būdais galima gauti 5 eurus naudojant 1 ir 2 eurų monetas (tvarka nesvarbi)?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Fiksuokite 2 eurų monetų skaičių.",
      "Gali būti 0, 1 arba 2 monetos po 2 eurus."
    ],
    "solution": "Jei 2 eurų monetų 0: 1+1+1+1+1 (1 būdas). Jei 2 eurų monetų 1: 2+1+1+1 (1 būdas). Jei 2 eurų monetų 2: 2+2+1 (1 būdas). Viso: 3 būdai.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Kombinatorika",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Monetų keitimo uždavinys",
      "text": "Tai lygties $1x + 2y = 5$ sprendinių skaičius neneigiamais sveikaisiais skaičiais."
    },
    "strategyTags": [
      "combinatorial-counting",
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-35-method-1",
        "title": "Atvejų analizė",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Kintamojo fiksavimas",
            "action": "Nagrinėjame didžiausio nominalo monetą.",
            "reason": "Tai greičiausias būdas rasti nedidelių sumų skaidinius.",
            "result": "Gauta reikšmė 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-35-trap-1",
        "title": "Tvarkos paisymas",
        "wrongMove": "Skaičiuojama 2+2+1, 2+1+2 ir 1+2+2 kaip skirtingi.",
        "whyTempting": "Painiojama su būdais išmokėti tam tikra seka.",
        "correction": "Sąlygoje pasakyta 'tvarka nesvarbi'."
      }
    ],
    "reflectionPrompts": [
      "Kaip šis uždavinys susijęs su generuojančia funkcija $1/((1-x)(1-x^2))$?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-35-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Keliais būdais gaunami 5 eurai iš 1 ir 2 eurų monetų?",
        "back": "3.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Fiksuokite 2 eurų monetų skaičių.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Gali būti 0, 1 arba 2 monetos po 2 eurus.",
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-01",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Tegu $K = \\mathbb{Q}(\\sqrt{2})$. Raskite šio lauko sveikųjų skaičių žiedą $\\mathcal{O}_K$.",
    "answer": "\\mathbb{Z}[\\sqrt{2}]",
    "acceptedAnswers": [
      "\\mathbb{Z}[\\sqrt{2}]"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Patikrinkite skaičiaus $d=2$ liekaną moduliu 4.",
      "Kadangi $2 \\equiv 2 \\pmod 4$, bazė yra {1, sqrt(2)}."
    ],
    "solution": "Identifikuojame $d=2$. Tikriname $2 \\pmod 4$. Išvada: $\\mathcal{O}_K = \\mathbb{Z}[\\sqrt{2}]$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Kvadratinių laukų struktūra",
      "text": "Kvadratiniam laukui $\\mathbb{Q}(\\sqrt{d})$ sveikųjų skaičių žiedas priklauso nuo $d$ liekanos moduliu 4."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-01-method-1",
        "title": "Teorinis nustatymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Analizė",
            "action": "Taikome kvadratinių laukų klasifikaciją.",
            "reason": "Sveikųjų skaičių žiedas nustatomas pagal liekanas mod 4.",
            "result": "Gauta reikšmė $\\mathbb{Z}[\\sqrt{2}]$. ",
            "latex": ""
          }
        ],
        "finalAnswer": "\\mathbb{Z}[\\sqrt{2}]"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-01-trap-1",
        "title": "Maišymas su d=1 mod 4",
        "wrongMove": "Manoma, kad visada reikia pridėti narius su vardikliu 2.",
        "whyTempting": "Kiti pavyzdžiai kaip $\\sqrt{5}$ tai turi.",
        "correction": "Tik esant liekanai 1 atsiranda papildomi elementai."
      }
    ],
    "reflectionPrompts": [
      "Kodėl liekana moduliu 4 yra svarbi?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-01-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks yra $\\mathcal{O}_K$ laukui $K = \\mathbb{Q}(\\sqrt{2})$?",
        "back": "$\\mathbb{Z}[\\sqrt{2}]$, nes $2 \\equiv 2 \\pmod 4$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Patikrinkite skaičiaus $d=2$ liekaną moduliu 4.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Kadangi $2 \\equiv 2 \\pmod 4$, bazė yra {1, sqrt(2)}.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-02",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite eliptinės kreivės $y^2 = x^3 + x + 1$ taškų skaičių virš lauko $\\mathbb{F}_3$ (įskaitant begalybės tašką).",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Surašykite visas $x$ reikšmes lauke $\\mathbb{F}_3$: 0, 1 ir 2.",
      "Apskaičiuokite $y^2$ kiekvienam $x$.",
      "Prisiminkite begalybės tašką."
    ],
    "solution": "$x=0: y^2=1 \\implies y=1, 2$ (2 taškai). $x=1: y^2=3 \\equiv 0 \\implies y=0$ (1 taškas). $x=2: y^2=11 \\equiv 2 \\pmod 3$ (0 taškų). Pridedame begalybės tašką: $2+1+0+1 = 4$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Taškų skaičiavimas virš baigtinio lauko",
      "text": "Eliptinės kreivės taškų skaičius randamas perrenkant visas galimas $x$ reikšmes lauke ir pridedant begalybės tašką."
    },
    "strategyTags": [
      "logic",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-02-method-1",
        "title": "Tiesioginis perrinkimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Reikšmių lentelė",
            "action": "Sudarykite $x$ ir $y^2$ reikšmių atitikmenis.",
            "reason": "Tai patikimiausias būdas mažiems laukams.",
            "result": "Rasti visi afininiai taškai.",
            "latex": ""
          }
        ],
        "finalAnswer": "4"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-02-trap-1",
        "title": "Pamirštas begalybės taškas",
        "wrongMove": "Suskaičiuojami tik 3 taškai plokštumoje.",
        "whyTempting": "Begalybės taškas nepastebimas lygtyje.",
        "correction": "Eliptinė kreivė visada turi vieną begalybės tašką."
      }
    ],
    "reflectionPrompts": [
      "Koks maksimalus taškų skaičius galimas pagal Hasse nelygybę?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-02-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kiek taškų turi $y^2 = x^3 + x + 1$ virš $\\mathbb{F}_3$?",
        "back": "4 (įskaitant begalybės tašką).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Surašykite visas $x$ reikšmes lauke $\\mathbb{F}_3$: 0, 1 ir 2.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Apskaičiuokite $y^2$ kiekvienam $x$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Prisiminkite begalybės tašką.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-03",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite natūraliųjų skaičių sprendinių skaičių lygčiai $x^2 - y^2 = 2026$.",
    "answer": "0",
    "acceptedAnswers": [
      "0"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išnagrinėkite abiejų pusių liekanas moduliu 4.",
      "$2026 \\equiv 2 \\pmod 4$.",
      "Surašykite visas galimas $x^2 - y^2$ liekanas moduliu 4."
    ],
    "solution": "$n^2 \\equiv 0, 1 \\pmod 4$. $x^2 - y^2 \\equiv 0-0=0, 1-1=0, 1-0=1, 0-1=3 \\pmod 4$. Liekanos 2 nėra, todėl sprendinių nėra.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Kvadratų liekanos moduliu 4",
      "text": "Sveikojo skaičiaus kvadratas moduliu 4 visada lygus 0 arba 1."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-03-method-1",
        "title": "Liekanų metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Pariteto analizė",
            "action": "Tikriname liekanas moduliu 4.",
            "reason": "Tai nustato sprendinių neegzistavimą.",
            "result": "Prieštara gauta.",
            "latex": ""
          }
        ],
        "finalAnswer": "0"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-03-trap-1",
        "title": "Faktorizacijos bandymas",
        "wrongMove": "Bandoma skaidyti $(x-y)(x+y) = 2026$.",
        "whyTempting": "Tai standartinis sprendimo būdas.",
        "correction": "Prieš skaidant visada verta patikrinti paprastus modulius."
      }
    ],
    "reflectionPrompts": [
      "Kokie kiti moduliai naudingi dirbant su kvadratais?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-03-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kodėl $x^2 - y^2 = 2026$ neturi sprendinių?",
        "back": "Nes $x^2-y^2 \\not\\equiv 2 \\pmod 4$, o $2026 \\equiv 2 \\pmod 4$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išnagrinėkite abiejų pusių liekanas moduliu 4.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$2026 \\equiv 2 \\pmod 4$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Surašykite visas galimas $x^2 - y^2$ liekanas moduliu 4.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-04",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "structuredReasoning",
    "level": "olympiad",
    "statement": "Jei $a, b \\in \\mathbb{N}$ ir $ab+1$ dalija $a^2+b^2$, koks yra teigiamas skaičius $k = \\frac{a^2+b^2}{ab+1}$? Užrašykite atsakymą kaip matematinę sąvoką.",
    "answer": "Pilnas kvadratas",
    "acceptedAnswers": [
      "Pilnas kvadratas"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tarkime, kad fiksuotam $k$ egzistuoja sprendinių pora.",
      "Pasirinkite sprendinį $(a, b)$, kuris minimizuoja sumą $a+b$.",
      "Išnagrinėkite kvadratinę lygtį $x^2 - kbx + b^2 - k = 0$."
    ],
    "solution": "Naudojame Vijetos formules kitai šakniai $x_2$ rasti. Įrodoma, kad $x_2$ yra mažesnis teigiamas sveikasis skaičius. Tai prieštarauja pradiniam pasirinkimui, nebent $k$ yra pilnas kvadratas.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Vijetos šuolis (Vieta Jumping)",
      "text": "Fiksuojant kintamąjį, lygtis tampa kvadratine, leidžiančia naudoti begalinį nusileidimą."
    },
    "strategyTags": [
      "proof",
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-04-method-1",
        "title": "Begalinio nusileidimo metodas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Konstravimas",
            "action": "Sukuriame mažesnį sprendinį per Vijetos formules.",
            "reason": "Kad pasiektume prieštarą minimalumui.",
            "result": "Gauta prieštara.",
            "latex": ""
          }
        ],
        "finalAnswer": "Pilnas kvadratas"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-04-trap-1",
        "title": "Simetrijos nepastebėjimas",
        "wrongMove": "Nagrinėjami $a$ ir $b$ be fiksavimo.",
        "whyTempting": "Standartinė algebrinė transformacija.",
        "correction": "Būtina lygtį paversti vieno kintamojo kvadratine lygtimi."
      }
    ],
    "reflectionPrompts": [
      "Kada pirmą kartą pasirodė šis uždavinys?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-04-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia yra $k = (a^2+b^2)/(ab+1)$ reikšmė?",
        "back": "Pilnas kvadratas.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tarkime, kad fiksuotam $k$ egzistuoja sprendinių pora.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Pasirinkite sprendinį $(a, b)$, kuris minimizuoja sumą $a+b$.",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Išnagrinėkite kvadratinę lygtį $x^2 - kbx + b^2 - k = 0$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-05",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Apskaičiuokite Ležandro simbolį (7/11).",
    "answer": "-1",
    "acceptedAnswers": [
      "-1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Patikrinkite 7 ir 11 liekanas moduliu 4.",
      "Abu yra 3 mod 4, todėl (7/11) = -(11/7).",
      "Apskaičiuokite (11/7) = (4/7)."
    ],
    "solution": "$7 \\equiv 3 \\pmod 4$ ir $11 \\equiv 3 \\pmod 4$. $(7/11) = -(11/7)$. $11 \\equiv 4 \\pmod 7$, todėl $(11/7) = (4/7)$. Kadangi $4 = 2^2$ yra kvadratas, $(4/7) = 1$. Atsakymas: $-1 \\cdot 1 = -1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Kvadratinio apverčiamumo dėsnis",
      "text": "Leidžia apskaičiuoti (p/q) naudojant (q/p) ir liekanas mod 4."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-05-method-1",
        "title": "Apverčiamumo taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Redukcija",
            "action": "Suprastiname simbolį iki mažesnių reikšmių.",
            "reason": "Tai pagrindinis kvadratinių liekanų skaičiavimo algoritmas.",
            "result": "Gauta reikšmė -1.",
            "latex": ""
          }
        ],
        "finalAnswer": "-1"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-05-trap-1",
        "title": "Ženklo klaida",
        "wrongMove": "Pamirštamas minusas, kai abu p, q yra 3 mod 4.",
        "whyTempting": "Dauguma apverčiamumų yra teigiami.",
        "correction": "Tikrinkite $(p-1)(q-1)/4$ laipsnį."
      }
    ],
    "reflectionPrompts": [
      "Ar skaičius 7 yra kvadratinė liekana mod 11?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-05-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kada (p/q) = -(q/p)?",
        "back": "Kai p ir q abu yra 3 mod 4.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Patikrinkite 7 ir 11 liekanas moduliu 4.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Abu yra 3 mod 4, todėl (7/11) = -(11/7).",
        "penalty": 0.08
      },
      {
        "order": 3,
        "kind": "method",
        "text": "Apskaičiuokite (11/7) = (4/7).",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-06",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Apskaičiuokite 3-adinį vertinimą $v_3(2^{27} + 1)$ naudodami LTE lemą.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Ar 3 dalija 2+1?",
      "$v_3(2^{27} + 1) = v_3(2+1) + v_3(27)$."
    ],
    "solution": "$v_3(2+1) = 1$. $v_3(27) = 3$. Suma: $1+3=4$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "LTE lema",
      "text": "Susieja laipsnio vertinimą su pagrindo vertinimu."
    },
    "strategyTags": [
      "proof",
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-06-method-1",
        "title": "LTE taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Formulė",
            "action": "Įstatome reikšmes į LTE.",
            "reason": "Tai standartinis kelias laipsniams vertinti.",
            "result": "Gauta 4.",
            "latex": ""
          }
        ],
        "finalAnswer": "4"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-06-trap-1",
        "title": "p=2 klaida",
        "wrongMove": "Taikoma ta pati formulė pirminiam skaičiui 2.",
        "whyTempting": "Noras suvienodinti visus pirminius.",
        "correction": "LTE lema p=2 turi specifinę formą."
      }
    ],
    "reflectionPrompts": [
      "Kokia LTE sąlyga?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-06-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Apskaičiuokite $v_3(2^{27}+1)$.",
        "back": "4.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Ar 3 dalija 2+1?",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$v_3(2^{27} + 1) = v_3(2+1) + v_3(27)$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-07",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite mažiausią natūralųjį $x$ sprendinį Pellio lygčiai $x^2 - 2y^2 = 1$.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išbandykite mažas $y$ reikšmes: 1, 2...",
      "Jei $y=2$, tai $x^2 = 1 + 2(2^2) = 1 + 8 = 9$."
    ],
    "solution": "$y=1 \\implies x^2=3$ (ne kvadratas). $y=2 \\implies x^2=9 \\implies x=3$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Pellio lygties bazinis sprendinys",
      "text": "Mažiausias sprendinys $(x_1, y_1)$ vadinamas fundamentiniu."
    },
    "strategyTags": [
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-07-method-1",
        "title": "Perrinkimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Sprendinio radimas",
            "action": "Ieškome mažiausios poros.",
            "reason": "Mažoms D reikšmėms perrinkimas yra efektyvus.",
            "result": "Gauta 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-07-trap-1",
        "title": "Sprendinys (1, 0)",
        "wrongMove": "Sakoma x=1.",
        "whyTempting": "Tai trivialus sprendinys.",
        "correction": "Uždavinyje prašoma natūraliojo skaičiaus (y negali būti 0)."
      }
    ],
    "reflectionPrompts": [
      "Koks būtų kitas sprendinys?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-07-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks fundamentinis $x^2-2y^2=1$ sprendinys?",
        "back": "(3, 2).",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išbandykite mažas $y$ reikšmes: 1, 2...",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Jei $y=2$, tai $x^2 = 1 + 2(2^2) = 1 + 8 = 9$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-08",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite mažiausią primityviąją šaknį moduliu 7.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išbandykite $g=2, 3...$ ir skaičiuokite laipsnius.",
      "$2^3 \\equiv 1 \\pmod 7$, todėl 2 nėra primityvioji šaknis."
    ],
    "solution": "$3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1$. Eilė yra 6, tad 3 yra primityvioji šaknis.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Primityviosios šaknys",
      "text": "Skaičius $g$ yra primityvioji šaknis mod $p$, jei jo eilė lygi $p-1$."
    },
    "strategyTags": [
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-08-method-1",
        "title": "Eilės skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Perrinkimas",
            "action": "Tikriname laipsnius mod 7.",
            "reason": "Tai apibrėžimo taikymas.",
            "result": "Gauta 3.",
            "latex": ""
          }
        ],
        "finalAnswer": "3"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-08-trap-1",
        "title": "2 pasirinkimas",
        "wrongMove": "Manoma, kad 2 visada tinka.",
        "whyTempting": "Mažiausias pirminis.",
        "correction": "Būtina patikrinti visus laipsnius iki p-1."
      }
    ],
    "reflectionPrompts": [
      "Kiek primityviųjų šaknų yra mod 7?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-08-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia mažiausia primityvioji šaknis mod 7?",
        "back": "3.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išbandykite $g=2, 3...$ ir skaičiuokite laipsnius.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$2^3 \\equiv 1 \\pmod 7$, todėl 2 nėra primityvioji šaknis.",
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-09",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Tegu $p=13, q=17$. Apskaičiuokite $(p/q)(q/p)$ sandaugą pagal kvadratinio apverčiamumo dėsnį.",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Patikrinkite $(p-1)/2$ ir $(q-1)/2$ lyginumą."
    ],
    "solution": "$(13-1)/2 = 6$ (lyginis). $(17-1)/2 = 8$ (lyginis). Sandauga $(-1)^{6 \\cdot 8} = 1$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Kvadratinio apverčiamumo sandauga",
      "text": "Sandaugos ženklą lemia liekanos mod 4."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-09-method-1",
        "title": "Teoremos taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Laipsnio skaičiavimas",
            "action": "Nustatome (-1) laipsnį.",
            "reason": "Tai tiesioginis apverčiamumo dėsnio rezultatas.",
            "result": "Gauta 1.",
            "latex": ""
          }
        ],
        "finalAnswer": "1"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-09-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia (p/q)(q/p) reikšmė, jei bent vienas iš p, q yra 1 mod 4?",
        "back": "1.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Patikrinkite $(p-1)/2$ ir $(q-1)/2$ lyginumą.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-10",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite Gauso sveikojo skaičiaus $3+4i$ normą $N(3+4i)$.",
    "answer": "25",
    "acceptedAnswers": [
      "25"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Pakelkite 3 ir 4 kvadratais."
    ],
    "solution": "$3^2 = 9$. $4^2 = 16$. Suma: $9+16=25$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Gauso skaičių norma",
      "text": "Norma apibrėžiama kaip $N(a+bi) = a^2 + b^2$."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-10-method-1",
        "title": "Tiesioginis skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Formulė",
            "action": "Sudedame kvadratų sumą.",
            "reason": "Gauso skaičių norma yra pagrindinis jų dydžio matas.",
            "result": "Gauta 25.",
            "latex": ""
          }
        ],
        "finalAnswer": "25"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-10-trap-1",
        "title": "Šaknies traukimas",
        "wrongMove": "Sakoma 5.",
        "whyTempting": "Painiojama su modulio (absoliutinės vertės) sąvoka.",
        "correction": "Skaičių teorijoje norma paprastai apibrėžiama be šaknies, kad ji būtų sveikasis skaičius."
      }
    ],
    "reflectionPrompts": [
      "Ar norma yra multiplikatyvi?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-10-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia Gauso skaičiaus $a+bi$ norma?",
        "back": "$a^2 + b^2$.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Pakelkite 3 ir 4 kvadratais.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-11",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Apskaičiuokite Eulerio funkcijos reikšmę $\\phi(100)$.",
    "answer": "40",
    "acceptedAnswers": [
      "40"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Išskaidykite 100 pirminiais daugikliais: $2^2 \\cdot 5^2$.",
      "Naudokite formulę $n \\prod (1 - 1/p)$."
    ],
    "solution": "$100 \\cdot (1-1/2) \\cdot (1-1/5) = 100 \\cdot 1/2 \\cdot 4/5$. $50 \\cdot 4/5 = 40$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Eulerio funkcija",
      "text": "Suskaičiuoja skaičius, kurie yra tarpusavyje pirminiai su n."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-11-method-1",
        "title": "Formulės taikymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Daugikliai",
            "action": "Įstatome pirminius daugiklius į formulę.",
            "reason": "Tai greičiausias būdas rasti phi reikšmę.",
            "result": "Gauta 40.",
            "latex": ""
          }
        ],
        "finalAnswer": "40"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-11-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia phi(100) reikšmė?",
        "back": "40.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Išskaidykite 100 pirminiais daugikliais: $2^2 \\cdot 5^2$.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "Naudokite formulę $n \\prod (1 - 1/p)$.",
        "penalty": 0.08
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-12",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite pirmąjį sveikąjį dėmenį skaičiaus $\\sqrt{2}$ grandininėje trupmenoje.",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Kokia yra $\\sqrt{2}$ apytikslė reikšmė?"
    ],
    "solution": "$\\sqrt{2} \\approx 1.414$. Sveikoji dalis yra 1.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Grandininės trupmenos",
      "text": "Sveikasis dėmuo yra skaičiaus sveikoji dalis."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-12-method-1",
        "title": "Sveikosios dalies radimas",
        "methodType": "main",
        "strategyTags": [
          "logic"
        ],
        "steps": [
          {
            "title": "Įvertinimas",
            "action": "Nustatome sveikąją dalį.",
            "reason": "Pirmas dėmuo grandininėje trupmenoje visada yra floor(x).",
            "result": "Gauta 1.",
            "latex": ""
          }
        ],
        "finalAnswer": "1"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [
      "Kokie yra kiti šios trupmenos dėmenys?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-12-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks pirmas sqrt(2) grandininės trupmenos narys?",
        "back": "1.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Kokia yra $\\sqrt{2}$ apytikslė reikšmė?",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-13",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Ar skaičius 2027 gali būti išreikštas kaip dviejų kvadratų suma $x^2 + y^2$? (Žinoma, kad 2027 yra pirminis ir $2027 \\equiv 3 \\pmod 4$). Atsakykite 1 (Taip) arba 0 (Ne).",
    "answer": "0",
    "acceptedAnswers": [
      "0"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Patikrinkite pirminio skaičiaus liekaną mod 4."
    ],
    "solution": "Kadangi $2027 \\equiv 3 \\pmod 4$, pagal teoremą jis negali būti išreikštas kvadratų suma.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Fermat teorema apie kvadratų sumą",
      "text": "Pirminis $p$ yra dviejų kvadratų suma tada ir tik tada, kai $p=2$ arba $p \\equiv 1 \\pmod 4$."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-13-method-1",
        "title": "Teorinis patvirtinimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Liekana",
            "action": "Taikome Fermat teoremą.",
            "reason": "Tai nustato sumos egzistavimą.",
            "result": "Gauta reikšmė 0.",
            "latex": ""
          }
        ],
        "finalAnswer": "0"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-13-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokie pirminiai yra dviejų kvadratų sumos?",
        "back": "2 ir p=1 mod 4.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Patikrinkite pirminio skaičiaus liekaną mod 4.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-14",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite teigiamą šaknį lygčiai $x^2 + 1 \\equiv 0 \\pmod{25}$, jei žinoma, kad mod 5 šaknis yra 2.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Tegul $x = 2 + 5k$. Įstatykite į lygtį mod 25.",
      "$(2+5k)^2 + 1 = 5 + 20k \\equiv 0 \\pmod{25}$."
    ],
    "solution": "$5 + 20k \\equiv 0 \\pmod{25} \\implies 1 + 4k \\equiv 0 \\pmod 5$. $4k \\equiv -1 \\equiv 4 \\pmod 5 \\implies k=1$. $x = 2 + 5(1) = 7$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "advanced",
    "requiredPrerequisiteMastery": 85,
    "coreIdea": {
      "title": "Henselio lema",
      "text": "Leidžia pakelti šaknį iš modulio $p$ į modulį $p^k$."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-14-method-1",
        "title": "Šaknies kėlimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Kėlimas",
            "action": "Taikome Henselio lemos principą.",
            "reason": "Tai sistemingas būdas spręsti lygtis mod p^k.",
            "result": "Gauta reikšmė 7.",
            "latex": ""
          }
        ],
        "finalAnswer": "7"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-14-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kas yra Henselio lema?",
        "back": "Metodas kelti šaknis mod p į mod p^k.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Tegul $x = 2 + 5k$. Įstatykite į lygtį mod 25.",
        "penalty": 0.05
      },
      {
        "order": 2,
        "kind": "observation",
        "text": "$(2+5k)^2 + 1 = 5 + 20k \\equiv 0 \\pmod{25}$.",
        "penalty": 0.1
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-15",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite skaičiaus 2 eilę moduliu 11.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Eilė turi dalyti phi(11)=10."
    ],
    "solution": "$2^1=2, 2^2=4, 2^5=32 \\equiv 10 \\equiv -1$. Kadangi $2^5 \\equiv -1$, tai $2^{10} \\equiv 1$. Eilė yra 10.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Elemento eilė",
      "text": "Mažiausias $k > 0$, toks kad $a^k \\equiv 1 \\pmod n$."
    },
    "strategyTags": [
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-15-method-1",
        "title": "Eilės nustatymas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Laipsniai",
            "action": "Tikriname daliklius.",
            "reason": "Eilė visada dalija grupės eilę.",
            "result": "Gauta 10.",
            "latex": ""
          }
        ],
        "finalAnswer": "10"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-15-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia skaičiaus 2 eilė mod 11?",
        "back": "10.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Eilė turi dalyti phi(11)=10.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-16",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Raskite mažiausią teigiamą $x$: $x \\equiv 2 \\pmod 3$ ir $x \\equiv 3 \\pmod 5$.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Surašykite skaičius mod 5: 3, 8, 13..."
    ],
    "solution": "8 dalijant iš 5 liekana 3. 8 dalijant iš 3 liekana 2.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Kinų liekanų teorema",
      "text": "Leidžia rasti bendrą sprendinį lygčių sistemai su skirtingais moduliais."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-16-method-1",
        "title": "Sistemos sprendimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Tikrinimas",
            "action": "Ieškome mažiausio bendro nario.",
            "reason": "Mažoms reikšmėms paprastas perrinkimas yra pakankamas.",
            "result": "Gauta 8.",
            "latex": ""
          }
        ],
        "finalAnswer": "8"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-16-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Raskite x mod 15: x=2 mod 3, x=3 mod 5.",
        "back": "8.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Surašykite skaičius mod 5: 3, 8, 13...",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-17",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Kiek narių turi Farey seka $F_3$ (trupmenos tarp 0 ir 1 su vardikliu iki 3)?",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Surašykite visas trupmenas: 0/1, 1/3, 1/2, 2/3, 1/1."
    ],
    "solution": "0/1, 1/3, 1/2, 2/3, 1/1 yra 5 trupmenos.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Farey sekos",
      "text": "Sutvarkyta nesuprastinamų trupmenų seka."
    },
    "strategyTags": [
      "casework"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-17-method-1",
        "title": "Išvardijimas",
        "methodType": "main",
        "strategyTags": [
          "combinatorial-counting"
        ],
        "steps": [
          {
            "title": "Konstravimas",
            "action": "Surašome seką.",
            "reason": "Farey seka apima visas trupmenas iki n.",
            "result": "Gauta 5.",
            "latex": ""
          }
        ],
        "finalAnswer": "5"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-17-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kas sudaro Farey seką F3?",
        "back": "0/1, 1/3, 1/2, 2/3, 1/1.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Surašykite visas trupmenas: 0/1, 1/3, 1/2, 2/3, 1/1.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-18",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Kokia yra mažiausia reali sritis (plotas), kurią turintis iškilas simetriškas rinkinys $\\mathbb{R}^2$ plokštumoje garantuotai turi sveikąjį tašką (be nulio), pagal Minkowskio teoremą?",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Naudokite formulę $V > 2^n \\det(L)$. Čia $n=2$ ir $\\det(L)=1$."
    ],
    "solution": "$2^2 = 4$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Minkowskio teorema",
      "text": "Geometrija skaičių teorijoje: sritis su plotu > 4 turi gardelės tašką."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-18-method-1",
        "title": "Teoremos taikymas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Riba",
            "action": "Apskaičiuojame Minkowskio ribą.",
            "reason": "Tai pagrindinis geometrinės skaičių teorijos įrankis.",
            "result": "Gauta 4.",
            "latex": ""
          }
        ],
        "finalAnswer": "4"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-18-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Koks Minkowskio ribinis plotas R2?",
        "back": "4.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Naudokite formulę $V > 2^n \\det(L)$. Čia $n=2$ ir $\\det(L)=1$.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-19",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Kiek pirminių skaičių garantuotai rasime tarp $n$ ir $2n$ pagal Bertrano postulatą (kai $n > 1$)?",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Teorema garantuoja bent vieną tokį skaičių."
    ],
    "solution": "Pagal Bertrano postulatą (Čebyševo teoremą), tarp $n$ ir $2n$ visada yra bent vienas pirminis.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Bertrano postulatas",
      "text": "Egzistencinis teiginys apie pirminių skaičių pasiskirstymą."
    },
    "strategyTags": [
      "logic"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-19-method-1",
        "title": "Teorinis patvirtinimas",
        "methodType": "main",
        "strategyTags": [
          "proof"
        ],
        "steps": [
          {
            "title": "Garantija",
            "action": "Taikome postulatą.",
            "reason": "Tai nustato apatinę pirminių skaičių kiekio ribą.",
            "result": "Gauta 1.",
            "latex": ""
          }
        ],
        "finalAnswer": "1"
      }
    ],
    "commonTraps": [],
    "reflectionPrompts": [],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-19-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Ką garantuoja Bertrano postulatas?",
        "back": "Egzistuoja pirminis p: n < p < 2n.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Teorema garantuoja bent vieną tokį skaičių.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "ex-olimpiada-12-20",
    "topicId": "olimpiada-12-skaiciu-teorija",
    "type": "numericInput",
    "level": "olympiad",
    "statement": "Apskaičiuokite visų skaičiaus 12 daliklių sumą $\\sigma(12)$.",
    "answer": "28",
    "acceptedAnswers": [
      "28"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [],
    "hints": [
      "Surašykite daliklius: 1, 2, 3, 4, 6, 12."
    ],
    "solution": "$1+2+3+4+6+12 = 28$.",
    "alternate": "",
    "estimatedSeconds": 60,
    "olympiadTrack": "Skaičių teorija",
    "olympiadTier": "standard",
    "requiredPrerequisiteMastery": 70,
    "coreIdea": {
      "title": "Daliklių suma",
      "text": "Funkcija sigma suskaičiuoja visų teigiamų daliklių sumą."
    },
    "strategyTags": [
      "algebraic-transformation"
    ],
    "prerequisiteTopicIds": [],
    "prerequisiteConceptIds": [],
    "expectedMethodIds": [],
    "solutionMethods": [
      {
        "id": "ex-olimpiada-12-20-method-1",
        "title": "Tiesioginis skaičiavimas",
        "methodType": "main",
        "strategyTags": [
          "algebraic-transformation"
        ],
        "steps": [
          {
            "title": "Suma",
            "action": "Sudasime daliklius.",
            "reason": "Tai sigma funkcijos apibrėžimas.",
            "result": "Gauta 28.",
            "latex": ""
          }
        ],
        "finalAnswer": "28"
      }
    ],
    "commonTraps": [
      {
        "id": "ex-olimpiada-12-20-trap-1",
        "title": "Tikrų daliklių suma",
        "wrongMove": "Sakoma 16.",
        "whyTempting": "Painiojama su tobulo skaičiaus apibrėžimu (neįtraukiant paties skaičiaus).",
        "correction": "Sigma funkcija visada apima patį skaičių n."
      }
    ],
    "reflectionPrompts": [
      "Ar skaičius 12 yra tobulas, perteklinis ar trūkstamas?"
    ],
    "extensionQuestions": [],
    "srsSeeds": [
      {
        "id": "ex-olimpiada-12-20-srs-1",
        "deck": "practice",
        "cardType": "method",
        "front": "Kokia sigma(12) reikšmė?",
        "back": "28.",
        "defaultEnabled": true
      }
    ],
    "hintsRaw": [
      {
        "order": 1,
        "kind": "orientation",
        "text": "Surašykite daliklius: 1, 2, 3, 4, 6, 12.",
        "penalty": 0.05
      }
    ]
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-001",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuok ∫1 dx nuo 0 iki 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "integralas"
    ],
    "hints": [
      "Tai tiesiog intervalo ilgis."
    ],
    "solution": "Plotas po y=1.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-002",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask pirmykštę funkcijai 3x².",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "pirmykste-funkcija"
    ],
    "hints": [
      "Pirmykštė x³."
    ],
    "solution": "∫3x²dx=x³+C.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-003",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuok ∫0..2 x dx.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0.0001,
    "choices": [],
    "concepts": [
      "integralas",
      "pirmykste-funkcija"
    ],
    "hints": [
      "Pirmykštė x²/2."
    ],
    "solution": "Įstatome ribas.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-004",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 4.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-005",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-006",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-007",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-008",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-009",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-010",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-011",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-012",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-013",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-014",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-015",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "medium",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-016",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-017",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-018",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-019",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "pirmykste-funkcija-ir-integralas-ex-020",
    "topicId": "pirmykste-funkcija-ir-integralas",
    "type": "numericInput",
    "level": "hard",
    "statement": "Pirmykštė funkcija ir integralas: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-001",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask skaičių 4, 6, 8 vidurkį.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vidurkis"
    ],
    "hints": [
      "Sudedame ir dalijame."
    ],
    "solution": "4+6+8=18.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-002",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask medianą: 2, 9, 5, 1, 7.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "mediana"
    ],
    "hints": [
      "Surikiuok duomenis."
    ],
    "solution": "1,2,5,7,9.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-003",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kuri reikšmė yra moda duomenų 3, 3, 4, 5, 3, 6?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "concepts": [
      "moda"
    ],
    "hints": [
      "Ieškok dažniausiai pasikartojančios reikšmės."
    ],
    "solution": "3 kartojasi tris kartus.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-004",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kokia tikimybė ištraukti širdį iš 52 kortų kaladės?",
    "answer": "0.25",
    "acceptedAnswers": [
      "0.25"
    ],
    "answerTolerance": 0.0001,
    "choices": [],
    "concepts": [
      "tikimybe",
      "ivyki"
    ],
    "hints": [
      "Širdžių yra 13.",
      "13 iš 52."
    ],
    "solution": "P=13/52.",
    "alternate": "",
    "estimatedSeconds": 55
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-005",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Duomenų aibės A: 2, 2, 2, 2 ir B: 0, 2, 4, 6. Kurios sklaida didesnė?",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "sklaida"
    ],
    "hints": [
      "Žiūrėk į išsibarstymą."
    ],
    "solution": "B yra labiau išsibarstę.",
    "alternate": "",
    "estimatedSeconds": 70
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-006",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-007",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-008",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-009",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-010",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-011",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-012",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-013",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-014",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-015",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-016",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-017",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-018",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-019",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "priklausomi-ir-nepriklausomi-ivykiai-ex-020",
    "topicId": "priklausomi-ir-nepriklausomi-ivykiai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-001",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask skaičių 4, 6, 8 vidurkį.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vidurkis"
    ],
    "hints": [
      "Sudedame ir dalijame."
    ],
    "solution": "4+6+8=18.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-002",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask medianą: 2, 9, 5, 1, 7.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "mediana"
    ],
    "hints": [
      "Surikiuok duomenis."
    ],
    "solution": "1,2,5,7,9.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-003",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kuri reikšmė yra moda duomenų 3, 3, 4, 5, 3, 6?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "concepts": [
      "moda"
    ],
    "hints": [
      "Ieškok dažniausiai pasikartojančios reikšmės."
    ],
    "solution": "3 kartojasi tris kartus.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-004",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kokia tikimybė ištraukti širdį iš 52 kortų kaladės?",
    "answer": "0.25",
    "acceptedAnswers": [
      "0.25"
    ],
    "answerTolerance": 0.0001,
    "choices": [],
    "concepts": [
      "tikimybe",
      "ivyki"
    ],
    "hints": [
      "Širdžių yra 13.",
      "13 iš 52."
    ],
    "solution": "P=13/52.",
    "alternate": "",
    "estimatedSeconds": 55
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-005",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Duomenų aibės A: 2, 2, 2, 2 ir B: 0, 2, 4, 6. Kurios sklaida didesnė?",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "sklaida"
    ],
    "hints": [
      "Žiūrėk į išsibarstymą."
    ],
    "solution": "B yra labiau išsibarstę.",
    "alternate": "",
    "estimatedSeconds": 70
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-006",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-007",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-008",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-009",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-010",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-011",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-012",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-013",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-014",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-015",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "medium",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-016",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-017",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-018",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-019",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "statistine-duomenu-analize-ir-regresija-ex-020",
    "topicId": "statistine-duomenu-analize-ir-regresija",
    "type": "numericInput",
    "level": "hard",
    "statement": "Statistinė duomenų analizė, koreliacija ir regresija: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-001",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Stačiakampio kraštinės 7 ir 9. Rask perimetrą.",
    "answer": "32",
    "acceptedAnswers": [
      "32"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-002",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Kvadrato kraštinė 6. Rask perimetrą.",
    "answer": "24",
    "acceptedAnswers": [
      "24"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-003",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Trikampio kraštinės 5, 7 ir 8. Rask perimetrą.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-004",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "easy",
    "statement": "Lygiagretainio kraštinės 8 ir 5. Rask perimetrą.",
    "answer": "26",
    "acceptedAnswers": [
      "26"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "perimetras"
    ],
    "hints": [
      "Sudedame kraštines.",
      "Stačiakampiui dauginu iš 2."
    ],
    "solution": "Skaičiuojame perimetrą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-005",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Stačiakampis 8x5.",
    "answer": "40",
    "acceptedAnswers": [
      "40"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-006",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Trikampis pagrindas 10, aukštinė 6.",
    "answer": "30",
    "acceptedAnswers": [
      "30"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-007",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Kvadratas kraštinė 7.",
    "answer": "49",
    "acceptedAnswers": [
      "49"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-008",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Rask plotą: Apskritimas r=5, pi~3.14.",
    "answer": "78.5",
    "acceptedAnswers": [
      "78.5"
    ],
    "answerTolerance": 0.01,
    "choices": [],
    "concepts": [
      "plotas",
      "apskritimas"
    ],
    "hints": [
      "Pasirink tinkamą formulę.",
      "Plotas matuojamas kvadratiniais vienetais."
    ],
    "solution": "Taikome formulę.",
    "alternate": "",
    "estimatedSeconds": 65
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-009",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kuri kraštinė stačiajame trikampyje yra įžambinė?",
    "answer": "Priešinga stačiajam kampui",
    "acceptedAnswers": [
      "Priešinga stačiajam kampui"
    ],
    "answerTolerance": 0,
    "choices": [
      "Trumpiausia",
      "Priešinga stačiajam kampui",
      "Kraštinė prie pagrindo",
      "Bet kuri"
    ],
    "concepts": [
      "pitagoro-teorema"
    ],
    "hints": [
      "Ji yra prieš stačiajį kampą."
    ],
    "solution": "Įžambinė yra prieš 90° kampą.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-010",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stačiajame trikampyje vienas statinis 9, įžambinė 15. Rask kitą statinį.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "pitagoro-teorema"
    ],
    "hints": [
      "Taikome Pitagoro teoremą.",
      "Skaičiuojame 15²-9²."
    ],
    "solution": "c²=a²+b². x=12.",
    "alternate": "",
    "estimatedSeconds": 95
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-011",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-012",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-013",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-014",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-015",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "medium",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-016",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-017",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-018",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-019",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "stereometrija-tieses-plokstumos-ir-kampai-ex-020",
    "topicId": "stereometrija-tieses-plokstumos-ir-kampai",
    "type": "numericInput",
    "level": "hard",
    "statement": "Stereometrija: tiesės, plokštumos, kampai ir atstumai: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-001",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask skaičių 4, 6, 8 vidurkį.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vidurkis"
    ],
    "hints": [
      "Sudedame ir dalijame."
    ],
    "solution": "4+6+8=18.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-002",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "easy",
    "statement": "Rask medianą: 2, 9, 5, 1, 7.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "mediana"
    ],
    "hints": [
      "Surikiuok duomenis."
    ],
    "solution": "1,2,5,7,9.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-003",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Kuri reikšmė yra moda duomenų 3, 3, 4, 5, 3, 6?",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [
      "3",
      "4",
      "5",
      "6"
    ],
    "concepts": [
      "moda"
    ],
    "hints": [
      "Ieškok dažniausiai pasikartojančios reikšmės."
    ],
    "solution": "3 kartojasi tris kartus.",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-004",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Kokia tikimybė ištraukti širdį iš 52 kortų kaladės?",
    "answer": "0.25",
    "acceptedAnswers": [
      "0.25"
    ],
    "answerTolerance": 0.0001,
    "choices": [],
    "concepts": [
      "tikimybe",
      "ivyki"
    ],
    "hints": [
      "Širdžių yra 13.",
      "13 iš 52."
    ],
    "solution": "P=13/52.",
    "alternate": "",
    "estimatedSeconds": 55
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-005",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Duomenų aibės A: 2, 2, 2, 2 ir B: 0, 2, 4, 6. Kurios sklaida didesnė?",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "sklaida"
    ],
    "hints": [
      "Žiūrėk į išsibarstymą."
    ],
    "solution": "B yra labiau išsibarstę.",
    "alternate": "",
    "estimatedSeconds": 70
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-006",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-007",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-008",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-009",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-010",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-011",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-012",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-013",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-014",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-015",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "medium",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-016",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-017",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-018",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-019",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "tikimybiniai-skirstiniai-ir-statistika-ex-020",
    "topicId": "tikimybiniai-skirstiniai-ir-statistika",
    "type": "numericInput",
    "level": "hard",
    "statement": "Tikimybiniai skirstiniai ir statistika: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "duomenys"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-001",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuok a_3, kai a_n=2n+1.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Įstatyk n=3."
    ],
    "solution": "a_3=7",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-002",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 2.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-003",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 3.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-004",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 4.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-005",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-006",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-007",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-008",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-009",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-010",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-011",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-012",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-013",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-014",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-015",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-016",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-017",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-018",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-019",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ir-nelygybes-isplestinis-ex-020",
    "topicId": "trigonometrines-lygtys-ir-nelygybes-isplestinis",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-001",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuok a_3, kai a_n=2n+1.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Įstatyk n=3."
    ],
    "solution": "a_3=7",
    "alternate": "",
    "estimatedSeconds": 35
  },
  {
    "id": "trigonometrines-lygtys-ex-002",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 2.",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-003",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 3.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-004",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 4.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-005",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 5.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-006",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 6.",
    "answer": "6",
    "acceptedAnswers": [
      "6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-007",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 7.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-008",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 8.",
    "answer": "8",
    "acceptedAnswers": [
      "8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-009",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 9.",
    "answer": "9",
    "acceptedAnswers": [
      "9"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-010",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 10.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-011",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 11.",
    "answer": "11",
    "acceptedAnswers": [
      "11"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-012",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 12.",
    "answer": "12",
    "acceptedAnswers": [
      "12"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-013",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 13.",
    "answer": "13",
    "acceptedAnswers": [
      "13"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-014",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 14.",
    "answer": "14",
    "acceptedAnswers": [
      "14"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-015",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "medium",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 15.",
    "answer": "15",
    "acceptedAnswers": [
      "15"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-016",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 16.",
    "answer": "16",
    "acceptedAnswers": [
      "16"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-017",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 17.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-018",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 18.",
    "answer": "18",
    "acceptedAnswers": [
      "18"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-019",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 19.",
    "answer": "19",
    "acceptedAnswers": [
      "19"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "trigonometrines-lygtys-ex-020",
    "topicId": "trigonometrines-lygtys",
    "type": "numericInput",
    "level": "hard",
    "statement": "Trigonometrinės lygtys ir tapatūs pertvarkiai: papildomas uždavinys Nr. 20.",
    "answer": "20",
    "acceptedAnswers": [
      "20"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "seka"
    ],
    "hints": [
      "Pasirink tinkamą metodą."
    ],
    "solution": "Papildomas pratimas.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "vektoriai-erdveje-ex-001",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "easy",
    "statement": "Raskite vektoriaus $\\vec{a}(6; -8; 0)$ modulį.",
    "answer": "10",
    "acceptedAnswers": [
      "10"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vektoriaus-modulis-erdveje"
    ],
    "hints": [
      "Naudokite modulio formulę $|\\vec{a}| = \\sqrt{x^2+y^2+z^2}$.",
      "Apskaičiuokite $\\sqrt{6^2 + (-8)^2 + 0^2}$."
    ],
    "solution": "Pakeliame koordinates kvadratu. Sudedame ir traukiame šaknį.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "vektoriai-erdveje-ex-002",
    "topicId": "vektoriai-erdveje",
    "type": "multipleChoice",
    "level": "easy",
    "statement": "Kokia yra taško $A(3; -5; 2)$ aplikatė?",
    "answer": "2",
    "acceptedAnswers": [
      "2"
    ],
    "answerTolerance": 0,
    "choices": [
      "3",
      "-5",
      "2",
      "0"
    ],
    "concepts": [
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "hints": [
      "Koordinatės užrašomos tvarka (abscisė; ordinatė; aplikatė).",
      "Aplikatė yra trečioji koordinatė (z)."
    ],
    "solution": "Taško koordinatės yra (x; y; z). Čia x=3, y=-5, z=2.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "vektoriai-erdveje-ex-003",
    "topicId": "vektoriai-erdveje",
    "type": "expressionInput",
    "level": "easy",
    "statement": "Apskaičiuokite vektorių sumą $\\vec{a} + \\vec{b}$, jei $\\vec{a}(2; -1; 4)$ ir $\\vec{b}(-3; 5; 0)$. Atsakymą pateikite koordinačių pavidalu (x;y;z).",
    "answer": "(-1; 4; 4)",
    "acceptedAnswers": [
      "(-1; 4; 4)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vektoriu-sudetis-erdveje"
    ],
    "hints": [
      "Sudėkite atitinkamas vektorių koordinates."
    ],
    "solution": "Sudedame koordinates.",
    "alternate": "",
    "estimatedSeconds": 45
  },
  {
    "id": "vektoriai-erdveje-ex-004",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "easy",
    "statement": "Raskite skaliarinę sandaugą $\\vec{a} \\cdot \\vec{b}$, jei $\\vec{a}(1; 2; 3)$ ir $\\vec{b}(4; 0; -1)$.",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Dauginkite atitinkamas koordinates ir jas sudėkite."
    ],
    "solution": "Skaičiuojame sandaugą.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "vektoriai-erdveje-ex-005",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "easy",
    "statement": "Apskaičiuokite atstumą tarp taškų $O(0;0;0)$ ir $A(2;3;6)$.",
    "answer": "7",
    "acceptedAnswers": [
      "7"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "hints": [
      "Naudokite atstumo formulę (arba tiesiog apskaičiuokite taško A padėties vektoriaus modulį)."
    ],
    "solution": "Skaičiuojame.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "vektoriai-erdveje-ex-006",
    "topicId": "vektoriai-erdveje",
    "type": "multipleChoice",
    "level": "easy",
    "statement": "Kuris iš šių vektorių yra vienetinis?",
    "answer": "(0,6; 0,8; 0)",
    "acceptedAnswers": [
      "(0,6; 0,8; 0)"
    ],
    "answerTolerance": 0,
    "choices": [
      "(1; 1; 1)",
      "(1; 0; 1)",
      "(0,6; 0,8; 0)",
      "(1; 2; 0)"
    ],
    "concepts": [
      "vektoriaus-modulis-erdveje"
    ],
    "hints": [
      "Vienetinio vektoriaus modulis lygus 1.",
      "Patikrinkite, kurio vektoriaus koordinačių kvadratų suma lygi 1."
    ],
    "solution": "Skaičiuojame c variantą.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "vektoriai-erdveje-ex-007",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "easy",
    "statement": "Vektoriaus $\\vec{a}(x; 4; 3)$ modulis lygus $\\sqrt{41}$. Raskite teigiamą $x$ reikšmę.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vektoriaus-modulis-erdveje"
    ],
    "hints": [
      "Surašykite lygtį: $x^2 + 4^2 + 3^2 = 41$."
    ],
    "solution": "Sudarome lygtį.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "vektoriai-erdveje-ex-008",
    "topicId": "vektoriai-erdveje",
    "type": "expressionInput",
    "level": "easy",
    "statement": "Duotas vektorius $\\vec{a}(2; -4; 6)$. Raskite vektoriaus $0,5\\vec{a}$ koordinates.",
    "answer": "(1; -2; 3)",
    "acceptedAnswers": [
      "(1; -2; 3)"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "vektoriaus-daugyba-is-skaiciaus-erdveje"
    ],
    "hints": [
      "Kiekvieną koordinatę padauginkite iš 0,5."
    ],
    "solution": "Dauginame.",
    "alternate": "",
    "estimatedSeconds": 30
  },
  {
    "id": "vektoriai-erdveje-ex-009",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "easy",
    "statement": "Raskite taško $A(2; 3; 4)$ atstumą iki plokštumos $Oxy$.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "hints": [
      "Atstumas iki Oxy plokštumos yra z koordinatės modulis."
    ],
    "solution": "Taško projekcija į Oxy plokštumą yra (2; 3; 0). Atstumas tarp (2; 3; 4) ir (2; 3; 0) lygus 4.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "vektoriai-erdveje-ex-010",
    "topicId": "vektoriai-erdveje",
    "type": "multipleChoice",
    "level": "easy",
    "statement": "Kuriame koordinačių ketvirtyje (tiksliau, oktante, bet pakaks nurodyti koordinates) yra taškas, kurio visos koordinatės neigiamos?",
    "answer": "(-, -, -)",
    "acceptedAnswers": [
      "(-, -, -)"
    ],
    "answerTolerance": 0,
    "choices": [
      "(+, +, +)",
      "(-, -, -)",
      "(-, +, -)"
    ],
    "concepts": [
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "hints": [
      "Klausimas tiesiog prašo identifikuoti neigiamas koordinates."
    ],
    "solution": "Taškas su neigiamomis koordinatėmis žymimas (-, -, -).",
    "alternate": "",
    "estimatedSeconds": 20
  },
  {
    "id": "vektoriai-erdveje-ex-011",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite kampo kosinusą tarp vektorių $\\vec{a}(2; 2; 1)$ ir $\\vec{b}(1; 2; 2)$.",
    "answer": "0.8889",
    "acceptedAnswers": [
      "0.8889"
    ],
    "answerTolerance": 0.0001,
    "choices": [],
    "concepts": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "hints": [
      "Naudokite formulę $\\cos \\phi = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}$."
    ],
    "solution": "Sandauga: $2\\cdot 1 + 2\\cdot 2 + 1\\cdot 2 = 8$. Moduliai: $\\sqrt{4+4+1}=3$ ir $\\sqrt{1+4+4}=3$. Kosinusas: $8/9 \\approx 0,8889$.",
    "alternate": "",
    "estimatedSeconds": 90
  },
  {
    "id": "vektoriai-erdveje-ex-012",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Su kuria $x$ reikšme vektoriai $\\vec{a}(x; 2; -1)$ ir $\\vec{b}(3; -6; 3)$ yra kolinearūs?",
    "answer": "-1",
    "acceptedAnswers": [
      "-1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kolinearieji-vektoriai-erdveje"
    ],
    "hints": [
      "Turi galioti $\\frac{x}{3} = \\frac{2}{-6} = \\frac{-1}{3}$."
    ],
    "solution": "Randame santykį. Sudarome lygtį.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "vektoriai-erdveje-ex-013",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Raskite skaliarinę sandaugą $(\\vec{a} + \\vec{b}) \\cdot \\vec{a}$, jei $\\vec{a}(1; 0; 2)$ ir $\\vec{b}(2; 1; -1)$.",
    "answer": "5",
    "acceptedAnswers": [
      "5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Pirmiausia raskite $\\vec{a}+\\vec{b}$, tada dauginkite skaliariškai iš $\\vec{a}$."
    ],
    "solution": "Suma: $(1+2; 0+1; 2-1) = (3; 1; 1)$. Sandauga: $3\\cdot 1 + 1\\cdot 0 + 1\\cdot 2 = 5$.",
    "alternate": "",
    "estimatedSeconds": 80
  },
  {
    "id": "vektoriai-erdveje-ex-014",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Raskite taško $A(1; 2; 3)$ atstumą iki koordinačių pradžios taško $O(0; 0; 0)$. Atsakymą suapvalinkite iki šimtųjų.",
    "answer": "3.74",
    "acceptedAnswers": [
      "3.74"
    ],
    "answerTolerance": 0.01,
    "choices": [],
    "concepts": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "hints": [
      "Skaičiuokite $\\sqrt{1^2 + 2^2 + 3^2}$."
    ],
    "solution": "Suma: $1+4+9 = 14$. Šaknis: $\\sqrt{14} \\approx 3,7416$.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "vektoriai-erdveje-ex-015",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Duota, kad $|\\vec{a}|=3, |\\vec{b}|=4$, o kampas tarp jų lygus $120^\\circ$. Apskaičiuokite $\\vec{a} \\cdot \\vec{b}$.",
    "answer": "-6",
    "acceptedAnswers": [
      "-6"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Naudokite geometrinę formulę $\\vec{a}\\cdot\\vec{b} = |\\vec{a}||\\vec{b}|\\cos \\phi$.",
      "Atminkite, kad $\\cos 120^\\circ = -0,5$."
    ],
    "solution": "Dauginame.",
    "alternate": "",
    "estimatedSeconds": 50
  },
  {
    "id": "vektoriai-erdveje-ex-016",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Raskite vektoriaus $\\vec{a}(2; -1; 2)$ projekciją į vektorių $\\vec{b}(3; 0; 4)$. (Pastaba: ieškomas skaliarinis dydis $pr_{\\vec{b}} \\vec{a} = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|}$)",
    "answer": "2.8",
    "acceptedAnswers": [
      "2.8"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Apskaičiuokite skaliarinę sandaugą ir padalinkite iš b modulio."
    ],
    "solution": "Sandauga: $2\\cdot 3 + (-1)\\cdot 0 + 2\\cdot 4 = 14$. Modulis b: $\\sqrt{3^2+0^2+4^2}=5$. Projekcija: $14/5 = 2,8$.",
    "alternate": "",
    "estimatedSeconds": 100
  },
  {
    "id": "vektoriai-erdveje-ex-017",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Raskite tašką $C$, kuris dalina atkarpą $AB$ santykiu $1:1$ (vidurio tašką), jei $A(2; 4; 6)$ ir $B(4; 8; 10)$. Pateikite taško C koordinačių sumą.",
    "answer": "17",
    "acceptedAnswers": [
      "17"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "hints": [
      "Vidurio taško koordinatės yra galų koordinačių vidurkiai."
    ],
    "solution": "Koordinatės: $(2+4)/2=3, (4+8)/2=6, (6+10)/2=8$. Suma: $3+6+8 = 17$.",
    "alternate": "",
    "estimatedSeconds": 70
  },
  {
    "id": "vektoriai-erdveje-ex-018",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite $(\\vec{a}-\\vec{b})^2$, jei $|\\vec{a}|=5, |\\vec{b}|=2$ ir $\\vec{a} \\cdot \\vec{b} = 4$.",
    "answer": "21",
    "acceptedAnswers": [
      "21"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Naudokite formulę $(\\vec{a}-\\vec{b})^2 = \\vec{a}^2 - 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$.",
      "Atminkite, kad $\\vec{a}^2 = |\\vec{a}|^2$."
    ],
    "solution": "Skaičiuojame.",
    "alternate": "",
    "estimatedSeconds": 80
  },
  {
    "id": "vektoriai-erdveje-ex-019",
    "topicId": "vektoriai-erdveje",
    "type": "multipleChoice",
    "level": "medium",
    "statement": "Jei $\\vec{a} \\cdot \\vec{b} = -10$, koks kampas yra tarp šių vektorių?",
    "answer": "Bukasis",
    "acceptedAnswers": [
      "Bukasis"
    ],
    "answerTolerance": 0,
    "choices": [
      "Smailusis",
      "Statusis",
      "Bukasis",
      "Ištiestinis"
    ],
    "concepts": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "hints": [
      "Skaliarinės sandaugos ženklas priklauso nuo kosinuso."
    ],
    "solution": "Kadangi sandauga neigiama ir moduliai teigiami, kosinusas neigiamas. Tai reiškia, kad kampas yra bukasis.",
    "alternate": "",
    "estimatedSeconds": 40
  },
  {
    "id": "vektoriai-erdveje-ex-020",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "medium",
    "statement": "Apskaičiuokite trikampio, kurio viršūnės yra $A(1;0;0), B(0;1;0), C(0;0;0)$, plotą.",
    "answer": "0.5",
    "acceptedAnswers": [
      "0.5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "hints": [
      "Tai statusis trikampis Oxy plokštumoje."
    ],
    "solution": "Kraštinės $CA$ ir $CB$ yra koordinačių ašyse, jų ilgiai lygūs 1. Kampas tarp jų $90^\\circ$. Plotas: $0,5 \\cdot 1 \\cdot 1 = 0,5$.",
    "alternate": "",
    "estimatedSeconds": 60
  },
  {
    "id": "vektoriai-erdveje-ex-021",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite kampą laipsniais tarp vektoriaus $\\vec{a}(1; 1; \\sqrt{2})$ ir ašies $Oz$.",
    "answer": "45",
    "acceptedAnswers": [
      "45"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "hints": [
      "Oz ašies krypties vektorius yra $\\vec{k}(0; 0; 1)$.",
      "Apskaičiuokite kampą tarp $\\vec{a}$ ir $\\vec{k}$."
    ],
    "solution": "Sandauga: $1\\cdot 0 + 1\\cdot 0 + \\sqrt{2}\\cdot 1 = \\sqrt{2}$. Moduliai: $|\\vec{a}| = \\sqrt{1+1+2}=2, |\\vec{k}|=1$. Kosinusas: $\\sqrt{2}/2$. Kampas: $45^\\circ$.",
    "alternate": "",
    "estimatedSeconds": 120
  },
  {
    "id": "vektoriai-erdveje-ex-022",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Vektoriai $\\vec{a}$ ir $\\vec{b}$ sudaro $60^\\circ$ kampą, $|\\vec{a}|=1, |\\vec{b}|=2$. Apskaičiuokite vektoriaus $\\vec{p} = 3\\vec{a} - \\vec{b}$ modulį.",
    "answer": "2.6458",
    "acceptedAnswers": [
      "2.6458"
    ],
    "answerTolerance": 0.001,
    "choices": [],
    "concepts": [
      "vektoriaus-modulis-erdveje",
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Naudokite savybę $|\\vec{p}| = \\sqrt{\\vec{p}^2}$.",
      "$\\vec{p}^2 = (3\\vec{a}-\\vec{b})^2 = 9\\vec{a}^2 - 6\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$."
    ],
    "solution": "Skaliarinė sandauga: $1\\cdot 2\\cdot \\cos 60^\\circ = 1$. Kvadrato skaičiavimas: $9(1)^2 - 6(1) + (2)^2 = 9-6+4=7$. Modulis: $\\sqrt{7} \\approx 2,646$.",
    "alternate": "",
    "estimatedSeconds": 150
  },
  {
    "id": "vektoriai-erdveje-ex-023",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Duotas kubas $ABCDA_1B_1C_1D_1$, kurio briauna lygi 1. Raskite skaliarinę sandaugą $\\vec{AB} \\cdot \\vec{AC_1}$.",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Įveskite koordinačių sistemą: $A(0;0;0), B(1;0;0), C(1;1;0), C_1(1;1;1)$."
    ],
    "solution": "Vektoriai: $\\vec{AB}(1;0;0), \\vec{AC_1}(1;1;1)$. Sandauga: $1\\cdot 1 + 0\\cdot 1 + 0\\cdot 1 = 1$.",
    "alternate": "",
    "estimatedSeconds": 120
  },
  {
    "id": "vektoriai-erdveje-ex-024",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite $z$ reikšmę, su kuria vektorius $\\vec{a}(1; 2; z)$ būtų statmenas vektoriui $\\vec{b}(z; -3; 1)$.",
    "answer": "3",
    "acceptedAnswers": [
      "3"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Sudarome lygtį $\\vec{a} \\cdot \\vec{b} = 0$."
    ],
    "solution": "Sandauga: $1\\cdot z + 2\\cdot (-3) + z\\cdot 1 = 0$. Sprendžiame: $2z = 6 \\implies z = 3$.",
    "alternate": "",
    "estimatedSeconds": 90
  },
  {
    "id": "vektoriai-erdveje-ex-025",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Taškai $A(1;0;0), B(0;1;0), C(0;0;1)$ yra piramidės viršūnės. Raskite kampą tarp vektorių $\\vec{AB}$ ir $\\vec{AC}$ laipsniais.",
    "answer": "60",
    "acceptedAnswers": [
      "60"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "hints": [
      "Raskite vektorių koordinates, tada kampą."
    ],
    "solution": "$\\vec{AB} = (-1; 1; 0), \\vec{AC} = (-1; 0; 1)$. Sandauga: $(-1)(-1) + 1\\cdot 0 + 0\\cdot 1 = 1$. Moduliai: $\\sqrt{2}$ ir $\\sqrt{2}$. Kosinusas: $1/2$. Kampas $60^\\circ$.",
    "alternate": "",
    "estimatedSeconds": 140
  },
  {
    "id": "vektoriai-erdveje-ex-026",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite vektoriaus $\\vec{a}$ koordinates, jei žinoma, kad jis kolinearus vektoriui $\\vec{b}(2; 1; -1)$ ir $\\vec{a} \\cdot \\vec{b} = 3$. Atsakymui pateikite koordinačių sumą.",
    "answer": "1",
    "acceptedAnswers": [
      "1"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kolinearieji-vektoriai-erdveje",
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "$\\vec{a} = k\\vec{b} = (2k; k; -k)$.",
      "Įstatykite į skaliarinę sandaugą ir raskite k."
    ],
    "solution": "Sandauga: $(2k)(2) + (k)(1) + (-k)(-1) = 3 \\implies 4k + k + k = 3$. Vektorius $\\vec{a} = (1; 0,5; -0,5)$. Suma: $1 + 0,5 - 0,5 = 1$.",
    "alternate": "",
    "estimatedSeconds": 130
  },
  {
    "id": "vektoriai-erdveje-ex-027",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Apskaičiuokite atstumą nuo koordinačių pradžios taško iki plokštumos, einančios per taškus $A(2;0;0), B(0;2;0), C(0;0;2)$. (Patarimas: naudokite piramidės tūrio formulę dviem būdais arba normalės vektorių).",
    "answer": "1.1547",
    "acceptedAnswers": [
      "1.1547"
    ],
    "answerTolerance": 0.001,
    "choices": [],
    "concepts": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "hints": [
      "Piramidės OABC tūris $V = 1/6 \\cdot 2 \\cdot 2 \\cdot 2 = 4/3$.",
      "$V = 1/3 \\cdot S_{ABC} \\cdot h$. Raskite $S_{ABC}$ ir tada h."
    ],
    "solution": "ABC yra lygiakraštis trikampis, kraštinė $a = \\sqrt{2^2+2^2} = \\sqrt{8}$. Plotas $S_{ABC} = \\frac{a^2\\sqrt{3}}{4} = \\frac{8\\sqrt{3}}{4} = 2\\sqrt{3}$. Aukštinė $h = 3V / S = (3 \\cdot 4/3) / (2\\sqrt{3}) = 2/\\sqrt{3} \\approx 1,1547$.",
    "alternate": "",
    "estimatedSeconds": 200
  },
  {
    "id": "vektoriai-erdveje-ex-028",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Raskite $x$, jei kampas tarp vektorių $\\vec{a}(x; 1; -1)$ ir $\\vec{b}(1; 0; 1)$ lygus $60^\\circ$.",
    "answer": "4",
    "acceptedAnswers": [
      "4"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "hints": [
      "Naudokite kosinuso formulę: $0,5 = \\frac{x - 1}{\\sqrt{x^2+2}\\sqrt{2}}$."
    ],
    "solution": "Lygtis: $\\sqrt{2(x^2+2)} = 2(x-1)$. Kvadratu: $2x^2 + 4 = 4(x^2 - 2x + 1) \\implies 2x^2 + 4 = 4x^2 - 8x + 4$. Sutvarkome: $2x^2 - 8x = 0 \\implies 2x(x-4) = 0$. Patikriname reikšmes: x=0 netinka (sandauga būtų neigiama), x=4 tinka.",
    "alternate": "",
    "estimatedSeconds": 180
  },
  {
    "id": "vektoriai-erdveje-ex-029",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Vektoriaus $\\vec{a}$ modulis lygus 2, o jo krypties kampai su ašimis $Ox$ ir $Oy$ yra lygūs $60^\\circ$. Raskite šio vektoriaus z koordinatės modulį.",
    "answer": "1.4142",
    "acceptedAnswers": [
      "1.4142"
    ],
    "answerTolerance": 0.001,
    "choices": [],
    "concepts": [
      "vektoriaus-koordinates-erdveje"
    ],
    "hints": [
      "Krypties kosinusų savybė: $\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$."
    ],
    "solution": "Kosinusai: $\\cos^2 60 + \\cos^2 60 + \\cos^2 \\gamma = 1 \\implies 0,25 + 0,25 + \\cos^2 \\gamma = 1 \\implies \\cos^2 \\gamma = 0,5$. Vektoriaus z koordinatė: $z = |\\vec{a}| \\cos \\gamma$. $z^2 = |\\vec{a}|^2 \\cos^2 \\gamma = 4 \\cdot 0,5 = 2$. Modulis $|z| = \\sqrt{2} \\approx 1,4142$.",
    "alternate": "",
    "estimatedSeconds": 150
  },
  {
    "id": "vektoriai-erdveje-ex-030",
    "topicId": "vektoriai-erdveje",
    "type": "numericInput",
    "level": "hard",
    "statement": "Duotas reguliarus tetraedras (visos briaunos lygios 1). Apskaičiuokite skaliarinę sandaugą dviejų briaunų vektorių, išeinančių iš tos pačios viršūnės.",
    "answer": "0.5",
    "acceptedAnswers": [
      "0.5"
    ],
    "answerTolerance": 0,
    "choices": [],
    "concepts": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "hints": [
      "Reguliaraus tetraedro visos sienos yra lygiakraščiai trikampiai.",
      "Kampas tarp briaunų iš tos pačios viršūnės yra $60^\\circ$."
    ],
    "solution": "Naudojame geometrinę formulę.",
    "alternate": "",
    "estimatedSeconds": 80
  }
];
