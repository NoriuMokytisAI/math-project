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
    "formal": "Sveikasis skaičius turi kablelį gale (3 = 3,0). Lygiuok kablelį po kablelio.",
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesiniu-lygciu-sistemos-8",
      "tiesioginis-proporcingumas"
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
      "daugianariai-ir-greitosios-daugybos-formules",
      "desningumai-ir-lenteles-5",
      "kvadratinis-trinaris-ir-racionalieji-reiskiniai",
      "lygtys-nelygybes-ir-raidiniai-reiskiniai",
      "nelygybes-ir-intervalai",
      "racionaliosios-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-lygtys",
      "racionaliosios-rodiklines-ir-logaritmines-nelygybes",
      "tiesioginis-proporcingumas"
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
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "imtis": {
    "title": "Imtis",
    "type": "concept",
    "definition": "Duomenų dalis, naudojama tiriamam reiškiniui.",
    "intuition": "Imtis yra tarsi mažas visumos pavyzdys.",
    "formal": "Imtis yra duomenų rinkinys, paimtas iš populiacijos.",
    "related": [
      "duomenys",
      "sklaida"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "daznis": {
    "title": "Dažnis",
    "type": "concept",
    "definition": "Kiek kartų reikšmė pasikartoja.",
    "intuition": "Dažnis parodo, kas nutinka dažniausiai.",
    "formal": "Dažnis yra stebėjimų skaičius konkrečiai reikšmei.",
    "related": [
      "vidurkis",
      "mediana"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "vidurkis": {
    "title": "Vidurkis",
    "type": "concept",
    "definition": "Suma padalinta iš reikšmių skaičiaus.",
    "intuition": "Vidurkis suvienodina visus skaičius į vieną tipinę reikšmę.",
    "formal": "Aritmetinis vidurkis yra visų reikšmių suma, padalyta iš jų kiekio.",
    "related": [
      "mediana",
      "moda"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "mediana": {
    "title": "Mediana",
    "type": "concept",
    "definition": "Vidurinė surikiuotų duomenų reikšmė.",
    "intuition": "Mediana yra atspari kraštinėms reikšmėms.",
    "formal": "Mediana yra vidurinė surikiuotos imties reikšmė.",
    "related": [
      "vidurkis",
      "moda"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "moda": {
    "title": "Moda",
    "type": "concept",
    "definition": "Dažniausiai pasikartojanti reikšmė.",
    "intuition": "Moda greitai pasako, kas populiariausia.",
    "formal": "Moda yra didžiausio dažnio reikšmė.",
    "related": [
      "daznis",
      "vidurkis"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "sklaida": {
    "title": "Sklaida",
    "type": "concept",
    "definition": "Kiek plačiai duomenys išsibarstę.",
    "intuition": "Sklaida parodo, ar duomenys labai vienodi, ar įvairūs.",
    "formal": "Sklaida nusako duomenų išsisklaidymo mastą.",
    "related": [
      "imtis",
      "vidurkis"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "tikimybe": {
    "title": "Tikimybė",
    "type": "concept",
    "definition": "Įvykio pasireiškimo matas nuo 0 iki 1.",
    "intuition": "Tikimybė pasako, kiek realu, kad kas nors įvyks.",
    "formal": "Tikimybė yra skaičius iš intervalo [0, 1].",
    "related": [
      "ivyki",
      "kombinatorika"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "kombinatorika": {
    "title": "Kombinatorika",
    "type": "concept",
    "definition": "Skaičiavimas, kiek yra galimų variantų.",
    "intuition": "Kombinatorika padeda suskaičiuoti pasirinkimų skaičių.",
    "formal": "Kombinatorika tiria pasirinkimų, išdėstymų ir kombinacijų skaičių.",
    "related": [
      "tikimybe"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-binomas",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
    ]
  },
  "koreliacija": {
    "title": "Koreliacija",
    "type": "concept",
    "definition": "Dviejų kintamųjų ryšys.",
    "intuition": "Koreliacija parodo, kaip vienas dydis juda kartu su kitu.",
    "formal": "Koreliacija nusako statistinį ryšį tarp dydžių.",
    "related": [
      "duomenys",
      "sklaida"
    ],
    "topics": [
      "duomenu-charakteristikos-ir-tikimybe-6",
      "duomenu-sklaida-skirstiniai-ir-patikimumas",
      "duomenys-ir-tikimybe",
      "histogramos-kvartiliai-ir-sukauptasis-daznis",
      "imtys-ir-diagramos-7",
      "kombinatorika-ir-ilgalaike-tikimybe",
      "priklausomi-ir-nepriklausomi-ivykiai",
      "sklaidos-diagramos-ir-koreliacija",
      "statistika-tikimybe-ir-vektoriai",
      "statistine-duomenu-analize-ir-regresija",
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "tikimybiniai-skirstiniai-ir-statistika"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "olimpiada-07-skaiciu-teorija",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "finansiniai-skaiciavimai-5",
      "finansiniai-skaiciavimai-6",
      "finansiniai-skaiciavimai-7",
      "finansiniai-skaiciavimai-8",
      "naturalieji-skaiciai-dalikliai-kartotiniai",
      "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba",
      "sveikieji-racionalieji-skaiciai",
      "trupmenos-procentai-santykiai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
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
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-projekcijos-ir-breziniai"
    ]
  },
  "vektorius": {
    "title": "Vektorius",
    "type": "concept",
    "definition": "Nukreipta atkarpa.",
    "intuition": "Vektorius rodo ir ilgį, ir kryptį.",
    "formal": "Vektorius turi moduli, kryptį ir pojūtį, kur keliauja.",
    "related": [
      "koordinates",
      "transformacija"
    ],
    "topics": [
      "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija",
      "briaunainiai-sukiniai-ir-pjuviai",
      "geometrijos-ir-matavimu-pradmenys",
      "judejimo-uzdaviniai-ir-matavimo-vienetai",
      "lygiagretes-keturkampiai-ir-erdves-figuros",
      "lygios-ir-panasios-figuros",
      "panasus-trikampiai-ir-talio-teorema",
      "pitagoro-teorema-ir-vidurio-linijos",
      "stereometrija-tieses-plokstumos-ir-kampai",
      "transformacijos-5",
      "transformacijos-ir-koordinates",
      "trikampiai-ir-pitagoro-teorema",
      "trikampiu-trigonometrija-ir-apskritimai",
      "vektoriai-plokstumoje",
      "vektoriai-projekcijos-ir-breziniai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "stereometrija-tieses-plokstumos-ir-kampai"
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
      "olimpiada-05-algebra",
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
      "olimpiada-05-algebra",
      "olimpiada-05-geometrija",
      "olimpiada-05-kombinatorika",
      "olimpiada-05-skaiciu-teorija",
      "olimpiada-05-strategijos-ir-irodymai"
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
  "trap-checking-examples-only": {
    "title": "Tikrinami tik keli pavyzdžiai",
    "type": "mistake",
    "definition": "Pavyzdžiai sukuria klaidingą užtikrintumo jausmą.",
    "intuition": "Mokinys patikrina 2-3 pavyzdžius ir daro išvadą, kad teiginys teisingas.",
    "formal": "Olimpiadose reikia bendro paaiškinimo (įrodymo), kodėl tai galioja visiems atvejams.",
    "related": [],
    "topics": [
      "olimpiada-05-strategijos-ir-irodymai"
    ]
  },
  "trap-guessing-patterns": {
    "title": "Spėjimas pagal dėsningumą",
    "type": "mistake",
    "definition": "Nenoras gilintis į mechanizmą, kodėl dėsningumas veikia.",
    "intuition": "Mokinys pastebi dėsningumą pirmose keliose būsenose ir spėja atsakymą nepagrįsdamas.",
    "formal": "Būtina rasti invariantą arba loginį ryšį, kuris garantuoja dėsningumą.",
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
  "simboliu-reiksmes": {
    "title": "Simbolių reikšmės",
    "type": "concept",
    "definition": "Fiksuotos septynių pagrindinių simbolių vertės.",
    "intuition": "Kiekviena raidė turi savo kainą.",
    "formal": "I=1, V=5, X=10, L=50, C=100, D=500, M=1000.",
    "related": [
      "romeniskas-skaitmuo"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "dideli-skaiciai-romeniski": {
    "title": "Dideli romėniški skaičiai",
    "type": "concept",
    "definition": "Skaičiai iki 3000 sudaryti naudojant M ir kitus simbolius.",
    "intuition": "Tūkstančiai žymimi raide M.",
    "formal": "Skaičiavimas virš 1000 atliekamas kartojant M simbolį (pvz., MMM = 3000).",
    "related": [
      "simboliu-reiksmes"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "skaiciu-konvertavimas": {
    "title": "Skaičių konvertavimas",
    "type": "method",
    "definition": "Dešimtainių skaičių pavertimas romėniškais ir atvirkščiai.",
    "intuition": "Tai tarsi vertimas iš vienos kalbos į kitą.",
    "formal": "Pozicinio dešimtainio skaičiaus skaidymas skyriais ir jų keitimas atitinkamomis romėniškomis kombinacijomis.",
    "related": [
      "sudeties-taisykle-romeniskiems",
      "atimties-taisykle-romeniskiems"
    ],
    "topics": [
      "romeniski-skaiciai"
    ]
  },
  "istorinis-kontekstas": {
    "title": "Istorinis kontekstas",
    "type": "concept",
    "definition": "Romėniškų skaičių kilmė ir naudojimas.",
    "intuition": "Kodėl mes vis dar mokomės šių senovinių skaičių?",
    "formal": "Informacija apie sistemos naudojimą Viduramžiais, ciferblatuose ir oficialiuose dokumentuose.",
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
  "maisesi-simboliai": {
    "title": "Painioja L ir C",
    "type": "mistake",
    "definition": "Simboliai atrodo panašiai arba tiesiog pamirštamos vertės.",
    "intuition": "Mano, kad L yra 100, o C yra 50.",
    "formal": "L yra 50 (kaip 'Lpus' šimto), C yra 100 (kaip 'Centum').",
    "related": [
      "simboliu-reiksmes"
    ],
    "topics": [
      "romeniski-skaiciai"
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
  "olimpiada-06-geo-concept-angles": {
    "title": "Kryžminiai ir gretiniai kampai",
    "type": "concept",
    "definition": "Kampų poros, turinčios bendras kraštines ar viršūnes.",
    "intuition": "Gretiniai kampai kartu sudaro tiesę.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "olimpiada-06-geo-concept-triangle-inequality": {
    "title": "Trikampio nelygybė",
    "type": "concept",
    "definition": "Taisyklė, nurodanti, kada trikampis egzistuoja.",
    "intuition": "Trumpiausias kelias tarp dviejų taškų yra tiesė, o ne lankstas per trečią tašką.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "olimpiada-06-geo-concept-symmetry": {
    "title": "Simetrijos ašis",
    "type": "concept",
    "definition": "Tiesė, kuri dalija figūrą į dvi lygias, veidrodines dalis.",
    "intuition": "Jei figūrą perlenktume per šią tiesę, abi pusės sutaptų.",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-06-geometrija"
    ]
  },
  "lygus-trikampiai": {
    "title": "Lygūs trikampiai",
    "type": "concept",
    "definition": "Trikampiai, kurie visiškai sutampa juos uždėjus vieną ant kito.",
    "intuition": "Tai tarsi du identiški blynai.",
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
    "intuition": "Tai elementai-dvyniai.",
    "formal": "Elementai, kurie sutampa trikampius uždėjus vieną ant kito.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "trikampio-nelygybe": {
    "title": "Trikampio nelygybė",
    "type": "theorem",
    "definition": "Taisyklė: a + b > c.",
    "intuition": "Kelias aplinkui (per dvi kraštines) visada turi būti ilgesnis už tiesų kelią.",
    "formal": "Bet kurio trikampio bet kurių dviejų kraštinių ilgių suma yra didesnė už trečiosios kraštinės ilgį.",
    "related": [],
    "topics": [
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
    "intuition": "Jei žinai dvi kraštines ir kaip stipriai jos 'išskėstos', trečia kraštinė užsidarys pati.",
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
    "intuition": "Jei turi pagrindą ir žinai, kokiu kampu kyla sienos, viršūnė susitiks tik viename taške.",
    "formal": "Jei vieno trikampio kraštinė ir du prie jos esantys kampai yra atitinkamai lygūs kito trikampio kraštinei ir dviem prie jos esantiems kampams, tai tokie trikampiai yra lygūs.",
    "related": [
      "lygus-trikampiai"
    ],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "braizymas-skriestuvu": {
    "title": "Braižymas skriestuvu",
    "type": "method",
    "definition": "Skriestuvo naudojimas kraštinių ilgiams atidėti.",
    "intuition": "Skriestuvas padeda 'nukopijuoti' ilgį.",
    "formal": "Apskritimo lanko braižymas nurodytu spinduliu siekiant rasti geometrinę vietą taškų, nutolusių nuo centro nurodytu atstumu.",
    "related": [],
    "topics": [
      "trikampiu-lygumas-ir-braizymas"
    ]
  },
  "braizymas-matlankiu": {
    "title": "Braižymas matlankiu",
    "type": "method",
    "definition": "Kampų matavimas ir braižymas.",
    "intuition": "Matlankis padeda tiksliai pasukti kraštinę.",
    "formal": "Kampo didumo laipsniais nustatymas arba nurodyto didumo kampo atidėjimas brėžinyje.",
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
    "formal": "Visada patikrink: a + b > c.",
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
    "formal": "KKP požymiui kampas PRIVALO būti tarp duotų kraštinių.",
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
    "definition": "Atstumas nuo centro iki bet kurio apskritimo taško.",
    "intuition": "Dviračio rato stipinas.",
    "formal": "Atkarpa, jungianti apskritimo centrą su bet kuriuo jo tašku.",
    "related": [
      "skersmuo",
      "centras"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "skersmuo": {
    "title": "Skersmuo",
    "type": "concept",
    "definition": "Atkarpa, jungianti du taškus ir einanti per centrą.",
    "intuition": "Ilgiausia galima atkarpa apskritimo viduje.",
    "formal": "Atkarpa, jungianti du apskritimo taškus ir einanti per jo centrą; d = 2r.",
    "related": [
      "spindulys"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
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
    "type": "concept",
    "definition": "Paviršiaus, apriboto apskritimu, dydis.",
    "intuition": "Kiek dažų reikėtų skrituliui nudažyti.",
    "formal": "Skritulio užimamas plotas S = πr².",
    "related": [
      "skritulys",
      "spindulys"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
    ]
  },
  "lankas": {
    "title": "Lankas",
    "type": "concept",
    "definition": "Apskritimo dalis.",
    "intuition": "Išpjauta picos krašto dalis.",
    "formal": "Apskritimo dalis tarp dviejų jo taškų.",
    "related": [
      "apskritimas",
      "centrinis-kampas"
    ],
    "topics": [
      "apskritimas-ir-skritulys"
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
  "funkcija": {
    "title": "Funkcija",
    "type": "concept",
    "definition": "Taisyklė, kuri kiekvienam argumentui priskiria vieną reikšmę.",
    "intuition": "Tai pagrindinis elementariosios funkcijos modelis.",
    "formal": "Funkcija yra atvaizdis, kiekvienam x priskiriantis vienintelį f(x).",
    "related": [
      "argumentas",
      "grafikas",
      "apibrezimo-sritis"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "argumentas": {
    "title": "Argumentas",
    "type": "concept",
    "definition": "Nepriklausomas kintamasis.",
    "intuition": "Tai įvestis, kurią duodame funkcijai.",
    "formal": "Argumentas yra funkcijos įvesties kintamasis.",
    "related": [
      "funkcija",
      "reiksmiu-sritis"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "apibrezimo-sritis": {
    "title": "Apibrėžimo sritis",
    "type": "concept",
    "definition": "Visų leistinų argumentų aibė.",
    "intuition": "Tai visi x, kuriuos funkcija priima.",
    "formal": "Apibrėžimo sritis D(f) yra visų leistinų x aibė.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "reiksmiu-sritis": {
    "title": "Reikšmių sritis",
    "type": "concept",
    "definition": "Visų galimų funkcijos reikšmių aibė.",
    "intuition": "Tai visi galimi y atsakymai.",
    "formal": "Reikšmių sritis yra funkcijos galimų reikšmių aibė.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "grafikas": {
    "title": "Grafikas",
    "type": "concept",
    "definition": "Taškų rinkinys koordinačių plokštumoje.",
    "intuition": "Grafikas leidžia funkciją pamatyti akimis.",
    "formal": "Funkcijos grafikas yra visų taškų (x, f(x)) aibė.",
    "related": [
      "funkcija",
      "funkcijos-nulis",
      "didejimas",
      "mazejimas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "funkcijos-nulis": {
    "title": "Funkcijos nulis",
    "type": "concept",
    "definition": "Argumentas, kuriam funkcijos reikšmė lygi nuliui.",
    "intuition": "Tai vieta, kur grafikas susiduria su x ašimi.",
    "formal": "x0 yra nulis, jei f(x0)=0.",
    "related": [
      "grafikas",
      "saknys"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "didejimas": {
    "title": "Didėjimas",
    "type": "concept",
    "definition": "Kai didesniam argumentui atitinka didesnė reikšmė.",
    "intuition": "Judant į dešinę grafikas kyla.",
    "formal": "Funkcija didėja intervale, jei x1 < x2 implikuoja f(x1) < f(x2).",
    "related": [
      "mazejimas",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "mazejimas": {
    "title": "Mažėjimas",
    "type": "concept",
    "definition": "Kai didesniam argumentui atitinka mažesnė reikšmė.",
    "intuition": "Judant į dešinę grafikas leidžiasi.",
    "formal": "Funkcija mažėja intervale, jei x1 < x2 implikuoja f(x1) > f(x2).",
    "related": [
      "didejimas",
      "grafikas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "kvadratine-funkcija": {
    "title": "Kvadratinė funkcija",
    "type": "concept",
    "definition": "Funkcija su x² nariu.",
    "intuition": "Tai parabolės istorija.",
    "formal": "Kvadratinė funkcija yra f(x)=ax²+bx+c, kur a!=0.",
    "related": [
      "parabole",
      "virsune",
      "diskriminantas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "parabole": {
    "title": "Parabolė",
    "type": "concept",
    "definition": "Kvadratinės funkcijos grafikas.",
    "intuition": "U formos arba apversta U forma.",
    "formal": "Parabolė yra kvadratinės funkcijos grafikas.",
    "related": [
      "kvadratine-funkcija",
      "virsune"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "virsune": {
    "title": "Viršūnė",
    "type": "concept",
    "definition": "Aukščiausias arba žemiausias parabolės taškas.",
    "intuition": "Tai parabolės lūžio vieta.",
    "formal": "Viršūnė yra taškas, kuriame kvadratinė funkcija pasiekia ekstremumą.",
    "related": [
      "parabole",
      "simetrijos-asis"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "simetrijos-asis": {
    "title": "Simetrijos ašis",
    "type": "concept",
    "definition": "Tiesė, dalijanti parabolę į dvi vienodas dalis.",
    "intuition": "Tai parabolės veidrodis.",
    "formal": "Parabolės simetrijos ašis yra x=-b/(2a).",
    "related": [
      "virsune",
      "parabole"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "diskriminantas": {
    "title": "Diskriminantas",
    "type": "concept",
    "definition": "Dydis, nusakantis kvadratinės lygties nulių skaičių.",
    "intuition": "Jis sako, ar parabolė kirs ašį.",
    "formal": "D=b²-4ac.",
    "related": [
      "saknys",
      "kvadratine-funkcija"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "saknys": {
    "title": "Šaknys",
    "type": "concept",
    "definition": "Lygties sprendiniai.",
    "intuition": "Šaknys yra ten, kur funkcija lygi nuliui.",
    "formal": "Kvadratinės lygties šaknys yra sprendiniai, gaunami pagal diskriminantą.",
    "related": [
      "funkcijos-nulis",
      "diskriminantas"
    ],
    "topics": [
      "atvirkstinis-proporcingumas",
      "funkcijos-ir-ju-savybes",
      "kvadratine-funkcija-ir-lygtys",
      "kvadratines-nelygybes",
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "tiesinis-sarysis"
    ]
  },
  "funkcijos-zymejimas": {
    "title": "Funkcijos žymėjimas",
    "type": "formula",
    "definition": "Žymi, kad y priklauso nuo x.",
    "intuition": "Žymi, kad y priklauso nuo x.",
    "formal": "y=f(x)",
    "related": [
      "funkcija",
      "argumentas"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "virsunes-formule": {
    "title": "Viršūnės x koordinatė",
    "type": "formula",
    "definition": "Padeda rasti parabolės simetrijos ašį.",
    "intuition": "Padeda rasti parabolės simetrijos ašį.",
    "formal": "x_v=-\\frac{b}{2a}",
    "related": [
      "virsune",
      "kvadratine-funkcija"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "diskriminanto-formule": {
    "title": "Diskriminantas",
    "type": "formula",
    "definition": "Nusako realių šaknų skaičių.",
    "intuition": "Nusako realių šaknų skaičių.",
    "formal": "D=b^2-4ac",
    "related": [
      "diskriminantas",
      "saknys"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "x-y-sumaiso": {
    "title": "Supainioja x ir y",
    "type": "mistake",
    "definition": "f(2)=5 reiškia, kad kai x=2, funkcijos reikšmė yra 5.",
    "intuition": "f(2)=5 supranta kaip x=5.",
    "formal": "x yra įvestis, y yra rezultatas.",
    "related": [
      "funkcija",
      "argumentas"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "apibrezimo-srities-neziuri": {
    "title": "Neišsiaiškina apibrėžimo srities",
    "type": "mistake",
    "definition": "Vardiklis negali būti nulis.",
    "intuition": "Skaičiuoja 1/(x-2) ties x=2.",
    "formal": "Patikrink, kur reiškinys neapibrėžtas.",
    "related": [
      "apibrezimo-sritis"
    ],
    "topics": [
      "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"
    ]
  },
  "seka": {
    "title": "Seka",
    "type": "concept",
    "definition": "Skaičių eilė pagal taisyklę.",
    "intuition": "Tai trigonometrinės lygtys temos gija.",
    "formal": "Seka yra aibė, kurios elementai surikiuoti pagal indeksus.",
    "related": [
      "aritmetine-progresija",
      "geometrine-progresija"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "sinusas": {
    "title": "Sinusas",
    "type": "concept",
    "definition": "Trigonometrinis santykis arba kampo funkcija.",
    "intuition": "Jis matuoja vertikalią dalį vienetiniame apskritime.",
    "formal": "Sinusas sieja kampą su priešpriešine kraštine.",
    "related": [
      "kosinusas",
      "tangentas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "kosinusas": {
    "title": "Kosinusas",
    "type": "concept",
    "definition": "Trigonometrinis santykis.",
    "intuition": "Jis matuoja horizontalią dalį.",
    "formal": "Kosinusas sieja kampą su gretimąja kraštine.",
    "related": [
      "sinusas",
      "tangentas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "tangentas": {
    "title": "Tangentas",
    "type": "concept",
    "definition": "Santykis tarp priešpriešinės ir gretimosios kraštinių.",
    "intuition": "Tangentas padeda nagrinėti statųjį trikampį ir kryptį.",
    "formal": "tan α = sin α / cos α.",
    "related": [
      "sinusas",
      "kosinusas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "isvestine": {
    "title": "Išvestinė",
    "type": "concept",
    "definition": "Momentinio kitimo dydis.",
    "intuition": "Išvestinė sako, kiek stačiai kyla grafikas.",
    "formal": "Išvestinė aprašo funkcijos kitimo greitį.",
    "related": [
      "funkcija",
      "grafikas"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "pirmykste-funkcija": {
    "title": "Pirmykštė funkcija",
    "type": "concept",
    "definition": "Funkcija, kurios išvestinė yra duotoji.",
    "intuition": "Tai integralo kelio atgal idėja.",
    "formal": "F yra f pirmykštė, jei F'=f.",
    "related": [
      "integralas",
      "isvestine"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "kompleksinis-skaicius": {
    "title": "Kompleksinis skaičius",
    "type": "concept",
    "definition": "Skaičius a+bi.",
    "intuition": "Kompleksiniai skaičiai išplečia realiųjų skaičių aibę.",
    "formal": "c = a + bi, kur i² = -1.",
    "related": [
      "modulis",
      "argumentas-kompleksinis"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "modulis": {
    "title": "Modulis",
    "type": "concept",
    "definition": "Atstumas nuo nulio.",
    "intuition": "Modulis rodo dydį be ženklo.",
    "formal": "Kompleksinio skaičiaus modulis yra atstumas nuo koordinačių pradžios.",
    "related": [
      "kompleksinis-skaicius"
    ],
    "topics": [
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
    ]
  },
  "tikimybinis-skirstinys": {
    "title": "Tikimybinis skirstinys",
    "type": "concept",
    "definition": "Galimų rezultatų ir jų tikimybių lentelė.",
    "intuition": "Skirstinys padeda matyti visą tikimybių paveikslą.",
    "formal": "Tikimybinis skirstinys nurodo reikšmes ir jų tikimybes.",
    "related": [
      "tikimybe",
      "duomenys"
    ],
    "topics": [
      "atsitiktiniai-dydziai",
      "funkciju-ribos-ir-tolydumas",
      "isvestine-ir-diferencijavimas",
      "isvestines-taisykles-ir-optimizavimas",
      "kompleksiniai-skaiciai",
      "laipsniai-ir-saknys",
      "logaritmai-ir-trigonometrines-reiksmes",
      "pirmykste-funkcija-ir-integralas",
      "realieji-skaiciai-modulis-saknys-laipsniai",
      "realieji-skaiciai-saknys-ir-aibes-8",
      "rodiklines-logaritmines-ir-trigonometrines-funkcijos",
      "sekos-ir-indukcija",
      "skaiciu-sekos-9",
      "trigonometrines-lygtys",
      "trigonometrines-lygtys-ir-nelygybes-isplestinis"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
    ]
  },
  "isvestines-galios-formule": {
    "title": "Galios taisyklė",
    "type": "formula",
    "definition": "Svarbiausia išvestinių taisyklė.",
    "intuition": "Svarbiausia išvestinių taisyklė.",
    "formal": "\\frac{d}{dx}x^n = nx^{n-1}",
    "related": [
      "isvestine"
    ],
    "topics": [
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
      "trigonometrines-lygtys"
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
    "definition": "Gebėjimas taikyti netradicinius sprendimo būdus.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra",
      "olimpiada-07-geometrija"
    ]
  },
  "olimpiada-07-concept-method": {
    "title": "Olimpiada 07 concept method",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra",
      "olimpiada-07-geometrija"
    ]
  },
  "olimpiada-07-concept-divisibility": {
    "title": "Dalumas",
    "type": "concept",
    "definition": "Savybė, kai skaičius dalijasi be liekanos.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "olimpiada-07-concept-proportion": {
    "title": "Olimpiada 07 concept proportion",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-algebra"
    ]
  },
  "olimpiada-07-concept-triangle-sum": {
    "title": "Kampų suma",
    "type": "concept",
    "definition": "Trikampio vidinių kampų suma lygi 180 laipsnių.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-geometrija"
    ]
  },
  "olimpiada-07-concept-area": {
    "title": "Olimpiada 07 concept area",
    "type": "concept",
    "definition": "Definicija.",
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
      "olimpiada-07-kombinatorika"
    ]
  },
  "dirichle-principas": {
    "title": "Dirichlė principas",
    "type": "concept",
    "definition": "Principas, teigiantis, kad jei objektų daugiau nei vietų jiems, bent vienoje vietoje bus daugiau nei vienas objektas.",
    "intuition": "Jei turime daugiau balandžių nei narvelių, bent viename narvelyje turės nutūpti bent du balandžiai.",
    "formal": "",
    "related": [
      "irodymas"
    ],
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
  "gretiniai-savoka": {
    "title": "Gretiniai",
    "type": "concept",
    "definition": "Pasirinkimas $k$ elementų iš $n$, kai tvarka svarbi.",
    "intuition": "Prizininkų eilė.",
    "formal": "$A_n^k = \\frac{n!}{(n-k)!}$.",
    "related": [
      "deriniai-savoka"
    ],
    "topics": [
      "olimpiada-07-kombinatorika"
    ]
  },
  "invariantas-savoka": {
    "title": "Invariantas",
    "type": "concept",
    "definition": "Dydis ar savybė, kuri nekinta atliekant tam tikrus veiksmus.",
    "intuition": "Kas uždavinyje nesikeičia?",
    "formal": "Savybė $I(S)$, kur $I(S_{t}) = I(S_{t+1})$ visiems pokyčiams.",
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
    "formal": "n! = 1 \\cdot 2 \\cdot 3 \\cdot \\dots \\cdot n",
    "related": [
      "keliniai-savoka"
    ],
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
    "title": "Dbd savoka",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "mbk-savoka": {
    "title": "Mbk savoka",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "skaitmenu-suma-savoka": {
    "title": "Skaitmenu suma savoka",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "paritetas-savoka": {
    "title": "Paritetas savoka",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "modulinė-aritmetika-savoka": {
    "title": "Modulinė aritmetika savoka",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
    ]
  },
  "dalumo-is-9-pozymis": {
    "title": "Dalumo iš 9 požymis",
    "type": "formula",
    "definition": "Skaičius ir jo skaitmenų suma duoda tą pačią liekaną dalijant iš 9.",
    "intuition": "Skaičius ir jo skaitmenų suma duoda tą pačią liekaną dalijant iš 9.",
    "formal": "n \\equiv S(n) \\pmod 9",
    "related": [],
    "topics": [
      "olimpiada-07-skaiciu-teorija"
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
    "title": "Taisyklingoji piramidė",
    "type": "concept",
    "definition": "Piramidė, kurios pagrindas – taisyklingasis daugiakampis, o viršūnė projektuojasi į jo centrą.",
    "intuition": "Egipto piramidė.",
    "formal": "Piramidė, kurios pagrindas yra taisyklingasis daugiakampis, o visos šoninės briaunos lygios.",
    "related": [
      "apotema",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "ritinys": {
    "title": "Ritinys",
    "type": "concept",
    "definition": "Kūnas, kurio pagrindai yra skrituliai.",
    "intuition": "Konservų dėžutė ar klijų tūbelė.",
    "formal": "Sukinys, gautas sukant stačiakampį aplink vieną jo kraštinę.",
    "related": [
      "turis",
      "apskritimas"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "kugis": {
    "title": "Kūgis",
    "type": "concept",
    "definition": "Kūnas, turintis skritulio formos pagrindą ir viršūnę.",
    "intuition": "Ledų vafliukas ar eismo kūgis.",
    "formal": "Sukinys, gautas sukant statųjį trikampį aplink vieną jo statinį.",
    "related": [
      "sudaromoji",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "sfera": {
    "title": "Sfera",
    "type": "concept",
    "definition": "Visi erdvės taškai, nutolę nuo centro vienodu atstumu.",
    "intuition": "Burbulo paviršius.",
    "formal": "Paviršius, sudarytas iš visų erdvės taškų, nutolusių nuo taško O atstumu r.",
    "related": [
      "turis",
      "spindulys"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "turis": {
    "title": "Tūris",
    "type": "concept",
    "definition": "Dydis, nusakantis kūno užimamą erdvę.",
    "intuition": "Kiek vandens telpa viduje.",
    "formal": "Erdvės dalies, kurią užima kūnas, skaitinė charakteristika.",
    "related": [
      "pavirsiaus-plotas"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "apotema": {
    "title": "Apotema",
    "type": "concept",
    "definition": "Taisyklingosios piramidės šoninės sienos aukštinė.",
    "intuition": "Atstumas nuo viršūnės iki pagrindo kraštinės vidurio.",
    "formal": "Taisyklingosios piramidės šoninės sienos (trikampio) aukštinė, nuleista iš viršūnės.",
    "related": [
      "taisyklingoji-piramide",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "sudaromoji": {
    "title": "Sudaromoji",
    "type": "concept",
    "definition": "Atkarpa, jungianti kūgio viršūnę su pagrindo apskritimo tašku.",
    "intuition": "Kūgio 'šonas'.",
    "formal": "Atkarpa, kuri sukdamasi aplink ašį sudaro kūgio šoninį paviršių.",
    "related": [
      "kugis",
      "aukstine"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "pavirsiaus-plotas": {
    "title": "Pavirsiaus plotas",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "aukstine": {
    "title": "Aukstine",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "prizmes-turio-formule": {
    "title": "Prizmės tūris",
    "type": "formula",
    "definition": "Tinka visoms stačiosioms prizmėms.",
    "intuition": "Tinka visoms stačiosioms prizmėms.",
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
    "definition": "Piramidės tūris yra 1/3 prizmės tūrio.",
    "intuition": "Piramidės tūris yra 1/3 prizmės tūrio.",
    "formal": "V = \\frac{1}{3} S_{\\text{pagr}} \\cdot H",
    "related": [
      "taisyklingoji-piramide",
      "turis"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "ritinio-turio-formule": {
    "title": "Ritinio tūris",
    "type": "formula",
    "definition": "Skritulio plotas padaugintas iš aukščio.",
    "intuition": "Skritulio plotas padaugintas iš aukščio.",
    "formal": "V = \\pi r^2 H",
    "related": [
      "ritinys",
      "turis"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "kugio-turio-formule": {
    "title": "Kūgio tūris",
    "type": "formula",
    "definition": "Kūgio tūris yra 1/3 ritinio tūrio.",
    "intuition": "Kūgio tūris yra 1/3 ritinio tūrio.",
    "formal": "V = \\frac{1}{3} \\pi r^2 H",
    "related": [
      "kugis",
      "turis"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "sferos-ploto-formule": {
    "title": "Sferos paviršiaus plotas",
    "type": "formula",
    "definition": "Apskaičiuoja rutulio išorės plotą.",
    "intuition": "Apskaičiuoja rutulio išorės plotą.",
    "formal": "S = 4\\pi r^2",
    "related": [
      "sfera"
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
  "pamirsta-du-pagrindus-prizmeje": {
    "title": "Pamiršta du pagrindus prizmėje",
    "type": "mistake",
    "definition": "Piramidė turi vieną pagrindą, todėl mokiniai susipainioja.",
    "intuition": "Skaičiuodamas visą paviršiaus plotą prideda tik vieną pagrindą.",
    "formal": "Prizmė visada turi du lygius pagrindus: S_visas = S_šon + 2 * S_pagr.",
    "related": [
      "stacioji-prizme",
      "pavirsiaus-plotas"
    ],
    "topics": [
      "erdves-figuru-pavirsiai-ir-turiai"
    ]
  },
  "olimpiada-08-concept-logic": {
    "title": "Olimpiadinė logika",
    "type": "concept",
    "definition": "Gebėjimas taikyti netradicinius sprendimo būdus ir formuluoti griežtus įrodymus.",
    "intuition": "Kūrybiškas mąstymas ir dėsningumų ieškojimas sprendžiant nestandartinius uždavinius.",
    "formal": "Griežtas loginis samprotavimas, pagrįstas aksiomomis ir matematinėmis teoremomis.",
    "related": [],
    "topics": [
      "olimpiada-08-algebra",
      "olimpiada-08-geometrija",
      "olimpiada-08-kombinatorika",
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "olimpiada-08-concept-method": {
    "title": "Įrodymo metodas",
    "type": "concept",
    "definition": "Loginis argumentavimas, kuriuo remiantis patvirtinamas arba paneigiamas teiginys.",
    "intuition": "Nuoseklus teiginių išvedimas žingsnis po žingsnio iki galutinės išvados.",
    "formal": "Dedukcinis įrodymas, apimantis pradinę prielaidą, teoremų taikymą ir teisingą išvadą.",
    "related": [],
    "topics": [
      "olimpiada-08-algebra",
      "olimpiada-08-geometrija",
      "olimpiada-08-kombinatorika",
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "am-gm-nelygybe": {
    "title": "AM-GM nelygybė",
    "type": "method",
    "definition": "Aritmetinio ir geometrinio vidurkių sąryšis.",
    "intuition": "Skaičių vidurkis visada didesnis arba lygus jų geometriniam vidurkiui.",
    "formal": "Neneigiamiems $a_1, a_2, \\dots, a_n$: $\\frac{a_1 + \\dots + a_n}{n} \\ge \\sqrt[n]{a_1 \\dots a_n}$.",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "pilnojo-kvadrato-isskyrimas": {
    "title": "Pilnojo kvadrato išskyrimas",
    "type": "method",
    "definition": "Kvadratinio trynio pertvarkymas į binomo kvadratą ir konstantą.",
    "intuition": "Užrašome $x^2 + bx + c$ kaip $(x+k)^2 + m$.",
    "formal": "$ax^2 + bx + c = a(x + \\frac{b}{2a})^2 + (c - \\frac{b^2}{4a})$.",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "diofanto-lygtys": {
    "title": "Diofanto lygtys",
    "type": "concept",
    "definition": "Lygtys, kurių sprendinių ieškoma tik sveikųjų skaičių aibėje.",
    "intuition": "Uždaviniai, kur atsakymai privalo būti sveiki skaičiai.",
    "formal": "Lygtis $f(x_1, \\dots, x_n) = 0$, kur $x_i \\in \\mathbb{Z}$.",
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
    "formal": "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}",
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
    "formal": "\\frac{a+b}{2} \\ge \\sqrt{ab}",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "am-gm-neigiami-skaiciai": {
    "title": "AM-GM taikymas neigiamiems skaičiams",
    "type": "mistake",
    "definition": "Pamirštama esminė nelygybės galiojimo sąlyga.",
    "intuition": "Taikyti AM-GM, kai skaičiai gali būti neigiami.",
    "formal": "AM-GM galioja tik neneigiamiems skaičiams. Jei skaičiai neigiami, reikia dirbti su jų moduliais arba keisti ženklus.",
    "related": [],
    "topics": [
      "olimpiada-08-algebra"
    ]
  },
  "cevos-teorema": {
    "title": "Čevos teorema",
    "type": "theorem",
    "definition": "Sąlyga čevianėms susikirsti.",
    "intuition": "Proporcijų lygybė 1.",
    "formal": "Atkarpų santykių sandauga.",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "menelajo-teorema": {
    "title": "Menelajo teorema",
    "type": "theorem",
    "definition": "Sąlyga taškams būti vienoje tiesėje.",
    "intuition": "Tiesė kerta trikampį.",
    "formal": "Atkarpų santykių sandauga lygi 1.",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "ptolemejo-teorema": {
    "title": "Ptolemėjo teorema",
    "type": "theorem",
    "definition": "Įbrėžtinio keturkampio savybė.",
    "intuition": "Kraštinių sandaugos lygi įstrižainių sandaugai.",
    "formal": "AC*BD = AB*CD + BC*AD.",
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
    "formal": "S = \\sqrt{p(p-a)(p-b)(p-c)}",
    "related": [],
    "topics": [
      "olimpiada-08-geometrija"
    ]
  },
  "concept-pigeonhole": {
    "title": "Grebėsto (Dirichlė) principas",
    "type": "concept",
    "definition": "Jei $n$ objektų dedami į $m$ dėžučių ir $n > m$, tai bent vienoje dėžutėje bus bent du objektai.",
    "intuition": "Jei turite daugiau kojinių nei stalčių, bent viename stalčiuje turės būti daugiau nei viena kojinė.",
    "formal": "Funkcija iš aibės $A$ į aibę $B$, kur $|A| > |B|$, negali būti injektyvi.",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "concept-induction": {
    "title": "Matematinė indukcija",
    "type": "concept",
    "definition": "Įrodymo būdas, susidedantis iš bazės patikrinimo ir indukcinio žingsnio.",
    "intuition": "Jei nuvirsta pirma domino kaladėlė ir kiekviena griūdama nuverčia kitą, tai nuvirs visos.",
    "formal": "Teiginys $P(n)$ teisingas visiems $n$, jei $P(1)$ teisingas ir iš $P(k)$ teisingumo seka $P(k+1)$ teisingumas.",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "concept-geom-prob": {
    "title": "Geometrinė tikimybė",
    "type": "concept",
    "definition": "Tikimybė, skaičiuojama kaip geometrinių sričių (ilgių, plotų) santykis.",
    "intuition": "Tikimybė pataikyti į tam tikrą sritį priklauso nuo tos srities dydžio, palyginus su visa galima sritimi.",
    "formal": "P(A) = m(A) / m(Ω), kur m yra geometrinis matas.",
    "related": [],
    "topics": [
      "olimpiada-08-kombinatorika"
    ]
  },
  "concept-divisors": {
    "title": "Daliklių skaičius ir suma",
    "type": "concept",
    "definition": "Formulės, leidžiančios rasti skaičiaus daliklių kiekį ir jų sumą naudojant pirminį skaidymą.",
    "intuition": "Žinodami, iš kokių „plytų“ (pirminių skaičių) sudarytas skaičius, galime pasakyti viską apie jo daliklius.",
    "formal": "Jei $n = p_1^{a_1} \\cdot p_2^{a_2} \\dots$, tai daliklių skaičius $\\tau(n) = (a_1+1)(a_2+1)\\dots$.",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "concept-bases": {
    "title": "Skaičiavimo sistemos",
    "type": "concept",
    "definition": "Būdai užrašyti skaičius naudojant skirtingus pagrindus (pvz., dvejetainė, aštuntainė).",
    "intuition": "Mes įpratę skaičiuoti dešimtimis, bet galime skaičiuoti ir dvejetais ar šešioliktukais.",
    "formal": "Skaičiaus užrašas pagrindu $b$ yra $d_k b^k + \\dots + d_1 b^1 + d_0 b^0$, kur $0 \\le d_i < b$.",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "concept-perfect-numbers": {
    "title": "Tobulieji ir draugiškieji skaičiai",
    "type": "concept",
    "definition": "Skaičiai, pasižymintys ypatingomis daliklių sumos savybėmis.",
    "intuition": "Tobulasis skaičius yra „lygus pats sau“ per savo daliklius.",
    "formal": "Skaičius $n$ yra tobulas, jei $\\sigma(n) = 2n$. Skaičiai $n, m$ yra draugiški, jei $\\sigma(n)-n = m$ ir $\\sigma(m)-m = n$.",
    "related": [],
    "topics": [
      "olimpiada-08-skaiciu-teorija"
    ]
  },
  "veiksmai-su-lygtimis": {
    "title": "Veiksmai su lygtimis",
    "type": "concept",
    "definition": "Lygties pertvarkymas išlaikant lygybę.",
    "intuition": "Galima pridėti, atimti, dauginti ar dalyti abi puses tuo pačiu skaičiumi.",
    "formal": "Lygtį galima pertvarkyti ekvivalentiškais veiksmais.",
    "related": [
      "lygtis",
      "sprendinys"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "rodikliu-nelygybe": {
    "title": "Rodyklinė nelygybė",
    "type": "concept",
    "definition": "Nelygybė, kai reikia saugoti ženklų kryptį.",
    "intuition": "Svarbu, kad dauginant iš neigiamo skaičiaus ženklas apsiverčia.",
    "formal": "Dauginant ar dalijant iš neigiamo skaičiaus nelygybės ženklas pasikeičia.",
    "related": [
      "nelygybe",
      "sprendinys"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "modeliavimas": {
    "title": "Modeliavimas",
    "type": "concept",
    "definition": "Realaus teksto vertimas į lygtį ar sistemą.",
    "intuition": "Tai žingsnis nuo istorijos prie matematikos.",
    "formal": "Modeliavimas reiškia situacijos užrašymą matematiniais ryšiais.",
    "related": [
      "lygtis",
      "sistema"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "grafine-sistema": {
    "title": "Grafinė sistema",
    "type": "concept",
    "definition": "Lygčių sistema, sprendžiama grafiškai.",
    "intuition": "Tai tiesių arba kreivių susikirtimas.",
    "formal": "Sistema sprendžiama radus bendrus grafiko taškus.",
    "related": [
      "sistema",
      "grafikas"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos",
      "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis",
      "tiesiniu-lygciu-sistemos-8"
    ]
  },
  "tiesines-sistemos-bendrumas": {
    "title": "Tiesinių lygčių sistemos idėja",
    "type": "formula",
    "definition": "Sistema aprašo bendrą sprendinį.",
    "intuition": "Sistema aprašo bendrą sprendinį.",
    "formal": "\\begin{cases} ax+by=c \\\\ dx+ey=f \\end{cases}",
    "related": [
      "sistema",
      "tiesine-funkcija"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "eliminacijos-principas": {
    "title": "Eliminacijos principas",
    "type": "formula",
    "definition": "Sudėdami arba atimdami lygtis galime pašalinti vieną kintamąjį.",
    "intuition": "Sudėdami arba atimdami lygtis galime pašalinti vieną kintamąjį.",
    "formal": "(1)+(2)",
    "related": [
      "sistema",
      "veiksmai-su-lygtimis"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "sistema-vienu-kintamuoju": {
    "title": "Sistemoje ieško tik vieno skaičiaus",
    "type": "mistake",
    "definition": "Sistema reiškia bendrą kelių lygčių sprendinį.",
    "intuition": "Bando tik vieną lygtį spręsti atskirai.",
    "formal": "Spręsk abi lygtis kartu.",
    "related": [
      "sistema"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "eliminacija-be-patikros": {
    "title": "Eliminavęs kintamąjį pamiršta patikrinti",
    "type": "mistake",
    "definition": "Visada verta įstatyti atsakymą atgal.",
    "intuition": "Iš karto pasitiki tarpiniu skaičiumi.",
    "formal": "Patikrink sprendinį abiejose lygtėse.",
    "related": [
      "veiksmai-su-lygtimis"
    ],
    "topics": [
      "lygciu-ir-nelygybiu-sistemos"
    ]
  },
  "kvadratines-lygties-formule": {
    "title": "Kvadratinės lygties formulė",
    "type": "formula",
    "definition": "Tiesioginis būdas rasti šaknis.",
    "intuition": "Tiesioginis būdas rasti šaknis.",
    "formal": "x=\\frac{-b\\pm\\sqrt{D}}{2a}",
    "related": [
      "saknys",
      "diskriminantas"
    ],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "diskriminanta-supainioja": {
    "title": "Diskriminantą apskaičiuoja su neteisingu ženklu",
    "type": "mistake",
    "definition": "Ženklas yra minusas.",
    "intuition": "Rašo b²+4ac vietoje b²-4ac.",
    "formal": "Naudok D=b²-4ac.",
    "related": [
      "diskriminantas"
    ],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "virsunes-formule-netiksli": {
    "title": "Viršūnės formulėje pamiršta dalinti iš 2a",
    "type": "mistake",
    "definition": "Simetrijos ašis eina per -b/(2a).",
    "intuition": "Rašo x=-b/a.",
    "formal": "Visada dalink iš 2a.",
    "related": [
      "virsune"
    ],
    "topics": [
      "kvadratines-nelygybes"
    ]
  },
  "olimpiada-09-concept-am-gm": {
    "title": "AM-GM nelygybė",
    "type": "concept",
    "definition": "Neneigiamų skaičių aritmetinis vidurkis yra ne mažesnis už jų geometrinį vidurkį.",
    "intuition": "Aritmetinis vidurkis visada yra didesnis arba lygus geometriniam vidurkiui, o lygybė galioja tik kai visi skaičiai lygūs.",
    "formal": "Neneigiamiems realiesiems skaičiams $a_1, a_2, \\dots, a_n$ galioja: $\\frac{a_1 + a_2 + \\dots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\dots a_n}$.",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "olimpiada-09-concept-cauchy-schwarz": {
    "title": "Cauchy-Schwarz nelygybė",
    "type": "concept",
    "definition": "Dviejų skaičių rinkinių sandaugų sumos kvadratas neviršija tų rinkinių kvadratų sumų sandaugos.",
    "intuition": "",
    "formal": "$(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)$",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "olimpiada-09-concept-polynomial-roots": {
    "title": "Daugianario šaknys",
    "type": "concept",
    "definition": "Reikšmės, kuriose daugianaris lygus nuliui.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "olimpiada-09-concept-complex-intro": {
    "title": "Kompleksiniai skaičiai",
    "type": "concept",
    "definition": "Skaičiai pavidalo $a + bi$, kur $i^2 = -1$.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "formula-sophie-germain": {
    "title": "Sophie Germain tapatybė",
    "type": "formula",
    "definition": "Naudinga skaidant daugianarius arba įrodant sudėtinių skaičių savybes.",
    "intuition": "Naudinga skaidant daugianarius arba įrodant sudėtinių skaičių savybes.",
    "formal": "a^4 + 4b^4 = (a^2 + 2b^2 + 2ab)(a^2 + 2b^2 - 2ab)",
    "related": [],
    "topics": [
      "olimpiada-09-algebra"
    ]
  },
  "formula-sum-cubes-id": {
    "title": "Trijų kubų sumos tapatybė",
    "type": "formula",
    "definition": "Viena svarbiausių olimpiadinės algebros tapatybių.",
    "intuition": "Viena svarbiausių olimpiadinės algebros tapatybių.",
    "formal": "a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)",
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
    "definition": "Lygtys, kurių sprendiniai yra funkcijos.",
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
  "olimpiada-09-concept-ceva": {
    "title": "Čevos teorema",
    "type": "concept",
    "definition": "Trikampio kraštinių atkarpų santykių sandauga, kai trys tiesės kertasi viename taške.",
    "intuition": "Sąlyga, kada trys tiesės, einančios per trikampio viršūnes, kertasi viename taške.",
    "formal": "Trikampio $ABC$ kraštinėse pažymėti taškai $D$, $E$, $F$. Tiesės $AD$, $BE$, $CF$ kertasi viename taške tada ir tik tada, kai $\\frac{BD}{DC} \\cdot \\frac{CE}{EA} \\cdot \\frac{AF}{FB} = 1$.",
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
    "intuition": "Jei tiesė kerta trikampį, ji padalija kraštines taip, kad jų santykių sandauga lygi 1.",
    "formal": "Taškai $F \\in AB$, $E \\in AC$ ir $D \\in BC$ (tęsinyje) yra vienoje tiesėje tada ir tik tada, kai $\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$.",
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
    "intuition": "Vienas trikampis yra kito trikampio padidinta arba sumažinta kopija.",
    "formal": "Trikampiai $ABC$ ir $A'B'C'$ yra panašūs ($ABC \\sim A'B'C'$), jei $\\angle A = \\angle A'$, $\\angle B = \\angle B'$, $\\angle C = \\angle C'$ ir $AB/A'B' = BC/B'C' = AC/A'C' = k$.",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-apskritimo-galia": {
    "title": "Taško galia apskritimo atžvilgiu",
    "type": "concept",
    "definition": "Dydis $PA \\cdot PB$, kuris nekinta visoms kertamosioms per tašką $P$.",
    "intuition": "Jei iš taško $P$ nubrėšime dvi kertamąsias, kertančias apskritimą taškuose $A, B$ ir $C, D$, tai $PA \\cdot PB = PC \\cdot PD$.",
    "formal": "Taško $P$ galia apskritimo, kurio spindulys $R$ ir centras $O$, atžvilgiu yra $d^2 - R^2$, kur $d = OP$.",
    "related": [],
    "topics": [
      "olimpiada-09-geometrija"
    ]
  },
  "olimpiada-09-concept-ibreztinis-keturkampis": {
    "title": "Įbrėžtinis keturkampis",
    "type": "concept",
    "definition": "Keturkampis, kurio visos viršūnės priklauso vienam apskritimui.",
    "intuition": "Keturkampį galima įbrėžti į apskritimą tada ir tik tada, kai jo priešingų kampų suma lygi $180^\\circ$.",
    "formal": "Keturkampis $ABCD$ yra įbrėžtinis tada ir tik tada, kai $\\angle A + \\angle C = \\angle B + \\angle D = 180^\\circ$.",
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
    "intuition": "Įstrižainių sandauga lygi priešingų kraštinių sandaugų sumai.",
    "formal": "Įbrėžtiniam keturkampiui $ABCD$ galioja: $AC \\cdot BD = AB \\cdot CD + BC \\cdot AD$.",
    "related": [
      "olimpiada-09-concept-ibreztinis-keturkampis"
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
  "ol-09-comb-concept-daugyba": {
    "title": "Daugybos taisyklė",
    "type": "concept",
    "definition": "Pasirinkimų būdų dauginimas, kai atliekami nepriklausomi veiksmai.",
    "intuition": "Jei turiu 3 marškinius ir 2 kelnes, iš viso turiu 3x2=6 aprangos derinius.",
    "formal": "Jei aibė $A$ turi $n$ elementų, o aibė $B$ turi $m$ elementų, tai porų $(a,b)$ skaičius yra $n \\cdot m$.",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-keliniai": {
    "title": "Kėliniai",
    "type": "concept",
    "definition": "$n$ elementų sudėliojimo į eilę būdų skaičius.",
    "intuition": "Kiek yra būdų surikiuoti $n$ žmonių į eilę?",
    "formal": "$P_n = n! = 1 \\cdot 2 \\cdot 3 \\dots n$.",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-gretiniai": {
    "title": "Gretiniai",
    "type": "concept",
    "definition": "Pasirinkimas $k$ elementų iš $n$ ir jų surikiavimas.",
    "intuition": "Svarbu ir KĄ pasirenkame, ir KOKIA TVARKA surikiuojame.",
    "formal": "$A_n^k = \\frac{n!}{(n-k)!}$.",
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
    "intuition": "Svarbu tik KĄ pasirenkame (pavyzdžiui, krepšinio komandą).",
    "formal": "$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.",
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
    "intuition": "Jei triušių daugiau nei narvelių, bent viename narvelyje gyvena bent du triušiai.",
    "formal": "Jei $m$ objektų suskirstomi į $n$ aibių ir $m > n$, tai bent viena aibė turi bent du elementus.",
    "related": [],
    "topics": [
      "olimpiada-09-kombinatorika"
    ]
  },
  "ol-09-comb-concept-inkliuzija": {
    "title": "Inkliuzijos-ekskliuzijos principas",
    "type": "concept",
    "definition": "Aibių sąjungos elementų skaičiavimo taisyklė.",
    "intuition": "Skaičiuodami elementus dviejose aibėse, turime atimti jų sankirtą, kad jos neįskaitytume du kartus.",
    "formal": "$|A \\cup B| = |A| + |B| - |A \\cap B|$.",
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
  "olimpiada-09-concept-euler-totient": {
    "title": "Oilerio totiento funkcija $\\varphi(n)$",
    "type": "concept",
    "definition": "Natūraliųjų skaičių, neviršijančių $n$ ir pirminių su $n$, skaičius.",
    "intuition": "Parodo, kiek skaičių nuo $1$ iki $n$ neturi bendrų daliklių su $n$ (išskyrus 1).",
    "formal": "$\\varphi(n) = n \\prod_{p|n} \\left(1 - \\frac{1}{p}\\right)$, kur $p$ yra skirtingi pirminiai skaičiaus $n$ dalikliai.",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-euler-theorem": {
    "title": "Oilerio teorema",
    "type": "concept",
    "definition": "Teiginys, kad $a^{\\varphi(n)} \\equiv 1 \\pmod n$, kai $\\gcd(a, n) = 1$.",
    "intuition": "Apibendrina Mažąją Fermo teoremą bet kuriam moduliui $n$.",
    "formal": "Jei $a$ ir $n$ yra tarpusavyje pirminiai natūralieji skaičiai, tai $a^{\\varphi(n)} - 1$ dalijasi iš $n$ be liekanos.",
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
    "intuition": "Suskaičiuoja, kiek kartų $p$ pasirodo kaip faktorius visuose skaičiuose nuo 1 iki $n$.",
    "formal": "$v_p(n!) = \\sum_{k=1}^{\\infty} \\lfloor \\frac{n}{p^k} \\rfloor$.",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-chinese-remainder": {
    "title": "Kinų liekanų teorema",
    "type": "concept",
    "definition": "Teorema apie tiesinių palyginimų sistemų sprendinių egzistavimą.",
    "intuition": "Leidžia rasti skaičių, kuris duoda nurodytas liekanas dalijant iš tarpusavyje pirminių modulių.",
    "formal": "Jei $m_1, m_2, \\dots, m_n$ yra poromis tarpusavyje pirminiai, tai sistema $x \\equiv a_i \\pmod{m_i}$ turi vienintelį sprendinį moduliu $M = m_1 m_2 \\dots m_n$.",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
    ]
  },
  "olimpiada-09-concept-divisibility-rules": {
    "title": "Dalumo požymiai",
    "type": "concept",
    "definition": "Taisyklės, leidžiančios greitai nustatyti, ar skaičius dalijasi iš kito skaičiaus.",
    "intuition": "Naudoja skaitmenų savybes (sumą, alternuojančią sumą ir kt.).",
    "formal": "Pavyzdžiui, skaičius dalijasi iš 11 tada ir tik tada, kai jo skaitmenų alternuojanti suma dalijasi iš 11.",
    "related": [],
    "topics": [
      "olimpiada-09-skaiciu-teorija"
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
      "aukso-pjuvis"
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
      "fibonacio-seka"
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
  "proporcingoji-dalyba": {
    "title": "Proporcingoji dalyba",
    "type": "method",
    "definition": "Dydžio skirstymas dalimis, kurios proporcingos nurodytiems skaičiams.",
    "intuition": "Jei daliname santykiu 2:3, tai viena dalis gaus 2 'porcijas', kita 3.",
    "formal": "",
    "related": [
      "aukso-pjuvis"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "rekurentine-formule": {
    "title": "Rekurentinė formulė",
    "type": "notation",
    "definition": "Taisyklė, apibrėžianti sekos narį per prieš jį einančius narius.",
    "intuition": "Žingsnis po žingsnio taisyklė.",
    "formal": "",
    "related": [
      "fibonacio-seka"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "sekos-desningumas": {
    "title": "Sekos dėsningumas",
    "type": "concept",
    "definition": "Taisyklė, pagal kurią sudaromi sekos nariai.",
    "intuition": "Logika, jungianti skaičius į eilę.",
    "formal": "",
    "related": [
      "fibonacio-seka"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "aukso-pjuvio-seka": {
    "title": "Aukso pjūvio seka",
    "type": "concept",
    "definition": "Seka, sudaryta iš aukso pjūvio skaičiaus $\\phi$ laipsnių.",
    "intuition": "Seka $\\phi^1, \\phi^2, \\phi^3, ...$, kurios nariai turi panašias savybes kaip Fibonačio seka.",
    "formal": "$a_n = \\phi^n$.",
    "related": [
      "aukso-pjuvis",
      "fibonacio-seka"
    ],
    "topics": [
      "desningumai-fibonacio-seka-ir-aukso-pjuvis"
    ]
  },
  "skaiciaus-skaidymas-proporcingai": {
    "title": "Skaičiaus skaidymas proporcingai",
    "type": "method",
    "definition": "Skaičiaus padalinimas į dalis pagal nurodytą santykį.",
    "intuition": "Sudedame dalis, randame vienos dalies vertę.",
    "formal": "",
    "related": [
      "proporcingoji-dalyba"
    ],
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
  "panasios-figuros": {
    "title": "Panašios figūros",
    "type": "concept",
    "definition": "Figūros, turinčios tą pačią formą, bet nebūtinai tą patį dydį.",
    "intuition": "Tai tarsi mastelio pakeitimas – didinimas arba mažinimas.",
    "formal": "",
    "related": [
      "panasumo-koeficientas"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "panasumo-koeficientas": {
    "title": "Panašumo koeficientas",
    "type": "concept",
    "definition": "Atitinkamų kraštinių ilgių santykis.",
    "intuition": "",
    "formal": "",
    "related": [
      "perimetru-santykis",
      "plotu-santykis"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukrastine": {
    "title": "Pusiaukraštinė",
    "type": "concept",
    "definition": "Atkarpa nuo viršūnės iki kraštinės vidurio.",
    "intuition": "Ji 'perpjauna' kraštinę per pusę.",
    "formal": "",
    "related": [
      "pusiaukrastiniu-sankirta"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukampine": {
    "title": "Pusiaukampinė",
    "type": "concept",
    "definition": "Atkarpa, dalijanti kampą į dvi lygias dalis.",
    "intuition": "Ji 'perpjauna' kampą per pusę.",
    "formal": "",
    "related": [
      "pusiaukampiniu-savybe"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukrastiniu-sankirta": {
    "title": "Pusiaukrašinių sankirtos taškas",
    "type": "concept",
    "definition": "Taškas, kuriame kertasi visos pusiaukraštinės (svorio centras).",
    "intuition": "Šiame taške trikampis išlaiko pusiausvyrą.",
    "formal": "",
    "related": [
      "pusiaukrastine"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukampiniu-savybe": {
    "title": "Pusiaukampinės savybė",
    "type": "theorem",
    "definition": "Santykyje esančių atkarpų lygybė trikampyje.",
    "intuition": "",
    "formal": "$\\frac{x}{y} = \\frac{a}{b}$, kur x ir y yra atkarpas, į kurias pusiaukampinė padalijo kraštinę.",
    "related": [
      "pusiaukampine"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "perimetru-santykis": {
    "title": "Perimetrų santykis",
    "type": "property",
    "definition": "Panašių figūrų perimetrų santykis lygus k.",
    "intuition": "",
    "formal": "",
    "related": [
      "panasumo-koeficientas"
    ],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "plotu-santykis": {
    "title": "Plotų santykis",
    "type": "property",
    "definition": "Panašių figūrų plotų santykis lygus k^2.",
    "intuition": "",
    "formal": "",
    "related": [
      "panasumo-koeficientas"
    ],
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
  "pusiaukampines-savybe-formule": {
    "title": "Trikampio pusiaukampinės savybė",
    "type": "formula",
    "definition": "Pusiaukampinė dalija kraštinę į atkarpas c ir d, proporcingas prie jų esančioms kraštinėms a ir b.",
    "intuition": "Pusiaukampinė dalija kraštinę į atkarpas c ir d, proporcingas prie jų esančioms kraštinėms a ir b.",
    "formal": "\\frac{a}{b} = \\frac{c}{d}",
    "related": [],
    "topics": [
      "figuru-panasumas-ir-trikampio-elementai"
    ]
  },
  "pusiaukrastiniu-savybe-formule": {
    "title": "Pusiaukraštinių dalijimo savybė",
    "type": "formula",
    "definition": "Sankirtos taškas dalija pusiaukraštinę į dvi dalis, kurių viena dvigubai ilgesnė už kitą (ilgesnė dalis prie viršūnės).",
    "intuition": "Sankirtos taškas dalija pusiaukraštinę į dvi dalis, kurių viena dvigubai ilgesnė už kitą (ilgesnė dalis prie viršūnės).",
    "formal": "2:1",
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
  "painioja-pusiaukrastine-su-aukstine": {
    "title": "Painioja pusiaukraštinę su aukštine",
    "type": "mistake",
    "definition": "Lygiašoniame trikampyje jos sutampa, todėl mokiniai apibendrina visais atvejais.",
    "intuition": "Mano, kad pusiaukraštinė visada statmena kraštinei.",
    "formal": "Pusiaukraštinė tik dalija kraštinę pusiau, bet nebūtinai yra statmena.",
    "related": [
      "pusiaukrastine"
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
  "apibreztinis-daugiakampis": {
    "title": "Apibrėžtinis daugiakampis",
    "type": "concept",
    "definition": "Daugiakampis, kurio visos kraštinės liečia apskritimą.",
    "intuition": "Apskritimas yra daugiakampio 'viduje'.",
    "formal": "",
    "related": [
      "ibreztinis-apskritimas"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinis-apskritimas": {
    "title": "Įbrėžtinis apskritimas",
    "type": "concept",
    "definition": "Apskritimas, liečiantis visas daugiakampio kraštines.",
    "intuition": "",
    "formal": "",
    "related": [
      "ibreztinio-apskritimo-centras"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinis-apskritimas": {
    "title": "Apibrėžtinis apskritimas",
    "type": "concept",
    "definition": "Apskritimas, einantis per visas daugiakampio viršūnes.",
    "intuition": "",
    "formal": "",
    "related": [
      "apibreztinio-apskritimo-centras"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinio-apskritimo-centras": {
    "title": "Įbrėžtinio apskritimo centras",
    "type": "concept",
    "definition": "Pusiaukampinių susikirtimo taškas.",
    "intuition": "Taškas, vienodai nutolęs nuo visų kraštinių.",
    "formal": "",
    "related": [
      "pusiaukampine"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinio-apskritimo-centras": {
    "title": "Apibrėžtinio apskritimo centras",
    "type": "concept",
    "definition": "Vidurio statmenų susikirtimo taškas.",
    "intuition": "Taškas, vienodai nutolęs nuo visų viršūnių.",
    "formal": "",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "ibreztinis-keturkampis": {
    "title": "Įbrėžtinis keturkampis",
    "type": "concept",
    "definition": "Keturkampis, kurio priešingų kampų suma lygi 180 laipsnių.",
    "intuition": "",
    "formal": "$\\alpha + \\gamma = \\beta + \\delta = 180^\\circ$.",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinis-keturkampis": {
    "title": "Apibrėžtinis keturkampis",
    "type": "concept",
    "definition": "Keturkampis, kurio priešingų kraštinių sumos lygios.",
    "intuition": "",
    "formal": "$a + c = b + d$.",
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
  "ibreztinio-keturkampio-savybe": {
    "title": "Įbrėžtinio keturkampio kampų savybė",
    "type": "formula",
    "definition": "Priešingų kampų suma įbrėžtiniame keturkampyje visada lygi 180 laipsnių.",
    "intuition": "Priešingų kampų suma įbrėžtiniame keturkampyje visada lygi 180 laipsnių.",
    "formal": "\\angle A + \\angle C = 180^\\circ",
    "related": [],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "apibreztinio-keturkampio-savybe": {
    "title": "Apibrėžtinio keturkampio kraštinių savybė",
    "type": "formula",
    "definition": "Priešingų kraštinių ilgių sumos apibrėžtiniame keturkampyje yra lygios.",
    "intuition": "Priešingų kraštinių ilgių sumos apibrėžtiniame keturkampyje yra lygios.",
    "formal": "a + c = b + d",
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
    "formal": "Įbrėžtinis (r) - pusiaukampinės (kampas liečia kraštines). Apibrėžtinis (R) - vidurio statmenys.",
    "related": [
      "ibreztinio-apskritimo-centras",
      "apibreztinio-apskritimo-centras"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "keturkampio-savybiu-sumaisymas": {
    "title": "Sumažo keturkampių savybes",
    "type": "mistake",
    "definition": "Abi taisyklės teigia kažką apie priešingus elementus.",
    "intuition": "Taikomą kampų taisyklę kraštinėms arba atvirkščiai.",
    "formal": "Įbrėžtas (viduj) - kampai. Apibrėžtas (išorėj) - kraštinės.",
    "related": [
      "ibreztinis-keturkampis",
      "apibreztinis-keturkampis"
    ],
    "topics": [
      "ibreztiniai-ir-apibreztiniai-daugiakampiai"
    ]
  },
  "olimpiada-10-concept-vieta": {
    "title": "Vietos formulės",
    "type": "concept",
    "definition": "Sąryšiai tarp daugianario šaknų ir jo koeficientų.",
    "intuition": "Leidžia rasti šaknų sumas ir sandaugas neišsprendus pačios lygties.",
    "formal": "Daugianariui $P(x) = a_n x^n + \\dots + a_0$ šaknų suma yra $-a_{n-1}/a_n$, o sandauga $(-1)^n a_0/a_n$.",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "olimpiada-10-concept-am-gm": {
    "title": "AM-GM nelygybė",
    "type": "concept",
    "definition": "Aritmetinio ir geometrinio vidurkių nelygybė.",
    "intuition": "Skaičių vidurkis visada yra ne mažesnis už jų 'geometrinį vidurkį' (šaknį iš sandaugos).",
    "formal": "Neneigiamiems skaičiams $a_1, a_2, \\dots, a_n$: $\frac{a_1+a_2+\\dots+a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\dots a_n}$.",
    "related": [],
    "topics": [
      "olimpiada-10-algebra",
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-cauchy-schwarz": {
    "title": "Koši-Švarco nelygybė",
    "type": "concept",
    "definition": "Nelygybė, susiejanti sumas ir kvadratų sumas.",
    "intuition": "Skaliarinė sandauga yra ne didesnė už ilgių sandaugą.",
    "formal": "$(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)$.",
    "related": [
      "olimpiada-10-concept-titus-lemma"
    ],
    "topics": [
      "olimpiada-10-algebra",
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-remainder-theorem": {
    "title": "Bezu teorema (Liekanų teorema)",
    "type": "concept",
    "definition": "Daugianario $P(x)$ liekana dalijant iš $x-a$ yra lygi $P(a)$.",
    "intuition": "Leidžia rasti liekaną tiesiog įstačius skaičių į daugianarį.",
    "formal": "$P(x) = (x-a)Q(x) + P(a)$.",
    "related": [],
    "topics": [
      "olimpiada-10-algebra"
    ]
  },
  "olimpiada-10-concept-symmetric-polynomials": {
    "title": "Simetriniai daugianariai",
    "type": "concept",
    "definition": "Daugianariai, kurie nekinta sukeitus bet kuriuos du kintamuosius vietomis.",
    "intuition": "Visas simetrines išraiškas galima užrašyti per pagrindinius simetrinius daugianarius (šaknų sumas ir sandaugas).",
    "formal": "",
    "related": [
      "olimpiada-10-concept-vieta"
    ],
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
    "definition": "Ryšys tarp plokščiojo grafo viršūnių, briaunų ir sričių skaičiaus.",
    "intuition": "Plokštumoje nupiešto sujungto grafo elementų tarpusavio priklausomybė: $V - E + F = 2$.",
    "formal": "Bet kuriam susietam plokščiajam grafui su $V$ viršūnėmis, $E$ briaunomis ir $F$ sritimis (įskaitant išorinę) galioja $V - E + F = 2$.",
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
    "formal": "^k = \\frac{n!}{k!(n-k)!}$",
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
    "formal": "$\\frac{n!}{n_1! n_2! \\dots n_k!}$",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "concept-ijungimo-isjungimo-principas": {
    "title": "Įjungimo-išjungimo principas",
    "type": "method",
    "definition": "Metodas aibių sąjungos elementų skaičiui rasti atimant perteklines sankirtas.",
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
    "definition": "Skaičių seka, aprašanti taisyklingas skliaustelių sekas, trikampių trianguliacijas ir kt.",
    "intuition": "",
    "formal": " = \\frac{1}{n+1} \\binom{2n}{n}$",
    "related": [],
    "topics": [
      "olimpiada-10-kombinatorika"
    ]
  },
  "olimpiada-10-concept-titus-lemma": {
    "title": "Titu lema (Sedrakiano nelygybė)",
    "type": "concept",
    "definition": "Koši-Švarco nelygybės trupmeninė forma.",
    "intuition": "Leidžia 'sujungti' vardiklius nelygybėse su kvadratų trupmenomis.",
    "formal": "$\\sum_{i=1}^n \\frac{a_i^2}{b_i} \\ge \\frac{(\\sum a_i)^2}{\\sum b_i}$ kai $b_i > 0$.",
    "related": [
      "olimpiada-10-concept-cauchy-schwarz"
    ],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-jensen": {
    "title": "Jenseno nelygybė",
    "type": "concept",
    "definition": "Nelygybė išgaubtosioms funkcijoms.",
    "intuition": "Išgaubtos funkcijos (convex) vidurkis yra didesnis už reikšmę vidurkio taške.",
    "formal": "Išgaubtai funkcijai $f$: $f(\frac{x_1+\\dots+x_n}{n}) \\le \frac{f(x_1)+\\dots+f(x_n)}{n}$.",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-schur": {
    "title": "Šūro nelygybė",
    "type": "concept",
    "definition": "Simetrinė nelygybė trims kintamiesiems.",
    "intuition": "Susieja laipsnių sumas su mišriomis sandaugomis.",
    "formal": "$\\sum a^r(a-b)(a-c) \\ge 0$ neneigiamiems $a, b, c$.",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-rearrangement": {
    "title": "Pertvarkymo nelygybė",
    "type": "concept",
    "definition": "Nelygybė apie dvejopai surikiuotas sumas.",
    "intuition": "Sandaugų suma yra didžiausia, kai abi sekos surikiuotos vienoda tvarka.",
    "formal": "Jei $a_1 \\le \\dots \\le a_n$ ir $b_1 \\le \\dots \\le b_n$, tai $\\sum a_i b_{n-i+1} \\le \\sum a_i b_{\\sigma(i)} \\le \\sum a_i b_i$.",
    "related": [],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-chebyshev": {
    "title": "Čebyšovo nelygybė",
    "type": "concept",
    "definition": "Santykinė nelygybė tarp sumų ir sandaugų.",
    "intuition": "Susieja sekų vidurkių sandaugą su sandaugų vidurkiu.",
    "formal": "Jei $a_i$ ir $b_i$ vienodai surikiuotos, tai $n \\sum a_i b_i \\ge (\\sum a_i)(\\sum b_i)$.",
    "related": [
      "olimpiada-10-concept-rearrangement"
    ],
    "topics": [
      "olimpiada-10-nelygybes"
    ]
  },
  "olimpiada-10-concept-muirhead": {
    "title": "Muirhead nelygybė",
    "type": "concept",
    "definition": "Simetrinių sumų palyginimas naudojant mažoravimą.",
    "intuition": "Labiau 'išsklaidyti' laipsniai duoda didesnę sumą.",
    "formal": "Jei vektorius $a$ mažoruoja $b$, tai $[a] \\ge [b]$.",
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
    "related": [
      "paritetas"
    ],
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
    "related": [
      "irodymas"
    ],
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
    "title": "Realiuju skaiciu aibe",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "baigtine-aibe": {
    "title": "Baigtine aibe",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "aibes-ir-veiksmai"
    ]
  },
  "sajungos-apibrezimas": {
    "title": "Aibių sąjungos apibrėžimas",
    "type": "formula",
    "definition": "Sąjunga apima visus elementus, esančius bent vienoje iš aibių.",
    "intuition": "Sąjunga apima visus elementus, esančius bent vienoje iš aibių.",
    "formal": "A \\cup B = \\{x \\mid x \\in A \\text{ arba } x \\in B\\}",
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
    "formal": "A \\cap B = \\{x \\mid x \\in A \\text{ ir } x \\in B\\}",
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
  "olimpiada-11-concept-nullstellensatz": {
    "title": "Kombinatorinis Nulstellensatz",
    "type": "concept",
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
    "formal": "Jei $A$ ir $B$ yra baigtinės aibės ir $|A| > |B|$, tai jokiai funkcijai $f: A \to B$ neegzistuoja injekcija.",
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
    "title": "Atsitiktinis dydis",
    "type": "concept",
    "definition": "Kintamasis, kurio reikšmės priklauso nuo atsitiktinio bandymo baigties.",
    "intuition": "Tai tarsi žaidimo rezultatas – kol nemetei kauliuko, nežinai, koks bus skaičius.",
    "formal": "Funkcija, apibrėžta elementariųjų baigčių aibėje.",
    "related": [
      "diskretusis-atsitiktinis-dydis",
      "tikimybinis-skirstinys"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
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
    "title": "Skirstinio lentelė",
    "type": "concept",
    "definition": "Lentelė, kurioje surašytos atsitiktinio dydžio reikšmės ir jų tikimybės.",
    "intuition": "Sąrašas: koks rezultatas ir kaip dažnai jis pasitaiko.",
    "formal": "Atsitiktinio dydžio X galimų reikšmių xi ir jas atitinkančių tikimybių pi rinkinys.",
    "related": [
      "diskretusis-atsitiktinis-dydis",
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "matematine-viltis": {
    "title": "Matematinė viltis",
    "type": "concept",
    "definition": "Vidutinė atsitiktinio dydžio reikšmė.",
    "intuition": "Tai skaičius, kurį tikėtumėmės gauti vidutiniškai, jei bandymą kartotume begalę kartų.",
    "formal": "Svertinis atsitiktinio dydžio reikšmių vidurkis, kur svoriai yra tikimybės.",
    "related": [
      "dispersija",
      "skirstinio-lentele"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "dispersija": {
    "title": "Dispersija",
    "type": "concept",
    "definition": "Reikšmių sklaidos aplink vidurkį matas.",
    "intuition": "Rodo, kaip toli nuo vidurkio vidutiniškai yra nutolusios reikšmės.",
    "formal": "Atsitiktinio dydžio nuokrypio nuo matematinės vilties kvadrato matematinė viltis.",
    "related": [
      "matematine-viltis",
      "standartinis-nuokrypis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "standartinis-nuokrypis": {
    "title": "Standartinis nuokrypis",
    "type": "concept",
    "definition": "Sklaidos matas, išreiškiamas tomis pačiomis vienetais kaip ir dydis.",
    "intuition": "Tai tiesiog kvadratinė šaknis iš dispersijos.",
    "formal": "Teigiamas kvadratinės šaknies iš dispersijos rezultatas.",
    "related": [
      "dispersija"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "normalusis-skirstinys": {
    "title": "Normalusis skirstinys",
    "type": "concept",
    "definition": "Tolydusis tikimybinis skirstinys, aprašomas Gauso kreive.",
    "intuition": "Dauguma žmonių yra vidutinio ūgio, labai mažai itin aukštų ar žemų – tai normalusis skirstinys.",
    "formal": "Skirstinys, kurio tankio funkcija f(x) = (1/σ√(2π)) * exp(-(x-μ)²/2σ²).",
    "related": [
      "gauso-kreive",
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "bernulio-bandymai": {
    "title": "Bernulio bandymai",
    "type": "concept",
    "definition": "Nepriklausomų bandymų seka su dviem baigtimis.",
    "intuition": "Monetos metimas 10 kartų: kiekvieną kartą tik 'herbas' arba 'skaičius'.",
    "formal": "Bandymų seka, kurioje kiekvieno bandymo 'sėkmės' tikimybė p yra pastovi.",
    "related": [
      "kombinatorika-ir-binomas",
      "tikimybinis-skirstinys"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "gauso-kreive": {
    "title": "Gauso kreive",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
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
    "formal": "E(X) = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n",
    "related": [
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
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
  "tikimybiu-suma-ne-vienetas": {
    "title": "Tikimybių suma lentelėje nelygi 1",
    "type": "mistake",
    "definition": "Netikslus skaičiavimas arba pamiršta viena iš baigčių.",
    "intuition": "Užpildoma lentelė, kurios tikimybių suma yra 0.9 arba 1.1.",
    "formal": "Visada patikrinkite: p1 + p2 + ... + pn = 1. Jei ne 1, vadinasi skirstinys neteisingas.",
    "related": [
      "skirstinio-lentele"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
    ]
  },
  "dispersija-neigiama": {
    "title": "Gaunama neigiama dispersija",
    "type": "mistake",
    "definition": "Supainiojama E(X^2) su (E(X))^2 arba padaroma aritmetinė klaida.",
    "intuition": "Var(X) = -2.5.",
    "formal": "Dispersija yra kvadratų vidurkis, ji NIEKADA negali būti neigiama.",
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
    "formal": "Reikia kiekvieną reikšmę padauginti iš jos tikimybės, o NE tiesiog sudėti.",
    "related": [
      "matematine-viltis"
    ],
    "topics": [
      "atsitiktiniai-dydziai"
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
      "kombinatorika-ir-binomas"
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
    "definition": "Koordinačių sistema geometrijoje, kurioje taško padėtis apibrėžiama trikampio viršūnių masėmis.",
    "intuition": "Bet kurį plokštumos tašką galime išreikšti trikampio viršūnių tiesine kombinacija su svoriais, kurių suma lygi 1. Tai leidžia algebriškai spręsti geometrijos uždavinius.",
    "formal": "Taškas $P$ trikampio $ABC$ plokštumoje užrašomas koordinatėmis $(x:y:z)$, kur $x \\vec{A} + y \\vec{B} + z \\vec{C} = (x+y+z) \\vec{P}$. Koordinačių reikšmės proporcingos trikampių $PBC$, $PCA$, $PAB$ orientuotiems plotams.",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "olimpiada-12-concept-feuerbach": {
    "title": "Feuerbacho teorema ir mixtilinear apskritimai",
    "type": "concept",
    "definition": "Teorema apie devynių taškų apskritimo ir įbrėžtinio bei priabrėžtinių apskritimų sąlytį.",
    "intuition": "Trikampio devynių taškų apskritimas visada liečia įbrėžtinį apskritimą aus vidaus ir tris priabrėžtinius apskritimus iš išorės.",
    "formal": "Devynių taškų apskritimas yra liestinis įbrėžtiniam apskritimui taške $F$ (Feuerbacho taškas) ir priabrėžtiniams apskritimams taškuose $F_A, F_B, F_C$.",
    "related": [],
    "topics": [
      "olimpiada-12-geometrija"
    ]
  },
  "olimpiada-12-concept-probabilistic-second-moment": {
    "title": "Antrojo momento metodas",
    "type": "concept",
    "definition": "Tikimybinis metodas įrodyti, kad atsitiktinis dydis yra teigiamas su didele tikimybe, naudojant dispersiją.",
    "intuition": "Jei dydžio dispersija yra maža, palyginti su jo vidurkiu, tai dydis labai retai nukrypsta nuo vidurkio ir beveik niekada nebūna lygus nuliui.",
    "formal": "Atsitiktiniam dydžiui $X \\ge 0$ galioja Čebyševo nelygybė formoje: $P(X = 0) \\le \\frac{\\text{Var}(X)}{E[X]^2} = \\frac{E[X^2] - E[X]^2}{E[X]^2}$.",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-generating-functions": {
    "title": "Generuojančios funkcijos",
    "type": "concept",
    "definition": "Algebrinis metodas kombinatorinėms sekoms nagrinėti naudojant formaliosios eilutės koeficientus.",
    "intuition": "Vietoj to, kad skaičiuotume objektus tiesiogiai, mes juos 'sukabiname' prie kintamojo $x$ laipsnių ir atliekame algebrinius veiksmus su visa eilute.",
    "formal": "Sekos $(a_n)$ generuojanti funkcija yra $f(x) = \\sum_{n=0}^{\\infty} a_n x^n$.",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-burnside-lemma": {
    "title": "Olimpiada 12 concept burnside lemma",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
    "formal": "",
    "related": [],
    "topics": [
      "olimpiada-12-kombinatorika"
    ]
  },
  "olimpiada-12-concept-inclusion-exclusion-derangements": {
    "title": "Olimpiada 12 concept inclusion exclusion derangements",
    "type": "concept",
    "definition": "Definicija.",
    "intuition": "",
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
  "staciakampe-koordinaciu-sistema-erdveje": {
    "title": "Stačiakampė koordinačių sistema erdvėje",
    "type": "concept",
    "definition": "Tarpusavyje statmenų ašių sistema erdvėje.",
    "intuition": "Tai būdas nurodyti bet kurio taško vietą erdvėje naudojant tris skaičius.",
    "formal": "Sistemą sudaro trys tarpusavyje statmenos skaičių tiesės (Ox, Oy, Oz), kertančios viena kitą taške O.",
    "related": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-koordinates-erdveje": {
    "title": "Vektoriaus koordinatės erdvėje",
    "type": "concept",
    "definition": "Skaičių trejetas, nurodantis vektoriaus kryptį ir ilgį erdvėje.",
    "intuition": "Tai poslinkis x, y ir z ašių kryptimis.",
    "formal": "Vektoriaus $\\vec{a} = (x; y; z)$ koordinatės yra jo projekcijos į koordinačių ašis.",
    "related": [
      "vektoriaus-modulis-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-modulis-erdveje": {
    "title": "Vektoriaus modulis erdvėje",
    "type": "concept",
    "definition": "Vektoriaus ilgis erdvėje.",
    "intuition": "Atstumas nuo vektoriaus pradžios iki jo galo.",
    "formal": "Vektoriaus $\\vec{a}(x; y; z)$ modulis yra $|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}$.",
    "related": [
      "vektoriaus-koordinates-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "skaliarine-vektoriu-sandauga-erdveje": {
    "title": "Skaliarinė vektorių sandauga",
    "type": "concept",
    "definition": "Vektorių modulių ir kampo tarp jų kosinuso sandauga.",
    "intuition": "Operacija, kuri iš dviejų vektorių sukuria skaičių.",
    "formal": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos \\phi = x_1 x_2 + y_1 y_2 + z_1 z_2$.",
    "related": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "kolinearieji-vektoriai-erdveje": {
    "title": "Kolinearieji vektoriai",
    "type": "concept",
    "definition": "Vektoriai, esantys vienoje tiesėje arba lygiagrečiose tiesėse.",
    "intuition": "Vektoriai, kurie turi tą pačią arba priešingas kryptis.",
    "formal": "Vektoriai $\\vec{a}$ ir $\\vec{b}$ yra kolinearieji, jei egzistuoja skaičius $k$ toks, kad $\\vec{a} = k\\vec{b}$.",
    "related": [
      "vektoriaus-daugyba-is-skaiciaus-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "kampas-tarp-vektoriu-erdveje": {
    "title": "Kampas tarp vektorių",
    "type": "concept",
    "definition": "Kampas $\\phi \\in [0; \\pi]$ tarp dviejų vektorių.",
    "intuition": "Matas, rodantis, kiek vektoriai nukrypę vienas nuo kito.",
    "formal": "Kampas tarp vektorių, atidėtų nuo to paties taško.",
    "related": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "atstumas-tarp-tasku-erdveje": {
    "title": "Atstumas tarp taškų",
    "type": "concept",
    "definition": "Atkarpos, jungiančios du taškus erdvėje, ilgis.",
    "intuition": "Trumpiausias kelias tarp dviejų vietų erdvėje.",
    "formal": "$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$.",
    "related": [
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriu-sudetis-erdveje": {
    "title": "Vektorių sudėtis erdvėje",
    "type": "method",
    "definition": "Vektorių sudėjimas pagal trikampio arba lygiagretainio taisyklę.",
    "intuition": "Dviejų poslinkių sujungimas į vieną.",
    "formal": "Jei $\\vec{a}=(x_1, y_1, z_1)$ ir $\\vec{b}=(x_2, y_2, z_2)$, tai $\\vec{a}+\\vec{b}=(x_1+x_2, y_1+y_2, z_1+z_2)$.",
    "related": [
      "vektoriu-atimtis-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriu-atimtis-erdveje": {
    "title": "Vektorių atimtis erdvėje",
    "type": "method",
    "definition": "Vektorių atimtis atimant atitinkamas koordinates.",
    "intuition": "Skirtumo vektorius jungia atimamojo pabaigą su turinio pabaiga.",
    "formal": "$\\vec{a} - \\vec{b} = (x_1 - x_2; y_1 - y_2; z_1 - z_2)$.",
    "related": [
      "vektoriu-sudetis-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-daugyba-is-skaiciaus-erdveje": {
    "title": "Vektoriaus daugyba iš skaičiaus",
    "type": "method",
    "definition": "Vektoriaus ilgio keitimas išlaikant kryptį.",
    "intuition": "Vektoriaus 'ištęsimas' arba 'suglaudimas'.",
    "formal": "$k(x; y; z) = (kx; ky; kz)$.",
    "related": [
      "kolinearieji-vektoriai-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "komplanarūs-vektoriai": {
    "title": "Komplanarūs vektoriai",
    "type": "concept",
    "definition": "Vektoriai, esantys vienoje plokštumoje arba lygiagretūs tai pačiai plokštumai.",
    "intuition": "Vektoriai, kuriuos galima 'paguldyti' ant to paties stalo.",
    "formal": "Trys vektoriai erdvėje yra komplanarūs, jei vienas iš jų yra kitų dviejų tiesinė kombinacija.",
    "related": [
      "kolinearieji-vektoriai-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-modulio-formule-erdveje": {
    "title": "Vektoriaus modulio formulė",
    "type": "formula",
    "definition": "Apskaičiuoja vektoriaus ilgį pagal jo koordinates erdvėje.",
    "intuition": "Apskaičiuoja vektoriaus ilgį pagal jo koordinates erdvėje.",
    "formal": "|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}",
    "related": [
      "vektoriaus-modulis-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "skaliarines-sandaugos-formule-koordinatemis": {
    "title": "Skaliarinė sandauga (koordinatėmis)",
    "type": "formula",
    "definition": "Leidžia apskaičiuoti skaliarinę sandaugą, kai žinomos vektorių koordinatės.",
    "intuition": "Leidžia apskaičiuoti skaliarinę sandaugą, kai žinomos vektorių koordinatės.",
    "formal": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2",
    "related": [
      "skaliarine-vektoriu-sandauga-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "kampo-tarp-vektoriu-kosinuso-formule": {
    "title": "Kampo tarp vektorių kosinusas",
    "type": "formula",
    "definition": "Naudojama kampui tarp vektorių erdvėje rasti.",
    "intuition": "Naudojama kampui tarp vektorių erdvėje rasti.",
    "formal": "\\cos \\phi = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}",
    "related": [
      "kampas-tarp-vektoriu-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "atstumo-tarp-tasku-formule-erdveje": {
    "title": "Atstumas tarp taškų erdvėje",
    "type": "formula",
    "definition": "Pitagoro teoremos apibendrinimas trims dimensijoms.",
    "intuition": "Pitagoro teoremos apibendrinimas trims dimensijoms.",
    "formal": "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}",
    "related": [
      "atstumas-tarp-tasku-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-koordinasciu-ir-tasko-koordinasciu-painiojimas": {
    "title": "Vektoriaus ir taško koordinačių painiojimas",
    "type": "mistake",
    "definition": "Pamirštama, kad vektoriaus koordinatės rodo pokytį (skirtumą), o ne absoliučią padėtį.",
    "intuition": "Vektoriaus $\\vec{AB}$ koordinatės laikomos lygios taško $B$ koordinatėms.",
    "formal": "Vektoriaus koordinatės yra galo ir pradžios taškų koordinačių skirtumai.",
    "related": [
      "vektoriaus-koordinates-erdveje",
      "staciakampe-koordinaciu-sistema-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "skaliarines-sandaugos-zenklo-klaida": {
    "title": "Skaliarinės sandaugos ženklo ignoravimas",
    "type": "mistake",
    "definition": "Sumaišomos kosinuso savybės: $\\cos \\phi < 0$ reiškia, kad kampas yra bukasis (nuo $90^\\circ$ iki $180^\\circ$).",
    "intuition": "Manoma, kad jei skaliarinė sandauga neigiama, tai kampas smailus.",
    "formal": "Teigiama sandauga – smailus kampas, neigiama – bukasis, nulis – statusis.",
    "related": [
      "skaliarine-vektoriu-sandauga-erdveje",
      "kampas-tarp-vektoriu-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  },
  "vektoriaus-ilgio-skaiciavimo-klaida": {
    "title": "Klaida sumuojant koordinačių kvadratus",
    "type": "mistake",
    "definition": "Netinkamas Pitagoro teoremos taikymas.",
    "intuition": "Sudėjus koordinates ir ištraukus šaknį (arba pamiršus pakelti kvadratu).",
    "formal": "Pirmiausia pakelkite kiekvieną koordinatę kvadratu, tada sudėkite, tada traukite šaknį.",
    "related": [
      "vektoriaus-modulis-erdveje"
    ],
    "topics": [
      "vektoriai-erdveje"
    ]
  }
};
