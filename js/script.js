//Slider
function showSlides() {
    let slideIndex = 1,
    slides = document.querySelectorAll('#gallery .photos img'),
    dots = document.querySelectorAll('.slider_btn');

   for(let i = 1; i < dots.length; i++) {

       dots[i].addEventListener('click', function () {
           for (let i = 0; i < slides.length; i++) {
               slides[i].classList.remove('showed');
           }
           slideIndex++;

           if (slideIndex > slides.length) {
               slideIndex = 1;
           }

           for (let i = 0; i < dots.length; i++) {
               dots[i].className = dots[i].className.replace(" red", "");
           }
           slides[slideIndex - 1].classList.add('showed');
           dots[slideIndex - 1].className += " red";
       });
   }
   setTimeout(showSlides, 6000);
}
showSlides();
