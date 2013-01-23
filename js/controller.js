$(function() {
	
	//Scroll events

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
		}
		
		$("#portlinks").boxFader();

});