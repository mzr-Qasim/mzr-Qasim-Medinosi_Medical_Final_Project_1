

const choiceArray = document.querySelectorAll(".choice")







jQuery(document).ready(function($) {

    choiceArray.forEach((card) => {
        card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset")
                element.classList.add('small')
            })
            card.classList.remove("small")
            card.classList.add('expand')
        });
    });
        
    
    
    
    
    
    
    
    
    
    
    
    var $owl = $('.owl-carousel');
    
    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    
    $owl.owlCarousel({
      responsive:{
        0:{
            items:1,
            center:true,
            nav:true,
            loop:false,
        },
        600:{
            items:2,
            nav:true,
            loop:false,
        },
        1000:{
            center:true,
            loop:true,
            items:3,
            nav:false,
            loop:true,
            autoplay:false,
        }
    }
      
    });
    
    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });

    $('.counter').counterUp({
        delay: 10,
        time: 8000
    });



    
});