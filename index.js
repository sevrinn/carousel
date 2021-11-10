const slides = document.querySelectorAll(".carousel-item")
let slidePosition = 0
const totalSlides = slides.length

const moveToPrevSlide = () => {
  console.log("moving to previous slide")
 }
 
 const moveToNextSlide = () => {
   console.log("moving to next slide")
 }

document.querySelector("#carousel-btn-prev").addEventListener("click", moveToPrevSlide)
document.querySelector("#carousel-btn-next").addEventListener("click", moveToNextSlide)

