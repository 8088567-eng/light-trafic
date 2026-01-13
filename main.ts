input.onButtonPressed(Button.A, function () {
	
})
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # #
    # # # # #
    . # . . #
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(2000)
        basic.showIcon(IconNames.StickFigure)
    } else {
    	
    }
})
