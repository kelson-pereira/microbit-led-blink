function ready () {
    blink = 0
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    music.playTone(1976, music.beat(BeatFraction.Sixteenth))
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (blink == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        blink = 1
    } else {
        ready()
    }
})
let blink = 0
ready()
basic.forever(function () {
    if (blink == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.clearScreen()
        basic.pause(200)
    }
})
