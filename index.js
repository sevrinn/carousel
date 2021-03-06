const slides = document.querySelectorAll(".carousel-item")
let slidePosition = 0
const totalSlides = slides.length

const hideAllSlides = () => {
  for(const slide of slides) {
    slide.classList.remove("carousel-item-visible")
  }
}
const moveToPrevSlide = () => {
  hideAllSlides()
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  slides[slidePosition].classList.add("carousel-item-visible")
 }
 
 const moveToNextSlide = () => {
   hideAllSlides()
   if (slidePosition === totalSlides - 1) {
     slidePosition = 0;
   } else {
     slidePosition++
   }

   slides[slidePosition].classList.add("carousel-item-visible")
 }


document.querySelector("#carousel-btn-prev").addEventListener("click", moveToPrevSlide)
document.querySelector("#carousel-btn-next").addEventListener("click", moveToNextSlide)

