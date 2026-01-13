input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            # # # # #
            . # . . #
            `)
        basic.pause(2000)
        basic.showIcon(IconNames.StickFigure)
    } else {
    	
    }
})
