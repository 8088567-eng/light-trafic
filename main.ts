input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        # # # # #
        . # . . #
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # #
    # # # # #
    . # . . #
    `)
