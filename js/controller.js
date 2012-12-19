$(function() {

				
				var $container	= $('#portlinks'),
					$articles = $container.children('article'),
					timeout;
				
				$container.on('mouseenter','article', function( event ) {						
					var $article = $(this);
					clearTimeout( timeout );
					timeout = setTimeout( function() {						
						if( $article.hasClass('active') ) return false;						
						$articles.not( $article.removeClass('blur').addClass('active') )
								 .removeClass('active')
								 .addClass('blur');						
					}, 65 );					
				});
				
				$articles.on('click', function( event ) {	
				});
				
				$container.on( 'mouseleave', function( event ) {					
					clearTimeout( timeout );
					$articles.removeClass('active blur');
					
				});



console.log("from")

	
	$(".graph li:odd").addClass("alt");


	//Contact form events

				$("#contact-fodrm a").click(function () {

						var yourName = $("#name").val();
						var yourPhone = $("#phone").val();
						var yourEmail = $("#email").val();
						var yourMessage = $("#message").val();
						alert(document.getElementById('contact-form'));
						
						document.getElementById('contact-form').submit();

							//contactFormSubmit(yourName, yourPhone, yourEmail, yourMessage);
				});

				function contactFormSubmit(yourName, yourPhone, yourEmail, yourMessage){
					    	var from = yourEmail;
							var to = "email@sjmcpherson.com";
							var subject = "Website Enquiry";
							var content = "Hi,<br/>There has been an website enquiry:<br/><br/>Their Name: "+yourName;
							content += "<br/>Their Phone: "+yourPhone;
							content += "<br/>Their Email: "+yourEmail;
							content += "<br/>Their Message: "+yourMessage;
							content += "<br/><br/>The Website.<br/><br/>";
							console.log(from)
							var data = "from=" + from + "&to=" + to + "&subject=" + subject + "&content=" + content;      
							$.ajax({
								type: "POST",
								url: "sendmail.php",
								data: data,
								success: function(){								
									$("#contactform").html('<p>&nbsp;</p><h4>&nbsp;</h4><h4>Your Message Has Been Sent!</h4><h4>And marked with high importance</h4><h4>We will be in contact soon</h4>');						
								},
								error: function(){
								}
							});      
				}


	//Scroll events
	$(function() {   
		 var _rolledUp = false;
		$(window).scroll(rollup).scroll();
    function rollup(e) {	
			var st = $(window).scrollTop();	
			//Masthead
			if (st > 50 && !_rolledUp) {
				$("header").addClass("fix");
				
				

				
				_rolledUp = true;
			} else if (st < 50 && _rolledUp) {
				$("header").removeClass("fix");
				_rolledUp = false;
			}
			
			
		
	
			//Show page nav title when main title is gone
			/*if (st > pageHeaderBottom && !_pageSubNavHeaderRolledUp) {
				$("#page-title").animate({ opacity: 1 }, 500);
				_pageSubNavHeaderRolledUp = true;
			} else if (st < pageHeaderBottom && _pageSubNavHeaderRolledUp) {
				$("#page-title").animate({ opacity: 0 }, 500);
				_pageSubNavHeaderRolledUp = false;
			}
	
			//Adjust sidebar top to stop sidebar running off end of page
			if (st > sidebarStopper) {
				sidebar.addClass("stopper");
			} else {
				sidebar.removeClass("stopper");
			}*/
		}
	});
});