const CAROUSEL_RADIOBUTTONS = document.querySelector(".carousel_radioButtons")
const CAROUSEL_RADIOBUTTON = document.createElement("input")
CAROUSEL_RADIOBUTTON.type = "radio"
CAROUSEL_RADIOBUTTON.name = "carousel_button"

for (let i = 0; i < IMAGES.length; i++) {
    const CAROUSEL_RADIOBUTTON = document.createElement("input")
    CAROUSEL_RADIOBUTTON.type = "radio"
    CAROUSEL_RADIOBUTTON.name = "carousel_button"
    CAROUSEL_RADIOBUTTON.id = `carouselButton_${i}`
    CAROUSEL_RADIOBUTTON.classList.add("radio-button")
    CAROUSEL_RADIOBUTTON.value = i

    CAROUSEL_RADIOBUTTONS.appendChild(CAROUSEL_RADIOBUTTON)
    CAROUSEL_RADIOBUTTONS.appendChild(CAROUSEL_RADIOBUTTON)
    CAROUSEL_RADIOBUTTONS.appendChild(CAROUSEL_RADIOBUTTON)
}
const CAROUSEL_RADIOBUTTON_INPUT = document.querySelectorAll(".carousel_radioButtons input")
for (let i = 0; i < CAROUSEL_RADIOBUTTON_INPUT.length; i++) {
    let selected = document.getElementById(`carouselButton_${i}`)
    selected.addEventListener("click", event => {
        IMAGE.src = IMAGES[i].src
        DESCRIPTION.textContent = IMAGES[i].text
        number = i
        
    })
}