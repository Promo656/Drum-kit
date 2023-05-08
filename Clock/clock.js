const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setTime() {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const min = now.getMinutes()
    const minDegrees = ((min / 60) * 360) + ((seconds / 60) * 6)
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getMinutes()
    const hourDegrees = ((hour / 12) * 360) + ((min/60)*30)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setTime, 1000)
