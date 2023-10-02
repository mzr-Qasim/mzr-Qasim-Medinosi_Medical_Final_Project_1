

const choiceArray = document.querySelectorAll(".choice")



let playButton = document.getElementById("play_button");
let pauseButton = document.getElementById("pause_button");




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
            loop:true,
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
        time: 5000
    });

    playButton.addEventListener("click", function() {
        video.play();
        playButton.classList.add('vplay');
        pauseButton.classList.remove('vpause');
        document.querySelector('html').classList.add('playvideo');
      });
      
      pauseButton.addEventListener("click", function() {
          video.pause();
           playButton.classList.remove('vplay');
        pauseButton.classList.add('vpause');
      });
      //Video Play Pause Control End
      //Video Sound on & off Ctrl Start
      let soundOff = document.getElementById("sound-off");
      let soundOn = document.getElementById("sound-on");
      let soundCtrl = document.querySelector(".sound-ctrl");
      
      soundOff.addEventListener("click", function() {
       video.muted = true;
       soundCtrl.classList.add('soundctrlshow');
      });
      
      soundOn.addEventListener("click", function() {
          video.muted = false;
          soundCtrl.classList.remove('soundctrlshow'); 
      });
      //Video Sound on & off Ctrl End
      video.onended = function() {
              document.querySelector('html').classList.remove('playvideo');
           playButton.classList.remove('vplay');
      };


    

    



    
});

