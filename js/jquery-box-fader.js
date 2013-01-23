(function($){
	$.fn.boxFader = function() {	
					var container = this,
						$children = container.children(),
						timeout	;
					
					container.on('mouseenter','article', function( event ) {						
						var $child = $(this);
						clearTimeout(timeout);
						timeout = setTimeout( function() {						
							if( $child.hasClass('active') ) return false;						
							$children.not( $child.removeClass('blur').addClass('active') )
									 .removeClass('active')
									 .addClass('blur');						
						}, 50 );					
					}).on('click','article', function( event ) {	
							var href = $(this).find('a').attr('href');
							window.location = href;
					}).on( 'mouseleave', function( event ) {					
							clearTimeout( timeout );
							$children.removeClass('active blur');						
					});
					
					return this
	}
})(jQuery);