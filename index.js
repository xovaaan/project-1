const slides = document.querySelectorAll(".elements");
let count = 1;

setInterval(() => {
    count++
    let slideElements = document.querySelector(".current");
    slideElements.classList.remove("current");
    if(count>slides.length){
        slides[0].classList.add("current");
        count = 1;
    }else{
        slideElements.nextElementSibling.classList.add("current")
    }
   
}, 2000);