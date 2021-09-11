# Programmieren Advanced

<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">

In dritten Teil dieses Projektes werden nun einzelne Erweiterungen  und Verbesserungen vorgenommen. Es sind hier fast keine mehr Grenzen gesetzt, wie und was man noch an Funktion einbauen kann.
Programmieren lernt man besonders gut durch Untersuchen, Verbessern, Fehler beseitigen und Testen von neuen Ideen und Funktionen. Aber auch fremde Programm zerlegen und verändern ist ein gute Methode neues zu erfahren.

Hier werden wir dir jetzt einzelne Ideen mit Lösungen vorgestellt, die aber nicht mehr so genau besprochen werden. Durch Analysieren und Verändern lernt man beim Programmieren am allermeisten.

## Erweiterung 1: Senden von akustischen Signalen

* Statt den optischen Zeichen werden jetzt kurze und lange Töne gesendet.
* Sobald ein Morsecode gewählt ist, sollten das Zeichen Punkt einen kurzen Ton erzeugen und der Strich einen langen Ton
* Erreichen kann man das, indem man eine Musiknote kurz oder lang spielt.
* Als Ausgangspunkt wählen wir das Programm aus dem Projektteil "Standard"
* [Programmcode: Standard](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}  

### Empfängernachricht analysieren

<img width="100%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umsetzung_ton.png?raw=1">

* Hierbei muss das empfangene Morsezeichen (receiveString) zerlegt und untersucht werden
* Es wird eine Schleife durch alle Buchstaben gestartet und gefragt, 
  * ob ein "." vorkommt: dann wird ein kurzer Ton gespielt
  * ob ein "-" vorkommt: dann wird ein langer Ton gespielt
  * ob ein Leerzeichen (Wortende) vorkommt: dann wird eine Pause gemacht

* [Programmcode: Morsezeichen als Tonsignalen](https://makecode.microbit.org/#pub:_bsWVoP2PLdbK){:target="_blank"}  
* Tainiert etwas mit diesem Programm - das hört sich schon mehr nach Morsezeichen an. 

<hr>

## Erweiterung 2: Senden von Lichtsignalen

* Statt den optischen Signalen werden jetzt kurze und lange Lichtsignale gesendet.
* Sobald ein Morsecode gewählt ist, sollten das Zeichen Punkt ein kurzes Lichtsgnal erzeugen und der Strich ein langen Lichtsingal
* Erreichen kann man das, indem man eine alle Lichtpunkte des Micro:bit einschaltet oder nur einige wenige.
* Als Ausgangspunkt wählen wir das Programm aus dem Projektteil "Standard"
* [Programmcode: Standard](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}  

### Empfängernachricht analysieren

<img width="80%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umsetzung_licht.png?raw=1">

* Hierbei muss das empfangene Morsezeichen (receiveString) zerlegt und untersucht werden
* Es wird eine Schleife durch alle Buchstaben gestartet und gefragt, 
  * ob ein "." vorkommt: dann wird ein kurzer Ton gespielt
  * ob ein "-" vorkommt: dann wird ein langer Ton gespielt
  * ob ein Leerzeichen (Wortende) vorkommt: dann wird eine Pause gemacht

* [Programmcode: Morsezeichen als Lichtsignalen](https://makecode.microbit.org/#pub:_dsJhEK2q6b1q){:target="_blank"}  
* Analysiert und ändert dieses Programm

<hr>

## Erweiterung 3: "Eine Tastatur zum Auswählen der Buchstaben"

* Statt dem zufälligen Auswählen eines Morsezeichens, wollen wir mir Hilfe einer "Tastatur" die Sende-Buchstaben auswählen können
* Dabei wird zwar keine richtige Tastatur ersetzen, aber eine Möglichkeit zur Auswahl eines Buchstabes
* Überlege: Wie kann man mit der Sensorik des Micro:bit ein Auswählen schaffen: Mit Licht, mit Sound oder mit Neigung? Welche Werte bekomme ich vom Micro:bit geliefert?

<img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/microbit-kippen.gif?raw=1">

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
* In unserem Programm nützen wir diese Eigenschaft: Ein leichte Neigung ab 300 (nach rechts) addiert den Zähler (Zeiger auf die Buchstabenliste) um eines hoch (Rechtsneigung) oder vermindert um 1 wird (bei Linksneigung).
* Dies wird ständig in der Funktion "Dauerhaft" überprüft
* Test nun ausgeibig diese Funktion und verscuhe auch kleine Veränderungen durchzuführen

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

[Programmcode: Neigungsfunktion](https://makecode.microbit.org/#pub:_g2rPdfcgsLxj)

* Jetzt kann man durch `||Links-und-rechts-Neigen||` des Micro:bit einen Buchstaben wählen
* Probiert dieses Programm aus
* Hier verwendet man die Variable Index und zählt diese hinauf, wenn der Micro:bit nach rechts geneigt wird

### Morsecode auswählen

* Mit diesem Programmteil kann man zwar den Buchstaben wählen, aber muss ja noch den passenden Morsecode dazu finden
* Dazu nimmt man den Zeiger (index) auf die Buchstabenliste und holt sich den Morsecode aus der **liste_morse_codes**

[Programmcode: Morsecode vom Buchstaben](https://makecode.microbit.org/#pub:_HUfdjC3RAdvV)

Damit ist nun alles bekannt, um das gesamte Programm dieser Version fertig zustellen. Es geht jetzt nur mehr um die Übertragung der Morsecodes an den Empfänger.

[Das fertige Programm "Neigungstastatur"](https://makecode.microbit.org/#pub:_HvE8XXc23Etx)

<hr>

### Aufgaben des Senders

* [Programmcode: Neigungsfunktion](https://makecode.microbit.org/#pub:_HvE8XXc23Etx)
* 
  * Ist der zu sendende Buchstabe gefunden, wird der Micro:bit wieder waagrecht gehalten und es kann der Buchstabe mit `|Taste A|` abgeschickt werden
* Es wird dann der Morsecode des Buchstaben an den Empfänger gesendet und dort angezeigt.

## [Programmcode: Neigungstastatur](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}

### Aufgabe des Empfängers

* Der **Empfänger** sieht nun das Morsezeichen und sucht über die Morse-Tabelle den richtigen Buchstaben, schreibt diesen als Beweis auf ein Blatt Papier und gibt Bescheid, ob der Buchstabe erkannt wurde:
  * `|Taste B|` sendet ein 'ok': Morsezeichen **erkannt**
  * `|Taste A+B|` sendet ein 'no': **Nicht erkannt** - "bitte noch einmal senden"
* Diese Antwort erhält der **Sender** auf sein Micro:bit-Display ('ok' oder 'no')
* Probiert es einmal 5 Durchgänge und wechselt dann ihr die Rollen.
* Sehr auch auch den Programmcode auf dem Computerbildschirm an
* Es ist ganz besonders auf die Abmachungen zu achten: Computer funktionieren  nur so, indem klare Regeln erstellt und eingehalten werden.

**Rollen tauschen** (immer in Abstimmung mit dem Partner/der Partnerin)

* Wie wird ein neues Spiel gestartet?
* Bei beiden Micro:bit die `|Reset-Taste|` (Rückseite des Micro.bit) drücken
* Erfindet selber neue Spielregeln dazu
* Wer sich schon viel mit Micro.bit beschäftig hat, kann dann auch versuchen den Micro:bit umprogrammieren:
  * Dabei ist wichtig, dass man im Team immer die Regeln bespricht.

Wer sich bis hierher durchgearbeitet hat - Gratulation - da waren schon echt Probleme enthalten, die den Profiprogrammierer beschäftigen.

<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
