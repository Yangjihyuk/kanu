window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    effect:'fade',
});

window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0) 
});

function toggleMenu(){
   const menuToggle=document.querySelector('.menuToggle');
   const navigation=document.querySelector('.navigation')
   menuToggle.classList.toggle('active');
   navigation.classList.toggle('active');
}

$('.b-01').click(function(){
    $('.pop-01').fadeIn();
});
$('.cl').click(function(){
    $('.pop-01').fadeOut();
});


$('.b-02').click(function(){
    $('.pop-02').fadeIn();
});
$('.cl').click(function(){
    $('.pop-02').fadeOut();
});


$('.b-03').click(function(){
    $('.pop-03').fadeIn();
});
$('.cl').click(function(){
    $('.pop-03').fadeOut();
});

$('.b-04').click(function(){
    $('.pop-04').fadeIn();
});
$('.cl').click(function(){
    $('.pop-04').fadeOut();
});