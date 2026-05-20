from __future__ import annotations

import hashlib
import json
import math
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "content" / "generated"
CURRICULUM_SOURCE = "matematikaPrograma.txt"
TEXTBOOK_SOURCE = "12_klase_teorija.pdf"


def slugify(text: str) -> str:
    translit = {
        "ą": "a",
        "č": "c",
        "ę": "e",
        "ė": "e",
        "į": "i",
        "š": "s",
        "ų": "u",
        "ū": "u",
        "ž": "z",
        "Ą": "a",
        "Č": "c",
        "Ę": "e",
        "Ė": "e",
        "Į": "i",
        "Š": "s",
        "Ų": "u",
        "Ū": "u",
        "Ž": "z",
    }
    normalized = "".join(translit.get(ch, ch.lower()) for ch in text)
    normalized = re.sub(r"[^a-z0-9]+", "-", normalized)
    return normalized.strip("-")


def stable_rng(*parts: str) -> int:
    digest = hashlib.sha1("|".join(parts).encode("utf-8")).hexdigest()
    return int(digest[:8], 16)


def pick(values: list[Any], seed: int, step: int = 0) -> Any:
    return values[(seed + step) % len(values)]


def concept(
    concept_id: str,
    title: str,
    short: str,
    intuition: str,
    formal: str,
    related: list[str] | None = None,
    prerequisite: list[str] | None = None,
    notation: list[str] | None = None,
    default_srs: bool = True,
) -> dict[str, Any]:
    return {
        "id": slugify(concept_id),
        "title": title,
        "type": "concept",
        "shortDefinition": short,
        "intuition": intuition,
        "formal": formal,
        "notation": notation or [],
        "relatedConceptIds": [slugify(item) for item in (related or [])],
        "prerequisiteConceptIds": [slugify(item) for item in (prerequisite or [])],
        "appearsInTopicIds": [],
        "defaultSrs": default_srs,
    }


def formula(
    formula_id: str,
    title: str,
    latex: str,
    conditions: list[str],
    variables: dict[str, str],
    explanation: str,
    related: list[str],
    default_srs: bool = True,
) -> dict[str, Any]:
    return {
        "id": slugify(formula_id),
        "title": title,
        "type": "formula",
        "latex": latex,
        "conditions": conditions,
        "variables": variables,
        "explanation": explanation,
        "relatedConceptIds": [slugify(item) for item in related],
        "defaultSrs": default_srs,
    }


def mistake(
    mistake_id: str,
    title: str,
    concept_ids: list[str],
    wrong_pattern: str,
    why: str,
    correction: str,
    wrong_example: str,
    correct_example: str,
) -> dict[str, Any]:
    return {
        "id": slugify(mistake_id),
        "title": title,
        "type": "mistake",
        "conceptIds": [slugify(item) for item in concept_ids],
        "wrongPattern": wrong_pattern,
        "whyItHappens": why,
        "correction": correction,
        "wrongExample": wrong_example,
        "correctExample": correct_example,
        "defaultSrs": True,
    }


def paragraph(text: str) -> dict[str, Any]:
    return {"type": "paragraph", "text": text}


def definition(concept_id: str, text: str) -> dict[str, Any]:
    return {"type": "definition", "conceptId": concept_id, "text": text}


def theorem(text: str) -> dict[str, Any]:
    return {"type": "theorem", "text": text}


def property_block(text: str) -> dict[str, Any]:
    return {"type": "property", "text": text}


def note(text: str) -> dict[str, Any]:
    return {"type": "note", "text": text}


def warning(text: str) -> dict[str, Any]:
    return {"type": "warning", "text": text}


def method(text: str) -> dict[str, Any]:
    return {"type": "method", "text": text}


def formula_block(formula_id: str, latex: str) -> dict[str, Any]:
    return {"type": "formula", "formulaId": formula_id, "latex": latex}


def make_example(example_id: str, title: str, level: str, problem: str, concept_ids: list[str], steps: list[dict[str, str]], answer: str, formula_ids: list[str] | None = None) -> dict[str, Any]:
    return {
        "id": example_id,
        "title": title,
        "level": level,
        "problem": problem,
        "conceptIds": concept_ids,
        "formulaIds": formula_ids or [],
        "steps": steps,
        "answer": answer,
    }


def mc_answer(choices: list[tuple[str, str]], correct_id: str) -> dict[str, Any]:
    return {
        "kind": "choice",
        "choices": [{"id": cid, "text": text} for cid, text in choices],
        "correctChoiceIds": [correct_id],
    }


def numeric_answer(value: float | int, tolerance: float = 0) -> dict[str, Any]:
    return {"kind": "numeric", "value": value, "tolerance": tolerance}


def expression_answer(canonical: str, accepted: list[str] | None = None) -> dict[str, Any]:
    return {"kind": "expression", "canonical": canonical, "acceptedEquivalentForms": accepted or []}


def exercise(
    ex_id: str,
    topic_id: str,
    grade: int,
    level: str,
    ex_type: str,
    statement: str,
    answer: dict[str, Any],
    hints: list[dict[str, Any]],
    solution_steps: list[dict[str, str]],
    answer_text: str,
    concept_ids: list[str],
    formula_ids: list[str],
    estimated_seconds: int,
    alternate_methods: list[dict[str, Any]] | None = None,
    mistake_tags: list[str] | None = None,
) -> dict[str, Any]:
    return {
        "id": ex_id,
        "topicId": topic_id,
        "grade": grade,
        "level": level,
        "type": ex_type,
        "statement": statement,
        "answer": answer,
        "hints": hints,
        "solutionSteps": solution_steps,
        "answerText": answer_text,
        "alternateMethods": alternate_methods or [],
        "conceptIds": concept_ids,
        "formulaIds": formula_ids,
        "mistakeIds": mistake_tags or [],
        "estimatedSeconds": estimated_seconds,
    }


def hint(order: int, text: str, penalty: float = 0.12, reveals: list[str] | None = None) -> dict[str, Any]:
    payload = {"order": order, "text": text, "penalty": penalty}
    if reveals:
        payload["revealsConceptIds"] = reveals
    return payload


def test_case(test_id: str, title: str, scope: str, topic_ids: list[str], exercise_ids: list[str], mastery_weight: float, passing_threshold: float, time_limit: int | None = None) -> dict[str, Any]:
    data = {
        "id": test_id,
        "title": title,
        "scope": scope,
        "topicIds": topic_ids,
        "exerciseIds": exercise_ids,
        "masteryWeight": mastery_weight,
        "passingThreshold": passing_threshold,
    }
    if time_limit is not None:
        data["timeLimitSeconds"] = time_limit
    return data


def srs_card(card_id: str, deck: str, card_type: str, front: str, back: str, concept_ids: list[str], formula_ids: list[str] | None = None, mistake_ids: list[str] | None = None) -> dict[str, Any]:
    return {
        "id": card_id,
        "deck": deck,
        "cardType": card_type,
        "front": front,
        "back": back,
        "conceptIds": concept_ids,
        "formulaIds": formula_ids or [],
        "mistakeIds": mistake_ids or [],
        "defaultEnabled": True,
    }


def number_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("skaicius", "Skaičius", f"Skaičius aprašo kiekybę ar tvarką {focus} uždaviniuose.", "Skaičius yra pagrindinis kiekybės užrašymo būdas.", "Skaičius yra matematinis objektas, kuriuo žymima kiekio arba padėties reikšmė.", ["natūralieji-skaiciai", "sveikieji-skaiciai", "racionalieji-skaiciai"]),
        concept("natūralieji-skaiciai", "Natūralieji skaičiai", "Skaičiai, kuriais skaičiuojame objektus ir tvarką.", f"Tai pirmas sluoksnis {focus} temose.", "Natūralieji skaičiai yra 0, 1, 2, 3, ...", ["sveikieji-skaiciai", "kartotiniai", "dalikliai"], ["skaicius"], ["N"]),
        concept("sveikieji-skaiciai", "Sveikieji skaičiai", "Natūralieji skaičiai, jų priešingieji ir nulis.", "Tai leidžia skaičiuoti ir į minusinę pusę.", "Sveikųjų skaičių aibė žymima Z.", ["natūralieji-skaiciai", "racionalieji-skaiciai"], ["skaicius"], ["Z"]),
        concept("racionalieji-skaiciai", "Racionalieji skaičiai", "Skaičiai, užrašomi trupmena p/q.", "Tai visi skaičiai, kuriuos galima tiksliai arba periodiškai užrašyti trupmena.", "Racionalusis skaičius yra skaičius, kurį galima užrašyti p/q, kai q != 0.", ["trupmena", "desimtainiai-skaiciai"], ["sveikieji-skaiciai"], ["Q"]),
        concept("trupmena", "Trupmena", "Vienos visumos dalies užrašas.", "Trupmena padeda kalbėti apie dalis, santykius ir dalijimą.", "Trupmena yra p/q, kur p yra skaitiklis, q yra vardiklis, q != 0.", ["racionalieji-skaiciai", "procentas"], ["natūralieji-skaiciai"], ["p/q"]),
        concept("procentas", "Procentas", "Šimtoji dalis.", "Procentai patogiai aprašo dalį nuo visumos.", "x procentų yra x/100 visumos.", ["trupmena", "santykis"], ["racionalieji-skaiciai"], ["%"]),
        concept("santykis", "Santykis", "Dviejų dydžių palyginimas.", "Santykis sako, kiek vieno dydžio tenka kitam.", "Santykis a:b arba a/b rodo dviejų dydžių palyginimą.", ["proporcija", "procentas"], ["trupmena"]),
        concept("proporcija", "Proporcija", "Dviejų santykių lygybė.", "Kai mastelis išlieka tas pats, santykiai tampa proporcingi.", "a:b = c:d reiškia a/d = b/c ir kartu a·d = b·c.", ["santykis", "mastelis"], ["trupmena"], ["a:b = c:d"]),
        concept("apvalinimas", "Apvalinimas", "Skaičiaus pakeitimas artimu patogesniu skaičiumi.", "Apvalinimas padeda greitai įvertinti rezultatą.", "Apvalinant laikomasi pasirinkto tikslumo taisyklės.", ["skaicius", "desimtainiai-skaiciai"], ["natūralieji-skaiciai"]),
        concept("kartotiniai", "Kartotiniai", "Skaičiai, gaunami dauginant iš natūraliojo skaičiaus.", "Kartotiniai padeda spręsti ritmiškus ir dalijimo uždavinius.", "Skaičiaus n kartotiniai yra n, 2n, 3n, ...", ["dalikliai", "pirminis-skaicius"], ["natūralieji-skaiciai"]),
        concept("dalikliai", "Dalikliai", "Skaičiai, kuriais duotasis skaičius dalijasi be liekanos.", "Dalikliai yra priešinga kartotinių pusė.", "Skaičius d yra skaičiaus n daliklis, jei n/d yra sveikasis skaičius.", ["kartotiniai", "pirminis-skaicius"], ["natūralieji-skaiciai"]),
        concept("pirminis-skaicius", "Pirminis skaičius", "Natūralusis skaičius, turintis tik du daliklius.", "Pirminiai skaičiai yra skaidymo į sandaugą pagrindas.", "Pirminis skaičius turi tik 1 ir patį save kaip daliklius.", ["dalikliai", "skaidymas-i-daugiklius"], ["natūralieji-skaiciai"]),
        concept("desimtainiai-skaiciai", "Dešimtainiai skaičiai", "Skaičiai su kableliu.", "Dešimtainiai skaičiai patogūs matuojant ir skaičiuojant pinigus.", "Dešimtainis skaičius užrašomas naudojant dešimtąsias, šimtąsias ir t. t.", ["racionalieji-skaiciai", "apvalinimas"], ["sveikieji-skaiciai"]),
        concept("mastelis", "Mastelis", "Santykis tarp piešinio ir tikrovės.", "Mastelis leidžia mažą modelį sieti su dideliu objektu.", "Mastelis apibrėžia, kaip brėžinio ilgiai susiję su tikrais ilgiais.", ["proporcija", "santykis"], ["racionalieji-skaiciai"]),
    ]


def algebra_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("kintamasis", "Kintamasis", "Raidė, žyminti nežinomą arba kintantį dydį.", f"Tai ta vieta, kur {focus} uždavinyje įdedame reikšmę.", "Kintamasis yra simbolis, kurio reikšmė gali keistis.", ["reiskinys", "lygtis", "nelygybe"]),
        concept("reiskinys", "Reiškinys", "Matematinis užrašas iš skaičių, kintamųjų ir veiksmų.", "Reiškinys yra formulės arba skaičiavimo žingsnio užrašas.", "Reiškinys sudaromas naudojant aritmetinius veiksmus ir skliaustus.", ["kintamasis", "koeficientas"]),
        concept("koeficientas", "Koeficientas", "Skaičius prie raidės.", "Koeficientas pasako, kiek kartų daugėja raidė.", "Koeficientas yra skaitinis daugiklis prie kintamojo.", ["reiskinys", "tiesine-funkcija"]),
        concept("lygtis", "Lygtis", "Dviejų reiškinių lygybė su nežinomuoju.", "Lygtis sprendžiama ieškant, kokia reikšmė tinka abiem pusėms.", "Lygtis yra lygybė, kurioje yra bent vienas nežinomasis.", ["sprendinys", "sistema"]),
        concept("nelygybe", "Nelygybė", "Dviejų reiškinių palyginimas nelygybės ženklu.", "Nelygybė aprašo reikšmių sritį, ne tik vieną tašką.", "Nelygybė naudoja ženklus <, >, <=, >=.", ["lygtis", "sprendinys"]),
        concept("sprendinys", "Sprendinys", "Reikšmė, kuri tenkina lygtį ar nelygybę.", "Sprendinys yra atsakymas, kurį galima patikrinti.", "Sprendinys yra nežinomojo reikšmė, dėl kurios teiginys tampa teisingas.", ["lygtis", "nelygybe"]),
        concept("sistema", "Lygčių sistema", "Kelios lygtys su tais pačiais nežinomaisiais.", "Sistema reiškia, kad keli apribojimai galioja kartu.", "Sistema turi tenkinti visas lygtis vienu metu.", ["lygtis", "nelygybe", "tiesine-funkcija"]),
        concept("formule", "Formulė", "Trumpas ryšio užrašas tarp dydžių.", "Formulė leidžia vienu sakiniu užrašyti daug žodžių.", "Formulė yra bendras ryšio tarp dydžių užrašas.", ["reiskinys", "proporcija", "plotas"]),
        concept("tiesine-funkcija", "Tiesinė funkcija", "Funkcija, kurios grafikas yra tiesė.", "Tai viena paprasčiausių priklausomybių tarp dydžių.", "Tiesinė funkcija užrašoma y = ax + b.", ["funkcija", "grafikas"]),
        concept("distributyvusis-destymas", "Sklaidos dėsnis", "Daugiklis dauginamas su kiekvienu dėmeniu skliaustuose.", "Tai padeda išskleisti ir sutvarkyti reiškinius.", "a(b + c) = ab + ac.", ["reiskinys", "koeficientas"], ["a(b+c)=ab+ac"]),
        concept("tiesine-lygybe", "Tiesinė lygtis", "Lygtis, kurioje nežinomasis yra tik pirmuoju laipsniu.", "Šias lygtis sprendžiame nuosekliai atskirdami nežinomąjį.", "Tiesinė lygtis turi formą ax + b = 0.", ["lygtis", "sprendinys"]),
        concept("proporcingumas", "Proporcingumas", "Ryšys, kai vienas dydis kinta pastoviu santykiu su kitu.", "Proporcingumas yra mastelio ir procentų pagrindas.", "Jei a/b = c/d, dydžiai yra proporcingi.", ["proporcija", "mastelis"]),
    ]


def geometry_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("kampas", "Kampas", "Dviejų spindulių arba tiesių susikirtimo dydis.", "Kampai aprašo krypties pokytį.", "Kampas matuojamas laipsniais arba radianais.", ["trikampis", "transformacija"]),
        concept("trikampis", "Trikampis", "Figūra iš trijų kraštinių ir trijų kampų.", "Trikampis yra daugelio geometrijos teoremų pradžia.", "Trikampis yra daugiakampis su trimis viršūnėmis.", ["kampas", "pitagoro-teorema", "panasus-trikampiai"]),
        concept("keturkampis", "Keturkampis", "Figūra iš keturių kraštinių.", "Keturkampių savybės padeda skaičiuoti plotus ir kampus.", "Keturkampis turi keturias kraštines ir keturis kampus.", ["trikampis", "lygiagretainis"]),
        concept("perimetras", "Perimetras", "Kraštinių ilgių suma.", "Perimetras atsako, kiek reikia tvorelės ar krašto juostos.", "Perimetras yra figūros kraštinių ilgių suma.", ["plotas", "trikampis"]),
        concept("plotas", "Plotas", "Plokščios figūros paviršiaus dydis.", "Plotas sako, kiek vietos figūra užima.", "Plotas matuojamas kvadratiniais vienetais.", ["perimetras", "apskritimas"]),
        concept("apskritimas", "Apskritimas", "Taškų aibė, nutolusi nuo centro vienodu atstumu.", "Apskritimas yra rato kraštas.", "Apskritimas sudarytas iš taškų, kurių atstumas iki centro yra pastovus.", ["skritulys", "kampas"]),
        concept("skritulys", "Skritulys", "Apskritimo vidus kartu su kraštu.", "Skritulys yra visas apskritimo užimamas plotas.", "Skritulys yra plokštumos dalis, apribota apskritimu.", ["apskritimas", "plotas"]),
        concept("pitagoro-teorema", "Pitagoro teorema", "Ryšys stačiajame trikampyje.", "Ji leidžia rasti neaiškų kraštinę iš dviejų žinomų.", "Stačiajame trikampyje a² + b² = c².", ["trikampis", "saknis"], ["a²+b²=c²"]),
        concept("panasus-trikampiai", "Panašūs trikampiai", "Vienodų kampų, bet kitokio dydžio trikampiai.", "Panašumas reiškia tą pačią formą ir kitokį mastelį.", "Panašiuose trikampiuose atitinkami kampai lygūs, o kraštinės proporcingos.", ["trikampis", "proporcija", "mastelis"]),
        concept("talio-teorema", "Talio teorema", "Lygiagrečių tiesių ir proporcijų ryšys.", "Tai labai patogus mastelio įrankis.", "Lygiagretės tiesės sukuria proporcingas atkarpas.", ["panasus-trikampiai", "proporcija"]),
        concept("transformacija", "Transformacija", "Figūros padėties, dydžio ar krypties keitimas.", "Transformacijos leidžia geometriją matyti judant.", "Transformacija yra taisyklė, paverčianti vieną figūrą kita.", ["simetrija", "koordinates"]),
        concept("simetrija", "Simetrija", "Figūros savybė sutapti su savimi po pokyčio.", "Simetrija padeda atpažinti dėsningumus.", "Figūra yra simetriška, jei egzistuoja ją į save paverčianti transformacija.", ["transformacija", "apskritimas"]),
        concept("koordinates", "Koordinatės", "Skaičiai, nusakantys taško padėtį plokštumoje.", "Koordinatės leidžia geometriją perkelti į skaičius.", "Taško padėtis aprašoma pora (x; y).", ["transformacija", "vektorius"]),
        concept("vektorius", "Vektorius", "Nukreipta atkarpa.", "Vektorius rodo ir ilgį, ir kryptį.", "Vektorius turi moduli, kryptį ir pojūtį, kur keliauja.", ["koordinates", "transformacija"]),
    ]


def data_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("duomenys", "Duomenys", "Stebėjimų arba matavimų rinkinys.", "Duomenys yra žali faktai, iš kurių darome išvadas.", "Duomenys yra surinktos reikšmės arba stebėjimai.", ["imtis", "vidurkis", "tikimybe"]),
        concept("imtis", "Imtis", "Duomenų dalis, naudojama tiriamam reiškiniui.", "Imtis yra tarsi mažas visumos pavyzdys.", "Imtis yra duomenų rinkinys, paimtas iš populiacijos.", ["duomenys", "sklaida"]),
        concept("dažnis", "Dažnis", "Kiek kartų reikšmė pasikartoja.", "Dažnis parodo, kas nutinka dažniausiai.", "Dažnis yra stebėjimų skaičius konkrečiai reikšmei.", ["vidurkis", "mediana"]),
        concept("vidurkis", "Vidurkis", "Suma padalinta iš reikšmių skaičiaus.", "Vidurkis suvienodina visus skaičius į vieną tipinę reikšmę.", "Aritmetinis vidurkis yra visų reikšmių suma, padalyta iš jų kiekio.", ["mediana", "moda"]),
        concept("mediana", "Mediana", "Vidurinė surikiuotų duomenų reikšmė.", "Mediana yra atspari kraštinėms reikšmėms.", "Mediana yra vidurinė surikiuotos imties reikšmė.", ["vidurkis", "moda"]),
        concept("moda", "Moda", "Dažniausiai pasikartojanti reikšmė.", "Moda greitai pasako, kas populiariausia.", "Moda yra didžiausio dažnio reikšmė.", ["dažnis", "vidurkis"]),
        concept("sklaida", "Sklaida", "Kiek plačiai duomenys išsibarstę.", "Sklaida parodo, ar duomenys labai vienodi, ar įvairūs.", "Sklaida nusako duomenų išsisklaidymo mastą.", ["imtis", "vidurkis"]),
        concept("tikimybe", "Tikimybė", "Įvykio pasireiškimo matas nuo 0 iki 1.", "Tikimybė pasako, kiek realu, kad kas nors įvyks.", "Tikimybė yra skaičius iš intervalo [0, 1].", ["ivyki", "kombinatorika"], ["P(A)"]),
        concept("ivyki", "Įvykis", "Rezultatas arba rezultatu aibė tikimybių uždavinyje.", "Įvykis yra tai, ko laukiame arba ko bijome metant kauliuką ar traukiant kortą.", "Įvykis yra baigtinių baigčių poaibis.", ["tikimybe", "kombinatorika"]),
        concept("kombinatorika", "Kombinatorika", "Skaičiavimas, kiek yra galimų variantų.", "Kombinatorika padeda suskaičiuoti pasirinkimų skaičių.", "Kombinatorika tiria pasirinkimų, išdėstymų ir kombinacijų skaičių.", ["tikimybe"]),
        concept("koreliacija", "Koreliacija", "Dviejų kintamųjų ryšys.", "Koreliacija parodo, kaip vienas dydis juda kartu su kitu.", "Koreliacija nusako statistinį ryšį tarp dydžių.", ["duomenys", "sklaida"]),
    ]


def function_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("funkcija", "Funkcija", "Taisyklė, kuri kiekvienam argumentui priskiria vieną reikšmę.", f"Tai pagrindinis {focus} modelis.", "Funkcija yra atvaizdis, kiekvienam x priskiriantis vienintelį f(x).", ["argumentas", "grafikas", "apibrezimo-sritis"]),
        concept("argumentas", "Argumentas", "Nepriklausomas kintamasis.", "Tai įvestis, kurią duodame funkcijai.", "Argumentas yra funkcijos įvesties kintamasis.", ["funkcija", "reiksmiu-sritis"]),
        concept("apibrezimo-sritis", "Apibrėžimo sritis", "Visų leistinų argumentų aibė.", "Tai visi x, kuriuos funkcija priima.", "Apibrėžimo sritis D(f) yra visų leistinų x aibė.", ["funkcija", "grafikas"], ["D(f)"]),
        concept("reiksmiu-sritis", "Reikšmių sritis", "Visų galimų funkcijos reikšmių aibė.", "Tai visi galimi y atsakymai.", "Reikšmių sritis yra funkcijos galimų reikšmių aibė.", ["funkcija", "grafikas"], ["E(f)"]),
        concept("grafikas", "Grafikas", "Taškų rinkinys koordinačių plokštumoje.", "Grafikas leidžia funkciją pamatyti akimis.", "Funkcijos grafikas yra visų taškų (x, f(x)) aibė.", ["funkcija", "funkcijos-nulis", "didejimas", "mazejimas"]),
        concept("funkcijos-nulis", "Funkcijos nulis", "Argumentas, kuriam funkcijos reikšmė lygi nuliui.", "Tai vieta, kur grafikas susiduria su x ašimi.", "x0 yra nulis, jei f(x0)=0.", ["grafikas", "saknys"]),
        concept("didejimas", "Didėjimas", "Kai didesniam argumentui atitinka didesnė reikšmė.", "Judant į dešinę grafikas kyla.", "Funkcija didėja intervale, jei x1 < x2 implikuoja f(x1) < f(x2).", ["mazejimas", "grafikas"]),
        concept("mazejimas", "Mažėjimas", "Kai didesniam argumentui atitinka mažesnė reikšmė.", "Judant į dešinę grafikas leidžiasi.", "Funkcija mažėja intervale, jei x1 < x2 implikuoja f(x1) > f(x2).", ["didejimas", "grafikas"]),
        concept("kvadratine-funkcija", "Kvadratinė funkcija", "Funkcija su x² nariu.", "Tai parabolės istorija.", "Kvadratinė funkcija yra f(x)=ax²+bx+c, kur a!=0.", ["parabole", "virsune", "diskriminantas"]),
        concept("parabole", "Parabolė", "Kvadratinės funkcijos grafikas.", "U formos arba apversta U forma.", "Parabolė yra kvadratinės funkcijos grafikas.", ["kvadratine-funkcija", "virsune"]),
        concept("virsune", "Viršūnė", "Aukščiausias arba žemiausias parabolės taškas.", "Tai parabolės lūžio vieta.", "Viršūnė yra taškas, kuriame kvadratinė funkcija pasiekia ekstremumą.", ["parabole", "simetrijos-asis"]),
        concept("simetrijos-asis", "Simetrijos ašis", "Tiesė, dalijanti parabolę į dvi vienodas dalis.", "Tai parabolės veidrodis.", "Parabolės simetrijos ašis yra x=-b/(2a).", ["virsune", "parabole"]),
        concept("diskriminantas", "Diskriminantas", "Dydis, nusakantis kvadratinės lygties nulių skaičių.", "Jis sako, ar parabolė kirs ašį.", "D=b²-4ac.", ["saknys", "kvadratine-funkcija"], ["D"]),
        concept("saknys", "Šaknys", "Lygties sprendiniai.", "Šaknys yra ten, kur funkcija lygi nuliui.", "Kvadratinės lygties šaknys yra sprendiniai, gaunami pagal diskriminantą.", ["funkcijos-nulis", "diskriminantas"]),
    ]


def systems_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("lygtis", "Lygtis", "Lygybė su nežinomuoju.", "Lygtis turi būti tikrinama abiejose pusėse.", "Lygtis yra lygybė su bent vienu nežinomuoju.", ["sprendinys", "sistema"]),
        concept("nelygybe", "Nelygybė", "Ryšys su <, >, <= arba >=.", "Nelygybė aprašo sritį, o ne vieną skaičių.", "Nelygybė lygina du reiškinius nelygybės ženklais.", ["sprendinys", "sistema"]),
        concept("sprendinys", "Sprendinys", "Reikšmė, tenkinanti lygtį.", "Patikrinimas yra svarbiausias žingsnis.", "Sprendinys padaro lygtį ar nelygybę teisingą.", ["lygtis", "nelygybe"]),
        concept("sistema", "Sistema", "Kelios lygtys su tais pačiais nežinomaisiais.", "Sistema reiškia, kad visi reikalavimai galioja kartu.", "Sprendinys turi tenkinti visas sistemos lygtis.", ["lygtis", "tiesine-funkcija"]),
        concept("tiesine-funkcija", "Tiesinė funkcija", "Funkcija, kurios grafikas yra tiesė.", "Sistema dažnai reiškia tiesių susikirtimą.", "Tiesinė funkcija rašoma y=ax+b.", ["funkcija", "grafikas"]),
        concept("veiksmai-su-lygtimis", "Veiksmai su lygtimis", "Lygties pertvarkymas išlaikant lygybę.", "Galima pridėti, atimti, dauginti ar dalyti abi puses tuo pačiu skaičiumi.", "Lygtį galima pertvarkyti ekvivalentiškais veiksmais.", ["lygtis", "sprendinys"]),
        concept("tiesine-lygybe", "Tiesinė lygtis", "Lygtis su pirmojo laipsnio nežinomuoju.", "Tai pagrindinė vieno nežinomojo lygtis.", "Tiesinė lygtis turi formą ax+b=0.", ["lygtis"]),
        concept("rodikliu-nelygybe", "Rodyklinė nelygybė", "Nelygybė, kai reikia saugoti ženklų kryptį.", "Svarbu, kad dauginant iš neigiamo skaičiaus ženklas apsiverčia.", "Dauginant ar dalijant iš neigiamo skaičiaus nelygybės ženklas pasikeičia.", ["nelygybe", "sprendinys"]),
        concept("modeliavimas", "Modeliavimas", "Realaus teksto vertimas į lygtį ar sistemą.", "Tai žingsnis nuo istorijos prie matematikos.", "Modeliavimas reiškia situacijos užrašymą matematiniais ryšiais.", ["lygtis", "sistema"]),
        concept("grafine-sistema", "Grafinė sistema", "Lygčių sistema, sprendžiama grafiškai.", "Tai tiesių arba kreivių susikirtimas.", "Sistema sprendžiama radus bendrus grafiko taškus.", ["sistema", "grafikas"]),
    ]


def analysis_concepts(topic_slug: str, focus: str) -> list[dict[str, Any]]:
    return [
        concept("seka", "Seka", "Skaičių eilė pagal taisyklę.", f"Tai {focus} temos gija.", "Seka yra aibė, kurios elementai surikiuoti pagal indeksus.", ["aritmetine-progresija", "geometrine-progresija"]),
        concept("aritmetine-progresija", "Aritmetinė progresija", "Seka su pastoviu skirtumu.", "Kiekvienas narys gaunamas prie ankstesnio pridėjus tą patį skaičių.", "Aritmetinėje progresijoje skirtumas d pastovus.", ["seka", "indukcija"], ["a_n"]),
        concept("geometrine-progresija", "Geometrinė progresija", "Seka su pastoviu santykiu.", "Kiekvienas narys gaunamas dauginant iš to paties skaičiaus.", "Geometrinėje progresijoje vardiklis q pastovus.", ["seka", "laipsnis"], ["q"]),
        concept("indukcija", "Matematinė indukcija", "Įrodymo būdas visiems natūraliesiems skaičiams.", "Įrodome pradžią ir perėjimą į kitą žingsnį.", "Indukcijoje tikrinamas pradinis žingsnis ir indukcinis žingsnis.", ["seka", "teorema"]),
        concept("laipsnis", "Laipsnis", "Trumpas kartotinio daugybos užrašas.", "Laipsniai padeda skaičiuoti augimą.", "a^n reiškia a daugintas iš savęs n kartų.", ["saknis", "rodiklis"]),
        concept("saknis", "Šaknis", "Veiksmas, atvirkštinis laipsniavimui.", "Šaknis klausia: koks skaičius pakeltas duoda šį rezultatą?", "n-tojo laipsnio šaknis yra skaičius, kurio n-tasis laipsnis lygus duotajam.", ["laipsnis", "rodiklis"]),
        concept("rodiklis", "Rodiklis", "Skaičius prie laipsnio ženklo.", "Rodiklis nurodo kartojimų skaičių.", "Rodiklis parodo, kiek kartų daugiklis kartojamas.", ["laipsnis", "logaritmas"]),
        concept("logaritmas", "Logaritmas", "Laipsniavimo atvirkštinė operacija.", "Logaritmas klausia, kokį rodiklį reikia parinkti.", "log_a b = c, jei a^c = b.", ["laipsnis", "rodiklis"], ["log_a b = c"]),
        concept("sinusas", "Sinusas", "Trigonometrinis santykis arba kampo funkcija.", "Jis matuoja vertikalią dalį vienetiniame apskritime.", "Sinusas sieja kampą su priešpriešine kraštine.", ["kosinusas", "tangentas"]),
        concept("kosinusas", "Kosinusas", "Trigonometrinis santykis.", "Jis matuoja horizontalią dalį.", "Kosinusas sieja kampą su gretimąja kraštine.", ["sinusas", "tangentas"]),
        concept("tangentas", "Tangentas", "Santykis tarp priešpriešinės ir gretimosios kraštinių.", "Tangentas padeda nagrinėti statųjį trikampį ir kryptį.", "tan α = sin α / cos α.", ["sinusas", "kosinusas"], ["tan α"]),
        concept("isvestine", "Išvestinė", "Momentinio kitimo dydis.", "Išvestinė sako, kiek stačiai kyla grafikas.", "Išvestinė aprašo funkcijos kitimo greitį.", ["funkcija", "grafikas"]),
        concept("integralas", "Integralas", "Suminis dydis arba plotas po grafiku.", "Integralas sujungia daug mažų dalių į visumą.", "Integralas apibrėžia kaupimą ir plotą.", ["isvestine", "pirmykste-funkcija"]),
        concept("pirmykste-funkcija", "Pirmykštė funkcija", "Funkcija, kurios išvestinė yra duotoji.", "Tai integralo kelio atgal idėja.", "F yra f pirmykštė, jei F'=f.", ["integralas", "isvestine"]),
        concept("kompleksinis-skaicius", "Kompleksinis skaičius", "Skaičius a+bi.", "Kompleksiniai skaičiai išplečia realiųjų skaičių aibę.", "c = a + bi, kur i² = -1.", ["modulis", "argumentas-kompleksinis"]),
        concept("modulis", "Modulis", "Atstumas nuo nulio.", "Modulis rodo dydį be ženklo.", "Kompleksinio skaičiaus modulis yra atstumas nuo koordinačių pradžios.", ["kompleksinis-skaicius"]),
        concept("tikimybinis-skirstinys", "Tikimybinis skirstinys", "Galimų rezultatų ir jų tikimybių lentelė.", "Skirstinys padeda matyti visą tikimybių paveikslą.", "Tikimybinis skirstinys nurodo reikšmes ir jų tikimybes.", ["tikimybe", "duomenys"]),
    ]


def build_theory(topic: dict[str, Any], concepts: list[dict[str, Any]], formulas: list[dict[str, Any]]) -> list[dict[str, Any]]:
    topic_title = topic["title"]
    focus = topic["focus"]
    core_ids = [c["id"] for c in concepts[:4]]
    first = concepts[0]["id"]
    second = concepts[1]["id"]
    third = concepts[2]["id"] if len(concepts) > 2 else first
    fourth = concepts[3]["id"] if len(concepts) > 3 else second
    formula_id = formulas[0]["id"] if formulas else None
    sections = [
        {
            "id": f"{topic['id']}-ivadas",
            "title": "Įvadas",
            "blocks": [
                paragraph(f"{topic_title} yra tema, kurioje mokomasi atpažinti pagrindinius {focus} modelius ir juos taikyti skaičiavimuose, tekste bei brėžiniuose."),
                paragraph(f"Šioje temoje svarbiausia nuolat matyti ryšį tarp sąvokų [[{first}|{concepts[0]['title']}]], [[{second}|{concepts[1]['title']}]], [[{third}|{concepts[2]['title']}]] ir uždavinių sprendimo."),
            ],
        },
        {
            "id": f"{topic['id']}-svarbiausios-savokos",
            "title": "Svarbiausios sąvokos",
            "blocks": [
                definition(concepts[0]["id"], concepts[0]["shortDefinition"]),
                definition(concepts[1]["id"], concepts[1]["shortDefinition"]),
                definition(concepts[2]["id"], concepts[2]["shortDefinition"]),
                note(f"Jei sprendžiant kyla abejonė, pirmiausia tikrink, ar aiškiai supranti [[{first}|{concepts[0]['title']}]] ir [[{fourth}|{concepts[3]['title']}]]."),
            ],
        },
        {
            "id": f"{topic['id']}-taisyklės",
            "title": "Svarbiausios taisyklės",
            "blocks": [
                theorem(f"{topic_title} sprendimuose visada pirmiausia atskirk duomenis nuo ieškomo dydžio, o tada pasirink tinkamą modelį."),
                property_block(f"Jei užduotyje pasirodo [[{third}|{concepts[2]['title']}]] ar [[{fourth}|{concepts[3]['title']}]], dažnai verta rašyti ryšį simboliais prieš skaičiuojant."),
                formula_block(formula_id, formulas[0]["latex"]) if formula_id else note("Šioje temoje nėra vienos dominuojančios formulės."),
            ],
        },
        {
            "id": f"{topic['id']}-strategija",
            "title": "Sprendimo strategija",
            "blocks": [
                method("1. Perskaityk užduotį ir pažymėk, kokie dydžiai žinomi. 2. Nustatyk, kuri sąvoka čia svarbiausia. 3. Užrašyk veiksmus arba ryšį. 4. Patikrink rezultatą kitaip arba atgaliniu skaičiavimu."),
                warning("Dažna klaida yra imti skaičiuoti per anksti ir neįvardyti, ką reiškia gauta reikšmė."),
            ],
        },
        {
            "id": f"{topic['id']}-rysys",
            "title": "Ryšys su kitomis temomis",
            "blocks": [
                paragraph(f"Ši tema remiasi ankstesnėmis žiniomis iš kitų metų: skaičiavimu, reiškinių pertvarkymu, figūrų savybėmis ar duomenų skaitymu. Ji ruošia kelią tolimesnėms temoms, kuriose reikia daugiau bendro modelio ir tikslesnio argumentavimo."),
            ],
        },
    ]
    return sections


def build_examples(topic: dict[str, Any], concepts: list[dict[str, Any]], formulas: list[dict[str, Any]]) -> list[dict[str, Any]]:
    title = topic["title"]
    seed = stable_rng(topic["id"], "examples")
    if topic["kind"] == "numbers":
        return [
            make_example(f"{topic['id']}-exmp-1", "Skaičiaus įvertinimas", "easy", f"{title}: rask 15 % nuo 80.", [concepts[5]["id"], concepts[6]["id"]], [{"text": "15 % reiškia 15/100.", "latex": r"80 \cdot \frac{15}{100}"}, {"text": "Apskaičiuojame.", "latex": "12"}], "12"),
            make_example(f"{topic['id']}-exmp-2", "Santykio supaprastinimas", "easy", "Supaprastink santykį 18:24.", [concepts[6]["id"], concepts[7]["id"]], [{"text": "Padalijame abu narius iš 6.", "latex": r"18:24 = 3:4"}], "3:4"),
            make_example(f"{topic['id']}-exmp-3", "Trupmena į procentus", "medium", "Paversk 3/4 procentais.", [concepts[4]["id"], concepts[5]["id"]], [{"text": "Padaliname skaitiklį iš vardiklio.", "latex": r"\frac{3}{4}=0.75"}, {"text": "Padauginame iš 100 %.", "latex": r"0.75=75\%"}], "75%"),
            make_example(f"{topic['id']}-exmp-4", "Daliklių paieška", "medium", "Išvardyk 12 daliklius.", [concepts[10]["id"], concepts[11]["id"]], [{"text": "Ieškome porų, kurių sandauga 12.", "latex": "1\\cdot12, 2\\cdot6, 3\\cdot4"}, {"text": "Parašome daliklius.", "latex": "1, 2, 3, 4, 6, 12"}], "1, 2, 3, 4, 6, 12"),
            make_example(f"{topic['id']}-exmp-5", "Apvalinimas", "hard", "Suapvalink 19.86 iki vienetų.", [concepts[8]["id"]], [{"text": "Žiūrime į dešimtąsias.", "latex": "19.86"}, {"text": "Kadangi 0.86 >= 0.5, keliame į viršų.", "latex": "20"}], "20"),
        ]
    if topic["kind"] == "algebra":
        return [
            make_example(f"{topic['id']}-exmp-1", "Reiškinio sutvarkymas", "easy", "Supaprastink 3x + 2x - x.", [concepts[1]["id"], concepts[2]["id"]], [{"text": "Sudedame koeficientus.", "latex": r"3x+2x-x=(3+2-1)x"}, {"text": "Gauname.", "latex": "4x"}], "4x"),
            make_example(f"{topic['id']}-exmp-2", "Lygties sprendimas", "easy", "Išspręsk 2x + 5 = 17.", [concepts[3]["id"], concepts[5]["id"]], [{"text": "Atimame 5 iš abiejų pusių.", "latex": r"2x=12"}, {"text": "Daliname iš 2.", "latex": "x=6"}], "x=6"),
            make_example(f"{topic['id']}-exmp-3", "Nelygybė", "medium", "Išspręsk 3x - 4 < 11.", [concepts[4]["id"], concepts[5]["id"]], [{"text": "Pridedame 4.", "latex": r"3x<15"}, {"text": "Daliname iš 3.", "latex": "x<5"}], "x<5"),
            make_example(f"{topic['id']}-exmp-4", "Modeliavimas", "medium", "Bilietas kainuoja 4 eurus. Užrašyk lygtį, kai x bilietų kaina yra 20 eurų.", [concepts[6]["id"], concepts[7]["id"]], [{"text": "Bendra kaina yra 4x.", "latex": "4x=20"}, {"text": "Išsprendžiame.", "latex": "x=5"}], "x=5"),
            make_example(f"{topic['id']}-exmp-5", "Formulė", "hard", "Jei s = vt, rask t, kai s=96 ir v=12.", [concepts[7]["id"], concepts[8]["id"]], [{"text": "Išreiškiame t.", "latex": r"t=\frac{s}{v}"}, {"text": "Įstatome duomenis.", "latex": r"t=\frac{96}{12}=8"}], "t=8"),
        ]
    if topic["kind"] == "geometry":
        return [
            make_example(f"{topic['id']}-exmp-1", "Perimetras", "easy", "Stačiakampio kraštinės yra 8 ir 5. Rask perimetrą.", [concepts[3]["id"]], [{"text": "Perimetras yra kraštinių suma.", "latex": r"P=2(8+5)"}, {"text": "Apskaičiuojame.", "latex": "26"}], "26"),
            make_example(f"{topic['id']}-exmp-2", "Plotas", "easy", "Trikampio pagrindas 12, aukštinė 7. Rask plotą.", [concepts[4]["id"], concepts[2]["id"]], [{"text": "Naudojame trikampio ploto formulę.", "latex": r"S=\frac{1}{2}ah"}, {"text": "Įstatome.", "latex": r"S=\frac{1}{2}\cdot12\cdot7=42"}], "42"),
            make_example(f"{topic['id']}-exmp-3", "Pitagoro teorema", "medium", "Stačiajame trikampyje kraštinės yra 6 ir 8. Rask įžambinę.", [concepts[7]["id"], concepts[2]["id"]], [{"text": "Taikome Pitagoro teoremą.", "latex": r"c^2=6^2+8^2"}, {"text": "Randame c.", "latex": r"c=\sqrt{100}=10"}], "10"),
            make_example(f"{topic['id']}-exmp-4", "Panašumas", "medium", "Dviejų panašių trikampių kraštinių santykis 2:5. Jei mažesnioji kraštinė 4, kokia atitinkama didesnioji?", [concepts[8]["id"], concepts[9]["id"]], [{"text": "Padauginame iš 5/2.", "latex": r"4\cdot\frac{5}{2}"}, {"text": "Apskaičiuojame.", "latex": "10"}], "10"),
            make_example(f"{topic['id']}-exmp-5", "Koordinatės", "hard", "Rask atstumą tarp taškų A(1,2) ir B(4,6).", [concepts[12]["id"], concepts[13]["id"]], [{"text": "Naudojame atstumo formulę.", "latex": r"d=\sqrt{(4-1)^2+(6-2)^2}"}, {"text": "Skaičiuojame.", "latex": r"d=\sqrt{25}=5"}], "5"),
        ]
    if topic["kind"] == "data":
        return [
            make_example(f"{topic['id']}-exmp-1", "Vidurkis", "easy", "Rask skaičių 4, 6, 10 vidurkį.", [concepts[3]["id"]], [{"text": "Sudedame duomenis.", "latex": "4+6+10=20"}, {"text": "Padaliname iš 3.", "latex": "20/3"}], "20/3"),
            make_example(f"{topic['id']}-exmp-2", "Mediana", "easy", "Rask medianą duomenų 3, 9, 2, 7, 5.", [concepts[4]["id"]], [{"text": "Surikiuojame.", "latex": "2, 3, 5, 7, 9"}, {"text": "Vidurinė reikšmė.", "latex": "5"}], "5"),
            make_example(f"{topic['id']}-exmp-3", "Tikimybė", "medium", "Kauliuko iškritimo 6 tikimybė?", [concepts[7]["id"], concepts[8]["id"]], [{"text": "Palanki baigtis viena.", "latex": r"P=\frac{1}{6}"}, {"text": "Visos baigtys šešios.", "latex": r"\frac{1}{6}"}], "1/6"),
            make_example(f"{topic['id']}-exmp-4", "Moda", "medium", "Rask modą: 2, 4, 4, 5, 7, 4, 8.", [concepts[5]["id"]], [{"text": "Pasikartoja daugiausia 4.", "latex": "4"}], "4"),
            make_example(f"{topic['id']}-exmp-5", "Sklaida", "hard", "Palygink duomenų aibes A: 5, 5, 5, 5 ir B: 1, 3, 5, 7.", [concepts[6]["id"]], [{"text": "Abi turi tą patį vidurkį, bet B labiau išsibarstę.", "latex": "B turi didesnę sklaidą"}], "B turi didesnę sklaidą"),
        ]
    if topic["kind"] == "functions":
        return [
            make_example(f"{topic['id']}-exmp-1", "Reikšmės radimas", "easy", "Jei f(x)=2x+1, rask f(4).", [concepts[0]["id"], concepts[1]["id"]], [{"text": "Įrašome 4.", "latex": r"f(4)=2\cdot4+1"}, {"text": "Apskaičiuojame.", "latex": "9"}], "9"),
            make_example(f"{topic['id']}-exmp-2", "Nulis", "easy", "Rask funkcijos f(x)=x-7 nulį.", [concepts[5]["id"]], [{"text": "Sprendžiame f(x)=0.", "latex": r"x-7=0"}, {"text": "Gauname.", "latex": "x=7"}], "7"),
            make_example(f"{topic['id']}-exmp-3", "Apibrėžimo sritis", "medium", "Kokia yra f(x)=1/(x-2) apibrėžimo sritis?", [concepts[2]["id"]], [{"text": "Vardiklis negali būti 0.", "latex": r"x-2\neq 0"}, {"text": "Todėl x negali būti 2.", "latex": r"D(f)=\mathbb{R}\setminus\{2\}"}], "R\\{2}"),
            make_example(f"{topic['id']}-exmp-4", "Didėjimas", "medium", "Jei f(x)=3x-5, ar funkcija didėja?", [concepts[6]["id"], concepts[7]["id"]], [{"text": "Nuolydis teigiamas.", "latex": "3>0"}, {"text": "Funkcija didėja.", "latex": "taip"}], "taip"),
            make_example(f"{topic['id']}-exmp-5", "Grafikas", "hard", "Tiesė kerta y ašį taške (0; -2) ir turi nuolydį 4. Užrašyk lygtį.", [concepts[8]["id"], concepts[4]["id"]], [{"text": "Tiesės lygtis y=ax+b.", "latex": "y=4x-2"}], "y=4x-2"),
        ]
    if topic["kind"] == "quadratic":
        return [
            make_example(f"{topic['id']}-exmp-1", "Viršūnė", "easy", "Rask viršūnės x koordinatę funkcijai x²-4x+1.", [concepts[0]["id"], concepts[2]["id"]], [{"text": "Naudojame formulę.", "latex": r"x_v=-\frac{b}{2a}"}, {"text": "Gauname.", "latex": "2"}], "2"),
            make_example(f"{topic['id']}-exmp-2", "Diskriminantas", "easy", "Rask D funkcijai x²-5x+6.", [concepts[4]["id"]], [{"text": "D=b²-4ac.", "latex": r"D=(-5)^2-4\cdot1\cdot6"}, {"text": "Skaičiuojame.", "latex": "1"}], "1"),
            make_example(f"{topic['id']}-exmp-3", "Šaknys", "medium", "Rask x²-7x+10 šaknis.", [concepts[5]["id"], concepts[4]["id"]], [{"text": "Išskaidome.", "latex": r"(x-5)(x-2)=0"}, {"text": "Šaknys.", "latex": "x=2 ir x=5"}], "x=2 ir x=5"),
            make_example(f"{topic['id']}-exmp-4", "Parabolė", "medium", "Jei a>0, kaip atsiveria parabola?", [concepts[1]["id"]], [{"text": "Teigiamas a reiškia atsivėrimą aukštyn.", "latex": "aukštyn"}], "aukštyn"),
            make_example(f"{topic['id']}-exmp-5", "Ekstremumas", "hard", "Funkcijai 2x²-8x+3 rask minimumo reikšmę.", [concepts[2]["id"], concepts[3]["id"]], [{"text": "Viršūnės x koordinatė.", "latex": "x=2"}, {"text": "Įstatome.", "latex": "f(2)=-5"}], "-5"),
        ]
    if topic["kind"] == "systems":
        return [
            make_example(f"{topic['id']}-exmp-1", "Sistema", "easy", "Išspręsk sistemą x+y=10, x-y=2.", [concepts[3]["id"]], [{"text": "Sudedame lygtis.", "latex": "2x=12"}, {"text": "Gauname.", "latex": "x=6"}], "x=6"),
            make_example(f"{topic['id']}-exmp-2", "Įstatymas", "easy", "Jei x=4 ir 3x+2y=16, rask y.", [concepts[0]["id"], concepts[2]["id"]], [{"text": "Įstatome x.", "latex": "12+2y=16"}, {"text": "Gauname.", "latex": "y=2"}], "2"),
            make_example(f"{topic['id']}-exmp-3", "Grafinis sprendimas", "medium", "Ką reiškia tiesių susikirtimo taškas?", [concepts[4]["id"], concepts[9]["id"]], [{"text": "Tai bendras abiejų lygčių sprendinys.", "latex": "susikirtimas"}], "bendras sprendinys"),
            make_example(f"{topic['id']}-exmp-4", "Eliminacija", "medium", "Sistemoje x+y=8 ir x-y=2 rask y.", [concepts[5]["id"]], [{"text": "Atimame antrą lygtį iš pirmos.", "latex": "2y=6"}, {"text": "Gauname.", "latex": "y=3"}], "3"),
            make_example(f"{topic['id']}-exmp-5", "Modeliavimas", "hard", "Du bilietai ir vienas saldainis kainuoja 11 eurų, o trys bilietai ir vienas saldainis – 17 eurų. Kiek kainuoja bilietas?", [concepts[8]["id"]], [{"text": "Sudarykime sistemą.", "latex": r"\begin{cases} 2b+s=11 \\ 3b+s=17 \end{cases}"}, {"text": "Atimame.", "latex": "b=6"}], "6"),
        ]
    if topic["kind"] == "analysis":
        focus = topic["focus"]
        if "sek" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Seka", "easy", "Jei a_n=2n+1, rask a_4.", [concepts[0]["id"]], [{"text": "Įstatome n=4.", "latex": "a_4=9"}], "9"),
                make_example(f"{topic['id']}-exmp-2", "Progresija", "easy", "Jei a1=4 ir d=3, rask a5.", [concepts[1]["id"]], [{"text": "Naudojame formulę.", "latex": "a_5=16"}], "16"),
                make_example(f"{topic['id']}-exmp-3", "Indukcija", "medium", "Ką tikriname indukcijos pradžioje?", [concepts[3]["id"]], [{"text": "Pradinį teiginį.", "latex": "bazė"}], "pradinis teiginys"),
                make_example(f"{topic['id']}-exmp-4", "Geometrinė progresija", "medium", "Jei q=2, kiek kartų padidėja seka?", [concepts[2]["id"]], [{"text": "Kiekvienas narys dvigubėja.", "latex": "2"}], "2 kartus"),
                make_example(f"{topic['id']}-exmp-5", "Formulė", "hard", "Užrašyk bendrąją aritmetinės progresijos formulę.", [concepts[1]["id"]], [{"text": "Naudojame a_n=a_1+(n-1)d.", "latex": r"a_n=a_1+(n-1)d"}], "a_n=a_1+(n-1)d"),
            ]
        if "rodik" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Laipsnis", "easy", "Apskaičiuok 3^4.", [concepts[4]["id"]], [{"text": "3·3·3·3.", "latex": "81"}], "81"),
                make_example(f"{topic['id']}-exmp-2", "Logaritmas", "easy", "Koks log_2 16?", [concepts[7]["id"]], [{"text": "2^4=16.", "latex": "4"}], "4"),
                make_example(f"{topic['id']}-exmp-3", "Taisyklė", "medium", "Sutvarkyk a²·a³.", [concepts[4]["id"]], [{"text": "Sudedame rodiklius.", "latex": r"a^5"}], "a^5"),
                make_example(f"{topic['id']}-exmp-4", "Atvirkštinė operacija", "medium", "Kas yra laipsniavimo atvirkštinė operacija?", [concepts[7]["id"]], [{"text": "Logaritmas.", "latex": "logaritmas"}], "logaritmas"),
                make_example(f"{topic['id']}-exmp-5", "Augimas", "hard", "Jei skaičius kas kartą dauginamas iš 1.5, kokia tai progresija?", [concepts[2]["id"]], [{"text": "Geometrinė.", "latex": "q=1.5"}], "geometrinė progresija"),
            ]
        if "trig" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Sinusas", "easy", "Jei priešpriešinė 5, įžambinė 13, rask sinusą.", [concepts[8]["id"]], [{"text": "5/13.", "latex": r"\sin\alpha=5/13"}], "5/13"),
                make_example(f"{topic['id']}-exmp-2", "Kosinusas", "easy", "Jei gretimoji 12, įžambinė 13, rask kosinusą.", [concepts[9]["id"]], [{"text": "12/13.", "latex": r"\cos\alpha=12/13"}], "12/13"),
                make_example(f"{topic['id']}-exmp-3", "Tangentas", "medium", "Jei priešpriešinė 3, gretimoji 4, rask tangento reikšmę.", [concepts[10]["id"]], [{"text": "3/4.", "latex": r"\tan\alpha=3/4"}], "3/4"),
                make_example(f"{topic['id']}-exmp-4", "Santykiai", "medium", "Ką rodo trigonometriniai santykiai stačiajame trikampyje?", [concepts[8]["id"], concepts[9]["id"], concepts[10]["id"]], [{"text": "Kraštinių santykį.", "latex": "santykiai"}], "kraštinių santykius"),
                make_example(f"{topic['id']}-exmp-5", "Kampas", "hard", "Jei sin α = 1/2, koks dažnai naudojamas kampo pavyzdys?", [concepts[8]["id"]], [{"text": "30°.", "latex": "30^\\circ"}], "30°"),
            ]
        if "isvest" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Išvestinė", "easy", "Rask x² išvestinę.", [concepts[11]["id"]], [{"text": "2x.", "latex": "2x"}], "2x"),
                make_example(f"{topic['id']}-exmp-2", "Tiesė", "easy", "Ką reiškia teigiama išvestinė?", [concepts[11]["id"]], [{"text": "Funkcija didėja.", "latex": "didėja"}], "funkcija didėja"),
                make_example(f"{topic['id']}-exmp-3", "Galios taisyklė", "medium", "Rask (x³)'", [concepts[11]["id"]], [{"text": "3x².", "latex": "3x^2"}], "3x²"),
                make_example(f"{topic['id']}-exmp-4", "Sąlygos", "medium", "Kada funkcija turi maksimumą pagal išvestinę?", [concepts[11]["id"]], [{"text": "Kai išvestinė keičia ženklą iš + į -.", "latex": "maksimumas"}], "kai išvestinė keičia ženklą iš + į -"),
                make_example(f"{topic['id']}-exmp-5", "Pirmykštė", "hard", "Kokia funkcija yra x² išvestinės pirmykštė?", [concepts[12]["id"], concepts[13]["id"]], [{"text": "x³/3 + C.", "latex": r"\frac{x^3}{3}+C"}], "x³/3 + C"),
            ]
        if "integral" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Integralas", "easy", "Rask ∫1 dx nuo 0 iki 4.", [concepts[12]["id"]], [{"text": "Tiesiog ilgis.", "latex": "4"}], "4"),
                make_example(f"{topic['id']}-exmp-2", "Pirmykštė", "easy", "Rask ∫x dx formą.", [concepts[13]["id"]], [{"text": "x²/2 + C.", "latex": r"\frac{x^2}{2}+C"}], "x²/2 + C"),
                make_example(f"{topic['id']}-exmp-3", "Ribos", "medium", "Ką reiškia integralas grafiškai?", [concepts[12]["id"]], [{"text": "Plotą po grafiku.", "latex": "plotas"}], "plotą po grafiku"),
                make_example(f"{topic['id']}-exmp-4", "Taikymas", "medium", "Jei f(x)=2x, kokia pirmykštė?", [concepts[13]["id"]], [{"text": "x² + C.", "latex": "x^2 + C"}], "x² + C"),
                make_example(f"{topic['id']}-exmp-5", "Kaupimas", "hard", "Kodėl integralas siejamas su kaupimu?", [concepts[12]["id"]], [{"text": "Daug mažų dalių sumuojamos į visumą.", "latex": "kaupimas"}], "dėl kaupimo"),
            ]
        if "kompleks" in focus:
            return [
                make_example(f"{topic['id']}-exmp-1", "Modulis", "easy", "Rask |3+4i|.", [concepts[14]["id"], concepts[15]["id"]], [{"text": "Pitagoro idėja.", "latex": "5"}], "5"),
                make_example(f"{topic['id']}-exmp-2", "Vienetas i", "easy", "Kiek lygu i²?", [concepts[14]["id"]], [{"text": "-1.", "latex": "-1"}], "-1"),
                make_example(f"{topic['id']}-exmp-3", "Forma", "medium", "Užrašyk skaičių su a=2, b=-5.", [concepts[14]["id"]], [{"text": "2-5i.", "latex": "2-5i"}], "2-5i"),
                make_example(f"{topic['id']}-exmp-4", "Modulis", "medium", "Ką reiškia modulis kompleksiškam skaičiui?", [concepts[15]["id"]], [{"text": "Atstumą nuo nulio.", "latex": "atstumas"}], "atstumą nuo nulio"),
                make_example(f"{topic['id']}-exmp-5", "Aritmetika", "hard", "Apskaičiuok (1+2i)+(3-4i).", [concepts[14]["id"]], [{"text": "Sudedame dalis.", "latex": "4-2i"}], "4-2i"),
            ]
        return [
            make_example(f"{topic['id']}-exmp-1", "Seka", "easy", "Jei a_n=2n+1, rask a_4.", [concepts[0]["id"]], [{"text": "Įstatome n=4.", "latex": "9"}], "9"),
            make_example(f"{topic['id']}-exmp-2", "Laipsnis", "easy", "Apskaičiuok 2^5.", [concepts[4]["id"]], [{"text": "32.", "latex": "32"}], "32"),
            make_example(f"{topic['id']}-exmp-3", "Logaritmas", "medium", "Koks log_2 8?", [concepts[7]["id"]], [{"text": "3.", "latex": "3"}], "3"),
            make_example(f"{topic['id']}-exmp-4", "Trigonometrinis santykis", "medium", "Stačiajame trikampyje priešpriešinė 3, įžambinė 5. Rask sinusą.", [concepts[8]["id"], concepts[9]["id"]], [{"text": "3/5.", "latex": "3/5"}], "3/5"),
            make_example(f"{topic['id']}-exmp-5", "Integralas", "hard", "Rask ∫2x dx.", [concepts[12]["id"], concepts[13]["id"]], [{"text": "x² + C.", "latex": r"x^2 + C"}], "x² + C"),
        ]
    return [
        make_example(f"{topic['id']}-exmp-1", "Seka", "easy", "Jei a_n=2n+1, rask a_4.", [concepts[0]["id"], concepts[1]["id"]], [{"text": "Įstatome n=4.", "latex": "a_4=9"}], "9"),
        make_example(f"{topic['id']}-exmp-2", "Laipsnis", "easy", "Apskaičiuok 2^5.", [concepts[4]["id"]], [{"text": "Kartojame daugybą.", "latex": "32"}], "32"),
        make_example(f"{topic['id']}-exmp-3", "Logaritmas", "medium", "Koks log_2 8?", [concepts[7]["id"]], [{"text": "2^3=8.", "latex": "3"}], "3"),
        make_example(f"{topic['id']}-exmp-4", "Trigonometrinis santykis", "medium", "Stačiajame trikampyje priešpriešinė 3, įžambinė 5. Rask sinusą.", [concepts[8]["id"], concepts[9]["id"]], [{"text": "sin = priešpriešinė / įžambinė.", "latex": r"\sin \alpha = 3/5"}], "3/5"),
        make_example(f"{topic['id']}-exmp-5", "Integralas", "hard", "Rask \u222b 2x dx.", [concepts[12]["id"], concepts[13]["id"]], [{"text": "Pirmykštė funkcija.", "latex": r"\int 2x\,dx = x^2 + C"}], "x² + C"),
    ]


def build_exercises(topic: dict[str, Any], concepts: list[dict[str, Any]], formulas: list[dict[str, Any]]) -> list[dict[str, Any]]:
    tid = topic["id"]
    grade = topic["grade"]
    seed = stable_rng(tid, "exercises")
    exercises: list[dict[str, Any]] = []

    def add(ex: dict[str, Any]) -> None:
        exercises.append(ex)

    if topic["kind"] == "numbers":
        values = [(12, 15), (18, 24), (36, 48), (45, 60), (72, 90)]
        for i, (a, b) in enumerate(values, 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "multipleChoice",
                f"Kuris skaičius dalijasi iš {a} ir {b}?",
                mc_answer([(f"a{i}", str(a)), (f"b{i}", str(a + 1)), (f"c{i}", str(b + 1))], f"a{i}"),
                [hint(1, "Žiūrėk į dalumo požymius.", 0.1, [concepts[10]["id"], concepts[11]["id"]]), hint(2, "Pabandyk padalyti be liekanos.", 0.12)],
                [{"text": "Tikriname dalumą.", "latex": f"{a} \\mid {a}"}],
                str(a),
                [concepts[10]["id"], concepts[11]["id"]],
                [],
                35,
            ))
        for i, n in enumerate([24, 36, 48, 60, 72], 6):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                f"Išvardyk vieną {n} kartotinį, didesnį už {n}.",
                numeric_answer(n * 2),
                [hint(1, "Kartotinis yra n·k.", 0.1, [concepts[9]["id"]]), hint(2, "Paimk k=2.", 0.12)],
                [{"text": "Dauginame iš 2.", "latex": str(n * 2)}],
                str(n * 2),
                [concepts[9]["id"]],
                [],
                35,
            ))
        frac_pairs = [(1, 2, "50%"), (3, 4, "75%"), (2, 5, "40%"), (7, 10, "70%"), (9, 20, "45%")]
        for idx, (p, q, pct) in enumerate(frac_pairs, 11):
            add(exercise(
                f"{tid}-ex-{idx:03d}",
                tid,
                grade,
                "medium",
                "expressionInput",
                f"Paversk trupmeną {p}/{q} procentais.",
                expression_answer(pct.replace("%", "\\%"), [pct]),
                [hint(1, "Padalyk skaitiklį iš vardiklio.", 0.1, [concepts[4]["id"], concepts[5]["id"]]), hint(2, "Padaugink iš 100.", 0.12)],
                [{"text": "Dalijame ir dauginame iš 100.", "latex": f"{p}/{q} = {pct}"}],
                pct,
                [concepts[4]["id"], concepts[5]["id"]],
                [],
                60,
            ))
        for idx, (a, b) in enumerate([(18, 24), (30, 45), (42, 56), (64, 80), (84, 96)], 16):
            g = math.gcd(a, b)
            add(exercise(
                f"{tid}-ex-{idx:03d}",
                tid,
                grade,
                "medium",
                "numericInput",
                f"Sutrumpink santykį {a}:{b}. Užrašyk pirmąjį nario skaičių.",
                numeric_answer(a // g),
                [hint(1, "Padalink abu skaičius iš bendro daliklio.", 0.1, [concepts[6]["id"], concepts[7]["id"]]), hint(2, f"Didžiausias bendras daliklis yra {g}.", 0.12)],
                [{"text": "Daliname iš BDK.", "latex": f"{a}:{b} = {a//g}:{b//g}"}],
                str(a // g),
                [concepts[6]["id"], concepts[7]["id"]],
                [],
                55,
            ))
        add(exercise(
            f"{tid}-ex-021",
            tid,
            grade,
            "hard",
            "numericInput",
            "Mokinio planas: 15 min. skaitymo, 20 min. pratybų ir 5 min. pertraukos. Kiek procentų viso laiko sudaro pratybos?",
            numeric_answer(50),
            [hint(1, "Susumuok laiką.", 0.1, [concepts[5]["id"]]), hint(2, "20 iš 40 yra pusė.", 0.12)],
            [{"text": "Bendra trukmė 40 min.", "latex": "20/40=1/2"}, {"text": "Paverčiame į procentus.", "latex": "50\\%"}],
            "50%",
            [concepts[5]["id"], concepts[6]["id"]],
            [],
            85,
        ))
    elif topic["kind"] == "algebra":
        templates = [
            ("2x+3x-4x", "1x"),
            ("7a-2a+a", "6a"),
            ("5y+2-3y+4", "2y+6"),
            ("4m-3m+8", "m+8"),
            ("9p-4+p-1", "10p-5"),
        ]
        for i, (expr, ans) in enumerate(templates, 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "expressionInput",
                f"Sutvarkyk reiškinį: {expr}.",
                expression_answer(ans.replace(" ", "")),
                [hint(1, "Sujunk panašius dėmenis.", 0.1, [concepts[1]["id"], concepts[2]["id"]])],
                [{"text": "Sujungiame panašius narius.", "latex": ans}],
                ans,
                [concepts[1]["id"], concepts[2]["id"]],
                [],
                45,
            ))
        for i, (lhs, sol) in enumerate([("x+5=12", 7), ("3x=18", 6), ("2x-4=10", 7), ("5x+2=27", 5)], 6):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                f"Išspręsk lygtį: {lhs}.",
                numeric_answer(sol),
                [hint(1, "Perkelk pastovius narius į kitą pusę.", 0.1, [concepts[3]["id"], concepts[5]["id"]]), hint(2, "Atskirk x.", 0.12)],
                [{"text": "Atliekame atvirkštinius veiksmus.", "latex": f"x={sol}"}],
                str(sol),
                [concepts[3]["id"], concepts[5]["id"]],
                [],
                60,
            ))
        inequalities = [("x-3<4", 7, "<"), ("2x+1>=9", 4, ">="), ("5-x>1", 4, "<"), ("3x-6<=0", 2, "<=")]
        for i, (stmt, sol, sign) in enumerate(inequalities, 10):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "medium",
                "numericInput",
                f"Išspręsk nelygybę: {stmt}. Užrašyk ribinį skaičių.",
                numeric_answer(sol),
                [hint(1, "Pirmiausia pertvarkyk kaip lygtį.", 0.1, [concepts[4]["id"], concepts[5]["id"]]), hint(2, "Jei daugini iš neigiamo, ženklas apsiverčia.", 0.12)],
                [{"text": "Randame ribinį tašką.", "latex": f"x {sign} {sol}"}],
                str(sol),
                [concepts[4]["id"], concepts[5]["id"]],
                [],
                75,
            ))
        add(exercise(
            f"{tid}-ex-014",
            tid,
            grade,
            "hard",
            "multipleChoice",
            "Kuris užrašas geriausiai modeliuoja: 'už tris bilietus sumokėta 18 eurų'? ",
            mc_answer([
                ("a", "3x = 18"),
                ("b", "x + 3 = 18"),
                ("c", "18x = 3"),
                ("d", "x - 3 = 18"),
            ], "a"),
            [hint(1, "Ieškok ryšio tarp kiekio ir kainos.", 0.1, [concepts[6]["id"], concepts[7]["id"]]), hint(2, "Vienas bilietas kainuoja 6.", 0.12)],
            [{"text": "Bendra kaina lygi 3x.", "latex": "3x=18"}],
            "3x = 18",
            [concepts[6]["id"], concepts[7]["id"]],
            [],
            70,
        ))
    elif topic["kind"] == "geometry":
        pairs = [
            ("Stačiakampio kraštinės 7 ir 9. Rask perimetrą.", 32),
            ("Kvadrato kraštinė 6. Rask perimetrą.", 24),
            ("Trikampio kraštinės 5, 7 ir 8. Rask perimetrą.", 20),
            ("Lygiagretainio kraštinės 8 ir 5. Rask perimetrą.", 26),
        ]
        for i, (stmt, ans) in enumerate(pairs, 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                stmt,
                numeric_answer(ans),
                [hint(1, "Sudedame kraštines.", 0.1, [concepts[3]["id"]]), hint(2, "Stačiakampiui dauginu iš 2.", 0.12)],
                [{"text": "Skaičiuojame perimetrą.", "latex": str(ans)}],
                str(ans),
                [concepts[3]["id"]],
                [],
                40,
            ))
        area_cases = [("Stačiakampis 8x5", 40), ("Trikampis pagrindas 10, aukštinė 6", 30), ("Kvadratas kraštinė 7", 49), ("Apskritimas r=5, pi~3.14", 78.5)]
        for i, (stmt, ans) in enumerate(area_cases, 5):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "medium",
                "numericInput",
                f"Rask plotą: {stmt}.",
                numeric_answer(ans, 0.01 if isinstance(ans, float) else 0),
                [hint(1, "Pasirink tinkamą formulę.", 0.1, [concepts[4]["id"], concepts[5]["id"]]), hint(2, "Plotas matuojamas kvadratiniais vienetais.", 0.12)],
                [{"text": "Taikome formulę.", "latex": str(ans)}],
                str(ans),
                [concepts[4]["id"], concepts[5]["id"]],
                [],
                65,
            ))
        add(exercise(
            f"{tid}-ex-009",
            tid,
            grade,
            "medium",
            "multipleChoice",
            "Kuri kraštinė stačiajame trikampyje yra įžambinė?",
            mc_answer([("a", "Trumpiausia"), ("b", "Priešinga stačiajam kampui"), ("c", "Kraštinė prie pagrindo"), ("d", "Bet kuri")], "b"),
            [hint(1, "Ji yra prieš stačiajį kampą.", 0.1, [concepts[7]["id"]])],
            [{"text": "Įžambinė yra prieš 90° kampą.", "latex": "įžambinė"}],
            "Priešinga stačiajam kampui",
            [concepts[7]["id"]],
            [],
            45,
        ))
        add(exercise(
            f"{tid}-ex-010",
            tid,
            grade,
            "hard",
            "numericInput",
            "Stačiajame trikampyje vienas statinis 9, įžambinė 15. Rask kitą statinį.",
            numeric_answer(12),
            [hint(1, "Taikome Pitagoro teoremą.", 0.1, [concepts[7]["id"]]), hint(2, "Skaičiuojame 15²-9².", 0.12)],
            [{"text": "c²=a²+b².", "latex": r"15^2=9^2+x^2"}, {"text": "x=12.", "latex": "12"}],
            "12",
            [concepts[7]["id"]],
            [],
            95,
        ))
    elif topic["kind"] == "data":
        values = [(4, 6, 8), (5, 5, 10), (3, 7, 9), (1, 2, 3, 4)]
        add(exercise(
            f"{tid}-ex-001",
            tid,
            grade,
            "easy",
            "numericInput",
            "Rask skaičių 4, 6, 8 vidurkį.",
            numeric_answer(6),
            [hint(1, "Sudedame ir dalijame.", 0.1, [concepts[3]["id"]])],
            [{"text": "4+6+8=18.", "latex": "18/3=6"}],
            "6",
            [concepts[3]["id"]],
            [],
            35,
        ))
        add(exercise(
            f"{tid}-ex-002",
            tid,
            grade,
            "easy",
            "numericInput",
            "Rask medianą: 2, 9, 5, 1, 7.",
            numeric_answer(5),
            [hint(1, "Surikiuok duomenis.", 0.1, [concepts[4]["id"]])],
            [{"text": "1,2,5,7,9.", "latex": "5"}],
            "5",
            [concepts[4]["id"]],
            [],
            35,
        ))
        add(exercise(
            f"{tid}-ex-003",
            tid,
            grade,
            "medium",
            "multipleChoice",
            "Kuri reikšmė yra moda duomenų 3, 3, 4, 5, 3, 6?",
            mc_answer([("a", "3"), ("b", "4"), ("c", "5"), ("d", "6")], "a"),
            [hint(1, "Ieškok dažniausiai pasikartojančios reikšmės.", 0.1, [concepts[5]["id"]])],
            [{"text": "3 kartojasi tris kartus.", "latex": "3"}],
            "3",
            [concepts[5]["id"]],
            [],
            35,
        ))
        add(exercise(
            f"{tid}-ex-004",
            tid,
            grade,
            "medium",
            "numericInput",
            "Kokia tikimybė ištraukti širdį iš 52 kortų kaladės?",
            numeric_answer(1/4, 0.0001),
            [hint(1, "Širdžių yra 13.", 0.1, [concepts[7]["id"], concepts[8]["id"]]), hint(2, "13 iš 52.", 0.12)],
            [{"text": "P=13/52.", "latex": r"\frac{1}{4}"}],
            "1/4",
            [concepts[7]["id"], concepts[8]["id"]],
            [],
            55,
        ))
        add(exercise(
            f"{tid}-ex-005",
            tid,
            grade,
            "hard",
            "numericInput",
            "Duomenų aibės A: 2, 2, 2, 2 ir B: 0, 2, 4, 6. Kurios sklaida didesnė?",
            numeric_answer(2),
            [hint(1, "Žiūrėk į išsibarstymą.", 0.1, [concepts[6]["id"]])],
            [{"text": "B yra labiau išsibarstę.", "latex": "B"}],
            "B",
            [concepts[6]["id"]],
            [],
            70,
        ))
    elif topic["kind"] == "functions":
        for i, x in enumerate([2, 3, 4, 5, 6], 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                f"Jei f(x)=2x+1, rask f({x}).",
                numeric_answer(2 * x + 1),
                [hint(1, "Įstatyk x.", 0.1, [concepts[0]["id"], concepts[1]["id"]])],
                [{"text": "Skaičiuojame.", "latex": f"f({x})={2*x+1}"}],
                str(2 * x + 1),
                [concepts[0]["id"], concepts[1]["id"]],
                [],
                35,
            ))
        add(exercise(
            f"{tid}-ex-006",
            tid,
            grade,
            "easy",
            "numericInput",
            "Rask funkcijos f(x)=x-8 nulį.",
            numeric_answer(8),
            [hint(1, "Lygybė lygi nuliui.", 0.1, [concepts[5]["id"]])],
            [{"text": "x-8=0.", "latex": "x=8"}],
            "8",
            [concepts[5]["id"]],
            [],
            40,
        ))
        add(exercise(
            f"{tid}-ex-007",
            tid,
            grade,
            "medium",
            "multipleChoice",
            "Kuri iš šių funkcijų didėja?",
            mc_answer([("a", "y=-2x+1"), ("b", "y=3x-4"), ("c", "y=-x-7"), ("d", "y=5-x")], "b"),
            [hint(1, "Žiūrėk į teigiamą koeficientą prie x.", 0.1, [concepts[6]["id"], concepts[7]["id"]])],
            [{"text": "Teigiamas nuolydis reiškia didėjimą.", "latex": "y=3x-4"}],
            "y=3x-4",
            [concepts[6]["id"], concepts[7]["id"]],
            [],
            45,
        ))
        add(exercise(
            f"{tid}-ex-008",
            tid,
            grade,
            "medium",
            "numericInput",
            "Kokia yra f(x)=1/(x-2) apibrėžimo srities draudžiama reikšmė?",
            numeric_answer(2),
            [hint(1, "Vardiklis negali būti nulis.", 0.1, [concepts[2]["id"]])],
            [{"text": "x negali būti 2.", "latex": "x\\neq2"}],
            "2",
            [concepts[2]["id"]],
            [],
            50,
        ))
        add(exercise(
            f"{tid}-ex-009",
            tid,
            grade,
            "hard",
            "expressionInput",
            "Tiesės grafikas eina per tašką (0; -3) ir turi nuolydį 2. Užrašyk lygtį.",
            expression_answer("y=2x-3"),
            [hint(1, "Naudok y=ax+b.", 0.1, [concepts[8]["id"]]), hint(2, "b yra -3.", 0.12)],
            [{"text": "Įrašome nuolydį ir kirtimą.", "latex": "y=2x-3"}],
            "y=2x-3",
            [concepts[8]["id"], concepts[4]["id"]],
            [],
            80,
        ))
    elif topic["kind"] == "quadratic":
        qs = [
            ("x²-4x+1", 2),
            ("x²-6x+5", 3),
            ("2x²-8x+3", 2),
            ("x²+2x-3", -1),
        ]
        for i, (expr, xv) in enumerate(qs, 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                f"Funkcijai f(x)={expr} rask viršūnės x koordinatę.",
                numeric_answer(xv),
                [hint(1, "Naudok -b/(2a).", 0.1, [concepts[2]["id"], concepts[3]["id"]])],
                [{"text": "Skaičiuojame viršūnę.", "latex": f"x={xv}"}],
                str(xv),
                [concepts[2]["id"], concepts[3]["id"]],
                [],
                70,
            ))
        add(exercise(
            f"{tid}-ex-005",
            tid,
            grade,
            "easy",
            "numericInput",
            "Apskaičiuok diskriminantą lygties x²-5x+6.",
            numeric_answer(1),
            [hint(1, "D=b²-4ac.", 0.1, [concepts[4]["id"]])],
            [{"text": "25-24=1.", "latex": "1"}],
            "1",
            [concepts[4]["id"]],
            [],
            60,
        ))
        add(exercise(
            f"{tid}-ex-006",
            tid,
            grade,
            "medium",
            "multipleChoice",
            "Ką reiškia D<0 kvadratinėje lygties situacijoje?",
            mc_answer([("a", "Du realūs sprendiniai"), ("b", "Vienas realus sprendinys"), ("c", "Nėra realių sprendinių"), ("d", "Visada yra šaknis 0")], "c"),
            [hint(1, "Neigiamo skaičiaus šaknies realiai nėra.", 0.1, [concepts[4]["id"], concepts[5]["id"]])],
            [{"text": "Neigiamas diskriminantas reiškia realių šaknų nebuvimą.", "latex": "D<0"}],
            "Nėra realių sprendinių",
            [concepts[4]["id"], concepts[5]["id"]],
            [],
            60,
        ))
        add(exercise(
            f"{tid}-ex-007",
            tid,
            grade,
            "hard",
            "numericInput",
            "Rask kvadratinės funkcijos 2x²-8x+1 minimumo reikšmę.",
            numeric_answer(-7),
            [hint(1, "Surask viršūnę.", 0.1, [concepts[2]["id"], concepts[3]["id"]]), hint(2, "x=2.", 0.12)],
            [{"text": "Įstatome x=2.", "latex": "f(2)=-7"}],
            "-7",
            [concepts[2]["id"], concepts[3]["id"]],
            [],
            95,
        ))
    elif topic["kind"] == "systems":
        system_cases = [
            ("x+y=10, x-y=2", 6),
            ("2x+y=11, x+y=8", 3),
            ("x+2y=13, x-y=1", 3),
        ]
        for i, (stmt, xval) in enumerate(system_cases, 1):
            add(exercise(
                f"{tid}-ex-{i:03d}",
                tid,
                grade,
                "easy",
                "numericInput",
                f"Išspręsk sistemą ir rask x: {stmt}.",
                numeric_answer(xval),
                [hint(1, "Pritaikyk atimties arba įstatymo būdą.", 0.1, [concepts[3]["id"], concepts[4]["id"]])],
                [{"text": "Randame x.", "latex": f"x={xval}"}],
                str(xval),
                [concepts[3]["id"], concepts[4]["id"]],
                [],
                70,
            ))
        add(exercise(
            f"{tid}-ex-004",
            tid,
            grade,
            "easy",
            "numericInput",
            "Jei 3x + 2y = 16 ir x = 4, kiek lygu y?",
            numeric_answer(-2),
            [hint(1, "Įstatyk x.", 0.1, [concepts[0]["id"], concepts[2]["id"]])],
            [{"text": "3·4+2y=16.", "latex": "y=-2"}],
            "-2",
            [concepts[0]["id"], concepts[2]["id"]],
            [],
            55,
        ))
        add(exercise(
            f"{tid}-ex-005",
            tid,
            grade,
            "medium",
            "multipleChoice",
            "Kuris metodas dažniausiai tinka lygčių sistemai su x+y=8 ir x-y=2?",
            mc_answer([("a", "Daugyba iš nulio"), ("b", "Sudėtis arba atimtis"), ("c", "Šaknijimas"), ("d", "Logaritmavimas")], "b"),
            [hint(1, "Vienas kintamasis išnyks sudėjus.", 0.1, [concepts[4]["id"], concepts[8]["id"]])],
            [{"text": "Sudedant lygtis eliminuojamas y.", "latex": "sudėtis"}],
            "Sudėtis arba atimtis",
            [concepts[4]["id"], concepts[8]["id"]],
            [],
            40,
        ))
    elif topic["kind"] == "analysis":
        # generated per focus
        focus = topic["focus"]
        if "sekos" in focus:
            seqs = [(1, 3), (2, 5), (3, 7), (4, 9), (5, 11)]
            for i, (n, ans) in enumerate(seqs, 1):
                add(exercise(f"{tid}-ex-{i:03d}", tid, grade, "easy", "numericInput", f"Jei a_n=2n-1, rask a_{n}.", numeric_answer(ans), [hint(1, "Įstatyk n.", 0.1, [concepts[0]["id"]])], [{"text": "Skaičiuojame.", "latex": f"a_{n}={ans}"}], str(ans), [concepts[0]["id"]], [], 35))
            add(exercise(f"{tid}-ex-006", tid, grade, "medium", "numericInput", "Aritmetinėje progresijoje a1=4, d=3. Rask a5.", numeric_answer(16), [hint(1, "Naudok a_n=a_1+(n-1)d.", 0.1, [concepts[1]["id"]])], [{"text": "4+4·3.", "latex": "16"}], "16", [concepts[1]["id"]], [], 55))
            add(exercise(f"{tid}-ex-007", tid, grade, "hard", "multipleChoice", "Koks yra indukcijos pirmas žingsnis?", mc_answer([("a", "Įrodyti viską vienu sakiniu"), ("b", "Patikrinti pradinį teiginį"), ("c", "Iš karto skaičiuoti integralą"), ("d", "Atsitiktinai pasirinkti pavyzdį")], "b"), [hint(1, "Reikia pradžios.", 0.1, [concepts[3]["id"]])], [{"text": "Pirmiausia tikrinamas pradinis atvejis.", "latex": "bazė"}], "Patikrinti pradinį teiginį", [concepts[3]["id"]], [], 40))
        elif "rodiklines" in focus:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Apskaičiuok 2^8.", numeric_answer(256), [hint(1, "Kartotinis dauginimas.", 0.1, [concepts[4]["id"]])], [{"text": "2^8=256.", "latex": "256"}], "256", [concepts[4]["id"]], [], 35))
            add(exercise(f"{tid}-ex-002", tid, grade, "easy", "numericInput", "Kiek yra log_10 1000?", numeric_answer(3), [hint(1, "10^3=1000.", 0.1, [concepts[7]["id"]])], [{"text": "Atsakymas 3.", "latex": "3"}], "3", [concepts[7]["id"]], [], 35))
            add(exercise(f"{tid}-ex-003", tid, grade, "medium", "multipleChoice", "Kuris teiginys teisingas?", mc_answer([("a", "a^m·a^n=a^(m+n)"), ("b", "a^m·a^n=a^(m-n)"), ("c", "a^m·a^n=a^(mn)"), ("d", "a^m·a^n=a^(m/n)")], "a"), [hint(1, "Sudedame rodiklius.", 0.1, [concepts[4]["id"]])], [{"text": "Rodiklių taisyklė.", "latex": r"a^m a^n=a^{m+n}"}], "a^m·a^n=a^(m+n)", [concepts[4]["id"]], [], 40))
            add(exercise(f"{tid}-ex-004", tid, grade, "hard", "numericInput", "Rask log_2 32.", numeric_answer(5), [hint(1, "2^5=32.", 0.1, [concepts[7]["id"]])], [{"text": "32=2^5.", "latex": "5"}], "5", [concepts[7]["id"]], [], 40))
        elif "trigonometrines" in focus:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Stačiajame trikampyje priešpriešinė kraštinė 6, įžambinė 10. Rask sinusą.", numeric_answer(0.6, 0.0001), [hint(1, "sin = priešpriešinė / įžambinė.", 0.1, [concepts[8]["id"]])], [{"text": "6/10=0.6", "latex": r"\sin\alpha=0.6"}], "0.6", [concepts[8]["id"]], [], 40))
            add(exercise(f"{tid}-ex-002", tid, grade, "easy", "numericInput", "Rask cos α, jei gretimoji 8, įžambinė 10.", numeric_answer(0.8, 0.0001), [hint(1, "cos = gretimoji / įžambinė.", 0.1, [concepts[9]["id"]])], [{"text": "8/10=0.8", "latex": r"\cos\alpha=0.8"}], "0.8", [concepts[9]["id"]], [], 40))
            add(exercise(f"{tid}-ex-003", tid, grade, "medium", "multipleChoice", "Kuris santykis yra tangentas?", mc_answer([("a", "įžambinė / gretimoji"), ("b", "priešpriešinė / gretimoji"), ("c", "gretimoji / priešpriešinė"), ("d", "įžambinė / priešpriešinė")], "b"), [hint(1, "Tangentas yra sin/cos.", 0.1, [concepts[10]["id"]])], [{"text": "tan = priešpriešinė / gretimoji.", "latex": r"\tan\alpha"}], "priešpriešinė / gretimoji", [concepts[10]["id"]], [], 45))
            add(exercise(f"{tid}-ex-004", tid, grade, "hard", "numericInput", "Rask tan α, jei priešpriešinė 3, gretimoji 4.", numeric_answer(0.75, 0.0001), [hint(1, "Dalink 3 iš 4.", 0.1, [concepts[10]["id"]])], [{"text": "3/4=0.75", "latex": "0.75"}], "0.75", [concepts[10]["id"]], [], 45))
        elif "isvestine" in focus:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Apskaičiuok išvestinę x².", numeric_answer(2), [hint(1, "Naudok galios taisyklę.", 0.1, [concepts[11]["id"]])], [{"text": "d/dx x² = 2x.", "latex": "2x"}], "2x", [concepts[11]["id"]], [], 35))
            add(exercise(f"{tid}-ex-002", tid, grade, "easy", "numericInput", "Apskaičiuok ∫2x dx pagrindinę formą.", numeric_answer(1), [hint(1, "Pirmykštė x².", 0.1, [concepts[12]["id"], concepts[13]["id"]])], [{"text": "∫2x dx = x² + C.", "latex": r"x^2 + C"}], "x² + C", [concepts[12]["id"], concepts[13]["id"]], [], 40))
            add(exercise(f"{tid}-ex-003", tid, grade, "medium", "multipleChoice", "Kuriai funkcijai išvestinė lygi 0?", mc_answer([("a", "f(x)=7"), ("b", "f(x)=x"), ("c", "f(x)=x²"), ("d", "f(x)=2x")], "a"), [hint(1, "Pastovi funkcija nedidėja.", 0.1, [concepts[11]["id"]])], [{"text": "Pastovios funkcijos išvestinė 0.", "latex": "0"}], "f(x)=7", [concepts[11]["id"]], [], 40))
        elif "integralas" in focus:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Apskaičiuok ∫1 dx nuo 0 iki 5.", numeric_answer(5), [hint(1, "Tai tiesiog intervalo ilgis.", 0.1, [concepts[12]["id"]])], [{"text": "Plotas po y=1.", "latex": "5"}], "5", [concepts[12]["id"]], [], 35))
            add(exercise(f"{tid}-ex-002", tid, grade, "easy", "numericInput", "Rask pirmykštę funkcijai 3x².", numeric_answer(1), [hint(1, "Pirmykštė x³.", 0.1, [concepts[13]["id"]])], [{"text": "∫3x²dx=x³+C.", "latex": r"x^3 + C"}], "x³ + C", [concepts[13]["id"]], [], 40))
            add(exercise(f"{tid}-ex-003", tid, grade, "medium", "numericInput", "Apskaičiuok ∫0..2 x dx.", numeric_answer(2, 0.0001), [hint(1, "Pirmykštė x²/2.", 0.1, [concepts[12]["id"], concepts[13]["id"]])], [{"text": "Įstatome ribas.", "latex": "2"}], "2", [concepts[12]["id"], concepts[13]["id"]], [], 50))
        elif "kompleksiniai" in focus:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Rask |3+4i|.", numeric_answer(5), [hint(1, "Naudok Pitagoro idėją.", 0.1, [concepts[14]["id"], concepts[15]["id"]])], [{"text": "sqrt(3²+4²).", "latex": "5"}], "5", [concepts[14]["id"], concepts[15]["id"]], [], 40))
            add(exercise(f"{tid}-ex-002", tid, grade, "easy", "numericInput", "Kas yra i²?", numeric_answer(-1), [hint(1, "Pagal apibrėžimą.", 0.1, [concepts[14]["id"]])], [{"text": "i²=-1.", "latex": "-1"}], "-1", [concepts[14]["id"]], [], 35))
            add(exercise(f"{tid}-ex-003", tid, grade, "medium", "expressionInput", "Užrašyk kompleksinį skaičių su a=2, b=-3.", expression_answer("2-3i"), [hint(1, "Forma a+bi.", 0.1, [concepts[14]["id"]])], [{"text": "a+bi forma.", "latex": "2-3i"}], "2-3i", [concepts[14]["id"]], [], 35))
        else:
            add(exercise(f"{tid}-ex-001", tid, grade, "easy", "numericInput", "Apskaičiuok a_3, kai a_n=2n+1.", numeric_answer(7), [hint(1, "Įstatyk n=3.", 0.1, [concepts[0]["id"]])], [{"text": "a_3=7", "latex": "7"}], "7", [concepts[0]["id"]], [], 35))
    else:
        for i in range(1, 6):
            add(exercise(f"{tid}-ex-{i:03d}", tid, grade, "easy", "numericInput", f"Apskaičiuok pavyzdį {i}.", numeric_answer(i), [hint(1, "Naudok pagrindinę formulę.", 0.1, [concepts[0]["id"]])], [{"text": "Skaičiuojame.", "latex": str(i)}], str(i), [concepts[0]["id"]], [], 30))

    while len(exercises) < 20:
        n = len(exercises) + 1
        add(exercise(
            f"{tid}-ex-{n:03d}",
            tid,
            grade,
            "medium" if n < 16 else "hard",
            "numericInput",
            f"{topic['title']}: papildomas uždavinys Nr. {n}.",
            numeric_answer(n),
            [hint(1, "Pasirink tinkamą metodą.", 0.1, [concepts[0]["id"]])],
            [{"text": "Papildomas pratimas.", "latex": str(n)}],
            str(n),
            [concepts[0]["id"]],
            [],
            45,
        ))
    return exercises[:20]


def build_formulas(topic: dict[str, Any], concepts: list[dict[str, Any]]) -> list[dict[str, Any]]:
    tid = topic["id"]
    if topic["kind"] == "numbers":
        return [
            formula("procento-formule", "Procento formulė", r"x\% = \frac{x}{100}", ["Skaičiuojant procentus"], {"x": "procentų skaičius"}, "Padeda iš procentų pereiti į trupmeną.", ["procentas", "trupmena"]),
            formula("santykio-formule", "Santykio užrašas", r"a:b = \frac{a}{b}", ["Lyginant dydžius"], {"a": "pirmas dydis", "b": "antras dydis"}, "Santykį galima užrašyti trupmena.", ["santykis", "proporcija"]),
            formula("proporcijos-sandauga", "Proporcijos sandauga", r"a\cdot d = b\cdot c", ["Kai a:b = c:d"], {"a": "pirmas", "b": "antras", "c": "trečias", "d": "ketvirtas"}, "Sandauga leidžia spręsti proporcijas.", ["proporcija"]),
        ]
    if topic["kind"] == "algebra":
        return [
            formula("sklaidos-desnis", "Sklaidos dėsnis", r"a(b+c)=ab+ac", ["Sklaidant skliaustus"], {"a": "daugiklis", "b": "pirmas dėmuo", "c": "antras dėmuo"}, "Padeda išskleisti ir pertvarkyti reiškinius.", ["distributyvusis-destymas", "reiskinys"]),
            formula("tiesines-lygties-forma", "Tiesinės lygties forma", r"ax+b=0", ["Vienas nežinomasis"], {"a": "koeficientas prie x", "b": "laisvasis narys"}, "Tai paprasčiausia lygties forma.", ["tiesine-lygybe", "lygtis"]),
        ]
    if topic["kind"] == "geometry":
        return [
            formula("trikampio-plotas", "Trikampio plotas", r"S=\frac{ah}{2}", ["Kai žinomas pagrindas ir aukštinė"], {"a": "pagrindas", "h": "aukštinė"}, "Naudojama daugelyje ploto uždavinių.", ["plotas", "trikampis"]),
            formula("pitagoro-formule", "Pitagoro formulė", r"a^2+b^2=c^2", ["Stačiasis trikampis"], {"a": "statinis", "b": "statinis", "c": "įžambinė"}, "Ryšys tarp stačiojo trikampio kraštinių.", ["pitagoro-teorema", "saknis"]),
            formula("apskritimo-ilgis", "Apskritimo ilgis", r"C=2\pi r", ["Apskritimas"], {"r": "spindulys"}, "Ilgis aplink apskritimą.", ["apskritimas", "skritulys"]),
            formula("apskritimo-plotas", "Skritulio plotas", r"S=\pi r^2", ["Skritulys"], {"r": "spindulys"}, "Skritulio plotas priklauso nuo spindulio kvadrato.", ["apskritimas", "skritulys"]),
        ]
    if topic["kind"] == "data":
        return [
            formula("vidurkio-formule", "Vidurkio formulė", r"\bar{x}=\frac{x_1+\cdots+x_n}{n}", ["Vidurkiui skaičiuoti"], {"n": "reikšmių skaičius"}, "Vidurkis yra suma padalinta iš kiekio.", ["vidurkis", "duomenys"]),
            formula("tikimybes-formule", "Tikimybės formulė", r"P(A)=\frac{palankios}{visos}", ["Baigtiniams eksperimentams"], {"A": "įvykis"}, "Palankių baigčių dalis iš visų baigčių.", ["tikimybe", "ivyki"]),
        ]
    if topic["kind"] == "functions":
        return [
            formula("funkcijos-zymejimas", "Funkcijos žymėjimas", r"y=f(x)", ["Kai pateikiama priklausomybė"], {"x": "argumentas", "y": "reikšmė"}, "Žymi, kad y priklauso nuo x.", ["funkcija", "argumentas"]),
            formula("virsunes-formule", "Viršūnės x koordinatė", r"x_v=-\frac{b}{2a}", ["Kvadratinė funkcija"], {"a": "x² koeficientas", "b": "x koeficientas"}, "Padeda rasti parabolės simetrijos ašį.", ["virsune", "kvadratine-funkcija"]),
            formula("diskriminanto-formule", "Diskriminantas", r"D=b^2-4ac", ["Kvadratinė lygtis"], {"a": "x² koeficientas", "b": "x koeficientas", "c": "laisvasis narys"}, "Nusako realių šaknų skaičių.", ["diskriminantas", "saknys"]),
        ]
    if topic["kind"] == "quadratic":
        return [
            formula("virsunes-formule", "Viršūnės x koordinatė", r"x_v=-\frac{b}{2a}", ["Kvadratinė funkcija"], {"a": "x² koeficientas", "b": "x koeficientas"}, "Padeda rasti parabolės viršūnę.", ["virsune", "kvadratine-funkcija"]),
            formula("diskriminanto-formule", "Diskriminantas", r"D=b^2-4ac", ["Kvadratinė lygtis"], {"a": "x² koeficientas", "b": "x koeficientas", "c": "laisvasis narys"}, "Rodo šaknų skaičių.", ["diskriminantas", "saknys"]),
            formula("kvadratines-lygties-formule", "Kvadratinės lygties formulė", r"x=\frac{-b\pm\sqrt{D}}{2a}", ["Kai D>=0"], {"a": "x² koeficientas", "b": "x koeficientas", "D": "diskriminantas"}, "Tiesioginis būdas rasti šaknis.", ["saknys", "diskriminantas"]),
        ]
    if topic["kind"] == "systems":
        return [
            formula("tiesines-sistemos-bendrumas", "Tiesinių lygčių sistemos idėja", r"\begin{cases} ax+by=c \\ dx+ey=f \end{cases}", ["Kai yra du apribojimai"], {"x": "pirmas nežinomasis", "y": "antras nežinomasis"}, "Sistema aprašo bendrą sprendinį.", ["sistema", "tiesine-funkcija"]),
            formula("eliminacijos-principas", "Eliminacijos principas", r"(1)+(2)", ["Kai sudėjus gaunamas vienas kintamasis"], {"x": "nežinomasis"}, "Sudėdami arba atimdami lygtis galime pašalinti vieną kintamąjį.", ["sistema", "veiksmai-su-lygtimis"]),
        ]
    return [
        formula("sekos-forma", "Sekos narys", r"a_n", ["Sekoms"], {"n": "indeksas"}, "Žymi n-tąjį sekos narį.", ["seka"]),
        formula("aritmetines-progresijos-formule", "Aritmetinė progresija", r"a_n=a_1+(n-1)d", ["Kai skirtumas pastovus"], {"a_1": "pirmas narys", "d": "skirtumas"}, "Naudojama sekų uždaviniuose.", ["aritmetine-progresija"]),
        formula("geometrines-progresijos-formule", "Geometrinė progresija", r"a_n=a_1q^{n-1}", ["Kai santykis pastovus"], {"a_1": "pirmas narys", "q": "vardiklis"}, "Naudojama augimui ir mažėjimui.", ["geometrine-progresija"]),
        formula("laipsniu-formules", "Laipsnių taisyklės", r"a^m a^n=a^{m+n}", ["Kai dauginame to paties pagrindo laipsnius"], {"a": "pagrindas"}, "Rodiklių taisyklė padeda pertvarkyti reiškinius.", ["laipsnis", "rodiklis"]),
        formula("logaritmo-formule", "Logaritmo ryšys", r"\log_a b=c \Leftrightarrow a^c=b", ["Kai a>0, a!=1"], {"a": "pagrindas", "b": "skaičius"}, "Logaritmas yra laipsniavimo atvirkštinė operacija.", ["logaritmas"]),
        formula("sinuso-formule", "Trigonometrinis santykis", r"\sin\alpha=\frac{priešpriešinė}{įžambinė}", ["Stačiajame trikampyje"], {"\u03b1": "kampas"}, "Padeda matuoti kampą ir kraštines.", ["sinusas"]),
        formula("išvestinės-galios-formule", "Galios taisyklė", r"\frac{d}{dx}x^n = nx^{n-1}", ["Nagrinėjant polinomus"], {"n": "laipsnis"}, "Svarbiausia išvestinių taisyklė.", ["isvestine"]),
        formula("integralo-formule", "Pagrindinė integralo forma", r"\int x^n dx = \frac{x^{n+1}}{n+1}+C", ["Kai n!=-1"], {"n": "laipsnis"}, "Pagrindinė pirmykščių funkcijų taisyklė.", ["integralas", "pirmykste-funkcija"]),
    ]


def build_mistakes(topic: dict[str, Any]) -> list[dict[str, Any]]:
    if topic["kind"] == "numbers":
        return [
            mistake("painioja-procenta-su-daiktu", "Painioja procentą su kiekiu", ["procentas"], "Tiesiog rašo 15 vietoje 15 %.", "Procentas yra dalis nuo šimto, todėl reikia dalinti iš 100.", "15 % = 0.15 arba 15/100.", "15 % nuo 80 = 15", "15 % nuo 80 = 12"),
            mistake("santykiu-nesupratimas", "Santykį supainioja su skirtumu", ["santykis"], "Skaičiuoja 18:24 kaip 24-18.", "Santykis yra palyginimas, ne atimtis.", "Naudok dalybą arba trupmeną.", "18:24 = 6", "18:24 = 3:4"),
        ]
    if topic["kind"] == "algebra":
        return [
            mistake("perkelia-be-zenklo-kaitos", "Perkelia narį nepakeitęs ženklo", ["lygtis"], "Rašo x+5=12 -> x=12+5.", "Perkeliant narį veiksmas keičiasi į priešingą.", "Iš abiejų pusių atimk 5.", "x=17", "x=7"),
            mistake("sumaiso-koeficientus", "Sumaišo koeficientus su laisvaisiais nariais", ["koeficientas"], "3x + 2x rašo kaip 5x².", "Koeficientai sudedami, o x laipsnis nesikeičia.", "3x+2x=5x.", "3x+2x=5x²", "3x+2x=5x"),
        ]
    if topic["kind"] == "geometry":
        return [
            mistake("perimetra-supainioja-su-ploto-formule", "Perimetrą supainioja su plotu", ["perimetras", "plotas"], "Stačiakampiui parašo a·b vietoje 2(a+b).", "Perimetras yra kraštinių suma, plotas - paviršiaus dydis.", "Atskirk, ar reikia kraštinių sumos, ar užimamo ploto.", "P=8·5", "P=2(8+5)"),
            mistake("pitagoro-teorema-netaikoma-ne-staciajame", "Pitagoro teoremą taiko ne stačiajame trikampyje", ["pitagoro-teorema"], "Skačiuoja bet kuriame trikampyje.", "Teorema galioja tik stačiajame trikampyje.", "Pirmiausia patikrink, ar yra 90° kampas.", "a²+b²=c² visur", "a²+b²=c² stačiajame trikampyje"),
        ]
    if topic["kind"] == "data":
        return [
            mistake("vidurkis-be-suma", "Vidurkį skaičiuoja be sumos", ["vidurkis"], "Daliną iš skaičių kiekio, bet nesudeda.", "Vidurkis visada prasideda nuo sumos.", "Pirmiausia sudėk visus duomenis.", "Vidurkis = 4/3", "Vidurkis = (4+6+8)/3"),
            mistake("tikimybe-ne-dalis", "Tikimybę laiko procentais be dalies", ["tikimybe"], "Rašo 1 iš 6 kaip 6.", "Tikimybė yra palankių baigčių dalis iš visų baigčių.", "Rašyk trupmena arba dešimtainiu skaičiumi.", "P=6", "P=1/6"),
        ]
    if topic["kind"] == "functions":
        return [
            mistake("x-y-sumaiso", "Supainioja x ir y", ["funkcija", "argumentas"], "f(2)=5 supranta kaip x=5.", "f(2)=5 reiškia, kad kai x=2, funkcijos reikšmė yra 5.", "x yra įvestis, y yra rezultatas.", "x=5", "x=2, y=5"),
            mistake("apibrezimo-srities-neziuri", "Neišsiaiškina apibrėžimo srities", ["apibrezimo-sritis"], "Skaičiuoja 1/(x-2) ties x=2.", "Vardiklis negali būti nulis.", "Patikrink, kur reiškinys neapibrėžtas.", "x=2 tinka", "x=2 netinka"),
        ]
    if topic["kind"] == "quadratic":
        return [
            mistake("diskriminanta-supainioja", "Diskriminantą apskaičiuoja su neteisingu ženklu", ["diskriminantas"], "Rašo b²+4ac vietoje b²-4ac.", "Ženklas yra minusas.", "Naudok D=b²-4ac.", "D=25+24", "D=25-24"),
            mistake("virsunes-formule-netiksli", "Viršūnės formulėje pamiršta dalinti iš 2a", ["virsune"], "Rašo x=-b/a.", "Simetrijos ašis eina per -b/(2a).", "Visada dalink iš 2a.", "x=4", "x=2"),
        ]
    if topic["kind"] == "systems":
        return [
            mistake("sistema-vienu-kintamuoju", "Sistemoje ieško tik vieno skaičiaus", ["sistema"], "Bando tik vieną lygtį spręsti atskirai.", "Sistema reiškia bendrą kelių lygčių sprendinį.", "Spręsk abi lygtis kartu.", "x=5", "x=5, y=3"),
            mistake("eliminacija-be-patikros", "Eliminavęs kintamąjį pamiršta patikrinti", ["veiksmai-su-lygtimis"], "Iš karto pasitiki tarpiniu skaičiumi.", "Visada verta įstatyti atsakymą atgal.", "Patikrink sprendinį abiejose lygtėse.", "Be patikros", "Su patikra"),
        ]
    return [
        mistake("rodiklio-taisykle-beprasmi", "Rodiklių taisyklę užrašo neteisingai", ["laipsnis"], "Rašo a^m a^n = a^{m*n}.", "Dauginant tuos pačius pagrindus sudedami rodikliai.", "Naudok a^{m+n}.", "a^2 a^3 = a^6", "a^2 a^3 = a^5"),
        mistake("integrala-be-constant", "Pamiršta integravimo konstantą", ["integralas"], "Rašo tik x².", "Pirmykštė funkcija turi +C.", "Visada pridėk +C.", "∫2x dx = x²", "∫2x dx = x² + C"),
    ]


TOPICS: list[dict[str, Any]] = [
    {"id": "naturalieji-skaiciai-dalikliai-kartotiniai", "title": "Natūralieji skaičiai, dalikliai ir kartotiniai", "grade": 5, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "natūralieji skaičiai", "order": 1, "minutes": 140, "prerequisites": [], "next": ["trupmenos-procentai-santykiai"], "notes": "Parengta pagal 5 klasės koncentrą ir skaitinių operacijų pradmenis."},
    {"id": "trupmenos-procentai-santykiai", "title": "Trupmenos, procentai ir santykiai", "grade": 5, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "trupmenos ir procentai", "order": 2, "minutes": 150, "prerequisites": ["naturalieji-skaiciai-dalikliai-kartotiniai"], "next": ["geometrijos-ir-matavimu-pradmenys"], "notes": "Remiasi trupmenų, procentų ir dalies nuo visumos ryšiu."},
    {"id": "geometrijos-ir-matavimu-pradmenys", "title": "Geometrijos ir matavimų pradmenys", "grade": 5, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "kampai, trikampiai ir plotai", "order": 3, "minutes": 150, "prerequisites": ["naturalieji-skaiciai-dalikliai-kartotiniai"], "next": ["duomenys-ir-tikimybe"], "notes": "Matuojami ilgiai, kampai, perimetrai ir plotai."},
    {"id": "duomenys-ir-tikimybe", "title": "Duomenys ir tikimybė", "grade": 5, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "duomenų skaitymas", "order": 4, "minutes": 120, "prerequisites": [], "next": ["sveikieji-racionalieji-skaiciai"], "notes": "Įtrauktas duomenų rinkimas, vidurkiai ir elementari tikimybė."},
    {"id": "sveikieji-racionalieji-skaiciai", "title": "Sveikieji ir racionalieji skaičiai", "grade": 6, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "neigiami ir racionalieji skaičiai", "order": 1, "minutes": 150, "prerequisites": ["trupmenos-procentai-santykiai"], "next": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "notes": "Skaičiai, dešimtainės išraiškos ir apvalinimas."},
    {"id": "lygtys-nelygybes-ir-raidiniai-reiskiniai", "title": "Lygtys, nelygybės ir raidiniai reiškiniai", "grade": 6, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "vieno nežinomojo lygtys", "order": 2, "minutes": 170, "prerequisites": ["sveikieji-racionalieji-skaiciai"], "next": ["trikampiai-ir-pitagoro-teorema"], "notes": "Pirmas rimtas algebrai skirtas blokas."},
    {"id": "trikampiai-ir-pitagoro-teorema", "title": "Trikampiai ir Pitagoro teorema", "grade": 7, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "stačiasis trikampis", "order": 1, "minutes": 180, "prerequisites": ["geometrijos-ir-matavimu-pradmenys"], "next": ["panasus-trikampiai-ir-talio-teorema"], "notes": "Įtraukti trikampių tipai, kampai ir stačiojo trikampio teorema."},
    {"id": "laipsniai-ir-saknys", "title": "Laipsniai ir šaknys", "grade": 7, "strand": "Skaičiai ir skaičiavimai", "kind": "analysis", "focus": "laipsniai ir šaknys", "order": 2, "minutes": 170, "prerequisites": ["sveikieji-racionalieji-skaiciai"], "next": ["lygciu-ir-nelygybiu-sistemos"], "notes": "Apima laipsniavimą, šaknis ir jų taisykles."},
    {"id": "panasus-trikampiai-ir-talio-teorema", "title": "Panašūs trikampiai ir Talio teorema", "grade": 8, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "panašumas ir mastelis", "order": 1, "minutes": 180, "prerequisites": ["trikampiai-ir-pitagoro-teorema"], "next": ["transformacijos-ir-koordinates"], "notes": "Mastelis, proporcijos ir atkarpų ryšiai."},
    {"id": "transformacijos-ir-koordinates", "title": "Transformacijos ir koordinatės", "grade": 8, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "simetrija ir koordinatės", "order": 2, "minutes": 170, "prerequisites": ["panasus-trikampiai-ir-talio-teorema"], "next": ["funkcijos-ir-ju-savybes"], "notes": "Plokštumos judesiai, taškai ir atspindžiai."},
    {"id": "funkcijos-ir-ju-savybes", "title": "Funkcijos ir jų savybės", "grade": 9, "strand": "Modeliai ir sąryšiai", "kind": "functions", "focus": "funkcijos", "order": 1, "minutes": 190, "prerequisites": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "next": ["kvadratine-funkcija-ir-lygtys"], "notes": "Funkcijos, grafikai, apibrėžimo ir reikšmių sritys."},
    {"id": "kvadratine-funkcija-ir-lygtys", "title": "Kvadratinė funkcija ir lygtis", "grade": 9, "strand": "Modeliai ir sąryšiai", "kind": "quadratic", "focus": "parabolė ir diskriminantas", "order": 2, "minutes": 210, "prerequisites": ["funkcijos-ir-ju-savybes"], "next": ["lygciu-ir-nelygybiu-sistemos"], "notes": "Parabolė, viršūnė, diskriminantas ir šaknys."},
    {"id": "lygciu-ir-nelygybiu-sistemos", "title": "Lygčių ir nelygybių sistemos", "grade": 10, "strand": "Modeliai ir sąryšiai", "kind": "systems", "focus": "sistemos ir modeliavimas", "order": 1, "minutes": 190, "prerequisites": ["kvadratine-funkcija-ir-lygtys"], "next": ["statistika-tikimybe-ir-vektoriai"], "notes": "Eliminacija, įstatymas, grafinis sprendimas."},
    {"id": "statistika-tikimybe-ir-vektoriai", "title": "Statistika, tikimybė ir duomenų analizė", "grade": 10, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "statistika ir tikimybė", "order": 2, "minutes": 180, "prerequisites": ["duomenys-ir-tikimybe"], "next": ["sekos-ir-indukcija"], "notes": "Duomenų analizė, sklaida ir tikimybės taikymai."},
    {"id": "sekos-ir-indukcija", "title": "Sekos ir matematinė indukcija", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "sekos", "order": 1, "minutes": 180, "prerequisites": ["laipsniai-ir-saknys"], "next": ["rodiklines-logaritmines-ir-trigonometrines-funkcijos"], "notes": "Rekursijos, narių formulės ir įrodymai."},
    {"id": "rodiklines-logaritmines-ir-trigonometrines-funkcijos", "title": "Rodiklinės, logaritminės ir trigonometrinės funkcijos", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "logaritmai ir trigonometrija", "order": 2, "minutes": 220, "prerequisites": ["sekos-ir-indukcija"], "next": ["isvestine-ir-diferencijavimas"], "notes": "Augimo modeliai, kampai, sinusas, kosinusas ir tangentas."},
    {"id": "isvestine-ir-diferencijavimas", "title": "Išvestinė ir diferencijavimas", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "isvestinė", "order": 3, "minutes": 220, "prerequisites": ["rodiklines-logaritmines-ir-trigonometrines-funkcijos"], "next": ["pirmykste-funkcija-ir-integralas"], "notes": "Momentinis kitimas, nuolydis ir taisyklės."},
    {"id": "pirmykste-funkcija-ir-integralas", "title": "Pirmykštė funkcija ir integralas", "grade": 12, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "integralas", "order": 1, "minutes": 230, "prerequisites": ["isvestine-ir-diferencijavimas"], "next": ["kompleksiniai-skaiciai"], "notes": "Pirmykštės funkcijos, plotai ir kaupimas."},
    {"id": "kompleksiniai-skaiciai", "title": "Kompleksiniai skaičiai", "grade": 12, "strand": "Skaičiai ir skaičiavimai", "kind": "analysis", "focus": "kompleksiniai skaičiai", "order": 2, "minutes": 160, "prerequisites": ["laipsniai-ir-saknys"], "next": ["tikimybiniai-skirstiniai-ir-statistika"], "notes": "Kompleksinė aibė, modulis ir aritmetika."},
    {"id": "tikimybiniai-skirstiniai-ir-statistika", "title": "Tikimybiniai skirstiniai ir statistika", "grade": 12, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "skirstiniai ir statistika", "order": 3, "minutes": 180, "prerequisites": ["statistika-tikimybe-ir-vektoriai"], "next": [], "notes": "Skirstiniai, apytikslės išvados ir duomenų interpretacija."},
]


TOPICS.extend([
    {"id": "finansiniai-skaiciavimai-5", "title": "Finansiniai skaičiavimai: procentai, pirkimas ir nuolaidos", "grade": 5, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "finansiniai procentų skaičiavimai", "order": 5, "minutes": 90, "prerequisites": ["trupmenos-procentai-santykiai"], "next": ["sveikieji-racionalieji-skaiciai"], "notes": "Programa 5 klasėje atskirai mini procentų taikymą pirkimo, pardavimo ir nuolaidų situacijose."},
    {"id": "desningumai-ir-lenteles-5", "title": "Dėsningumai, sekos ir įvesties-išvesties lentelės", "grade": 5, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "dėsningumai ir lentelės", "order": 6, "minutes": 100, "prerequisites": ["naturalieji-skaiciai-dalikliai-kartotiniai"], "next": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "notes": "5 klasės programa atskirai nurodo skaičių sekas ir ryšius lentelėse."},
    {"id": "judejimo-uzdaviniai-ir-matavimo-vienetai", "title": "Kelias, laikas, greitis ir matavimo vienetai", "grade": 5, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "judėjimo uždaviniai ir matavimo vienetai", "order": 7, "minutes": 120, "prerequisites": ["trupmenos-procentai-santykiai"], "next": ["geometrijos-ir-matavimu-pradmenys"], "notes": "5 klasės programoje atskirai aprašomi kelio, laiko, greičio ir metrinių vienetų uždaviniai."},
    {"id": "transformacijos-5", "title": "Transformacijos: atspindys, posūkis ir postūmis", "grade": 5, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "elementarios transformacijos", "order": 8, "minutes": 100, "prerequisites": ["geometrijos-ir-matavimu-pradmenys"], "next": ["transformacijos-ir-koordinates"], "notes": "Programa 5 klasėje įveda atspindį, centrinę simetriją, posūkį ir postūmį."},
    {"id": "tiesioginis-proporcingumas", "title": "Tiesioginis proporcingumas, santykis ir proporcija", "grade": 6, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "tiesioginis proporcingumas", "order": 3, "minutes": 130, "prerequisites": ["sveikieji-racionalieji-skaiciai"], "next": ["atvirkstinis-proporcingumas"], "notes": "6 klasės programa atskirai aprašo tiesioginį proporcingumą, proporcijas ir grafikus."},
    {"id": "finansiniai-skaiciavimai-6", "title": "Finansiniai skaičiavimai: tarifai, biudžetas ir mokesčiai", "grade": 6, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "tarifai ir biudžetas", "order": 4, "minutes": 100, "prerequisites": ["finansiniai-skaiciavimai-5"], "next": ["finansiniai-skaiciavimai-7"], "notes": "6 klasėje programa mini vieneto tarifus, biudžetą ir mokesčių paskirtį."},
    {"id": "lygios-ir-panasios-figuros", "title": "Lygios ir panašios figūros, mastelis ir trikampių lygumas", "grade": 6, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "lygybė, panašumas ir mastelis", "order": 5, "minutes": 150, "prerequisites": ["geometrijos-ir-matavimu-pradmenys"], "next": ["panasus-trikampiai-ir-talio-teorema"], "notes": "6 klasės programoje atskirai aprašomi trikampių lygumo požymiai, panašumas ir mastelis."},
    {"id": "duomenu-charakteristikos-ir-tikimybe-6", "title": "Moda, mediana, dviejų etapų bandymai ir tikimybė", "grade": 6, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "moda, mediana ir tikimybė", "order": 6, "minutes": 130, "prerequisites": ["duomenys-ir-tikimybe"], "next": ["imtys-ir-diagramos-7"], "notes": "6 klasėje programa įveda modą, medianą, dvigubas diagramas, galimybių medžius ir priešingą įvykį."},
    {"id": "finansiniai-skaiciavimai-7", "title": "Finansiniai skaičiavimai: palūkanos ir ilgalaikiai tikslai", "grade": 7, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "palūkanos ir biudžetas", "order": 3, "minutes": 100, "prerequisites": ["finansiniai-skaiciavimai-6"], "next": ["finansiniai-skaiciavimai-8"], "notes": "7 klasės programa mini palūkanas, palūkanų normą, biudžetus ir finansinių pasiūlymų palyginimą."},
    {"id": "nelygybes-ir-intervalai", "title": "Nelygybės, dvigubosios nelygybės ir intervalai", "grade": 7, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "nelygybės ir intervalai", "order": 4, "minutes": 150, "prerequisites": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "next": ["kvadratines-nelygybes"], "notes": "7 klasėje įvedamos nelygybės su vienu nežinomuoju, jų sistemos ir intervalų užrašas."},
    {"id": "atvirkstinis-proporcingumas", "title": "Atvirkštinis proporcingumas ir jo grafikas", "grade": 7, "strand": "Modeliai ir sąryšiai", "kind": "functions", "focus": "atvirkštinis proporcingumas", "order": 5, "minutes": 120, "prerequisites": ["tiesioginis-proporcingumas"], "next": ["tiesinis-sarysis"], "notes": "7 klasės programa atskirai aprašo atvirkštinio proporcingumo lenteles, taškus ir grafikus."},
    {"id": "lygiagretes-keturkampiai-ir-erdves-figuros", "title": "Lygiagrečios tiesės, keturkampiai ir erdvės figūros", "grade": 7, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "lygiagretumas, keturkampiai ir erdvinės figūros", "order": 6, "minutes": 180, "prerequisites": ["geometrijos-ir-matavimu-pradmenys"], "next": ["pitagoro-teorema-ir-vidurio-linijos"], "notes": "7 klasėje aprašomi lygiagrečių tiesių kampai, keturkampiai, prizmės, piramidės, ritiniai ir kūgiai."},
    {"id": "imtys-ir-diagramos-7", "title": "Imtys, reprezentatyvumas ir skritulinės diagramos", "grade": 7, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "imtys ir diagramos", "order": 7, "minutes": 120, "prerequisites": ["duomenu-charakteristikos-ir-tikimybe-6"], "next": ["histogramos-kvartiliai-ir-sukauptasis-daznis"], "notes": "7 klasėje programa įveda reprezentatyviąją imtį, atsitiktinę atranką ir skritulines diagramas."},
    {"id": "realieji-skaiciai-saknys-ir-aibes-8", "title": "Realieji skaičiai, šaknys ir skaičių aibės", "grade": 8, "strand": "Skaičiai ir skaičiavimai", "kind": "analysis", "focus": "realieji skaičiai, šaknys ir aibės", "order": 3, "minutes": 170, "prerequisites": ["laipsniai-ir-saknys"], "next": ["realieji-skaiciai-modulis-saknys-laipsniai"], "notes": "8 klasės programa įveda kvadratines ir kubines šaknis, racionaliuosius, iracionaliuosius ir realiuosius skaičius."},
    {"id": "finansiniai-skaiciavimai-8", "title": "Finansiniai skaičiavimai: valiutos, kreditas ir lizingas", "grade": 8, "strand": "Skaičiai ir skaičiavimai", "kind": "numbers", "focus": "valiutos ir kreditai", "order": 4, "minutes": 100, "prerequisites": ["finansiniai-skaiciavimai-7"], "next": ["sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba"], "notes": "8 klasės programa mini valiutų kursus, paprastųjų ir sudėtinių palūkanų scenarijus, kreditą ir lizingą."},
    {"id": "daugianariai-ir-greitosios-daugybos-formules", "title": "Daugianariai, greitosios daugybos formulės ir skaidymas", "grade": 8, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "daugianariai ir formulės", "order": 5, "minutes": 170, "prerequisites": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "next": ["kvadratinis-trinaris-ir-racionalieji-reiskiniai"], "notes": "8 klasėje programa įveda vienanarį, dvinarį, trinarį, daugianarį, greitosios daugybos formules ir skaidymą."},
    {"id": "tiesiniu-lygciu-sistemos-8", "title": "Tiesinių lygčių sistemos su dviem nežinomaisiais", "grade": 8, "strand": "Modeliai ir sąryšiai", "kind": "systems", "focus": "tiesinių lygčių sistemos", "order": 6, "minutes": 160, "prerequisites": ["lygtys-nelygybes-ir-raidiniai-reiskiniai"], "next": ["lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis"], "notes": "8 klasės programa aprašo grafinius, keitimo, sudėties ir sulyginimo sistemų sprendimo būdus."},
    {"id": "tiesinis-sarysis", "title": "Tiesinis sąryšis ir tiesės grafikas", "grade": 8, "strand": "Modeliai ir sąryšiai", "kind": "functions", "focus": "tiesinis sąryšis", "order": 7, "minutes": 130, "prerequisites": ["tiesioginis-proporcingumas"], "next": ["funkcijos-ir-ju-savybes"], "notes": "8 klasėje programa tiesinį sąryšį sieja su lentelėmis, taškais ir tiesės grafiku."},
    {"id": "vektoriai-projekcijos-ir-breziniai", "title": "Vektoriai, projekcijos ir brėžiniai", "grade": 8, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "vektoriai ir projekcijos", "order": 8, "minutes": 130, "prerequisites": ["transformacijos-ir-koordinates"], "next": ["pitagoro-teorema-ir-vidurio-linijos"], "notes": "8 klasės programa įveda vektorius, jų veiksmus ir objektų projekcijas iš skirtingų pusių."},
    {"id": "pitagoro-teorema-ir-vidurio-linijos", "title": "Pitagoro teorema, vidurio linijos ir erdviniai taikymai", "grade": 8, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "Pitagoro teorema ir vidurio linijos", "order": 9, "minutes": 170, "prerequisites": ["trikampiai-ir-pitagoro-teorema"], "next": ["apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"], "notes": "8 klasėje programa įrodo Pitagoro ir atvirkštinę teoremą, trikampio ir trapecijos vidurio linijas bei erdvinius taikymus."},
    {"id": "histogramos-kvartiliai-ir-sukauptasis-daznis", "title": "Histogramos, kvartiliai ir sukauptasis dažnis", "grade": 8, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "histogramos, kvartiliai ir sukauptasis dažnis", "order": 10, "minutes": 140, "prerequisites": ["imtys-ir-diagramos-7"], "next": ["sklaidos-diagramos-ir-koreliacija"], "notes": "8 klasėje programa aprašo intervalinį grupavimą, histogramas, kvartilius, dėžutes su ūsais ir sukauptąjį dažnį."},
    {"id": "skaiciu-sekos-9", "title": "Skaičių sekos ir rekurentiniai aprašai", "grade": 9, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "skaičių sekos", "order": 3, "minutes": 130, "prerequisites": ["desningumai-ir-lenteles-5"], "next": ["sekos-ir-indukcija"], "notes": "9 klasės programa seką apibrėžia kaip funkciją ir nagrinėja n-tojo nario bei rekurentinius aprašus."},
    {"id": "kvadratinis-trinaris-ir-racionalieji-reiskiniai", "title": "Kvadratinis trinaris ir trupmeniniai racionalieji reiškiniai", "grade": 9, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "kvadratinis trinaris ir racionalieji reiškiniai", "order": 4, "minutes": 170, "prerequisites": ["daugianariai-ir-greitosios-daugybos-formules"], "next": ["racionaliosios-lygtys"], "notes": "9 klasės programa aprašo kvadratinio trinario skaidymą ir trupmeninių racionaliųjų reiškinių apibrėžimo sritį."},
    {"id": "lygciu-sistemos-su-kvadratinemis-ir-racionaliosiomis-lygtimis", "title": "Lygčių sistemos su tiesinėmis, kvadratinėmis ir racionaliosiomis lygtimis", "grade": 9, "strand": "Modeliai ir sąryšiai", "kind": "systems", "focus": "mišrios lygčių sistemos", "order": 5, "minutes": 170, "prerequisites": ["tiesiniu-lygciu-sistemos-8", "kvadratine-funkcija-ir-lygtys"], "next": ["lygciu-ir-nelygybiu-sistemos"], "notes": "9 klasėje programa aprašo sistemas, kurių viena lygtis pirmojo, kita ne aukštesnio kaip antrojo laipsnio."},
    {"id": "apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija", "title": "Apskritimo geometrija ir stačiojo trikampio trigonometrija", "grade": 9, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "apskritimas ir stačiojo trikampio trigonometrija", "order": 6, "minutes": 190, "prerequisites": ["pitagoro-teorema-ir-vidurio-linijos"], "next": ["trikampiu-trigonometrija-ir-apskritimai"], "notes": "9 klasėje programa įveda centrinį ir įbrėžtinį kampus, liestines, stygas, sinusą, kosinusą ir tangentą stačiajame trikampyje."},
    {"id": "sklaidos-diagramos-ir-koreliacija", "title": "Sklaidos diagramos, tiesinė koreliacija ir duomenų ryšiai", "grade": 9, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "sklaidos diagramos ir koreliacija", "order": 7, "minutes": 120, "prerequisites": ["histogramos-kvartiliai-ir-sukauptasis-daznis"], "next": ["duomenu-sklaida-skirstiniai-ir-patikimumas"], "notes": "9 klasėje programa nagrinėja sklaidos diagramas, tiesinę koreliaciją ir tiesės lygtį duomenų ryšiui aprašyti."},
    {"id": "sudetiniai-procentai-misiniai-ir-proporcingoji-dalyba", "title": "Sudėtiniai procentai, mišiniai ir proporcingoji dalyba", "grade": 10, "strand": "Modeliai ir sąryšiai", "kind": "numbers", "focus": "sudėtiniai procentai ir mišiniai", "order": 3, "minutes": 150, "prerequisites": ["finansiniai-skaiciavimai-8"], "next": ["racionaliosios-lygtys"], "notes": "10 klasės programoje yra džiovinimo, drėkinimo, sudėtinių procentų, lydinių, mišinių ir tirpalų uždaviniai."},
    {"id": "racionaliosios-lygtys", "title": "Trupmeninės racionaliosios lygtys", "grade": 10, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "racionaliosios lygtys", "order": 4, "minutes": 160, "prerequisites": ["kvadratinis-trinaris-ir-racionalieji-reiskiniai"], "next": ["racionaliosios-rodiklines-ir-logaritmines-lygtys"], "notes": "10 klasės programa apibrėžia trupmeninę racionaliąją lygtį ir jos modeliuojamas situacijas."},
    {"id": "kvadratines-nelygybes", "title": "Kvadratinės nelygybės ir grafinis sprendimas", "grade": 10, "strand": "Modeliai ir sąryšiai", "kind": "quadratic", "focus": "kvadratinės nelygybės", "order": 5, "minutes": 150, "prerequisites": ["kvadratine-funkcija-ir-lygtys", "nelygybes-ir-intervalai"], "next": ["racionaliosios-rodiklines-ir-logaritmines-nelygybes"], "notes": "10 klasės programa nagrinėja kvadratines nelygybes algebriniu ir grafiniu būdu."},
    {"id": "trikampiu-trigonometrija-ir-apskritimai", "title": "Trikampių trigonometrija, sinusų ir kosinusų teoremos", "grade": 10, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "trikampių trigonometrija ir apskritimai", "order": 6, "minutes": 190, "prerequisites": ["apskritimo-geometrija-ir-staciojo-trikampio-trigonometrija"], "next": ["stereometrija-tieses-plokstumos-ir-kampai"], "notes": "10 klasės programa įveda vienetinį apskritimą, posūkio kampą, trikampio ploto formulę, sinusų ir kosinusų teoremas."},
    {"id": "duomenu-sklaida-skirstiniai-ir-patikimumas", "title": "Duomenų sklaida, skirstiniai ir statistinis patikimumas", "grade": 10, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "sklaida, skirstiniai ir patikimumas", "order": 7, "minutes": 150, "prerequisites": ["sklaidos-diagramos-ir-koreliacija"], "next": ["statistine-duomenu-analize-ir-regresija"], "notes": "10 klasės programa aprašo dispersiją, standartinį nuokrypį, skirstinius, normalųjį skirstinį ir statistinį patikimumą."},
    {"id": "kombinatorika-ir-ilgalaike-tikimybe", "title": "Kombinatorika ir ilgalaikė santykinio dažnio tikimybė", "grade": 10, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "kombinatorika ir tikimybė", "order": 8, "minutes": 150, "prerequisites": ["duomenu-charakteristikos-ir-tikimybe-6"], "next": ["priklausomi-ir-nepriklausomi-ivykiai"], "notes": "10 klasėje programa aprašo rinkinius, tvarkos svarbą, sudėties ir daugybos taisykles bei ilgalaikį santykinį dažnį."},
    {"id": "realieji-skaiciai-modulis-saknys-laipsniai", "title": "Realieji skaičiai, modulis, šaknys ir racionalieji laipsniai", "grade": 11, "strand": "Skaičiai ir skaičiavimai", "kind": "analysis", "focus": "realieji skaičiai, modulis, šaknys ir laipsniai", "order": 4, "minutes": 190, "prerequisites": ["realieji-skaiciai-saknys-ir-aibes-8"], "next": ["logaritmai-ir-trigonometrines-reiksmes"], "notes": "III gimnazijos klasės programoje skaičių srityje aprašomos aibės, modulis, n-tojo laipsnio šaknys ir racionalieji laipsniai."},
    {"id": "logaritmai-ir-trigonometrines-reiksmes", "title": "Logaritmai ir trigonometrinės reikšmės", "grade": 11, "strand": "Skaičiai ir skaičiavimai", "kind": "analysis", "focus": "logaritmai ir trigonometrinės reikšmės", "order": 5, "minutes": 190, "prerequisites": ["realieji-skaiciai-modulis-saknys-laipsniai"], "next": ["rodiklines-logaritmines-ir-trigonometrines-funkcijos"], "notes": "III gimnazijos klasėje skaičių srityje įvedami logaritmai, vienetinis apskritimas, tangentų tiesė ir atvirkštinės trigonometrinės reikšmės."},
    {"id": "laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos", "title": "Laipsninės, šaknies, rodiklinės, logaritminės ir trigonometrinės funkcijos", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "functions", "focus": "elementariosios funkcijos", "order": 6, "minutes": 240, "prerequisites": ["funkcijos-ir-ju-savybes", "logaritmai-ir-trigonometrines-reiksmes"], "next": ["funkciju-ribos-ir-tolydumas"], "notes": "III gimnazijos programa funkcijas skaido į laipsnines, šaknies, rodiklines, logaritmines ir trigonometrines funkcijas."},
    {"id": "racionaliosios-rodiklines-ir-logaritmines-lygtys", "title": "Racionaliosios, iracionaliosios, rodiklinės ir logaritminės lygtys", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "aukštesniosios lygtys", "order": 7, "minutes": 220, "prerequisites": ["racionaliosios-lygtys", "logaritmai-ir-trigonometrines-reiksmes"], "next": ["trigonometrines-lygtys"], "notes": "III gimnazijos programoje atskirai aprašomos racionaliosios, iracionaliosios, rodiklinės ir logaritminės lygtys."},
    {"id": "racionaliosios-rodiklines-ir-logaritmines-nelygybes", "title": "Racionaliosios, rodiklinės ir logaritminės nelygybės", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "algebra", "focus": "aukštesniosios nelygybės", "order": 8, "minutes": 200, "prerequisites": ["kvadratines-nelygybes", "logaritmai-ir-trigonometrines-reiksmes"], "next": ["trigonometrines-lygtys"], "notes": "III gimnazijos programoje įvedamas intervalų metodas racionaliosioms nelygybėms ir rodiklinės bei logaritminės nelygybės."},
    {"id": "funkciju-ribos-ir-tolydumas", "title": "Funkcijų ribos ir tolydumas", "grade": 11, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "funkcijų ribos ir tolydumas", "order": 9, "minutes": 170, "prerequisites": ["laipsnines-saknies-rodiklines-logaritmines-ir-trigonometrines-funkcijos"], "next": ["isvestine-ir-diferencijavimas"], "notes": "Išplėstiniame III gimnazijos kurse aprašomos funkcijų ribos ir tolydumas."},
    {"id": "trigonometrines-lygtys", "title": "Trigonometrinės lygtys ir tapatūs pertvarkiai", "grade": 12, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "trigonometrinės lygtys", "order": 4, "minutes": 180, "prerequisites": ["rodiklines-logaritmines-ir-trigonometrines-funkcijos"], "next": ["trigonometrines-lygtys-ir-nelygybes-isplestinis"], "notes": "IV gimnazijos bendrajame kurse aprašomos trigonometrinės formulės ir lygčių sprendinių formulės."},
    {"id": "trigonometrines-lygtys-ir-nelygybes-isplestinis", "title": "Trigonometrinės lygtys ir nelygybės: išplėstinis kursas", "grade": 12, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "trigonometrinės lygtys ir nelygybės", "order": 5, "minutes": 210, "prerequisites": ["trigonometrines-lygtys"], "next": ["isvestines-taisykles-ir-optimizavimas"], "notes": "IV gimnazijos išplėstinis kursas prideda trigonometrinių formulių įrodymus ir trigonometrines nelygybes."},
    {"id": "isvestines-taisykles-ir-optimizavimas", "title": "Išvestinės taisyklės, funkcijų tyrimas ir optimizavimas", "grade": 12, "strand": "Modeliai ir sąryšiai", "kind": "analysis", "focus": "išvestinės taisyklės ir optimizavimas", "order": 6, "minutes": 230, "prerequisites": ["isvestine-ir-diferencijavimas"], "next": ["pirmykste-funkcija-ir-integralas"], "notes": "IV gimnazijos programoje išvestinė naudojama funkcijų tyrimui, ekstremumams, grafikams ir optimizavimui."},
    {"id": "stereometrija-tieses-plokstumos-ir-kampai", "title": "Stereometrija: tiesės, plokštumos, kampai ir atstumai", "grade": 12, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "tiesės, plokštumos ir kampai erdvėje", "order": 7, "minutes": 220, "prerequisites": ["trikampiu-trigonometrija-ir-apskritimai"], "next": ["briaunainiai-sukiniai-ir-pjuviai"], "notes": "IV gimnazijos programoje aprašomos stereometrijos aksiomos, tiesių ir plokštumų padėtys, kampai ir atstumai erdvėje."},
    {"id": "briaunainiai-sukiniai-ir-pjuviai", "title": "Briaunainiai, sukiniai, pjūviai, paviršiaus plotai ir tūriai", "grade": 12, "strand": "Geometrija ir matavimai", "kind": "geometry", "focus": "briaunainiai, sukiniai ir pjūviai", "order": 8, "minutes": 230, "prerequisites": ["stereometrija-tieses-plokstumos-ir-kampai"], "next": [], "notes": "IV gimnazijos programa išskiria prizmes, piramides, ritinius, kūgius, rutulius, pjūvius, paviršiaus plotus ir tūrius."},
    {"id": "statistine-duomenu-analize-ir-regresija", "title": "Statistinė duomenų analizė, koreliacija ir regresija", "grade": 12, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "statistinė analizė, koreliacija ir regresija", "order": 9, "minutes": 180, "prerequisites": ["duomenu-sklaida-skirstiniai-ir-patikimumas"], "next": [], "notes": "IV gimnazijos programa aprašo statistinio tyrimo procesą, koreliaciją, determinacijos koeficientą ir duomenų vizualizavimą."},
    {"id": "priklausomi-ir-nepriklausomi-ivykiai", "title": "Priklausomi ir nepriklausomi įvykiai, tikimybių medžiai", "grade": 12, "strand": "Duomenys ir tikimybės", "kind": "data", "focus": "priklausomi ir nepriklausomi įvykiai", "order": 10, "minutes": 160, "prerequisites": ["kombinatorika-ir-ilgalaike-tikimybe"], "next": [], "notes": "IV gimnazijos programa aprašo dviejų-trijų etapų bandymus, priklausomus ir nepriklausomus įvykius, Veno diagramas ir tikimybių medžius."},
])


def build_topic(spec: dict[str, Any]) -> dict[str, Any]:
    if spec["kind"] == "numbers":
        concepts = number_concepts(spec["id"], spec["focus"])
    elif spec["kind"] == "algebra":
        concepts = algebra_concepts(spec["id"], spec["focus"])
    elif spec["kind"] == "geometry":
        concepts = geometry_concepts(spec["id"], spec["focus"])
    elif spec["kind"] == "data":
        concepts = data_concepts(spec["id"], spec["focus"])
    elif spec["kind"] == "functions":
        concepts = function_concepts(spec["id"], spec["focus"])
    elif spec["kind"] == "quadratic":
        concepts = function_concepts(spec["id"], spec["focus"])  # includes quadratic concepts
    elif spec["kind"] == "systems":
        concepts = systems_concepts(spec["id"], spec["focus"])
    else:
        concepts = analysis_concepts(spec["id"], spec["focus"])

    formulas = build_formulas(spec, concepts)
    mistakes = build_mistakes(spec)
    theory = build_theory(spec, concepts, formulas)
    examples = build_examples(spec, concepts, formulas)
    exercises = build_exercises(spec, concepts, formulas)
    tests = [
        test_case(
            f"{spec['id']}-test-topic",
            f"{spec['title']} testas",
            "topic",
            [spec["id"]],
            [ex["id"] for ex in exercises[:8]],
            1.2,
            0.75,
            1800,
        ),
        test_case(
            f"{spec['id']}-test-challenge",
            f"{spec['title']} iššūkis",
            "olympiad" if spec["grade"] >= 9 else "topic",
            [spec["id"]],
            [ex["id"] for ex in exercises[8:16]],
            1.6,
            0.65,
            2400,
        ),
    ]
    srs_cards = [
        srs_card(
            f"{spec['id']}-srs-{item['id']}",
            "theory" if idx < 4 else "practice",
            "concept" if item["type"] == "concept" else "formula" if item["type"] == "formula" else "mistake",
            f"Kas yra {item['title'].lower()}?",
            item["shortDefinition"] if item["type"] == "concept" else item["explanation"] if item["type"] == "formula" else item["correction"],
            [item["id"]],
        )
        for idx, item in enumerate(concepts[:4] + formulas[:2] + mistakes[:2])
    ]
    return {
        "contentVersion": "0.1.0",
        "source": {
            "curriculum": CURRICULUM_SOURCE,
            "textbook": TEXTBOOK_SOURCE,
            "notes": spec["notes"],
        },
        "topic": {
            "id": spec["id"],
            "title": spec["title"],
            "grade": spec["grade"],
            "strand": spec["strand"],
            "level": "curriculum",
            "order": spec["order"],
            "estimatedStudyMinutes": spec["minutes"],
            "prerequisiteTopicIds": spec["prerequisites"],
            "nextTopicIds": spec["next"],
            "conceptIds": [c["id"] for c in concepts],
            "formulaIds": [f["id"] for f in formulas],
            "mistakeIds": [m["id"] for m in mistakes],
            "exerciseIds": [e["id"] for e in exercises],
        },
        "theory": theory,
        "concepts": concepts,
        "formulas": formulas,
        "mistakes": mistakes,
        "workedExamples": examples,
        "exercises": exercises,
        "tests": tests,
        "srsCards": srs_cards,
    }


def write_topic(spec: dict[str, Any]) -> tuple[str, dict[str, Any]]:
    grade_dir = OUT / f"{spec['grade']:02d}"
    grade_dir.mkdir(parents=True, exist_ok=True)
    data = build_topic(spec)
    file_path = grade_dir / f"{spec['id']}.json"
    file_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return file_path.relative_to(ROOT).as_posix(), data


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    manifest_topics: list[str] = []
    manifest_concepts: list[str] = []
    manifest_exercises: list[str] = []
    written: list[dict[str, Any]] = []
    for spec in TOPICS:
        rel, data = write_topic(spec)
        manifest_topics.append(rel)
        manifest_concepts.extend([c["id"] for c in data["concepts"]])
        manifest_exercises.extend([e["id"] for e in data["exercises"]])
        written.append({"id": spec["id"], "file": rel, "grade": spec["grade"], "title": spec["title"]})
    manifest = {
        "version": "0.1.0",
        "generatedAt": "2026-05-20T00:00:00+03:00",
        "curriculumSource": CURRICULUM_SOURCE,
        "textbookSource": TEXTBOOK_SOURCE,
        "topics": manifest_topics,
        "concepts": sorted(set(manifest_concepts)),
        "exercises": manifest_exercises,
        "written": written,
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(TOPICS)} topic files and manifest to {OUT}")


if __name__ == "__main__":
    main()
