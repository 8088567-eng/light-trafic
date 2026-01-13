input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 100), music.PlaybackMode.UntilDone)
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
