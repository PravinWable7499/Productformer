// ==========================
// MOBILE MENU
// ==========================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// Close menu when clicking a menu item

document.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[currentSlide]
    .classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide();

},4000);