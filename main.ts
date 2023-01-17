let a = 0
basic.forever(function () {
    a = input.acceleration(Dimension.X)
    led.plotBarGraph(
    a,
    1023
    )
})
