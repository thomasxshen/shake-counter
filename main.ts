let x = 0
input.onButtonPressed(Button.AB, function () {
    x = 0
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) / 1000 * 9.81 > 1.5) {
        x += 1
    }
    basic.showNumber(x)
})
basic.forever(function () {
    serial.writeNumber(x)
    serial.writeLine("")
})
