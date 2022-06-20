/*
Слайдер
*/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let Number =document.querySelector(".Number");
  let number =0;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    
   
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
     dots[i].style.display ="none"
   
     dots[i].classList.remove("dot-active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.display ="flex"
  if(slideIndex-1==1){
    dots[slideIndex-1].classList.add("dot-pan");
  }
  else if(slideIndex-1==2){
    dots[slideIndex-1].classList.add("dot-pan-two");
  }
  else if(slideIndex-1==3){
    dots[slideIndex-1].classList.add("dot-pan-3");
  }
  else if(slideIndex-1==4){
    dots[slideIndex-1].classList.add("dot-pan-4");
  }
  else if(slideIndex-1==5){
    dots[slideIndex-1].classList.add("dot-pan-5");
  }
  else if(slideIndex-1==6){
    dots[slideIndex-1].classList.add("dot-pan-6");
  }
  else if(slideIndex-1==7){
    dots[slideIndex-1].classList.add("dot-pan-7");
  }
  Number.innerHTML = "0"+slideIndex+"/08";
  dots[slideIndex-1].classList.add("dot-active");
}

/*
Кнопка вверх
*/

$('.js-scroll-top').click(function() {
  $('html,body').animate({
      scrollTop: 0
   }, 1000);
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    $('.js-scroll-top').addClass('is-show');
  } else {
    $('.js-scroll-top').removeClass('is-show');
  }
});