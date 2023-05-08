window.addEventListener("keydown", playSound)

document.querySelectorAll(".key")
    .forEach(el =>
        el.addEventListener("transitionend", removeClassName))

function removeClassName(event) {
    if (event.propertyName === "transform") {
        event.target.classList.remove("playing")
    }
}

function playSound(event) {
    const element = document.querySelector(`div[data-key="${event.keyCode}"]`)
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (sound) {
        sound.play()
        sound.currentTime = 0
        element.classList.add("playing")
    }
}