// Generated split content chunk. Source: scripts/build_frontend_content.py
export const concepts = {
  "desimtaine-trupmena": {
    "title": "Dešimtainė trupmena",
    "type": "concept",
    "definition": "Skaičius, užrašytas naudojant kablelį.",
    "intuition": "Tai būdas užrašyti dalis nenaudojant brūkšnio, kaip piniguose (pvz., 1,50 Eur).",
    "formal": "Racionalusis skaičius, kurio vardiklis yra 10 laipsnis, užrašytas pozicine sistema.",
    "related": [
      "kablelis",
      "desimtosios-dalys"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "kablelis": {
    "title": "Kablelis",
    "type": "notation",
    "definition": "Ženklas, skiriantis sveikąją dalį nuo trupmeninės.",
    "intuition": "Sienelė tarp pilnų daiktų ir jų gabaliukų.",
    "formal": "Skyriklis, naudojamas dešimtainėje skaičiavimo sistemoje.",
    "related": [
      "desimtaine-trupmena"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "desimtosios-dalys": {
    "title": "Dešimtosios dalys",
    "type": "concept",
    "definition": "Pirmas skyrius po kablelio.",
    "intuition": "Vienas daiktas padalintas į 10 lygų dalių.",
    "formal": "Vienetų skaičius lygus 10^-1.",
    "related": [
      "simtosios-dalys"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "simtosios-dalys": {
    "title": "Šimtosios dalys",
    "type": "concept",
    "definition": "Antras skyrius po kablelio.",
    "intuition": "Vienas daiktas padalintas į 100 lygų dalių (kaip centai eurų sistemoje).",
    "formal": "Vienetų skaičius lygus 10^-2.",
    "related": [
      "desimtosios-dalys",
      "tukstantosios-dalys"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "tukstantosios-dalys": {
    "title": "Tūkstantosios dalys",
    "type": "concept",
    "definition": "Trečias skyrius po kablelio.",
    "intuition": "Vienas daiktas padalintas į 1000 dalių (labai smulkios dalys).",
    "formal": "Vienetų skaičius lygus 10^-3.",
    "related": [
      "simtosios-dalys"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "skaiciu-sulyginimas": {
    "title": "Skaičių sulyginimas",
    "type": "method",
    "definition": "Nulių prirašymas gale, kad skaičiai turėtų tiek pat skaitmenų po kablelio.",
    "intuition": "Pridėjus nulį gale, skaičiaus vertė nesikeičia, bet pasidaro lengviau lyginti.",
    "formal": "Dešimtainės trupmenos išraiškos keitimas ekvivalenčia forma prirašant nulinę vertę turinčius skaitmenis.",
    "related": [
      "desimtainiu-lyginimas"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "desimtainiu-lyginimas": {
    "title": "Dešimtainių trupmenų lyginimas",
    "type": "method",
    "definition": "Procesas nustatyti, kuris skaičius didesnis.",
    "intuition": "Žiūri skyrių po skyriaus iš kairės į dešinę.",
    "formal": "Algoritmas, lyginantis dešimtainius skaičius pagal pozicinę vertę pradedant aukščiausiu skyriumi.",
    "related": [
      "skaiciu-sulyginimas"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "desimtainiu-apvalinimas": {
    "title": "Dešimtainių trupmenų apvalinimas",
    "type": "method",
    "definition": "Skaičiaus supaprastinimas iki tam tikro skyriaus.",
    "intuition": "Jei kitas skaičius 5 ar didesnis – kelk į viršų, jei mažesnis – palik.",
    "formal": "Skaičiaus keitimas artimiausiu skaičiumi nurodytu tikslumu.",
    "related": [],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "sudetis-stulpeliu-desimtainiu": {
    "title": "Sudėtis stulpeliu",
    "type": "method",
    "definition": "Dešimtainių skaičių sudėjimas rašant juos vieną po kitu.",
    "intuition": "Svarbiausia, kad kableliai būtų vienoje tiesėje.",
    "formal": "Aritmetinis veiksmas su dešimtainiais skaičiais, derinant atitinkamus skyrius.",
    "related": [
      "atimtis-stulpeliu-desimtainiu"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "atimtis-stulpeliu-desimtainiu": {
    "title": "Atimtis stulpeliu",
    "type": "method",
    "definition": "Dešimtainių skaičių atėmimas rašant juos vieną po kitu.",
    "intuition": "Jei trūksta skaitmens – 'pasiskolink' iš nulio gale.",
    "formal": "Aritmetinis veiksmas su dešimtainiais skaičiais, derinant atitinkamus skyrius.",
    "related": [
      "sudetis-stulpeliu-desimtainiu"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "netinkamas-kablelio-dejimas": {
    "title": "Kablelio ignoravimas",
    "type": "mistake",
    "definition": "Mokinys taiko natūraliųjų skaičių lygiuotes taisykles.",
    "intuition": "Sudedant 2,5 + 3 rašo 2,8 (lygiuoja pagal dešinį kraštą).",
    "formal": "Sveikasis skaičius turi kablelį gale (3 = 3,0). Lygiuok kablelį po kableliu.",
    "related": [
      "kablelis",
      "sudetis-stulpeliu-desimtainiu"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "nuliu-ignoravimas": {
    "title": "Nulių 'pametimas'",
    "type": "mistake",
    "definition": "Mokinys lygina visą trupmeninę dalį kaip vieną skaičių.",
    "intuition": "Mano, kad 0,5 yra mažiau už 0,12, nes 5 < 12.",
    "formal": "Sulygink skaitmenų skaičių: 0,5 = 0,50. 50 > 12, tad 0,5 > 0,12.",
    "related": [
      "skaiciu-sulyginimas"
    ],
    "topics": [
      "desimtaines-trupmenos"
    ]
  },
  "kintamasis": {
    "title": "Kintamasis",
    "type": "concept",
    "definition": "Raidė, žyminti nežinomą arba kintantį dydį.",
    "intuition": "Tai ta vieta, kur aukštesniosios nelygybės uždavinyje įdedame reikšmę.",
    "formal": "Kintamasis yra simbolis, kurio reikšmė gali keistis.",
    "related": [
      "reiskinys",
      "lygtis",
      "nelygybe"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesinis-sarysis"
    ]
  },
  "reiskinys": {
    "title": "Reiškinys",
    "type": "concept",
    "definition": "Matematinis užrašas iš skaičių, kintamųjų ir veiksmų.",
    "intuition": "Reiškinys yra formulės arba skaičiavimo žingsnio užrašas.",
    "formal": "Reiškinys sudaromas naudojant aritmetinius veiksmus ir skliaustus.",
    "related": [
      "kintamasis",
      "koeficientas"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "koeficientas": {
    "title": "Koeficientas",
    "type": "concept",
    "definition": "Skaičius prie raidės.",
    "intuition": "Koeficientas pasako, kiek kartų daugėja raidė.",
    "formal": "Koeficientas yra skaitinis daugiklis prie kintamojo.",
    "related": [
      "reiskinys",
      "tiesine-funkcija"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "lygtis": {
    "title": "Lygtis",
    "type": "concept",
    "definition": "Dviejų reiškinių lygybė su nežinomuoju.",
    "intuition": "Lygtis sprendžiama ieškant, kokia reikšmė tinka abiem pusėms.",
    "formal": "Lygtis yra lygybė, kurioje yra bent vienas nežinomasis.",
    "related": [
      "sprendinys",
      "sistema"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "nelygybe": {
    "title": "Nelygybė",
    "type": "concept",
    "definition": "Dviejų reiškinių palyginimas nelygybės ženklu.",
    "intuition": "Nelygybė aprašo reikšmių sritį, ne tik vieną tašką.",
    "formal": "Nelygybė naudoja ženklus <, >, <=, >=.",
    "related": [
      "lygtis",
      "sprendinys"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "sprendinys": {
    "title": "Sprendinys",
    "type": "concept",
    "definition": "Reikšmė, kuri tenkina lygtį ar nelygybę.",
    "intuition": "Sprendinys yra atsakymas, kurį galima patikrinti.",
    "formal": "Sprendinys yra nežinomojo reikšmė, dėl kurios teiginys tampa teisingas.",
    "related": [
      "lygtis",
      "nelygybe"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "sistema": {
    "title": "Lygčių sistema",
    "type": "concept",
    "definition": "Kelios lygtys su tais pačiais nežinomaisiais.",
    "intuition": "Sistema reiškia, kad keli apribojimai galioja kartu.",
    "formal": "Sistema turi tenkinti visas lygtis vienu metu.",
    "related": [
      "lygtis",
      "nelygybe",
      "tiesine-funkcija"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "formule": {
    "title": "Formulė",
    "type": "concept",
    "definition": "Trumpas ryšio užrašas tarp dydžių.",
    "intuition": "Formulė leidžia vienu sakiniu užrašyti daug žodžių.",
    "formal": "Formulė yra bendras ryšio tarp dydžių užrašas.",
    "related": [
      "reiskinys",
      "proporcija",
      "plotas"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "tiesine-funkcija": {
    "title": "Tiesinė funkcija",
    "type": "concept",
    "definition": "Funkcija, kurios grafikas yra tiesė.",
    "intuition": "Tai viena paprasčiausių priklausomybių tarp dydžių.",
    "formal": "Tiesinė funkcija užrašoma y = ax + b.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesinis-sarysis"
    ]
  },
  "distributyvusis-destymas": {
    "title": "Sklaidos dėsnis",
    "type": "concept",
    "definition": "Daugiklis dauginamas su kiekvienu dėmeniu skliaustuose.",
    "intuition": "Tai padeda išskleisti ir sutvarkyti reiškinius.",
    "formal": "a(b + c) = ab + ac.",
    "related": [
      "reiskinys",
      "koeficientas"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "tiesine-lygybe": {
    "title": "Tiesinė lygtis",
    "type": "concept",
    "definition": "Lygtis, kurioje nežinomasis yra tik pirmuoju laipsniu.",
    "intuition": "Šias lygtis sprendžiame nuosekliai atskirdami nežinomąjį.",
    "formal": "Tiesinė lygtis turi formą ax + b = 0.",
    "related": [
      "lygtis",
      "sprendinys"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "proporcingumas": {
    "title": "Proporcingumas",
    "type": "concept",
    "definition": "Ryšys, kai vienas dydis kinta pastoviu santykiu su kitu.",
    "intuition": "Proporcingumas yra mastelio ir procentų pagrindas.",
    "formal": "Jei a/b = c/d, dydžiai yra proporcingi.",
    "related": [
      "proporcija",
      "mastelis"
    ],
    "topics": [
      "desningumai-ir-lenteles-5",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "sklaidos-desnis": {
    "title": "Sklaidos dėsnis",
    "type": "formula",
    "definition": "Padeda išskleisti ir pertvarkyti reiškinius.",
    "intuition": "Padeda išskleisti ir pertvarkyti reiškinius.",
    "formal": "a(b+c)=ab+ac",
    "related": [
      "distributyvusis-destymas",
      "reiskinys"
    ],
    "topics": [
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "perkelia-be-zenklo-kaitos": {
    "title": "Perkelia narį nepakeitęs ženklo",
    "type": "mistake",
    "definition": "Perkeliant narį veiksmas keičiasi į priešingą.",
    "intuition": "Rašo x+5=12 -> x=12+5.",
    "formal": "Iš abiejų pusių atimk 5.",
    "related": [
      "lygtis"
    ],
    "topics": [
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "duomenys": {
    "title": "Duomenys",
    "type": "concept",
    "definition": "Stebėjimų arba matavimų rinkinys.",
    "intuition": "Duomenys yra žali faktai, iš kurių darome išvadas.",
    "formal": "Duomenys yra surinktos reikšmės arba stebėjimai.",
    "related": [
      "imtis",
      "vidurkis",
      "tikimybe"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "vidurkis": {
    "title": "Vidurkis",
    "type": "concept",
    "definition": "S?voka ?Vidurkis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "imtis": {
    "title": "Imtis",
    "type": "concept",
    "definition": "S?voka ?Imtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "imtys-ir-diagramos-7",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "daznis": {
    "title": "Daznis",
    "type": "concept",
    "definition": "S?voka ?Daznis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "imtys-ir-diagramos-7",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "mediana": {
    "title": "Mediana",
    "type": "concept",
    "definition": "S?voka ?Mediana? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "moda": {
    "title": "Moda",
    "type": "concept",
    "definition": "S?voka ?Moda? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "imtys-ir-diagramos-7",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "sklaida": {
    "title": "Sklaida",
    "type": "concept",
    "definition": "S?voka ?Sklaida? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "funkciju-ribos-ir-tolydumas",
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "tikimybe": {
    "title": "Tikimybė",
    "type": "concept",
    "definition": "Įvykio galimumo skaitinė charakteristika.",
    "intuition": "Skaičius nuo 0 (neįmanoma) iki 1 (tikra).",
    "formal": "Funkcija P, priskirianti įvykiui skaičių iš [0, 1] pagal Kolmogorovo aksiomas.",
    "related": [
      "nepriklausomi-ivykiai",
      "salygine-tikimybe"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenys-ir-tikimybe",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "ivyki": {
    "title": "Įvykis",
    "type": "concept",
    "definition": "Rezultatas arba rezultatu aibė tikimybių uždavinyje.",
    "intuition": "Įvykis yra tai, ko laukiame arba ko bijome metant kauliuką ar traukiant kortą.",
    "formal": "Įvykis yra baigtinių baigčių poaibis.",
    "related": [
      "tikimybe",
      "kombinatorika"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenys-ir-tikimybe",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "kombinatorika": {
    "title": "Kombinatorika",
    "type": "concept",
    "definition": "Matematikos šaka, tirianti junginių sudarymo būdus.",
    "intuition": "Mokslas apie tai, kiek yra galimybių ką nors pasirinkti ar sudėlioti.",
    "formal": "Diskretinės matematikos dalis, tirianti baigtinių aibių elementų junginių savybes.",
    "related": [
      "keliniai",
      "gretiniai",
      "deriniai"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenys-ir-tikimybe",
      "kombinatorika-ir-binomas",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "koreliacija": {
    "title": "Koreliacija",
    "type": "concept",
    "definition": "S?voka ?Koreliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenys-ir-tikimybe",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "vidurkio-formule": {
    "title": "Vidurkio formulė",
    "type": "formula",
    "definition": "Vidurkis yra suma padalinta iš kiekio.",
    "intuition": "Vidurkis yra suma padalinta iš kiekio.",
    "formal": "\\bar{x}=\\frac{x_1+\\cdots+x_n}{n}",
    "related": [
      "vidurkis",
      "duomenys"
    ],
    "topics": [
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "vidurkis-be-suma": {
    "title": "Vidurkį skaičiuoja be sumos",
    "type": "mistake",
    "definition": "Vidurkis visada prasideda nuo sumos.",
    "intuition": "Daliną iš skaičių kiekio, bet nesudeda.",
    "formal": "Pirmiausia sudėk visus duomenis.",
    "related": [
      "vidurkis"
    ],
    "topics": [
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "procentas": {
    "title": "Procentas",
    "type": "concept",
    "definition": "Šimtoji dalis.",
    "intuition": "Procentai patogiai aprašo dalį nuo visumos.",
    "formal": "x procentų yra x/100 visumos.",
    "related": [
      "trupmena",
      "santykis"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-8",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
    ]
  },
  "skaicius": {
    "title": "Skaičius",
    "type": "concept",
    "definition": "Skaičius aprašo kiekybę ar tvarką sudėtiniai procentai ir mišiniai uždaviniuose.",
    "intuition": "Skaičius yra pagrindinis kiekybės užrašymo būdas.",
    "formal": "Skaičius yra matematinis objektas, kuriuo žymima kiekio arba padėties reikšmė.",
    "related": [
      "naturalieji-skaiciai",
      "sveikieji-skaiciai",
      "racionalieji-skaiciai"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "naturalieji-skaiciai": {
    "title": "Natūralieji skaičiai",
    "type": "concept",
    "definition": "Skaičiai, kuriais skaičiuojame objektus ir tvarką.",
    "intuition": "Tai pirmas sluoksnis sudėtiniai procentai ir mišiniai temose.",
    "formal": "Natūralieji skaičiai yra 0, 1, 2, 3, ...",
    "related": [
      "sveikieji-skaiciai",
      "kartotiniai",
      "dalikliai"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "sveikieji-skaiciai": {
    "title": "Sveikieji skaičiai",
    "type": "concept",
    "definition": "Natūralieji skaičiai, jų priešingieji ir nulis.",
    "intuition": "Tai leidžia skaičiuoti ir į minusinę pusę.",
    "formal": "Sveikųjų skaičių aibė žymima Z.",
    "related": [
      "naturalieji-skaiciai",
      "racionalieji-skaiciai"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "racionalieji-skaiciai": {
    "title": "Racionalieji skaičiai",
    "type": "concept",
    "definition": "Skaičiai, užrašomi trupmena p/q.",
    "intuition": "Tai visi skaičiai, kuriuos galima tiksliai arba periodiškai užrašyti trupmena.",
    "formal": "Racionalusis skaičius yra skaičius, kurį galima užrašyti p/q, kai q != 0.",
    "related": [
      "trupmena",
      "desimtainiai-skaiciai"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "trupmena": {
    "title": "Trupmena",
    "type": "concept",
    "definition": "Vienos visumos dalies užrašas.",
    "intuition": "Trupmena padeda kalbėti apie dalis, santykius ir dalijimą.",
    "formal": "Trupmena yra p/q, kur p yra skaitiklis, q yra vardiklis, q != 0.",
    "related": [
      "racionalieji-skaiciai",
      "procentas"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
    ]
  },
  "santykis": {
    "title": "Santykis",
    "type": "concept",
    "definition": "Dviejų dydžių palyginimas.",
    "intuition": "Santykis sako, kiek vieno dydžio tenka kitam.",
    "formal": "Santykis a:b arba a/b rodo dviejų dydžių palyginimą.",
    "related": [
      "proporcija",
      "procentas"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
    ]
  },
  "proporcija": {
    "title": "Proporcija",
    "type": "concept",
    "definition": "Dviejų santykių lygybė.",
    "intuition": "Kai mastelis išlieka tas pats, santykiai tampa proporcingi.",
    "formal": "a:b = c:d reiškia a/d = b/c ir kartu a·d = b·c.",
    "related": [
      "santykis",
      "mastelis"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "tiesioginis-proporcingumas",
      "trupmenos-procentai-santykiai"
    ]
  },
  "apvalinimas": {
    "title": "Apvalinimas",
    "type": "concept",
    "definition": "Skaičiaus pakeitimas artimu patogesniu skaičiumi.",
    "intuition": "Apvalinimas padeda greitai įvertinti rezultatą.",
    "formal": "Apvalinant laikomasi pasirinkto tikslumo taisyklės.",
    "related": [
      "skaicius",
      "desimtainiai-skaiciai"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-8",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "desimtainiai-skaiciai": {
    "title": "Dešimtainiai skaičiai",
    "type": "concept",
    "definition": "Skaičiai su kableliu.",
    "intuition": "Dešimtainiai skaičiai patogūs matuojant ir skaičiuojant pinigus.",
    "formal": "Dešimtainis skaičius užrašomas naudojant dešimtąsias, šimtąsias ir t. t.",
    "related": [
      "racionalieji-skaiciai",
      "apvalinimas"
    ],
    "topics": [
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "procento-formule": {
    "title": "Procento formulė",
    "type": "formula",
    "definition": "Padeda iš procentų pereiti į trupmeną.",
    "intuition": "Padeda iš procentų pereiti į trupmeną.",
    "formal": "x\\% = \\frac{x}{100}",
    "related": [
      "procentas",
      "trupmena"
    ],
    "topics": [
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"
    ]
  },
  "painioja-procenta-su-daiktu": {
    "title": "Painioja procentą su kiekiu",
    "type": "mistake",
    "definition": "Procentas yra dalis nuo šimto, todėl reikia dalinti iš 100.",
    "intuition": "Tiesiog rašo 15 vietoje 15 %.",
    "formal": "15 % = 0.15 arba 15/100.",
    "related": [
      "procentas"
    ],
    "topics": [
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"
    ]
  },
  "kampas": {
    "title": "Kampas",
    "type": "concept",
    "definition": "Dviejų spindulių arba tiesių susikirtimo dydis.",
    "intuition": "Kampai aprašo krypties pokytį.",
    "formal": "Kampas matuojamas laipsniais arba radianais.",
    "related": [
      "trikampis",
      "transformacija"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "trikampis": {
    "title": "Trikampis",
    "type": "concept",
    "definition": "Figūra iš trijų kraštinių ir trijų kampų.",
    "intuition": "Trikampis yra daugelio geometrijos teoremų pradžia.",
    "formal": "Trikampis yra daugiakampis su trimis viršūnėmis.",
    "related": [
      "kampas",
      "pitagoro-teorema",
      "panasus-trikampiai"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "keturkampis": {
    "title": "Keturkampis",
    "type": "concept",
    "definition": "Figūra iš keturių kraštinių.",
    "intuition": "Keturkampių savybės padeda skaičiuoti plotus ir kampus.",
    "formal": "Keturkampis turi keturias kraštines ir keturis kampus.",
    "related": [
      "trikampis",
      "lygiagretainis"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "perimetras": {
    "title": "Perimetras",
    "type": "concept",
    "definition": "Kraštinių ilgių suma.",
    "intuition": "Perimetras atsako, kiek reikia tvorelės ar krašto juostos.",
    "formal": "Perimetras yra figūros kraštinių ilgių suma.",
    "related": [
      "plotas",
      "trikampis"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "plotas": {
    "title": "Plotas",
    "type": "concept",
    "definition": "Plokščios figūros paviršiaus dydis.",
    "intuition": "Plotas sako, kiek vietos figūra užima.",
    "formal": "Plotas matuojamas kvadratiniais vienetais.",
    "related": [
      "perimetras",
      "apskritimas"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "apskritimas": {
    "title": "Apskritimas",
    "type": "concept",
    "definition": "Taškų aibė, nutolusi nuo centro vienodu atstumu.",
    "intuition": "Apskritimas yra rato kraštas.",
    "formal": "Apskritimas sudarytas iš taškų, kurių atstumas iki centro yra pastovus.",
    "related": [
      "skritulys",
      "kampas"
    ],
    "topics": [
      "apskritimas-ir-skritulys",
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "skritulys": {
    "title": "Skritulys",
    "type": "concept",
    "definition": "Apskritimo vidus kartu su kraštu.",
    "intuition": "Skritulys yra visas apskritimo užimamas plotas.",
    "formal": "Skritulys yra plokštumos dalis, apribota apskritimu.",
    "related": [
      "apskritimas",
      "plotas"
    ],
    "topics": [
      "apskritimas-ir-skritulys",
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "simetrija": {
    "title": "Simetrija",
    "type": "concept",
    "definition": "Figūros savybė sutapti su savimi po pokyčio.",
    "intuition": "Simetrija padeda atpažinti dėsningumus.",
    "formal": "Figūra yra simetriška, jei egzistuoja ją į save paverčianti transformacija.",
    "related": [
      "transformacija",
      "apskritimas"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "koordinates": {
    "title": "Koordinatės",
    "type": "concept",
    "definition": "Skaičiai, nusakantys taško padėtį plokštumoje.",
    "intuition": "Koordinatės leidžia geometriją perkelti į skaičius.",
    "formal": "Taško padėtis aprašoma pora (x; y).",
    "related": [
      "transformacija",
      "vektorius"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys",
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "staciakampio-plotas": {
    "title": "Stačiakampio plotas",
    "type": "formula",
    "definition": "Sudauginkite dvi gretimas stačiakampio kraštines.",
    "intuition": "Sudauginkite dvi gretimas stačiakampio kraštines.",
    "formal": "S = a \\cdot b",
    "related": [
      "plotas"
    ],
    "topics": [
      "geometrijos-ir-matavimu-pradmenys"
    ]
  },
  "perimetra-supainioja-su-ploto-formule": {
    "title": "Perimetrą supainioja su plotu",
    "type": "mistake",
    "definition": "Perimetras yra kraštinių suma, plotas - paviršiaus dydis.",
    "intuition": "Stačiakampiui parašo a·b vietoje 2(a+b).",
    "formal": "Atskirk, ar reikia kraštinių sumos, ar užimamo ploto.",
    "related": [
      "perimetras",
      "plotas"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "greitis": {
    "title": "Greitis",
    "type": "concept",
    "definition": "Kelias nuveitas per laiko vienetą.",
    "intuition": "Tai parodo, kaip greitai kūnas juda. Jei eini greitai, per minutę nueini daug metrų.",
    "formal": "Greitis yra fizinis dydis, apibūdinantis kūno padėties kitimo spartą.",
    "related": [
      "kelias",
      "laikas"
    ],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "laikas": {
    "title": "Laikas",
    "type": "concept",
    "definition": "S?voka ?Laikas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "kelias": {
    "title": "Kelias",
    "type": "concept",
    "definition": "S?voka ?Kelias? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "vidutinis-greitis": {
    "title": "Vidutinis Greitis",
    "type": "concept",
    "definition": "S?voka ?Vidutinis Greitis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "judejimo-formule": {
    "title": "Kelio formulė",
    "type": "formula",
    "definition": "Norėdami sužinoti atstumą, dauginame greitį iš sugaišto laiko.",
    "intuition": "Norėdami sužinoti atstumą, dauginame greitį iš sugaišto laiko.",
    "formal": "s = v \\cdot t",
    "related": [
      "greitis",
      "laikas"
    ],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "vienetu-nesuderinimas": {
    "title": "Km ir Minutės",
    "type": "mistake",
    "definition": "Mokinys tiesiog sudaugina skaičius nepavertęs vienetų.",
    "intuition": "s = 60 km/h * 15 min = 900 km",
    "formal": "Paverskite 15 min į 0,25 h arba 1/4 h.",
    "related": [
      "greitis"
    ],
    "topics": [
      "judejimo-uzdaviniai-ir-matavimo-vienetai"
    ]
  },
  "dalikliai": {
    "title": "Dalikliai",
    "type": "concept",
    "definition": "Skaičiai, kuriais duotasis skaičius dalijasi be liekanos.",
    "intuition": "Dalikliai yra priešinga kartotinių pusė.",
    "formal": "Skaičius d yra skaičiaus n daliklis, jei n/d yra sveikasis skaičius.",
    "related": [
      "kartotiniai",
      "pirminis-skaicius"
    ],
    "topics": [
      "finansiniai-skaiciavimai-6",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "kartotiniai": {
    "title": "Kartotiniai",
    "type": "concept",
    "definition": "Skaičiai, gaunami dauginant iš natūraliojo skaičiaus.",
    "intuition": "Kartotiniai padeda spręsti ritmiškus ir dalijimo uždavinius.",
    "formal": "Skaičiaus n kartotiniai yra n, 2n, 3n, ...",
    "related": [
      "dalikliai",
      "pirminis-skaicius"
    ],
    "topics": [
      "finansiniai-skaiciavimai-6",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "dalumo-pozymiai": {
    "title": "Dalumo požymiai",
    "type": "concept",
    "definition": "Taisyklės, leidžiančios nustatyti dalumą neatliekant dalybos.",
    "intuition": "Tai tarsi skaičių „rentgenas“, leidžiantis matyti jų vidines savybes.",
    "formal": "Loginių sąlygų rinkinys skaičiaus skaitmenims.",
    "related": [
      "dalikliai"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "pirminis-skaicius": {
    "title": "Pirminis skaičius",
    "type": "concept",
    "definition": "Natūralusis skaičius, turintis tik du daliklius.",
    "intuition": "Pirminiai skaičiai yra skaidymo į sandaugą pagrindas.",
    "formal": "Pirminis skaičius turi tik 1 ir patį save kaip daliklius.",
    "related": [
      "dalikliai",
      "skaidymas-i-daugiklius"
    ],
    "topics": [
      "finansiniai-skaiciavimai-6",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "olimpiada-07-skaiciu-teorija",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai"
    ]
  },
  "sudetinis-skaicius": {
    "title": "Sudėtinis skaičius",
    "type": "concept",
    "definition": "Skaičius, turintis daugiau nei du daliklius.",
    "intuition": "Skaičius, sudarytas iš kelių pirminių skaičių sandaugos.",
    "formal": "Natūralusis skaičius $n > 1$, kuris nėra pirminis.",
    "related": [
      "pirminis-skaicius"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "bdk": {
    "title": "BDK (Didžiausias bendras daliklis)",
    "type": "concept",
    "definition": "Didžiausias skaičius, dalijantis duotus skaičius.",
    "intuition": "Didžiausia įmanoma bendra dalis, į kurią galime padalinti du skirtingus kiekius.",
    "formal": "$\\text{BDK}(a, b) = \\max \\{d \\in \\mathbb{N} : d|a \\text{ ir } d|b\\}$.",
    "related": [
      "dalikliai",
      "mbk"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "mbk": {
    "title": "MBK (Mažiausias bendras kartotinis)",
    "type": "concept",
    "definition": "Mažiausias skaičius, kuris dalijasi iš duotų skaičių.",
    "intuition": "Pirmas momentas, kada du skirtingi ritmai (pvz., autobusų tvarkaraščiai) susitinka.",
    "formal": "$\\text{MBK}(a, b) = \\min \\{m \\in \\mathbb{N} : a|m \\text{ ir } b|m\\}$.",
    "related": [
      "kartotiniai",
      "bdk"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "skaidymas-pirminiais-daugikliais": {
    "title": "Skaidymas Pirminiais Daugikliais",
    "type": "concept",
    "definition": "S?voka ?Skaidymas Pirminiais Daugikliais? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "dalikliu-ir-kartotiniu-painiojimas": {
    "title": "Daliklių ir kartotinių painiojimas",
    "type": "mistake",
    "definition": "Mokiniai supainioja sąvokų reikšmes, nes abi susijusios su daugyba/dalyba.",
    "intuition": "Ieškant skaičiaus 6 daliklių, rašoma 12, 18, 24.",
    "formal": "Dalikliai skaičių skaido į dalis (jie mažesni), kartotiniai skaičių didina (jie didesni).",
    "related": [
      "dalikliai",
      "kartotiniai"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "vieneto-priskyrimas-pirminiams": {
    "title": "Vieneto priskyrimas pirminiams skaičiams",
    "type": "mistake",
    "definition": "Mokinys galvoja, kad 1 dalijasi iš 1 ir savęs (kas yra tas pats), todėl atitinka taisyklę.",
    "intuition": "Skaičius 1 laikomas pirminiu skaičiumi.",
    "formal": "Pirminis skaičius PRIVALO turėti lygiai du skirtingus daliklius. 1 turi tik vieną.",
    "related": [
      "pirminis-skaicius"
    ],
    "topics": [
      "naturalieji-skaiciai-dalikliai-kartotiniai"
    ]
  },
  "kintamasis-kaip-deze": {
    "title": "Kintamasis kaip nežinoma vertė",
    "type": "concept",
    "definition": "Simbolis (dažniausiai raidė), žymintis nežinomą skaičių, kurį siekiame rasti.",
    "intuition": "Tai tarsi tuščia vieta sakinyje, kurią turime užpildyti teisingu skaičiumi, kad sakinys taptų teisingas.",
    "formal": "Kintamasis yra simbolis, nurodantis aibės elementą, kurio reikšmė uždavinyje nėra fiksuota arba dar nežinoma.",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "atbulines-eigos-metodas": {
    "title": "Atbulinės eigos metodas",
    "type": "concept",
    "definition": "Problemų sprendimo strategija, pradedant nuo galutinio rezultato ir nuosekliai vykdant priešingus veiksmus.",
    "intuition": "Tai tarsi filmo atsukimas atgal: jei pabaigoje pamatėte išlietą vandenį, tai atsukę atgal pamatysite, kaip jis grįžta į stiklinę.",
    "formal": "Algoritmas, skirtas rasti pradinę būseną $x_0$, kai žinoma galutinė būsena $x_n$ ir transformacijų seka $f_i$, taikant atvirkštines funkcijas $f_i^{-1}$.",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "gauso-suma": {
    "title": "Gauso sumos principas",
    "type": "concept",
    "definition": "Metodas greitai apskaičiuoti aritmetinės sekos narių sumą, grupuojant juos poromis iš galų.",
    "intuition": "Užuot skaičiavus 1+2+3..., pastebime, kad 1+10, 2+9, 3+8 visada duoda tą patį rezultatą.",
    "formal": "Suma pirmųjų $n$ natūraliųjų skaičių išreiškiama formule $S = n(n+1)/2$.",
    "related": [
      "aritmetine-progresija-pradmenys"
    ],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "darbo-nasumas-5": {
    "title": "Darbo našumas",
    "type": "concept",
    "definition": "Darbo kiekis, atliekamas per vieną laiko vienetą.",
    "intuition": "Tai parodo, kaip greitai kažkas dirba. Jei per valandą nudažai 2 metrus tvoros, tavo našumas yra 2m/h.",
    "formal": "Našumas $P$ yra lygus viso darbo $W$ ir sugaišto laiko $t$ santykiui: $P = W/t$.",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "aritmetine-progresija-pradmenys": {
    "title": "Aritmetine Progresija Pradmenys",
    "type": "concept",
    "definition": "S?voka ?Aritmetine Progresija Pradmenys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "santykinis-greitis": {
    "title": "Santykinis Greitis",
    "type": "concept",
    "definition": "S?voka ?Santykinis Greitis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "f-gauss-sum": {
    "title": "Aritmetinės sekos sumos formulė",
    "type": "formula",
    "definition": "Čia $a_1$ - pirmas narys, $a_n$ - paskutinis narys, $n$ - narių kiekis.",
    "intuition": "Čia $a_1$ - pirmas narys, $a_n$ - paskutinis narys, $n$ - narių kiekis.",
    "formal": "S = \\frac{(a_1 + a_n) \\times n}{2}",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "f-relative-speed": {
    "title": "Santykinis greitis",
    "type": "formula",
    "definition": "Naudojama artėjimo (+) arba vijimosi (-) greičiui skaičiuoti.",
    "intuition": "Naudojama artėjimo (+) arba vijimosi (-) greičiui skaičiuoti.",
    "formal": "v_{rel} = v_1 \\pm v_2",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "m-amziaus-skirtumas": {
    "title": "Amžiaus skirtumo klaida",
    "type": "mistake",
    "definition": "Amžiaus skirtumo klaida",
    "intuition": "",
    "formal": "Visada prie abiejų pusių pridėkite tiek pat metų: jei tėvui $+5$, tai ir sūnui $+5$.",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "m-veiksmu-tvarka-atbulai": {
    "title": "Neteisinga atbulinės eigos tvarka",
    "type": "mistake",
    "definition": "Neteisinga atbulinės eigos tvarka",
    "intuition": "",
    "formal": "Surašykite veiksmus stulpeliu iš viršaus į apačią, tada braukite juos iš apačios į viršų, keisdami ženklus.",
    "related": [],
    "topics": [
      "olimpiada-05-algebra"
    ]
  },
  "olimpiada-05-concept-logic": {
    "title": "Olimpiadinė logika ir dedukcija",
    "type": "concept",
    "definition": "Gebėjimas nuosekliai ir griežtai išvesti teisingas išvadas iš pateiktų prielaidų, eliminuojant prieštaravimus.",
    "intuition": "Mąstymas žingsnis po žingsnio, kai atmetame neįmanomus variantus ir randame vienintelį teisingą kelią.",
    "formal": "Teiginių logikos dėsnių taikymas, siekiant nustatyti pradinių sąlygų suderinamumą ir gauti logiškai būtinus sekmenis.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija",
      "olimpiada-05-kombinatorika",
      "olimpiada-05-skaiciu-teorija",
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "olimpiada-05-concept-method": {
    "title": "Matematinio įrodymo samprata",
    "type": "concept",
    "definition": "Loginis argumentų grandinės sudarymas, neabejotinai patvirtinantis teiginio teisingumą visiems nagrinėjamiems atvejams.",
    "intuition": "Tai nėra tiesiog kelių pavyzdžių patikrinimas. Tai paaiškinimas, KODĖL tai galioja visada be jokių išimčių.",
    "formal": "Dedukcinis samprotavimas, prasidedantis aksiomomis arba žinomais faktais ir per baigtinį žingsnių skaičių pasiekiantis teoremą.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija",
      "olimpiada-05-kombinatorika",
      "olimpiada-05-skaiciu-teorija",
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "geo-strat-skaidymas": {
    "title": "Skaidymo strategija",
    "type": "method",
    "definition": "Sudėtingos figūros padalinimas į paprastesnes dalis (stačiakampius, trikampius), kurių savybes lengviau apskaičiuoti.",
    "intuition": "Jei negali įveikti visos tvirtovės iškart, paimk ją po vieną kambarį.",
    "formal": "Figūros ploto adityvumo savybė, teigianti, kad nesikertančių figūrų sąjungos plotas lygus jų plotų sumai.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "geo-strat-papildymas": {
    "title": "Papildymo strategija",
    "type": "method",
    "definition": "Figūros papildymas iki didesnės, taisyklingos formos (pvz., stačiakampio), o tada nereikalingų dalių atėmimas.",
    "intuition": "Kartais lengviau nupiešti rėmą ir iškirpti tai, ko nereikia, nei lipdyti iš mažų gabalėlių.",
    "formal": "Ploto skaičiavimas naudojant skirtumo operaciją: $S = S_{\\text{rėmo}} - S_{\\text{tuštumos}}$.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "geo-strat-zsymetrija": {
    "title": "Geo Strat Zsymetrija",
    "type": "concept",
    "definition": "S?voka ?Geo Strat Zsymetrija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "geo-strat-skaiciavimas": {
    "title": "Geo Strat Skaiciavimas",
    "type": "concept",
    "definition": "S?voka ?Geo Strat Skaiciavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "formula-clock-angle": {
    "title": "Laikrodžio rodyklių greičiai",
    "type": "formula",
    "definition": "Minutinė rodyklė per minutę nueina 6 laipsnius, o valandinė - tik pusę laipsnio.",
    "intuition": "Minutinė rodyklė per minutę nueina 6 laipsnius, o valandinė - tik pusę laipsnio.",
    "formal": "v_{\\text{min}} = 6^\\circ/\\text{min}, \\quad v_{\\text{val}} = 0,5^\\circ/\\text{min}",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "formula-n-gon-diag": {
    "title": "Taisyklingojo daugiakampio simetrija",
    "type": "formula",
    "definition": "Taisyklingasis n-kampis turi tiksliai n simetrijos ašių.",
    "intuition": "Taisyklingasis n-kampis turi tiksliai n simetrijos ašių.",
    "formal": "N_{\\text{ašys}} = n",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "mistake-perimeter-add": {
    "title": "Plotų ir perimetrų painiojimas skaidant",
    "type": "mistake",
    "definition": "Plotų ir perimetrų painiojimas skaidant",
    "intuition": "",
    "formal": "Sudedant figūras, perimetras sumažėja dvigubu suliejimo linijos ilgiu, nes tos kraštinės tampa vidinėmis.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "mistake-clock-static": {
    "title": "Statiška valandinė rodyklė",
    "type": "mistake",
    "definition": "Statiška valandinė rodyklė",
    "intuition": "",
    "formal": "Valandinė rodyklė visada juda. Ties 3:30 ji bus pusiaukelėje tarp 3 ir 4.",
    "related": [],
    "topics": [
      "olimpiada-05-geometrija"
    ]
  },
  "concept-dirichlet-principle": {
    "title": "Dirichlė (balandžių narvelių) principas",
    "type": "concept",
    "definition": "Principas teigiantis, kad jei elementų skaičius viršija vietų (dėžučių) skaičių, bent vienoje vietoje bus daugiau nei vienas elementas.",
    "intuition": "Jei turite 3 kojines, o kojų tik dvi, tai dvi kojinės tikrai bus nuo tos pačios kojos (jei spalvos tik dvi).",
    "formal": "Funkcija iš aibės A į aibę B, kur |A| > |B|, negali būti injektyvi.",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "f-sum-rule": {
    "title": "Sudėties taisyklė",
    "type": "formula",
    "definition": "Kai renkamės vieną objektą ARBA iš aibės A (n elementų), ARBA iš aibės B (m elementų), o aibės neturi bendrų elementų.",
    "intuition": "Kai renkamės vieną objektą ARBA iš aibės A (n elementų), ARBA iš aibės B (m elementų), o aibės neturi bendrų elementų.",
    "formal": "N = n + m",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "f-product-rule": {
    "title": "Daugybos taisyklė",
    "type": "formula",
    "definition": "Kai renkamės objektų porą: pirmą iš n variantų, o antrą iš m variantų.",
    "intuition": "Kai renkamės objektų porą: pirmą iš n variantų, o antrą iš m variantų.",
    "formal": "N = n \\times m",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "f-handshake": {
    "title": "Rankų paspaudimo formulė",
    "type": "formula",
    "definition": "Būdų skaičius pasirinkti porą iš n elementų, kai tvarka nesvarbi (kiekvienas su kiekvienu).",
    "intuition": "Būdų skaičius pasirinkti porą iš n elementų, kai tvarka nesvarbi (kiekvienas su kiekvienu).",
    "formal": "N = \\frac{n(n-1)}{2}",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "m-double-counting": {
    "title": "Dvigubas skaičiavimas",
    "type": "mistake",
    "definition": "Dvigubas skaičiavimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "m-zero-leading": {
    "title": "Nulis skaičiaus pradžioje",
    "type": "mistake",
    "definition": "Nulis skaičiaus pradžioje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "m-missing-system": {
    "title": "Nesistemingas sąrašas",
    "type": "mistake",
    "definition": "Nesistemingas sąrašas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-kombinatorika"
    ]
  },
  "concept-parity": {
    "title": "Paritetas (lyginumas)",
    "type": "concept",
    "definition": "Savybė, nusakanti ar skaičius dalijasi iš 2 be liekanos.",
    "intuition": "Objektų skirstymas į poras: jei lieka vienas be poros - skaičius nelyginis.",
    "formal": "Sveikojo skaičiaus n priklausymas aibei {2k | k ∈ Z} arba {2k+1 | k ∈ Z}.",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "concept-prime-numbers": {
    "title": "Pirminiai skaičiai",
    "type": "concept",
    "definition": "Natūralieji skaičiai, didesni už 1, turintys lygiai du skirtingus daliklius.",
    "intuition": "Skaičiai, kurių negalima „sugriauti“ į mažesnius sveikus daugiklius (išskyrus 1).",
    "formal": "p ∈ N yra pirminis, jei jo daliklių aibė D(p) = {1, p}.",
    "related": [
      "concept-composite-numbers"
    ],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "concept-gcd-lcm": {
    "title": "DBD ir MBK",
    "type": "concept",
    "definition": "Didžiausias bendras daliklis ir mažiausias bendras kartotinis.",
    "intuition": "DBD - didžiausias skaičius, kuris dalija abu skaičius. MBK - mažiausias skaičius, kuris dalijasi iš abiejų.",
    "formal": "DBD(a,b) = max{d ∈ Z : d|a ir d|b}. MBK(a,b) = min{m ∈ N : a|m ir b|m}.",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "f-divisibility-3-9": {
    "title": "3 ir 9 dalumo požymis",
    "type": "formula",
    "definition": "Skaičius dalijasi iš 3 (arba 9) tada ir tik tada, kai jo skaitmenų suma dalijasi iš 3 (arba 9).",
    "intuition": "Skaičius dalijasi iš 3 (arba 9) tada ir tik tada, kai jo skaitmenų suma dalijasi iš 3 (arba 9).",
    "formal": "S(n) \\text{ dalus iš } 3 \\text{ (arba } 9)",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "f-number-decomposition": {
    "title": "Skiltinis užrašas",
    "type": "formula",
    "definition": "Skaičiaus išraiška per jo skaitmenis ir pozicines vertes.",
    "intuition": "Skaičiaus išraiška per jo skaitmenis ir pozicines vertes.",
    "formal": "\\overline{abcd} = 1000a + 100b + 10c + d",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "f-euclidean-division": {
    "title": "Dalyba su liekana",
    "type": "formula",
    "definition": "Kiekvienas skaičius a gali būti užrašytas per daliklį b, dalmenį q ir liekaną r.",
    "intuition": "Kiekvienas skaičius a gali būti užrašytas per daliklį b, dalmenį q ir liekaną r.",
    "formal": "a = bq + r, \\quad 0 \\le r < b",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "m-one-is-prime": {
    "title": "1 laikymas pirminiu",
    "type": "mistake",
    "definition": "1 laikymas pirminiu",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "m-sum-parity": {
    "title": "Nelyginių skaičių sumos lyginumas",
    "type": "mistake",
    "definition": "Nelyginių skaičių sumos lyginumas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "m-divisibility-4": {
    "title": "4 dalumo painiojimas su 2",
    "type": "mistake",
    "definition": "4 dalumo painiojimas su 2",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-skaiciu-teorija"
    ]
  },
  "olimpiada-05-concept-parity": {
    "title": "Lyginumas (Paritetas)",
    "type": "concept",
    "definition": "Savybė, rodanti, ar skaičius dalijasi iš 2 be liekanos.",
    "intuition": "Skaičius yra lyginis, jei jį galima padalinti į dvi lygias dalis.",
    "formal": "",
    "related": [
      "olimpiada-05-concept-invariant"
    ],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "olimpiada-05-concept-invariant": {
    "title": "Invariantas",
    "type": "concept",
    "definition": "Dydis arba savybė, kuri nekinta atliekant tam tikras operacijas.",
    "intuition": "Tai, kas išlieka „taip pat“, net kai viskas aplink keičiasi.",
    "formal": "",
    "related": [
      "olimpiada-05-concept-parity"
    ],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "olimpiada-05-concept-dirichlet": {
    "title": "Dirichlė principas",
    "type": "concept",
    "definition": "Principas, teigiantis, kad paskirsčius daugiau objektų nei yra vietų, bent viena vieta gaus bent du objektus.",
    "intuition": "Jei turite 5 vaikus ir 4 kėdes, vienas vaikas neturės kur atsisėsti arba ant vienos kėdės sėdės du.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "olimpiada-05-concept-coloring": {
    "title": "Spalvinimo metodas",
    "type": "concept",
    "definition": "Lentelės ar kitų objektų suskirstymas spalvomis, siekiant rasti nekintančias savybes.",
    "intuition": "Šachmatų lentos spalvinimas padeda suprasti, kaip juda figūros.",
    "formal": "",
    "related": [
      "olimpiada-05-concept-invariant"
    ],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "olimpiada-05-concept-backwards": {
    "title": "Ėjimas nuo galo",
    "type": "concept",
    "definition": "Strategija, kai sprendimas pradedamas nuo žinomo galutinio rezultato.",
    "intuition": "Kaip siūlą vynioti atgal, kad rastum pradinį galą.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "f-sum-1-n": {
    "title": "Pirmųjų n skaičių suma",
    "type": "formula",
    "definition": "Labai naudinga skaičiuojant pradinį paritetą uždaviniuose apie skaičių trynimą.",
    "intuition": "Labai naudinga skaičiuojant pradinį paritetą uždaviniuose apie skaičių trynimą.",
    "formal": "S = \\frac{n(n+1)}{2}",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "trap-checking-examples-only": {
    "title": "Tikrinami tik keli pavyzdžiai",
    "type": "mistake",
    "definition": "Tikrinami tik keli pavyzdžiai",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "trap-guessing-patterns": {
    "title": "Spėjimas pagal dėsningumą",
    "type": "mistake",
    "definition": "Spėjimas pagal dėsningumą",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "m-backwards-order": {
    "title": "Neteisinga tvarka einant nuo galo",
    "type": "mistake",
    "definition": "Neteisinga tvarka einant nuo galo",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "romeniskas-skaitmuo": {
    "title": "Romėniškasis skaitmuo",
    "type": "concept",
    "definition": "Simbolis, naudojamas romėniškoje skaičiavimo sistemoje.",
    "intuition": "Tai raidė, kurią romėnai naudojo vietoj mūsų įprastų skaitmenų.",
    "formal": "Vienas iš septynių lotyniškų simbolių (I, V, X, L, C, D, M), sudarančių romėnišką skaičių sistemą.",
    "related": [
      "sudeties-taisykle-romeniskiems",
      "atimties-taisykle-romeniskiems"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "sudeties-taisykle-romeniskiems": {
    "title": "Sudėties taisyklė",
    "type": "method",
    "definition": "Mažesnio skaičiaus rašymas po didesnio reiškia sudėtį.",
    "intuition": "Jei eini nuo didesnio prie mažesnio, viską tiesiog sudedi.",
    "formal": "Jei skaitmuo su mažesne arba lygia reikšme stovi dešinėje nuo didesnės reikšmės skaitmens, šios reikšmės sumuojamos.",
    "related": [
      "atimties-taisykle-romeniskiems"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "atimties-taisykle-romeniskiems": {
    "title": "Atimties taisyklė",
    "type": "method",
    "definition": "Mažesnio skaičiaus rašymas prieš didesnį reiškia atimtį.",
    "intuition": "Jei matai mažą skaičių prieš didelį, tai yra 'viena iki' arba 'dešimt iki'.",
    "formal": "Jei mažesnis skaitmuo stovi kairėje nuo didesnio, jis atimamas iš dešinėje esančio skaitmens.",
    "related": [
      "sudeties-taisykle-romeniskiems"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "kartojimo-taisykle": {
    "title": "Kartojimo taisyklė",
    "type": "method",
    "definition": "Draudimas rašyti daugiau nei 3 vienodus skaitmenis iš eilės.",
    "intuition": "Negalima rašyti IIII, reikia rašyti IV.",
    "formal": "Simboliai I, X, C, M gali būti kartojami iki trijų kartų iš eilės. Simboliai V, L, D niekada nekartojami.",
    "related": [],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "nulis-romeniskuose-skaiciuose": {
    "title": "Nulis romėniškuose skaičiuose",
    "type": "concept",
    "definition": "Paaiškinimas, kodėl romėniškoje sistemoje nėra nulio.",
    "intuition": "Romėnai skaičiavo tik tai, ką mato, o 'nieko' neturėjo savo simbolio.",
    "formal": "Senovės Romos skaičiavimo sistema buvo adityvi ir neturėjo pozicinio nulio koncepcijos.",
    "related": [
      "skaiciu-konvertavimas"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "simboliu-reiksmes": {
    "title": "Simboliu Reiksmes",
    "type": "concept",
    "definition": "S?voka ?Simboliu Reiksmes? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "dideli-skaiciai-romeniski": {
    "title": "Dideli Skaiciai Romeniski",
    "type": "concept",
    "definition": "S?voka ?Dideli Skaiciai Romeniski? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "skaiciu-konvertavimas": {
    "title": "Skaiciu Konvertavimas",
    "type": "concept",
    "definition": "S?voka ?Skaiciu Konvertavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "netinkamas-kartojimas": {
    "title": "Per daug kartojimų",
    "type": "mistake",
    "definition": "Mokinys pamiršta atimties taisyklę ir tiesiog sudeda vienetus.",
    "intuition": "Rašo IIII vietoj IV.",
    "formal": "Po trijų vienodų skaitmenų naudok kitą didesnį simbolį su atimties taisykle.",
    "related": [
      "kartojimo-taisykle"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "netinkama-atimtis": {
    "title": "Neteisinga atimties tvarka",
    "type": "mistake",
    "definition": "Bando atimti 5 iš 10, nors atimti galima tik I, X arba C.",
    "intuition": "Rašo VX vietoj V.",
    "formal": "Atimti galima tik tam tikrus simbolius: I iš V/X, X iš L/C, C iš D/M.",
    "related": [
      "atimties-taisykle-romeniskiems"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "atspindys-asine-simetrija": {
    "title": "Atspindys (Ašinė simetrija)",
    "type": "concept",
    "definition": "Figūros apvertimas per tiesę (ašį).",
    "intuition": "Tai figūros atvaizdas veidrodyje.",
    "formal": "Transformacija, kurios metu kiekvienas taškas $P$ perkeliamas į tašką $P'$ taip, kad simetrijos ašis būtų atkarpos $PP'$ vidurio statmuo.",
    "related": [
      "simetrijos-asis"
    ],
    "topics": [
      "transformaciones-5"
    ]
  },
  "postumis": {
    "title": "Postūmis",
    "type": "concept",
    "definition": "Figūros perstūmimas tam tikru atstumu ir kryptimi.",
    "intuition": "Tarsi figūros čiuožimas ledu be jokio sukimo.",
    "formal": "Plokštumos transformacija, kurios metu visi taškai pasislenka per tą patį vektorių.",
    "related": [
      "geometrine-transformacija"
    ],
    "topics": [
      "transformaciones-5"
    ]
  },
  "posukis": {
    "title": "Posūkis",
    "type": "concept",
    "definition": "Figūros pasukimas aplink tašką tam tikru kampu.",
    "intuition": "Kaip laikrodžio rodyklės judėjimas arba sukimasis ratu.",
    "formal": "Transformacija, fiksuojanti vieną tašką (centrą) ir visus kitus taškus pasukanti pastoviu kampu.",
    "related": [
      "geometrine-transformacija"
    ],
    "topics": [
      "transformaciones-5"
    ]
  },
  "simetrijos-asis": {
    "title": "Simetrijos Asis",
    "type": "concept",
    "definition": "S?voka ?Simetrijos Asis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratine-funkcija-ir-lygtys",
      "transformacijos-ir-koordinates",
      "transformaciones-5"
    ]
  },
  "figuru-lygumas": {
    "title": "Figuru Lygumas",
    "type": "concept",
    "definition": "S?voka ?Figuru Lygumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "transformaciones-5"
    ]
  },
  "geometrine-transformacija": {
    "title": "Geometrine Transformacija",
    "type": "concept",
    "definition": "S?voka ?Geometrine Transformacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "transformaciones-5"
    ]
  },
  "simetrija-gamtoje": {
    "title": "Simetrija Gamtoje",
    "type": "concept",
    "definition": "S?voka ?Simetrija Gamtoje? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "transformaciones-5"
    ]
  },
  "atspindzio-krypties-klaida": {
    "title": "Atspindžio supainiojimas su postūmiu",
    "type": "mistake",
    "definition": "Pamirštama, kad veidrodis apverčia kairę ir dešinę puses.",
    "intuition": "Mokinys nupiešia tokią pačią figūrą kitoje ašies pusėje, bet jos neapverčia.",
    "formal": "Visada matuokite atstumą nuo kiekvieno taško iki ašies atskirai.",
    "related": [
      "atspindys-asine-simetrija",
      "postumis"
    ],
    "topics": [
      "transformaciones-5"
    ]
  },
  "mastelis": {
    "title": "Mastelis",
    "type": "concept",
    "definition": "Santykis tarp piešinio ir tikrovės.",
    "intuition": "Mastelis leidžia mažą modelį sieti su dideliu objektu.",
    "formal": "Mastelis apibrėžia, kaip brėžinio ilgiai susiję su tikrais ilgiais.",
    "related": [
      "proporcija",
      "santykis"
    ],
    "topics": [
      "finansiniai-skaiciavimai-6",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
    ]
  },
  "skaitiklis-vardiklis": {
    "title": "Skaitiklis Vardiklis",
    "type": "concept",
    "definition": "S?voka ?Skaitiklis Vardiklis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trupmenos-procentai-santykiai"
    ]
  },
  "dalies-radimas": {
    "title": "Dalies Radimas",
    "type": "concept",
    "definition": "S?voka ?Dalies Radimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trupmenos-procentai-santykiai"
    ]
  },
  "konvertavimas-skaiciu": {
    "title": "Konvertavimas Skaiciu",
    "type": "concept",
    "definition": "S?voka ?Konvertavimas Skaiciu? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trupmenos-procentai-santykiai"
    ]
  },
  "tikimybes-formule": {
    "title": "Tikimybės formulė",
    "type": "formula",
    "definition": "Palankių baigčių dalis iš visų baigčių.",
    "intuition": "Palankių baigčių dalis iš visų baigčių.",
    "formal": "P(A)=\\frac{palankios}{visos}",
    "related": [
      "tikimybe",
      "ivyki"
    ],
    "topics": [
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "tikimybe-ne-dalis": {
    "title": "Tikimybę laiko procentais be dalies",
    "type": "mistake",
    "definition": "Tikimybė yra palankių baigčių dalis iš visų baigčių.",
    "intuition": "Rašo 1 iš 6 kaip 6.",
    "formal": "Rašyk trupmena arba dešimtainiu skaičiumi.",
    "related": [
      "tikimybe"
    ],
    "topics": [
      "statistika-tikimybe-ir-vektoriai"
    ]
  },
  "santykiu-nesupratimas": {
    "title": "Santykį supainioja su skirtumu",
    "type": "mistake",
    "definition": "Santykis yra palyginimas, ne atimtis.",
    "intuition": "Skaičiuoja 18:24 kaip 24-18.",
    "formal": "Naudok dalybą arba trupmeną.",
    "related": [
      "santykis"
    ],
    "topics": [
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"
    ]
  },
  "santykio-formule": {
    "title": "Santykio užrašas",
    "type": "formula",
    "definition": "Santykį galima užrašyti trupmena.",
    "intuition": "Santykį galima užrašyti trupmena.",
    "formal": "a:b = \\frac{a}{b}",
    "related": [
      "santykis",
      "proporcija"
    ],
    "topics": [
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"
    ]
  },
  "proporcijos-sandauga": {
    "title": "Proporcijos sandauga",
    "type": "formula",
    "definition": "Sandauga leidžia spręsti proporcijas.",
    "intuition": "Sandauga leidžia spręsti proporcijas.",
    "formal": "a\\cdot d = b\\cdot c",
    "related": [
      "proporcija"
    ],
    "topics": [
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"
    ]
  },
  "pitagoro-teorema": {
    "title": "Pitagoro teorema",
    "type": "concept",
    "definition": "Ryšys stačiajame trikampyje.",
    "intuition": "Ji leidžia rasti neaiškų kraštinę iš dviejų žinomų.",
    "formal": "Stačiajame trikampyje a² + b² = c².",
    "related": [
      "trikampis",
      "saknis"
    ],
    "topics": [
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "panasus-trikampiai": {
    "title": "Panašūs trikampiai",
    "type": "concept",
    "definition": "Vienodų kampų, bet kitokio dydžio trikampiai.",
    "intuition": "Panašumas reiškia tą pačią formą ir kitokį mastelį.",
    "formal": "Panašiuose trikampiuose atitinkami kampai lygūs, o kraštinės proporcingos.",
    "related": [
      "trikampis",
      "proporcija",
      "mastelis"
    ],
    "topics": [
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "talio-teorema": {
    "title": "Talio teorema",
    "type": "concept",
    "definition": "Lygiagrečių tiesių ir proporcijų ryšys.",
    "intuition": "Tai labai patogus mastelio įrankis.",
    "formal": "Lygiagretės tiesės sukuria proporcingas atkarpas.",
    "related": [
      "panasus-trikampiai",
      "proporcija"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "transformacija": {
    "title": "Transformacija",
    "type": "concept",
    "definition": "Figūros padėties, dydžio ar krypties keitimas.",
    "intuition": "Transformacijos leidžia geometriją matyti judant.",
    "formal": "Transformacija yra taisyklė, paverčianti vieną figūrą kita.",
    "related": [
      "simetrija",
      "koordinates"
    ],
    "topics": [
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "vektorius": {
    "title": "Vektorius",
    "type": "concept",
    "definition": "Kryptinė atkarpa, turinti ilgį ir kryptį.",
    "intuition": "Tai tarsi nurodymas: 'eik tiek metrų šia kryptimi'.",
    "formal": "Vektorius yra elementas vektorinėje erdvėje, geometriškai vaizduojamas kaip orientuota atkarpa.",
    "related": [
      "kryptis",
      "vektoriaus-modulis",
      "vektoriu-suma"
    ],
    "topics": [
      "lygios-ir-panasios-figuros",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-plokstumoje",
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "pitagoro-teorema-netaikoma-ne-staciajame": {
    "title": "Pitagoro teoremą taiko ne stačiajame trikampyje",
    "type": "mistake",
    "definition": "Teorema galioja tik stačiajame trikampyje.",
    "intuition": "Skačiuoja bet kuriame trikampyje.",
    "formal": "Pirmiausia patikrink, ar yra 90° kampas.",
    "related": [
      "pitagoro-teorema"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "trikampio-plotas": {
    "title": "Trikampio plotas",
    "type": "formula",
    "definition": "Naudojama daugelyje ploto uždavinių.",
    "intuition": "Naudojama daugelyje ploto uždavinių.",
    "formal": "S=\\frac{ah}{2}",
    "related": [
      "plotas",
      "trikampis"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "pitagoro-formule": {
    "title": "Pitagoro formulė",
    "type": "formula",
    "definition": "Ryšys tarp stačiojo trikampio kraštinių.",
    "intuition": "Ryšys tarp stačiojo trikampio kraštinių.",
    "formal": "a^2+b^2=c^2",
    "related": [
      "pitagoro-teorema",
      "saknis"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "apskritimo-ilgis": {
    "title": "Apskritimo ilgis",
    "type": "formula",
    "definition": "Ilgis aplink apskritimą.",
    "intuition": "Ilgis aplink apskritimą.",
    "formal": "C=2\\pi r",
    "related": [
      "apskritimas",
      "skritulys"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "apskritimo-plotas": {
    "title": "Skritulio plotas",
    "type": "formula",
    "definition": "Skritulio plotas priklauso nuo spindulio kvadrato.",
    "intuition": "Skritulio plotas priklauso nuo spindulio kvadrato.",
    "formal": "S=\\pi r^2",
    "related": [
      "apskritimas",
      "skritulys"
    ],
    "topics": [
      "trikampiu-trigonometrija-ir-apskritimai"
    ]
  },
  "sumaiso-koeficientus": {
    "title": "Sumaišo koeficientus su laisvaisiais nariais",
    "type": "mistake",
    "definition": "Koeficientai sudedami, o x laipsnis nesikeičia.",
    "intuition": "3x + 2x rašo kaip 5x².",
    "formal": "3x+2x=5x.",
    "related": [
      "koeficientas"
    ],
    "topics": [
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "tiesines-lygties-forma": {
    "title": "Tiesinės lygties forma",
    "type": "formula",
    "definition": "Tai paprasčiausia lygties forma.",
    "intuition": "Tai paprasčiausia lygties forma.",
    "formal": "ax+b=0",
    "related": [
      "tiesine-lygybe",
      "lygtis"
    ],
    "topics": [
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes"
    ]
  },
  "olimpiada-06-concept-logic": {
    "title": "Matematinė dedukcija ir prieštaravimas",
    "type": "concept",
    "definition": "Loginis metodas, kai teiginys įrodomas parodant, kad jo neigimas veda prie prieštaravimo su žinomais faktais.",
    "intuition": "Tarkime priešingai – kad teiginys neteisingas, ir pamatysime, kad gauname nesąmonę (pvz., kad nelyginis skaičius lygus lyginiam). Vadinasi, teiginys turi būti teisingas.",
    "formal": "Įrodymo prieštaravimo būdu (reductio ad absurdum) formalus modelis, kai $\\neg P \\implies Q$ ir $Q$ yra žinoma neteisingu teiginiu.",
    "related": [],
    "topics": [
      "olimpiada-06-algebra",
      "olimpiada-06-geometrija",
      "olimpiada-06-kombinatorika",
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "olimpiada-06-concept-method": {
    "title": "Aritmetikos pagrindinė teorema",
    "type": "concept",
    "definition": "Kiekvienas natūralusis skaičius, didesnis už 1, gali būti vieninteliu būdu išreikštas pirminių skaičių sandauga.",
    "intuition": "Pirminiai skaičiai yra lyg 'matematikos atomai' – iš jų galima surinkti bet kurį skaičių, ir šis surinkimo būdas yra unikalus.",
    "formal": "$n = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$, kur $p_i$ yra skirtingi pirminiai skaičiai, o $a_i$ – natūralieji skaičiai.",
    "related": [],
    "topics": [
      "olimpiada-06-algebra",
      "olimpiada-06-geometrija",
      "olimpiada-06-kombinatorika",
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "olimpiada-06-concept-absolute-value": {
    "title": "Absoliučioji vertė (modulis)",
    "type": "concept",
    "definition": "Skaičiaus atstumas nuo nulio skaičių tiesėje.",
    "intuition": "Modulis tiesiog 'panaikina' minuso ženklą, jei jis yra.",
    "formal": "$|a| = \\sqrt{a^2}$",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "olimpiada-06-concept-sequence": {
    "title": "Skaičių seka",
    "type": "concept",
    "definition": "Skaičių rinkinys, išdėstytas tam tikra tvarka.",
    "intuition": "Tai tarsi eilė, kurioje kiekvienas skaičius žino savo vietą ir kaimyną.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "olimpiada-06-concept-invariant": {
    "title": "Invariantas",
    "type": "concept",
    "definition": "Savybė, kuri nekinta atliekant leidžiamus veiksmus.",
    "intuition": "Nesvarbu, ką darysi, šis dalykas liks toks pat.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "f-difference-of-squares": {
    "title": "Kvadratų skirtumas",
    "type": "formula",
    "definition": "Leidžia greitai suskaidyti sandauga skirtumą tarp dviejų kvadratų.",
    "intuition": "Leidžia greitai suskaidyti sandauga skirtumą tarp dviejų kvadratų.",
    "formal": "a^2 - b^2 = (a-b)(a+b)",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "f-mixture": {
    "title": "Koncentracijos formulė",
    "type": "formula",
    "definition": "Padeda rasti medžiagos kiekį mišiniuose.",
    "intuition": "Padeda rasti medžiagos kiekį mišiniuose.",
    "formal": "C = \\frac{m_{medžiaga}}{m_{tirpalas}} \\cdot 100\\%",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "m-minus-distribution": {
    "title": "Minusio ženklas prieš skliaustus",
    "type": "mistake",
    "definition": "Minusio ženklas prieš skliaustus",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "m-inequality-sign": {
    "title": "Nelygybės ženklo nekeitimas",
    "type": "mistake",
    "definition": "Nelygybės ženklo nekeitimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "m-average-speed": {
    "title": "Vidutinis greitis kaip vidurkis",
    "type": "mistake",
    "definition": "Vidutinis greitis kaip vidurkis",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-algebra"
    ]
  },
  "olimpiada-06-geo-concept-angles": {
    "title": "Kryžminiai ir gretiniai kampai",
    "type": "concept",
    "definition": "Kampų poros, turinčios bendras kraštines ar viršūnes.",
    "intuition": "Gretiniai kampai kartu sudaro tiesę ($180^\\circ$), o kryžminiai yra lygūs.",
    "formal": "Gretinių kampų $\\alpha, \\beta$ suma $\\alpha + \\beta = 180^\\circ$. Kryžminiai kampai $\\alpha_1 = \\alpha_2$.",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "olimpiada-06-geo-concept-triangle-inequality": {
    "title": "Trikampio nelygybė",
    "type": "concept",
    "definition": "Taisyklė, nurodanti, kada trikampis egzistuoja.",
    "intuition": "Bet kurios dvi kraštinės kartu turi būti ilgesnės už trečiąją, kitaip jos 'nepasieks' viena kitos.",
    "formal": "Trikampiui su kraštinėmis a, b, c galioja: a+b > c, a+c > b, b+c > a.",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "olimpiada-06-geo-concept-symmetry": {
    "title": "Simetrijos ašis",
    "type": "concept",
    "definition": "Tiesė, kuri dalija figūrą į dvi veidrodines dalis.",
    "intuition": "Tai figūros 'vidurio linija' – jei perlenktume popierių, abi pusės tobulai sutaptų.",
    "formal": "Tiesė L yra simetrijos ašis, jei kiekvienam figūros taškui P egzistuoja taškas P' figūroje, esantis simetriškai L atžvilgiu.",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "f-circle-length": {
    "title": "Apskritimo ilgis",
    "type": "formula",
    "definition": "Atstumas aplink apskritimą.",
    "intuition": "Atstumas aplink apskritimą.",
    "formal": "C = 2\\pi r",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "f-triangle-area": {
    "title": "Trikampio plotas",
    "type": "formula",
    "definition": "Pusė pagrindo ir aukštinės sandaugos.",
    "intuition": "Pusė pagrindo ir aukštinės sandaugos.",
    "formal": "S = \\frac{1}{2} a h",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "f-pythagoras": {
    "title": "Pitagoro teorema",
    "type": "formula",
    "definition": "Stačiojo trikampio kraštinių sąryšis.",
    "intuition": "Stačiojo trikampio kraštinių sąryšis.",
    "formal": "a^2 + b^2 = c^2",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "m-triangle-inequality-sum": {
    "title": "Suma lygi kraštinei",
    "type": "mistake",
    "definition": "Suma lygi kraštinei",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "m-volume-units": {
    "title": "Tūrio vienetų konvertavimas",
    "type": "mistake",
    "definition": "Tūrio vienetų konvertavimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "m-sum-of-angles": {
    "title": "Neteisinga kampų suma",
    "type": "mistake",
    "definition": "Neteisinga kampų suma",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "f-factorial": {
    "title": "Faktorialas",
    "type": "formula",
    "definition": "Būdų išrikiuoti n skirtingų objektų skaičius.",
    "intuition": "Būdų išrikiuoti n skirtingų objektų skaičius.",
    "formal": "n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "f-combinations": {
    "title": "Derinių skaičius",
    "type": "formula",
    "definition": "Būdų pasirinkti k objektų iš n aibės, kai tvarka nesvarbi.",
    "intuition": "Būdų pasirinkti k objektų iš n aibės, kai tvarka nesvarbi.",
    "formal": "C_n^k = \\frac{n!}{k!(n-k)!}",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "f-inclusion-exclusion-2": {
    "title": "Įtraukties-išskirties taisyklė (2 aibės)",
    "type": "formula",
    "definition": "Naudojama skaičiuojant elementus, kurie gali priklausyti kelioms grupėms.",
    "intuition": "Naudojama skaičiuojant elementus, kurie gali priklausyti kelioms grupėms.",
    "formal": "|A \\cup B| = |A| + |B| - |A \\cap B|",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "m-order-confusion": {
    "title": "Tvarkos svarbos ignoravimas",
    "type": "mistake",
    "definition": "Tvarkos svarbos ignoravimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "m-missing-zero-check": {
    "title": "Nulis skaičiaus priekyje",
    "type": "mistake",
    "definition": "Nulis skaičiaus priekyje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-kombinatorika"
    ]
  },
  "f-divisors-count": {
    "title": "Daliklių skaičius",
    "type": "formula",
    "definition": "Būdų sudaryti daliklį skaičius.",
    "intuition": "Būdų sudaryti daliklį skaičius.",
    "formal": "N = (a_1+1)(a_2+1)\\dots",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "f-gcd-lcm-relation": {
    "title": "DBD ir MBK ryšys",
    "type": "formula",
    "definition": "Pagrindinė dviejų skaičių santykio savybė.",
    "intuition": "Pagrindinė dviejų skaičių santykio savybė.",
    "formal": "a \\cdot b = DBD(a,b) \\cdot MBK(a,b)",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "f-sum-of-divisors": {
    "title": "Daliklių suma",
    "type": "formula",
    "definition": "Visų natūraliųjų skaičiaus daliklių suma.",
    "intuition": "Visų natūraliųjų skaičiaus daliklių suma.",
    "formal": "S = \\frac{p_1^{a_1+1}-1}{p_1-1} \\cdot \\frac{p_2^{a_2+1}-1}{p_2-1} \\dots",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "m-even-primes": {
    "title": "Manymas, kad visi pirminiai nelyginiai",
    "type": "mistake",
    "definition": "Manymas, kad visi pirminiai nelyginiai",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "m-last-digit-overflow": {
    "title": "Paskutinio skaitmens klaida",
    "type": "mistake",
    "definition": "Paskutinio skaitmens klaida",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-skaiciu-teorija"
    ]
  },
  "tiesioginis-proporcingumas": {
    "title": "Tiesioginis proporcingumas",
    "type": "concept",
    "definition": "Dydžių ryšys, kai jų santykis yra pastovus.",
    "intuition": "Dvigubai daugiau darbo - dvigubai didesnis atlygis.",
    "formal": "Funkcija $y = kx$, kur $k$ yra konstanta.",
    "related": [
      "proporcingumo-koeficientas",
      "tiesinis-grafikas"
    ],
    "topics": [
      "tiesioginis-proporcingumas"
    ]
  },
  "proporcingumo-koeficientas": {
    "title": "Proporcingumo koeficientas",
    "type": "concept",
    "definition": "Skaičius k formulėje y = k/x.",
    "intuition": "Tai kintamųjų sandauga.",
    "formal": "Pastovus dydis k = x * y atvirkštiniame proporcingume.",
    "related": [
      "atvirkstinis-proporcingumas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "tiesioginis-proporcingumas"
    ]
  },
  "tiesinis-grafikas": {
    "title": "Tiesinis Grafikas",
    "type": "concept",
    "definition": "S?voka ?Tiesinis Grafikas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesioginis-proporcingumas"
    ]
  },
  "priklausomas-kintamasis": {
    "title": "Funkcijos reikšmė (priklausomas kintamasis)",
    "type": "concept",
    "definition": "Kintamasis, kurio reikšmė apskaičiuojama pagal formulę.",
    "intuition": "Tai pasekmė. Pvz., uždarbis, kuris priklauso nuo laiko.",
    "formal": "Kintamasis, kurio kiekviena reikšmė vienareikšmiškai nustatoma pagal argumento reikšmę.",
    "related": [
      "nepriklausomas-kintamasis"
    ],
    "topics": [
      "tiesinis-sarysis",
      "tiesioginis-proporcingumas"
    ]
  },
  "nepriklausomas-kintamasis": {
    "title": "Argumentas (nepriklausomas kintamasis)",
    "type": "concept",
    "definition": "Kintamasis, kurio reikšmes renkamės patys.",
    "intuition": "Tai priežastis. Pvz., laikas, kurį dirbame.",
    "formal": "Kintamasis, nuo kurio reikšmių priklauso kito kintamojo reikšmės.",
    "related": [
      "priklausomas-kintamasis"
    ],
    "topics": [
      "tiesinis-sarysis",
      "tiesioginis-proporcingumas"
    ]
  },
  "koordinaciu-plokstuma": {
    "title": "Koordinaciu Plokstuma",
    "type": "concept",
    "definition": "S?voka ?Koordinaciu Plokstuma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesioginis-proporcingumas",
      "transformacijos-ir-koordinates"
    ]
  },
  "tiesioginio-proporcingumo-formule": {
    "title": "Tiesioginio proporcingumo formulė",
    "type": "formula",
    "definition": "Pagrindinis algebrinis modelis tiesioginiam ryšiui.",
    "intuition": "Pagrindinis algebrinis modelis tiesioginiam ryšiui.",
    "formal": "y = kx",
    "related": [
      "tiesioginis-proporcingumas"
    ],
    "topics": [
      "tiesioginis-proporcingumas"
    ]
  },
  "proporcijos-pagrindine-savybe": {
    "title": "Pagrindinė proporcijos savybė",
    "type": "formula",
    "definition": "Leidžia spręsti proporcijas dauginant narius kryžmai.",
    "intuition": "Leidžia spręsti proporcijas dauginant narius kryžmai.",
    "formal": "a \\cdot d = b \\cdot c",
    "related": [
      "proporcija"
    ],
    "topics": [
      "tiesioginis-proporcingumas"
    ]
  },
  "k-skaiciavimo-klaida": {
    "title": "Neteisingas koeficiento skaičiavimas",
    "type": "mistake",
    "definition": "Supainiojami priklausomas ir nepriklausomas kintamieji.",
    "intuition": "Skaičiuoja k = x/y vietoj k = y/x.",
    "formal": "Visada dalinkite funkcijos reikšmę (y) iš argumentą (x).",
    "related": [
      "proporcingumo-koeficientas"
    ],
    "topics": [
      "tiesioginis-proporcingumas"
    ]
  },
  "lygus-trikampiai": {
    "title": "Lygūs trikampiai",
    "type": "concept",
    "definition": "Trikampiai, kurie visiškai sutampa juos uždėjus vieną ant kito.",
    "intuition": "Tai tarsi du identiški blynai arba kopijos.",
    "formal": "Du trikampiai vadinami lygiais, jei egzistuoja atitiktis tarp jų viršūnių tokia, kad visos atitinkamos kraštinės ir kampai būtų lygūs.",
    "related": [
      "atitinkami-elementai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "atitinkami-elementai": {
    "title": "Atitinkami elementai",
    "type": "concept",
    "definition": "Kraštinės arba kampai, esantys tose pačiose vietose lyginamuose trikampiuose.",
    "intuition": "Tai elementai-dvyniai, kurie sutampa figūras sudėjus.",
    "formal": "Elementai, kurie sutampa trikampius uždėjus vieną ant kito po galimo posūkio ar apvertimo.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "trikampio-nelygybe": {
    "title": "Trikampio nelygybė",
    "type": "concept",
    "definition": "Taisyklė, kad kraštinių suma didesnė už trečiąją.",
    "intuition": "",
    "formal": "a+b > c.",
    "related": [],
    "topics": [
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "kkk-pozymis": {
    "title": "KKK požymis",
    "type": "theorem",
    "definition": "Lygumas pagal tris kraštines.",
    "intuition": "Jei visos lazdelės vienodos, trikampis susidės tik vienu būdu.",
    "formal": "Jei vieno trikampio trys kraštinės yra atitinkamai lygios kito trikampio trims kraštinėms, tai tokie trikampiai yra lygūs.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "kkp-pozymis": {
    "title": "KKP požymis",
    "type": "theorem",
    "definition": "Lygumas pagal dvi kraštines ir kampą tarp jų.",
    "intuition": "Dvi kraštinės ir 'išskėtimo' kampas nulemia visą trikampį.",
    "formal": "Jei vieno trikampio dvi kraštinės ir kampas tarp jų yra atitinkamai lygūs kito trikampio dviem kraštinėms ir kampui tarp jų, tai tokie trikampiai yra lygūs.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "kpk-pozymis": {
    "title": "KPK požymis",
    "type": "theorem",
    "definition": "Lygumas pagal kraštinę ir du kampus prie jos.",
    "intuition": "Žinant pagrindą ir sienų kilimo kampus, viršūnė nustatoma tiksliai.",
    "formal": "Jei vieno trikampio kraštinė ir du prie jos esantys kampai yra atitinkamai lygūs kito trikampio kraštinei ir dviem prie jos esantiems kampams, tai tokie trikampiai yra lygūs.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "staciojo-trikampio-lygumas": {
    "title": "Stačiojo trikampio lygumas",
    "type": "concept",
    "definition": "Specialūs lygumo atvejai trikampiams su stačiuoju kampu.",
    "intuition": "Status kampas jau yra vienas iš reikiamų 3 elementų.",
    "formal": "Specialūs teoremų atvejai, pvz., pagal įžambinę ir statinį.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "braizymas-skriestuvu": {
    "title": "Braizymas Skriestuvu",
    "type": "concept",
    "definition": "S?voka ?Braizymas Skriestuvu? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "braizymas-matlankiu": {
    "title": "Braizymas Matlankiu",
    "type": "concept",
    "definition": "S?voka ?Braizymas Matlankiu? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "nelygybes-ignoravimas": {
    "title": "Bando braižyti neįmanomą trikampį",
    "type": "mistake",
    "definition": "Pamirštama patikrinti, ar suma viršija trečią kraštinę.",
    "intuition": "Mano, kad trikampis su kraštinėmis 1, 1, 5 egzistuoja.",
    "formal": "Visada patikrink: a + b > c. Dviejų trumpiausių kraštinių suma turi būti didesnė už ilgiausią.",
    "related": [
      "trikampio-nelygybe"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "neteisingas-pozymio-taikymas": {
    "title": "Kampas ne tarp kraštinių",
    "type": "mistake",
    "definition": "Mokinys tiesiog ieško bet kokių 2 kraštinių ir bet kokio kampo.",
    "intuition": "Taikomas KKP požymis, kai kampas yra ne tarp lygių kraštinių.",
    "formal": "KKP požymiui kampas PRIVALO būti tarp duotų kraštinių (jungti jas).",
    "related": [
      "kkp-pozymis"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "spindulys": {
    "title": "Spindulys",
    "type": "concept",
    "definition": "S?voka ?Spindulys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimas-ir-skritulys",
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "skersmuo": {
    "title": "Skersmuo",
    "type": "concept",
    "definition": "S?voka ?Skersmuo? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimas-ir-skritulys",
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "pi-skaicius": {
    "title": "Skaičius Pi",
    "type": "concept",
    "definition": "Apskritimo ilgio ir skersmens santykis.",
    "intuition": "Maždaug 3,14.",
    "formal": "Matematinė konstanta π, lygi apskritimo ilgio ir jo skersmens santykiui.",
    "related": [
      "apskritimo-ilgis"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "skritulio-plotas": {
    "title": "Skritulio plotas",
    "type": "formula",
    "definition": "Apskaičiuoja paviršiaus plotą apskritimo viduje.",
    "intuition": "Apskaičiuoja paviršiaus plotą apskritimo viduje.",
    "formal": "S = \\pi r^2",
    "related": [
      "skritulys",
      "plotas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "lankas": {
    "title": "Lankas",
    "type": "concept",
    "definition": "S?voka ?Lankas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimas-ir-skritulys",
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "ispjova": {
    "title": "Skritulio išpjova",
    "type": "concept",
    "definition": "Skritulio dalis tarp dviejų spindulių.",
    "intuition": "Picos gabalėlis.",
    "formal": "Skritulio dalis, apribota lanko ir dviejų spindulių, jungiančių lanko galus su centru.",
    "related": [
      "skritulys",
      "lankas"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "apskritimo-ilgio-formule": {
    "title": "Apskritimo ilgis",
    "type": "formula",
    "definition": "Apskaičiuoja atstumą aplink apskritimą.",
    "intuition": "Apskaičiuoja atstumą aplink apskritimą.",
    "formal": "C = 2\\pi r",
    "related": [
      "apskritimo-ilgis",
      "spindulys"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "skritulio-ploto-formule": {
    "title": "Skritulio plotas",
    "type": "formula",
    "definition": "Apskaičiuoja skritulio paviršiaus plotą.",
    "intuition": "Apskaičiuoja skritulio paviršiaus plotą.",
    "formal": "S = \\pi r^2",
    "related": [
      "skritulio-plotas",
      "spindulys"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "lanko-ilgio-formule": {
    "title": "Lanko ilgis",
    "type": "formula",
    "definition": "Apskaičiuoja apskritimo dalies (lanko) ilgį.",
    "intuition": "Apskaičiuoja apskritimo dalies (lanko) ilgį.",
    "formal": "l = \\frac{\\pi r \\alpha}{180}",
    "related": [
      "lankas"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "ispjovos-ploto-formule": {
    "title": "Išpjovos plotas",
    "type": "formula",
    "definition": "Apskaičiuoja skritulio dalies (picos gabalėlio) plotą.",
    "intuition": "Apskaičiuoja skritulio dalies (picos gabalėlio) plotą.",
    "formal": "S_{\\text{išpj}} = \\frac{\\pi r^2 \\alpha}{360}",
    "related": [
      "ispjova"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "painioja-spinduli-su-skersmeniu": {
    "title": "Painioja spindulį su skersmeniu",
    "type": "mistake",
    "definition": "Užduotyje duotas skersmuo, bet mokinys automatiškai naudoja jį formulėje 2πr.",
    "intuition": "Į formulę vietoj spindulio įrašo skersmenį.",
    "formal": "Jei duotas skersmuo d, spindulį r raskite padaliję d iš 2.",
    "related": [
      "spindulys",
      "skersmuo"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "painioja-ilgio-ir-ploto-formules": {
    "title": "Painioja ilgio ir ploto formules",
    "type": "mistake",
    "definition": "Abi formulės turi tuos pačius elementus (2, π, r).",
    "intuition": "Naudoja πr² ilgiui arba 2πr plotui.",
    "formal": "Plotas visada susijęs su kvadratu (r²), ilgis - su linijiniu matavimu (2r).",
    "related": [
      "apskritimo-ilgis",
      "skritulio-plotas"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "atvirkstinis-proporcingumas": {
    "title": "Atvirkštinis proporcingumas",
    "type": "concept",
    "definition": "Priklausomybė y = k/x.",
    "intuition": "Dvigubai daugiau žmonių darbą atlieka dvigubai greičiau.",
    "formal": "Atvirkštinis proporcingumas yra funkcija, kurios reikšmės kinta atvirkščiai proporcingai argumento reikšmėms.",
    "related": [
      "proporcingumo-koeficientas",
      "hiperbole"
    ],
    "topics": [
      "atvirkstinis-proporcingumas"
    ]
  },
  "hiperbole": {
    "title": "Hiperbolė",
    "type": "concept",
    "definition": "Atvirkštinio proporcingumo grafikas.",
    "intuition": "Dvi kreivės šakos, kurios niekada nepaliečia ašių.",
    "formal": "Kreivė, susidedanti iš dviejų šakų, simetriškų koordinačių pradžios taško atžvilgiu.",
    "related": [
      "atvirkstinis-proporcingumas",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas"
    ]
  },
  "apibrezimo-sritis": {
    "title": "Apibrėžimo sritis",
    "type": "concept",
    "definition": "Visų leistinų argumentų aibė.",
    "intuition": "Visi skaičiai, kuriuos „leidžiama“ įstatyti į funkciją, kad gautume prasmingą atsakymą.",
    "formal": "Aibė D(f) = {x | f(x) yra apibrėžtas}.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes"
    ]
  },
  "reiksmiu-sritis": {
    "title": "Reikšmių sritis",
    "type": "concept",
    "definition": "Visų galimų funkcijos reikšmių aibė.",
    "intuition": "Visi galimi rezultatai, kuriuos funkcija gali pasiekti.",
    "formal": "Aibė E(f) = {f(x) | x priklauso D(f)}.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes"
    ]
  },
  "grafikas": {
    "title": "Grafikas",
    "type": "concept",
    "definition": "Taškų rinkinys koordinačių plokštumoje.",
    "intuition": "Funkcijos „portretas“, leidžiantis pamatyti jos elgesį vizualiai.",
    "formal": "Aibė G = {(x, f(x)) | x priklauso D(f)}.",
    "related": [
      "funkcija",
      "funkcijos-nulis",
      "didejimas",
      "mazejimas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes"
    ]
  },
  "atvirkstinio-proporcingumo-formule": {
    "title": "Atvirkštinio proporcingumo formulė",
    "type": "formula",
    "definition": "Parodo, kad x ir y sandauga yra pastovi.",
    "intuition": "Parodo, kad x ir y sandauga yra pastovi.",
    "formal": "y = \\frac{k}{x}",
    "related": [
      "atvirkstinis-proporcingumas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas"
    ]
  },
  "dalyba-is-nulio": {
    "title": "Dalyba iš nulio",
    "type": "mistake",
    "definition": "Mokinys pamiršta, kad vardiklis negali būti lygus nuliui.",
    "intuition": "Bando apskaičiuoti y reikšmę, kai x = 0.",
    "formal": "Atvirkštinio proporcingumo funkcija taške x = 0 neapibrėžta.",
    "related": [
      "apibrezimo-sritis"
    ],
    "topics": [
      "atvirkstinis-proporcingumas"
    ]
  },
  "painioja-su-tiesiniu": {
    "title": "Painioja su tiesiniu proporcingumu",
    "type": "mistake",
    "definition": "Mokinys pripratęs prie y = kx modelio.",
    "intuition": "Mano, kad didėjant x, y taip pat turi didėti.",
    "formal": "Atvirkštiniame proporcingume didėjant x, y mažėja.",
    "related": [
      "atvirkstinis-proporcingumas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas"
    ]
  },
  "biudzetas": {
    "title": "Biudžetas",
    "type": "concept",
    "definition": "Pajamų ir išlaidų planas.",
    "intuition": "Tai tavo pinigų žemėlapis – matai, iš kur jie atėjo ir kur išėjo.",
    "formal": "Biudžetas yra finansinis planas, kuriame numatomos pajamos ir išlaidos tam tikram laikotarpiui.",
    "related": [
      "pajamos",
      "islaidos"
    ],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "palukanos": {
    "title": "Palūkanos",
    "type": "concept",
    "definition": "Mokestis už naudojimąsi svetimais pinigais.",
    "intuition": "Atlygis tau už taupymą arba mokestis bankui už skolinimąsi.",
    "formal": "Palūkanos yra pinigų suma, kurią skolininkas moka kreditoriui už paskolą arba bankas moka indėlininkui už indėlį.",
    "related": [
      "palukanu-norma",
      "paprastosios-palukanos"
    ],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "palukanu-norma": {
    "title": "Palūkanų norma",
    "type": "concept",
    "definition": "Palūkanų dydis procentais.",
    "intuition": "Kiek procentų tavo sumos „užaugs“ per metus.",
    "formal": "Santykinis dydis, išreiškiamas procentais, rodantis palūkanų santykį su pradine suma per tam tikrą laiką (dažniausiai metus).",
    "related": [
      "palukanos"
    ],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "pajamos": {
    "title": "Pajamos",
    "type": "concept",
    "definition": "S?voka ?Pajamos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "islaidos": {
    "title": "Islaidos",
    "type": "concept",
    "definition": "S?voka ?Islaidos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "paprastosios-palukanos": {
    "title": "Paprastosios palūkanos",
    "type": "concept",
    "definition": "Palūkanos, skaičiuojamos tik nuo pradinės sumos.",
    "intuition": "Kiekvieną mėnesį pridedama tiek pat pinigų.",
    "formal": "Palūkanų skaičiavimo metodas, kai palūkanos už kiekvieną laikotarpį skaičiuojamos nuo tos pačios pradinės sumos.",
    "related": [
      "sudetines-palukanos"
    ],
    "topics": [
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8"
    ]
  },
  "indelis": {
    "title": "Indelis",
    "type": "concept",
    "definition": "S?voka ?Indelis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "paskola": {
    "title": "Paskola",
    "type": "concept",
    "definition": "S?voka ?Paskola? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "paprastuju-palukanu-formule": {
    "title": "Paprastųjų palūkanų formulė",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti sukauptas palūkanas per laiką t.",
    "intuition": "Leidžia apskaičiuoti sukauptas palūkanas per laiką t.",
    "formal": "I = S_0 \\cdot p \\cdot t",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "metu-ir-menesiu-painiojimas": {
    "title": "Metų ir mėnesių painiojimas",
    "type": "mistake",
    "definition": "Mokinys pamiršta, kad palūkanų norma nurodoma metams.",
    "intuition": "Į formulę vietoj metų įrašo mėnesių skaičių (pvz., 6 mėnesius laiko kaip 6 metus).",
    "formal": "Mėnesius dalinkite iš 12: pvz., $6 \\text{ mėn.} = 0,5 \\text{ metų}$.",
    "related": [
      "paprastosios-palukanos"
    ],
    "topics": [
      "finansiniai-skaiciavimai-7"
    ]
  },
  "generaline-visuma": {
    "title": "Generaline Visuma",
    "type": "concept",
    "definition": "S?voka ?Generaline Visuma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "imtys-ir-diagramos-7"
    ]
  },
  "reprezentatyvumas": {
    "title": "Reprezentatyvumas",
    "type": "concept",
    "definition": "S?voka ?Reprezentatyvumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "imtys-ir-diagramos-7",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "santykinis-daznis": {
    "title": "Santykinis Daznis",
    "type": "concept",
    "definition": "S?voka ?Santykinis Daznis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "skrituline-diagrama": {
    "title": "Skrituline Diagrama",
    "type": "concept",
    "definition": "S?voka ?Skrituline Diagrama? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "imtys-ir-diagramos-7"
    ]
  },
  "stulpeline-diagrama": {
    "title": "Stulpeline Diagrama",
    "type": "concept",
    "definition": "S?voka ?Stulpeline Diagrama? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "imtys-ir-diagramos-7"
    ]
  },
  "medianos-rikiavimo-klaida": {
    "title": "Medianos radimas nerikiavus duomenų",
    "type": "mistake",
    "definition": "Mokinys pamiršta, kad mediana apibrėžiama tik surikiuotiems duomenims.",
    "intuition": "Paima vidurinį skaičių iš bet kokios sekos.",
    "formal": "Visada pirmiausia surikiuokite duomenis didėjimo tvarka.",
    "related": [
      "mediana"
    ],
    "topics": [
      "imtys-ir-diagramos-7"
    ]
  },
  "laipsnis": {
    "title": "Laipsnis",
    "type": "concept",
    "definition": "Trumpas kartotinio daugybos užrašas.",
    "intuition": "Laipsniai padeda skaičiuoti augimą.",
    "formal": "a^n reiškia a daugintas iš savęs n kartų.",
    "related": [
      "saknis",
      "rodiklis"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules",
      "laipsniai-ir-saknys",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "kvadratine-saknis": {
    "title": "Kvadratinė šaknis",
    "type": "concept",
    "definition": "Veiksmas, atvirkštinis kėlimui kvadratu.",
    "intuition": "Koks skaičius padaugintas iš savęs duoda šį rezultatą?",
    "formal": "√a = b <=> b² = a, b ≥ 0",
    "related": [
      "kubine-saknis",
      "posaknis"
    ],
    "topics": [
      "laipsniai-ir-saknys",
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "pagrindas": {
    "title": "Pagrindas",
    "type": "concept",
    "definition": "S?voka ?Pagrindas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "rodiklis": {
    "title": "Rodiklis",
    "type": "concept",
    "definition": "Skaičius prie laipsnio ženklo.",
    "intuition": "Rodiklis nurodo kartojimų skaičių.",
    "formal": "Rodiklis parodo, kiek kartų daugiklis kartojamas.",
    "related": [
      "laipsnis",
      "logaritmas"
    ],
    "topics": [
      "laipsniai-ir-saknys",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "kvadratas": {
    "title": "Kvadratas",
    "type": "concept",
    "definition": "S?voka ?Kvadratas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsniai-ir-saknys",
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "kubas": {
    "title": "Kubas",
    "type": "concept",
    "definition": "S?voka ?Kubas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "saknis": {
    "title": "Šaknis",
    "type": "concept",
    "definition": "Veiksmas, atvirkštinis laipsniavimui.",
    "intuition": "Šaknis klausia: koks skaičius pakeltas duoda šį rezultatą?",
    "formal": "n-tojo laipsnio šaknis yra skaičius, kurio n-tasis laipsnis lygus duotajam.",
    "related": [
      "laipsnis",
      "rodiklis"
    ],
    "topics": [
      "laipsniai-ir-saknys",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "standartine-israiska": {
    "title": "Standartine Israiska",
    "type": "concept",
    "definition": "S?voka ?Standartine Israiska? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "laipsniu-daugyba": {
    "title": "Laipsnių daugyba",
    "type": "formula",
    "definition": "Dauginant vienodus pagrindus, rodikliai sudedami.",
    "intuition": "Dauginant vienodus pagrindus, rodikliai sudedami.",
    "formal": "a^m \\cdot a^n = a^{m+n}",
    "related": [
      "laipsnis"
    ],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "laipsniu-dalyba": {
    "title": "Laipsnių dalyba",
    "type": "formula",
    "definition": "Dalijant vienodus pagrindus, rodikliai atimami.",
    "intuition": "Dalijant vienodus pagrindus, rodikliai atimami.",
    "formal": "a^m : a^n = a^{m-n}",
    "related": [
      "laipsnis"
    ],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "rodikliu-daugyba-vietoj-sudeties": {
    "title": "Rodiklių daugyba vietoj sudėties",
    "type": "mistake",
    "definition": "Mokinys supainioja daugybos taisyklę su kėlimo laipsniu taisykle.",
    "intuition": "a^2 * a^3 = a^6",
    "formal": "Dauginant pagrindus, rodiklius reikia SUDĖTI.",
    "related": [
      "laipsnis"
    ],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "neigiamas-pagrindas-laipsnyje": {
    "title": "Skliaustelių nepaisymas su neigiamais skaičiais",
    "type": "mistake",
    "definition": "Mokinys mano, kad minusas visada panaikinamas kvadratu.",
    "intuition": "-3^2 = 9",
    "formal": "Be skliaustelių kvadratas galioja tik skaičiui, o ne minusui.",
    "related": [
      "laipsnis"
    ],
    "topics": [
      "laipsniai-ir-saknys"
    ]
  },
  "lygiagretumas": {
    "title": "Lygiagretumas",
    "type": "concept",
    "definition": "Tiesių savybė niekada nesusikirsti plokštumoje.",
    "intuition": "Kaip bėgiai – visada vienodu atstumu.",
    "formal": "Tiesės a ir b yra lygiagrečios, jei jų sankirta yra tuščia aibė.",
    "related": [
      "atitinkamieji-kampai"
    ],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "lygiagretainis": {
    "title": "Lygiagretainis",
    "type": "concept",
    "definition": "Keturkampis su dviem poromis lygiagrečių kraštinių.",
    "intuition": "Ištęstas kvadratas ar stačiakampis.",
    "formal": "Lygiagretainis yra keturkampis, kurio priešingos kraštinės yra lygiagrečios.",
    "related": [
      "staciakampis",
      "rombas"
    ],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "prizme": {
    "title": "Prizmė",
    "type": "concept",
    "definition": "Briaunainis su dviem lygiais lygiagrečiais pagrindais.",
    "intuition": "Tarsi ištemptas daugiakampis į viršų.",
    "formal": "Daugiasienis, kurio dvi sienos yra lygūs daugiakampiai, esantys lygiagrečiose plokštumose.",
    "related": [
      "lygiagretisienis",
      "turis"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "kryzminiai-kampai": {
    "title": "Kryzminiai Kampai",
    "type": "concept",
    "definition": "S?voka ?Kryzminiai Kampai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "atitinkamieji-kampai": {
    "title": "Atitinkamieji Kampai",
    "type": "concept",
    "definition": "S?voka ?Atitinkamieji Kampai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "staciakampis": {
    "title": "Staciakampis",
    "type": "concept",
    "definition": "S?voka ?Staciakampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "rombas": {
    "title": "Rombas",
    "type": "concept",
    "definition": "S?voka ?Rombas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "trapecija": {
    "title": "Trapecija",
    "type": "concept",
    "definition": "S?voka ?Trapecija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "piramide": {
    "title": "Piramidė",
    "type": "concept",
    "definition": "Briaunainis su vienu pagrindu ir bendra viršūne.",
    "intuition": "Egipto piramidės forma.",
    "formal": "Daugiasienis, kurio viena siena yra daugiakampis, o kitos – trikampiai su bendra viršūne.",
    "related": [
      "apotema",
      "turis"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "lygiagretainio-plotas": {
    "title": "Lygiagretainio plotas",
    "type": "formula",
    "definition": "Pagrindas padaugintas iš aukštinės.",
    "intuition": "Pagrindas padaugintas iš aukštinės.",
    "formal": "S = a \\cdot h",
    "related": [
      "lygiagretainis"
    ],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "trapecijos-plotas": {
    "title": "Trapecijos plotas",
    "type": "formula",
    "definition": "Pagrindų vidurkis padaugintas iš aukštinės.",
    "intuition": "Pagrindų vidurkis padaugintas iš aukštinės.",
    "formal": "S = \\frac{a+b}{2} \\cdot h",
    "related": [
      "trapecija"
    ],
    "topics": [
      "lygiagretes-keturkampiai-ir-erdves-figuros"
    ]
  },
  "prizmes-turis": {
    "title": "Prizmės tūris",
    "type": "formula",
    "definition": "Tūris randamas pagrindo plotą dauginant iš kūno aukštinės.",
    "intuition": "Tūris randamas pagrindo plotą dauginant iš kūno aukštinės.",
    "formal": "V = S_{pagr} \\cdot H",
    "related": [
      "prizme"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "apibreztis": {
    "title": "Apibrėžtis",
    "type": "concept",
    "definition": "Sąvokos prasmės paaiškinimas.",
    "intuition": "Žodyno paaiškinimas matematikoje.",
    "formal": "Teiginys, nurodantis esminius objekto požymius, pagal kuriuos jis išskiriamas iš kitų.",
    "related": [
      "teorema"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "teorema": {
    "title": "Teorema",
    "type": "concept",
    "definition": "Įrodytas matematinis teiginys.",
    "intuition": "Taisyklė, kurią kažkas jau patikrino ir įrodė.",
    "formal": "Matematinis teiginys, kurio teisingumas nustatomas įrodymu.",
    "related": [
      "irodymas",
      "salyga",
      "isvada"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "aksioma": {
    "title": "Aksioma",
    "type": "concept",
    "definition": "Teiginys, priimamas be įrodymų.",
    "intuition": "Akivaizdi tiesa, nuo kurios viskas prasideda.",
    "formal": "Pradinis teorijos teiginys, kurio teisingumu neabejojama ir kuris naudojamas kitoms teoremoms įrodyti.",
    "related": [
      "teorema"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "salyginis-teiginys": {
    "title": "Sąlyginis teiginys",
    "type": "concept",
    "definition": "Teiginys, turintis formą 'Jei A, tai B'.",
    "intuition": "Loginė grandinė: priežastis ir pasekmė.",
    "formal": "Teiginys, sudarytas iš prielaidos (sąlygos) ir išvados.",
    "related": [
      "isvada",
      "atvirkstinis-teiginys"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "isvada": {
    "title": "Išvada",
    "type": "concept",
    "definition": "Teiginio dalis, nusakanti rezultatą.",
    "intuition": "Tai, kas gaunasi pabaigoje.",
    "formal": "Sąlyginio teiginio dalis, einanti po žodžio 'tai'.",
    "related": [
      "salyginis-teiginys"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "atvirkstinis-teiginys": {
    "title": "Atvirkštinis teiginys",
    "type": "concept",
    "definition": "Teiginys, gautas sukeitus pradinio teiginio sąlygą su išvada.",
    "intuition": "Pradinis: Jei šlapia, tai lijo. Atvirkštinis: Jei lijo, tai šlapia.",
    "formal": "Jei turime teiginį A ⇒ B, tai jam atvirkštinis yra B ⇒ A.",
    "related": [
      "salyginis-teiginys"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "hipoteze": {
    "title": "Hipotezė",
    "type": "concept",
    "definition": "Moksliškai pagrįstas spėjimas.",
    "intuition": "Idėja, kurią dar reikia patikrinti.",
    "formal": "Mokslinė prielaida, kurios teisingumas dar nėra įrodytas faktais ar loginiais argumentais.",
    "related": [
      "teorema",
      "irodymas"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "irodymas": {
    "title": "Įrodymas",
    "type": "concept",
    "definition": "Loginis teiginio pagrindimas.",
    "intuition": "Kelias nuo to, ką žinome, iki naujos tiesos.",
    "formal": "Nuosekli teisingų teiginių seka, rodanti įrodomojo teiginio teisingumą.",
    "related": [
      "teorema",
      "aksioma"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "manymas-kad-atvirkstinis-visada-teisingas": {
    "title": "Manymas, kad atvirkštinis teiginys visada teisingas",
    "type": "mistake",
    "definition": "Mokiniai painioja loginę priklausomybę su abipusiu ryšiu.",
    "intuition": "Teigiama, kad jei pradinis teiginys teisingas, tai ir atvirkštinis privalo būti teisingas.",
    "formal": "Atvirkštinį teiginį reikia tikrinti iš naujo arba įrodyti atskirai.",
    "related": [
      "atvirkstinis-teiginys"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "painioja-salyga-su-isvada": {
    "title": "Sąlygos ir išvados painiojimas",
    "type": "mistake",
    "definition": "Sakinių struktūra gali būti sudėtinga, ne visada naudojamas žodis 'Jei'.",
    "intuition": "Neteisingai nurodoma, kas yra duota ir ką reikia rasti.",
    "formal": "Sąlyga yra tai, kuo remiamės, išvada - tai, kas seka iš sąlygos.",
    "related": [
      "salyginis-teiginys",
      "isvada"
    ],
    "topics": [
      "matematiniai-teiginiai-ir-irodymai"
    ]
  },
  "olimpiada-07-concept-logic": {
    "title": "Olimpiadinė logika",
    "type": "concept",
    "definition": "Gebėjimas taikyti netradicinius sprendimo būdus, matyti bendras struktūras ir konstruoti įrodymus.",
    "intuition": "Tai 'mąstymas už skaičių ribų' – kai ne tik sprendžiame, bet ir suprantame, kodėl sprendimas veikia.",
    "formal": "Dedukcinis ir abdukcinis mąstymas, taikomas matematinėms sistemoms analizuoti.",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "olimpiada-07-concept-method": {
    "title": "Įrodymo metodas",
    "type": "concept",
    "definition": "Loginis argumentavimas, užtikrinantis teiginio teisingumą visiems nagrinėjamiems atvejams.",
    "intuition": "Tai atsakymas į klausimą 'kodėl?', kuris galioja visada, o ne tik vienam pavyzdžiui.",
    "formal": "Aksiomomis ir anksčiau įrodytomis teoremomis pagrįsta teiginių seka.",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "olimpiada-07-concept-divisibility": {
    "title": "Algebrinis dalumas",
    "type": "concept",
    "definition": "Savybė, kai vienas daugianaris dalijasi iš kito be liekanos arba skaičius dalija reiškinio reikšmę.",
    "intuition": "Tai skaičių teorijos perkėlimas į algebrą.",
    "formal": "Reiškinys A dalus iš B, jei egzistuoja reiškinys Q, kad A = B * Q.",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "olimpiada-07-concept-proportion": {
    "title": "Proporcijos ir santykiai",
    "type": "concept",
    "definition": "Dydžių palyginimas per jų dalmenį ir dviejų santykių lygybė.",
    "intuition": "Dydžių tarpusavio ryšys: kiek kartų vienas didesnis už kitą.",
    "formal": "a/b = c/d, pagrindinė savybė: a*d = b*c.",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "f-square-sum": {
    "title": "Sumos kvadratas",
    "type": "formula",
    "definition": "Pagrindinė septintos klasės algebros formulė.",
    "intuition": "Pagrindinė septintos klasės algebros formulė.",
    "formal": "(a + b)^2 = a^2 + 2ab + b^2",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "f-diff-squares": {
    "title": "Kvadratų skirtumas",
    "type": "formula",
    "definition": "Leidžia išskaidyti skirtumą į sandaugą.",
    "intuition": "Leidžia išskaidyti skirtumą į sandaugą.",
    "formal": "a^2 - b^2 = (a-b)(a+b)",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "f-cube-sum": {
    "title": "Kubų suma",
    "type": "formula",
    "definition": "Naudinga sudėtingesniuose skaidymo uždaviniuose.",
    "intuition": "Naudinga sudėtingesniuose skaidymo uždaviniuose.",
    "formal": "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "m-square-error": {
    "title": "Sumos kvadrato ignoravimas",
    "type": "mistake",
    "definition": "Sumos kvadrato ignoravimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "m-inequality-minus": {
    "title": "Nelygybės ženklo klaida",
    "type": "mistake",
    "definition": "Nelygybės ženklo klaida",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "m-root-sum": {
    "title": "Šaknies skirstymas",
    "type": "mistake",
    "definition": "Šaknies skirstymas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "geo-concept-angles": {
    "title": "Gretutiniai ir kryžminiai kampai",
    "type": "concept",
    "definition": "Pagrindiniai tiesių sankirtos kampai.",
    "intuition": "Gretutiniai kampai sudaro tiesę ($180^\\circ$), kryžminiai yra lygūs kaip veidrodinis atspindys.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-concept-triangle-properties": {
    "title": "Trikampio elementų ryšiai",
    "type": "concept",
    "definition": "Kampų sumos ir kraštinių nelygybės taisyklės.",
    "intuition": "",
    "formal": "",
    "related": [
      "geo-concept-triangle-inequality"
    ],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-concept-congruence": {
    "title": "Trikampių lygumas",
    "type": "concept",
    "definition": "Sąlygos, kada du trikampiai yra identiški.",
    "intuition": "",
    "formal": "Trikampiai lygūs pagal SSS (kraštinė-kraštinė-kraštinė), SAS (kraštinė-kampas-kraštinė) arba ASA (kampas-kraštinė-kampas) požymius.",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-concept-area-method": {
    "title": "Plotų metodas",
    "type": "concept",
    "definition": "Geometrijos uždavinių sprendimas lyginant plotus.",
    "intuition": "Plotas yra invariantas – nesvarbu kaip jį skaičiuosi, rezultatas tas pats.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-concept-auxiliary-lines": {
    "title": "Papildomos konstrukcijos",
    "type": "concept",
    "definition": "Linijų ar taškų pridėjimas brėžinyje.",
    "intuition": "Kartais sprendimas slepiasi už linijos, kurios dar nėra.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-formula-triangle-area": {
    "title": "Trikampio ploto formulė",
    "type": "formula",
    "definition": "Pagrindinė formulė, susiejanti kraštinę ir į ją nuleistą aukštinę.",
    "intuition": "Pagrindinė formulė, susiejanti kraštinę ir į ją nuleistą aukštinę.",
    "formal": "$S = \\frac{1}{2} a h_a$",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-formula-exterior-angle": {
    "title": "Priekampio teorema",
    "type": "formula",
    "definition": "Priekampis lygus jam neprišlietų vidinių kampų sumai.",
    "intuition": "Priekampis lygus jam neprišlietų vidinių kampų sumai.",
    "formal": "$\\gamma_{ext} = \\alpha + \\beta$",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-formula-polygon-sum": {
    "title": "Daugiakampio kampų suma",
    "type": "formula",
    "definition": "Bet kokio iškilojo n-kampio vidinių kampų suma.",
    "intuition": "Bet kokio iškilojo n-kampio vidinių kampų suma.",
    "formal": "$\\sum = (n-2) \\cdot 180^\\circ$",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-mistake-triangle-inequality": {
    "title": "Trikampio nelygybės ignoravimas",
    "type": "mistake",
    "definition": "Trikampio nelygybės ignoravimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "geo-mistake-non-existent-case": {
    "title": "Netinkamas „akivaizdumo“ naudojimas",
    "type": "mistake",
    "definition": "Netinkamas „akivaizdumo“ naudojimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "sudeties-taisykle": {
    "title": "Sudeties taisykle",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-binomas",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "olimpiada-07-kombinatorika"
    ]
  },
  "daugybos-taisykle": {
    "title": "Daugybos taisykle",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-binomas",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "olimpiada-07-kombinatorika"
    ]
  },
  "dirichle-principas": {
    "title": "Dirichlė principas",
    "type": "concept",
    "definition": "Principas, teigiantis, kad jei objektų daugiau nei vietų jiems, bent vienoje vietoje bus daugiau nei vienas objektas.",
    "intuition": "Jei turime daugiau balandžių nei narvelių, bent viename narvelyje turės nutūpti bent du balandžiai.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika",
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "keliniai-savoka": {
    "title": "Kėliniai",
    "type": "concept",
    "definition": "Visi galimi $n$ elementų išrikiavimai.",
    "intuition": "Knygų lentynoje perstūmimas.",
    "formal": "$P_n = n!$.",
    "related": [
      "deriniai-savoka"
    ],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "deriniai-savoka": {
    "title": "Deriniai",
    "type": "concept",
    "definition": "Pasirinkimas $k$ elementų iš $n$, kai tvarka nesvarbi.",
    "intuition": "Grupės rinkimas.",
    "formal": "$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.",
    "related": [
      "gretiniai-savoka"
    ],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "pertvaru-metodas": {
    "title": "Pertvarų metodas",
    "type": "method",
    "definition": "Vienodų objektų skirstymas į skirtingas grupes.",
    "intuition": "Rutuliukai ir pliusai.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "papildinio-metodas": {
    "title": "Papildinio metodas",
    "type": "method",
    "definition": "Skaičiavimas atimant nepageidaujamus variantus iš visumos.",
    "intuition": "Viskas minus tai, ko nereikia.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "gretiniai-savoka": {
    "title": "Gretiniai Savoka",
    "type": "concept",
    "definition": "S?voka ?Gretiniai Savoka? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "invariantas-savoka": {
    "title": "Invariantas Savoka",
    "type": "concept",
    "definition": "S?voka ?Invariantas Savoka? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "n-faktorialas": {
    "title": "Faktorialas",
    "type": "formula",
    "definition": "Pirmųjų n natūraliųjų skaičių sandauga.",
    "intuition": "Pirmųjų n natūraliųjų skaičių sandauga.",
    "formal": "$n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n$",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "deriniu-formule": {
    "title": "Derinių formulė",
    "type": "formula",
    "definition": "Naudojama, kai tvarka nėra svarbi, tik pats elementų rinkinys.",
    "intuition": "Naudojama, kai tvarka nėra svarbi, tik pats elementų rinkinys.",
    "formal": "C_n^k = \\frac{n!}{k!(n-k)!}",
    "related": [
      "deriniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "gretiniu-formule": {
    "title": "Gretinių formulė",
    "type": "formula",
    "definition": "Naudojama, kai iš didesnės grupės renkame mažesnę ir tvarka yra reikšminga.",
    "intuition": "Naudojama, kai iš didesnės grupės renkame mažesnę ir tvarka yra reikšminga.",
    "formal": "A_n^k = \\frac{n!}{(n-k)!}",
    "related": [
      "gretiniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "dvigubas-skaiciavimas": {
    "title": "Dvigubas skaičiavimas (netyčinis)",
    "type": "mistake",
    "definition": "Dvigubas skaičiavimas (netyčinis)",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "eiles-tvarkos-ignoravimas": {
    "title": "Tvarkos ignoravimas ten, kur ji svarbi",
    "type": "mistake",
    "definition": "Tvarkos ignoravimas ten, kur ji svarbi",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "dalumas": {
    "title": "Dalumas",
    "type": "concept",
    "definition": "Sveikojo skaičiaus savybė dalytis iš kito skaičiaus be liekanos.",
    "intuition": "",
    "formal": "a dalijasi iš b, jei egzistuoja k, kad a = bk.",
    "related": [
      "pirminis-skaicius"
    ],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "dbd-savoka": {
    "title": "DBD (Didžiausias bendras daliklis)",
    "type": "concept",
    "definition": "Didžiausias natūralusis skaičius, kuris dalija du ar daugiau duotų skaičių.",
    "intuition": "Didžiausias bendras „matas“, telpantis į abu skaičius.",
    "formal": "d = DBD(a, b) jei d|a, d|b ir bet kuriam c, tokiam kad c|a ir c|b, galioja c <= d.",
    "related": [
      "mbk-savoka"
    ],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "mbk-savoka": {
    "title": "MBK (Mažiausias bendras kartotinis)",
    "type": "concept",
    "definition": "Mažiausias natūralusis skaičius, kuris dalijasi iš visų duotų skaičių.",
    "intuition": "Mažiausias skaičius, kuriame „telpa“ abu duoti skaičiai.",
    "formal": "m = MBK(a, b) jei a|m, b|m ir bet kuriam n, tokiam kad a|n ir b|n, galioja m <= n.",
    "related": [
      "dbd-savoka"
    ],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "skaitmenu-suma-savoka": {
    "title": "Skaitmenų suma",
    "type": "concept",
    "definition": "Visų skaičių sudarančių skaitmenų aritmetinė suma.",
    "intuition": "Kiek gautume sudėję visus skaičiaus skaitmenis.",
    "formal": "S(n) = \\sum_{i=0}^k d_i, kur n = \\sum_{i=0}^k d_i 10^i.",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "paritetas-savoka": {
    "title": "Paritetas (Lyginumas)",
    "type": "concept",
    "definition": "Sveikojo skaičiaus savybė būti lyginiam arba nelyginiam.",
    "intuition": "Ar skaičius dalijasi iš 2, ar ne.",
    "formal": "n lyginis, jei n = 2k; n nelyginis, jei n = 2k + 1.",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "modulinė-aritmetika-savoka": {
    "title": "Modulinė aritmetika",
    "type": "concept",
    "definition": "Skaičiavimų sistema, kurioje skaičiai „apsisuka“ pasiekę tam tikrą vertę (modulį).",
    "intuition": "Darbas su liekanomis (kaip laikrodyje).",
    "formal": "a \\equiv b \\pmod m jei m | (a-b).",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "dalumo-is-9-pozymis": {
    "title": "Dalumo iš 9 požymis",
    "type": "formula",
    "definition": "Skaičius ir jo skaitmenų suma duoda tą pačią liekaną dalijant iš 9. Jei S(n) dalijasi iš 9, tai ir n dalijasi iš 9.",
    "intuition": "Skaičius ir jo skaitmenų suma duoda tą pačią liekaną dalijant iš 9. Jei S(n) dalijasi iš 9, tai ir n dalijasi iš 9.",
    "formal": "n \\equiv S(n) \\pmod 9",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "dalumo-is-11-pozymis": {
    "title": "Dalumo iš 11 požymis",
    "type": "formula",
    "definition": "Skaičius dalijasi iš 11 tada ir tik tada, kai jo skaitmenų einančių lyginiuose ir nelyginiuose vietose sumų skirtumas dalijasi iš 11.",
    "intuition": "Skaičius dalijasi iš 11 tada ir tik tada, kai jo skaitmenų einančių lyginiuose ir nelyginiuose vietose sumų skirtumas dalijasi iš 11.",
    "formal": "n \\equiv \\sum (-1)^i d_i \\pmod{11}",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "dbd-mbk-sarysis": {
    "title": "DBD ir MBK sąryšis",
    "type": "formula",
    "definition": "Dviejų skaičių didžiausio bendro daliklio ir mažiausio bendro kartotinio sandauga lygi tų skaičių modulių sandaugai.",
    "intuition": "Dviejų skaičių didžiausio bendro daliklio ir mažiausio bendro kartotinio sandauga lygi tų skaičių modulių sandaugai.",
    "formal": "\\text{DBD}(a, b) \\cdot \\text{MBK}(a, b) = |a \\cdot b|",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "izambine": {
    "title": "Izambine",
    "type": "concept",
    "definition": "S?voka ?Izambine? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "lygiasonis-trikampis": {
    "title": "Lygiasonis Trikampis",
    "type": "concept",
    "definition": "S?voka ?Lygiasonis Trikampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "lygiakrastis-trikampis": {
    "title": "Lygiakrastis Trikampis",
    "type": "concept",
    "definition": "S?voka ?Lygiakrastis Trikampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "staciųjų-trikampiu-savybes": {
    "title": "Staciųjų Trikampiu Savybes",
    "type": "concept",
    "definition": "S?voka ?Staciųjų Trikampiu Savybes? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "statinis": {
    "title": "Statinis",
    "type": "concept",
    "definition": "S?voka ?Statinis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "pitagoro-skaiciai": {
    "title": "Pitagoro Skaiciai",
    "type": "concept",
    "definition": "S?voka ?Pitagoro Skaiciai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trikampiai-ir-pitagoro-teorema"
    ]
  },
  "vienanaris": {
    "title": "Vienanaris",
    "type": "concept",
    "definition": "Reiškinys, sudarytas iš skaičių ir raidžių sandaugos.",
    "intuition": "Tai viena matematinė 'plyta'.",
    "formal": "Vienanaris yra skaičių, kintamųjų ir jų laipsnių sandauga.",
    "related": [
      "daugianaris",
      "koeficientas"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "daugianaris": {
    "title": "Daugianaris",
    "type": "concept",
    "definition": "Kelių vienanarių algebrainė suma.",
    "intuition": "Matematinė 'siena', sumūryta iš vienanarių.",
    "formal": "Daugianaris yra baigtinė vienanarių suma.",
    "related": [
      "vienanaris",
      "laipsnis"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "panasus-nariai": {
    "title": "Panašūs nariai",
    "type": "concept",
    "definition": "Vienanariai su vienoda raidine dalimi.",
    "intuition": "Tai tos pačios rūšies daiktai (pvz., visi obuoliai).",
    "formal": "Vienanariai, kurių kintamieji ir jų laipsniai sutampa.",
    "related": [
      "daugianaris"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "greitosios-daugybos-formules": {
    "title": "Greitosios Daugybos Formules",
    "type": "concept",
    "definition": "S?voka ?Greitosios Daugybos Formules? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "skaidymas-dauginamaisiais": {
    "title": "Skaidymas Dauginamaisiais",
    "type": "concept",
    "definition": "S?voka ?Skaidymas Dauginamaisiais? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "olimpiada-08-algebra",
      "racionaliosios-lygtys"
    ]
  },
  "sumos-kvadratas": {
    "title": "Sumos kvadratas",
    "type": "formula",
    "definition": "Sumos kvadratas yra lygus narių kvadratų sumai, pridėjus dvigubą jų sandaugą.",
    "intuition": "Sumos kvadratas yra lygus narių kvadratų sumai, pridėjus dvigubą jų sandaugą.",
    "formal": "(a + b)^2 = a^2 + 2ab + b^2",
    "related": [
      "greitosios-daugybos-formules"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "skirtumo-kvadratas": {
    "title": "Skirtumo kvadratas",
    "type": "formula",
    "definition": "Skirtumo kvadratas skiriasi nuo sumos kvadrato tik ženklu prieš dvigubą sandaugą.",
    "intuition": "Skirtumo kvadratas skiriasi nuo sumos kvadrato tik ženklu prieš dvigubą sandaugą.",
    "formal": "(a - b)^2 = a^2 - 2ab + b^2",
    "related": [
      "greitosios-daugybos-formules"
    ],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "kvadratu-skirtumas": {
    "title": "Kvadratų skirtumas",
    "type": "formula",
    "definition": "Viena dažniausiai naudojamų skaidymo formulių.",
    "intuition": "Viena dažniausiai naudojamų skaidymo formulių.",
    "formal": "$a^2 - b^2 = (a-b)(a+b)$",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "kvadrato-pamirsymas": {
    "title": "Pamirštama pakelti koeficientą kvadratu",
    "type": "mistake",
    "definition": "Mokinys galvoja, kad kvadratas taikomas tik raidei.",
    "intuition": "$(2x)^2 = 2x^2$",
    "formal": "Kvadratu keliami visi vienanario daugikliai.",
    "related": [],
    "topics": [
      "daugianariai-ir-greitosios-daugybos-formules"
    ]
  },
  "stacioji-prizme": {
    "title": "Stačioji prizmė",
    "type": "concept",
    "definition": "Kūnas su dviem lygiais pagrindais ir statmenomis šoninėmis sienomis.",
    "intuition": "Dėžutė arba plyta.",
    "formal": "Daugiasienis, kurio du pagrindai yra lygūs daugiakampiai, o šoninės briaunos statmenos pagrindams.",
    "related": [
      "turis",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "taisyklingoji-piramide": {
    "title": "Taisyklingoji piramide",
    "type": "concept",
    "definition": "Piramidė su taisyklinguoju pagrindu ir į jo centrą projektuojama viršūne.",
    "intuition": "Garsiosios Egipto piramidės.",
    "formal": "Piramidė, kurios pagrindas yra taisyklingasis daugiakampis, o visos šoninės briaunos lygios.",
    "related": [
      "apotema",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "turis": {
    "title": "Turis",
    "type": "concept",
    "definition": "S?voka ?Turis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "ritinys": {
    "title": "Ritinys",
    "type": "concept",
    "definition": "Sukinys, gaunamas sukant stačiakampį.",
    "intuition": "Kaip konservų skardinė ar vamzdis.",
    "formal": "Kūnas, apribotas sukimosi paviršiumi ir dviem lygiagrečiomis plokštumomis.",
    "related": [
      "asius-pjuvis",
      "turis"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "kugis": {
    "title": "Kūgis",
    "type": "concept",
    "definition": "Sukinys, gaunamas sukant statųjį trikampį.",
    "intuition": "Kaip ledų vaflis ar gimtadienio kepurė.",
    "formal": "Kūnas, gautas sukant statųjį trikampį aplink vieną jo statinį.",
    "related": [
      "sudaromoji",
      "turis"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "sfera": {
    "title": "Sfera",
    "type": "concept",
    "definition": "S?voka ?Sfera? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "pavirsiaus-plotas": {
    "title": "Pavirsiaus Plotas",
    "type": "concept",
    "definition": "S?voka ?Pavirsiaus Plotas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "apotema": {
    "title": "Apotema",
    "type": "concept",
    "definition": "Taisyklingosios piramidės šoninės sienos aukštinė.",
    "intuition": "Kelias nuo viršūnės iki pagrindo briaunos vidurio per paviršių.",
    "formal": "Taisyklingosios piramidės šoninės sienos (lygiašonio trikampio) aukštinė.",
    "related": [
      "piramide"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai",
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "sudaromoji": {
    "title": "Sudaromoji",
    "type": "concept",
    "definition": "S?voka ?Sudaromoji? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "aukstine": {
    "title": "Aukstine",
    "type": "concept",
    "definition": "S?voka ?Aukstine? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "prizmes-turio-formule": {
    "title": "Prizmės tūris",
    "type": "formula",
    "definition": "Pagrindo plotą dauginame iš kūno aukščio.",
    "intuition": "Pagrindo plotą dauginame iš kūno aukščio.",
    "formal": "V = S_{\\text{pagr}} \\cdot H",
    "related": [
      "stacioji-prizme",
      "turis"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "piramides-turio-formule": {
    "title": "Piramidės tūris",
    "type": "formula",
    "definition": "Piramidės tūris sudaro tik trečdalį tokio pat pagrindo ir aukščio prizmės tūrio.",
    "intuition": "Piramidės tūris sudaro tik trečdalį tokio pat pagrindo ir aukščio prizmės tūrio.",
    "formal": "V = \\frac{1}{3} S_{\\text{pagr}} \\cdot H",
    "related": [
      "taisyklingoji-piramide",
      "turis"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "painioja-aukstine-su-apotema": {
    "title": "Painioja aukštinę su apotema",
    "type": "mistake",
    "definition": "Abi yra 'aukštinės', bet viena - kūno, kita - sienos.",
    "intuition": "Tūrio formulėje naudoja apotemą h_a vietoj aukštinės H.",
    "formal": "Tūriui visada reikia statmenos kūno aukštinės H, einančios į pagrindo centrą.",
    "related": [
      "aukstine",
      "apotema"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "valiutos-kursas": {
    "title": "Valiutos kursas",
    "type": "concept",
    "definition": "Vienos valiutos kaina kita valiuta.",
    "intuition": "Tai 'kaina', už kurią perkame kitos šalies pinigus.",
    "formal": "Santykinis vienos šalies piniginio vieneto kiekis, tenkantis kitos šalies piniginiam vienetui.",
    "related": [
      "apvalinimas"
    ],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "sudetines-palukanos": {
    "title": "Sudetines Palukanos",
    "type": "concept",
    "definition": "S?voka ?Sudetines Palukanos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "kreditas": {
    "title": "Kreditas",
    "type": "concept",
    "definition": "S?voka ?Kreditas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "lizingas": {
    "title": "Lizingas",
    "type": "concept",
    "definition": "S?voka ?Lizingas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "infliacija": {
    "title": "Infliacija",
    "type": "concept",
    "definition": "S?voka ?Infliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "sudetiniu-palukanu-formule": {
    "title": "Sudėtinių palūkanų formulė",
    "type": "formula",
    "definition": "Apskaičiuoja galutinę sukauptą sumą po t laikotarpių.",
    "intuition": "Apskaičiuoja galutinę sukauptą sumą po t laikotarpių.",
    "formal": "S_t = S_0 (1 + p)^t",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "pamirstas-komisinis-mokestis": {
    "title": "Pamirštamas valiutos keitimo mokestis",
    "type": "mistake",
    "definition": "Užmirštama, kad bankas pasilieka sau dalį pinigų už paslaugą.",
    "intuition": "Skaičiuojama tik pagal kursą.",
    "formal": "Pirmiausia pakeiskite valiutą, tada atimkite mokestį (arba atvirkščiai, priklausomai nuo sutarties).",
    "related": [],
    "topics": [
      "finansiniai-skaiciavimai-8"
    ]
  },
  "histograma": {
    "title": "Histograma",
    "type": "concept",
    "definition": "Diagrama grupuotiems duomenims vaizduoti.",
    "intuition": "Stulpeliai be tarpų, rodantys duomenų pasiskirstymą.",
    "formal": "Statistinė diagrama, kurioje plotai virš intervalų yra proporcingi tų intervalų dažniams.",
    "related": [
      "intervalinis-grupavimas"
    ],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "kvartiliai": {
    "title": "Kvartiliai",
    "type": "concept",
    "definition": "Reikšmės, dalijančios duomenis į keturias dalis.",
    "intuition": "Matematiniai 'peiliai', supjaustantys duomenų eilę į 4 lygius ketvirčius.",
    "formal": "Kintamojo reikšmės, dalijančios surikiuotą imtį į keturias lygias dalis.",
    "related": [
      "mediana",
      "interkvartilinis-plotis"
    ],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "intervalinis-grupavimas": {
    "title": "Intervalinis Grupavimas",
    "type": "concept",
    "definition": "S?voka ?Intervalinis Grupavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "sukauptasis-daznis": {
    "title": "Sukauptasis Daznis",
    "type": "concept",
    "definition": "S?voka ?Sukauptasis Daznis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "interkvartilinis-plotis": {
    "title": "Interkvartilinis Plotis",
    "type": "concept",
    "definition": "S?voka ?Interkvartilinis Plotis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "dezute-su-usais": {
    "title": "Dezute Su Usais",
    "type": "concept",
    "definition": "S?voka ?Dezute Su Usais? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "interkvartilinio-plocio-formule": {
    "title": "Interkvartilinis plotis",
    "type": "formula",
    "definition": "Apskaičiuoja vidurinių 50 % duomenų sklaidą.",
    "intuition": "Apskaičiuoja vidurinių 50 % duomenų sklaidą.",
    "formal": "IQR = Q_3 - Q_1",
    "related": [
      "kvartiliai"
    ],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "painioja-histograma-su-stulpeline": {
    "title": "Braižo tarpus tarp stulpelių histogramoje",
    "type": "mistake",
    "definition": "Supainiojama su paprasta stulpeline diagrama.",
    "intuition": "Stulpeliai atskirti vienas nuo kito.",
    "formal": "Kadangi duomenys yra tęstiniai (pvz., laikas, svoris), stulpeliai turi liestis.",
    "related": [],
    "topics": [
      "histogramos-kvartiliai-ir-sukauptasis-daznis"
    ]
  },
  "vijeto-teorema": {
    "title": "Vijeto teorema",
    "type": "theorem",
    "definition": "Ryšys tarp lygties koeficientų ir jos šaknų.",
    "intuition": "Būdas patikrinti šaknis jas sudedant ir padauginant.",
    "formal": "Kvadratinės lygties šaknų suma lygi -b/a, o sandauga c/a.",
    "related": [
      "saknys",
      "kvadratinis-trinaris"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys",
      "olimpiada-08-algebra"
    ]
  },
  "diofanto-lygtys": {
    "title": "Diofanto lygtys",
    "type": "concept",
    "definition": "Lygtys sveikaisiais skaičiais.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "am-gm-nelygybe": {
    "title": "AM-GM nelygybė",
    "type": "method",
    "definition": "Aritmetinis vidurkis >= Geometrinis vidurkis.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "modulis-intervalai": {
    "title": "Modulis ir intervalai",
    "type": "method",
    "definition": "Lygčių su moduliais sprendimo būdas.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "simetriniai-reiskiniai": {
    "title": "Simetriniai Reiskiniai",
    "type": "concept",
    "definition": "S?voka ?Simetriniai Reiskiniai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "olimpiada-08-concept-logic": {
    "title": "Olimpiada 08 Concept Logic",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 08 Concept Logic? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda spr?sti susijusius u?davinius.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "vijeto-teorema-kvadratine": {
    "title": "Vijeto teorema kvadratinei lygčiai",
    "type": "formula",
    "definition": "Sieja kvadratinės lygties šaknis su koeficientais.",
    "intuition": "Sieja kvadratinės lygties šaknis su koeficientais.",
    "formal": "$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}$",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "am-gm-formule": {
    "title": "AM-GM nelygybė dviems skaičiams",
    "type": "formula",
    "definition": "Galioja neneigiamiems a ir b.",
    "intuition": "Galioja neneigiamiems a ir b.",
    "formal": "$\\frac{a+b}{2} \\ge \\sqrt{ab}$",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "am-gm-neigiami-skaiciai": {
    "title": "AM-GM taikymas neigiamiems skaičiams",
    "type": "mistake",
    "definition": "AM-GM taikymas neigiamiems skaičiams",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "saknu-praradimas-dalijant": {
    "title": "Šaknų praradimas dalijant",
    "type": "mistake",
    "definition": "Šaknų praradimas dalijant",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "tasko-galia": {
    "title": "Taško galia",
    "type": "concept",
    "definition": "Atkarpų sandaugos pastovumas per tašką einančioms tiesėms apskritime.",
    "intuition": "Matas, rodantis taško nuotolį nuo apskritimo geometrine prasme.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "cevos-teorema": {
    "title": "Čevos teorema",
    "type": "theorem",
    "definition": "Sąlyga, kada trys čevianės susikerta viename taške.",
    "intuition": "",
    "formal": "Atkarpų santykių sandauga lygi 1.",
    "related": [
      "menelajo-teorema"
    ],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "menelajo-teorema": {
    "title": "Menelajo Teorema",
    "type": "concept",
    "definition": "S?voka ?Menelajo Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija",
      "olimpiada-12-geometrija"
    ]
  },
  "ptolemejo-teorema": {
    "title": "Ptolemejo Teorema",
    "type": "concept",
    "definition": "S?voka ?Ptolemejo Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija",
      "olimpiada-12-geometrija"
    ]
  },
  "ibreztiniai-keturkampiai": {
    "title": "Įbrėžtinis keturkampis",
    "type": "concept",
    "definition": "Keturkampis, kurio visos viršūnės yra ant vieno apskritimo.",
    "intuition": "Kampų priešingose pusėse suma yra $180^\\circ$.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "oilerio-tiese": {
    "title": "Oilerio tiesė",
    "type": "concept",
    "definition": "Tiesė, jungianti ortocentrą, centroidą ir apibrėžtinio apskritimo centrą.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "herono-formule": {
    "title": "Herono formulė",
    "type": "formula",
    "definition": "Plotas per kraštines.",
    "intuition": "Plotas per kraštines.",
    "formal": "$S = \\sqrt{p(p-a)(p-b)(p-c)}$",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "apibreztinis-spindulys-R": {
    "title": "Apibrėžtinio apskritimo spindulys",
    "type": "formula",
    "definition": "Ryšys tarp ploto, kraštinių ir spindulio.",
    "intuition": "Ryšys tarp ploto, kraštinių ir spindulio.",
    "formal": "$R = \\frac{abc}{4S}$",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "tasko-galios-formule": {
    "title": "Taško galia",
    "type": "formula",
    "definition": "Taško galia per atstumą iki centro d ir spindulį R.",
    "intuition": "Taško galia per atstumą iki centro d ir spindulį R.",
    "formal": "$P = d^2 - R^2$",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "menelajo-tvarkos-klaida": {
    "title": "Neteisinga Menelajo viršūnių tvarka",
    "type": "mistake",
    "definition": "Neteisinga Menelajo viršūnių tvarka",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "netinkamas-keturkampio-ibreztinumas": {
    "title": "Prielaida apie keturkampio įbrėžtinumą",
    "type": "mistake",
    "definition": "Prielaida apie keturkampio įbrėžtinumą",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "pie-principas": {
    "title": "Įtraukimo-išskyrimo principas",
    "type": "method",
    "definition": "Aibių sąjungos dydžio skaičiavimo taisyklė.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "stars-and-bars": {
    "title": "Stars and Bars",
    "type": "method",
    "definition": "Metodas vienodiems objektams skirstyti.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "grafu-teorija": {
    "title": "Grafų teorija",
    "type": "concept",
    "definition": "Struktūrų su viršūnėmis ir briaunomis tyrimas.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "matematine-indukcija": {
    "title": "Matematinė indukcija",
    "type": "method",
    "definition": "Įrodymo būdas teiginiams apie visus natūraliuosius skaičius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "rekurentines-sekos": {
    "title": "Rekurentinės sekos",
    "type": "concept",
    "definition": "Sekos, kurių nariai apibrėžiami per ankstesnius narius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "dirichle-principas-isplestas": {
    "title": "Dirichle Principas Isplestas",
    "type": "concept",
    "definition": "S?voka ?Dirichle Principas Isplestas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "pie-formule-3-aibems": {
    "title": "PIE 3 aibėms",
    "type": "formula",
    "definition": "S1 - aibių suma, S2 - porinių sankirtų suma, S3 - bendra sankirta.",
    "intuition": "S1 - aibių suma, S2 - porinių sankirtų suma, S3 - bendra sankirta.",
    "formal": "$|A \\cup B \\cup C| = S_1 - S_2 + S_3$",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "stars-and-bars-formule": {
    "title": "Stars and Bars (neneigiamiems)",
    "type": "formula",
    "definition": "n objektų skirstymas k gavėjų.",
    "intuition": "n objektų skirstymas k gavėjų.",
    "formal": "$\\binom{n+k-1}, {k-1}$",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "oilerio-formule-grafams": {
    "title": "Oilerio formulė",
    "type": "formula",
    "definition": "Ryšys tarp viršūnių, briaunų ir sričių plokščiajame grafe.",
    "intuition": "Ryšys tarp viršūnių, briaunų ir sričių plokščiajame grafe.",
    "formal": "$V - E + F = 2$",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "pie-sankirtu-zenklai": {
    "title": "Klaidingi ženklai PIE formulėje",
    "type": "mistake",
    "definition": "Klaidingi ženklai PIE formulėje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "indukcijos-bazes-trukumas": {
    "title": "Bazės nepatikrinimas indukcijoje",
    "type": "mistake",
    "definition": "Bazės nepatikrinimas indukcijoje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "euklido-algoritmas": {
    "title": "Euklido algoritmas",
    "type": "method",
    "definition": "DBD radimo būdas per liekanas.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "ferma-mazoji-teorema": {
    "title": "Ferma mažoji teorema",
    "type": "theorem",
    "definition": "Sąryšis tarp pirminio p ir a^(p-1).",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "kinu-liekanu-teorema": {
    "title": "Kinų liekanų teorema",
    "type": "theorem",
    "definition": "Sprendinių egzistavimas kongruencijų sistemoms.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "oilerio-funkcija": {
    "title": "Oilerio funkcija",
    "type": "concept",
    "definition": "Tarpusavyje pirminių skaičių kiekis.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "vilsono-teorema": {
    "title": "Vilsono teorema",
    "type": "theorem",
    "definition": "Faktorialo liekana moduliu pirminis p.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "skaiciavimo-sistemos": {
    "title": "Skaiciavimo Sistemos",
    "type": "concept",
    "definition": "S?voka ?Skaiciavimo Sistemos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "diofanto-lygtys-nt": {
    "title": "Diofanto Lygtys Nt",
    "type": "concept",
    "definition": "S?voka ?Diofanto Lygtys Nt? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "bezout-tapatybe": {
    "title": "Bezout tapatybė",
    "type": "formula",
    "definition": "Tiesinė kombinacija sveikaisiais skaičiais.",
    "intuition": "Tiesinė kombinacija sveikaisiais skaičiais.",
    "formal": "$ax + by = \\text{dbd}(a, b)$",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "oilerio-formule-nt": {
    "title": "Oilerio funkcija",
    "type": "formula",
    "definition": "Skaičiuoja skaičius iki n, neturinčius bendrų daliklių su n.",
    "intuition": "Skaičiuoja skaičius iki n, neturinčius bendrų daliklių su n.",
    "formal": "$\\phi(n) = n \\prod_{p|n} (1 - \\frac{1}{p})$",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "vilsono-formule": {
    "title": "Vilsono formulė",
    "type": "formula",
    "definition": "Galioja tik pirminiams skaičiams p.",
    "intuition": "Galioja tik pirminiams skaičiams p.",
    "formal": "$(p-1)! \\equiv -1 \\pmod p$",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "dalikliu-skaicius-formule": {
    "title": "Daliklių skaičiaus formulė",
    "type": "formula",
    "definition": "Suskaičiuoja visus natūraliuosius daliklius.",
    "intuition": "Suskaičiuoja visus natūraliuosius daliklius.",
    "formal": "$\\tau(n) = \\prod (e_i + 1)$",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "liekanu-daugybos-klaida": {
    "title": "Tiesioginė liekanų suma sandaugai",
    "type": "mistake",
    "definition": "Tiesioginė liekanų suma sandaugai",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "pirminio-skaiciaus-prielaida": {
    "title": "Ferma teoremos taikymas sudėtiniam moduliui",
    "type": "mistake",
    "definition": "Ferma teoremos taikymas sudėtiniam moduliui",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "panasumas": {
    "title": "Panašumas",
    "type": "concept",
    "definition": "Figūrų savybė turėti vienodą formą.",
    "intuition": "Tai tarsi tas pats objektas, tik padidintas arba sumažintas.",
    "formal": "Dvi figūros yra panašios, jei jų atitinkami kampai lygūs, o atitinkamos kraštinės proporcingos.",
    "related": [
      "panasumo-koeficientas",
      "mastelis"
    ],
    "topics": [
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "panasumo-koeficientas": {
    "title": "Panasumo Koeficientas",
    "type": "concept",
    "definition": "S?voka ?Panasumo Koeficientas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai",
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "atitinkamos-krastines": {
    "title": "Atitinkamos Krastines",
    "type": "concept",
    "definition": "S?voka ?Atitinkamos Krastines? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "trikampiu-panasumo-pozymiai": {
    "title": "Trikampiu Panasumo Pozymiai",
    "type": "concept",
    "definition": "S?voka ?Trikampiu Panasumo Pozymiai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai",
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "proporcingos-atkarpos": {
    "title": "Proporcingos Atkarpos",
    "type": "concept",
    "definition": "S?voka ?Proporcingos Atkarpos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "panasumo-santykis": {
    "title": "Kraštinių santykis",
    "type": "formula",
    "definition": "Atitinkamų kraštinių ilgių santykis yra pastovus ir lygus panašumo koeficientui.",
    "intuition": "Atitinkamų kraštinių ilgių santykis yra pastovus ir lygus panašumo koeficientui.",
    "formal": "\\frac{a_1}{a_2} = k",
    "related": [
      "panasumo-koeficientas"
    ],
    "topics": [
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "plotu-santykis": {
    "title": "Plotu Santykis",
    "type": "concept",
    "definition": "S?voka ?Plotu Santykis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai",
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "pamirsta-k-kvadratu-plotams": {
    "title": "Pamiršta pakelti koeficientą kvadratu skaičiuojant plotus",
    "type": "mistake",
    "definition": "Inercijos dėlei taikomas tas pats koeficientas kaip ir kraštinėms.",
    "intuition": "S2 = k * S1",
    "formal": "Plotas yra dviejų matmenų sandauga, todėl abi kraštinės padidėja k kartų, o plotas - k * k kartų.",
    "related": [],
    "topics": [
      "panasus-trikampiai-ir-talio-teorema"
    ]
  },
  "vidurio-linija": {
    "title": "Trikampio vidurio linija",
    "type": "concept",
    "definition": "Atkarpa, jungianti trikampio dviejų kraštinių vidurio taškus.",
    "intuition": "",
    "formal": "Atkarpa DE, kur D ir E yra kraštinių AB ir BC vidurio taškai.",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "trapecijos-vidurio-linija": {
    "title": "Trapecijos vidurio linija",
    "type": "concept",
    "definition": "Atkarpa, jungianti trapecijos šoninių kraštinių vidurio taškus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "izambines-pusiaukrastine": {
    "title": "Izambines Pusiaukrastine",
    "type": "concept",
    "definition": "S?voka ?Izambines Pusiaukrastine? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "staciojo-trikampio-savybes": {
    "title": "Staciojo Trikampio Savybes",
    "type": "concept",
    "definition": "S?voka ?Staciojo Trikampio Savybes? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "geometrinis-vidurkis": {
    "title": "Geometrinis Vidurkis",
    "type": "concept",
    "definition": "S?voka ?Geometrinis Vidurkis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "trikampio-vidurio-linijos-formule": {
    "title": "Trikampio vidurio linijos formulė",
    "type": "formula",
    "definition": "Trikampio vidurio linijos formulė",
    "intuition": "Trikampio vidurio linijos formulė",
    "formal": "m = \\frac{1}{2} a",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "trapecijos-vidurio-linijos-formule": {
    "title": "Trapecijos vidurio linijos formulė",
    "type": "formula",
    "definition": "Trapecijos vidurio linijos formulė",
    "intuition": "Trapecijos vidurio linijos formulė",
    "formal": "m = \\frac{a+b}{2}",
    "related": [],
    "topics": [
      "pitagoro-teorema-ir-vidurio-linijos"
    ]
  },
  "iracionalieji-skaiciai": {
    "title": "Iracionalieji skaičiai",
    "type": "concept",
    "definition": "Skaičiai, kurių negalima užrašyti kaip m/n santykio.",
    "intuition": "Tai skaičiai, kurių dešimtainė uodega tęsiasi amžinai be jokio pasikartojančio rašto.",
    "formal": "I = R \\ Q",
    "related": [
      "racionalieji-skaiciai",
      "realieji-skaiciai"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "realieji-skaiciai": {
    "title": "Realieji skaičiai",
    "type": "concept",
    "definition": "Visi racionalieji ir iracionalieji skaičiai.",
    "intuition": "Tai visi skaičiai, kurie egzistuoja ant begalinės skaičių tiesės.",
    "formal": "R = Q ∪ I",
    "related": [
      "iracionalieji-skaiciai",
      "racionalieji-skaiciai"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "kubine-saknis": {
    "title": "Kubinė šaknis",
    "type": "concept",
    "definition": "Veiksmas, atvirkštinis kėlimui kubu.",
    "intuition": "Koks skaičius pakeltas trečiuoju laipsniu duoda šį rezultatą?",
    "formal": "∛a = b <=> b³ = a",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "posaknis": {
    "title": "Pošaknis",
    "type": "concept",
    "definition": "Reiškinys arba skaičius po šaknies ženklu.",
    "intuition": "Tai „namelis“, kuriame sėdi skaičius, iš kurio traukiame šaknį.",
    "formal": "a išraiškoje √a",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "skaiciu-aibiu-sankirta": {
    "title": "Skaiciu Aibiu Sankirta",
    "type": "concept",
    "definition": "S?voka ?Skaiciu Aibiu Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "skaiciu-aibiu-sajunga": {
    "title": "Skaiciu Aibiu Sajunga",
    "type": "concept",
    "definition": "S?voka ?Skaiciu Aibiu Sajunga? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "kvadratines-saknies-savybe-daugyba": {
    "title": "Sandaugos kvadratinė šaknis",
    "type": "formula",
    "definition": "Sandaugos šaknis lygi jos daugiklių šaknų sandaugai.",
    "intuition": "Sandaugos šaknis lygi jos daugiklių šaknų sandaugai.",
    "formal": "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "kvadratines-saknies-savybe-dalyba": {
    "title": "Santykio kvadratinė šaknis",
    "type": "formula",
    "definition": "Dalmens šaknis lygi dalinio ir daliklio šaknų dalmeniui.",
    "intuition": "Dalmens šaknis lygi dalinio ir daliklio šaknų dalmeniui.",
    "formal": "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "kvadratines-saknies-kvadratas": {
    "title": "Šaknies kėlimas kvadratu",
    "type": "formula",
    "definition": "Kėlimas kvadratu panaikina kvadratinę šaknį.",
    "intuition": "Kėlimas kvadratu panaikina kvadratinę šaknį.",
    "formal": "(\\sqrt{a})^2 = a",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "skaiciaus-kvadrato-saknis": {
    "title": "Kvadrato šaknis",
    "type": "formula",
    "definition": "Ištraukę šaknį iš kvadrato, gauname skaičiaus modulį (absoliučiąją vertę).",
    "intuition": "Ištraukę šaknį iš kvadrato, gauname skaičiaus modulį (absoliučiąją vertę).",
    "formal": "\\sqrt{a^2} = |a|",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "kubines-saknies-savybe-daugyba": {
    "title": "Sandaugos kubinė šaknis",
    "type": "formula",
    "definition": "Kubinės šaknies savybė sandaugai galioja visiems realiesiems skaičiams.",
    "intuition": "Kubinės šaknies savybė sandaugai galioja visiems realiesiems skaičiams.",
    "formal": "\\sqrt[3]{a \\cdot b} = \\sqrt[3]{a} \\cdot \\sqrt[3]{b}",
    "related": [
      "kubine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "neigiamas-posaknis-kvadratineje-saknyje": {
    "title": "Bandymai traukti kvadratinę šaknį iš neigiamo skaičiaus",
    "type": "mistake",
    "definition": "Mokiniai supainioja su kubine šaknimi arba pamiršta, kad kvadratas visada teigiamas.",
    "intuition": "√(-9) = -3 arba √(-9) = 3",
    "formal": "Realiųjų skaičių aibėje kvadratinė šaknis iš neigiamo skaičiaus neturi prasmės.",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "saknu-sudetis-be-bendro-daugyklio": {
    "title": "Šaknų sudėtis sudedant pošaknius",
    "type": "mistake",
    "definition": "Bandoma taikyti sandaugos taisyklę sudėčiai.",
    "intuition": "√2 + √3 = √5",
    "formal": "Galima sudėti tik tokias pačias šaknis: 2√2 + 3√2 = 5√2.",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "saknies-traukimas-is-atskiru-demenu": {
    "title": "Šaknies traukimas iš sumos narių atskirai",
    "type": "mistake",
    "definition": "Netinkamas sandaugos savybės taikymas sumai.",
    "intuition": "√(a² + b²) = a + b",
    "formal": "Pirmiausia reikia atlikti veiksmus po šaknimi (sudėtį), o tik tada traukti šaknį.",
    "related": [
      "kvadratine-saknis"
    ],
    "topics": [
      "realieji-skaiciai-saknys-ir-aibes-8"
    ]
  },
  "krypties-koeficientas": {
    "title": "Krypties Koeficientas",
    "type": "concept",
    "definition": "S?voka ?Krypties Koeficientas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas",
      "tiesinis-sarysis"
    ]
  },
  "laisvasis-narys": {
    "title": "Laisvasis narys",
    "type": "concept",
    "definition": "Skaičius b tiesinės funkcijos formulėje.",
    "intuition": "Tai tiesės „starto pozicija“ ant vertikalios ašies.",
    "formal": "Funkcijos reikšmė f(0).",
    "related": [
      "tiesine-funkcija",
      "krypties-koeficientas"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "tieses-grafikas": {
    "title": "Tiesės grafikas",
    "type": "concept",
    "definition": "Tiesinės funkcijos vaizdas koordinačių plokštumoje.",
    "intuition": "Tai begalinė tiesi linija.",
    "formal": "Visų taškų (x, kx+b) aibė.",
    "related": [
      "tiesine-funkcija"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "tiesinis-sarysis": {
    "title": "Tiesinis Sarysis",
    "type": "concept",
    "definition": "S?voka ?Tiesinis Sarysis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "funkcijos-reiksme": {
    "title": "Funkcijos Reiksme",
    "type": "concept",
    "definition": "S?voka ?Funkcijos Reiksme? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "funkcijos-nulis": {
    "title": "Funkcijos nulis",
    "type": "concept",
    "definition": "Argumentas, kuriam funkcijos reikšmė lygi nuliui.",
    "intuition": "Vieta, kur grafikas kerta arba liečia horizontaliąją x ašį.",
    "formal": "x0 yra f nulis, jei f(x0) = 0.",
    "related": [
      "grafikas",
      "saknys"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes",
      "tiesinis-sarysis"
    ]
  },
  "tiesines-funkcijos-lygtis": {
    "title": "Tiesinės funkcijos lygtis",
    "type": "formula",
    "definition": "Pagrindinė formulė tiesiniam sąryšiui aprašyti.",
    "intuition": "Pagrindinė formulė tiesiniam sąryšiui aprašyti.",
    "formal": "y = kx + b",
    "related": [
      "tiesine-funkcija"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "krypties-koeficientas-per-taskus": {
    "title": "Krypties koeficientas per du taškus",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti nuolydį žinant bet kuriuos du tiesės taškus.",
    "intuition": "Leidžia apskaičiuoti nuolydį žinant bet kuriuos du tiesės taškus.",
    "formal": "k = \\frac{y_2 - y_1}{x_2 - x_1}",
    "related": [
      "krypties-koeficientas"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "tiesioginis-proporcingumas-formule": {
    "title": "Tiesioginis proporcingumas",
    "type": "formula",
    "definition": "Specialus atvejis, kai tiesė eina per (0;0).",
    "intuition": "Specialus atvejis, kai tiesė eina per (0;0).",
    "formal": "y = kx",
    "related": [
      "tiesine-funkcija"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "k-ir-b-sumaisymas": {
    "title": "Koeficientų k ir b sumaišymas",
    "type": "mistake",
    "definition": "Mokinys mano, kad k yra pirmas skaičius formulėje.",
    "intuition": "y = 3 + 2x laikoma, kad k=3, b=2",
    "formal": "k visada yra daugyklis prie x.",
    "related": [
      "tiesine-funkcija"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "tasko-priklausomumo-tikrinimas": {
    "title": "Klaidingas taško priklausomumo tiesei tikrinimas",
    "type": "mistake",
    "definition": "Neatidumas arba lygties sprendimo spragos.",
    "intuition": "Įstato tik x ir žiūri, ar y sutampa, bet daro skaičiavimo klaidų.",
    "formal": "Gauta lygybė turi būti tapatybė (pvz., 5 = 5).",
    "related": [
      "tieses-grafikas"
    ],
    "topics": [
      "tiesinis-sarysis"
    ]
  },
  "lygciu-sistema": {
    "title": "Lygčių sistema",
    "type": "concept",
    "definition": "Kelių lygčių rinkinys su tais pačiais nežinomaisiais.",
    "intuition": "Situacija, kai vienu metu turi galioti kelios taisyklės.",
    "formal": "Lygčių rinkinys, kurio sprendinys yra reikšmių rinkinys, tenkinantis visas lygtis.",
    "related": [
      "sistemos-sprendinys",
      "keitimo-budas"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "sistemos-sprendinys": {
    "title": "Sistemos sprendinys",
    "type": "concept",
    "definition": "Reikšmių pora (x, y), tenkinanti visas sistemos lygtis.",
    "intuition": "Taškas, kuriame kertasi visi sistemos lygybių grafikai.",
    "formal": "Sutvarkyta pora (x, y), su kuria kiekviena sistemos lygtis virsta teisinga skaitine lygybe.",
    "related": [
      "grafinis-budas"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "keitimo-budas": {
    "title": "Keitimo būdas (Substitucija)",
    "type": "concept",
    "definition": "Vieno kintamojo išreiškimas ir įstatymas į kitą lygtį.",
    "intuition": "Vieno nežinomojo „pavertimas“ kitu, kad liktų tik viena paprasta lygtis.",
    "formal": "Metodas, kai f(x,y)=0 pakeičiama f(x, g(x))=0, kur y=g(x).",
    "related": [
      "lygciu-sistema"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "sudeties-budas": {
    "title": "Sudeties Budas",
    "type": "concept",
    "definition": "S?voka ?Sudeties Budas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "grafinis-budas": {
    "title": "Grafinis Budas",
    "type": "concept",
    "definition": "S?voka ?Grafinis Budas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "ekvivalentus-pertvarkiai": {
    "title": "Ekvivalentus Pertvarkiai",
    "type": "concept",
    "definition": "S?voka ?Ekvivalentus Pertvarkiai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "tiesiu-sankirta": {
    "title": "Tiesiu Sankirta",
    "type": "concept",
    "definition": "S?voka ?Tiesiu Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "begalybe-sprendiniu": {
    "title": "Begalybe Sprendiniu",
    "type": "concept",
    "definition": "S?voka ?Begalybe Sprendiniu? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "nera-sprendiniu": {
    "title": "Nera Sprendiniu",
    "type": "concept",
    "definition": "S?voka ?Nera Sprendiniu? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "tiesines-sistemos-bendroji-forma": {
    "title": "Tiesinių lygčių sistemos bendroji forma",
    "type": "formula",
    "definition": "Standartinis užrašas, kuriame koeficientai ir kintamieji surikiuoti eilės tvarka.",
    "intuition": "Standartinis užrašas, kuriame koeficientai ir kintamieji surikiuoti eilės tvarka.",
    "formal": "\\begin{cases} a_1x + b_1y = c_1 \\\\ a_2x + b_2y = c_2 \\end{cases}",
    "related": [
      "lygciu-sistema"
    ],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "zenklu-klaida-atimant": {
    "title": "Ženklų klaida atimant lygtis",
    "type": "mistake",
    "definition": "Pamirštama, kad „minusas ir minusas duoda pliusą“.",
    "intuition": "Atimant lygtis su neigiamais koeficientais, pvz., 3y - (-2y) užrašoma kaip y.",
    "formal": "Atimant neigiamą skaičių, jis pridedamas: 3y - (-2y) = 5y.",
    "related": [
      "sudeties-budas"
    ],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "pamirstas-antras-kintamasis": {
    "title": "Pamirštamas antrasis kintamasis",
    "type": "mistake",
    "definition": "Mokinys pripratęs prie paprastų lygčių, kur yra tik vienas atsakymas.",
    "intuition": "Išsprendus x reikšmę, darbas sustabdomas.",
    "formal": "Sistemos sprendinys visada yra pora (x; y).",
    "related": [
      "sistemos-sprendinys"
    ],
    "topics": [
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "asine-simetrija": {
    "title": "Ašinė simetrija",
    "type": "concept",
    "definition": "Atspindys tiesės atžvilgiu.",
    "intuition": "Kaip vaizdas veidrodyje kitoje tiesės pusėje.",
    "formal": "Transformacija, kuri kiekvieną tašką A perkelia į tašką A' taip, kad simetrijos ašis būtų statmena atkarpai AA' ir eitų per jos vidurį.",
    "related": [
      "simetrijos-asis",
      "centrine-simetrija"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "centrine-simetrija": {
    "title": "Centrinė simetrija",
    "type": "concept",
    "definition": "Atspindys taško atžvilgiu.",
    "intuition": "Figūros apsukimas 180 laipsnių kampu.",
    "formal": "Transformacija taško O atžvilgiu, kai kiekvienam taškui A priskiriamas toks taškas A', kad O būtų atkarpos AA' vidurio taškas.",
    "related": [
      "simetrijos-centras",
      "asine-simetrija"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "lygiagretusis-poslinkis": {
    "title": "Lygiagretusis poslinkis",
    "type": "concept",
    "definition": "Figūros pastūmimas tam tikra kryptimi ir atstumu.",
    "intuition": "Tarsi stumtumėte lėkštę stalu jos nesukdami.",
    "formal": "Plokštumos transformacija, kai visi taškai pastumiami vektoriaus kryptimi.",
    "related": [
      "vektorius"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "atstumas-tarp-tasku": {
    "title": "Atstumas tarp taškų",
    "type": "concept",
    "definition": "Trumpiausios atkarpos tarp dviejų taškų ilgis.",
    "intuition": "Tiesi linija tarp dviejų vietų.",
    "formal": "Atstumas d tarp taškų (x1,y1) ir (x2,y2) skaičiuojamas pagal Pitagoro teoremą.",
    "related": [
      "pitagoro-teorema"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "atkarpos-vidurio-taskas": {
    "title": "Atkarpos vidurio taškas",
    "type": "concept",
    "definition": "Taškas, dalijantis atkarpą į dvi lygias dalis.",
    "intuition": "Tikslus geometrinis vidurys.",
    "formal": "Taškas M, kurio koordinatės yra atkarpos galų koordinačių aritmetiniai vidurkiai.",
    "related": [
      "atstumas-tarp-tasku"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "simetrijos-centras": {
    "title": "Simetrijos Centras",
    "type": "concept",
    "definition": "S?voka ?Simetrijos Centras? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "atstumas-tarp-tasku-formule": {
    "title": "Atstumo tarp taškų formulė",
    "type": "formula",
    "definition": "Ši formulė kilusi iš Pitagoro teoremos koordinačių plokštumoje.",
    "intuition": "Ši formulė kilusi iš Pitagoro teoremos koordinačių plokštumoje.",
    "formal": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
    "related": [
      "atstumas-tarp-tasku"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "atkarpos-vidurio-tasko-formule": {
    "title": "Atkarpos vidurio taško formulė",
    "type": "formula",
    "definition": "Leidžia rasti tašką, esantį tiksliai per vidurį tarp dviejų kitų taškų.",
    "intuition": "Leidžia rasti tašką, esantį tiksliai per vidurį tarp dviejų kitų taškų.",
    "formal": "x_M = \\frac{x_1 + x_2}{2}, \\quad y_M = \\frac{y_1 + y_2}{2}",
    "related": [
      "atkarpos-vidurio-taskas"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "sumaiso-simetrijos-asis": {
    "title": "Ašių sumaišymas simetrijos metu",
    "type": "mistake",
    "definition": "Mokinys mano, kad simetrija tiesės atžvilgiu turi paveikti tą patį kintamąjį.",
    "intuition": "Simetrija OX ašies atžvilgiu keičia x ženklą.",
    "formal": "Atspindys per horizontalią ašį (OX) pakeičia vertikalią padėtį (y).",
    "related": [
      "asine-simetrija"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "vidurio-tasko-atimtis-vietoj-sudeties": {
    "title": "Atkarpos vidurio koordinačių atimtis",
    "type": "mistake",
    "definition": "Supainiojama su atstumo formule.",
    "intuition": "Skaičiuoja (x2 - x1)/2.",
    "formal": "Vidurio taškui reikia koordinates sudėti ir dalinti iš dviejų.",
    "related": [
      "atkarpos-vidurio-taskas"
    ],
    "topics": [
      "transformacijos-ir-koordinates"
    ]
  },
  "vektoriaus-koordinates": {
    "title": "Vektoriaus koordinatės",
    "type": "concept",
    "definition": "Skaičių pora, aprašanti vektoriaus poslinkį ašyse.",
    "intuition": "Kiek žingsnių į dešinę ir kiek į viršų?",
    "formal": "Vektoriaus galo ir pradžios koordinačių skirtumai.",
    "related": [
      "vektorius"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriaus-ilgis": {
    "title": "Vektoriaus ilgis (modulis)",
    "type": "concept",
    "definition": "Atstumas tarp vektoriaus pradžios ir galo.",
    "intuition": "Rodyklės ilgis milimetrais ar vienetais.",
    "formal": "Kvadratinė šaknis iš vektoriaus koordinačių kvadratų sumos.",
    "related": [
      "pitagoro-teorema"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "projekcija": {
    "title": "Projekcija",
    "type": "concept",
    "definition": "S?voka ?Projekcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai",
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriu-sudetis": {
    "title": "Vektoriu Sudetis",
    "type": "concept",
    "definition": "S?voka ?Vektoriu Sudetis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriu-atimtis": {
    "title": "Vektoriu Atimtis",
    "type": "concept",
    "definition": "S?voka ?Vektoriu Atimtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriaus-daugyba-is-skaiciaus": {
    "title": "Vektoriaus daugyba iš skaičiaus",
    "type": "operation",
    "definition": "Vektoriaus ilgio keitimas išlaikant arba pakeičiant kryptį priešinga.",
    "intuition": "Vektoriaus 'ištęsimas' arba 'suglaudimas'.",
    "formal": "Jei $\\vec{a}(x, y)$, tai $k\\vec{a} = (kx, ky)$.",
    "related": [
      "vektorius",
      "kolinearus-vektoriai"
    ],
    "topics": [
      "vektoriai-plokstumoje",
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "trikampio-taisykle": {
    "title": "Trikampio Taisykle",
    "type": "concept",
    "definition": "S?voka ?Trikampio Taisykle? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "lygiagretainio-taisykle": {
    "title": "Lygiagretainio Taisykle",
    "type": "concept",
    "definition": "S?voka ?Lygiagretainio Taisykle? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vaizdas-is-priekio": {
    "title": "Vaizdas Is Priekio",
    "type": "concept",
    "definition": "S?voka ?Vaizdas Is Priekio? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vaizdas-is-virsaus": {
    "title": "Vaizdas Is Virsaus",
    "type": "concept",
    "definition": "S?voka ?Vaizdas Is Virsaus? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vaizdas-is-sono": {
    "title": "Vaizdas Is Sono",
    "type": "concept",
    "definition": "S?voka ?Vaizdas Is Sono? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriaus-koordinates-is-tasku": {
    "title": "Vektoriaus koordinačių radimas",
    "type": "formula",
    "definition": "Iš galo koordinačių atimame pradžios koordinates.",
    "intuition": "Iš galo koordinačių atimame pradžios koordinates.",
    "formal": "\\vec{AB} = (x_B - x_A; y_B - y_A)",
    "related": [
      "vektoriaus-koordinates"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriaus-ilgio-formule": {
    "title": "Vektoriaus ilgio formulė",
    "type": "formula",
    "definition": "Skaičiuojama pagal Pitagoro teoremą koordinačių sistemoje.",
    "intuition": "Skaičiuojama pagal Pitagoro teoremą koordinačių sistemoje.",
    "formal": "|\\vec{a}| = \\sqrt{x^2 + y^2}",
    "related": [
      "vektoriaus-ilgis"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriaus-galas-minus-pradzia": {
    "title": "Pradžios ir galo sumaišymas",
    "type": "mistake",
    "definition": "Mokinys tiesiog atima skaičius nesilaikydamas krypties.",
    "intuition": "Apskaičiuoja (x_pradžia - x_galas)",
    "formal": "Visada: GALAS - PRADŽIA.",
    "related": [
      "vektoriaus-koordinates"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektoriu-sudetis-be-krypties": {
    "title": "Vektorių ilgių sudėtis vietoj vektorių sudėties",
    "type": "mistake",
    "definition": "Mokinys mano, kad sudėjus vektorius jų ilgiai tiesiog susideda.",
    "intuition": "|a+b| = |a| + |b|",
    "formal": "Vektorių suma priklauso nuo jų krypties (trikampio taisyklė).",
    "related": [
      "vektoriu-sudetis"
    ],
    "topics": [
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "sinusas": {
    "title": "Sinusas",
    "type": "concept",
    "definition": "S?voka ?Sinusas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "logaritmai-ir-trigonometrines-reiksmes",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "trigonometrines-lygtys"
    ]
  },
  "centrinis-kampas": {
    "title": "Centrinis kampas",
    "type": "concept",
    "definition": "Kampas, kurio viršūnė yra apskritimo centre.",
    "intuition": "Kampas, einantis tiesiai iš centro.",
    "formal": "Kampas tarp dviejų spindulių, išeinančių iš apskritimo centro.",
    "related": [
      "ibreztinis-kampas",
      "lankas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "ibreztinis-kampas": {
    "title": "Įbrėžtinis kampas",
    "type": "concept",
    "definition": "Kampas, kurio viršūnė yra ant apskritimo linijos.",
    "intuition": "Kampas, kurio viršūnė liečia apskritimo kraštą.",
    "formal": "Kampas, kurį sudaro dvi stygos, turinčios bendrą galą.",
    "related": [
      "centrinis-kampas",
      "lankas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "liestine": {
    "title": "Liestinė",
    "type": "concept",
    "definition": "Tiesė, kuri taške 'tik liečia' funkcijos grafiką.",
    "intuition": "Įsivaizduokite, kad važiuojate vingiuotu keliu – jūsų automobilio žibintų šviesa visada rodo liestinės kryptimi.",
    "formal": "Tiesė, kurios krypties koeficientas lygus funkcijos išvestinei tame taške.",
    "related": [
      "isvestine",
      "krypties-koeficientas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "styga": {
    "title": "Styga",
    "type": "concept",
    "definition": "Atkarpa, jungianti du apskritimo taškus.",
    "intuition": "Linija jungianti du kraštus.",
    "formal": "Atkarpa, kurios galai priklauso apskritimui.",
    "related": [
      "skersmuo",
      "apskritimas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "tangentas": {
    "title": "Tangentas",
    "type": "concept",
    "definition": "S?voka ?Tangentas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "logaritmai-ir-trigonometrines-reiksmes",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "trigonometrines-lygtys"
    ]
  },
  "kosinusas": {
    "title": "Kosinusas",
    "type": "concept",
    "definition": "S?voka ?Kosinusas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "logaritmai-ir-trigonometrines-reiksmes",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "trigonometrines-lygtys"
    ]
  },
  "sinuso-apibreztis": {
    "title": "Sinuso apibrėžtis",
    "type": "formula",
    "definition": "Santykis tarp priešinio statinio ir įžambinės.",
    "intuition": "Santykis tarp priešinio statinio ir įžambinės.",
    "formal": "\\sin \\alpha = \\frac{a}{c}",
    "related": [
      "sinusas",
      "izambine"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "pagrindine-trigonometrine-tapatybe": {
    "title": "Pagrindinė trigonometrinė tapatybė",
    "type": "formula",
    "definition": "Svarbiausias ryšys tarp sinuso ir kosinuso.",
    "intuition": "Svarbiausias ryšys tarp sinuso ir kosinuso.",
    "formal": "\\sin^2 \\alpha + \\cos^2 \\alpha = 1",
    "related": [
      "sinusas",
      "kosinusas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "painioja-sinusa-ir-kosinusa": {
    "title": "Painioja sinusą ir kosinusą",
    "type": "mistake",
    "definition": "Mokiniai dažnai neskiria, kuris statinis yra priešais kampą.",
    "intuition": "Naudoja gretutinį statinį sinusui.",
    "formal": "Sinusas visada susijęs su kraštine priešais kampą.",
    "related": [
      "sinusas",
      "kosinusas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "ibreztinis-lygus-centriniui": {
    "title": "Mano, kad įbrėžtinis kampas lygus centriniam",
    "type": "mistake",
    "definition": "Supainiojamos centrinio ir įbrėžtinio kampų savybės.",
    "intuition": "Sako, kad įbrėžtinis kampas lygus lankui.",
    "formal": "Įbrėžtinis kampas yra pusė lanko arba pusė centrinio kampo.",
    "related": [
      "ibreztinis-kampas",
      "centrinis-kampas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "skaiciuokles-rezimas-rad-deg": {
    "title": "Neteisingas skaičiuoklės režimas",
    "type": "mistake",
    "definition": "Skaičiuoklė nustatyta RAD (radianų) režimu.",
    "intuition": "Gauna neigiamas vertes smailiesiems kampams.",
    "formal": "Perjunkite skaičiuoklę į DEG (laipsnių) režimą.",
    "related": [
      "sinusas",
      "tangentas"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"
    ]
  },
  "funkcija": {
    "title": "Funkcija",
    "type": "concept",
    "definition": "Taisyklė, kuri kiekvienam argumentui priskiria vieną reikšmę.",
    "intuition": "Tai kaip receptas: įdedi ingredientus (x), gauni patiekalą (y). Vienas receptas visada duoda tą patį rezultatą.",
    "formal": "Funkcija f iš aibės X į aibę Y yra taisyklė, pagal kurią kiekvienas x iš X yra susietas su vieninteliu y iš Y.",
    "related": [
      "argumentas",
      "grafikas",
      "apibrezimo-sritis"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "argumentas": {
    "title": "Argumentas",
    "type": "concept",
    "definition": "S?voka ?Argumentas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "funkcijos-ir-ju-savybes",
      "kompleksiniai-skaiciai"
    ]
  },
  "didejimas": {
    "title": "Didėjimas",
    "type": "concept",
    "definition": "Kai didesniam argumentui atitinka didesnė reikšmė.",
    "intuition": "Žiūrint iš kairės į dešinę, grafikas „lipa į kalną“.",
    "formal": "Funkcija f didėja intervale (a, b), jei x1 < x2 => f(x1) < f(x2).",
    "related": [
      "mazejimas",
      "grafikas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "mazejimas": {
    "title": "Mažėjimas",
    "type": "concept",
    "definition": "Kai didesniam argumentui atitinka mažesnė reikšmė.",
    "intuition": "Žiūrint iš kairės į dešinę, grafikas „leidžiasi žemyn“.",
    "formal": "Funkcija f mažėja intervale (a, b), jei x1 < x2 => f(x1) > f(x2).",
    "related": [
      "didejimas",
      "grafikas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "pastovumo-intervalai": {
    "title": "Pastovumo intervalai",
    "type": "concept",
    "definition": "Intervalai, kuriuose funkcija yra tik teigiama arba tik neigiama.",
    "intuition": "Grafiko dalys, kurios yra virš x ašies arba po ja.",
    "formal": "Intervalai, kuriuose f(x) > 0 arba f(x) < 0 visiems x iš to intervalo.",
    "related": [
      "funkcijos-nulis"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "lyginumas": {
    "title": "Lyginumas ir nelyginumas",
    "type": "concept",
    "definition": "Funkcijos grafiko simetriškumas.",
    "intuition": "Lyginė funkcija simetriška y ašies atžvilgiu (veidrodis), nelyginė – koordinačių pradžios taško atžvilgiu.",
    "formal": "Lyginė: f(-x) = f(x). Nelyginė: f(-x) = -f(x).",
    "related": [
      "grafikas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "funkcijos-zymejimas": {
    "title": "Funkcijos bendrasis žymėjimas",
    "type": "formula",
    "definition": "Nusako, kad dydis y priklauso nuo dydžio x pagal taisyklę f.",
    "intuition": "Nusako, kad dydis y priklauso nuo dydžio x pagal taisyklę f.",
    "formal": "y = f(x)",
    "related": [
      "funkcija",
      "argumentas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "tiesine-funkcija-formule": {
    "title": "Tiesinė funkcija",
    "type": "formula",
    "definition": "Paprasčiausia funkcija, kurios grafikas yra tiesė.",
    "intuition": "Paprasčiausia funkcija, kurios grafikas yra tiesė.",
    "formal": "y = ax + b",
    "related": [
      "grafikas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "x-y-sumaiso": {
    "title": "Supainioja x ir y (argumentą ir reikšmę)",
    "type": "mistake",
    "definition": "Neatpažįstama simbolika: skaičius skliausteliuose visada yra x.",
    "intuition": "Užduotyje 'raskite f(5)' bando spręsti lygtį f(x)=5.",
    "formal": "f(5) reiškia 'koks bus y, kai x=5?'. f(x)=5 reiškia 'koks turi būti x, kad y būtų 5?'.",
    "related": [
      "funkcija",
      "argumentas"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "apibrezimo-srities-neziuri": {
    "title": "Pamiršta apibrėžimo sritį",
    "type": "mistake",
    "definition": "Skubėjimas atlikti veiksmus nepatikrinus loginių apribojimų.",
    "intuition": "Sprendžia lygtį su x vardiklyje ir gauna sprendinį, kuris paverčia vardiklį nuliu.",
    "formal": "Prieš bet kokį skaičiavimą nustatykite, kur funkcija neegzistuoja.",
    "related": [
      "apibrezimo-sritis"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "intervalai-su-y": {
    "title": "Intervalus nurodo pagal y ašį",
    "type": "mistake",
    "definition": "Vizualus dėmesys nukrypsta į vertikalų judėjimą.",
    "intuition": "Rašo, kad funkcija didėja intervale [1; 5], nes grafikas pakilo nuo aukščio 1 iki 5.",
    "formal": "Savybių intervalai (didėjimas, mažėjimas, teigiamumas) visada nurodomi pagal x ašį.",
    "related": [
      "didejimas",
      "pastovumo-intervalai"
    ],
    "topics": [
      "funkcijos-ir-ju-savybes"
    ]
  },
  "kvadratine-funkcija": {
    "title": "Kvadratinė funkcija",
    "type": "concept",
    "definition": "Funkcija f(x)=ax²+bx+c, kur a≠0.",
    "intuition": "Tai funkcija, kurios augimo greitis pats nuolat kinta, todėl jos grafikas yra kreivė.",
    "formal": "Kvadratinė funkcija yra polinominė antrojo laipsnio funkcija.",
    "related": [
      "parabole",
      "virsune",
      "diskriminantas"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "parabole": {
    "title": "Parabolė",
    "type": "concept",
    "definition": "Kvadratinės funkcijos grafikas.",
    "intuition": "Simetriška lanko formos kreivė.",
    "formal": "Plokštumos taškų aibė, kurių atstumai iki duoto taško (židinio) ir iki duotos tiesės (direktrisės) yra lygūs.",
    "related": [
      "kvadratine-funkcija",
      "virsune",
      "simetrijos-asis"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "virsune": {
    "title": "Viršūnė",
    "type": "concept",
    "definition": "Parabolės lūžio taškas, ekstremumas.",
    "intuition": "Vieta, kur parabolė nustoja leistis ir pradeda kilti (arba atvirkščiai).",
    "formal": "Taškas (x_v; y_v), kuriame kvadratinė funkcija įgyja didžiausią arba mažiausią reikšmę.",
    "related": [
      "simetrijos-asis",
      "reiksmiu-sritis"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "diskriminantas": {
    "title": "Diskriminantas",
    "type": "concept",
    "definition": "S?voka ?Diskriminantas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratine-funkcija-ir-lygtys",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "kvadratinis-trinaris": {
    "title": "Kvadratinis trinaris",
    "type": "concept",
    "definition": "Reiškinys ax² + bx + c.",
    "intuition": "Daugianaris, kurio didžiausias laipsnis yra 2. Tai algebros „darbinis arkliukas“.",
    "formal": "ax² + bx + c, kur a, b, c priklauso R ir a ≠ 0.",
    "related": [
      "trinario-saknys",
      "skaidymas-dauginamaisiais"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "kvadratine-nelygybe": {
    "title": "Kvadratine Nelygybe",
    "type": "concept",
    "definition": "S?voka ?Kvadratine Nelygybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes"
    ]
  },
  "optimizavimas": {
    "title": "Optimizavimas",
    "type": "concept",
    "definition": "Geriausio (didžiausio arba mažiausio) sprendinio paieška.",
    "intuition": "Kaip gauti daugiausiai naudos su mažiausiomis sąnaudomis.",
    "formal": "Uždavinių klasė, kurioje ieškoma funkcijos globalaus ekstremumo tam tikroje srityje.",
    "related": [
      "ekstremumas",
      "isvestine"
    ],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas",
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "saknys": {
    "title": "Saknys",
    "type": "concept",
    "definition": "S?voka ?Saknys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "trinario-skaidymas": {
    "title": "Kvadratinio trinario skaidymas",
    "type": "formula",
    "definition": "Leidžia užrašyti sumą kaip sandaugą, naudojant jos šaknis.",
    "intuition": "Leidžia užrašyti sumą kaip sandaugą, naudojant jos šaknis.",
    "formal": "ax^2 + bx + c = a(x - x_1)(x - x_2)",
    "related": [
      "skaidymas-dauginamaisiais"
    ],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "virsunes-formule": {
    "title": "Parabolės viršūnės koordinatės",
    "type": "formula",
    "definition": "Ši formulė leidžia rasti tašką, kuriame funkcija keičia kryptį.",
    "intuition": "Ši formulė leidžia rasti tašką, kuriame funkcija keičia kryptį.",
    "formal": "x_v = -\\frac{b}{2a}, \\quad y_v = f(x_v)",
    "related": [
      "virsune",
      "simetrijos-asis"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "diskriminanto-formule": {
    "title": "Diskriminantas",
    "type": "formula",
    "definition": "Nusako, kiek realiųjų sprendinių turi kvadratinė lygtis.",
    "intuition": "Nusako, kiek realiųjų sprendinių turi kvadratinė lygtis.",
    "formal": "D = b^2 - 4ac",
    "related": [
      "diskriminantas",
      "saknys"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "kvadratines-lygties-formule": {
    "title": "Kvadratinės lygties sprendiniai",
    "type": "formula",
    "definition": "Universali formulė bet kuriai pilnai kvadratinei lygčiai spręsti.",
    "intuition": "Universali formulė bet kuriai pilnai kvadratinei lygčiai spręsti.",
    "formal": "x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}",
    "related": [
      "saknys",
      "diskriminantas"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "vijeto-formules": {
    "title": "Vijeto formulės",
    "type": "formula",
    "definition": "Sieja šaknis su lygties koeficientais nenaudojant diskriminanto.",
    "intuition": "Sieja šaknis su lygties koeficientais nenaudojant diskriminanto.",
    "formal": "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}",
    "related": [
      "vijeto-teorema"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "diskriminanta-supainioja": {
    "title": "Diskriminanto ženklo klaida",
    "type": "mistake",
    "definition": "Mokiniai pamiršta, kad „minusas iš minuso duoda pliusą“.",
    "intuition": "Apskaičiuojant D, kai c yra neigiamas, rašoma b² - 4ac netaikant minusų taisyklės.",
    "formal": "Jei c < 0, tai -4ac taps teigiamu skaičiumi.",
    "related": [
      "diskriminantas"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "zenklu-klaida-vijeto": {
    "title": "Vijeto teoremos ženklų sumaišymas",
    "type": "mistake",
    "definition": "Pamirštamas minuso ženklas sumos formulėje.",
    "intuition": "Teigiama, kad šaknų suma lygi koeficientui b (o ne -b).",
    "formal": "Šaknų suma visada lygi koeficientui b su priešingu ženklu (padalintam iš a).",
    "related": [
      "vijeto-teorema"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "virsunes-formule-netiksli": {
    "title": "Dalijimas tik iš a (vietoj 2a)",
    "type": "mistake",
    "definition": "Viršūnės formulė painiojama su tiesinės lygties sprendiniu arba tiesiog neįsimenamas dvejetas vardiklyje.",
    "intuition": "x_v = -b / a",
    "formal": "Visada vardiklyje turi būti 2a.",
    "related": [
      "virsune"
    ],
    "topics": [
      "kvadratine-funkcija-ir-lygtys"
    ]
  },
  "trinario-saknys": {
    "title": "Trinario šaknys",
    "type": "concept",
    "definition": "x reikšmės, su kuriomis trinaris lygus 0.",
    "intuition": "Vietos, kur parabolė kirstų horizontalę, jei ją nupieštume.",
    "formal": "Lygties ax² + bx + c = 0 sprendiniai.",
    "related": [
      "diskriminantas"
    ],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "racionalusis-reiskinys": {
    "title": "Trupmeninis racionalusis reiškinys",
    "type": "concept",
    "definition": "Trupmena, kurios vardiklyje yra kintamasis.",
    "intuition": "Algebrinė trupmena, kurios „apačia“ gali keistis.",
    "formal": "P(x) / Q(x), kur Q(x) ≠ 0.",
    "related": [
      "apibrezimo-sritis-trr"
    ],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "apibrezimo-sritis-trr": {
    "title": "Apibrezimo Sritis Trr",
    "type": "concept",
    "definition": "S?voka ?Apibrezimo Sritis Trr? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "prastinimas": {
    "title": "Prastinimas",
    "type": "concept",
    "definition": "S?voka ?Prastinimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "bendravardiklinimas": {
    "title": "Bendravardiklinimas",
    "type": "concept",
    "definition": "S?voka ?Bendravardiklinimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "vietos-teorema": {
    "title": "Vietos Teorema",
    "type": "concept",
    "definition": "S?voka ?Vietos Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "diskriminantas-formule": {
    "title": "Diskriminantas sistemoms",
    "type": "formula",
    "definition": "Padeda nustatyti, kiek bendrų taškų turi grafikai.",
    "intuition": "Padeda nustatyti, kiek bendrų taškų turi grafikai.",
    "formal": "D = b^2 - 4ac",
    "related": [
      "kvadratine-lygtis"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"
    ]
  },
  "zenklo-klaida-skaidant": {
    "title": "Ženklo klaida skaidant dauginamaisiais",
    "type": "mistake",
    "definition": "Pamirštama, kad formulėje yra minusas: (x - x1).",
    "intuition": "x² - 5x + 6 turi šaknis 2 ir 3, rašo (x+2)(x+3).",
    "formal": "Visada rašykite (x - [šaknis]). Jei šaknis neigiama, gausis (x + skaičius).",
    "related": [
      "skaidymas-dauginamaisiais"
    ],
    "topics": [
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai"
    ]
  },
  "racionalioji-lygtis": {
    "title": "Racionalioji Lygtis",
    "type": "concept",
    "definition": "S?voka ?Racionalioji Lygtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"
    ]
  },
  "kvadratine-lygtis": {
    "title": "Kvadratine Lygtis",
    "type": "concept",
    "definition": "S?voka ?Kvadratine Lygtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"
    ]
  },
  "pamirsta-antra-kintamaji": {
    "title": "Pamiršta surasti antrąjį kintamąjį",
    "type": "mistake",
    "definition": "Džiaugsmas išsprendus kvadratinę lygtį užgožia galutinį tikslą.",
    "intuition": "Randa x=2 ir x=3, bet nesuskaičiuoja y.",
    "formal": "Visada pasitikrinkite: ar mano atsakymas yra taškų poros?",
    "related": [
      "sistemos-sprendinys"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"
    ]
  },
  "pasaliniai-sprendiniai": {
    "title": "Pašaliniai sprendiniai racionaliosiose sistemose",
    "type": "mistake",
    "definition": "Neatsižvelgiama į apibrėžimo sritį (vardiklis negali būti 0).",
    "intuition": "Palieka sprendinį (0, 5) sistemoje, kurioje viena lygtis yra y=1/x.",
    "formal": "Visada patikrinkite gautus taškus pradinėje sistemoje.",
    "related": [
      "racionalioji-lygtis"
    ],
    "topics": [
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"
    ]
  },
  "daugianariu-teorema": {
    "title": "Daugianarių teorija",
    "type": "concept",
    "definition": "Algebrinių funkcijų savybių tyrimas per šaknis ir koeficientus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "am-gm-nelygybe-n": {
    "title": "AM-GM nelygybė (n kintamųjų)",
    "type": "method",
    "definition": "Aritmetinis vidurkis visada >= geometrinis vidurkis neneigiamiems skaičiams.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "cauchy-schwarz-nelygybe": {
    "title": "Cauchy-Schwarz nelygybė",
    "type": "method",
    "definition": "Sandaugų sumos kvadrato įvertis.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "kompleksiniai-skaiciai-plokstuma": {
    "title": "Kompleksinių skaičių plokštuma",
    "type": "concept",
    "definition": "Skaičių vaizdavimas dvimatėje erdvėje.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "teleskopines-sumos": {
    "title": "Teleskopinės sumos",
    "type": "method",
    "definition": "Sumų skaičiavimo būdas per narių susiprastinimą.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "funkcines-lygtys-pagrindai": {
    "title": "Funkcines Lygtys Pagrindai",
    "type": "concept",
    "definition": "S?voka ?Funkcines Lygtys Pagrindai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "formula-sophie-germain": {
    "title": "Sophie Germain tapatybė",
    "type": "formula",
    "definition": "Metodas skaidyti sumą į sandaugą.",
    "intuition": "Metodas skaidyti sumą į sandaugą.",
    "formal": "$a^4 + 4b^4 = (a^2 + 2b^2 + 2ab)(a^2 + 2b^2 - 2ab)$",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "vijeto-formules-n": {
    "title": "Vietos formulės",
    "type": "formula",
    "definition": "Ryšys tarp šaknų ir koeficientų.",
    "intuition": "Ryšys tarp šaknų ir koeficientų.",
    "formal": "$\\sum x_i = -a_{n-1}/a_n, \\quad \\prod x_i = (-1)^n a_0/a_n$",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "bernoulli-nelygybe": {
    "title": "Bernoulli nelygybė",
    "type": "formula",
    "definition": "Galioja $x > -1$ ir $n \\in \\mathbb{N}$.",
    "intuition": "Galioja $x > -1$ ir $n \\in \\mathbb{N}$.",
    "formal": "$(1+x)^n \\ge 1 + nx$",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "daugianario-laipsnio-klaida": {
    "title": "Liekamosios formos netikslumas",
    "type": "mistake",
    "definition": "Liekamosios formos netikslumas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "concept-function-domain": {
    "title": "Apibrėžimo sritis",
    "type": "concept",
    "definition": "Visų leistinų argumento reikšmių aibė.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "concept-function-range": {
    "title": "Reikšmių sritis",
    "type": "concept",
    "definition": "Visų galimų funkcijos reikšmių aibė.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "concept-functional-equations": {
    "title": "Funkcinės lygtys",
    "type": "concept",
    "definition": "Lygtys, kurių sprendiniai yra pačios funkcijos.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "concept-function-periodicity": {
    "title": "Periodiškumas",
    "type": "concept",
    "definition": "Savybė, kai $f(x+T) = f(x)$ tam tikram $T \\neq 0$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "concept-injective-surjective": {
    "title": "Injektyvumas ir surjektyvumas",
    "type": "concept",
    "definition": "Savybės, nusakančios kaip funkcija atvaizduoja aibių elementus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "concept-fixed-points": {
    "title": "Fiksuotieji taškai",
    "type": "concept",
    "definition": "Argumentai $x$, kuriems galioja $f(x) = x$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "mistake-overgeneralizing-cauchy": {
    "title": "Per ankstyvas Košy lygties sprendinio taikymas",
    "type": "mistake",
    "definition": "Per ankstyvas Košy lygties sprendinio taikymas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "mistake-domain-neglect": {
    "title": "Apibrėžimo srities nepaisymas funkcinėse lygtyse",
    "type": "mistake",
    "definition": "Apibrėžimo srities nepaisymas funkcinėse lygtyse",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-funkcijos"
    ]
  },
  "olimpiada-09-concept-ceva": {
    "title": "Čevos teorema",
    "type": "concept",
    "definition": "Trikampio kraštinių atkarpų santykių sandauga, kai trys tiesės kertasi viename taške.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-menelaus"
    ],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-menelaus": {
    "title": "Menelajaus teorema",
    "type": "concept",
    "definition": "Sąlyga, kada trys taškai ant trikampio kraštinių (ar jų tęsinių) yra vienoje tiesėje.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-ceva"
    ],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-panasumas": {
    "title": "Trikampių panašumas",
    "type": "concept",
    "definition": "Trikampių savybė, kai jų kampai lygūs, o kraštinės proporcingos.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-apskritimo-galia": {
    "title": "Taško galia apskritimo atžvilgiu",
    "type": "concept",
    "definition": "Dydis $PA \\cdot PB$, kuris nekinta visoms kertamosioms per tašką $P$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-ibreztinis-keturkampis": {
    "title": "Įbrėžtinis keturkampis",
    "type": "concept",
    "definition": "Keturkampis, kurio visos viršūnės priklauso vienam apskritimui.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-ptolemy"
    ],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-ptolemy": {
    "title": "Ptolemėjo teorema",
    "type": "concept",
    "definition": "Ryšys tarp įbrėžtinio keturkampio kraštinių ir įstrižainių.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-ibreztinis-keturkampis"
    ],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "concept-triangle-centers": {
    "title": "Trikampio centrai",
    "type": "concept",
    "definition": "Ypatingi taškai trikampyje: centroidas, ortocentras, apibrėžtinio ir įbrėžtinio apskritimų centrai.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "concept-radical-axis": {
    "title": "Radikali ašis",
    "type": "concept",
    "definition": "Tiesė, kurios kiekvieno taško galios dviejų apskritimų atžvilgiu yra lygios.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-apskritimo-galia"
    ],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-formula-heron": {
    "title": "Herono formulė",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti trikampio plotą žinant tik jo kraštinių ilgius.",
    "intuition": "Leidžia apskaičiuoti trikampio plotą žinant tik jo kraštinių ilgius.",
    "formal": "S = \\sqrt{p(p-a)(p-b)(p-c)}",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-formula-brahmagupta": {
    "title": "Brahmaguptos formulė",
    "type": "formula",
    "definition": "Herono formulės apibendrinimas įbrėžtiniams keturkampiams.",
    "intuition": "Herono formulės apibendrinimas įbrėžtiniams keturkampiams.",
    "formal": "S = \\sqrt{(p-a)(p-b)(p-c)(p-d)}",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "mistake-drawing-assumption": {
    "title": "Pasitikėjimas brėžinio „akivaizdumu“",
    "type": "mistake",
    "definition": "Pasitikėjimas brėžinio „akivaizdumu“",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "mistake-cyclic-quad-order": {
    "title": "Neteisinga taškų tvarka įbrėžtiniame keturkampyje",
    "type": "mistake",
    "definition": "Neteisinga taškų tvarka įbrėžtiniame keturkampyje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "ol-09-comb-concept-daugyba": {
    "title": "Daugybos taisyklė",
    "type": "concept",
    "definition": "Pasirinkimų būdų dauginimas, kai atliekami nepriklausomi veiksmai.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-keliniai": {
    "title": "Kėliniai",
    "type": "concept",
    "definition": "$n$ elementų sudėliojimo į eilę būdų skaičius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-gretiniai": {
    "title": "Gretiniai",
    "type": "concept",
    "definition": "Pasirinkimas $k$ elementų iš $n$ ir jų surikiavimas.",
    "intuition": "",
    "formal": "",
    "related": [
      "ol-09-comb-concept-deriniai"
    ],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-deriniai": {
    "title": "Deriniai",
    "type": "concept",
    "definition": "Pasirinkimas $k$ elementų iš $n$, kai tvarka nesvarbi.",
    "intuition": "",
    "formal": "",
    "related": [
      "ol-09-comb-concept-gretiniai"
    ],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-dirichle": {
    "title": "Dirichlė principas",
    "type": "concept",
    "definition": "Teiginys apie objektų paskirstymą dėžutėse.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-inkliuzija": {
    "title": "Inkliuzijos-ekskliuzijos principas",
    "type": "concept",
    "definition": "Aibių sąjungos elementų skaičiavimo taisyklė.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "concept-invariant": {
    "title": "Invariantas",
    "type": "concept",
    "definition": "Dydis ar savybė, kuri nekinta atliekant tam tikrus veiksmus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "concept-graph-theory": {
    "title": "Grafų teorija",
    "type": "concept",
    "definition": "Matematikos šaka, tirianti viršūnių ir briaunų tinklus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "concept-coloring-method": {
    "title": "Dažymo metodas",
    "type": "concept",
    "definition": "Struktūrinis įrodymo būdas naudojant periodinį langelių ar objektų spalvinimą.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-formula-keliniai": {
    "title": "Faktorialas (Kėliniai)",
    "type": "formula",
    "definition": "Naudojama skaičiuojant visų $n$ elementų perstatymus.",
    "intuition": "Naudojama skaičiuojant visų $n$ elementų perstatymus.",
    "formal": "n! = n \\cdot (n-1) \\dots 1",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-formula-deriniai": {
    "title": "Derinių skaičius (Niutono binomas)",
    "type": "formula",
    "definition": "Naudojama, kai reikia pasirinkti $k$ elementų iš $n$ be tvarkos.",
    "intuition": "Naudojama, kai reikia pasirinkti $k$ elementų iš $n$ be tvarkos.",
    "formal": "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "mistake-comb-order-confusion": {
    "title": "Tvarkos svarbos supainiojimas",
    "type": "mistake",
    "definition": "Tvarkos svarbos supainiojimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "mistake-double-counting-overlap": {
    "title": "Persidengiančių variantų sudėjimas",
    "type": "mistake",
    "definition": "Persidengiančių variantų sudėjimas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "olimpiada-09-concept-euler-totient": {
    "title": "Oilerio totiento funkcija $\\varphi(n)$",
    "type": "concept",
    "definition": "Natūraliųjų skaičių, neviršijančių $n$ ir pirminių su $n$, skaičius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-euler-theorem": {
    "title": "Oilerio teorema",
    "type": "concept",
    "definition": "Teiginys, kad $a^{\\varphi(n)} \\equiv 1 \\pmod n$, kai $\\gcd(a, n) = 1$.",
    "intuition": "",
    "formal": "",
    "related": [
      "olimpiada-09-concept-euler-totient"
    ],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-legendre": {
    "title": "Legendre formulė",
    "type": "concept",
    "definition": "Formulė, nurodanti pirminio skaičiaus $p$ laipsnį skaičiaus $n!$ skaidinyje.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-chinese-remainder": {
    "title": "Kinų liekanų teorema",
    "type": "concept",
    "definition": "Teorema apie tiesinių palyginimų sistemų sprendinių egzistavimą.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-divisibility-rules": {
    "title": "Dalumo požymiai",
    "type": "concept",
    "definition": "Taisyklės, leidžiančios greitai nustatyti, ar skaičius dalijasi iš kito skaičiaus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "concept-modular-inverse": {
    "title": "Atvirkštinis elementas moduliu $m$",
    "type": "concept",
    "definition": "Skaičius $x$, kuriam $ax \\equiv 1 \\pmod m$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "concept-infinite-descent": {
    "title": "Begalinio nusileidimo metodas",
    "type": "concept",
    "definition": "Įrodymo būdas parodant, kad nėra mažiausio teigiamo sprendinio.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "mistake-modular-division": {
    "title": "Dalyba modulinėje aritmetikoje",
    "type": "mistake",
    "definition": "Dalyba modulinėje aritmetikoje",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "mistake-prime-assumption": {
    "title": "Prielaida, kad n+1 yra pirminis",
    "type": "mistake",
    "definition": "Prielaida, kad n+1 yra pirminis",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "seka": {
    "title": "Seka",
    "type": "concept",
    "definition": "Skaičių eilė pagal taisyklę.",
    "intuition": "Tai sekos temos gija.",
    "formal": "Seka yra aibė, kurios elementai surikiuoti pagal indeksus.",
    "related": [
      "aritmetine-progresija",
      "geometrine-progresija"
    ],
    "topics": [
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9"
    ]
  },
  "sekos-narys": {
    "title": "Sekos narys",
    "type": "concept",
    "definition": "Konkretus skaičius sekoje.",
    "intuition": "Vienas elementas iš skaičių eilės.",
    "formal": "Sekos funkcijos reikšmė f(n) = a_n.",
    "related": [
      "seka"
    ],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "aritmetine-progresija": {
    "title": "Aritmetinė progresija",
    "type": "concept",
    "definition": "Seka su pastoviu skirtumu.",
    "intuition": "Kiekvienas narys gaunamas prie ankstesnio pridėjus tą patį skaičių.",
    "formal": "Aritmetinėje progresijoje skirtumas d pastovus.",
    "related": [
      "seka",
      "indukcija"
    ],
    "topics": [
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9"
    ]
  },
  "geometrine-progresija": {
    "title": "Geometrinė progresija",
    "type": "concept",
    "definition": "Seka su pastoviu santykiu.",
    "intuition": "Kiekvienas narys gaunamas dauginant iš to paties skaičiaus.",
    "formal": "Geometrinėje progresijoje vardiklis q pastovus.",
    "related": [
      "seka",
      "laipsnis"
    ],
    "topics": [
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9"
    ]
  },
  "n-ojo-nario-formule": {
    "title": "N Ojo Nario Formule",
    "type": "concept",
    "definition": "S?voka ?N Ojo Nario Formule? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "progresijos-skirtumas": {
    "title": "Progresijos Skirtumas",
    "type": "concept",
    "definition": "S?voka ?Progresijos Skirtumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "progresijos-vardiklis": {
    "title": "Progresijos Vardiklis",
    "type": "concept",
    "definition": "S?voka ?Progresijos Vardiklis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "n-nariu-suma": {
    "title": "N Nariu Suma",
    "type": "concept",
    "definition": "S?voka ?N Nariu Suma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "aritmetines-progresijos-n-narys": {
    "title": "Aritmetinės progresijos n-asis narys",
    "type": "formula",
    "definition": "Leidžia rasti bet kurį narį, žinant pirmąjį ir skirtumą.",
    "intuition": "Leidžia rasti bet kurį narį, žinant pirmąjį ir skirtumą.",
    "formal": "a_n = a_1 + (n-1)d",
    "related": [
      "aritmetine-progresija"
    ],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "geometrines-progresijos-n-narys": {
    "title": "Geometrinės progresijos n-asis narys",
    "type": "formula",
    "definition": "Leidžia rasti bet kurį narį, žinant pirmąjį ir vardiklį.",
    "intuition": "Leidžia rasti bet kurį narį, žinant pirmąjį ir vardiklį.",
    "formal": "b_n = b_1 \\cdot q^{n-1}",
    "related": [
      "geometrine-progresija"
    ],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "n-sumaiso-su-an": {
    "title": "Sumaišo numerį su nario reikšme",
    "type": "mistake",
    "definition": "Nesuprantama skirtis tarp vietos eilėje (n) ir toje vietoje esančio skaičiaus (an).",
    "intuition": "Užduotyje 'raskite dešimtą narį' įstatymo n=43 (reikšmę) vietoje n=10.",
    "formal": "Numeris n visada yra eilės numeris (1, 2, 3...).",
    "related": [
      "seka",
      "sekos-narys"
    ],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "d-zenklo-klaida": {
    "title": "Skirtumo d ženklo klaida",
    "type": "mistake",
    "definition": "Imamas skirtumas tarp didesnio ir mažesnio skaičiaus, o ne tarp sekančio ir ankstesnio.",
    "intuition": "Seka 10, 8, 6... skirtumą d užrašo kaip 2.",
    "formal": "Visada d = a2 - a1. Jei seka mažėja, d yra neigiamas.",
    "related": [
      "aritmetine-progresija"
    ],
    "topics": [
      "skaiciu-sekos-9"
    ]
  },
  "sklaidos-diagrama": {
    "title": "Sklaidos diagrama",
    "type": "concept",
    "definition": "Taškų diagrama dviem kintamiesiems.",
    "intuition": "Duomenų „debesis“, rodantis, kaip du dalykai susiję tarpusavyje.",
    "formal": "Plokštumos taškų rinkinis {(xi, yi)}, vaizduojantis matavimų poras.",
    "related": [
      "koreliacija",
      "regresijos-tiese"
    ],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "priezastingumas": {
    "title": "Priežastingumas",
    "type": "concept",
    "definition": "Priežasties ir pasekmės ryšys.",
    "intuition": "Vienas dalykas ne tik susijęs su kitu, bet jį tiesiogiai sukelia.",
    "formal": "Sąryšis, kur vienas įvykis (priežastis) yra atsakingas už kito įvykio (pasekmės) atsiradimą.",
    "related": [
      "koreliacija"
    ],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "teigiama-koreliacija": {
    "title": "Teigiama Koreliacija",
    "type": "concept",
    "definition": "S?voka ?Teigiama Koreliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "neigiama-koreliacija": {
    "title": "Neigiama Koreliacija",
    "type": "concept",
    "definition": "S?voka ?Neigiama Koreliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "koreliacijos-koeficientas": {
    "title": "Koreliacijos Koeficientas",
    "type": "concept",
    "definition": "S?voka ?Koreliacijos Koeficientas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "regresijos-tiese": {
    "title": "Regresijos Tiese",
    "type": "concept",
    "definition": "S?voka ?Regresijos Tiese? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "interpoliacija": {
    "title": "Interpoliacija",
    "type": "concept",
    "definition": "S?voka ?Interpoliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "ekstrapoliacija": {
    "title": "Ekstrapoliacija",
    "type": "concept",
    "definition": "S?voka ?Ekstrapoliacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "koreliacija-nera-priezastingumas": {
    "title": "Koreliacijos painiojimas su priežastingumu",
    "type": "mistake",
    "definition": "Nematomas trečiasis faktorius (pvz., amžius: vyresni vaikai yra ir aukštesni, ir daugiau skaito).",
    "intuition": "Teigia, kad 'skaitymas didina ūgį', nes tyrimas parodė, kad aukštesni mokiniai perskaito daugiau knygų.",
    "formal": "Koreliacija tik nurodo ryšį, bet ne jo prigimtį.",
    "related": [
      "koreliacija",
      "priezastingumas"
    ],
    "topics": [
      "sklaidos-diagramos-ir-koreliacija"
    ]
  },
  "ekstrapoliacijos-pavojus": {
    "title": "Nekritiška ekstrapoliacija",
    "type": "mistake",
    "definition": "Pasitikėjimas matematinės formulės neklystamumu už jos galiojimo ribų.",
    "intuition": "Prognozavimas reikšmėms, kurios yra toli nuo pradinių duomenų.",
    "formal": "Naudokite regresiją tik tam intervalui, kuriame buvo surinkti duomenys.",
    "related": [
      "regresija"
    ],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "fibonacio-seka": {
    "title": "Fibonačio seka",
    "type": "concept",
    "definition": "Seka, kurios kiekvienas narys lygus dviejų prieš jį einančių narių sumai.",
    "intuition": "Pradedame nuo 1 ir 1, tada sudedame paskutinius du: 1+1=2, 1+2=3, 2+3=5...",
    "formal": "$F_1=1, F_2=1, F_n = F_{n-1} + F_{n-2}$, kai $n \\in \\mathbb{N}, n > 2$.",
    "related": [
      "rekurentine-formule",
      "aukso-pjuvis",
      "binet-formule"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvis": {
    "title": "Aukso pjūvis",
    "type": "concept",
    "definition": "Proporcija, kai didesnės dalies santykis su mažesne lygus visumos santykiui su didesne.",
    "intuition": "Tai pati estetiškiausia proporcija gamtoje ir mene.",
    "formal": "",
    "related": [
      "aukso-pjuvio-skaicius",
      "fibonacio-seka",
      "aukso-staciakampis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvio-skaicius": {
    "title": "Aukso pjūvio skaičius",
    "type": "concept",
    "definition": "Iracionalusis skaičius $\\phi = \\frac{1+\\sqrt{5}}{2}$.",
    "intuition": "Maždaug 1,618.",
    "formal": "Lygties $x^2 - x - 1 = 0$ teigiamas sprendinys.",
    "related": [
      "aukso-pjuvis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "binet-formule": {
    "title": "Binet formulė",
    "type": "formula",
    "definition": "Formulė n-tajam Fibonačio nariui rasti tiesiogiai per $\\phi$.",
    "intuition": "",
    "formal": "",
    "related": [
      "fibonacio-seka",
      "aukso-pjuvis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-staciakampis": {
    "title": "Aukso stačiakampis",
    "type": "concept",
    "definition": "Stačiakampis, kurio kraštinių santykis yra $\\phi$.",
    "intuition": "Stačiakampis, kuris išlaiko savo proporcijas atpjovus kvadratą.",
    "formal": "",
    "related": [
      "aukso-pjuvis",
      "aukso-spirale"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "skaiciaus-skaidymas-proporcingai": {
    "title": "Skaiciaus Skaidymas Proporcingai",
    "type": "concept",
    "definition": "S?voka ?Skaiciaus Skaidymas Proporcingai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "sekos-desningumas": {
    "title": "Sekos Desningumas",
    "type": "concept",
    "definition": "S?voka ?Sekos Desningumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "rekurentine-formule": {
    "title": "Rekurentine Formule",
    "type": "concept",
    "definition": "S?voka ?Rekurentine Formule? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvio-seka": {
    "title": "Aukso Pjuvio Seka",
    "type": "concept",
    "definition": "S?voka ?Aukso Pjuvio Seka? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "proporcingoji-dalyba": {
    "title": "Proporcingoji Dalyba",
    "type": "concept",
    "definition": "S?voka ?Proporcingoji Dalyba? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-spirale": {
    "title": "Aukso Spirale",
    "type": "concept",
    "definition": "S?voka ?Aukso Spirale? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "fibonacio-formule": {
    "title": "Fibonačio sekos rekurentinė formulė",
    "type": "formula",
    "definition": "Kiekvienas narys yra dviejų ankstesnių narių suma.",
    "intuition": "Kiekvienas narys yra dviejų ankstesnių narių suma.",
    "formal": "F_n = F_{n-1} + F_{n-2}",
    "related": [
      "fibonacio-seka"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvio-reiksme": {
    "title": "Aukso pjūvio reikšmė",
    "type": "formula",
    "definition": "Tikslioji aukso pjūvio skaičiaus reikšmė.",
    "intuition": "Tikslioji aukso pjūvio skaičiaus reikšmė.",
    "formal": "\\phi = \\frac{1 + \\sqrt{5}}{2}",
    "related": [
      "aukso-pjuvio-skaicius"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvio-sarysis": {
    "title": "Aukso pjūvio pagrindinis sąryšis",
    "type": "formula",
    "definition": "Ši lygybė parodo, kad aukso pjūvio kvadratas yra lygus pačiam skaičiui plius vienetas.",
    "intuition": "Ši lygybė parodo, kad aukso pjūvio kvadratas yra lygus pačiam skaičiui plius vienetas.",
    "formal": "\\phi^2 = \\phi + 1",
    "related": [
      "aukso-pjuvis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "painioja-aukso-pjuvi-su-vidurkiu": {
    "title": "Painioja aukso pjūvį su vidurkiu",
    "type": "mistake",
    "definition": "Žodis 'pjūvis' gali asocijuotis su pusiau dalijimu.",
    "intuition": "Mokinys mano, kad aukso pjūvis reiškia padalijimą pusiau.",
    "formal": "Aukso pjūvis yra apytiksliai santykiu 1,618:1, o ne 1:1.",
    "related": [
      "aukso-pjuvis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "neteisingas-rekurentinis-skaiciavimas": {
    "title": "Neteisingas rekurentinis skaičiavimas",
    "type": "mistake",
    "definition": "Dėmesio klaida skaičiuojant ilgą seką.",
    "intuition": "Praleidžiamas narys arba neteisingai sudedama sekoje.",
    "formal": "Visada pasitikrinkite paskutines dvi sumas.",
    "related": [
      "rekurentine-formule"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "dispersija": {
    "title": "Dispersija",
    "type": "concept",
    "definition": "S?voka ?Dispersija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "standartinis-nuokrypis": {
    "title": "Standartinis Nuokrypis",
    "type": "concept",
    "definition": "S?voka ?Standartinis Nuokrypis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "normalusis-skirstinis": {
    "title": "Normalusis skirstinis",
    "type": "concept",
    "definition": "Varpo formos tikimybių pasiskirstymas.",
    "intuition": "Dauguma reikšmių yra centre, o kraštuose – vis mažiau.",
    "formal": "",
    "related": [
      "vidurkis",
      "standartinis-nuokrypis"
    ],
    "topics": [
      "duomenu-sklaida-skirstiniai-ir-patikimumas"
    ]
  },
  "statistinis-patikimumas": {
    "title": "Statistinis Patikimumas",
    "type": "concept",
    "definition": "S?voka ?Statistinis Patikimumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-sklaida-skirstiniai-ir-patikimumas"
    ]
  },
  "pasikliautinasis-intervalas": {
    "title": "Pasikliautinasis Intervalas",
    "type": "concept",
    "definition": "S?voka ?Pasikliautinasis Intervalas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-sklaida-skirstiniai-ir-patikimumas"
    ]
  },
  "populiacija": {
    "title": "Populiacija",
    "type": "concept",
    "definition": "S?voka ?Populiacija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "duomenu-sklaida-skirstiniai-ir-patikimumas"
    ]
  },
  "dispersijos-formule": {
    "title": "Dispersijos formulė",
    "type": "formula",
    "definition": "Patogiausia formulė dispersijai skaičiuoti praktikoje.",
    "intuition": "Patogiausia formulė dispersijai skaičiuoti praktikoje.",
    "formal": "Var(X) = E(X^2) - (E(X))^2",
    "related": [
      "dispersija"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "standartinio-nuokrypio-formule": {
    "title": "Standartinio nuokrypio formulė",
    "type": "formula",
    "definition": "Paverčia dispersiją į pradinį matavimo vienetą.",
    "intuition": "Paverčia dispersiją į pradinį matavimo vienetą.",
    "formal": "\\sigma = \\sqrt{Var(X)}",
    "related": [
      "standartinis-nuokrypis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "nuokrypis-be-saknies": {
    "title": "Pamiršta ištraukti šaknį",
    "type": "mistake",
    "definition": "Formulės yra panašios, mokinys pamiršta paskutinį žingsnį.",
    "intuition": "Apskaičiuoja dispersiją ir vadina ją standartiniu nuokrypiu.",
    "formal": "Visada prisiminkite: $s = \\sqrt{s^2}$.",
    "related": [
      "standartinis-nuokrypis"
    ],
    "topics": [
      "duomenu-sklaida-skirstiniai-ir-patikimumas"
    ]
  },
  "panasios-figuros": {
    "title": "Panašios figūros",
    "type": "concept",
    "definition": "Figūros, turinčios tą pačią formą, bet nebūtinai tą patį dydį.",
    "intuition": "Tai tarsi mastelio pakeitimas – didinimas arba mažinimas.",
    "formal": "",
    "related": [
      "panasumo-koeficientas",
      "trikampiu-panasumo-pozymiai"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "trikampio-vidurio-linija": {
    "title": "Trikampio vidurio linija",
    "type": "concept",
    "definition": "Atkarpa jungianti kraštinių vidurius.",
    "intuition": "Ji visada 'perpus mažesnė' ir lygiagreti pagrindui.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukrastine": {
    "title": "Pusiaukrastine",
    "type": "concept",
    "definition": "S?voka ?Pusiaukrastine? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukampine": {
    "title": "Pusiaukampine",
    "type": "concept",
    "definition": "S?voka ?Pusiaukampine? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukrastiniu-sankirta": {
    "title": "Pusiaukrastiniu Sankirta",
    "type": "concept",
    "definition": "S?voka ?Pusiaukrastiniu Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukampiniu-savybe": {
    "title": "Pusiaukampiniu Savybe",
    "type": "concept",
    "definition": "S?voka ?Pusiaukampiniu Savybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "perimetru-santykis": {
    "title": "Perimetru Santykis",
    "type": "concept",
    "definition": "S?voka ?Perimetru Santykis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "metriniai-sarysiai": {
    "title": "Metriniai Sarysiai",
    "type": "concept",
    "definition": "S?voka ?Metriniai Sarysiai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "perimetru-panasumo-formule": {
    "title": "Perimetrų santykio formulė",
    "type": "formula",
    "definition": "Panašių figūrų perimetrai sutinka kaip jų kraštinės.",
    "intuition": "Panašių figūrų perimetrai sutinka kaip jų kraštinės.",
    "formal": "\\frac{P_1}{P_2} = k",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "plotu-panasumo-formule": {
    "title": "Plotų santykio formulė",
    "type": "formula",
    "definition": "Panašių figūrų plotai sutinka kaip kraštinių kvadratai.",
    "intuition": "Panašių figūrų plotai sutinka kaip kraštinių kvadratai.",
    "formal": "\\frac{S_1}{S_2} = k^2",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "aukstines-projekciju-sarysis": {
    "title": "Aukštinės ir projekcijų sąryšis",
    "type": "formula",
    "definition": "Stačiojo trikampio aukštinė į įžambinę yra vidurinis proporcingasis tarp statinių projekcijų.",
    "intuition": "Stačiojo trikampio aukštinė į įžambinę yra vidurinis proporcingasis tarp statinių projekcijų.",
    "formal": "h^2 = a_c \\cdot b_c",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "plotu-santykis-be-kvadrato": {
    "title": "Pamiršta pakelti k kvadratu skaičiuojant plotą",
    "type": "mistake",
    "definition": "Intuicija klaidina, nes perimetras kinta tiesiškai.",
    "intuition": "Sako, kad jei kraštinė 2 kartus didesnė, tai ir plotas 2 kartus didesnis.",
    "formal": "Plotas kinta kvadratu: $S_{naujas} = k^2 \\cdot S_{senas}$.",
    "related": [
      "plotu-santykis"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "ibreztinis-daugiakampis": {
    "title": "Įbrėžtinis daugiakampis",
    "type": "concept",
    "definition": "Daugiakampis, kurio visos viršūnės yra ant apskritimo.",
    "intuition": "Daugiakampis yra apskritimo 'viduje'.",
    "formal": "",
    "related": [
      "apibreztinis-apskritimas"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "taisyklingasis-daugiakampis": {
    "title": "Taisyklingasis daugiakampis",
    "type": "concept",
    "definition": "Daugiakampis su lygiomis kraštinėmis ir lygiais kampais.",
    "intuition": "Tai 'tobulos' formos, tokios kaip lygiakraštis trikampis ar kvadratas.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinis-daugiakampis": {
    "title": "Apibreztinis Daugiakampis",
    "type": "concept",
    "definition": "S?voka ?Apibreztinis Daugiakampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinis-apskritimas": {
    "title": "Ibreztinis Apskritimas",
    "type": "concept",
    "definition": "S?voka ?Ibreztinis Apskritimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinis-apskritimas": {
    "title": "Apibreztinis Apskritimas",
    "type": "concept",
    "definition": "S?voka ?Apibreztinis Apskritimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinio-apskritimo-centras": {
    "title": "Ibreztinio Apskritimo Centras",
    "type": "concept",
    "definition": "S?voka ?Ibreztinio Apskritimo Centras? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinio-apskritimo-centras": {
    "title": "Apibreztinio Apskritimo Centras",
    "type": "concept",
    "definition": "S?voka ?Apibreztinio Apskritimo Centras? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinis-keturkampis": {
    "title": "Ibreztinis Keturkampis",
    "type": "concept",
    "definition": "S?voka ?Ibreztinis Keturkampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinis-keturkampis": {
    "title": "Apibreztinis Keturkampis",
    "type": "concept",
    "definition": "S?voka ?Apibreztinis Keturkampis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "sinusu-teorema-R": {
    "title": "Sinusu Teorema R",
    "type": "concept",
    "definition": "S?voka ?Sinusu Teorema R? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "trikampio-ploto-r-formule": {
    "title": "Trikampio ploto formulė per įbrėžtinį spindulį",
    "type": "formula",
    "definition": "Ši formulė sieja plotą, perimetrą ir įbrėžtinį spindulį.",
    "intuition": "Ši formulė sieja plotą, perimetrą ir įbrėžtinį spindulį.",
    "formal": "S = p \\cdot r",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "trikampio-ploto-R-formule": {
    "title": "Trikampio ploto formulė per apibrėžtinį spindulį",
    "type": "formula",
    "definition": "Ši formulė sieja plotą, kraštines ir apibrėžtinį spindulį.",
    "intuition": "Ši formulė sieja plotą, kraštines ir apibrėžtinį spindulį.",
    "formal": "S = \\frac{abc}{4R}",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "sinusu-teorema-formule": {
    "title": "Sinusų teorema su spinduliu R",
    "type": "formula",
    "definition": "Kraštinės ir prieš ją esančio kampo sinuso santykis lygus apibrėžtinio apskritimo skersmeniui.",
    "intuition": "Kraštinės ir prieš ją esančio kampo sinuso santykis lygus apibrėžtinio apskritimo skersmeniui.",
    "formal": "\\frac{a}{\\sin A} = 2R",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "painioja-centrus-pusiaukrastines-ir-pusiaukampines": {
    "title": "Painioja apskritimų centrų apibrėžimus",
    "type": "mistake",
    "definition": "Abi sąvokos panašios, abi susijusios su sankirtos taškais.",
    "intuition": "Mano, kad įbrėžtinio apskritimo centras yra vidurio statmenų sankirta.",
    "formal": "Įbrėžtinis (r) - pusiaukampinės. Apibrėžtinis (R) - vidurio statmenys.",
    "related": [
      "ibreztinio-apskritimo-centras",
      "apibreztinio-apskritimo-centras"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "faktorialas": {
    "title": "Faktorialas",
    "type": "concept",
    "definition": "Visų natūraliųjų skaičių nuo 1 iki n sandauga.",
    "intuition": "Skaičius, rodantis kiek būdų galima surikiuoti n daiktų į eilę.",
    "formal": "n! = 1 · 2 · 3 · ... · n. Apibrėžiama, kad 0! = 1.",
    "related": [
      "keliniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas",
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "perstatos": {
    "title": "Perstatos",
    "type": "concept",
    "definition": "S?voka ?Perstatos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "klasikine-tikimybe": {
    "title": "Klasikine Tikimybe",
    "type": "concept",
    "definition": "S?voka ?Klasikine Tikimybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "ilgalaike-tikimybe": {
    "title": "Ilgalaike Tikimybe",
    "type": "concept",
    "definition": "S?voka ?Ilgalaike Tikimybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "priesingas-ivyki": {
    "title": "Priesingas Ivyki",
    "type": "concept",
    "definition": "S?voka ?Priesingas Ivyki? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "baigtis": {
    "title": "Baigtis",
    "type": "concept",
    "definition": "S?voka ?Baigtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "perstatu-formule": {
    "title": "Perstatų skaičiaus formulė",
    "type": "formula",
    "definition": "Keliais būdais galima sukeisti n objektų vietomis.",
    "intuition": "Keliais būdais galima sukeisti n objektų vietomis.",
    "formal": "P_n = n!",
    "related": [],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "sumaiso-sudeti-ir-daugyba": {
    "title": "Sukeičia sudėties ir daugybos taisykles",
    "type": "mistake",
    "definition": "Sukeičia sudėties ir daugybos taisykles",
    "intuition": "Daugina variantus ten, kur reikia sudėti (arba atvirkščiai).",
    "formal": "Jei renkatės tik vieną iš grupių – sudėkite. Jei renkatės po vieną iš kiekvienos grupės – dauginkite.",
    "related": [
      "sudeties-taisykle",
      "daugybos-taisykle"
    ],
    "topics": [
      "kombinatorika-ir-ilgalaike-tikimybe"
    ]
  },
  "paraboles-metodas": {
    "title": "Paraboles Metodas",
    "type": "concept",
    "definition": "S?voka ?Paraboles Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "intervalu-metodas": {
    "title": "Intervalu Metodas",
    "type": "concept",
    "definition": "S?voka ?Intervalu Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "posaknio-zenklas": {
    "title": "Posaknio Zenklas",
    "type": "concept",
    "definition": "S?voka ?Posaknio Zenklas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "griežtoji-nelygybe": {
    "title": "Griežtoji Nelygybe",
    "type": "concept",
    "definition": "S?voka ?Griežtoji Nelygybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "negriežtoji-nelygybe": {
    "title": "Negriežtoji Nelygybe",
    "type": "concept",
    "definition": "S?voka ?Negriežtoji Nelygybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "tuščia-aibė": {
    "title": "Tuščia Aibė",
    "type": "concept",
    "definition": "S?voka ?Tuščia Aibė? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "visų-realiųjų-skaičių-aibė": {
    "title": "Visų Realiųjų Skaičių Aibė",
    "type": "concept",
    "definition": "S?voka ?Visų Realiųjų Skaičių Aibė? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "nelinearine-lygciu-sistema": {
    "title": "Nelinearinė lygčių sistema",
    "type": "concept",
    "definition": "Sistema, kurioje yra bent viena ne pirmojo laipsnio lygtis.",
    "intuition": "Kreivių susikirtimas plokštumoje.",
    "formal": "Lygčių rinkinys, kurio bendrieji sprendiniai gali būti ne vienas taškas.",
    "related": [
      "keitimo-budas-nelinearinis"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "nelygybiu-sistema": {
    "title": "Nelygybių sistema",
    "type": "concept",
    "definition": "Kelių apribojimų rinkinys kintamajam.",
    "intuition": "Bendros erdvės paieška tarp kelių taisyklių.",
    "formal": "Sprendinių aibė, lygi visų sistemos nelygybių sprendinių aibių sankirtai.",
    "related": [
      "sistemos-sankirta"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "sistemos-sankirta": {
    "title": "Sistemos Sankirta",
    "type": "concept",
    "definition": "S?voka ?Sistemos Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "keitimo-budas-nelinearinis": {
    "title": "Keitimo Budas Nelinearinis",
    "type": "concept",
    "definition": "S?voka ?Keitimo Budas Nelinearinis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "grafinis-sistemu-vaizdavimas": {
    "title": "Grafinis Sistemu Vaizdavimas",
    "type": "concept",
    "definition": "S?voka ?Grafinis Sistemu Vaizdavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "tieses-ir-paraboles-sankirta": {
    "title": "Tieses Ir Paraboles Sankirta",
    "type": "concept",
    "definition": "S?voka ?Tieses Ir Paraboles Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "bendras-sprendinys": {
    "title": "Bendras Sprendinys",
    "type": "concept",
    "definition": "S?voka ?Bendras Sprendinys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "apskritimo-lygtis-pagrindine": {
    "title": "Apskritimo lygtis",
    "type": "formula",
    "definition": "Dažnai naudojama sudėtingesnėse sistemose kartu su tiesėmis.",
    "intuition": "Dažnai naudojama sudėtingesnėse sistemose kartu su tiesėmis.",
    "formal": "x^2 + y^2 = R^2",
    "related": [
      "nelinearine-lygciu-sistema"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "tik-viena-kintamojo-pora-rasta": {
    "title": "Rasta tik viena sprendinių pora",
    "type": "mistake",
    "definition": "Pamirštama neigiama šaknis.",
    "intuition": "Išsprendžia x^2=4 ir paima tik x=2.",
    "formal": "Kvadratinė lygtis sistemoje dažniausiai duoda dvi reikšmes.",
    "related": [
      "nelinearine-lygciu-sistema"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "olimpiada-10-concept-vieta": {
    "title": "Vietos formulės",
    "type": "concept",
    "definition": "Sąryšiai tarp daugianario šaknų ir jo koeficientų.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "olimpiada-10-concept-am-gm": {
    "title": "AM-GM nelygybė",
    "type": "concept",
    "definition": "Aritmetinio ir geometrinio vidurkių nelygybė.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra",
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-remainder-theorem": {
    "title": "Bezu teorema",
    "type": "concept",
    "definition": "Daugianario $P(x)$ liekana dalijant iš $x-a$ yra lygi $P(a)$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "concept-newton-sums": {
    "title": "Niutono sumos",
    "type": "concept",
    "definition": "Formulės, siejančios laipsnių sumas su elementariaisiais simetriniais daugianariais.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "concept-characteristic-eq": {
    "title": "Charakteristinė lygtis",
    "type": "concept",
    "definition": "Lygtis, naudojama tiesinėms rekurentinėms sekoms spręsti.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "olimpiada-10-concept-cauchy-schwarz": {
    "title": "Koši-Švarco nelygybė",
    "type": "concept",
    "definition": "Nelygybė, susiejanti sumas ir kvadratų sumas.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra",
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-symmetric-polynomials": {
    "title": "Olimpiada 10 Concept Symmetric Polynomials",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 10 Concept Symmetric Polynomials? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "mistake-vieta-signs": {
    "title": "Ženklų klaidos Vietos formulėse",
    "type": "mistake",
    "definition": "Ženklų klaidos Vietos formulėse",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "mistake-domain-reduction": {
    "title": "Sprendinių praradimas dalinant",
    "type": "mistake",
    "definition": "Sprendinių praradimas dalinant",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "olimpiada-10-concept-inversion": {
    "title": "Inversija apskritimo atžvilgiu",
    "type": "concept",
    "definition": "Geometrinis atvaizdis, kuris kiekvieną tašką $P$ (išskyrus centrą $O$) atvaizduoja į tašką $P'$ tiesėje $OP$ taip, kad $OP \\cdot OP' = R^2$.",
    "intuition": "Erdvės transformacija, kuri tieses ir apskritimus paverčia kitais apskritimais ar tiesėmis.",
    "formal": "Atvaizdis $\\psi$ su centru $O$ ir spinduliu $R$, atvaizduojantis tašką $P \\neq O$ į $P'$, kur $P' \\in OP$ ir $OP \\cdot OP' = R^2$.",
    "related": [],
    "topics": [
      "olimpiada-10-geometrija"
    ]
  },
  "concept-ceva-teorema": {
    "title": "Čevos teorema",
    "type": "theorem",
    "definition": "Sąlyga, kada trys tiesės, einančios per trikampio viršūnes, susikerta viename taške.",
    "intuition": "",
    "formal": "$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$",
    "related": [
      "concept-menelajaus-teorema"
    ],
    "topics": [
      "olimpiada-10-geometrija"
    ]
  },
  "concept-menelajaus-teorema": {
    "title": "Menelajaus teorema",
    "type": "theorem",
    "definition": "Sąlyga, kada trys taškai ant trikampio kraštinių (ar jų tęsinių) yra vienoje tiesėje.",
    "intuition": "",
    "formal": "$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$",
    "related": [
      "concept-ceva-teorema"
    ],
    "topics": [
      "olimpiada-10-geometrija"
    ]
  },
  "concept-tasko-galia": {
    "title": "Taško galia apskritimo atžvilgiu",
    "type": "concept",
    "definition": "Pastovus dydis ^2 - R^2$, būdingas taškui ir apskritimui.",
    "intuition": "Bet kuriai kirtei per tašką P, atkarpų nuo P iki susikirtimo su apskritimu sandauga yra pastovi.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-geometrija"
    ]
  },
  "concept-spiralinis-panasumas": {
    "title": "Spiralinis panašumas",
    "type": "concept",
    "definition": "Posūkio ir homotetijos kompozicija turinti bendrą centrą.",
    "intuition": "Transformacija, kuri ne tik didina/mažina objektą, bet ir jį pasuka.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-geometrija"
    ]
  },
  "olimpiada-10-concept-euler-formula-planar": {
    "title": "Oilerio formulė plokštiesiems grafams",
    "type": "concept",
    "definition": "Ryšys $V - E + F = 2$ susietiems plokštiesiems grafams.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-deriniai": {
    "title": "Deriniai",
    "type": "concept",
    "definition": "Pasirinkimai iš n elementų po k, kai tvarka nesvarbi.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-keliniai-su-pasikartojimais": {
    "title": "Kėliniai su pasikartojimais",
    "type": "concept",
    "definition": "Objektų išdėstymas eilėje, kai kai kurie objektai yra identiški.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-ijungimo-isjungimo-principas": {
    "title": "Įjungimo-išjungimo principas",
    "type": "method",
    "definition": "Aibių sąjungos dydžio skaičiavimas per sankirtas.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-katalano-skaiciai": {
    "title": "Katalano skaičiai",
    "type": "concept",
    "definition": "Seka $C_n$, aprašanti daugybę kombinatorinių struktūrų.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-generating-functions": {
    "title": "Generuojančios funkcijos",
    "type": "concept",
    "definition": "Polinomai ar eilutės, kurių koeficientai koduoja sekos narius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-recurrence-relations": {
    "title": "Rekurentiniai sąryšiai",
    "type": "concept",
    "definition": "Sekos apibrėžimas per jos ankstesnius narius.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-ramsey-theory": {
    "title": "Ramzio teorija",
    "type": "concept",
    "definition": "Mokslas apie tvarkos atsiradimą didelėse sistemose (R(n,m)).",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "mistake-planar-non-connected": {
    "title": "Oilerio formulės taikymas nesusietam grafui",
    "type": "mistake",
    "definition": "Oilerio formulės taikymas nesusietam grafui",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "mistake-catalan-index": {
    "title": "Katalano skaičių indekso klaida",
    "type": "mistake",
    "definition": "Katalano skaičių indekso klaida",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "olimpiada-10-concept-titus-lemma": {
    "title": "Titu lema",
    "type": "concept",
    "definition": "Koši-Švarco nelygybės trupmeninė forma.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-jensen": {
    "title": "Jenseno nelygybė",
    "type": "concept",
    "definition": "Nelygybė išgaubtosioms funkcijoms.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-schur": {
    "title": "Šūro nelygybė",
    "type": "concept",
    "definition": "Simetrinė nelygybė trims kintamiesiems.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "concept-homogenization": {
    "title": "Homogenizavimas",
    "type": "concept",
    "definition": "Nelygybės narių laipsnių suvienodinimas naudojant apribojimus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-rearrangement": {
    "title": "Olimpiada 10 Concept Rearrangement",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 10 Concept Rearrangement? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-chebyshev": {
    "title": "Olimpiada 10 Concept Chebyshev",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 10 Concept Chebyshev? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-muirhead": {
    "title": "Olimpiada 10 Concept Muirhead",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 10 Concept Muirhead? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "concept-normalization": {
    "title": "Concept Normalization",
    "type": "concept",
    "definition": "S?voka ?Concept Normalization? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "mistake-am-gm-negative": {
    "title": "AM-GM taikymas neigiamiems skaičiams",
    "type": "mistake",
    "definition": "AM-GM taikymas neigiamiems skaičiams",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "mistake-jensen-convexity": {
    "title": "Neteisingas išgaubtumo nustatymas",
    "type": "mistake",
    "definition": "Neteisingas išgaubtumo nustatymas",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-quad-reciprocity": {
    "title": "Kvadratinio abipusiškumo dėsnis",
    "type": "concept",
    "definition": "Ryšys tarp dviejų skirtingų nelyginių pirminių skaičių kvadratinių liekanų savybių.",
    "intuition": "Parodo, ar skaičius yra kvadratinė liekana moduliu $p$ per ryšį su kitu pirminiu skaičiumi $q$.",
    "formal": "Jei $p$ ir $q$ yra skirtingi nelyginiai pirminiai skaičiai, tai $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-gaussian-integers": {
    "title": "Gauso sveikieji skaičiai",
    "type": "concept",
    "definition": "Kompleksiniai skaičiai, kurių realioji ir tariamoji dalys yra sveikieji skaičiai.",
    "intuition": "Kompleksinių skaičių aibė $\\mathbb{Z}[i]$, kurioje galima atlikti dalybą su liekana ir skaidyti pirminiais daugtuviais.",
    "formal": "Aibė $\\mathbb{Z}[i] = \\{a + bi \\mid a, b \\in \\mathbb{Z}\\}$, kur $i^2 = -1$.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-fermat-little": {
    "title": "Mažoji Fermo teorema",
    "type": "concept",
    "definition": "Nurodo pirminio skaičiaus laipsnio liekaną.",
    "intuition": "Jei $p$ yra pirminis, tai $a^p$ turi tą pačią liekaną kaip $a$ moduliu $p$.",
    "formal": "$a^p \\equiv a \\pmod p$ bet kuriam sveikajam $a$ ir pirminiam $p$.",
    "related": [
      "olimpiada-10-concept-euler-theorem"
    ],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-euler-theorem": {
    "title": "Oilerio teorema",
    "type": "concept",
    "definition": "Mažosios Fermo teoremos apibendrinimas bet kuriam moduliui.",
    "intuition": "Laipsnis, keliamas funkcijos $\\phi(n)$ reikšme, duoda 1 moduliu $n$.",
    "formal": "Jei $\\text{gcd}(a, n) = 1$, tai $a^{\\phi(n)} \\equiv 1 \\pmod n$.",
    "related": [
      "olimpiada-10-concept-fermat-little"
    ],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-crt": {
    "title": "Kinų liekanų teorema",
    "type": "concept",
    "definition": "Sprendinių egzistavimo sąlyga palyginimų sistemoms.",
    "intuition": "Jei turime liekanas pagal tarpusavyje pirminius modulius, galime vienareikšmiškai rasti skaičių.",
    "formal": "Sistemai $x \\equiv a_i \\pmod{m_i}$ egzistuoja vienintelis sprendinys moduliu $M = \\prod m_i$, jei visi $m_i$ yra poromis pirminiai.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-diophantine": {
    "title": "Diofanto lygtys",
    "type": "concept",
    "definition": "Lygtys su sveikaisiais kintamaisiais.",
    "intuition": "Lygtys, kurių sprendiniai turi būti sveikieji skaičiai.",
    "formal": "Lygtis $f(x_1, \\dots, x_n) = 0$, kur $x_i \\in \\mathbb{Z}$.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-pell": {
    "title": "Pelio lygtis",
    "type": "concept",
    "definition": "Kvadratinė Diofanto lygtis $x^2 - Dy^2 = 1$.",
    "intuition": "Susijusi su $\\sqrt{D}$ artiniais.",
    "formal": "$x^2 - Dy^2 = 1$, kur $D$ nėra tikslusis kvadratas.",
    "related": [
      "olimpiada-10-concept-continued-fractions"
    ],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-arithmetic-functions": {
    "title": "Aritmetinės funkcijos",
    "type": "concept",
    "definition": "Funkcijos apibrėžtos natūraliuose skaičiuose.",
    "intuition": "Savybės kaip daliklių skaičius $\\tau(n)$ arba daliklių suma $\\sigma(n)$.",
    "formal": "Funkcija $f: \\mathbb{N} \\to \\mathbb{C}$. Dažnai multiplikatyvi.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-continued-fractions": {
    "title": "Grandininės trupmenos",
    "type": "concept",
    "definition": "Skaičiaus išraiška per sveikųjų dalių seką.",
    "intuition": "Būdas gauti geriausius racionaliuosius artinius realiam skaičiui.",
    "formal": "$a_0 + 1/(a_1 + 1/(a_2 + \\dots))$.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "olimpiada-10-concept-lte": {
    "title": "Lifting the Exponent (LTE) lema",
    "type": "concept",
    "definition": "Pirminio skaičiaus laipsnio radimas reiškiniuose $a^n - b^n$.",
    "intuition": "Leidžia tiksliai pasakyti, kiek kartu pirminis $p$ įeina į $a^n - b^n$ skaidinį.",
    "formal": "$v_p(a^n - b^n) = v_p(a-b) + v_p(n)$ tam tikromis sąlygomis.",
    "related": [],
    "topics": [
      "olimpiada-10-skaiciu-teorija"
    ]
  },
  "invariantas": {
    "title": "Invariantas",
    "type": "concept",
    "definition": "Dydis ar savybė, kuri nekinta atliekant leistinus veiksmus.",
    "intuition": "Tai, kas lieka nepakitę, net kai viskas aplink keičiasi.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "ekstremumo-principas": {
    "title": "Ekstremumo principas",
    "type": "concept",
    "definition": "Strategija nagrinėti ribines (didžiausias arba mažiausias) reikšmes.",
    "intuition": "Pradėkime nuo mažiausio arba didžiausio elemento, kad pamatytume apribojimus.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "indukcija-savoka": {
    "title": "Matematinė indukcija",
    "type": "concept",
    "definition": "Įrodymo būdas, pagrįstas perėjimu nuo žinomo atvejo prie sekančio.",
    "intuition": "Domino efektas: nuvertus pirmą ir užtikrinus perėjimą, nuvirs visi.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "spalvinimo-metodas": {
    "title": "Spalvinimo Metodas",
    "type": "concept",
    "definition": "S?voka ?Spalvinimo Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "prieštaros-metodas": {
    "title": "Prieštaros Metodas",
    "type": "concept",
    "definition": "S?voka ?Prieštaros Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "klaida-netinkami-objektai": {
    "title": "Netinkamas objektų parinkimas Dirichlė principui",
    "type": "mistake",
    "definition": "Neteisingai suprasta uždavinio sąlyga arba klaidingai suskaičiuoti atvejai.",
    "intuition": "Mokinys bando taikyti Dirichlė principą, bet objektų skaičius nėra didesnis už dėžučių skaičių.",
    "formal": "Visada patikrinkite, ar objektų (balandžių) skaičius $N$ yra griežtai didesnis už dėžučių (narvelių) skaičių $k$.",
    "related": [
      "dirichle-principas"
    ],
    "topics": [
      "olimpiada-10-strategijos-ir-irodymai"
    ]
  },
  "trupmenine-racionalioji-lygtis": {
    "title": "Trupmeninė racionalioji lygtis",
    "type": "concept",
    "definition": "Lygtis su kintamuoju vardiklyje.",
    "intuition": "Lygtis, kurioje „apačioje“ sėdi x.",
    "formal": "Lygtis f(x) = 0, kur f(x) yra racionalioji funkcija.",
    "related": [
      "lra-leistinuju-reiksmiu-aibe",
      "pasaline-saknis"
    ],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "lra-leistinuju-reiksmiu-aibe": {
    "title": "Leistinųjų reikšmių aibė (LRA)",
    "type": "concept",
    "definition": "Visos kintamojo reikšmės, su kuriomis vardiklis nelygus nuliui.",
    "intuition": "Atsakymų „baltasis sąrašas“.",
    "formal": "D(f) = {x ∈ R : vardiklis(x) ≠ 0}.",
    "related": [],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "pasaline-saknis": {
    "title": "Pasaline Saknis",
    "type": "concept",
    "definition": "S?voka ?Pasaline Saknis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "bendravardiklinimas-lygtyse": {
    "title": "Bendravardiklinimas Lygtyse",
    "type": "concept",
    "definition": "S?voka ?Bendravardiklinimas Lygtyse? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "proporcijos-savybe": {
    "title": "Proporcijos Savybe",
    "type": "concept",
    "definition": "S?voka ?Proporcijos Savybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "proporcijos-formule": {
    "title": "Proporcijos savybė",
    "type": "formula",
    "definition": "Padeda atsikratyti trupmenų lyginant du santykius.",
    "intuition": "Padeda atsikratyti trupmenų lyginant du santykius.",
    "formal": "\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc",
    "related": [
      "proporcijos-savybe"
    ],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "pasalines-saknies-neismetimas": {
    "title": "Pašalinės šaknies neįvertinimas",
    "type": "mistake",
    "definition": "Pamirštama patikrinti LRA pabaigoje.",
    "intuition": "Gauna x=2 lygtyje su vardikliu (x-2) ir užrašo tai kaip atsakymą.",
    "formal": "Visada sulyginkite gautą šaknį su draudžiamomis reikšmėmis.",
    "related": [
      "pasaline-saknis"
    ],
    "topics": [
      "racionaliosios-lygtys"
    ]
  },
  "aibe": {
    "title": "Aibė",
    "type": "concept",
    "definition": "Objektų rinkinys, traktuojamas kaip visuma.",
    "intuition": "Tai krepšys, į kurį sumesti tam tikri daiktai (skaičiai, raidės).",
    "formal": "Aibė – matematikos pirminė sąvoka, reiškianti objektų rinkinį.",
    "related": [
      "elementas",
      "tuscia-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "elementas": {
    "title": "Elementas",
    "type": "concept",
    "definition": "Objektas, priklausantis aibei.",
    "intuition": "Tai vienas iš krepšyje esančių daiktų.",
    "formal": "Aibę sudarantis objektas.",
    "related": [
      "aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "tuscia-aibe": {
    "title": "Tuščioji aibė",
    "type": "concept",
    "definition": "Aibė, neturinti nei vieno elemento.",
    "intuition": "Tuščias krepšys.",
    "formal": "Aibė A, kuriai su kiekvienu x galioja x ∉ A.",
    "related": [
      "aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "poaibis": {
    "title": "Poaibis",
    "type": "concept",
    "definition": "Aibė, kurios visi elementai priklauso kitai aibei.",
    "intuition": "Mažesnis krepšys, kurio visas turinys yra didesniame krepšyje.",
    "formal": "B ⊆ A, jei ∀x (x ∈ B ⇒ x ∈ A).",
    "related": [
      "aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "aibiu-sajunga": {
    "title": "Aibių sąjunga",
    "type": "concept",
    "definition": "Elementų, priklausančių bent vienai aibei, rinkinys.",
    "intuition": "Visų daiktų iš abiejų krepšių supylimas į vieną.",
    "formal": "A ∪ B = {x | x ∈ A ∨ x ∈ B}.",
    "related": [
      "aibiu-sankirta",
      "aibiu-skirtumas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "aibiu-sankirta": {
    "title": "Aibių sankirta",
    "type": "concept",
    "definition": "Elementų, priklausančių abiem aibėms, rinkinys.",
    "intuition": "Tik tie daiktai, kurie yra abiejuose krepšiuose vienu metu.",
    "formal": "A ∩ B = {x | x ∈ A ∧ x ∈ B}.",
    "related": [
      "aibiu-sajunga",
      "aibiu-skirtumas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "aibiu-skirtumas": {
    "title": "Aibių skirtumas",
    "type": "concept",
    "definition": "Aibės A elementai, kurie nepriklauso aibei B.",
    "intuition": "Iš krepšio A išmetame visus daiktus, kurie yra ir krepšyje B.",
    "formal": "A \\ B = {x | x ∈ A ∧ x ∉ B}.",
    "related": [
      "aibiu-sajunga",
      "aibiu-sankirta"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "aibiu-papildinys": {
    "title": "Aibių papildinys",
    "type": "concept",
    "definition": "Elementai, kurie nepriklauso duotai aibei, bet priklauso visuotinei aibei.",
    "intuition": "Viskas, kas yra aplink aibę jos kontekste.",
    "formal": "A^c = {x ∈ U | x ∉ A}.",
    "related": [
      "visuotine-aibe",
      "aibiu-skirtumas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "visuotine-aibe": {
    "title": "Visuotinė aibė",
    "type": "concept",
    "definition": "Aibė, kurioje yra visi nagrinėjamo uždavinio objektai.",
    "intuition": "Pasaulis arba rėmai, kuriuose veikiame.",
    "formal": "Aibė U, kurios poaibiai yra visos nagrinėjamos aibės.",
    "related": [
      "aibiu-papildinys"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "veno-diagrama": {
    "title": "Veno diagrama",
    "type": "concept",
    "definition": "Geometrinis aibių vaizdavimo būdas.",
    "intuition": "Apskritimų brėžiniai, rodantys, kaip aibės persidengia.",
    "formal": "Aibių tarpusavio santykių vizualizacija plokštumoje.",
    "related": [
      "aibe",
      "aibiu-sankirta"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "realiuju-skaiciu-aibe": {
    "title": "Realiųjų skaičių aibė",
    "type": "concept",
    "definition": "Visų racionaliųjų ir iracionaliųjų skaičių visuma.",
    "intuition": "Visi skaičiai ant skaičių tiesės.",
    "formal": "R = Q ∪ I.",
    "related": [],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "baigtine-aibe": {
    "title": "Baigtinė aibė",
    "type": "concept",
    "definition": "Aibė, turinti konkretų elementų skaičių.",
    "intuition": "Aibė, kurią galima suskaičiuoti ir pabaigti.",
    "formal": "Aibė, kurios elementų skaičius n yra natūralusis skaičius arba nulis.",
    "related": [
      "begaline-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "begaline-aibe": {
    "title": "Begalinė aibė",
    "type": "concept",
    "definition": "Aibė, kurios elementų skaičius nėra baigtinis.",
    "intuition": "Aibė, kurios elementus skaičiuodami niekada nebaigtume.",
    "formal": "Aibė, kuri nėra baigtinė.",
    "related": [
      "baigtine-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "kardinalumas": {
    "title": "Aibės galia (kardinalumas)",
    "type": "concept",
    "definition": "Aibės elementų skaičiaus matas.",
    "intuition": "Aibės dydis.",
    "formal": "Aibės elementų kiekis (baigtinėms aibėms).",
    "related": [
      "baigtine-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "kaipsnis-aibe": {
    "title": "Laisvumo aibė (Power set)",
    "type": "concept",
    "definition": "Visų duotosios aibės poaibių aibė.",
    "intuition": "Aibė, sudaryta iš visų galimų pradinės aibės derinių.",
    "formal": "P(A) = {B | B ⊆ A}.",
    "related": [
      "poaibis"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "intervalas": {
    "title": "Intervalas",
    "type": "concept",
    "definition": "Skaičių aibės dalis tarp dviejų ribų.",
    "intuition": "Atkarpa ant skaičių tiesės.",
    "formal": "{x ∈ R | a < x < b} ir kiti variantai.",
    "related": [
      "realiuju-skaiciu-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "sajungos-apibrezimas": {
    "title": "Aibių sąjungos apibrėžimas",
    "type": "formula",
    "definition": "Sąjunga apima visus elementus, esančius bent vienoje iš aibių.",
    "intuition": "Sąjunga apima visus elementus, esančius bent vienoje iš aibių.",
    "formal": "A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}",
    "related": [
      "aibiu-sajunga"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "sankirtos-apibrezimas": {
    "title": "Aibių sankirtos apibrėžimas",
    "type": "formula",
    "definition": "Sankirta apima tik bendrus aibių elementus.",
    "intuition": "Sankirta apima tik bendrus aibių elementus.",
    "formal": "A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}",
    "related": [
      "aibiu-sankirta"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "skirtumo-apibrezimas": {
    "title": "Aibių skirtumo apibrėžimas",
    "type": "formula",
    "definition": "Skirtumas palieka tik tuos A elementus, kurių nėra aibėje B.",
    "intuition": "Skirtumas palieka tik tuos A elementus, kurių nėra aibėje B.",
    "formal": "A \\setminus B = \\{x \\mid x \\in A \\text{ ir } x \\notin B\\}",
    "related": [
      "aibiu-skirtumas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "papildinio-apibrezimas": {
    "title": "Aibės papildinio apibrėžimas",
    "type": "formula",
    "definition": "Papildinį sudaro visi elementai, kurie nepriklauso A, bet priklauso U.",
    "intuition": "Papildinį sudaro visi elementai, kurie nepriklauso A, bet priklauso U.",
    "formal": "\\bar{A} = U \\setminus A",
    "related": [
      "aibiu-papildinys"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "de-morgano-desniai": {
    "title": "De Morgano dėsniai",
    "type": "formula",
    "definition": "Dėsniai, nusakantys ryšį tarp papildinio ir sąjungos bei sankirtos.",
    "intuition": "Dėsniai, nusakantys ryšį tarp papildinio ir sąjungos bei sankirtos.",
    "formal": "\\overline{A \\cup B} = \\bar{A} \\cap \\bar{B}, \\quad \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B}",
    "related": [
      "aibiu-papildinys",
      "aibiu-sajunga",
      "aibiu-sankirta"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "sajungos-elementu-skaicius-2": {
    "title": "Dviejų aibių sąjungos elementų skaičius",
    "type": "formula",
    "definition": "Naudojama skaičiuoti elementų kiekį, kai aibės persidengia.",
    "intuition": "Naudojama skaičiuoti elementų kiekį, kai aibės persidengia.",
    "formal": "|A \\cup B| = |A| + |B| - |A \\cap B|",
    "related": [
      "kardinalumas",
      "aibiu-sajunga"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "sajungos-elementu-skaicius-3": {
    "title": "Trijų aibių sąjungos elementų skaičius",
    "type": "formula",
    "definition": "Sudėtingesnė formulė trims persidengiančioms aibėms.",
    "intuition": "Sudėtingesnė formulė trims persidengiančioms aibėms.",
    "formal": "|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |A \\cap C| + |B \\cap C|) + |A \\cap B \\cap C|",
    "related": [
      "kardinalumas",
      "veno-diagrama"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "painioja-sajunga-ir-sankirta": {
    "title": "Painioja sąjungą (∪) su sankirta (∩)",
    "type": "mistake",
    "definition": "Ženklai vizualiai panašūs (apversti).",
    "intuition": "Naudoja sankirtą, kai reikia apjungti visus elementus.",
    "formal": "Atsiminkite: ∪ – kaip puodelis (supilame viską), ∩ – kaip kalnas (tik tai, kas viršūnėje/bendra).",
    "related": [
      "aibiu-sajunga",
      "aibiu-sankirta"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "skirtumo-tvarka": {
    "title": "Neteisinga aibių skirtumo tvarka",
    "type": "mistake",
    "definition": "Sąjunga ir sankirta yra komutatyvios, o skirtumas – ne.",
    "intuition": "Mano, kad A \\ B yra tas pats, kas B \\ A.",
    "formal": "A \\ B reiškia elementus iš A, kurių nėra B.",
    "related": [
      "aibiu-skirtumas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "tuscios-aibes-zymejimas": {
    "title": "Tuščiosios aibės žymėjimas skliaustuose",
    "type": "mistake",
    "definition": "Mano, kad visos aibės turi būti skliaustuose.",
    "intuition": "Rašo {∅} tuščiajai aibei pažymėti.",
    "formal": "Rašykite tiesiog ∅ arba {}. Žymėjimas {∅} reiškia aibę, kurios vienintelis elementas yra tuščioji aibė.",
    "related": [
      "tuscia-aibe"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "elementas-vs-poaibis": {
    "title": "Painioja elementą su poaibiu",
    "type": "mistake",
    "definition": "Mano, kad bet koks objektas su skliaustais yra elementas.",
    "intuition": "Rašo {1} ∈ A vietoj {1} ⊆ A.",
    "formal": "Naudokite ∈ elementui, ⊆ – aibei (poaibiui).",
    "related": [
      "elementas",
      "poaibis"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "intervalu-skliaustai": {
    "title": "Neteisingi intervalų skliaustai",
    "type": "mistake",
    "definition": "Nesuprantama griežtos ir negriežtos nelygybės reikšmė.",
    "intuition": "Mano, kad [a, b] ir (a, b) yra tas pats.",
    "formal": "Laužtinis skliaustas [ ] reiškia, kad galas įeina į aibę, apvalus ( ) – ne.",
    "related": [
      "intervalas"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "papildinio-kontekstas": {
    "title": "Papildinys be visuotinės aibės",
    "type": "mistake",
    "definition": "Nesuprantama, kad „viskas, kas ne A“ priklauso nuo konteksto.",
    "intuition": "Bando rasti aibės papildinį neapibrėžus visuotinės aibės U.",
    "formal": "Visada nurodykite, kokios aibės atžvilgiu skaičiuojate papildinį.",
    "related": [
      "aibiu-papildinys"
    ],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "riba": {
    "title": "Riba",
    "type": "concept",
    "definition": "Reikšmė, prie kurios neaprėžtai artėja funkcijos reikšmė.",
    "intuition": "Tai tikslas, kurį funkcija bando pasiekti, bet nebūtinai pasiekia.",
    "formal": "Funkcijos reikšmės elgesys argumentui artėjant prie konkretaus taško.",
    "related": [
      "sekos-riba",
      "funkcijos-riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "sekos-riba": {
    "title": "Sekos riba",
    "type": "concept",
    "definition": "Skaičius, prie kurio artėja sekos nariai n-tąjam nariui didėjant.",
    "intuition": "Kas nutiks su seka po labai ilgo laiko?",
    "formal": "L, kai ∀ε>0 ∃N: ∀n>N |a_n - L| < ε.",
    "related": [
      "seka"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "funkcijos-riba": {
    "title": "Funkcijos riba taške",
    "type": "concept",
    "definition": "Funkcijos elgesys arti tam tikro taško.",
    "intuition": "Kokia būtų reikšmė, jei nebūtų skylės grafike?",
    "formal": "L, kai x → x0.",
    "related": [
      "vienpuse-riba",
      "tolydumas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "vienpuse-riba": {
    "title": "Vienpusė riba",
    "type": "concept",
    "definition": "Riba artėjant tik iš vienos pusės (kairės arba dešinės).",
    "intuition": "Artėjimas prie sienos tik iš kairės pusės.",
    "formal": "",
    "related": [
      "trukio-taskas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "neapibreztumas": {
    "title": "Neapibrėžtumas",
    "type": "concept",
    "definition": "Reiškinys, kurio reikšmės negalima nustatyti tiesiogiai įstačius skaičių.",
    "intuition": "Kova tarp nulio ir nulio arba begalybės ir begalybės.",
    "formal": "Santykiniai simboliai 0/0, ∞/∞, 0*∞ ir kt.",
    "related": [],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "tolydumas": {
    "title": "Tolydumas",
    "type": "concept",
    "definition": "Savybė, kai funkcijos riba sutampa su jos reikšme.",
    "intuition": "Grafikas be pertrūkių ir skylių.",
    "formal": "lim(x→x0) f(x) = f(x0).",
    "related": [
      "trukio-taskas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "trukio-taskas": {
    "title": "Trūkio taškas",
    "type": "concept",
    "definition": "Taškas, kuriame funkcija nėra tolydi.",
    "intuition": "Skylė, šuolis arba begalinis grafiko nutolimas.",
    "formal": "",
    "related": [
      "tolydumas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "asimptote": {
    "title": "Asimptotė",
    "type": "concept",
    "definition": "Tiesė, prie kurios funkcijos grafikas neaprėžtai artėja.",
    "intuition": "Nematoma riba, kurios grafikas niekada nepaliečia (arba paliečia tik begalybėje).",
    "formal": "",
    "related": [
      "begalybe"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "begalybe": {
    "title": "Begalybe",
    "type": "concept",
    "definition": "S?voka ?Begalybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "konvergavimas": {
    "title": "Konvergavimas",
    "type": "concept",
    "definition": "S?voka ?Konvergavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "ribu-sumos-taisykle": {
    "title": "Ribų sumos taisyklė",
    "type": "formula",
    "definition": "Sumos riba lygi ribų sumai.",
    "intuition": "Sumos riba lygi ribų sumai.",
    "formal": "\\lim_{x \\to x_0}, [f(x) \\pm g(x)] = \\lim_{x \\to x_0} f(x) \\pm \\lim_{x \\to x_0} g(x)",
    "related": [
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "ribu-sandaugos-taisykle": {
    "title": "Ribų sandaugos taisyklė",
    "type": "formula",
    "definition": "Sandaugos riba lygi ribų sandaugai.",
    "intuition": "Sandaugos riba lygi ribų sandaugai.",
    "formal": "\\lim_{x \\to x_0}, [f(x) \\cdot g(x)] = \\lim_{x \\to x_0} f(x) \\cdot \\lim_{x \\to x_0} g(x)",
    "related": [
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "ribu-dalmens-taisykle": {
    "title": "Ribų dalmens taisyklė",
    "type": "formula",
    "definition": "Dalmens riba lygi ribų dalmeniui.",
    "intuition": "Dalmens riba lygi ribų dalmeniui.",
    "formal": "\\lim_{x \\to x_0} \\frac{f(x)}, {g(x)} = \\frac{\\lim_{x \\to x_0} f(x)}, {\\lim_{x \\to x_0} g(x)}",
    "related": [
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "pirmoji-svarbioji-riba": {
    "title": "Pirmoji svarbioji riba",
    "type": "formula",
    "definition": "Naudojama trigonometrinėms riboms skaičiuoti.",
    "intuition": "Naudojama trigonometrinėms riboms skaičiuoti.",
    "formal": "\\lim_{x \\to 0} \\frac{\\sin x}, {x} = 1",
    "related": [
      "sinusas",
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "antroji-svarbioji-riba": {
    "title": "Antroji svarbioji riba",
    "type": "formula",
    "definition": "Apibrėžia eksponentės pagrindą e.",
    "intuition": "Apibrėžia eksponentės pagrindą e.",
    "formal": "\\lim_{n \\to \\infty} (1 + \\frac{1}, {n})^n = e",
    "related": [
      "begalybe",
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "tolydumo-salyga": {
    "title": "Funkcijos tolydumo sąlyga",
    "type": "formula",
    "definition": "Visos trys vertės turi sutapti, kad funkcija būtų tolydi.",
    "intuition": "Visos trys vertės turi sutapti, kad funkcija būtų tolydi.",
    "formal": "\\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)",
    "related": [
      "tolydumas",
      "vienpuse-riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "dalyba-is-nulio-vs-riba": {
    "title": "Painioja dalybą iš nulio su riba",
    "type": "mistake",
    "definition": "Nesuprantama, kad skaičių teorijoje 1/0 negalima, bet ribose 1/x artėja prie begalybės.",
    "intuition": "Mano, kad 1/0 yra tiesiog klaida.",
    "formal": "Ribose skaičius dalintas iš labai mažo dydžio (artėjančio prie 0) duoda begalybę.",
    "related": [
      "riba"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "neapibreztumo-ignoravimas": {
    "title": "Tiesioginis įstatymas esant neapibrėžtumui",
    "type": "mistake",
    "definition": "Nesuprantama, kad 0/0 reikia papildomai tirti (naikinti neapibrėžtumą).",
    "intuition": "Rašo 0/0 = 0 arba 0/0 = 1.",
    "formal": "Gautą 0/0 neapibrėžtumą reikia naikinti prastinant reiškinį.",
    "related": [
      "neapibreztumas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "vienpusiu-ribu-nepaisymas": {
    "title": "Vienpusių ribų nepaisymas trūkio taškuose",
    "type": "mistake",
    "definition": "Tiriamas tik artėjimas iš vienos pusės.",
    "intuition": "Teigia, kad riba egzistuoja, nors iš kairės ir dešinės artėja prie skirtingų reikšmių.",
    "formal": "Riba egzistuoja tik tada, kai kairioji riba lygi dešiniajai.",
    "related": [
      "vienpuse-riba",
      "trukio-taskas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas"
    ]
  },
  "isvestine": {
    "title": "Išvestinė",
    "type": "concept",
    "definition": "Funkcijos kitimo greitis tam tikrame taške.",
    "intuition": "Tai tarsi automobilio spidometro rodmuo – jis rodo greitį tą akimirką, o ne vidutinį greitį.",
    "formal": "Funkcijos f(x) išvestinė yra riba lim(Δx→0) [f(x+Δx)-f(x)]/Δx.",
    "related": [
      "liestine",
      "diferencijavimas"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "diferencijavimas": {
    "title": "Diferencijavimas",
    "type": "concept",
    "definition": "S?voka ?Diferencijavimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "ekstremumas": {
    "title": "Ekstremumas",
    "type": "concept",
    "definition": "Funkcijos vietinis maksimumas arba minimumas.",
    "intuition": "Kalno viršūnė arba pakalnės žemiausias taškas.",
    "formal": "Taškas, kuriame funkcija keičia monotoniškumo kryptį ir išvestinė lygi nuliui arba neegzistuoja.",
    "related": [
      "kritinis-taskas",
      "optimizavimas"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "grandinine-taisykle": {
    "title": "Grandininė taisyklė (Sudėtinės funkcijos išvestinė)",
    "type": "concept",
    "definition": "Taisyklė sudėtinių funkcijų išvestinėms skaičiuoti.",
    "intuition": "Diferencijuojame sluoksnis po sluoksnio, pradedant nuo išorės.",
    "formal": "(f(g(x)))' = f'(g(x)) * g'(x).",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "nuolydis": {
    "title": "Nuolydis",
    "type": "concept",
    "definition": "S?voka ?Nuolydis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "momentinis-greitis": {
    "title": "Momentinis Greitis",
    "type": "concept",
    "definition": "S?voka ?Momentinis Greitis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "maksimumas": {
    "title": "Maksimumas",
    "type": "concept",
    "definition": "S?voka ?Maksimumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "minimumas": {
    "title": "Minimumas",
    "type": "concept",
    "definition": "S?voka ?Minimumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "kritis-taskas": {
    "title": "Kritis Taskas",
    "type": "concept",
    "definition": "S?voka ?Kritis Taskas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "isgaubtumas": {
    "title": "Isgaubtumas",
    "type": "concept",
    "definition": "S?voka ?Isgaubtumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "perlinkio-taskas": {
    "title": "Perlinkio Taskas",
    "type": "concept",
    "definition": "S?voka ?Perlinkio Taskas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "isvestines-apibreztumas-per-riba": {
    "title": "Išvestinės apibrėžimas per ribą",
    "type": "formula",
    "definition": "Fundamentalus išvestinės apibrėžimas.",
    "intuition": "Fundamentalus išvestinės apibrėžimas.",
    "formal": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
    "related": [
      "isvestine",
      "riba"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "galios-isvestine": {
    "title": "Galios funkcijos išvestinė",
    "type": "formula",
    "definition": "Pagrindinė taisyklė polinomams diferencijuoti.",
    "intuition": "Pagrindinė taisyklė polinomams diferencijuoti.",
    "formal": "(x^n)' = n x^{n-1}",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "sandaugos-isvestine": {
    "title": "Sandaugos išvestinė",
    "type": "formula",
    "definition": "Taisyklė, naudojama kai dauginamos dvi funkcijos.",
    "intuition": "Taisyklė, naudojama kai dauginamos dvi funkcijos.",
    "formal": "(u \\cdot v)' = u'v + uv'",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "dalmens-isvestine": {
    "title": "Dalmens išvestinė",
    "type": "formula",
    "definition": "Naudojama funkcijų dalybai.",
    "intuition": "Naudojama funkcijų dalybai.",
    "formal": "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "liestines-lygtis": {
    "title": "Liestinės lygtis",
    "type": "formula",
    "definition": "Formulė tiesei, kuri liečia grafiką taške x0.",
    "intuition": "Formulė tiesei, kuri liečia grafiką taške x0.",
    "formal": "y = f(x_0) + f'(x_0)(x - x_0)",
    "related": [
      "liestine"
    ],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "sandaugos-isvestine-be-taisykles": {
    "title": "Neteisinga sandaugos išvestinė",
    "type": "mistake",
    "definition": "Intuicija apgauna – mokiniai mano, kad taisyklė tokia pati kaip sumos.",
    "intuition": "(u*v)' = u' * v'",
    "formal": "Visada naudokite formulę u'v + uv'.",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "sudetines-funkcijos-vidine": {
    "title": "Pamiršta vidinės funkcijos išvestinė",
    "type": "mistake",
    "definition": "Diferencijuojama tik išorinė dalis.",
    "intuition": "(sin(2x))' = cos(2x)",
    "formal": "Reikia padauginti iš vidaus išvestinės (šiuo atveju 2).",
    "related": [
      "grandinine-taisykle"
    ],
    "topics": [
      "isvestine-ir-diferencijavimas"
    ]
  },
  "laipsnine-funkcija": {
    "title": "Laipsninė funkcija",
    "type": "concept",
    "definition": "Funkcija y = x^n.",
    "intuition": "Funkcija, kurios augimo greitį lemia laipsnio rodiklis.",
    "formal": "",
    "related": [
      "saknies-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "rodikline-funkcija": {
    "title": "Rodiklinė funkcija",
    "type": "concept",
    "definition": "Funkcija y = a^x (a > 0, a ≠ 1).",
    "intuition": "Funkcija, kuri auga vis greičiau ir greičiau.",
    "formal": "Funkcija, kurios argumentas yra laipsnio rodiklis.",
    "related": [
      "logaritmine-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "logaritmine-funkcija": {
    "title": "Logaritminė funkcija",
    "type": "concept",
    "definition": "Rodiklinės funkcijos atvirkštinė funkcija.",
    "intuition": "Ji atsako į klausimą: kokiu laipsniu reikia pakelti pagrindą?",
    "formal": "",
    "related": [
      "rodikline-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "periodiskumas": {
    "title": "Periodiskumas",
    "type": "concept",
    "definition": "S?voka ?Periodiskumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "saknies-funkcija": {
    "title": "Saknies Funkcija",
    "type": "concept",
    "definition": "S?voka ?Saknies Funkcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "trigonometrine-funkcija": {
    "title": "Trigonometrine Funkcija",
    "type": "concept",
    "definition": "S?voka ?Trigonometrine Funkcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "asimpote": {
    "title": "Asimpote",
    "type": "concept",
    "definition": "S?voka ?Asimpote? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "atvirkstine-funkcija": {
    "title": "Atvirkstine Funkcija",
    "type": "concept",
    "definition": "S?voka ?Atvirkstine Funkcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "logaritmas": {
    "title": "Logaritmas",
    "type": "concept",
    "definition": "Laipsniavimo atvirkštinė operacija.",
    "intuition": "Logaritmas klausia, kokį rodiklį reikia parinkti.",
    "formal": "log_a b = c, jei a^c = b.",
    "related": [
      "laipsnis",
      "rodiklis"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "logaritmai-ir-trigonometrines-reiksmes",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "skaicius-e": {
    "title": "Skaicius E",
    "type": "concept",
    "definition": "S?voka ?Skaicius E? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "vienetinis-apskritimas": {
    "title": "Vienetinis Apskritimas",
    "type": "concept",
    "definition": "S?voka ?Vienetinis Apskritimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "logaritmai-ir-trigonometrines-reiksmes",
      "trigonometrines-lygtys"
    ]
  },
  "laipsnio-savybes": {
    "title": "Laipsnių savybės",
    "type": "formula",
    "definition": "Pagrindinės taisyklės dirbant su laipsninėmis funkcijomis.",
    "intuition": "Pagrindinės taisyklės dirbant su laipsninėmis funkcijomis.",
    "formal": "a^m \\cdot a^n = a^{m+n}, \\quad (a^m)^n = a^{mn}",
    "related": [
      "laipsnine-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "sinuso-funkcija": {
    "title": "Sinuso funkcijos savybės",
    "type": "formula",
    "definition": "Sinuso funkcijos apibrėžimo ir reikšmių sritys.",
    "intuition": "Sinuso funkcijos apibrėžimo ir reikšmių sritys.",
    "formal": "y = \\sin x, \\quad D(f) = \\mathbb{R}, \\quad E(f) = [-1, 1]",
    "related": [
      "trigonometrine-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "logaritmo-argumentas-neigiamas": {
    "title": "Neigiamas logaritmo argumentas",
    "type": "mistake",
    "definition": "Bandoma taikyti laipsnių logiką nepastebint, kad rodiklinė funkcija niekada nepasiekia neigiamų reikšmių.",
    "intuition": "\\log_2 (-4) = -2",
    "formal": "Logaritmas apibrėžtas tik teigiamiems skaičiams.",
    "related": [
      "logaritmine-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "radianas": {
    "title": "Radianas",
    "type": "concept",
    "definition": "Kampo matavimo vienetas.",
    "intuition": "Kampas, kurio lankas lygus spinduliui.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "redukcija": {
    "title": "Redukcija",
    "type": "concept",
    "definition": "S?voka ?Redukcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes",
      "trigonometrines-lygtys"
    ]
  },
  "pagrindinis-logaritmu-tapatumas": {
    "title": "Pagrindinis Logaritmu Tapatumas",
    "type": "concept",
    "definition": "S?voka ?Pagrindinis Logaritmu Tapatumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "kotangentas": {
    "title": "Kotangentas",
    "type": "concept",
    "definition": "S?voka ?Kotangentas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "atvirkstine-trigonometrine-reiksme": {
    "title": "Atvirkstine Trigonometrine Reiksme",
    "type": "concept",
    "definition": "S?voka ?Atvirkstine Trigonometrine Reiksme? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "pagrindo-keitimas": {
    "title": "Pagrindo Keitimas",
    "type": "concept",
    "definition": "S?voka ?Pagrindo Keitimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "log-sum": {
    "title": "Sandaugos logaritmas",
    "type": "formula",
    "definition": "Daugyba logaritmo viduje tampa sudėtimi.",
    "intuition": "Daugyba logaritmo viduje tampa sudėtimi.",
    "formal": "\\log_a (x \\cdot y) = \\log_a x + \\log_a y",
    "related": [
      "logaritmas"
    ],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "trig-pythagorean": {
    "title": "Pagrindinė trigonometrijos tapatybė",
    "type": "formula",
    "definition": "Svarbiausia formulė, siejanti sinusą ir kosinusą.",
    "intuition": "Svarbiausia formulė, siejanti sinusą ir kosinusą.",
    "formal": "\\sin^2 \\alpha + \\cos^2 \\alpha = 1",
    "related": [
      "sinusas",
      "kosinusas"
    ],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "log-base-change": {
    "title": "Pagrindo keitimo formulė",
    "type": "formula",
    "definition": "Leidžia pakeisti nepatogų logaritmo pagrindą kitu.",
    "intuition": "Leidžia pakeisti nepatogų logaritmo pagrindą kitu.",
    "formal": "\\log_a b = \\frac{\\log_c b}, {\\log_c a}",
    "related": [
      "logaritmas"
    ],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "log-sum-wrong": {
    "title": "Neteisingas sumos logaritmas",
    "type": "mistake",
    "definition": "Painiojama su sandaugos savybe.",
    "intuition": "log(x + y) = log x + log y",
    "formal": "log(x+y) negalima išskaidyti paprastai. Tik log(x*y) tampa suma.",
    "related": [
      "logaritmas"
    ],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "rad-deg-confusion": {
    "title": "Painioja laipsnius ir radianus",
    "type": "mistake",
    "definition": "Nesuprantama, kad skaičius be laipsnio ženklo reiškia radianą.",
    "intuition": "sin(1) = sin(1°)",
    "formal": "Sin(1) yra maždaug sin(57°). Visada patikrinkite nustatymus skaičiuotuve.",
    "related": [
      "radianas"
    ],
    "topics": [
      "logaritmai-ir-trigonometrines-reiksmes"
    ]
  },
  "olimpiada-11-concept-cyclotomic": {
    "title": "Ciklotoniniai daugianariai",
    "type": "concept",
    "definition": "Daugianariai, kurių šaknys yra pirmykštės $n$-tojo laipsnio vieneto šaknys.",
    "intuition": "Tai elementariausios „plytelės“, iš kurių susideda daugianaris $x^n - 1$ virš racionalųjų skaičių lauko.",
    "formal": "$\\Phi_n(x) = \\prod_{\\text{gcd}(k,n)=1, 1 \\le k \\le n} (x - e^{2\\pi i k / n})$. Galioja savybė: $x^n - 1 = \\prod_{d|n} \\Phi_d(x)$.",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-concept-chebyshev": {
    "title": "Čebyševo daugianariai",
    "type": "concept",
    "definition": "Daugianariai $T_n(x)$, tenkinantys $T_n(\\cos \\theta) = \\cos(n\\theta)$.",
    "intuition": "Jie susieja trigonometriją su algebriniais daugianariais ir pasižymi unikaliomis ekstremaliomis savybėmis.",
    "formal": "$T_0(x)=1, T_1(x)=x, T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$.",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-concept-vieta": {
    "title": "Vieta teoremos",
    "type": "concept",
    "definition": "Sąryšiai tarp daugianario koeficientų ir jo šaknų.",
    "intuition": "Leidžia rasti šaknų sumas ir sandaugas jų pačių neieškant.",
    "formal": "Daugianariui $P(x) = a_n x^n + \\dots + a_0$, šaknų suma yra $-a_{n-1}/a_n$.",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-concept-cauchy-schwarz": {
    "title": "Koši-Švarco nelygybė",
    "type": "concept",
    "definition": "Nelygybė, siejanti dviejų skaičių rinkinių sandaugų sumą su jų kvadratų sumomis.",
    "intuition": "Vektorių skaliarinė sandauga yra ne didesnė už jų ilgių sandaugą.",
    "formal": "$(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)$.",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-concept-am-gm": {
    "title": "AM-GM nelygybė",
    "type": "concept",
    "definition": "Aritmetinio ir geometrinio vidurkio nelygybė.",
    "intuition": "Sumos minimumas pasiekiamas, kai nariai lygūs, esant fiksuotai sandaugai.",
    "formal": "$\\frac{x_1 + \\dots + x_n}{n} \\ge \\sqrt[n]{x_1 \\dots x_n}$ teigiamiems $x_i$.",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-formula-vieta-cubic": {
    "title": "Vieta formulės kubinei lygčiai",
    "type": "formula",
    "definition": "Taikoma lygčiai $ax^3+bx^2+cx+d=0$.",
    "intuition": "Taikoma lygčiai $ax^3+bx^2+cx+d=0$.",
    "formal": "x_1+x_2+x_3 = -b/a, \\quad x_1x_2+x_2x_3+x_3x_1 = c/a, \\quad x_1x_2x_3 = -d/a",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-formula-cauchy-schwarz": {
    "title": "Koši-Švarco nelygybė",
    "type": "formula",
    "definition": "Lygybė galioja, kai $a_i$ ir $b_i$ yra proporcingi.",
    "intuition": "Lygybė galioja, kai $a_i$ ir $b_i$ yra proporcingi.",
    "formal": "(\\sum_{i=1}^n a_i b_i)^2 \\le (\\sum_{i=1}^n a_i^2)(\\sum_{i=1}^n b_i^2)",
    "related": [],
    "topics": [
      "olimpiada-11-algebra"
    ]
  },
  "olimpiada-11-concept-inversion": {
    "title": "Inversija",
    "type": "concept",
    "definition": "Transformacija, kuri tašką $P$ atvaizduoja į $P'$ taip, kad $OP \\cdot OP' = R^2$.",
    "intuition": "Tai tarsi atspindys apskritime: tai, kas buvo viduje, atsiduria išorėje, ir atvirkščiai.",
    "formal": "Inversija centro $O$ ir spindulio $R$ atžvilgiu: $f(P) = P'$, kur $P'$ yra spindulyje $OP$ ir $|OP'| = R^2/|OP|$.",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-concept-projective": {
    "title": "Dvigubasis santykis",
    "type": "concept",
    "definition": "Projekcinės geometrijos invariantas keturiems taškams.",
    "intuition": "Nors projekcija keičia atstumus, ji išsaugo šį specifinį keturių taškų santykį.",
    "formal": "$(A,B;C,D) = \\frac{AC}{BC} / \\frac{AD}{BD}$ (naudojant orientuotas atkarpas).",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-concept-menelaus": {
    "title": "Menelajo teorema",
    "type": "concept",
    "definition": "Sąlyga, kad trys taškai ant trikampio kraštinių (ar jų tęsinių) būtų vienoje tiesėje.",
    "intuition": "Jei tiesė kerta trikampį, atkarpų santykių sandauga yra 1.",
    "formal": "Taškai D, E, F yra vienoje tiesėje tada ir tik tada, kai $\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$.",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-concept-power-of-point": {
    "title": "Taško galia",
    "type": "concept",
    "definition": "Dydis $d^2 - R^2$, charakterizuojantis taško padėtį apskritimo atžvilgiu.",
    "intuition": "Tai matas, rodantis 'atstumą' iki apskritimo, išreikštą per sandaugas.",
    "formal": "Bet kuriai tiesei per P, kertančiai apskritimą taškuose A ir B, galia yra $PA \\cdot PB$ (su ženklu).",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-concept-stewart": {
    "title": "Stiuarto teorema",
    "type": "concept",
    "definition": "Sąryšis tarp trikampio kraštinių ir čevianos ilgio.",
    "intuition": "Leidžia apskaičiuoti bet kokios atkarpos iš viršūnės į pagrindą ilgį.",
    "formal": "$man + d^2n = b^2m + c^2n$ (kur n, m dalija pagrindą a).",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-formula-power-of-point": {
    "title": "Taško galios formulė",
    "type": "formula",
    "definition": "Galioja bet kuriai tiesei per P, kertančiai apskritimą taškuose A ir B.",
    "intuition": "Galioja bet kuriai tiesei per P, kertančiai apskritimą taškuose A ir B.",
    "formal": "h = d^2 - R^2 = PA \\cdot PB",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-formula-stewart": {
    "title": "Stiuarto teorema",
    "type": "formula",
    "definition": "Čia d yra čevianos ilgis, m ir n - pagrindo a dalys.",
    "intuition": "Čia d yra čevianos ilgis, m ir n - pagrindo a dalys.",
    "formal": "b^2 m + c^2 n = a(d^2 + mn)",
    "related": [],
    "topics": [
      "olimpiada-11-geometrija"
    ]
  },
  "olimpiada-11-concept-inclusion-exclusion": {
    "title": "Įjungimo-išjungimo principas",
    "type": "method",
    "definition": "Metodas aibių sąjungos dydžiui skaičiuoti per jų sankirtas.",
    "intuition": "Sudedame visus elementus, tada atimame tuos, kuriuos suskaičiavome du kartus, tada pridedame tuos, kuriuos atėmėme per daug, ir t.t.",
    "formal": "Aibių $A_1, \\dots, A_n$ sąjungos dydis lygus $\\sum |A_i| - \\sum |A_i \\cap A_j| + \\dots + (-1)^{n-1} |\\cap A_i|$.",
    "related": [
      "olimpiada-11-concept-double-counting"
    ],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-generating-functions": {
    "title": "Generuojančios funkcijos",
    "type": "method",
    "definition": "Sekos kodavimas kaip formaliosios laipsninės eilutės koeficientų.",
    "intuition": "Kiekvieną sekos narį priskiriame atitinkamam $x^n$ laipsniui, paversdami seką funkcija.",
    "formal": "Sekai $(a_n)$ generuojanti funkcija yra $A(x) = \\sum_{n=0}^\\infty a_n x^n$.",
    "related": [
      "olimpiada-11-concept-recurrence-relations"
    ],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-double-counting": {
    "title": "Dvigubas skaičiavimas",
    "type": "method",
    "definition": "Tapatybės įrodymas skaičiuojant tą pačią aibę dviem būdais.",
    "intuition": "Jei suskaičiuosime tą patį dalyką skirtingais metodais, gausime tą patį skaičių.",
    "formal": "Lygybė $\\sum_{r \\in R} \\text{rowSum}(r) = \\sum_{c \\in C} \\text{colSum}(c)$ matricoms su 0 ir 1.",
    "related": [
      "olimpiada-11-concept-inclusion-exclusion"
    ],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-nullstellensatz": {
    "title": "Kombinatorinis Nulstellensatz",
    "type": "theorem",
    "definition": "Teorema apie daugianario nelygumą nuliui gardelės taškuose.",
    "intuition": "Jei daugianaris turi pakankamai aukštą laipsnį, jis negali „išvengti“ visų taškų tam tikroje aibių sandaugoje.",
    "formal": "Nogos Alono teorema: jei $\\text{deg}(f) = \\sum t_i$ ir nario $x_1^{t_1} \\dots x_n^{t_n}$ koeficientas nelygus nuliui, tai aibėms $S_i$ su $|S_i| > t_i$ egzistuoja taškas $(s_1, \\dots, s_n) \\in S_1 \\times \\dots \\times S_n$ toks, kad $f(s) \\neq 0$.",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-lovasz": {
    "title": "Lovaso lokalioji lema",
    "type": "concept",
    "definition": "Tikimybinio metodo įrankis, garantuojantis įvykių išvengimą.",
    "intuition": "Jei „blogi“ įvykiai yra reti ir mažai susiję tarpusavyje, tai su teigiama tikimybe nė vienas jų neįvyks.",
    "formal": "Jei $P(A_i) \\le p$ ir kiekvienas įvykis priklauso nuo daugiausiai $d$ kitų įvykių, tai jei $ep(d+1) \\le 1$, $P(\\cap A_i^c) > 0$.",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-turan": {
    "title": "Turano teorema",
    "type": "concept",
    "definition": "Ekstremaliosios grafų teorijos rezultatas apie maksimalų briaunų skaičių.",
    "intuition": "Nurodo, kiek briaunų gali turėti grafas, kol jame būtinai atsiras $k$-viršūnių pilnasis pakgrafis (klikė).",
    "formal": "Grafas su $n$ viršūnių, neturintis $K_{r+1}$ kaip pakgrafio, turi daugiausiai briaunų, kai jis yra Turano grafas $T(n, r)$ (beveik lygių dalių pilnasis $r$-dalis grafas).",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-dirichlet-pigeonhole": {
    "title": "Dirichlė principas (Balandžių narvelių principas)",
    "type": "concept",
    "definition": "Jei $n$ narvelių yra $n+1$ balandis, tai bent viename narvelyje yra bent du balandžiai.",
    "intuition": "Jei turime daugiau objektų nei vietų jiems padėti, bent vienoje vietoje bus daugiau nei vienas objektas.",
    "formal": "Jei $A$ ir $B$ yra baigtinės aibės ir $|A| > |B|$, tai jokiai funkcijai $f: A \\to B$ neegzistuoja injekcija.",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-recurrence-relations": {
    "title": "Olimpiada 11 Concept Recurrence Relations",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 11 Concept Recurrence Relations? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-ramsey-theory": {
    "title": "Olimpiada 11 Concept Ramsey Theory",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 11 Concept Ramsey Theory? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "formula-inclusion-exclusion": {
    "title": "Įjungimo-išjungimo formulė",
    "type": "formula",
    "definition": "Suskaičiuoja aibių sąjungos elementų kiekį naudojant jų sankirtas.",
    "intuition": "Suskaičiuoja aibių sąjungos elementų kiekį naudojant jų sankirtas.",
    "formal": "|\\bigcup_{i=1}^n A_i| = \\sum |A_i| - \\sum |A_i \\cap A_j| + \\dots",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "formula-catalan-numbers": {
    "title": "Katalano skaičių bendroji formulė",
    "type": "formula",
    "definition": "Nurodo n-tąjį Katalano sekos narį.",
    "intuition": "Nurodo n-tąjį Katalano sekos narį.",
    "formal": "C_n = \\frac{1}{n+1} \\binom{2n}{n}",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "formula-derangements": {
    "title": "Netvarkų skaičius (Subfaktorialas)",
    "type": "formula",
    "definition": "Suskaičiuoja permutacijas be nejudamų taškų.",
    "intuition": "Suskaičiuoja permutacijas be nejudamų taškų.",
    "formal": "D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "mistake-overcounting-inclusion": {
    "title": "Sankirtų užmiršimas",
    "type": "mistake",
    "definition": "Mokinys pamiršta, kad elementai gali priklausyti kelioms aibėms.",
    "intuition": "Tikintis, kad |A ∪ B ∪ C| = |A| + |B| + |C|.",
    "formal": "Visada taikykite pilną įjungimo-išjungimo formulę su sankirtų atėmimu ir pridėjimu.",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "mistake-recurrence-base-cases": {
    "title": "Neteisingos pradinės sąlygos",
    "type": "mistake",
    "definition": "Mokinys mechaniškai taiko standartinę sekos formą neanalizuodamas konkretaus uždavinio mažų reikšmių.",
    "intuition": "Fibonačio sekos pradėjimas nuo a1=1, a2=1 uždaviniuose, kur realiai a1=1, a2=2.",
    "formal": "Visada rankiniu būdu patikrinkite n=1, 2, 3 reikšmes, kad įsitikintumėte, jog pradinės sąlygos teisingos.",
    "related": [],
    "topics": [
      "olimpiada-11-kombinatorika"
    ]
  },
  "olimpiada-11-concept-crt": {
    "title": "Kiniškoji liekanų teorema (KLT)",
    "type": "concept",
    "definition": "Jei moduliai yra poromis tarpusavyje pirminiai, tai liekanų sistema turi vienintelį sprendinį jungtiniu moduliu.",
    "intuition": "Tai tarsi koordinačių sistema skaičiams: žinodami skaičiaus „projekcijas“ (liekanas) įvairiomis kryptimis (moduliais), galime tiksliai nustatyti jo padėtį.",
    "formal": "Tegu $m_1, m_2, \\dots, m_k$ yra natūralieji skaičiai, tokie kad $\\text{gcd}(m_i, m_j) = 1$ visiems $i \\neq j$. Tada lygčių sistema $x \\equiv a_i \\pmod{m_i}$ turi vienintelį sprendinį moduliu $M = m_1 m_2 \\dots m_k$.",
    "related": [],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "olimpiada-11-concept-order": {
    "title": "Eilė ir pradinės šaknys",
    "type": "concept",
    "definition": "Mažiausias teigiamas laipsnis $d$, kuriam $a^d \\equiv 1 \\pmod m$.",
    "intuition": "Skaičiaus laipsniai moduliu $m$ sukasi ratu; eilė nurodo šio rato ilgį.",
    "formal": "Sveikojo skaičiaus $a$ eilė moduliu $m$ (žymima $\\text{ord}_m a$) yra mažiausias $d > 0$, tenkinantis $a^d \\equiv 1 \\pmod m$. Jei $\\text{ord}_m g = \\varphi(m)$, tai $g$ vadinama pradine šaknimi.",
    "related": [],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "olimpiada-11-concept-reciprocity": {
    "title": "Kvadratinis savitarpiškumas",
    "type": "concept",
    "definition": "Dėsnis, siejantis Legendro simbolius $(\\frac{p}{q})$ ir $(\\frac{q}{p})$.",
    "intuition": "Leidžia apversti „trupmeną“ Legendro simbolyje, palengvinant kvadratinių liekanų skaičiavimą.",
    "formal": "Skirtingiems nelyginiams pirminiams $p, q$: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}$.",
    "related": [],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "olimpiada-11-concept-jacobi": {
    "title": "Jakobio simbolis",
    "type": "concept",
    "definition": "Legendro simbolio apibendrinimas sudėtiniams moduliams.",
    "intuition": "Leidžia naudoti savitarpiškumo savybes net kai modulis nėra pirminis, nors simbolio reikšmė tiesiogiai negarantuoja lygties sprendžiamumo.",
    "formal": "Jei $n = p_1 p_2 \\dots p_k$ (nelyginis), tai $\\left(\\frac{a}{n}\\right) = \\prod_{i=1}^k \\left(\\frac{a}{p_i}\\right)$.",
    "related": [
      "olimpiada-11-concept-reciprocity"
    ],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "olimpiada-11-concept-wilson": {
    "title": "Wilsono teorema",
    "type": "concept",
    "definition": "$(p-1)! \\equiv -1 \\pmod p$ tada ir tik tada, kai $p$ pirminis.",
    "intuition": "Visas liekanas nuo $1$ iki $p-1$ galima suporuoti su jų atvirkštiniais elementais, išskyrus $1$ ir $-1$, todėl jų sandauga yra $-1$.",
    "formal": "Natūralusis skaičius $n > 1$ yra pirminis tada ir tik tada, kai $(n-1)! \\equiv -1 \\pmod n$.",
    "related": [],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "olimpiada-11-concept-lte": {
    "title": "Lifting The Exponent Lema (LTE)",
    "type": "concept",
    "definition": "Formulė pirminio skaičiaus laipsniui $v_p(a^n - b^n)$ skaičiuoti.",
    "intuition": "Leidžia „iškelti“ rodiklį $n$ iš po vertinimo ženklo.",
    "formal": "Jei $p$ yra nelyginis pirminis, $p | (a-b)$, bet $p \\nmid a$ ir $p \\nmid b$, tai $v_p(a^n - b^n) = v_p(a-b) + v_p(n)$.",
    "related": [],
    "topics": [
      "olimpiada-11-skaiciu-teorija"
    ]
  },
  "indukcija": {
    "title": "Matematinė indukcija",
    "type": "concept",
    "definition": "Įrodymo būdas visiems natūraliesiems skaičiams.",
    "intuition": "Įrodome pradžią ir perėjimą į kitą žingsnį.",
    "formal": "Indukcijoje tikrinamas pradinis žingsnis ir indukcinis žingsnis.",
    "related": [
      "seka",
      "teorema"
    ],
    "topics": [
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "integralas": {
    "title": "Integralas",
    "type": "concept",
    "definition": "Suminis dydis arba plotas po grafiku.",
    "intuition": "Integralas sujungia daug mažų dalių į visumą.",
    "formal": "Integralas apibrėžia kaupimą ir plotą.",
    "related": [
      "isvestine",
      "pirmykste-funkcija"
    ],
    "topics": [
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "pirmykste-funkcija": {
    "title": "Pirmykštė funkcija",
    "type": "concept",
    "definition": "Funkcija, kurios išvestinė lygi duotajai funkcijai.",
    "intuition": "Tai 'pirminė' funkcija, iš kurios buvo gauta išvestinė.",
    "formal": "F(x) yra f(x) pirmykštė, jei F'(x) = f(x).",
    "related": [
      "isvestine",
      "neapibreztinis-integralas"
    ],
    "topics": [
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "kompleksinis-skaicius": {
    "title": "Kompleksinis skaičius",
    "type": "concept",
    "definition": "Skaičius pavidalo a + bi.",
    "intuition": "Tai skaičius, turintis dvi 'dimensijas' – realiąją ir menamąją.",
    "formal": "Skaičius z, priklausantis aibei C, kurioje apibrėžtas elementas i: i² = -1.",
    "related": [
      "algebrine-forma",
      "menamasis-vienetas"
    ],
    "topics": [
      "kompleksiniai-skaiciai",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "modulis": {
    "title": "Modulis",
    "type": "concept",
    "definition": "Vektoriaus ilgis kompleksinėje plokštumoje.",
    "intuition": "Atstumas nuo 0 iki skaičiaus taško.",
    "formal": "|z| = √(a² + b²).",
    "related": [
      "kompleksine-plokstuma"
    ],
    "topics": [
      "kompleksiniai-skaiciai",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "tikimybinis-skirstinys": {
    "title": "Tikimybinis Skirstinys",
    "type": "concept",
    "definition": "S?voka ?Tikimybinis Skirstinys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija"
    ]
  },
  "sekos-forma": {
    "title": "Sekos narys",
    "type": "formula",
    "definition": "Žymi n-tąjį sekos narį.",
    "intuition": "Žymi n-tąjį sekos narį.",
    "formal": "a_n",
    "related": [
      "seka"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "aritmetines-progresijos-formule": {
    "title": "Aritmetinė progresija",
    "type": "formula",
    "definition": "Naudojama sekų uždaviniuose.",
    "intuition": "Naudojama sekų uždaviniuose.",
    "formal": "a_n=a_1+(n-1)d",
    "related": [
      "aritmetine-progresija"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "geometrines-progresijos-formule": {
    "title": "Geometrinė progresija",
    "type": "formula",
    "definition": "Naudojama augimui ir mažėjimui.",
    "intuition": "Naudojama augimui ir mažėjimui.",
    "formal": "a_n=a_1q^{n-1}",
    "related": [
      "geometrine-progresija"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "laipsniu-formules": {
    "title": "Laipsnių taisyklės",
    "type": "formula",
    "definition": "Rodiklių taisyklė padeda pertvarkyti reiškinius.",
    "intuition": "Rodiklių taisyklė padeda pertvarkyti reiškinius.",
    "formal": "a^m a^n=a^{m+n}",
    "related": [
      "laipsnis",
      "rodiklis"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "logaritmo-formule": {
    "title": "Logaritmo ryšys",
    "type": "formula",
    "definition": "Logaritmas yra laipsniavimo atvirkštinė operacija.",
    "intuition": "Logaritmas yra laipsniavimo atvirkštinė operacija.",
    "formal": "\\log_a b=c \\Leftrightarrow a^c=b",
    "related": [
      "logaritmas"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "sinuso-formule": {
    "title": "Trigonometrinis santykis",
    "type": "formula",
    "definition": "Padeda matuoti kampą ir kraštines.",
    "intuition": "Padeda matuoti kampą ir kraštines.",
    "formal": "\\sin\\alpha=\\frac{priešpriešinė}{įžambinė}",
    "related": [
      "sinusas"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "isvestines-galios-formule": {
    "title": "Galios funkcijos išvestinė",
    "type": "formula",
    "definition": "Pagrindinė taisyklė polinomams diferencijuoti.",
    "intuition": "Pagrindinė taisyklė polinomams diferencijuoti.",
    "formal": "(x^n)' = n x^{n-1}",
    "related": [
      "isvestine"
    ],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "integralo-formule": {
    "title": "Pagrindinė integralo forma",
    "type": "formula",
    "definition": "Pagrindinė pirmykščių funkcijų taisyklė.",
    "intuition": "Pagrindinė pirmykščių funkcijų taisyklė.",
    "formal": "\\int x^n dx = \\frac{x^{n+1}}{n+1}+C",
    "related": [
      "integralas",
      "pirmykste-funkcija"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "rodiklio-taisykle-beprasmi": {
    "title": "Rodiklių taisyklę užrašo neteisingai",
    "type": "mistake",
    "definition": "Dauginant tuos pačius pagrindus sudedami rodikliai.",
    "intuition": "Rašo a^m a^n = a^{m*n}.",
    "formal": "Naudok a^{m+n}.",
    "related": [
      "laipsnis"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "integrala-be-constant": {
    "title": "Pamiršta integravimo konstantą",
    "type": "mistake",
    "definition": "Pirmykštė funkcija turi +C.",
    "intuition": "Rašo tik x².",
    "formal": "Visada pridėk +C.",
    "related": [
      "integralas"
    ],
    "topics": [
      "sekos-ir-indukcija"
    ]
  },
  "vektoriaus-modulis": {
    "title": "Vektoriaus modulis",
    "type": "concept",
    "definition": "Vektoriaus ilgis.",
    "intuition": "Atstumas nuo vektoriaus pradžios iki pabaigos.",
    "formal": "Vektoriaus $\\vec{a}(x, y)$ modulis plokštumoje yra $|\\vec{a}| = \\sqrt{x^2 + y^2}$.",
    "related": [
      "vektorius",
      "skaliarine-sandauga"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "skaliarine-sandauga": {
    "title": "Skaliarinė sandauga",
    "type": "operation",
    "definition": "Dviejų vektorių daugyba, kurios rezultatas yra skaičius.",
    "intuition": "Parodo, kiek vienas vektorius 'eina' kito vektoriaus kryptimi.",
    "formal": "Skaliarinė sandauga $\\vec{a} \\cdot \\vec{b}$ apibrėžiama kaip $|\\vec{a}||\\vec{b}|\\cos \\theta$.",
    "related": [
      "statmeni-vektoriai",
      "kampas-tarp-vektoriu"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "kolinearus-vektoriai": {
    "title": "Kolinearūs vektoriai",
    "type": "concept",
    "definition": "Vektoriai, esantys lygiagrečiose tiesėse arba vienoje tiesėje.",
    "intuition": "Vektoriai, kurie rodo ta pačia arba tiksliai priešinga kryptimi.",
    "formal": "Vektoriai $\\vec{a}$ ir $\\vec{b}$ yra kolinearūs, jei $\\vec{a} = k\\vec{b}$, kur $k$ yra skaliaras.",
    "related": [
      "vektorius",
      "kryptis"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "statmeni-vektoriai": {
    "title": "Statmeni vektoriai",
    "type": "concept",
    "definition": "Vektoriai, tarp kurių kampas yra 90 laipsnių.",
    "intuition": "Vektoriai, kurie sudaro statų kampą.",
    "formal": "Nenuliniai vektoriai $\\vec{a}$ ir $\\vec{b}$ yra statmeni tada ir tik tada, kai $\\vec{a} \\cdot \\vec{b} = 0$.",
    "related": [
      "skaliarine-sandauga",
      "kampas-tarp-vektoriu"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "vienetinis-vektorius": {
    "title": "Vienetinis vektorius",
    "type": "concept",
    "definition": "Vektorius, kurio ilgis lygus 1.",
    "intuition": "Vektorius, rodantis tik kryptį be 'svorio'.",
    "formal": "Vektorius $\\vec{e}$ yra vienetinis, jei $|\\vec{e}| = 1$. Koordinačių ašių vienetiniai vektoriai žymimi $\\vec{i}(1, 0)$ ir $\\vec{j}(0, 1)$.",
    "related": [
      "vektoriaus-modulis"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "nulio-vektorius": {
    "title": "Nulio vektorius",
    "type": "concept",
    "definition": "Vektorius, kurio pradžia ir pabaiga sutampa.",
    "intuition": "Vektorius, kuris niekur 'nejuda'.",
    "formal": "Vektorius, kurio visos koordinatės yra 0, žymimas $\\vec{0}$. Jo modulis yra 0.",
    "related": [
      "vektorius"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "kryptis": {
    "title": "Vektoriaus kryptis",
    "type": "concept",
    "definition": "Vektoriaus orientacija erdvėje.",
    "intuition": "Kur vektorius 'žiūri'.",
    "formal": "",
    "related": [
      "vektorius",
      "kolinearus-vektoriai"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "vektoriu-suma": {
    "title": "Vektorių suma",
    "type": "operation",
    "definition": "Vektorių sudėjimo operacija.",
    "intuition": "Bendras poslinkis atlikus du judesius iš eilės.",
    "formal": "Jei $\\vec{a}(x_1, y_1)$ ir $\\vec{b}(x_2, y_2)$, tai $\\vec{a}+\\vec{b} = (x_1+x_2, y_1+y_2)$.",
    "related": [
      "vektorius",
      "vektoriu-skirtumas"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "vektoriu-skirtumas": {
    "title": "Vektorių skirtumas",
    "type": "operation",
    "definition": "Vektorių atimties operacija.",
    "intuition": "Poslinkis, kurį pridėjus prie antrojo vektoriaus, gaunamas pirmasis.",
    "formal": "Jei $\\vec{a}(x_1, y_1)$ ir $\\vec{b}(x_2, y_2)$, tai $\\vec{a}-\\vec{b} = (x_1-x_2, y_1-y_2)$.",
    "related": [
      "vektorius",
      "vektoriu-suma"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "kampas-tarp-vektoriu": {
    "title": "Kampas tarp vektorių",
    "type": "concept",
    "definition": "Kampas tarp dviejų iš vieno taško atidėtų vektorių.",
    "intuition": "Posūkio kampas nuo vienos krypties iki kitos.",
    "formal": "Kampas $\\phi \\in [0^\\circ; 180^\\circ]$.",
    "related": [
      "skaliarine-sandauga",
      "statmeni-vektoriai"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "vektoriaus-modulis-formule": {
    "title": "Vektoriaus modulio formulė",
    "type": "formula",
    "definition": "Apskaičiuoja atstumą nuo vektoriaus pradžios iki pabaigos pagal Pitagoro teoremą.",
    "intuition": "Apskaičiuoja atstumą nuo vektoriaus pradžios iki pabaigos pagal Pitagoro teoremą.",
    "formal": "|\\vec{a}| = \\sqrt{x^2 + y^2}",
    "related": [],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "skaliarine-sandauga-koord": {
    "title": "Skaliarinė sandauga koordinatėmis",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti skaliarinę sandaugą nežinant kampo tarp vektorių.",
    "intuition": "Leidžia apskaičiuoti skaliarinę sandaugą nežinant kampo tarp vektorių.",
    "formal": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2",
    "related": [],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "kampas-tarp-vektoriu-formule": {
    "title": "Kampas tarp vektorių",
    "type": "formula",
    "definition": "Ši formulė naudojama rasti kampą tarp vektorių, kai žinomos jų koordinatės.",
    "intuition": "Ši formulė naudojama rasti kampą tarp vektorių, kai žinomos jų koordinatės.",
    "formal": "\\cos \\phi = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}",
    "related": [],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "skaliarine-sandauga-kaip-vektorius": {
    "title": "Skaliarinę sandaugą laiko vektoriumi",
    "type": "mistake",
    "definition": "Painioja su vektorių sudėtimi ar daugyba iš skaičiaus.",
    "intuition": "Mokinys bando rašyti skaliarinės sandaugos rezultatą su koordinatėmis.",
    "formal": "Skaliarinė sandauga visada yra skaičius (skaliaras), o ne vektorius.",
    "related": [
      "skaliarine-sandauga"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "vektoriu-atimties-kryptis": {
    "title": "Neteisinga vektorių skirtumo kryptis",
    "type": "mistake",
    "definition": "Nesuvokiama, kuris vektorius yra 'sumažinamas', o kuris 'atimančias'.",
    "intuition": "Brėžiant $\\vec{a}-\\vec{b}$, rodyklė nukreipiama į $\\vec{b}$.",
    "formal": "Skirtumo $\\vec{a}-\\vec{b}$ rodyklė visada turi būti nukreipta į tą vektorių, iš kurio atimame (į $\\vec{a}$).",
    "related": [
      "vektoriu-skirtumas"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "modulio-skaiciavimo-klaida": {
    "title": "Klaida skaičiuojant modulį su neigiamomis koordinatėmis",
    "type": "mistake",
    "definition": "Pamirštama, kad keliant neigiamą skaičių kvadratu, gaunamas teigiamas skaičius.",
    "intuition": "$|\\vec{a}| = \\sqrt{-2^2 + 3^2} = \\sqrt{-4 + 9}$",
    "formal": "Koordinatę $x$ keliant kvadratu, net jei ji neigiama, rezultatas $x^2$ yra $\\ge 0$.",
    "related": [
      "vektoriaus-modulis"
    ],
    "topics": [
      "vektoriai-plokstumoje"
    ]
  },
  "atsitiktinis-dydis": {
    "title": "Atsitiktinis Dydis",
    "type": "concept",
    "definition": "S?voka ?Atsitiktinis Dydis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "diskretusis-atsitiktinis-dydis": {
    "title": "Diskretusis atsitiktinis dydis",
    "type": "concept",
    "definition": "Atsitiktinis dydis, įgyjantis atskiras, izoliuotas reikšmes.",
    "intuition": "Dydžiai, kuriuos galima suskaičiuoti: 1, 2, 3...",
    "formal": "Atsitiktinis dydis, kurio galimų reikšmių aibė yra baigtinė arba suskaičiuojama.",
    "related": [
      "atsitiktinis-dydis",
      "skirstinio-lentele"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "skirstinio-lentele": {
    "title": "Skirstinio Lentele",
    "type": "concept",
    "definition": "S?voka ?Skirstinio Lentele? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "matematine-viltis": {
    "title": "Matematine Viltis",
    "type": "concept",
    "definition": "S?voka ?Matematine Viltis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "normalusis-skirstinys": {
    "title": "Normalusis Skirstinys",
    "type": "concept",
    "definition": "S?voka ?Normalusis Skirstinys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "bernulio-bandymai": {
    "title": "Bernulio Bandymai",
    "type": "concept",
    "definition": "S?voka ?Bernulio Bandymai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "binominis-skirstinys": {
    "title": "Binominis Skirstinys",
    "type": "concept",
    "definition": "S?voka ?Binominis Skirstinys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "gauso-kreive": {
    "title": "Gauso Kreive",
    "type": "concept",
    "definition": "S?voka ?Gauso Kreive? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "matematines-vilties-formule": {
    "title": "Matematinės vilties formulė",
    "type": "formula",
    "definition": "Sudauginame kiekvieną reikšmę su jos tikimybe ir viską sudedame.",
    "intuition": "Sudauginame kiekvieną reikšmę su jos tikimybe ir viską sudedame.",
    "formal": "E(X) = \\sum x_i p_i",
    "related": [
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "bernulio-formule": {
    "title": "Bernulio formulė",
    "type": "formula",
    "definition": "Skaičiuoja tikimybę gauti k sėkmių per n bandymų.",
    "intuition": "Skaičiuoja tikimybę gauti k sėkmių per n bandymų.",
    "formal": "P_n(k) = C_n^k p^k (1-p)^{n-k}",
    "related": [
      "bernulio-bandymai"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "binominio-vidurkio-formule": {
    "title": "Binominio skirstinio matematinė viltis",
    "type": "formula",
    "definition": "Greitas būdas rasti vidurkį Bernulio bandymuose.",
    "intuition": "Greitas būdas rasti vidurkį Bernulio bandymuose.",
    "formal": "E(X) = n \\cdot p",
    "related": [
      "binominis-skirstinys"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "tikimybiu-suma-ne-vienetas": {
    "title": "Skirstinio tikimybių suma nelygi 1",
    "type": "mistake",
    "definition": "Neteisingai apskaičiuotos atskirų įvykių tikimybės.",
    "intuition": "Mokinys surašo tikimybes, bet jų suma 0,8 arba 1,2.",
    "formal": "Visada sumuokite p stulpelį patikrai.",
    "related": [
      "skirstinio-lentele"
    ],
    "topics": [
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "dispersija-neigiama": {
    "title": "Gaunama neigiama dispersija",
    "type": "mistake",
    "definition": "Supainiojama E(X^2) su (E(X))^2 arba padaroma aritmetinė klaida.",
    "intuition": "Var(X) = -2.5.",
    "formal": "Dispersija yra kvadratų vidurkis, ji NIEKADA negali būti neigiama. Patikrinkite ženklus formulėje.",
    "related": [
      "dispersija"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "vilties-skaiciavimo-klaida": {
    "title": "Matematinė viltis nesutampa su vidurkiu",
    "type": "mistake",
    "definition": "Painiojamas paprastas aritmetinis vidurkis su svertiniu (tikimybiniu) vidurkiu.",
    "intuition": "Mokinys tiesiog sudeda reikšmes xi ir dalija iš n.",
    "formal": "Reikia kiekvieną reikšmę padauginti iš jos tikimybės, o NE tiesiog sudėti. Tikimybės yra svoriai.",
    "related": [
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "rutulys": {
    "title": "Rutulys",
    "type": "concept",
    "definition": "Erdvės dalis, apribota sfera.",
    "intuition": "Kaip boulingo kamuolys ar planeta.",
    "formal": "Aibė visų erdvės taškų, kurių atstumas iki centro neviršija R.",
    "related": [
      "sfera",
      "didysis-skritulys"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "lygiagretisienis": {
    "title": "Lygiagretisienis",
    "type": "concept",
    "definition": "S?voka ?Lygiagretisienis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "nupjautine-piramide": {
    "title": "Nupjautine Piramide",
    "type": "concept",
    "definition": "S?voka ?Nupjautine Piramide? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "nupjautinis-kugis": {
    "title": "Nupjautinis Kugis",
    "type": "concept",
    "definition": "S?voka ?Nupjautinis Kugis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "pjuvis": {
    "title": "Pjuvis",
    "type": "concept",
    "definition": "S?voka ?Pjuvis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "asius-pjuvis": {
    "title": "Asius Pjuvis",
    "type": "concept",
    "definition": "S?voka ?Asius Pjuvis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "piramides-turis": {
    "title": "Piramidės tūris",
    "type": "formula",
    "definition": "Piramidės tūris visada yra tris kartus mažesnis už tokio pat pagrindo ir aukštinės prizmės tūrį.",
    "intuition": "Piramidės tūris visada yra tris kartus mažesnis už tokio pat pagrindo ir aukštinės prizmės tūrį.",
    "formal": "V = \\frac{1}{3} S_{pagr} \\cdot H",
    "related": [
      "piramide"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "ritinio-turis": {
    "title": "Ritinio tūris",
    "type": "formula",
    "definition": "Randamas skritulio plotą dauginant iš aukštinės.",
    "intuition": "Randamas skritulio plotą dauginant iš aukštinės.",
    "formal": "V = \\pi R^2 H",
    "related": [
      "ritinys"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "rutulio-turis": {
    "title": "Rutulio tūris",
    "type": "formula",
    "definition": "Rutulio tūris priklauso tik nuo spindulio kubo.",
    "intuition": "Rutulio tūris priklauso tik nuo spindulio kubo.",
    "formal": "V = \\frac{4}{3} \\pi R^3",
    "related": [
      "rutulys"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "supainioja-aukstine-ir-apotema": {
    "title": "Aukštinės ir apotemos painiojimas",
    "type": "mistake",
    "definition": "Abi jos yra aukštinės, bet skirtingų objektų (viso kūno vs vienos sienos).",
    "intuition": "Tūrio formulėje naudoja apotemą vietoje aukštinės.",
    "formal": "Prisiminkite: tūriui reikia statmens į pagrindą (H), o paviršiaus plotui – sienos aukštinės (apotemos).",
    "related": [
      "piramide",
      "apotema"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "pamirsta-dvi-pagrindu-ploto-dalis-prizmeje": {
    "title": "Pamirštamas antras pagrindas prizmėje",
    "type": "mistake",
    "definition": "Analogiškai piramidei, mokiniai pamiršta, kad prizmė turi du lygiagrečius pagrindus.",
    "intuition": "S_pav = S_son + S_pagr",
    "formal": "Visada S_pav (prizmės) = S_son + 2*S_pagr.",
    "related": [
      "prizme",
      "pavirsiaus-plotas"
    ],
    "topics": [
      "briaunainiai-sukiniai-ir-pjuviai"
    ]
  },
  "kritinis-taskas": {
    "title": "Kritinis Taskas",
    "type": "concept",
    "definition": "S?voka ?Kritinis Taskas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "didėjimo-mažėjimo-intervalai": {
    "title": "Didėjimo Mažėjimo Intervalai",
    "type": "concept",
    "definition": "S?voka ?Didėjimo Mažėjimo Intervalai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "sudetine-funkcija": {
    "title": "Sudetine Funkcija",
    "type": "concept",
    "definition": "S?voka ?Sudetine Funkcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "isvestines-taisykles-ir-optimizavimas"
    ]
  },
  "keliniai": {
    "title": "Kėliniai",
    "type": "concept",
    "definition": "Visi galimi n elementų išdėstymai tam tikra tvarka.",
    "intuition": "Kiek būdų galima susodinti n žmonių į n kėdžių.",
    "formal": "Junginiai iš n elementų, kurie skiriasi tik elementų tvarka.",
    "related": [
      "faktorialas",
      "gretiniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "gretiniai": {
    "title": "Gretiniai",
    "type": "concept",
    "definition": "Rinkiniai iš n elementų po k, kai tvarka svarbi.",
    "intuition": "Iš 10 žmonių renkame pirmininką ir pavaduotoją (pareigos skirtingos).",
    "formal": "Junginiai iš n elementų po k (k ≤ n), kurie skiriasi elementais arba jų tvarka.",
    "related": [
      "keliniai",
      "deriniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "deriniai": {
    "title": "Deriniai",
    "type": "concept",
    "definition": "Rinkiniai iš n elementų po k, kai tvarka nesvarbi.",
    "intuition": "Iš 10 žmonių renkame 2 delegatus į konferenciją (pareigos vienodos).",
    "formal": "Junginiai iš n elementų po k (k ≤ n), kurie skiriasi bent vienu elementu.",
    "related": [
      "gretiniai",
      "niutono-binomas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "niutono-binomas": {
    "title": "Niutono binomas",
    "type": "concept",
    "definition": "Formulė dvinario laipsniui išskleisti.",
    "intuition": "Tai (a+b)^n formulės apibendrinimas dideliems n.",
    "formal": "Teorema apie dvinario sumos n-tojo laipsnio skleidinį.",
    "related": [
      "binominis-koeficientas",
      "paskalio-trikampis"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "paskalio-trikampis": {
    "title": "Paskalio trikampis",
    "type": "concept",
    "definition": "Skaičių trikampis, kurio kraštuose vienetai, o viduryje – viršutinių kaimynų suma.",
    "intuition": "Geometrinė schema derinių skaičiams greitai rasti.",
    "formal": "Trikampė matrica, sudaryta iš binominių koeficientų.",
    "related": [
      "niutono-binomas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "binominis-koeficientas": {
    "title": "Binominis koeficientas",
    "type": "concept",
    "definition": "Skaičius prie nario Niutono binomo skleidinyje.",
    "intuition": "Tai tiesiog derinių skaičius C(n, k).",
    "formal": "Skaičius, lygus C(n, k), esantis (a+b)^n skleidinyje.",
    "related": [
      "deriniai",
      "niutono-binomas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "faktorialo-formule": {
    "title": "Faktorialo formulė",
    "type": "formula",
    "definition": "Skaičiuoja, kiek yra būdų išrikiuoti elementus.",
    "intuition": "Skaičiuoja, kiek yra būdų išrikiuoti elementus.",
    "formal": "n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n",
    "related": [
      "faktorialas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "keliniu-formule": {
    "title": "Kėlinių formulė",
    "type": "formula",
    "definition": "Nurodo visų įmanomų tvarkų skaičių n elementų aibei.",
    "intuition": "Nurodo visų įmanomų tvarkų skaičių n elementų aibei.",
    "formal": "P_n = n!",
    "related": [
      "keliniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "binomo-formule": {
    "title": "Niutono binomo formulė",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti dvinario sumos laipsnį be nuoseklaus daugybos veiksmo.",
    "intuition": "Leidžia apskaičiuoti dvinario sumos laipsnį be nuoseklaus daugybos veiksmo.",
    "formal": "(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1}b + \\dots + C_n^n b^n",
    "related": [
      "niutono-binomas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "painioja-gretinius-ir-derinius": {
    "title": "Painioja gretinius su deriniais",
    "type": "mistake",
    "definition": "Mokinys neįsigilina į uždavinio sąlygą (ar pareigos/vietos skiriasi).",
    "intuition": "Naudoja derinių formulę, kai tvarka yra svarbi.",
    "formal": "Paklauskite savęs: 'Ar sukeitus du pasirinktus elementus vietomis, rinkinys pasikeis?'. Jei taip – gretiniai, jei ne – deriniai.",
    "related": [
      "gretiniai",
      "deriniai"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "faktorialo-nulis": {
    "title": "Mano, kad 0! = 0",
    "type": "mistake",
    "definition": "Intuicija sako, kad nulio daugyba turi būti nulis.",
    "intuition": "Skaičiavimuose 0! keičia į 0.",
    "formal": "Pagal apibrėžimą 0! = 1. Tai užtikrina formulių nuoseklumą.",
    "related": [
      "faktorialas"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "daugybos-vs-sudeties-taisykle": {
    "title": "Painioja sudėties ir daugybos taisykles",
    "type": "mistake",
    "definition": "Painiojami jungtukai 'ir' bei 'arba'.",
    "intuition": "Sudedami būdai, kai juos reikia dauginti.",
    "formal": "Jungtukas 'ir' (reikia abiejų) -> DAUGYBA. Jungtukas 'arba' (reikia vieno iš jų) -> SUDĖTIS.",
    "related": [
      "daugybos-taisykle",
      "sudeties-taisykle"
    ],
    "topics": [
      "kombinatorika-ir-binomas"
    ]
  },
  "menamasis-vienetas": {
    "title": "Menamasis vienetas",
    "type": "concept",
    "definition": "Skaičius i, kurio kvadratas lygus -1.",
    "intuition": "Tai 'raktas', atidarantis duris į neigiamų skaičių šaknis.",
    "formal": "Skaičius i, tenkinantis lygtį x² + 1 = 0.",
    "related": [
      "kompleksinis-skaicius"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "algebrine-forma": {
    "title": "Algebrinė forma",
    "type": "concept",
    "definition": "Užrašas z = a + bi.",
    "intuition": "Standartinis būdas užrašyti kompleksinį skaičių kaip sumą.",
    "formal": "Kompleksinio skaičiaus išraiška per realiąją dalį a ir menamąją dalį b.",
    "related": [
      "realioji-dalis",
      "menamoji-dalis"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "jungtinis-skaicius": {
    "title": "Jungtinis skaičius",
    "type": "concept",
    "definition": "Skaičius su priešingo ženklo menamąja dalimi.",
    "intuition": "Tai veidrodinis atspindys realiosios ašies atžvilgiu.",
    "formal": "Jei z = a + bi, tai jungtinis skaičius z̅ = a - bi.",
    "related": [
      "algebrine-forma"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "realioji-dalis": {
    "title": "Realioji Dalis",
    "type": "concept",
    "definition": "S?voka ?Realioji Dalis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "menamoji-dalis": {
    "title": "Menamoji Dalis",
    "type": "concept",
    "definition": "S?voka ?Menamoji Dalis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "kompleksine-plokstuma": {
    "title": "Kompleksine Plokstuma",
    "type": "concept",
    "definition": "S?voka ?Kompleksine Plokstuma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "trigonometrine-forma": {
    "title": "Trigonometrine Forma",
    "type": "concept",
    "definition": "S?voka ?Trigonometrine Forma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "muavro-formule": {
    "title": "Muavro Formule",
    "type": "concept",
    "definition": "S?voka ?Muavro Formule? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "n-tojo-laipsnio-saknis": {
    "title": "N Tojo Laipsnio Saknis",
    "type": "concept",
    "definition": "S?voka ?N Tojo Laipsnio Saknis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "kompleksinio-skaiciaus-forma": {
    "title": "Algebrinė forma",
    "type": "formula",
    "definition": "Pagrindinis kompleksinio skaičiaus užrašas.",
    "intuition": "Pagrindinis kompleksinio skaičiaus užrašas.",
    "formal": "z = a + bi",
    "related": [
      "algebrine-forma"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "kompleksinio-skaiciaus-modulis": {
    "title": "Modulio formulė",
    "type": "formula",
    "definition": "Atstumas nuo koordinačių pradžios pradžios taško.",
    "intuition": "Atstumas nuo koordinačių pradžios pradžios taško.",
    "formal": "|z| = \\sqrt{a^2 + b^2}",
    "related": [
      "modulis"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "muavro-formule-latex": {
    "title": "Muavro formulė",
    "type": "formula",
    "definition": "Naudojama kompleksinio skaičiaus kėlimui n-tuoju laipsniu.",
    "intuition": "Naudojama kompleksinio skaičiaus kėlimui n-tuoju laipsniu.",
    "formal": "z^n = r^n (\\cos(n\\phi) + i\\sin(n\\phi))",
    "related": [
      "muavro-formule",
      "trigonometrine-forma"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "i-laipsniu-klaida": {
    "title": "Neteisingas i laipsnio skaičiavimas",
    "type": "mistake",
    "definition": "Pamirštama faktas, kad i² = -1, todėl i³ = i² * i = -i.",
    "intuition": "i^3 = 1 arba i^4 = -1.",
    "formal": "Prisimink ciklą: i, -1, -i, 1. Dalink laipsnį iš 4 ir žiūrėk liekaną.",
    "related": [
      "menamasis-vienetas"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "argumento-ketvircio-nustatymas": {
    "title": "Klaida nustatant kampą (argumentą)",
    "type": "mistake",
    "definition": "Skaičiuotuvas duoda kampą tik nuo -90 iki 90 laipsnių.",
    "intuition": "Visada rašo arctan(b/a) nežiūrėdami į ženklus.",
    "formal": "Būtinai nusipieškite tašką! Jei taškas II ar III ketvirtyje, prie gauto kampo pridėkite π (180°).",
    "related": [
      "argumentas"
    ],
    "topics": [
      "kompleksiniai-skaiciai"
    ]
  },
  "olimpiada-12-concept-tangent-trick": {
    "title": "Liestinės triukas",
    "type": "concept",
    "definition": "Nelygybių įrodymo metodas, kai kiekvienam nariui pritaikoma tiesinė funkcija, liestinė tam tikrame taške.",
    "intuition": "Jei funkcija yra išgaubta aplink vidurkį, jos grafikas yra virš liestinės, todėl galime kiekvieną nelygybės narį įvertinti tiesine išraiška, kurias sudėjus gauname bendrą nelygybę.",
    "formal": "Jei norime įrodyti $\\sum_{i=1}^n f(x_i) \\ge C$ su sąlyga $\\sum x_i = S$, ieškome tiesės $y = mx + n$, tokios, kad $f(x) \\ge mx + n$ visiems leistiniems $x$ ir $f(x_0) = mx_0 + n$ taške $x_0 = S/n$. Tuomet $\\sum f(x_i) \\ge m \\sum x_i + n \\cdot n$.",
    "related": [],
    "topics": [
      "olimpiada-12-algebra"
    ]
  },
  "olimpiada-12-concept-unity-filter": {
    "title": "Vieneto šaknų filtras",
    "type": "concept",
    "definition": "Metodas skaičiuoti koeficientų sumas su tam tikru žingsniu naudojant kompleksines vieneto šaknis.",
    "intuition": "Naudojant faktą, kad $\\sum_{j=0}^{m-1} \\omega^{j k}$ yra lygi $m$, kai $k$ dalijasi iš $m$, ir 0 kitais atvejais, galime išfiltruoti reikiamus sumos narius.",
    "formal": "Sveikajam $k$ ir $\\omega = e^{2\\pi i / m}$ galioja $\\frac{1}{m} \\sum_{j=0}^{m-1} \\omega^{j k} = 1$, kai $m \\mid k$, ir $0$, kai $m \\nmid k$.",
    "related": [],
    "topics": [
      "olimpiada-12-algebra"
    ]
  },
  "olimpiada-12-concept-barycentric": {
    "title": "Baricentrinės koordinatės",
    "type": "concept",
    "definition": "Koordinačių sistema, apibrėžianti tašką per mases trikampio viršūnėse.",
    "intuition": "",
    "formal": "P = (x:y:z) reiškia xA + yB + zC = (x+y+z)P.",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "olimpiada-12-concept-feuerbach": {
    "title": "9 taškų apskritimas",
    "type": "concept",
    "definition": "Apskritimas, einantis per 9 specifinius trikampio taškus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "ceva-teorema": {
    "title": "Ceva Teorema",
    "type": "concept",
    "definition": "S?voka ?Ceva Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "inversija-savoka": {
    "title": "Inversija Savoka",
    "type": "concept",
    "definition": "S?voka ?Inversija Savoka? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "pascal-teorema": {
    "title": "Pascal Teorema",
    "type": "concept",
    "definition": "S?voka ?Pascal Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "stewart-formule": {
    "title": "Stewarto teorema",
    "type": "formula",
    "definition": "Sąryšis tarp trikampio kraštinių ir čevianės ilgio.",
    "intuition": "Sąryšis tarp trikampio kraštinių ir čevianės ilgio.",
    "formal": "man + dad = bnb + cnc",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "euler-briaunainiams": {
    "title": "Eulerio formulė briaunainiams",
    "type": "formula",
    "definition": "Ryšys tarp viršūnių, briaunų ir sienų skaičiaus.",
    "intuition": "Ryšys tarp viršūnių, briaunų ir sienų skaičiaus.",
    "formal": "V - B + S = 2",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "olimpiada-12-concept-probabilistic-second-moment": {
    "title": "Antrojo momento metodas",
    "type": "concept",
    "definition": "Tikimybinis metodas įrodyti savybes naudojant dispersiją.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-generating-functions": {
    "title": "Generuojančios funkcijos",
    "type": "concept",
    "definition": "Sekų kodavimas laipsninėmis eilutėmis.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-burnside-lemma": {
    "title": "Olimpiada 12 Concept Burnside Lemma",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 12 Concept Burnside Lemma? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-inclusion-exclusion-derangements": {
    "title": "Olimpiada 12 Concept Inclusion Exclusion Derangements",
    "type": "concept",
    "definition": "S?voka ?Olimpiada 12 Concept Inclusion Exclusion Derangements? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "remzio-teorija": {
    "title": "Remzio Teorija",
    "type": "concept",
    "definition": "S?voka ?Remzio Teorija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "turano-teorema": {
    "title": "Turano Teorema",
    "type": "concept",
    "definition": "S?voka ?Turano Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "sprague-grundy-teorema": {
    "title": "Sprague Grundy Teorema",
    "type": "concept",
    "definition": "S?voka ?Sprague Grundy Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-vietas-jumping": {
    "title": "Vijetos šuolis",
    "type": "concept",
    "definition": "Įrodymo metodas skaičių teorijoje, kai turint sprendinį konstruojamas kitas, mažesnis sprendinys.",
    "intuition": "Jei darome prielaidą, kad egzistuoja minimalus sprendinys ir pritaikę Vijetos formules gauname dar mažesnį, gauname prieštarą.",
    "formal": "Jei lygtis $x^2 - Ax + B = 0$ turi sveikąjį sprendinį $x_1$, tai antrasis sprendinys $x_2 = A - x_1 = B/x_1$ taip pat yra racionalusis.",
    "related": [],
    "topics": [
      "olimpiada-12-skaiciu-teorija"
    ]
  },
  "olimpiada-12-concept-lte-lemma": {
    "title": "LTE (Lifting The Exponent) lema",
    "type": "concept",
    "definition": "Formulė pirminio skaičiaus laipsniui, dalijančiam $a^n \\pm b^n$, rasti.",
    "intuition": "Tai leidžia tiesiogiai suskaičiuoti, kiek kartų pirminis skaičius $p$ įeina į reiškinio $a^n - b^n$ skaidinį pirminiais daugikliais.",
    "formal": "Nelyginiam $p$, jei $p | a-b$, tai $v_p(a^n - b^n) = v_p(a-b) + v_p(n)$.",
    "related": [],
    "topics": [
      "olimpiada-12-skaiciu-teorija"
    ]
  },
  "olimpiada-12-concept-quadratic-reciprocity": {
    "title": "Olimpiada 12 concept quadratic reciprocity",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-skaiciu-teorija"
    ]
  },
  "olimpiada-12-concept-pell-equation": {
    "title": "Olimpiada 12 concept pell equation",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-skaiciu-teorija"
    ]
  },
  "apibreztinis-integralas": {
    "title": "Apibrėžtinis integralas",
    "type": "concept",
    "definition": "Funkcijos pokytis arba plotas intervale [a, b].",
    "intuition": "Tai tarsi galutinis 'derlius', sukauptas per tam tikrą laiką.",
    "formal": "Skaičius, lygus pirmykštės funkcijos reikšmių skirtumui rėžiuose.",
    "related": [
      "niutono-leibnico-formule",
      "plotas-po-kreive"
    ],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "niutono-leibnico-formule": {
    "title": "Niutono ir Leibnico formulė",
    "type": "theorem",
    "definition": "Ryšys tarp integralo ir pirmykštės funkcijos.",
    "intuition": "Pagrindinis tiltas tarp skaičiavimo ir geometrijos.",
    "formal": "∫ f(x) dx nuo a iki b = F(b) - F(a).",
    "related": [
      "apibreztinis-integralas",
      "pirmykste-funkcija"
    ],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "neapibreztinis-integralas": {
    "title": "Neapibreztinis Integralas",
    "type": "concept",
    "definition": "S?voka ?Neapibreztinis Integralas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "integravimo-konstanta": {
    "title": "Integravimo Konstanta",
    "type": "concept",
    "definition": "S?voka ?Integravimo Konstanta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "kreivine-trapezija": {
    "title": "Kreivine Trapezija",
    "type": "concept",
    "definition": "S?voka ?Kreivine Trapezija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "plotas-po-kreive": {
    "title": "Plotas Po Kreive",
    "type": "concept",
    "definition": "S?voka ?Plotas Po Kreive? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "sukinio-turis": {
    "title": "Sukinio Turis",
    "type": "concept",
    "definition": "S?voka ?Sukinio Turis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "integravimo-taisykles": {
    "title": "Integravimo Taisykles",
    "type": "concept",
    "definition": "S?voka ?Integravimo Taisykles? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "pagrindine-integravimo-formule": {
    "title": "Neapibrėžtinis integralas",
    "type": "formula",
    "definition": "Pagrindinė laipsninių funkcijų integravimo taisyklė.",
    "intuition": "Pagrindinė laipsninių funkcijų integravimo taisyklė.",
    "formal": "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C",
    "related": [
      "neapibreztinis-integralas"
    ],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "niutono-leibnico-formule-latex": {
    "title": "Niutono-Leibnico formulė",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti apibrėžtinį integralą.",
    "intuition": "Leidžia apskaičiuoti apibrėžtinį integralą.",
    "formal": "\\int_a^b f(x) dx = F(b) - F(a)",
    "related": [
      "niutono-leibnico-formule"
    ],
    "topics": [
      "pirmykste-funkcija-ir-integralas"
    ]
  },
  "nepriklausomi-ivykiai": {
    "title": "Nepriklausomi įvykiai",
    "type": "concept",
    "definition": "Įvykiai, nedarantys įtakos vienas kito tikimybei.",
    "intuition": "Vieno įvykio baigtis nieko nepasako apie kitą.",
    "formal": "A ir B nepriklausomi, jei P(A ∩ B) = P(A)P(B).",
    "related": [
      "tikimybe",
      "salygine-tikimybe"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "salygine-tikimybe": {
    "title": "Sąlyginė tikimybė",
    "type": "concept",
    "definition": "Įvykio tikimybė esant papildomai informacijai.",
    "intuition": "Tikimybės perskaičiavimas, kai dalis tiesos jau žinoma.",
    "formal": "P(A|B) = P(A ∩ B) / P(B).",
    "related": [
      "priklausomi-ivykiai",
      "bayeso-formule"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "tikimybiu-medis": {
    "title": "Tikimybių medis",
    "type": "concept",
    "definition": "Grafinis kelių etapų bandymų vaizdavimas.",
    "intuition": "Žemėlapis, rodantis visus galimus bandymo kelius.",
    "formal": "Orientuotas grafas, kurio briaunoms priskirtos tikimybės.",
    "related": [
      "pilnosios-tikimybes-formule",
      "salygine-tikimybe"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "ivykiu-sankirta": {
    "title": "Ivykiu Sankirta",
    "type": "concept",
    "definition": "S?voka ?Ivykiu Sankirta? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "ivykiu-sajunga": {
    "title": "Ivykiu Sajunga",
    "type": "concept",
    "definition": "S?voka ?Ivykiu Sajunga? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "nesutaikomi-ivykiai": {
    "title": "Nesutaikomi Ivykiai",
    "type": "concept",
    "definition": "S?voka ?Nesutaikomi Ivykiai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "priklausomi-ivykiai": {
    "title": "Priklausomi Ivykiai",
    "type": "concept",
    "definition": "S?voka ?Priklausomi Ivykiai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "tikimybiu-daugybos-taisykle": {
    "title": "Tikimybiu Daugybos Taisykle",
    "type": "concept",
    "definition": "S?voka ?Tikimybiu Daugybos Taisykle? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "tikimybiu-sumos-taisykle": {
    "title": "Tikimybiu Sumos Taisykle",
    "type": "concept",
    "definition": "S?voka ?Tikimybiu Sumos Taisykle? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "pilnosios-tikimybes-formule": {
    "title": "Pilnosios Tikimybes Formule",
    "type": "concept",
    "definition": "S?voka ?Pilnosios Tikimybes Formule? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "bayeso-formule": {
    "title": "Bayeso Formule",
    "type": "concept",
    "definition": "S?voka ?Bayeso Formule? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "tikimybiu-sumos-formule": {
    "title": "Įvykių sąjungos tikimybė",
    "type": "formula",
    "definition": "Naudojama skaičiuojant 'arba' tipo įvykius.",
    "intuition": "Naudojama skaičiuojant 'arba' tipo įvykius.",
    "formal": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    "related": [
      "tikimybiu-sumos-taisykle"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "salygines-tikimybes-formule": {
    "title": "Sąlyginės tikimybės formulė",
    "type": "formula",
    "definition": "Pagrindinė formulė priklausomiems įvykiams tirti.",
    "intuition": "Pagrindinė formulė priklausomiems įvykiams tirti.",
    "formal": "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
    "related": [
      "salygine-tikimybe"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "pilnosios-tikimybes-formule-latex": {
    "title": "Pilnosios tikimybės formulė",
    "type": "formula",
    "definition": "Suskaičiuoja bendrą įvykio tikimybę per visas hipotezes.",
    "intuition": "Suskaičiuoja bendrą įvykio tikimybę per visas hipotezes.",
    "formal": "P(A) = \\sum P(H_i)P(A|H_i)",
    "related": [
      "pilnosios-tikimybes-formule"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "painioja-nesutaikomuma-ir-nepriklausomuma": {
    "title": "Painioja nesutaikomumą su nepriklausomumu",
    "type": "mistake",
    "definition": "Žodžiai skamba panašiai (abu reiškia 'atskirumą').",
    "intuition": "Mano, kad jei įvykiai nesutaikomi, jie yra nepriklausomi.",
    "formal": "Nesutaikomi = negali įvykti kartu. Nepriklausomi = nekeičia vienas kito tikimybės.",
    "related": [
      "nesutaikomi-ivykiai",
      "nepriklausomi-ivykiai"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "pamirsta-sankirtos-atimti-sumoje": {
    "title": "Pamiršta atimti sankirtą sumos formulėje",
    "type": "mistake",
    "definition": "Pamirštama, kad įvykiai gali turėti bendrų baigčių.",
    "intuition": "P(A arba B) = P(A) + P(B).",
    "formal": "Visada patikrinkite, ar įvykiai sutaikomi. Jei taip – atimkite P(A ir B).",
    "related": [
      "tikimybiu-sumos-taisykle"
    ],
    "topics": [
      "priklausomi-ir-nepriklausomi-ivykiai"
    ]
  },
  "statistinis-tyrimas": {
    "title": "Statistinis Tyrimas",
    "type": "concept",
    "definition": "S?voka ?Statistinis Tyrimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "generaline-aibe": {
    "title": "Generaline Aibe",
    "type": "concept",
    "definition": "S?voka ?Generaline Aibe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "pirsono-koeficientas": {
    "title": "Pirsono Koeficientas",
    "type": "concept",
    "definition": "S?voka ?Pirsono Koeficientas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "regresija": {
    "title": "Regresija",
    "type": "concept",
    "definition": "S?voka ?Regresija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "determinacijos-koeficientas": {
    "title": "Determinacijos Koeficientas",
    "type": "concept",
    "definition": "S?voka ?Determinacijos Koeficientas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "koreliacija-ne-priezastingumas": {
    "title": "Koreliacijos painiojimas su priežastingumu",
    "type": "mistake",
    "definition": "Žmogaus noras rasti paprastas priežastis sudėtingiems reiškiniams.",
    "intuition": "Teigiama, kad x tiesiogiai sukelia y tik todėl, kad r > 0,8.",
    "formal": "Visada apsvarstykite kitus galimus veiksnius.",
    "related": [
      "koreliacija"
    ],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "vidurkis-netinka-skirstiniams-su-iskirtim": {
    "title": "Netinkamas vidurkio naudojimas",
    "type": "mistake",
    "definition": "Vidurkis yra labiausiai žinoma charakteristika, todėl taikoma aklai.",
    "intuition": "Naudojamas vidurkis apibūdinti algoms įmonėje, kurioje direktorius uždirba 100 kartų daugiau nei darbininkai.",
    "formal": "Esant didelėms išskirtims, naudokite medianą.",
    "related": [
      "vidurkis",
      "mediana"
    ],
    "topics": [
      "statistine-duomenu-analize-ir-regresija"
    ]
  },
  "stereometrijos-aksiomos": {
    "title": "Stereometrijos Aksiomos",
    "type": "concept",
    "definition": "S?voka ?Stereometrijos Aksiomos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "prasilenkiancios-tieses": {
    "title": "Prasilenkiancios Tieses",
    "type": "concept",
    "definition": "S?voka ?Prasilenkiancios Tieses? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "tieses-ir-plokstumos-statmenumas": {
    "title": "Tieses Ir Plokstumos Statmenumas",
    "type": "concept",
    "definition": "S?voka ?Tieses Ir Plokstumos Statmenumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "triju-statmenu-teorema": {
    "title": "Triju Statmenu Teorema",
    "type": "concept",
    "definition": "S?voka ?Triju Statmenu Teorema? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "dvisienis-kampas": {
    "title": "Dvisienis Kampas",
    "type": "concept",
    "definition": "S?voka ?Dvisienis Kampas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "atstumas-tarp-prasilenkiančiųjų": {
    "title": "Atstumas Tarp Prasilenkiančiųjų",
    "type": "concept",
    "definition": "S?voka ?Atstumas Tarp Prasilenkiančiųjų? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "ortogonalioji-projekcija": {
    "title": "Ortogonalioji Projekcija",
    "type": "concept",
    "definition": "S?voka ?Ortogonalioji Projekcija? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "vizualinis-iskraipymas-brezinyje": {
    "title": "Pasitikėjimas vaizdu, o ne faktais",
    "type": "mistake",
    "definition": "Smegenys bando interpretuoti 2D brėžinį kaip 2D plokštumą, o ne kaip 3D objektą.",
    "intuition": "Mokinys mano, kad jei brėžinyje kampas atrodo smailus, jis negali būti status.",
    "formal": "Visada žymėkite stačiuosius kampus kvadrato simboliu ir remkitės tik teoriniais įrodymais (pvz., T3P).",
    "related": [
      "projekcija"
    ],
    "topics": [
      "stereometrija-tieses-plokstumos-ir-kampai"
    ]
  },
  "didziuju-skaiciu-desnis": {
    "title": "Didziuju Skaiciu Desnis",
    "type": "concept",
    "definition": "S?voka ?Didziuju Skaiciu Desnis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "pasikliautinis-intervalas": {
    "title": "Pasikliautinis Intervalas",
    "type": "concept",
    "definition": "S?voka ?Pasikliautinis Intervalas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "normaliojo-simetrijos-nepaisymas": {
    "title": "Klaida skaičiuojant normaliojo skirstinio uodegas",
    "type": "mistake",
    "definition": "Pamirštama kreivės simetrija.",
    "intuition": "Manoma, kad jei į intervalą [mu-sigma; mu+sigma] telpa 68%, tai likę 32% yra tik vienoje pusėje.",
    "formal": "Likusieji procentai dalijami po lygiai abiems 'uodegoms' (po 16%).",
    "related": [
      "normalusis-skirstinys"
    ],
    "topics": [
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "ark-funkcijos": {
    "title": "Ark Funkcijos",
    "type": "concept",
    "definition": "S?voka ?Ark Funkcijos? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "homogenines-lygtys": {
    "title": "Homogenines Lygtys",
    "type": "concept",
    "definition": "S?voka ?Homogenines Lygtys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "universalusis-pakeitimas": {
    "title": "Universalusis Pakeitimas",
    "type": "concept",
    "definition": "S?voka ?Universalusis Pakeitimas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "trigonometrines-nelygybes": {
    "title": "Trigonometrines Nelygybes",
    "type": "concept",
    "definition": "S?voka ?Trigonometrines Nelygybes? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "papildomo-kampo-metodas": {
    "title": "Papildomo Kampo Metodas",
    "type": "concept",
    "definition": "S?voka ?Papildomo Kampo Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "grafinis-metodas": {
    "title": "Grafinis Metodas",
    "type": "concept",
    "definition": "S?voka ?Grafinis Metodas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "apibrėžimo-srities-praradimas": {
    "title": "Apibrėžimo srities praradimas dalinant",
    "type": "mistake",
    "definition": "Noras kuo greičiau gauti paprastesnę lygtį.",
    "intuition": "Dalinama iš cos x nepatikrinus, ar cos x = 0 nėra sprendinys.",
    "formal": "Visada atskirai patikrinkite atvejį, kai daliklis lygus nuliui.",
    "related": [
      "homogenines-lygtys"
    ],
    "topics": [
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "radianai": {
    "title": "Radianai",
    "type": "concept",
    "definition": "S?voka ?Radianai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "laipsniai": {
    "title": "Laipsniai",
    "type": "concept",
    "definition": "S?voka ?Laipsniai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "pagrindine-tapatybe": {
    "title": "Pagrindine Tapatybe",
    "type": "concept",
    "definition": "S?voka ?Pagrindine Tapatybe? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "trigonometrine-lygtis": {
    "title": "Trigonometrine Lygtis",
    "type": "concept",
    "definition": "S?voka ?Trigonometrine Lygtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "bendrasis-sprendinys": {
    "title": "Bendrasis Sprendinys",
    "type": "concept",
    "definition": "S?voka ?Bendrasis Sprendinys? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "laipsniu-ir-radiano-painiojimas": {
    "title": "Laipsnių ir radianų 'kokteilis'",
    "type": "mistake",
    "definition": "Naudojamos abiejų sistemų dalys vienoje formulėje.",
    "intuition": "Rašoma x = π/4 + 180k.",
    "formal": "Pasirinkite vieną sistemą: arba viską radianais (π/4 + πk), arba viską laipsniais (45 + 180k).",
    "related": [
      "trigonometrine-lygtis"
    ],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "periodo-ignoravimas": {
    "title": "Tik vieno sprendinio radimas",
    "type": "mistake",
    "definition": "Pamirštama, kad apskritimas sukasi begalę kartų.",
    "intuition": "sin x = 1 => x = 90 (ir viskas).",
    "formal": "Visada pridėkite +2πk (arba +πk tangentui).",
    "related": [
      "bendrasis-sprendinys"
    ],
    "topics": [
      "trigonometrines-lygtys"
    ]
  },
  "staciakampe-koordinaciu-sistema-erdveje": {
    "title": "Staciakampe Koordinaciu Sistema Erdveje",
    "type": "concept",
    "definition": "S?voka ?Staciakampe Koordinaciu Sistema Erdveje? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "bazinis-vektorius": {
    "title": "Bazinis Vektorius",
    "type": "concept",
    "definition": "S?voka ?Bazinis Vektorius? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-modulis-erdveje": {
    "title": "Vektoriaus Modulis Erdveje",
    "type": "concept",
    "definition": "S?voka ?Vektoriaus Modulis Erdveje? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "skaliarine-vektoriu-sandauga-erdveje": {
    "title": "Skaliarine Vektoriu Sandauga Erdveje",
    "type": "concept",
    "definition": "S?voka ?Skaliarine Vektoriu Sandauga Erdveje? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "krypties-kosinusai": {
    "title": "Krypties Kosinusai",
    "type": "concept",
    "definition": "S?voka ?Krypties Kosinusai? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "kolinearumas": {
    "title": "Kolinearumas",
    "type": "concept",
    "definition": "S?voka ?Kolinearumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "komplanarumas": {
    "title": "Komplanarumas",
    "type": "concept",
    "definition": "S?voka ?Komplanarumas? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "projekcija-vektoriaus": {
    "title": "Projekcija Vektoriaus",
    "type": "concept",
    "definition": "S?voka ?Projekcija Vektoriaus? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "sferos-lygtis": {
    "title": "Sferos Lygtis",
    "type": "concept",
    "definition": "S?voka ?Sferos Lygtis? naudojama ?ioje temoje.",
    "intuition": "?i s?voka padeda susieti teorij? su u?daviniais.",
    "formal": "",
    "related": [],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-koordinasciu-ir-tasko-koordinasciu-painiojimas": {
    "title": "Vektoriaus ir taško koordinačių painiojimas",
    "type": "mistake",
    "definition": "Užmirštama, kad vektorius yra poslinkis, todėl svarbu, iš kur jis prasideda.",
    "intuition": "Vektoriaus $\\vec{AB}$ koordinatės laikomos lygiomis taško B koordinatėms.",
    "formal": "Visada atimkite pradžios taško koordinates iš pabaigos taško koordinačių.",
    "related": [
      "vektoriaus-koordinates-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "skaliarines-sandaugos-zenklo-klaida": {
    "title": "Kosinuso ženklo ignoravimas",
    "type": "mistake",
    "definition": "Painiojamas kampas su jo kosinusu.",
    "intuition": "Manoma, kad jei sandauga neigiama, tai kampas yra neigiamas.",
    "formal": "Neigiama sandauga reiškia, kad kampas yra tarp 90 ir 180 laipsnių (bukasis).",
    "related": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  }
};
