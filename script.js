const CAROUSEL = document.querySelector(".carousel")
const IMAGE = document.querySelector(".carousel_img")
const BACK = document.querySelector(".carousel_backButton")
const FORWARD = document.querySelector(".carousel_forwardButton")
const CAROUSEL_RADIOBUTTONS = document.querySelector(".carousel_radioButtons")
const DESCRIPTION = document.getElementById("description")

const CAROUSEL_RADIOBUTTON = document.createElement("input")
CAROUSEL_RADIOBUTTON.type = "radio"
CAROUSEL_RADIOBUTTON.name = "carousel_button"



var number = 0;
const IMAGES = [
    {
        src: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg", 
        text: "My name is Walter Hartwell White. I live at 308 Negra Aroya Lane, Albuquerque, New Mexico, 87104."
    },
    {
        src: "data:image/jpeg;base64,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", 
        text: 'Everyone knows Mario is cool as fuck. But who knows what hes thinking? Who knows why he crushes turtles? And why do we think about him as fondly as we think of the mythical (nonexistent?) Dr Pepper? Perchance. I believe it was Kant who said Experience without theory is blind, but theory without experience is mere intellectual play. Mario exhibits experience by cruising turts all day, but he exhibits theory by stating Lets-ago! Keep it up, baby! When Mario leave his place of safety to stomp a turty, he knows that he bay Die. And yet, for a man who can purchase lives with money, a life becomes a mere store of value. A tax that can be paid for, much as a rich man feels any law with a fine is a price. We think of Mario as a hero but he is simply a one percenter of a more privileged variety. The lifekind, Perchance'
    },
    {
        src: "ceaseanddesist.jpg", 
        text: "You don't know me, but I highly advise you read this thoroughly and in its entirety. You are to cease any and all communication with my mom, effective immediately."
    },
    {
        src: "https://copypastatext.com/wp-content/uploads/2023/04/index-1.jpg",
        text: "Click Clack Click-Click Clack Click Clack Click-Click Clack Click Clack Click-Click Clack Click Clack Click-Click Clack Click Clack Click-Click Clack Click Clack Click-Click Clack"
    }
]

for (let i = 0; i < IMAGES.length; i++) {
    // opretter et radio input inde i en div i html'en
    const CAROUSEL_RADIOBUTTON = document.createElement("input")
    CAROUSEL_RADIOBUTTON.type = "radio"
    CAROUSEL_RADIOBUTTON.name = "carousel_button"
    CAROUSEL_RADIOBUTTON.id = `carouselButton_${i}`
    CAROUSEL_RADIOBUTTON.classList.add("radio-button")
    CAROUSEL_RADIOBUTTON.value = i

    CAROUSEL_RADIOBUTTONS.appendChild(CAROUSEL_RADIOBUTTON)

    let selected = document.getElementById(`carouselButton_${i}`)
    selected.addEventListener("click", event => {
        IMAGE.src = IMAGES[i].src
        DESCRIPTION.textContent = IMAGES[i].text
        number = i
        const CAROUSEL_RADIOBUTTON_INPUT = document.querySelectorAll(".carousel_radioButtons input")
        
    })
}


var number = 0;

BACK.addEventListener("click", () => {
    number--;

    if (number < 0) {
        number = IMAGES.length - 1;
    }
})
FORWARD.addEventListener("click", () => {
    number++;

    if (number > IMAGES.length - 1){
        number = 0
    }
 })

// gør så den første knap er markeret til at starte med
 document.getElementById(`carouselButton_${number}`).checked = true
// funktionen der skifter billedet, aktivere animationen og markere det korrekte radiobutton
function fade(image, direction){
    BACK.disabled = true;
    FORWARD.disabled = true;

    let image2 = document.getElementById(image)
    image2.classList.add(`carousel_animate_${direction}`)
    document.getElementById("description").classList.add(`carousel_animate_${direction}`)
    setTimeout(function(){
        IMAGE.src = IMAGES[number].src
        DESCRIPTION.textContent = IMAGES[number].text
        document.getElementById(`carouselButton_${number}`).checked = true
    }, 250)

    image2.addEventListener("animationend", ()=> {
        image2.classList.remove(`carousel_animate_${direction}`)
        document.getElementById("description").classList.remove(`carousel_animate_${direction}`)
        BACK.disabled = false;   
        FORWARD.disabled = false;   
    })

}