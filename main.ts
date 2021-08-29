input.onButtonPressed(Button.A, function () {
    if (ich_bin_sender == 1) {
        radio.sendString("" + (auswahl_morsecode))
    } else {
        radio.sendString("+")
    }
})
input.onButtonPressed(Button.AB, function () {
    ich_bin_sender = 1
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("-")
    ich_bin_sender = 0
})
let auswahl_buchstabe = ""
let index = 0
let neigung = 0
let auswahl_morsecode = ""
let ich_bin_sender = 0
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
let liste_morsecodes = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----"
]
let liste_buchstaben = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
]
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
let anz_bst = liste_buchstaben.length - 1
radio.setGroup(99)
ich_bin_sender = 0
basic.forever(function () {
    if (ich_bin_sender == 1) {
        neigung = input.acceleration(Dimension.X)
        if (neigung > 250) {
            index += 1
        }
        if (neigung < -250) {
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
        basic.pause(300)
    }
})
