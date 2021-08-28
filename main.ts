input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (auswahl_morsecode))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("+")
})
let auswahl_buchstabe = ""
let index = 0
let neigung = 0
let auswahl_morsecode = ""
basic.showIcon(IconNames.Yes)
let liste_buchstaben = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"S",
"O"
]
let liste_morsecodes = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"...",
"---"
]
let anz_bst = liste_buchstaben.length - 1
radio.setGroup(99)
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
