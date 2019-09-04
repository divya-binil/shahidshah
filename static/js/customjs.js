/* Home page video slider*/
$('.play-button').on('click', function () {
        $(this).hide();
        $(this).parent().fadeOut();
        $(this).parent().siblings('.slider-video')[0].play();
    });

    $('.slider-video').on('play', function () {
        $(this).attr('controls', '1');
    });

    // Additionnal code for the slider
    var pos = 0,
        slides = $('.slide'),
        numOfSlides = slides.length;

    function nextSlide(){
        stopCurrentVideo();
        slides.eq(pos).animate({left:'-100%'},500);
        pos = pos >= numOfSlides-1 ? 0 : ++pos;
        slides.eq(pos).css({left:'100%'}).animate({left:0},500);
    }

    function previousSlide(){
        stopCurrentVideo();
        slides.eq(pos).animate({left:'100%'},500);
        pos = pos == 0 ? numOfSlides-1 : --pos;
        slides.eq(pos).css({left:'-100%'}).animate({left:0},500);
    }

    function stopCurrentVideo(){
        $('.slider-video:eq('+pos+')').load().removeAttr('controls')
        .siblings('.overlay-content').show().find('.play-button').show();
    }

    $('.left').click(previousSlide);
    $('.right').click(nextSlide);


/* contact form popup */
(function(){
  $('html').addClass('js');
  
  var contactForm = {
    container: $('#contactpopup'),
    config: {
      effect: 'slideToggle',
      speed: 200
    },
    
    init: function(config){
      $.extend(this.config, config);
      
      $('#c-btn').on('click', this.show);
    },

    show: function(){
      var cf = contactForm,
          container = cf.container,
          config = cf.config;
                    

      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },

    close: function(){
      var $this = $('#contactpopup'); 
      
      if($this.find('span.close').length) return;

      $('<span class=close>x</span>')
        .prependTo(this)
        .on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };

contactForm.init({
  effect: 'fadeToggle',
  speed: 200
});
})();

/* Experience section tab*/
