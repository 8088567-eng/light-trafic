input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 60), music.PlaybackMode.UntilDone)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
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
basic.forever(function () {
	
})
