input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.StickFigure)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            # # # # #
            . # . . #
            `)
    } else {
    	
    }
})
