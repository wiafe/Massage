$( document ).ready(function() {

  // SmoothScrool Start
  	smoothScrool(1000);

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
  
});