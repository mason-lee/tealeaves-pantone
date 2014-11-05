$(document).ready(function() {
	/*
		checking to see wether the page the user was on before 
		was nothing (they've opened a new browser window) 
		or was not on the same domain as the current page.
	 */
	if ( document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0 ) {
		// Show modal on the page load
		$(window).load(function() {
			$("#myModal").modal('show');
		});
	}
	
	/*
		Get the colour user selected
	 */
	$(".colour-wrapper>ul li span").click(function() {
		var colourName = $(this).attr("class").split("")[1];
	});

	// Fade in the hover state
	var boxHover;
	$(".colour-wrapper>ul li").on("mouseover", function() {
		boxHover = $(this).find(".colour-box-hover").first();
		boxHover.css({opacity: 1});
		
	}).on("mouseleave", function() {
		boxHover.css({opacity: 0});
	});

	$(".colour-wrapper>ul li").click(function() {
		// Remove and add selected state
		$(".colour-wrapper>ul li").removeClass('colour-selected');	
		var colourToRemove = $(this).find("span").first().attr("class").split(" ").pop();
		$(this).find("span").first().removeClass(colourToRemove);
		
		// if($(this).attr("class")=='colour-selected') {
		// 	$(this).removeClass('colour-selected');
		// }
		// else {
		$(this).addClass('colour-selected');	
		// }
	});

	// Stick the nav even though it is scrolled down
	// $(window).scroll(function() {
	// 	var windowTop = $(window).scrollTop() + 80;
	// 	console.log(windowTop);
	// 	var divTop = $("#nav-anchor").offset().top;
	// 	console.log("divTop is " + divTop);
	// 	if (windowTop > divTop) {
	// 		$('nav').addClass('sticky-nav');
	// 	}
	// 	else {
	// 		$('nav').removeClass('sticky-nav');
	// 	}
	// });
	
	/**
	 * Smooth scrolling
	 */
	$("nav a").click(function(e) {
		e.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash);
		console.log(this.hash);
	});

	var aChildren = $("nav li").children(); // find the a children of the list items
	var aArray = []; // create the empty aArray
	
	// Fills the aArray with attribute href values
	for (var i = 0; i < aChildren.length; i++) {    
		var aChild = aChildren[i];
		var ahref = $(aChild).attr('href');
		aArray.push(ahref);
	} 

	var windowHeight;
	var docHeight;
	$(window).scroll(function(){
		// Get the offset of the window from the top of page
		var windowPos = $(window).scrollTop(); 
		// Get the height of the window
		windowHeight = $(window).height(); 
		docHeight = $(document).height();

		for (var i=0; i < aArray.length; i++) {
			var theID = aArray[i];
			// Get the offset of the div from the top of page
			var divPos = $(theID).offset().top;
			// Get the height of the div in question 
			var divHeight = $(theID).height(); 
			if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
				$("a[href='" + theID + "']").addClass("nav-active");
			} else {
				$("a[href='" + theID + "']").removeClass("nav-active");
			}
		}

		if(windowPos + windowHeight == docHeight) {
			if (!$("nav li:last-child a").hasClass("nav-active")) {
				var navActiveCurrent = $(".nav-active").attr("href");
				$("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
				$("nav li:last-child a").addClass("nav-active");
			}
		}
	});

	/**
	 * Snap button positioning
	 */
	var snapButton = $(".snap-button");
	var videoHeight;

	$(window).resize(function() {
		videoHeight = $("#my_camera>video").height();	
		snapButton.css({

		});
	});

	/*
		Colour boxes isotope
	 */
	var $container = $(".colour-wrapper>ul").isotope({
	    itemSelector: '.element-item',
	    layoutMode: 'fitRows'
  	});





});

























