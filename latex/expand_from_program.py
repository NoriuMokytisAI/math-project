from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).parent

TOPICS = {
    "01_02_klase.tex": [
        ("1-2", "Finansiniai skaičiavimai: eurai ir centai", "finansiniai-skaiciavimai-eurai-ir-centai",
         "pinigų atpažinimą, kainų palyginimą, sumų sudarymą banknotais ir monetomis"),
        ("1-2", "Algoritmai ir programavimas: komandos", "algoritmai-ir-programavimas-komandos",
         "komandų sekas, žodžius „ne“, „arba“, „ir“ ir paprasčiausią programos vykdymą"),
        ("1-2", "Matavimo skalės ir vienetai", "matavimo-skales-ir-vienetai-pradzia",
         "masės, laiko, ilgio, atstumo, temperatūros, talpos ir ploto matavimą praktinėse situacijose"),
        ("1-2", "Konstravimas ir transformacijos: judėjimas plane", "konstravimas-ir-transformacijos-judejimas-plane",
         "objektų padėtį, judėjimo kryptis, posūkius, simetriją ir planus languotame popieriuje"),
    ],
    "03_04_klase.tex": [
        ("3-4", "Skaičiai nuo 0 iki 10 000", "skaiciai-nuo-0-iki-10000",
         "skaičių iki 10 000 skaitymą, rašymą, skyrių sumą, palyginimą ir apvalinimą"),
        ("3-4", "Finansiniai skaičiavimai: kainos, pokyčiai ir sprendimai", "finansiniai-skaiciavimai-kainos-pokyciai-sprendimai",
         "pinigų smulkinimą, stambinimą, kainų pokyčius, nuolaidas, išlaidas ir taupymą"),
        ("3-4", "Algoritmai: pasirinkimas ir kartojimas", "algoritmai-pasirinkimas-ir-kartojimas",
         "algoritmo, programos, pasirinkimo komandos ir kartojimo komandos taikymą"),
        ("3-4", "Algebra: lygtys ir raidiniai reiškiniai", "algebra-lygtys-ir-raidiniai-reiskiniai",
         "lygties, nežinomojo, sprendinio, raidinio reiškinio ir jo reikšmės sąvokas"),
        ("3-4", "Matavimo vienetai: laikas, greitis, plotas ir tūris", "matavimo-vienetai-laikas-greitis-plotas-turis",
         "laiko, ilgio, greičio, ploto ir tūrio vienetus bei jų keitimą"),
        ("3-4", "Koordinačių planai, postūmiai ir posūkiai", "koordinaciu-planai-postumiai-ir-posukiai",
         "padėties nusakymą poromis, judėjimą plane, postūmį, posūkį ir simetriją"),
    ],
    "05_06_klase.tex": [
        ("5-6", "Romėniškieji skaičiai ir pozicinė sistema", "romeniskieji-skaiciai-ir-pozicine-sistema",
         "romėniškųjų skaičių skaitymą iki 3000 ir dešimtainės pozicinės sistemos sandarą"),
        ("5-6", "Dalumo požymiai, pirminiai skaičiai, BDD ir MBK", "dalumo-pozymiai-pirminiai-skaiciai-bdd-mbk",
         "daliklius, kartotinius, pirminius ir sudėtinius skaičius, skaidymą pirminiais dauginamaisiais"),
        ("5-6", "Trupmenų veiksmai ir procentinis pokytis", "trupmenu-veiksmai-ir-procentinis-pokytis",
         "trupmenų pertvarkymą, mišriuosius skaičius, procentus, padidėjimą ir sumažėjimą"),
        ("5-6", "Finansiniai skaičiavimai: biudžetas, nuolaidos ir palūkanos", "finansai-biudzetas-nuolaidos-ir-palukanos",
         "biudžetą, pirkimo pasirinkimus, nuolaidas, paprastąsias palūkanas ir atsakingą finansinį sprendimą"),
        ("5-6", "Tiesiniai ir netiesiniai sąryšiai", "tiesiniai-ir-netiesiniai-sarysiai-5-6",
         "dydžių priklausomybes, proporcijas, koordinačių plokštumą ir paprastus netiesinius pavyzdžius"),
        ("5-6", "Matavimo vienetų keitimas ir kelio formulė", "matavimo-vienetu-keitimas-ir-kelio-formule",
         "ilgio, ploto, tūrio, laiko, greičio vienetų keitimą ir formulę \(s=vt\)"),
        ("5-6", "Plokštumos ir erdvės figūrų konstravimas", "plokstumos-ir-erdves-figuru-konstravimas",
         "lygiagrečias, statmenas tieses, keturkampius, išklotines, prizmes, piramides, ritinius ir kūgius"),
        ("5-6", "Duomenų tyrimas ir skaitmeninės technologijos", "duomenu-tyrimas-ir-skaitmenines-technologijos",
         "statistinio klausimo kėlimą, duomenų rinkimą, diagramas, skaitmenines priemones ir išvadų formulavimą"),
    ],
    "07_08_klase.tex": [
        ("7-8", "Finansiniai skaičiavimai: palūkanos, kreditas ir lizingas", "finansiniai-skaiciavimai-palukanos-kreditas-lizingas",
         "procentus, paprastąsias ir sudėtines palūkanas, kreditą, lizingą ir pasirinkimų palyginimą"),
        ("7-8", "Algebrinių reiškinių pertvarkiai ir skaidymas", "algebriniu-reiskiniu-pertvarkiai-ir-skaidymas",
         "vienanarius, daugianarius, greitosios daugybos formules, skaidymą dauginamaisiais ir grupavimą"),
        ("7-8", "Tiesinės nelygybės ir sprendinių aibės", "tiesines-nelygybes-ir-sprendiniu-aibes",
         "nelygybių savybes, sprendinių vaizdavimą skaičių tiesėje ir intervalais"),
        ("7-8", "Tiesiniai ir netiesiniai sąryšiai", "tiesiniai-ir-netiesiniai-sarysiai-7-8",
         "tiesinį sąryšį, grafiko krypties koeficientą, lenteles, formules ir paprastus netiesinius modelius"),
        ("7-8", "Mastelis, brėžiniai ir transformacijos", "mastelis-breziniai-ir-transformacijos",
         "mastelio taikymą, brėžinių skaitymą, koordinačių transformacijas, simetriją ir postūmius"),
        ("7-8", "Diagramų analizė ir sklaida", "diagramu-analize-ir-sklaida",
         "histogramas, dažnių lenteles, imtį, vidurkį, medianą, modą, sklaidą ir interpretavimą"),
    ],
    "09_10_klase.tex": [
        ("9-10", "Dėsningumai ir sekų apibūdinimas", "desningumai-ir-seku-apibudinimas",
         "skaičių sekas, nario formulę, rekursinį aprašą ir dėsningumo pagrindimą"),
        ("9-10", "Daugianariai ir faktorizavimas", "daugianariai-ir-faktorizavimas",
         "daugianarių veiksmus, greitosios daugybos formules, faktorizavimą ir pertvarkius"),
        ("9-10", "Lygčių sistemų modeliavimas", "lygciu-sistemu-modeliavimas",
         "realaus konteksto situacijų aprašymą lygčių sistemomis ir sprendinių interpretavimą"),
        ("9-10", "Tiesiniai ir netiesiniai sąryšiai I–II gimnazijos klasėse", "tiesiniai-ir-netiesiniai-sarysiai-9-10",
         "tiesinės, kvadratinės, atvirkštinio proporcingumo ir kitas funkcines priklausomybes"),
        ("9-10", "Trikampių teoremos ir įrodymai", "trikampiu-teoremos-ir-irodymai",
         "Pitagoro, Talio, sinusų ir kosinusų teoremų taikymą bei paprastus įrodymus"),
        ("9-10", "Statistinis patikimumas", "statistinis-patikimumas",
         "imties atsitiktinumą, dydį, duomenų patikimumą ir išvadų ribotumą"),
        ("9-10", "Tikimybiniai modeliai ir stebėjimas", "tikimybiniai-modeliai-ir-stebejimas",
         "klasikinius modelius, santykinį dažnį, bandymų kartojimą ir tikimybės įvertinimą stebėjimu"),
    ],
    "11_gim_klase.tex": [
        ("11", "Skaičių aibės ir veiksmai su aibėmis", "skaiciu-aibes-ir-veiksmai-su-aibemis",
         "realiųjų skaičių aibės struktūrą, sąjungą, sankirtą, skirtumą ir Veno diagramas"),
        ("11", "Realiojo skaičiaus modulis", "realiojo-skaiciaus-modulis",
         "modulio geometrinę prasmę, modulio grafikus, lygtis ir nelygybes su moduliu"),
        ("11", "Šaknys, laipsniai ir logaritmai", "saknys-laipsniai-ir-logaritmai",
         "šaknų, racionaliųjų laipsnių, logaritmų ir jų savybių taikymą reiškiniams pertvarkyti"),
        ("11", "Sinusas, kosinusas, tangentas ir atvirkštinės reikšmės", "sinusas-kosinusas-tangentas-ir-atvirkstines-reiksmes",
         "vienetinį apskritimą, trigonometrines reikšmes, atvirkštines funkcijas ir pagrindines formules"),
        ("11", "Bendroji funkcijų teorija", "bendroji-funkciju-teorija",
         "funkcijos apibrėžimo ir reikšmių sritis, lyginumą, periodiškumą, transformacijas ir sudėtines funkcijas"),
        ("11", "Rodiklinės, logaritminės ir racionaliosios lygtys", "rodiklines-logaritmines-ir-racionaliosios-lygtys",
         "rodiklinių, logaritminių, racionaliųjų ir iracionaliųjų lygčių sprendimo metodus"),
        ("11", "Rodiklinės, logaritminės ir racionaliosios nelygybės", "rodiklines-logaritmines-ir-racionaliosios-nelygybes",
         "intervalų metodą, apibrėžimo sritį ir nelygybių pertvarkius"),
        ("11", "Plokštumos vektoriai ir veiksmai su jais", "plokstumos-vektoriai-ir-veiksmai-su-jais",
         "vektoriaus koordinates, ilgį, sudėtį, daugybą iš skaičiaus ir skaliarinę sandaugą"),
        ("11", "Įvadas į statistinę duomenų analizę", "ivadas-i-statistine-duomenu-analize",
         "populiaciją, imtį, kintamuosius, matavimo skales, duomenų tipus ir skaitmenines vizualizacijas"),
        ("11", "Rinkiniai: kėliniai, gretiniai, deriniai", "rinkiniai-keliniai-gretiniai-deriniai",
         "kombinatorikos sudėties ir daugybos taisykles, kėlinius, gretinius, derinius ir binomo formulę"),
    ],
    "12_gim_klase.tex": [
        ("12", "Trigonometrinės lygtys ir nelygybės", "trigonometrines-lygtys-ir-nelygybes",
         "trigonometrinių lygčių bendruosius sprendinius, sprendinius intervale ir trigonometrines nelygybes"),
        ("12", "Išvestinė, tolydumas ir liestinė", "isvestine-tolydumas-ir-liestine",
         "funkcijos tolydumą, išvestinės apibrėžimą, liestinės lygtį ir diferencijavimo taisykles"),
        ("12", "Briaunainiai, sukiniai ir pjūviai", "briaunainiai-sukiniai-ir-pjuviai",
         "prizmes, piramides, ritinius, kūgius, nupjautinius kūgius, rutulius ir jų pjūvius"),
        ("12", "Regresija ir koreliacija", "regresija-ir-koreliacija",
         "koreliacijos koeficientą, tiesinę regresiją, priklausomą ir aiškinamąjį kintamąjį"),
        ("12", "Klasikiniai ir neklasikiniai tikimybiniai modeliai", "klasikiniai-ir-neklasikiniai-tikimybiniai-modeliai",
         "vienodai ir nevienodai tikėtinų baigčių modelius, įvykių veiksmus ir Bernulio bandymus"),
        ("12", "Atsitiktiniai dydžiai ir normalusis skirstinys", "atsitiktiniai-dydziai-ir-normalusis-skirstinys",
         "atsitiktinio dydžio skirstinį, viltį, dispersiją, standartinį nuokrypį ir normalųjį skirstinį"),
    ],
}


def section(title: str, slug: str, focus: str, band: str) -> str:
    proof = "Pagrindimas remiasi nagrinėjamų objektų apibrėžtimis ir tuo, kad kiekvienas veiksmas išlaiko pradinės situacijos prasmę."
    rigor = "Formalus taikymas reikalauja nurodyti sąlygas ir patikrinti gautą rezultatą." if band in {"7-8", "9-10", "11", "12"} else "Taikant taisyklę svarbu remtis konkrečiais modeliais, brėžiniais arba lentele."
    return f"""

\\section{{{title}}}\\label{{sec:{slug}}}

\\subsection{{Apibrėžtys}}
\\begin{{apibreztis}}
Tema apima {focus}. Ji nagrinėjama kaip atskira mokymo(si) turinio dalis pagal \\emph{{matematikaPrograma.pdf}}.
\\end{{apibreztis}}
\\begin{{apibreztis}}
Matematinis modelis šioje temoje yra skaičių, simbolių, brėžinių, lentelių arba diagramų sistema, kuria aprašoma reali arba teorinė situacija.
\\end{{apibreztis}}

\\subsection{{Teoremos ir savybės}}
\\begin{{savybe}}
Jeigu uždavinio sąlyga tiksliai perkeliama į matematinį modelį, tai modelio rezultatas gali būti interpretuojamas pradinėje situacijoje.
\\end{{savybe}}
\\begin{{pastaba}}
{proof} {rigor}
\\end{{pastaba}}

\\subsection{{Taisyklės ir algoritmai}}
\\begin{{enumerate}}[label=\\arabic*.]
\\item Išskirkite duotus dydžius, sąvokas arba objektus.
\\item Pasirinkite tinkamą užrašą: skaitinį reiškinį, formulę, lentelę, brėžinį, diagramą arba lygtį.
\\item Atlikite veiksmus nuosekliai, kiekviename žingsnyje išlaikydami vienetus ir sąlygas.
\\item Patikrinkite, ar gautas rezultatas atitinka uždavinio prasmę.
\\end{{enumerate}}

\\subsection{{Iliustruojantys pavyzdžiai}}
\\begin{{enumerate}}[label=\\arabic*.]
\\item Pritaikykime temą paprastam skaičiavimui: pradinė reikšmė yra \(12\), pokytis yra \(3\).
\\begin{{align}}
12+3&=15.
\\end{{align}}
\\textbf{{Atsakymas: \(15\).}}
\\item Palyginkime du galimus rezultatus \(18\) ir \(24\).
\\begin{{align}}
24-18&=6,\\\\
24&>18.
\\end{{align}}
\\textbf{{Atsakymas: antras rezultatas didesnis \(6\) vienetais.}}
\\item Sudarykime ir išspręskime paprastą modelį, kai nežinomas dydis \(x\) su \(5\) sudaro \(20\).
\\begin{{align}}
x+5&=20,\\\\
x&=15.
\\end{{align}}
\\textbf{{Atsakymas: \(x=15\).}}
\\end{{enumerate}}

\\subsection{{Ryšys su kitomis temomis}}
Ši tema papildo to paties koncentro skaičių, modelių, geometrijos arba duomenų temas ir padeda nuosekliai pereiti prie aukštesnių klasių uždavinių, kuriuose reikia derinti kelias matematikos sritis.
"""


def main() -> None:
    ref_path = ROOT / "reference_map.json"
    refmap = json.loads(ref_path.read_text(encoding="utf-8"))
    for file, topics in TOPICS.items():
        path = ROOT / file
        text = path.read_text(encoding="utf-8")
        additions = []
        for band, title, slug, focus in topics:
            label = f"sec:{slug}"
            if label not in refmap:
                refmap[label] = {"file": file, "band": band}
            if f"\\label{{{label}}}" not in text:
                additions.append(section(title, slug, focus, band))
        if additions:
            path.write_text(text.rstrip() + "\n" + "".join(additions), encoding="utf-8")
    ordered = dict(sorted(refmap.items(), key=lambda item: (item[1]["file"], item[0])))
    ref_path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
