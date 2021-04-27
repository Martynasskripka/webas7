$(document).ready(function() {

    
    /* Fixed header when scrolling */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* Scrollspy */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ScrollTo  */
    $('a.scrollto').on('click', function(e){
        
          /* Store */
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
          /* Collapse mobile meniu */
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
	});


});