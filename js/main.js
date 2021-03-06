$(document).ready(function() {


  //screen size
  var screenSize = $(window).width();
  
   // Animation
   new WOW().init();
   
    setTimeout(() => {
      $('.preloader_area').addClass('hidePreloader');
      $('.indexLoader').addClass('showWeb');
      new WOW().init();
    }, 7000);

   //Search Toggle
   $('.searchToggle').on('click', function(){
    $('.functional_area .search_area').toggleClass('showSearchArea')
   })

    $('.nav-toggler').on('click', function(){
      $('header').toggleClass('showHeader');
      $('nav').toggleClass('showNav');
      $('.close_navbar').css('display', 'flex');
      $(this).css('display','none')
    })

    $('.close_navbar').on('click', function(){
      $('header').removeClass('showHeader');
      $('nav').removeClass('showNav');
      $('.nav-toggler').css('display', 'block');
      $(this).css('display','none');
    })

    // menu hover image changes
    $('.home_red a').on('mouseover', function(){
      var $showImg = $(this).attr('data-src');
      $('.hoverImg img').attr('src', $showImg);
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

    $('.panel .innerTabsArchitecture li').on('click', function(){
      var budgetPanelShow = $(this).attr('rel');
      $(this).addClass('active').siblings().removeClass('active');
      $('.innerPanelArchitecture.active').fadeOut(500, function(){
          $(this).removeClass('active');
          $('#' + budgetPanelShow).fadeIn(500, function(){
              $(this).addClass('active');
          })
      })
      
    })

    $('.panel .innerTabsCommercial li').on('click', function(){
      var budgetPanelShow = $(this).attr('rel');
      $(this).addClass('active').siblings().removeClass('active');
      $('.innerPanelCommercial.active').fadeOut(500, function(){
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
      autoplayTimeout: 3000,
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

    if (screenSize <= 600){
      $('.team_partners .individual_column:nth-child(2n+2)').addClass('animationDelay1');
    }

    if (screenSize > 600 && screenSize <= 767){
      $('.team_partners .individual_column:nth-child(3n+2)').addClass('animationDelay1');
      $('.team_partners .individual_column:nth-child(3n+3)').addClass('animationDelay2');
    }

    if (screenSize <= 767) {
      //alert("1680 reached")
      $('.blogs_flex_area .blog_column:nth-child(2n+2)').addClass('animationDelay1');
      $('.news_flex_area .news_column:nth-child(2n+2)').addClass('animationDelay1');
      $('.project_list .project_column:nth-child(2n+2)').addClass('animationDelay1');
    }

    if (screenSize >= 768 && screenSize <= 1679) {
      //alert("1680 reached")
      $('.blogs_flex_area .blog_column:nth-child(3n+2)').addClass('animationDelay1');
      $('.blogs_flex_area .blog_column:nth-child(3n+3)').addClass('animationDelay2');
      $('.news_flex_area .news_column:nth-child(3n+2)').addClass('animationDelay1');
      $('.news_flex_area .news_column:nth-child(3n+3)').addClass('animationDelay2');
      $('.project_list .project_column:nth-child(2n+2)').addClass('animationDelay1');
      $('.team_partners .individual_column:nth-child(4n+2)').addClass('animationDelay1');
      $('.team_partners .individual_column:nth-child(4n+3)').addClass('animationDelay2');
      $('.team_partners .individual_column:nth-child(4n+4)').addClass('animationDelay3');

    }

    
    if (screenSize >= 1680) {
      //alert("1680 reached")
      $('.blogs_flex_area .blog_column:nth-child(4n+2)').addClass('animationDelay1');
      $('.blogs_flex_area .blog_column:nth-child(4n+3)').addClass('animationDelay2');
      $('.blogs_flex_area .blog_column:nth-child(4n+4)').addClass('animationDelay3');
      $('.news_flex_area .news_column:nth-child(4n+2)').addClass('animationDelay1');
      $('.news_flex_area .news_column:nth-child(4n+3)').addClass('animationDelay2');
      $('.news_flex_area .news_column:nth-child(4n+4)').addClass('animationDelay3');
      $('.project_list .project_column:nth-child(3n+2)').addClass('animationDelay1');
      $('.project_list .project_column:nth-child(3n+3)').addClass('animationDelay2');
      $('.team_partners .individual_column:nth-child(4n+2)').addClass('animationDelay1');
      $('.team_partners .individual_column:nth-child(4n+3)').addClass('animationDelay2');
      $('.team_partners .individual_column:nth-child(4n+4)').addClass('animationDelay3');
    }
})