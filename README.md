# Programmieren Advanced

<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">

In dritten Teil dieses Projektes werden nun einzelne Erweiterungen  und Verbesserungen vorgenommen. Es sind hier fast keine Grenzen mehr gesetzt, was man noch an Funktion erweitern kann.
Programmieren lernt man besonders gut durch Untersuchen, Verbessern, Fehler beseitigen und Testen von neuen Ideen. Aber auch fremde Programm zerlegen und verändern ist ein sehr gute Methode Neues zu erfahren.

Hier in diesem Abschnitt werden wir dir jetzt einzelne Ideen mit Lösungen vorgestellt, die aber nicht mehr so genau wie im letzten Abschnitt besprochen werden. Durch eigenes Probieren lernst du beim Programmieren sehr viel. Man braucht aber auch viel Ausdauer, um Fehler immer wieder von verschiedenen Seiten zu betrachten und Lösungen zu finden.

## Erweiterung 1: Senden von zufälligen Morsezeichen

* Im letzten Abschnitt haben wir Morsezeichen einprogrammiert und versendet, wollte man neue versenden, musste man umprogrammieren
* Wir wollen nun per Zufall Daten versenden, der Computer sollte auswählen, welches Zeichen versandt wird

### Vorübung: Zeige ein Zahl per Zufall

* Zufallszahlen erhält man im Bereich der ``|Mathematik|``
* Der Befehl heißt `Wähle eine zufällige Zahl von 0 bis 10`
* Experimentiere mit der  Zufallsfunktion: Ändere den Wertebereich
* Damit kann man auch das Würfeln mit einem Spielwürfel simmulieren: Wertebereich 1 - 6

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

[Programmcode **Zeige zufällige Zahl**](https://makecode.microbit.org/#pub:_8ftYxp4D996s)

* Überlege warum im Programmcode ein leeres Anzeigefeld eingebaut wurde

### Zeige einen Buchstaben per Zufall

* Wir werden in unserem Programm 26 Buchstaben verwenden - also brauchen wir eine Zufallszahl zwischen 0 und 25.  
* [Programmcode **Zeige zufällige Buchstaben**](https://makecode.microbit.org/#pub:_RcD107c83V1o){:target="_blank"}
* Dabei greift man mit dem Befehl ``||array: [liste_buchstaben[zufall]]||`` auf ein Element der Buchstaben-Liste zu und zeigt den gefundenen Buchstaben an.
* Experimentiert weiter mit diesem Befehl.

### Zeige ein Morsezeichen per Zufall

* Wir möchten mit unserem Testprogramm den Morsecode eines zufälligen Buchstabens senden: Was ist zu ändern?
* Es ist nur eine Kleinigkeit zu ändern
* [Programmcode **Zeige zufälliges Morsezeichen**](https://makecode.microbit.org/#pub:_VwkKjmbcrU7V)

### Sende zufällige Morsezeichen zum Empfänger

* Das zufällig Morsezeichen sollte nicht beim **Sender** anzeigt werden, sondern auch zum Empfänger versendet werden.
* Hier greifen wir auf früheren Programmcode zurück und bauen diesen weiter
* [Programmcode **Sende Morsecodes**](https://makecode.microbit.org/#pub:_Vy4KdpPxpWTm){:target="_blank"}

### Erweiterung: Bestätigung des Empfangs

* Nun sollte der Empfänger noch bestätigen, ob er die Nachricht erhalten und verstanden hat.
* Da die ``|Taste A|`` schon belegt ist, wird ``|Taste B|`` für die Antwort verwendet - diese sendet ein 'ok' zurück
* Erst dann darf der **Sender** wieder eine neue Nachricht abschicken
* Wurde die Sendungsinformation **nicht** verstanden drückt der Empfänger auf die ``|Tasten A+B|`` - dadurch wird ein "no" gesendet.
* Somit sieht der **Sender** auf sein Micro:bit-Display ein 'ok' oder 'no'
* Probiert einmal 5 Durchgänge, schreibt die Ergebnisse auf, wie viele Marezeichen ihr richtig erkannt haben und wechselt dann die Rollen
* Seht euch auch den Programmcode auf dem Computerbildschirm an
* !!! Genaue Abmachungen zwischen Sender und Empfänger sind besonders wichtig !!!

* Das fertig Ergebnis sieht man im folgenden Programmcode.
* [Programmcode **Handshake**](https://makecode.microbit.org/#pub:_4ucJWw6YpL6b){:target="_blank"}

**Rollen tauschen** (immer die genaue Abstimmung mit dem Partner/der Partnerin)

* Merke: Die ``|Taste A|`` gehört immer dem **Sender**
* Erfindet selber neue Spielregeln dazu

### Eine Belohnung: Tonausgabe

<img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mb_kopfhoerer.png?raw=1">

* Die Zusatzfunktion Tonausgabe baut ihr selber noch ein (Micro:bit V2 erforderlich oder ein angeschlossener Kopfhörer):
* Sobald ein Buchstabe beim Empfänger ankommt, soll eine Ton gespielt werden
* Genauso, wenn die Antwort bei Sender ankommt, soll ein Bestätigungston gespielt werden.

```block
  music.playTone(262, music.beat(BeatFraction.Whole))
```

[Programmcode: **Tonausgabe**](https://makecode.microbit.org/#pub:_0Uw0EdbciAaa){:target="_blank"}

<hr>

## Erweiterung 2: Senden von akustischen Signalen

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

## Erweiterung 3: Senden von Lichtsignalen

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

## Erweiterung 4: "Eine Tastatur zum Auswählen der Buchstaben"

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
  * Ist der zu sendende Buchstabe gefunden, wird der Micro:bit wieder waagrecht gehalten und es kann der Buchstabe mit ``|Taste A|`` abgeschickt werden
* Es wird dann der Morsecode des Buchstaben an den Empfänger gesendet und dort angezeigt.

## [Programmcode: Neigungstastatur](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}

### Aufgabe des Empfängers

* Der **Empfänger** sieht nun das Morsezeichen und sucht über die Morse-Tabelle den richtigen Buchstaben, schreibt diesen als Beweis auf ein Blatt Papier und gibt Bescheid, ob der Buchstabe erkannt wurde:
  * ``|Taste B|`` sendet ein 'ok': Morsezeichen **erkannt**
  * ``|Tasten A+B|`` sendet ein 'no': **Nicht erkannt** - "bitte noch einmal senden"
* Diese Antwort erhält der **Sender** auf sein Micro:bit-Display ('ok' oder 'no')
* Probiert es einmal 5 Durchgänge und wechselt dann ihr die Rollen.
* Sehr auch auch den Programmcode auf dem Computerbildschirm an
* Es ist ganz besonders auf die Abmachungen zu achten: Computer funktionieren  nur so, indem klare Regeln erstellt und eingehalten werden.

**Rollen tauschen** (immer in Abstimmung mit dem Partner/der Partnerin)

* Wie wird ein neues Spiel gestartet?
* Bei beiden Micro:bit die ``|Reset-Taste|`` (Rückseite des Micro:bit) drücken
* Erfindet selber neue Spielregeln dazu
* Wer sich schon viel mit Micro:bit beschäftig hat, kann dann auch versuchen den Micro:bit umprogrammieren:
  * Dabei ist wichtig, dass man im Team immer die Regeln bespricht.

Wer sich bis hierher durchgearbeitet hat - Gratulation - da waren schon echt große Aufgaben enthalten.
Weiterhin noch viel Erfolg beim Programmieren mit Micro:bit, jetzt wäre langsam an der Zeit umzusteigen auf die Programmiersprache Javascript oder dann auch auf Python, auf die man per Schalter von der grafischen Programmierung umschalten kann.

<img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/umschalter_js.png?raw=1">

<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
