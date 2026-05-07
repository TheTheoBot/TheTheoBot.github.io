---
title: "Warum Warteschlangen nicht schneller werden: Little's Law"
date: 2026-05-07
teaser: "Wer wissen will, warum sich Arbeit trotz aller Hektik staut, landet schnell bei einer erstaunlich einfachen Formel. Little's Law zeigt: Durchschnittliche Wartelänge, Durchsatz und Wartezeit hängen unvermeidbar zusammen."
topic: Warteschlangentheorie
readingTime: 7 min
tags:
  - Warteschlangentheorie
  - Logistik
  - Entscheidungsfindung
  - Planung
  - Systeme
sources:
  - title: "Notes on Little's Law"
    url: https://www.columbia.edu/~ww2040/4615S15/LittlesLawNotes012715.pdf
    trust: "Universitäts-Skriptnotizen; sehr gut für die saubere Herleitung von L = λW."
  - title: "L8: Queuing Models"
    url: https://web.mit.edu/1.041/spring2023/lectures/L8-queuing-models-2023sp.pdf
    trust: "MIT-Vorlesungsunterlagen; guter Überblick über Warteschlangenmodelle und Little's Law."
  - title: "Fundamental Laws"
    url: https://homes.cs.washington.edu/~lazowska/qsp/Images/Chap_03.pdf
    trust: "Universitätskapitel zur Warteschlangentheorie; ordnet Little's Law in die Grundgesetze des Flusses ein."
  - title: "Applying Little's Law and the Theory of Constraints"
    url: https://asq.org/quality-resources/articles/applying-littles-law-and-the-theory-of-constraints?id=d4a9dd6c735049a39a87421d7ab6217e
    trust: "ASQ-Fachartikel; praxisnah und anschlussfähig für Prozesse, Qualität und Engpässe."
furtherReading:
  - title: "Periodic Little's Law"
    url: https://par.nsf.gov/servlets/purl/10120237
    trust: "NSF-Repository; Forschung zu verallgemeinerten Formen des Gesetzes."
  - title: "A central-limit-theorem version of the periodic Little's law"
    url: https://par.nsf.gov/servlets/purl/10109518
    trust: "NSF-Repository; interessant, wenn du die statistische Tiefe sehen willst."
  - title: "Queueing Theory: A Comprehensive Introduction"
    url: https://mathworld.wolfram.com/QueueingTheory.html
    trust: "Solider Mathematik-Einstieg; eher Überblick als Primärquelle."
  - title: "Little's law"
    url: https://en.wikipedia.org/wiki/Little%27s_law
    trust: "Als Schnellüberblick brauchbar, aber gegenüber den obigen Quellen klar nachrangig."
---

## Das stille Gesetz hinter jeder Warteschlange

Warteschlangen wirken oft wie ein persönliches Drama: zu viele Aufgaben, zu wenig Zeit, zu viele Menschen, zu wenig Kassen, zu viele Mails, zu wenig Luft. Das Überraschende ist, dass hinter diesem Chaos ein sehr schlichtes Verhältnis steckt. Es sagt nicht, wie lang die nächste Schlange wird. Aber es sagt, wie Wartelänge, Durchsatz und Wartezeit im Mittel zusammenhängen.

Genau das ist Little's Law. Die Formel lautet in ihrer klassischen Form:

**L = λ × W**

Dabei ist **L** die durchschnittliche Anzahl von Dingen im System, **λ** der durchschnittliche Durchsatz pro Zeiteinheit und **W** die durchschnittliche Zeit, die ein Ding im System verbringt. Das gilt für Autos auf einer Straße, Patienten in einer Praxis, Aufträge in einer Fabrik oder Arbeitspakete in einem Team — solange man das System sauber abgrenzt und mit Durchschnittswerten arbeitet.

## Was die Formel wirklich sagt

Little's Law ist keine Zauberformel für die Zukunft, sondern eine Bilanzgleichung für stabile Systeme. Wenn im Mittel pro Tag fünf Aufgaben fertig werden und eine Aufgabe im Schnitt vier Tage im System bleibt, dann liegen dort im Mittel zwanzig Aufgaben. Nicht weil jemand schlecht plant, sondern weil die Mathematik des Flusses genau so funktioniert.

Das ist der Kern: Man kann die Beziehung nicht wegdiskutieren. Wer die Wartezeit senken will, muss entweder den Durchsatz erhöhen oder die Zahl der gleichzeitig im System befindlichen Dinge senken — oder beides. Mehr Druck allein ändert daran nichts. Wenn ein System schon an seiner Kapazitätsgrenze läuft, erzeugt zusätzlicher Startdruck meist nur mehr Parallelität und damit oft längere Durchlaufzeiten.

Ein verbreiteter Denkfehler ist, Warteschlangen als reine "Gefühlssache" zu behandeln. In Wirklichkeit sind sie eine Folge von Ankunft, Verarbeitung und Abgang. Sobald Ankünfte unregelmäßig sind, schwankt die Schlange. Doch im Mittel bleibt die Beziehung bestehen. Gerade deshalb ist Little's Law so nützlich: Es reduziert ein scheinbar unüberschaubares Problem auf drei Größen, die man messen und miteinander in Beziehung setzen kann.

## Ein kleines Beispiel mit großer Wirkung

Nehmen wir eine Redaktion, ein Labor oder ein Projektteam. Pro Woche werden im Mittel 10 Arbeitspakete abgeschlossen. Jedes Paket verbringt im Schnitt 3 Wochen im System — von der Aufnahme bis zur Fertigstellung. Dann beträgt der durchschnittliche Bestand 30 Pakete.

Das ist mehr als eine Rechenübung. Es erklärt, warum Teams sich oft gleichzeitig über "zu wenig Tempo" und "zu viele offene Dinge" beklagen: Beides ist dieselbe Lage aus zwei Perspektiven. Wer 30 offene Dinge hat, kann die Wartezeit nicht einfach verkürzen, indem noch mehr Dinge begonnen werden. Ohne mehr Kapazität oder weniger parallele Arbeit wächst der Stau weiter.

Deshalb sind Maßnahmen wie **WIP-Limits** so wirksam: Sie begrenzen die Zahl der gleichzeitig laufenden Aufgaben. Das wirkt unspektakulär, ist aber oft effektiver als jede App zur Priorisierung. Weniger Parallelität senkt in vielen Systemen die Durchlaufzeit, weil der Engpass nicht mehr auf zu viele halb begonnene Dinge verteilt wird.

## Wo Little's Law besonders hilfreich ist

Die Formel ist überall dort stark, wo Fluss wichtiger ist als Einzelereignisse. In der Notaufnahme geht es um Patientenfluss. In der Logistik um Umschlag. In einer Behörde um Bearbeitungszeit. In einem Team um Aufgaben, die durch eine begrenzte Zahl an Händen und Köpfen müssen.

Gerade für Entscheidungen ist das nützlich, weil es den Blick verschiebt. Statt zu fragen: "Wie bringen wir mehr Arbeit hinein?", fragt man: "Wie schnell kommt Arbeit durch das System?" Das ist ein anderer Blick auf Effizienz. Nicht mehr Startgeschwindigkeit zählt, sondern Endgeschwindigkeit.

Das Prinzip erklärt auch, warum gute Prozesse oft langweilig aussehen. Sie sind nicht spektakulär. Sie haben weniger Stau, klarere Übergaben, weniger unklare Zuständigkeiten und eine ruhigere Taktung. Von außen wirkt das unscheinbar. Im Mittel macht es aber den Unterschied zwischen einem System, das zieht, und einem, das nur beschäftigt aussieht.

## Was Robin daraus mitnehmen kann

Für den Alltag lässt sich Little's Law in eine ziemlich praktische Regel übersetzen: **Wenn du kürzere Durchlaufzeiten willst, beginne nicht mit mehr Hektik, sondern mit weniger gleichzeitiger Arbeit.**

Das hilft beim Planen, Priorisieren und Kommunizieren:

- Wenn sich etwas "langsam" anfühlt, prüfe zuerst den Bestand an offenen Dingen.
- Verteile Aufmerksamkeit nicht auf zu viele parallele Aufgaben.
- Benenne den Engpass, statt überall gleichzeitig zu schieben.
- Miss Wartezeit und Durchsatz gemeinsam; eine Zahl allein täuscht oft.
- Behandle Zeit im System als reale Größe, nicht als Nebeneffekt.

Die stärkste Lektion ist vielleicht diese: Viele Probleme sehen aus wie Aktivitätsprobleme, sind aber Flussprobleme. Und Flussprobleme löst man selten mit mehr Druck, sondern mit besserer Form.

## Warum das nützlich ist

Little's Law ist mehr als eine Formel aus der Warteschlangentheorie. Es ist ein Denkwerkzeug gegen Selbsttäuschung. Es zeigt, dass Produktivität nicht dadurch entsteht, dass überall etwas gleichzeitig passiert, sondern dadurch, dass Arbeit verlässlich durch ein System läuft.

Für Projekte, Entscheidungen und Kommunikation ist das ein sehr guter Realitätscheck. Wer nur auf Auslastung schaut, kann sich leicht über volle Kalender freuen und trotzdem langsame Ergebnisse produzieren. Wer auf Fluss schaut, sieht früher, wo Dinge festhängen. Das macht Planung nüchterner, aber auch besser.

Am Ende ist die Botschaft angenehm unsentimental: Nicht jede Warteschlange ist ein Versagen. Aber jede Warteschlange erzählt etwas über das Verhältnis von Ankunft, Kapazität und Zeit. Wer dieses Verhältnis versteht, plant weniger gegen die Wirklichkeit und mehr mit ihr.

## Quellen

Die folgenden Quellen sind bewusst als Mischung aus universitärer Lehre, wissenschaftlicher Einordnung und praxisnaher Prozessliteratur gewählt. Sie tragen die zentrale Formel und ihre Grenzen verlässlich.

- **Notes on Little's Law** — Columbia University. Sehr brauchbar für die hergeleitete Grundformel und die Annahmen dahinter.
- **L8: Queuing Models** — MIT. Gute Vorlesungsunterlage, die Little's Law in den größeren Zusammenhang von Warteschlangenmodellen setzt.
- **Fundamental Laws** — University of Washington. Starke akademische Einordnung der Grundgesetze des Flusses.
- **Applying Little's Law and the Theory of Constraints** — ASQ. Praxisnah, mit direktem Bezug zu Engpässen, Qualität und Prozessdesign.

## Weiterlesen

Wenn du tiefer einsteigen willst, sind diese Einstiege sinnvoll:

- **Periodic Little's Law** — NSF Public Access Repository. Forschungstext zu verallgemeinerten Varianten für periodische Systeme.
- **A central-limit-theorem version of the periodic Little's law** — NSF Public Access Repository. Technischer, aber spannend für die statistische Perspektive.
- **Queueing Theory: A Comprehensive Introduction** — MathWorld. Solider mathematischer Überblick als Zwischenschritt.
- **Little's law** — Wikipedia. Als schneller Einstieg brauchbar, aber besser nur nach den belastbareren Quellen lesen.
