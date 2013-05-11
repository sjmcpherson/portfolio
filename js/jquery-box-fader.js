//Todo Add javascript fallback via Modernizr if(Modernizr.csstransforms && Modernizr.csstransitions){} 

(function($){
	$.fn.boxFader = function() {	
					var container = this,
						$children = container.children(),
						timeout;
					
					
					if(!Modernizr.touch){
						container.on('mouseenter','article', function( event ) {		
								var $child = $(this);					
								if( $child.hasClass('active') ) return false;				
								if(Modernizr.csstransitions){ 		
									$children.not( $child.removeClass('blur').addClass('active') )
										.removeClass('active')
										.addClass('blur')	
								}else{
										$children.not( $child.addClass('active').fadeTo('fast', 1, function() {}) )
										.removeClass('active')
										.fadeTo('fast', 0.5, function() {});	
								}	
						}).on( 'mouseleave', function( event ) {					
								if(Modernizr.csstransitions){
									$children.removeClass('active blur')
								}else{	
									$children.removeClass('active blur')								
									.fadeTo('fast', 1, function() {});		
								}
						});
					}
					
					container.on('click','article', function( event ) {	
							var href = $(this).find('a').attr('href');
							window.location = href;
					});
					
					return this
	}
})(jQuery);