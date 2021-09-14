# Programmieren Advanced

... IN ARBEIT ...

<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">

Der dritte Teil sollte nun für jene von euch Anregungen bieten, die schon viel mit Micro:bit programmiert haben und einzelne Erweiterungen und Verbesserungen probieren wollen. Micro:bit ist sehr leistungsfähig und reicht oftmals an Plattformen wie Arduino oder Raspberry PI heran, diese sind wichtige Plattformen für den Bastler- und Elektronikbereich.

Hier in diesem Abschnitt werden wir dir jetzt einzelne Ideen mit Lösungen vorgestellt, sie sollen als Ideen für Weiterentwicklungen dienen.

## Erweiterung 1: Senden von zufälligen Morsezeichen

* Wir wollen nun per Zufall Daten versenden, der Computer sollte auswählen, welches Zeichen versandt wird

### Vorübung: Zeige eine Zufallszahl

* Zufallszahlen befinden sich im Bereich der ``|Mathematik|``
* Der Befehl heißt `Wähle eine zufällige Zahl von 0 bis 10`
* Experimentiere mit der  Zufallsfunktion: Ändere den Wertebereich
* Übung: Wie kann man das Würfeln wie mit einem Spielwürfel simulieren: Zahlen von 1 - 6

```blocks
input.onButtonPressed(Button.A, function () {
   basic.showLeds(`
      . . . . .
      . . . . .
      . . . . .
      . . . . .
      . . . . .
   `)
   basic.showNumber(randint(0, 10))
})
```

* [Programmcode **Zeige zufällige Zahl**](https://makecode.microbit.org/#pub:_8ftYxp4D996s)

* Überlege: Im Programmcode ist ein leeres Anzeigefeld eingebaut - was könnte der Grund dafür sein?

### Zeige eines Zufallsbuchstaben

* Wir werden in unserem Programm 26 Buchstaben verwenden - also brauchen wir eine Zufallszahl zwischen 0 und 25.  
* [Programmcode **Zeige zufällige Buchstaben**](https://makecode.microbit.org/#pub:_RcD107c83V1o){:target="_blank"}
* Dabei greift man mit dem Befehl ``||array: [liste_buchstaben[zufall]]||`` auf ein Element der Buchstaben-Liste zu und zeigt den gefundenen Buchstaben an.
* Experimentiert mit diesem Befehl

### Zeige ein Morsezeichen per Zufall

* Wir möchten mit unserem Testprogramm den Morsecode eines zufälligen Buchstabens senden: Was ist zu ändern?
* [Programmcode **Zeige zufälliges Morsezeichen**](https://makecode.microbit.org/#pub:_VwkKjmbcrU7V)

### Sende ein zufälliges Morsezeichen zum Empfänger

* Das zufällige Morsezeichen zum Empfänger versendet werden
* Wir vervollständigen auf früheren Programmcode zurück und bauen diesen weiter
* [Programmcode **Sende Morsecodes**](https://makecode.microbit.org/#pub:_Vy4KdpPxpWTm){:target="_blank"}

### Handshake: Bestätigung des Empfangs

* Nun sollte der Empfänger noch bestätigen, ob er die Nachricht erhalten und verstanden hat.
* Da die ``|Taste A|`` schon belegt ist, wird ``|Taste B|`` für die Antwort verwendet
* Diese sendet ein 'ok' zurück, wenn alles verstanden wurde
* Erst dann darf der **Sender** wieder eine neue Nachricht abschicken
* Wurde die Sendungsinformation **nicht** verstanden, drückt der Empfänger auf die Tastenkombination ``|Tasten A+B|`` - dadurch wird ein "no" gesendet.
* Somit sieht der **Sender** auf sein Micro:bit-Display ein 'ok' oder 'no'
* Probiert einmal 5 Durchgänge, schreibt die Ergebnisse auf, wie viele Morsezeichen ihr richtig erkannt haben und wechselt dann die Rollen
* Seht euch auch den Programmcode an
* !!! Genaue Abmachungen zwischen Sender und Empfänger sind besonders wichtig !!!

* Das fertige Ergebnis sieht man im folgenden Programmcode.
* [Programmcode **Handshake**](https://makecode.microbit.org/#pub:_ijv32j2rRa7u){:target="_blank"}
* <img width="90%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/morse_handshake.png?raw=1">

* Rollen tauschen** (immer die genaue Abstimmung mit dem Partner/der Partnerin)

* Merke: Die ``|Taste A|`` gehört immer dem **Sender**
* Erfindet selbst neue Spielregeln dazu

### Eine kleine Belohnung: Mit Tonausgabe

<img width="30%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/tonausgabe.png?raw=1">

* Einbau einer Zusatzfunktion Tonausgabe (Micro:bit V2 erforderlich oder ein angeschlossener Kopfhörer):
* Sobald ein Buchstabe beim Empfänger ankommt, soll ein Ton gespielt werden
* Ebenso, wenn die Antwort bei Sender ankommt

```block
  music.playTone(262, music.beat(BeatFraction.Whole))
```

* [Programmcode: **Tonausgabe**](https://makecode.microbit.org/#pub:_0Uw0EdbciAaa){:target="_blank"}

<hr>

## Erweiterung 2: Senden von akustischen Signalen

* Statt optischer Zeichen werden jetzt kurze und lange Töne gesendet.
* Sobald ein Morsecode gewählt ist, sollten das Zeichen Punkt einen kurzen Ton erzeugen und der Strich einen langen Ton
* Erreichen kann man das, indem man eine Musiknote kurz oder lang spielt.
* Als Ausgangspunkt wählen wir das obere Programm "Handshake"
* [Programmcode **Handshake**](https://makecode.microbit.org/#pub:_ijv32j2rRa7u){:target="_blank"}

### Empfängernachricht analysieren

* Hierzu muss das empfangene Morsezeichen (receiveString) zerlegt und untersucht werden
* <img width="100%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umsetzung_ton.png?raw=1">
* Es wird eine Schleife durch alle übertragenen Morsezeichen gestartet und gefragt,
  * ob ein "." vorkommt: dann wird ein kurzer Ton gespielt
  * ob ein "-" vorkommt: dann wird ein langer Ton gespielt
  * ob ein Leerzeichen (Wortende) vorkommt: dann wird eine Pause gewartet

* [Programmcode: Morsezeichen als Tonsignalen](https://makecode.microbit.org/#pub:_bsWVoP2PLdbK){:target="_blank"}  
* Trainiert etwas mit diesem Programm - das hört sich schon mehr nach Morsezeichen an.

<hr>

## Erweiterung 3: Senden von Lichtsignalen

* Statt den optischen Signalen werden jetzt kurze und lange Lichtsignale gesendet.
* Sobald ein Morsecode gewählt ist, sollten das Zeichen **Punkt** ein kurzes Lichtsignal erzeugen und der **Strich** ein langes Lichtsignal
* Erreichen kann man dies, indem man eine alle 25 Lichtpunkte des Micro:bit verschieden lange aufleuchten lässt.
* Als Ausgangspunkt wählen wir das obere Programm "Handshake"
* [Programmcode **Handshake**](https://makecode.microbit.org/#pub:_ijv32j2rRa7u){:target="_blank"} 

### Empfängernachricht analysieren

* Hierzu muss das empfangene Morsezeichen (receiveString) zerlegt und untersucht werden
* <img width="80%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umsetzung_licht.png?raw=1">
* Es wird eine Schleife durch alle eingelangten Morse gestartet und gefragt,
  * ob ein "." vorkommt: dann wird ein kurzes Lichtsignal
  * ob ein "-" vorkommt: dann wird ein langes Lichtsignal
  * ob ein Leerzeichen (Wortende) vorkommt: Pause

* [Programmcode: Morsezeichen als Lichtsignalen](https://makecode.microbit.org/#pub:_E7s9aqKLqicd){:target="_blank"}  
* Analysiert und ändert dieses Programm

<hr>

## Erweiterung 4: "Eine Tastatur zum Auswählen der Buchstaben"

* Statt dem zufälligen Auswählen eines Morsezeichens, wollen wir mit Hilfe einer "Tastatur" die Sende-Buchstaben auswählen können
* Dabei wird zwar keine richtige Tastatur ersetzen, aber eine Möglichkeit zur Auswahl eines Buchstabens
* Überlege: Wie kann man mit der Sensorik des Micro:bit ein Auswählen schaffen: Mit Licht, mit Sound, Neigung, ... ? Welche Werte bekomme ich vom Micro:bit geliefert?
* <img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/microbit-kippen.gif?raw=1">
  
### Wir arbeiten mit dem Neigungsmesser (Beschleunigungssmesser)

* Dieser hat drei Kipprichtungen, x, y und z. Wir verwenden die Richtung x, das bedeutet Neigung `rechts-links`
* Teste das mit folgender Funktion

```blocks
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    basic.pause(1000)
})
```

* Die Neigung des Micro:bit kann man messen von 0 bis 1023 (nach rechts) und von (0 bis -1023) nach links
* Mit diesen Zahlen ist es möglich, festzustellen in welche Richtung der Micro:bit geneigt wurde
* In unserem Programm nützen wir diese Eigenschaft: Eine leichte Neigung ab 300 (nach rechts) addiert den Zähler (Zeiger auf die Buchstabenliste) um eines hoch (Rechtsneigung) oder vermindert um 1 wird (bei Linksneigung).
* Dies wird ständig in der Funktion "Dauerhaft" überprüft
* Teste nun ausgiebig diese Funktion und versuche auch kleine Veränderungen durchzuführen

* Seht euch diese Funktion genauer an:
  * Spielt das Programm auf den Micro:bit und versucht die Programmlogik zu ergründen

```blocks
let index = 5
let neigung = 0
basic.forever(function () {
	neigung = input.acceleration(Dimension.X)
	if (neigung > 300) {
		index += 1
	}
	if (neigung < -300) {
		index += -1
	}
	basic.showNumber(index)
	basic.pause(1000)
})
```

* [Programmcode: Neigungsfunktion](https://makecode.microbit.org/#pub:_g2rPdfcgsLxj)

* Jetzt kann durch `||Links-und-rechts-Neigen||` des Micro:bits ein Buchstabe gewählt werden
* Probiert dieses Programm aus
* Hier verwendet man die Variable Index und zählt die durch die Buchstabenreihe hinauf (wenn der Micro:bit nach rechts geneigt wird)

### Morsecode auswählen

* Mit diesem Programmteil kann man zwar den Buchstaben wählen, aber muss ja noch den passenden Morsecode dazu finden
* Dazu nimmt man den Zeiger (Index) auf die Buchstabenliste und holt sich den Morsecode aus der **liste_morse_codes**

* [Programmcode: Morsecode vom Buchstaben](https://makecode.microbit.org/#pub:_HUfdjC3RAdvV)

Damit ist nun alles bekannt, um das gesamte Programm dieser Version fertig zu stellen. Es geht jetzt nur mehr um die Übertragung der Morsecodes an den Empfänger.

[Das fertige Programm "Neigungstastatur"](https://makecode.microbit.org/#pub:_HvE8XXc23Etx)

Wer sich bis hierher durchgearbeitet hat - Gratulation - da waren schon echt große Aufgaben enthalten.
Weiterhin noch viel Erfolg beim Programmieren mit Micro:bit, jetzt wäre langsam an der Zeit umzusteigen auf die Programmiersprache Javascript oder dann auch auf Python, auf die man per Schalter von der grafischen Programmierung umschalten kann.

<img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umschalter_js.png?raw=1">

<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
