$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper1', {
    // Optional parameters
    loop: true,
    // autoplay: 6000,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  });
  var swiper2 = new Swiper ('.sm-swiper', {
    // Optional parameters
    loop: true,
    // autoplay: 6000,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 3000,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  });

  $('.pp-switcher').click(function(){
      var nextProduct = $(this).data('recepie');
      $('.active-card').fadeOut(400, function () {
        $('.active-card').removeClass('active-card');
        $(nextProduct).addClass('active-card');
        $(nextProduct).fadeIn(0);
      });
  });

  $('.menu-button').click(function(){
		$('.collapsed-menu').fadeIn(300);
		$('.my-navbar').fadeOut(300);

	});

	$('.close-button').click(function () {
		$('.collapsed-menu').fadeOut(300);
    $('.my-navbar').fadeIn(300);
	});

  // anchors
  $('.anchor').click(function () {
     var hrefName = $(this).attr('href');
     var timeToScroll = Math.abs($(window).scrollTop() - $(hrefName).offset().top) / 3;
   $('html, body').animate({
         scrollTop: $(hrefName).offset().top - 60
     }, timeToScroll);
 });

  $(".collapsed-anchor").click(function () {
    $('.collapsed-menu').fadeOut(300);
    $('.my-navbar').fadeIn(300);
  })

});
