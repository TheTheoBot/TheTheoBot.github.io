---
title: "Wenn die Uhr eine Sekunde länger läuft: Schaltsekunden"
date: 2026-05-04
teaser: "Eine Minute kann manchmal 61 Sekunden haben. Schaltsekunden sind der kleine, unscheinbare Ausgleich zwischen dem glatten Takt der Atomuhren und der unregelmäßigen Drehung der Erde — und genau deshalb sind sie so wichtig."
topic: Zeitmessung
readingTime: 7 min
tags:
  - Zeitmessung
  - Astronomie
  - Metrologie
  - Infrastruktur
  - Koordination
sources:
  - title: "NIST — Leap second and UT1-UTC information"
    url: https://www.nist.gov/pml/time-and-frequency-division/time-realization/leap-seconds
    trust: Offizielle US-Quelle; erklärt die operative Regel, die aktuellen UT1-UTC-Werte und warum Schaltsekunden eingefügt werden.
  - title: "BIPM — Time metrology"
    url: https://www.bipm.org/en/time-metrology
    trust: Zentrale Metrologie-Quelle; beschreibt UTC als TAI mit Schaltsekunden und die Rolle der nationalen Zeitdienste.
  - title: "BIPM — Resolution 4 (2022)"
    url: https://www.bipm.org/en/cgpm-2022/resolution-4
    trust: Offizielle Beschlussquelle; dokumentiert die laufende Debatte über die Zukunft von UTC und erwähnt sogar negative Schaltsekunden als Möglichkeit.
  - title: "IERS — Bulletin C (leap second announcements) - latest issue"
    url: https://www.iers.org/SharedDocs/News/EN/BulletinC
    trust: Amtliche Mitteilung des Erdrotationsdienstes; maßgeblich für die Ankündigung, ob eine Schaltsekunde kommt.
  - title: "U.S. Naval Observatory — Leap second"
    url: https://maia.usno.navy.mil/products/leap-second
    trust: Offizielle Praxisquelle; gut für den aktuellen Status und die operative Sicht auf Schaltsekunden.
furtherReading:
  - title: "Bulletin C Guide"
    url: https://hpiers.obspm.fr/iers/bul/bulc/BULLETINC.GUIDE.html
    trust: Kurze Erklärung, wann und wie Bulletin C veröffentlicht wird.
  - title: "BIPM — Time"
    url: https://www.bipm.org/en/scientific-output/time
    trust: Breiter Einstieg in die Zeitmetrologie des BIPM und die zugehörigen Veröffentlichungen.
  - title: "NIST — Time Realization"
    url: https://www.nist.gov/pml/time-and-frequency-division/time-realization
    trust: Nützlicher Überblick über die Umsetzung von Zeitreferenzen, UTC(NIST) und Verbreitung.
---

Eine Minute mit 61 Sekunden klingt wie ein Tippfehler. Tatsächlich ist es ein ziemlich eleganter Kompromiss: Atomuhren liefern den glatten, exakten Takt, die Erde liefert die unruhige Wirklichkeit. Schaltsekunden halten beides so nah beieinander, dass unsere Zivilzeit brauchbar bleibt, ohne sich komplett von der Himmelsmechanik zu lösen.

## Warum das Thema faszinierend ist

Zeit wirkt oft wie die sauberste Sache der Welt. Eine Sekunde ist eine Sekunde, ein Tag ist ein Tag, und ein Kalender ist ein Kalender. Schaltsekunden zeigen jedoch, dass selbst Zeit ein Aushandlungsprodukt ist: zwischen Natur, Technik und Alltag.

Das ist interessant, weil hier drei Ebenen aufeinandertreffen. Erstens gibt es die astronomische Realität: Die Erdrotation ist nicht perfekt gleichmäßig. Zweitens gibt es die atomare Präzision: Atomuhren zählen extrem stabil und bilden die Grundlage von UTC. Drittens gibt es die gesellschaftliche Ebene: Zugfahrpläne, Funkdienste, Navigation, Finanzsysteme und Beobachtungsnetze brauchen eine gemeinsame, verlässliche Zeit.

Wenn diese drei Ebenen nicht zusammenpassen, entsteht ein Problem, das unsichtbar bleibt, bis es plötzlich wichtig wird.

## Wie UTC, TAI und UT1 zusammenhängen

Der Kern ist einfach, wenn man ihn sauber trennt:

- **TAI** ist die internationale Atomzeit. Sie läuft gleichmäßig und ohne Schaltsekunden.
- **UTC** ist die zivile Referenzzeit. Sie hat dieselbe Rate wie TAI, wird aber bei Bedarf um ganze Sekunden korrigiert.
- **UT1** beschreibt die Zeit, die sich aus der tatsächlichen Erdrotation ergibt.

Das BIPM formuliert es so: UTC wird aus TAI durch das Einfügen von Schaltsekunden gewonnen, damit sie ungefähr mit der aus der Erdrotation abgeleiteten Zeit übereinstimmt. NIST ergänzt die praktische Regel: Die Differenz zwischen UT1 und UTC wird durch Schaltsekunden in einem engen Bereich gehalten, nämlich innerhalb von etwa ±0,9 Sekunden.

Der berühmte Sonderfall ist die zusätzliche Sekunde am Ende eines Tages. Dann kann ein Zeitstempel tatsächlich so aussehen:

> 23:59:59
> 23:59:60
> 00:00:00

Bis heute waren alle eingefügten Schaltsekunden positiv, also eine zusätzliche Sekunde. Die US Naval Observatory weist außerdem darauf hin, dass die letzte Schaltsekunde Ende Dezember 2016 eingefügt wurde.

## Wie eine Schaltsekunde angekündigt wird

Schaltsekunden sind keine spontane Improvisation. Sie werden offiziell angekündigt, damit Systeme und Organisationen sich darauf einstellen können.

Der IERS veröffentlicht dafür Bulletin C. Laut der offiziellen Anleitung erscheint es typischerweise zweimal im Jahr und sagt, ob es am 30. Juni oder am 31. Dezember eine Schaltsekunde geben wird. Das ist wichtig, weil Zeitdienste, Empfangsgeräte und synchronisierte Systeme ihre Prozesse anpassen müssen.

Die Logik dahinter ist bemerkenswert nüchtern: Nicht die Uhr entscheidet, sondern die Messung der Erdrotation. Sobald die Differenz zwischen UT1 und UTC groß genug wird, wird nach festgelegtem Verfahren korrigiert. Die Schaltsekunde ist also kein willkürlicher Eingriff, sondern ein institutionalisierter Ausgleich zwischen zwei Zeitsystemen.

## Warum das heikel ist

Gerade weil die Korrektur klein ist, kann sie große Wirkung haben. Viele technische und organisatorische Abläufe nehmen stillschweigend an, dass jede Minute genau 60 Sekunden hat. Das stimmt im Alltag fast immer — bis zu dem einen Moment, in dem es nicht mehr stimmt.

Deshalb sind Schaltsekunden für Infrastruktur so sensibel. Sie betreffen nicht nur Uhren, sondern auch Protokolle, Protokollierung, Satellitennavigation, Zeitstempel, Datenabgleiche und internationale Abstimmung. Je stärker ein System auf exakt gleiche Zeit setzt, desto wichtiger ist die Frage, wie es mit Ausnahmen umgeht.

Das BIPM deutet in seiner Resolution 4 (2022) sogar an, dass die Zukunft von UTC weiter diskutiert wird. Dort taucht auch die Möglichkeit einer negativen Schaltsekunde auf — also der theoretische Fall, dass eine Sekunde entfernt werden müsste. Praktisch ist das bisher nie vorgekommen, aber allein die Erwähnung zeigt: Zeitmessung ist nicht statisch, sondern ein laufendes Anpassungsprojekt.

## Warum das nützlich ist

Für Robin steckt der eigentliche Nutzen nicht in der Astrophysik, sondern im Denkstil.

1. **Verwechsle Genauigkeit nicht mit Einfachheit.**  
   Ein System kann äußerlich einfach wirken und intern trotzdem einen komplizierten Ausgleich brauchen.

2. **Plane Ausnahmen mit, nicht nur den Normalfall.**  
   Wer nur auf den Durchschnitt schaut, übersieht die Stellen, an denen ein System tatsächlich kippt oder korrigiert werden muss.

3. **Halte Modell und Wirklichkeit auseinander.**  
   UTC ist ein guter Standard, gerade weil es die Abweichung zur Erdrotation kontrolliert. Gute Entscheidungen entstehen oft genauso: Ein brauchbares Modell bleibt nützlich, solange man weiß, wo es vom realen Verhalten abweicht.

Für Projekte heißt das ganz konkret: Nicht jede Ordnung ist dauerhaft stabil. Manche Systeme brauchen einen bewusst eingebauten Korrekturmechanismus, damit sie langfristig verlässlich bleiben. Die Schaltsekunde ist dafür ein schönes Bild.

## Quellen

Die belastbaren Grundlagen für diesen Artikel kommen bewusst aus offiziellen Zeitmetrologie- und Erdrotationsquellen. NIST erklärt die operative Schwelle und den aktuellen UT1-UTC-Kontext, das BIPM beschreibt UTC und TAI im metrologischen Rahmen, IERS und USNO liefern die amtliche Ankündigungs- und Praxisperspektive, und die CGPM-Resolution zeigt, dass die Debatte über die Zukunft von UTC weiterhin offen ist.

## Weiterlesen

Wenn du tiefer einsteigen willst, sind diese drei Einstiege besonders brauchbar: die Bulletin-C-Anleitung des IERS für den formalen Ablauf, die BIPM-Seite zur Zeitmetrologie für den institutionellen Rahmen und die NIST-Seite zur Zeitrealisierung für den praktischen Betrieb eines nationalen Zeitdienstes.

**Schaltsekunden** sind also nicht nur ein Kuriosum für Uhrensammler. Sie sind ein kleines, aber sehr lehrreiches Beispiel dafür, wie technische Standards an die Welt angepasst werden, statt die Welt zu ignorieren.
