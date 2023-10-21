const fixText = document.querySelector(".fix-scroll-text")
const scrollText = document.querySelectorAll(".scroll-section p")
const aboutUsSection = document.querySelector(".about-us-section")
const skillSection = document.querySelector(".skill-section")
const skillBox = document.querySelectorAll(".skillbox")
const contactText = document.querySelector(".contact-text ")
const contactSection = document.querySelector(".contact-section")
const closeBox = document.querySelector(".contact-section .fa-xmark")
const pokeBotton = document.querySelector(".poke-botton")
const poohbotton = document.querySelector(".pooh-botton")
const aboutPoke = document.querySelector(".about-us-poke")
const aboutPooh = document.querySelector(".about-us-pooh")
const skillPoke = document.querySelector(".skill-poke")
const skillPooh = document.querySelector(".skill-pooh")



window.addEventListener("scroll", () => {
    const scrollText1Top = scrollText[0].getBoundingClientRect().top
    const scrollText2Top = scrollText[1].getBoundingClientRect().top
    const scrollText1Height = scrollText[0].getBoundingClientRect().height
    const scrollText2Height = scrollText[1].getBoundingClientRect().height
    const windowHeight = window.innerHeight

    let scrollText1Opacity
    let scrollText2Opacity

    if (scrollText1Top /(( windowHeight/2) + scrollText1Height) < 1){
        scrollText1Opacity = scrollText1Top /(( windowHeight/2) + scrollText1Height)
    }else{
        scrollText1Opacity = 1.5 - (scrollText1Top /(( windowHeight/2) + scrollText1Height))
    }

    
    if (scrollText2Top /(( windowHeight/2) + scrollText2Height) < 1){
        scrollText2Opacity = scrollText2Top /(( windowHeight/2) + scrollText2Height)
    }else{
        scrollText2Opacity = 1.5 - (scrollText2Top /(( windowHeight/2) + scrollText2Height))
    }

    scrollText[0].style.opacity = `${scrollText1Opacity}`
    scrollText[1].style.opacity = `${scrollText2Opacity}`

    // about us

    const aboutUsTop = aboutUsSection.getBoundingClientRect().top
    const fixTextOpacity = (aboutUsTop - windowHeight)/( windowHeight )
    const aboutUsOpacity = 2-(aboutUsTop /( windowHeight/3 ))
    fixText.style.opacity = `${fixTextOpacity}`
    aboutUsSection.style.opacity = `${aboutUsOpacity}`

    // skill

    const skillTop = skillSection.getBoundingClientRect().top

    if (skillTop < (windowHeight/2)){
        skillBox[0].style.width = '25%'
        skillBox[1].style.width = '5%'
        skillBox[2].style.width = '70%'
        skillBox[3].style.width = '95%'
        skillBox[4].style.width = '5%'
    }else{
        skillBox[0].style.width = '0%'
        skillBox[1].style.width = '0%'
        skillBox[2].style.width = '0%'
        skillBox[3].style.width = '0%'
        skillBox[4].style.width = '0%'
    }



})

const resetUrl = (name) => {
    console.log(name)
    if (name === "poke"){
        aboutPooh.style.opacity = "0"
        aboutPoke.style.opacity = "1"
        skillPooh.style.opacity = "0"
        skillPoke.style.opacity = "1"
        setTimeout(()=>{
            aboutPooh.style.display = "none"
            aboutPoke.style.display = "flex"
            skillPooh.style.display = "none"
            skillPoke.style.display = "flex"

        },(300))

    }else if (name === "pooh"){
        aboutPooh.style.opacity = "1"
        aboutPoke.style.opacity = "0"
        skillPooh.style.opacity = "1"
        skillPoke.style.opacity = "0"
        setTimeout(()=>{
            aboutPoke.style.display = "none"
            aboutPooh.style.display = "flex"
            skillPoke.style.display = "none"
            skillPooh.style.display = "flex"
        },(300))
    }else if (name === null){
        skillPoke.style.display = "none"
        aboutPoke.style.display = "none"
        skillPooh.style.display = "none"
        aboutPooh.style.display = "none"
        aboutPooh.style.opacity = "0"
        aboutPoke.style.opacity = "0"
        skillPooh.style.opacity = "0"
        skillPoke.style.opacity = "0"

    }
} 

contactText.addEventListener("click",()=>{
   contactSection.style.clipPath = "circle(2500px at 100% -10%)" 

})

closeBox.addEventListener("click",()=>{
   contactSection.style.clipPath = "circle(50px at 100% -10%)" 
})


pokeBotton.addEventListener("click",() =>{
    const urlParams = new URLSearchParams(window.location.search);
    history.pushState(null, "", "?name=poke");
    resetUrl(urlParams.get("name"))
})


poohbotton.addEventListener("click",() =>{
    const urlParams = new URLSearchParams(window.location.search);
    history.pushState(null, "", "?name=pooh");
    resetUrl(urlParams.get("name"))
})



document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    history.pushState(null, "", "");
    resetUrl(urlParams.get("name"))
});
