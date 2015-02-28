$( document ).ready(function() {

  // SmoothScrool Start
  	smoothScrool(1000);

    clientCarousel();

  function smoothScrool (duration) {
  	$('a[href^="#"]').on('click', function(event) {

  		var target = $( $(this).attr('href'));

  		if( target.length ) {
  			event.preventDefault();
  			$('html, body').animate({
  				scrollTop: target.offset().top
  			}, duration);
  		}
  	});
  }

  //SmoothScrool Ending


  function clientCarousel() {

    $('.client-unit').first().addClass('active-client')
    $('.client-logo').first().addClass('active-client')
    $('.clients-mobile span').first().addClass('active-client')

    // Setting logos as controls
    $('.client-logo, .clients-mobile span').click(function() {
      var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);

      $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
      $siblings.removeClass('active-client');
      $this.addClass('active-client')
    });

    // Arrows Controls
    $('.control-next, .control-prev').click(function() {
      var $this = $(this),
        activeClient = $('.clients-belt').find('.active-client'),
        position = $('.clients-belt').children().index(activeClient),
        clientNum = $('.client-unit').length;

        if($this.hasClass('control-next'))
          if(position < clientNum -1) {
            $('.active-client').removeClass('active-client').next().addClass('active-client');
          } else {
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
            $('.client-logo').removeClass('active-client').first().addClass('active-client');
          } else {

            if (position === 0) {
              $('.client-unit').removeClass('active-client').last().addClass('active-client');
              $('.client-logo').removeClass('active-client').last().addClass('active-client');

            } else {
              $('.active-client').removeClass('active-client').prev().addClass('active-client');
              }
          }
    });
  }

  $(function() {
    $( "#datepicker" ).datepicker({ minDate: -20, maxDate: "+1M +10D" });
  });
});