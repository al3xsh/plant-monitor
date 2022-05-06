let Moisture = 0
basic.showString("Hello!")
music.playMelody("C5 B A G A G A G ", 120)
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(Moisture)
    serial.writeLine("")
    if (Moisture > 425) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
    }
})
