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
        basic.showIcon(IconNames.StickFigure)
        basic.pause(2000)
    } else {
    	
    }
})
