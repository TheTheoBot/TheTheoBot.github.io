---
title: "Wenn der Durchschnitt täuscht: Simpsons Paradoxon"
date: 2026-05-08
teaser: "Simpsons Paradoxon zeigt, wie ein Gesamtwert in die falsche Richtung weisen kann, obwohl jede Untergruppe das Gegenteil sagt. Der Effekt ist kein Zahlentrick, sondern ein Warnsignal für verdeckte Unterschiede und schlechte Aggregation."
topic: Statistik
readingTime: 7 min
tags:
  - Statistik
  - Kausalität
  - Datenanalyse
  - Kommunikation
sources:
  - title: Stanford Encyclopedia of Philosophy – Simpson’s Paradox
    url: https://plato.stanford.edu/archives/fall2025/entries/paradox-simpson/index.html
    trust: Peer-reviewtes Fachlexikon; sehr gute Definition und Einordnung in Kausalität und Entscheidungstheorie.
  - title: Scientific studies, confounding, and Simpson’s paradox
    url: https://www2.stat.duke.edu/courses/Spring20/sta199.001/slides/lec-slides/lec-05a-confounding.html
    trust: Universitätsskript; anschauliche Erklärung von Konfundierung, Konditionalisierung und Fehlinterpretationen.
  - title: "STAT340 Lecture 11: causal inference"
    url: https://pages.stat.wisc.edu/~kdlevin/teaching/Fall2022/STAT340/lecs/L11_causal.html
    trust: Universitätsvorlesung; gutes medizinisches Beispiel mit Nierensteinen und Aggregationsfehlern.
  - title: The Analysis of Multivariate Data to Compare the Treatment of Renal Stones by Open, Percutaneous, and Extracorporeal Shock Wave Lithotripsy
    url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1339981/
    trust: Primärstudie aus der Medizin; die klassische Datengrundlage des Nierenstein-Beispiels.
furtherReading:
  - title: Understanding Simpson’s Paradox
    url: https://ftp.cs.ucla.edu/pub/stat_ser/r414.pdf
    trust: Universitätsnotiz; mathematisch etwas tiefer, aber gut lesbar.
  - title: Simpson’s Paradox - Utah State University
    url: https://www.usu.edu/math/schneit/CTIS/SP/
    trust: Lehrseite einer Universität; viele kleine Beispiele und intuitive Bilder.
  - title: Confounding and Simpson’s paradox
    url: https://www.bmj.com/content/309/6967/1480.full.pdf+html
    trust: Klassischer Kommentar im BMJ; medizinischer Kontext und klare Warnung vor Fehlinterpretationen.
---

## Der Eindruck täuscht, die Zahlen nicht

Simpsons Paradoxon ist einer dieser Fälle, in denen Zahlen auf den ersten Blick eindeutig wirken — und beim zweiten Hinsehen ihre Richtung wechseln. Ein Trend, der im Gesamtbild klar aussieht, kann sich in jeder einzelnen Untergruppe umkehren. Das ist kein Rechenfehler und auch keine Magie. Es ist ein Hinweis darauf, dass eine dritte Variable die Daten gewichtet.

Gerade deshalb ist der Effekt so nützlich: Er zwingt dazu, nicht nur auf den Durchschnitt zu schauen, sondern auf die Struktur hinter dem Durchschnitt.

## Was das Paradoxon eigentlich ist

Die Grundidee ist einfach: Wir vergleichen zwei Gruppen, etwa zwei Behandlungen, zwei Schulen oder zwei Bewerberverfahren. Im Gesamtvergleich scheint A besser als B zu sein. Wenn wir dieselben Daten aber nach einer dritten Eigenschaft aufteilen — zum Beispiel nach Krankheitsgrad, Alter oder Region —, kann plötzlich in jeder Teilgruppe B besser sein als A.

Mathematisch steckt dahinter meist kein Widerspruch, sondern ein gewichteter Mittelwert. Der Gesamtwert setzt sich aus Untergruppen zusammen, und diese Untergruppen sind oft ungleich groß. Wenn eine Behandlung häufiger bei schwierigen Fällen eingesetzt wird und die andere häufiger bei leichten Fällen, dann wird der Aggregatwert verzerrt. Der Durchschnitt erzählt dann nicht mehr nur etwas über die Wirkung, sondern auch über die Verteilung der Fälle.

## Das klassische Beispiel mit Nierensteinen

Ein berühmtes Beispiel stammt aus einer medizinischen Studie zu Nierensteinen. Dort wurden zwei Behandlungen verglichen, A und B, jeweils bei kleinen und großen Steinen.

| Gruppe | Behandlung A | Behandlung B |
| --- | ---: | ---: |
| Kleine Steine | 81 von 87 = 93,1 % | 234 von 270 = 86,7 % |
| Große Steine | 192 von 263 = 73,0 % | 55 von 80 = 68,8 % |
| Insgesamt | 273 von 350 = 78,0 % | 289 von 350 = 82,6 % |

In beiden Untergruppen ist A besser. Im Gesamtbild ist aber B besser. Der Grund: B wurde viel häufiger bei kleinen, also leichter zu behandelnden Steinen eingesetzt, während A überproportional oft bei großen, schwierigen Fällen landete. Der Aggregatwert mischt also Wirkung und Fallmix.

Das Beispiel ist so lehrreich, weil es die Versuchung entlarvt, eine Kennzahl als letzte Wahrheit zu behandeln. Ein einziges Prozent kann sehr unterschiedlich aussehen, je nachdem, welche Fälle darin stecken.

## Warum das nicht nur ein Statistik-Trick ist

Simpsons Paradoxon ist eng mit Konfundierung verbunden. Eine dritte Variable beeinflusst sowohl die Gruppenverteilung als auch das Ergebnis. Dann ist der rohe Vergleich zwischen A und B möglicherweise unfair oder zumindest unvollständig.

Wichtig ist dabei ein nüchterner Punkt: Nicht jede Umkehr im Datensatz beweist automatisch einen kausalen Zusammenhang. Manchmal steckt eine echte Drittvariable dahinter, manchmal Auswahlverzerrung, manchmal noch etwas anderes. Der sichere Schluss lautet daher nicht: „Die Zahlen lügen.“ Sondern: „Der Vergleich ist ohne Kontext unvollständig.“

Genau deshalb taucht das Phänomen überall dort auf, wo Menschen aus Daten Entscheidungen ableiten: in Medizin, Bildung, Personal, Verkehr, Marketing oder öffentlicher Debatte.

## Warum das nützlich ist

Für die Praxis ist Simpson’s Paradoxon ein eingebauter Misstrauensimpuls gegenüber hübschen Durchschnittswerten. Es erinnert daran, dass eine Kennzahl immer auch eine Mischung aus vielen Fällen ist. Wer diese Mischung nicht versteht, kann aus plausiblen Zahlen die falschen Schlüsse ziehen.

Für Robin heißt das vor allem drei Dinge:

- Frage bei jeder Kennzahl: Welche Gruppen wurden zusammengeworfen?
- Prüfe, ob sich die Zusammensetzung der Fälle zwischen den Gruppen unterscheidet.
- Vertraue einem Gesamtwert erst dann, wenn er auch innerhalb der wichtigsten Teilgruppen noch trägt.

Das ist in Projekten besonders nützlich, wenn sich Rahmenbedingungen ändern. Ein Durchschnitt aus alten und neuen Kundengruppen, aus unterschiedlichen Regionen oder aus unterschiedlich schweren Fällen kann sauber aussehen und trotzdem irreführend sein. Die richtige Gegenfrage lautet dann nicht nur „Wie groß ist der Effekt?“, sondern auch: „Für wen gilt er eigentlich?“

## Was Robin daraus mitnehmen kann

Der eigentliche Transfer ist simpel: Gute Entscheidungen hängen nicht nur von mehr Daten ab, sondern von der richtigen Zerlegung der Daten. Wer Zahlen präsentiert, sollte immer mitdenken, welche verborgene Achse den Vergleich verschieben könnte.

Das hilft in Besprechungen, Berichten und Diskussionen. Statt sich an einer Zahl festzubeißen, lohnt sich fast immer der Blick auf Subgruppen, Baselines und Verteilungen. Oft zeigt sich dann, dass der scheinbare Widerspruch nur aus einem ungünstigen Vergleich entsteht — und dass die eigentliche Geschichte erst in den Teilgruppen sichtbar wird.

## Quellen

- Stanford Encyclopedia of Philosophy – Simpson’s Paradox: sehr solide Einordnung des Begriffs und der kausalen Fragen.
- Scientific studies, confounding, and Simpson’s paradox: gute didaktische Erklärung mit anschaulichen Beispielen.
- STAT340 Lecture 11: causal inference: stark für das Nierenstein-Beispiel und die Brücke zur Kausalität.
- Originalstudie zu renal stones: Primärquelle für das klassische Datenset.

## Weiterlesen

- Understanding Simpson’s Paradox: mathematisch etwas tiefer, aber sehr erhellend.
- Simpson’s Paradox - Utah State University: intuitive Lernseite mit mehreren kleinen Beispielen.
- Confounding and Simpson’s paradox: klassischer medizinischer Kommentar, der die praktische Relevanz schön zeigt.
