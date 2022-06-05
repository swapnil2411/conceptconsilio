$(document).ready(function() {


    setTimeout(() => {
      $('main').addClass('showWeb');
    }, 5000);

    // Animation
    new WOW().init();

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

    //project tabs
    $('.tab_panels .tabs li').on('click', function(){
      var budgetPanelShow = $(this).attr('rel');
      $(this).addClass('active').siblings().removeClass('active');
      $('.tab_panels .panel.active').fadeOut(500, function(){
          $(this).removeClass('active');
          $('#' + budgetPanelShow).fadeIn(500, function(){
              $(this).addClass('active');
          })
      })
  })

  $('.project_toggle').on('click', function(){
    $('.tab_panels .tabs').toggleClass('showTabs');
  })

  
  var projectSlider = $('#project_detail_slider');
    projectSlider.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      items: 1,
      dots: false,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 5000,
      navText: ["<span class='iconify' data-icon='iwwa:angle-left'></span>","<span class='iconify' data-icon='iwwa:angle-left' data-rotate='180deg'></span>"],
    })


    $('.accordion_header').on('click', function(){
      $(this).find('svg').toggleClass('rotation');
      $(this).parent().siblings().find('svg').removeClass('rotation');

      $(this).parent().find('.accordion_content').slideToggle(500, function(){
        $(this).addClass('showContent');
        $(this).parent().siblings().find('.accordion_content').slideUp(500, function(){
          $(this).removeClass('showContent');
        })
      });
    })

    $('body').on('click', '.sort_box', function(){
      $('.sort_option_area').slideToggle(300, function(){
        $(this).toggleClass('showSort');
      })
    })
    
    $('body').on('click', '.sort_option_area ul li', function(){
      var selectedValue = $(this).html();
      $('.select_name').text(selectedValue);
      $('.sort_option_area').slideToggle(300, function(){
        $(this).toggleClass('showSort');
      })
    })
    
})