$(document).ready(function() {
    

    // for the sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
    });
 

    // Scroll on button

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });
    
    // Navigation scroll

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });


    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%',
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
        offset: '50%',
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
        offset: '50%',
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
        offset: '50%',
    });

    // Mobile nav 

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200)


        if (icon[0].name == 'menu') {
            icon[0].name = 'close'
        } else if (icon[0].name == 'close') {
            icon[0].name = 'menu'
        }

        // <ion-icon name="close-sharp"></ion-icon>
    });

});


