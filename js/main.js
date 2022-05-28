$(document).ready(function() {

    $('.nav-toggler').on('click', function(){
      $('header').toggleClass('showHeader');
      $('nav').toggleClass('showNav')
    })

    $('.close_navbar').on('click', function(){
      $('header').removeClass('showHeader');
      $('nav').removeClass('showNav')
    })

    var slider = $('#home_slider');
    slider.owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      items: 1,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 5000
    })

    $('.progress-bar-fill').delay(1000).queue(function () {
      $(this).css('width', '100%')
    });

    var featureSlider = $('#feature_slider');
    featureSlider.owlCarousel({
      margin: 10,
      nav: true,
      navText: ["<img src='image/prev-arrow.png' class='img-fluid'/>","<img src='image/next-arrow.png' class='img-fluid'/>"],
      loop: true,
      items: 1,
      dots: false
    })

    // Year changes

    const d = new Date();
    let year = d.getFullYear();
    $('#year').html(year)
})