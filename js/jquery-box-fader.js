$(function(){

				var $container	= $('#portlinks'),
					$children = $container.children(),
					timeout;
				
				$container.on('mouseenter','article', function( event ) {						
					var $child = $(this);
					clearTimeout( timeout );
					timeout = setTimeout( function() {						
						if( $child.hasClass('active') ) return false;						
						$children.not( $child.removeClass('blur').addClass('active') )
								 .removeClass('active')
								 .addClass('blur');						
					}, 65 );					
				});
				
				$container.on('click', function( event ) {	
				});
				
				$container.on( 'mouseleave', function( event ) {					
					clearTimeout( timeout );
					$children.removeClass('active blur');
					
				});
				
});