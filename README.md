# Programmieren advanced

<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">

In dritten Teil dieses Projektes werden nun einzelne Erweiterungen  und Verbesserungen vorgenommen. Es sind hier fast keien Grenzen gesetzt, was man noch an Funktion weiterbauen kann.
Programmieren lernt man nur durch Untersuchen, Verbessern, Fehler beseitigen und Testne von neuen Ideen und Funktionen.

Hier werden jetzt einzelne Ideen mit Lösungen vorgestellt, die aber nicht mehr genau kommentiert und besprochen werden. Durch Analysieren und Verändern lernt man beim Programmieren am allerbesten.

## Erweiterung 3: "Eine Tastatur zum Auswählen der Buchstaben"

* Statt dem zufälligen Auswählen eines Morsezeichens, wollen wir mir Hilfe einer "Tastatur" die Sende-Buchstaben auswählen können
* Dabei wird zwar keine richtige Tastatur ersetzen, aber eine Möglichkeit zur Auswahl eines Buchstabes
* Überlege: Wie kann man mit der Sensorik des Micro:bit ein Auswählen schaffen: Mit Licht, mit Sound oder mit Neigung? Welche Werte bekomme ich vom Micro:bit geliefert?

<img width="50%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">

### Wir arbeiten mit dem Neigungsmesser (Beschleunigungssmesser)

* Dieser hat drei Kipprichtungen, x, y und z. Wir verwenden die Richtung x, das bedeutet Neigung `rechts-links`
* Teste das mit folgender Funktion 

```blocks
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    basic.pause(1000)
})
```

* Die Neigung des Micro:bit kann man messen von 0 bis 1024 (nach rechts) und von (0 bis -1023) nach links
* Mit diesen Zahlen ist es möglich festzustellen in welche Richtung der Micro:bit geneigt wurde
* In unserem Programm nützen wir diese Eigenschaft: Ein leichte Neigung ab 300 addiert dem Zähler (Zeiger auf die Buchstabenliste) um eines hoch (Rechtsneigung) oder vermindert um 1 wird (bei Linksneigung).
* Dies wird ständig mit der Funktion "Dauerhaft" überprüft
* Test nun ausgeibig diese Funktion und verscuhe auch kleine Veränderungen durchzuführen

[Programmcode: Neigungsfunktion](https://makecode.microbit.org/#pub:_g2rPdfcgsLxj)

* Jetzt kann man durch `||Links-und-rechts-Neigen||` des Micro:bit einen Buchstaben wählen
* Probiert dieses Programm aus
* Hier verwendet man die Variable Index und zählt diese hinauf, wenn der Micro:bit nach rechts geneigt wird


* Mit diesem Programmteil kann man zwar den Buchstaben wählen, aber muss ja den Morsecode dazu finden



* Kommentare zu dieser Version:
  * Beide Micro:bit haben dasselbe Programm aufgespielt
  * Daher muss entschieden werden, wer Sender und wer Empänger ist
    * Durchführung: Nur der **Sender** drückt dazu beide `|Tasten A+B|`
    * Nun "weiß" das System, wer sendet und wer empfängt
  * Der **Empfänger** sollte bisher nur warten

### Aufgaben des Senders

* [Programmcode: Neigungsfunktion](https://makecode.microbit.org/#pub:_HvE8XXc23Etx)
* 
  * Ist der zu sendende Buchstabe gefunden, wird der Micro:bit wieder waagrecht gehalten und es kann der Buchstabe mit `|Taste A|` abgeschickt werden
* Es wird dann der Morsecode des Buchstaben an den Empfänger gesendet und dort angezeigt.

## [Programmcode: Neigungstastatur](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}


## [Programmcode: Neigungstastatur](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}



### Aufgabe des Empfängers

* Der **Empfänger** sieht nun das Morsezeichen und sucht über die Morse-Tabelle den richtigen Buchstaben, schreibt diesen als Beweis auf ein Blatt Papier und gibt Bescheid, ob der Buchstabe erkannt wurde:
  * `|Taste A|` sendet ein 'ok': Morsezeichen **erkannt**
  * `|Taste B|` sendet ein 'no': **Nicht erkannt** - "bitte noch einmal senden"
* Diese Antwort erhält der **Sender** auf sein Micro:bit-Display ('ok' oder 'no')
* Probiert es einmal 5 Durchgänge und wechselt dann ihr die Rollen.
* Sehr auch auch den Programmcode auf dem Computerbildschirm an
* Es ist ganz besonders auf die Abmachungen zu achten: Computer funktionieren  nur so, indem klare Regeln erstellt und eingehalten werden.

**Rollen tauschen** (immer in Abstimmung mit dem Partner/der Partnerin)

* Wie wird ein neues Spiel gestartet?
* Bei beiden Micro:bit die `|Reset-Taste|` (Rückseite des Micro.bit) drücken
* Dann den Sender NEU bestimmen mit `|Taste A+B|`, ... es geht los
* Erfindet selber neue Spielregeln dazu
* Wer sich schon viel mit Micro.bit beschäftig hat, kann dann auch versuchen den Micro:bit umprogrammieren:
  * Dabei ist wichtig, dass man im Team immer die Regeln bespricht.









## Erweiterung 1: Senden von akustischen Signalen

### Anzeige auf dem eigenen Micro:bit

* Statt den optischen Signalen werden jetzt kurz und lange Töne gesendet.
* Sobald ein Morsecode gewählt ist, sollten die zeichen Punkt einen kurzen Ton erzeugen und der Strich einen langen Ton
* Erreichen kann man das, indem man eine Musiknote kurz oder lang spielt.
* [Programmcode: Tonsignal](https://makecode.microbit.org/#pub:_8tqijz37gTMw){:target="_blank"}  

### Übertragen an den Partner-Micro:bit













## Erweiterung 2: Senden von Lichtsignalen

* Statt den optischen Signalen werden jetzt kurz und lange töne gesendet.
* Es werden dabei natürlich auch wieder nur Signale 





## Programmbedienung


* Nach dem Start sehen beide Micro:bit gleich aus
* Nun muss abgemacht werden, wer nun bei diesem Spiel **Sender** ist:
  * Nur der **Sender** drückt dazu beide `|Tasten A+B|` -> nun weiß das System, wer sendet und wer empfängt
* Der **Empfänger** sollte bisher nur warten

# !!! Danke für eure Mitarbeit !!!

<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>


* Es wäre gut, könnte man den Buchstaben auswählen
* es fehlt leider eine Tastatur auf dem Micro:bit zum Eingeben eines neuen Buchstabens).
  * Wie könnte man aus den Buchstaben auswählen?
	a) Entweder durch Zufallsgenerator oder
	b) mit einer virtuellen (=gedachten) Tastatur

<hr>





## Programmbedienung

<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robi_mb.png?raw=1">  Sender und Empfänger <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robi_mb.png?raw=1">

* Nach dem Start sehen beide Micro:bit gleich aus
* Nun muss abgemacht werden, wer nun bei diesem Spiel **Sender** ist:
  * Nur der **Sender** drückt dazu beide `|Tasten A+B|` -> nun weiß das System, wer sendet und wer empfängt
* Der **Empfänger** sollte bisher nur warten

**Der Sender**
* Jetzt kann der **Sender** durch `||Links-und-rechts-Neigen||` des Micro:bit einen Buchstaben wählen
	* Ist der zu sendende Buchstabe gefunden, wird der Micro:bit wieder waagrecht gehalten und es kann der Buchstabe abgeschickt werden - mit `|Taste A|`
* Es wird dann der Morsecode des Buchstaben an den Empfänger gesendet und dort angezeigt.

**Der Empfänger**
* Der **Empfänger** sieht nun das Morsezeichen und sucht über die Morse-Tabelle den richtigen Buchstaben, schreibt diesen auf ein Blatt Papier und gibt Bescheid, ob der Buchstabe erkannt wurde:
	* `|Taste A|` bedeutet: Morsezeichen **erkannt**
	* `|Taste B|` bedeutet: **Nicht erkannt** - bitte noch einmal senden
* Diese Antwort erhält der **Sender** auf sein Micro:bit Display (+ oder-)
* Führt einmal 5 Durchgänge durch und wechselt dann ihr die Rollen.

**Rollen tauschen** (immer in Abstimmung mit dem Partner/der Partnerin)

* Wie wird ein neues Spiel gestartet?
* Bei beiden Micro:bit die `|Reset-Taste|` (Rückseite des Micro.bit) drücken
* Dann den Sender neu bestimmen mit `|Taste A+B|`
* Erfindet selber neue Spielregeln dazu
* Natürlich kann man den Micro:bit auch umprogrammieren:
	* Dabei ist wichtig, dass man im Team die Regeln bespricht.


<img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/SOS.svg.png?raw=1">  <img width="20%" src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/robo_mbit_funk.gif?raw=1">
# !!! Danke für eure Mitarbeit !!!

#### Technische Metadaten
<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxMTU4Mzk2NjksNDEyOTcyMjE0LC0xNT
g4NzIyMDc2LC0xNzkyOTk1Njg2LDE2NDc4NjU3OTYsMTkyNDU4
ODQzLC0xNTAzMTcyNDIxLC0yMDM1ODU1OTEzLC0xMzExMzAyNz
k0XX0=
-->


























* [Programmcode 4](https://makecode.microbit.org/#pub:_F5cKo14UE6oA){:target="_blank"}

Eingebaut in das Übertragungsprogramm:

* Nun wird der Zufallsgenerator in der `Taste A-Funktion` eingebaut:

```blocks
input.onButtonPressed(Button.A, function () {
	index = randint(0, anz_bst)
	auswahl_buchstabe = liste_buchstaben[index]
	// damit siehst du als Sender den Buchstaben auch auf deinem Display
	basic.showString("" + (auswahl_buchstabe))
	radio.sendString("" + (liste_morsecodes[index]))
})
radio.onReceivedString(function (receivedString) {
	// Beim Emfänger werden die empfangenen Daten angezeigt
	basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	for (let index2 = 0; index2 <= anz_bst; index2++) {
		basic.showString("" + (liste_buchstaben[index2]))
		basic.showString("" + (liste_morsecodes[index2]))
		basic.pause(2000)
		basic.clearScreen()
	}
})
let auswahl_buchstabe = ""
let index = 0
let anz_bst = 0
let liste_morsecodes: string[] = []
let liste_buchstaben: string[] = []
radio.setGroup(99)
// liste_buchstaben = ["A","B","C","D","E","F","G","S","O"]
// liste_morsecodes = [".-","-...","-.-.","-..",".","..-.","--.","...","---"]
anz_bst = liste_buchstaben.length - 1
```

* [Programmcode 3](https://makecode.microbit.org/---codeembed#pub:_VE2dfFHrwDi9){:target="_blank"}

**Lösung b:** Wir bauen eine Auswahltastatur

* Bei dieser Lösung arbeiten wir mit dem Neigungswinkel in Richtung x - eine sehr leistungsfähige Funktion, mit der man viele Spiele gestalten kann.
* Probiere folgende Funktion als Übung und notiere dir einige Werte
* Wichtig ist hier, den Micro:bit nach links und Recht zu kippen:

<img src="https://github.com/dlpl-mb/baa_morse_code_01/blob/master/images/mbit_li_re_x.png?raw=1">

```blocks
input.onButtonPressed(Button.A, function () {
	basic.showNumber(input.acceleration(Dimension.X))
})
```

[Programmcode 4](https://makecode.microbit.org/#pub:_55zbeHhRTa2o){:target="_blank"}

* Immer wenn `Taste A` gedrückt wird, zeigt es den augenblicklichen Kippwinkel (x) an.
* Spiele das Programm auf den Micro:bit und teste.
* Auch dieses folgende Sequenz zeigt dir den Kippwinkel x (links-Rechts) an - aber hier werden ständig neue Winkelwerte angezeigt, dadurch entstehen sehr viele Zahlen, ...
  
```blocks
basic.forever(function () {
	basic.showNumber(input.acceleration(Dimension.X))
})
```

* Beobachte dabei die x-Werte - wir wollen diese Neigung ausnutzen, um später in den Buchstaben zu `blättern`. 
* Experimentiere nun mit der folgenden Funktion zum Hinauf- und Herunterzählen einer Zahl (bitte auf den Micro.bit spielen) - hier sind bereits viele Funktionen beteiligt.

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

[Programmcode 5](https://makecode.microbit.org/#pub:_UXKHMAL1pFWp){:target="_blank"}

* Hier lässt sich sehr gut beobachten, wie man die Sensoren (Beschleunigungs- und Lagesensor) nutzen kann, um Messwerte zu verwenden.
* Damit sind nun die Voraussetzungen geschaffen, die Hilfstastatur (Auswahltastatur) zu testen.

```blocks
input.onButtonPressed(Button.A, function () {
	radio.sendString("" + (auswahl_morsecode))
})
let auswahl_buchstabe = ""
let index = 0
let neigung = 0
let auswahl_morsecode = ""
//liste_buchstaben = ["A","B","C","D","E","F","G","S","O"]
//liste_morsecodes = [".-","-...","-.-.","-..",".","..-.","--.","...","---"]
let anz_bst = liste_buchstaben.length - 1
basic.forever(function () {
	neigung = input.acceleration(Dimension.X)
	if (neigung > 300) {
		index += 1
	}
	if (neigung < -300) {
		index += -1
	}
	if (index > anz_bst) {
		index = 0
	}
	if (index < 0) {
		index = anz_bst
	}
	auswahl_buchstabe = liste_buchstaben[index]
	auswahl_morsecode = liste_morsecodes[index]
	basic.showString("" + (auswahl_buchstabe))
	basic.pause(500)
})
```

[Programmcode 5](https://makecode.microbit.org/---codeembed#pub:_PHiaYDfFzD83){:target="_blank"}

+ Teste bei diesem Teilprogramm vor allem die Auswahltastatur
+ Erst wenn diese Funktionen "verdaut" sind - hat es Sinn das gesamte Programm anzusehen.

## Fertiges Programm: Das Morse-Alphabet II
Das fertige Programmgerüst enthält jetzt die wichtigsten Funktionen, damit du zu deinem Spielpartner alle Morsezeichen versenden kannst. Wenn dein Partner/deine Partner das Zeichen gelesen und verstanden hat, wird von dort mit der `Taste B` ein `+` zurückgeschickt.

* Das fertig kleine Übertragungsprogramm für alle Morsezeichen
  
```blocks
input.onButtonPressed(Button.A, function () {
	radio.sendString("" + (auswahl_morsecode))
})
input.onButtonPressed(Button.AB, function () {
	ich_bin_sender = 1
})
radio.onReceivedString(function (receivedString) {
	basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	radio.sendString("+")
	ich_bin_sender = 0
})
let ich_bin_sender = 0
let auswahl_buchstabe = ""
let index = 0
let neigung = 0
let auswahl_morsecode = ""
basic.showIcon(IconNames.Yes)
/*
let liste_buchstaben = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P", "Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
let liste_morsecodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----"]
*/
let anz_bst = liste_buchstaben.length - 1
radio.setGroup(99)
basic.forever(function () {
	if (ich_bin_sender == 1) {
		neigung = input.acceleration(Dimension.X)
		if (neigung > 300) {
			index += 1
		}
		if (neigung < -300) {
			index += -1
		}
		if (index > anz_bst) {
			index = 0
		}
		if (index < 0) {
			index = anz_bst
		}
		auswahl_buchstabe = liste_buchstaben[index]
		auswahl_morsecode = liste_morsecodes[index]
		basic.showString("" + (auswahl_buchstabe))
		basic.pause(500)
	}    
})
```

## Reflexion und Erweiterung

In dritten Teil diese Projektes werden nun einzelne Erweiterungen  und Verbesserungen vorgenommen, die mit weiteren neuen Funktionen erreicht werden. Versuche nun selber Funktionen zu entdecken und zu testen - es werden im dritten Teil nur mehr wenige Kommentare gegeben.

* Überlege, welche Erweiterungen/Vereinfachung du hier noch machen möchtest
* Man könnte mit mehreren Empfängern kommunizieren.




**Abschlussbemerkung:**
Der Autor dieses Morse-Beispielprogramms ist selbst seit Jahren Programmierer in einigen Programmiersprachen und kann feststellen, dass er dann am meisten gelernt hat, wenn er fremde Programme analysiert hat und versucht hat, sie zu verstehen und mit kleinen schrittweisen Änderungen alles Unbekannte zu verstehen.














<style>.page-header {font-size:1rem;height:0vh;padding-top:1.5rem}</style>
<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
