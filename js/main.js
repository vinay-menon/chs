/*------------------------------------
	Theme Name: Maxmuseum
---------------------------------------*/

(function($) {

	"use strict"
	
	/* - Responsive Caret Dropdown open */
	function menu_dropdown_open(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".ow-navigation .nav li.ddl-active").length ) {
				$(".ow-navigation .nav > li").removeClass("ddl-active");
				$(".ow-navigation .nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			$(".ow-navigation .nav li .dropdown-menu").removeAttr("style");
		}
	}
	
	/* - Responsive Panel Resize */
	function panel_resize(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".header-section #slidepanel").length ) {
				$(".header-section #slidepanel").removeAttr("style");
			}
		}
	}
	
	/* - Sticky Menu */
	function sticky_menu() {
		var menu_scroll = $(".header-section").offset().top;
		var scroll_top = $(window).scrollTop();

		if ( scroll_top > menu_scroll ) {
			$(".header-section .menu-block").addClass("navbar-fixed-top animated fadeInDown");
		} 
		else {
			$(".header-section .menu-block").removeClass("navbar-fixed-top animated fadeInDown"); 
		}
	};	
	
	/* - Header Position */
	function header_position() {
		var width	=	$(window).width();
		if ( width >= 992 ) {
			if( $(".rev_slider").length == 1 && $(".page-banner").length == 1) {
				$(".header-section .menu-block2").css("position","relative");
				$(".header-section.header-section2").addClass("background-transparant");
				$(".page-banner").addClass("no-topmargin");
			}
			else if( $(".rev_slider").length == 1 ) {
				$(".header-section .menu-block2").css("position","absolute");
				$(".page-banner").addClass("no-topmargin");
			}
			else if( $(".header-section:not(.header-section2)").length == 1 ) {
				$(".page-banner").removeClass("no-topmargin");
			}
			else {
				$(".header-section .menu-block2").css("position","relative");
				$(".page-banner").addClass("no-topmargin");
				$(".header-section.header-section2").addClass("background-transparant");
			}
		}
		else {
			$(".header-section .menu-block2").removeAttr("style");
		}
	};
		
		
	/* ## Document Ready - Handler for ready() called */
	$(document).on("ready",function() {

		/* - Scrolling Navigation */
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Set Sticky Menu */
		if( $(".header-section").length ) {
			sticky_menu();
		}
		
		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click", function(e) {
	
			var $anchor = $(this);
			
			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");
			
			e.preventDefault();
		});
		
		/* - Go to Next */
		$('.goto-next a').on('click', function(event)
		{
			var anchor = $(this);
			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 49 }, 1500, 'easeInOutExpo' );
				}
				event.preventDefault();
			}
		});
		
		/* - Responsive Caret */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Expand Panel */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		/* Collapse Panel */
		$("#closeit").on("click", function() {
			$("#slidepanel").slideUp("slow");
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click */
		$("#toggle a").on("click", function() {
			$("#toggle a").toggle();
		});	
		
		/* Title Add Span Tag Blog Listing */
		if( $(".blog-listing").length ) {
			$('.blog-listing .entry-title a').html(function (idx, html) {
				return html.replace(/(\s[\S]+)$/, '<span>$1</span>')
			})
		}
		
		/* Title Add Span Tag Latest Blog Section*/
		if( $(".latest-blog-section").length ) {
			$('.latest-blog-section .title-block h3 a').html(function (idx, html) {
				return html.replace(/(\s[\S]+)$/, '<span>$1</span>')
			})
		}
		
		/* Title Add Span Tag */
		if( $(".events").length ) {
			$('.events .events-block .events-content h3 a').html(function (idx, html) {
				return html.replace(/(\s[\S]+)$/, '<span>$1</span>')
			})
		}
		
		panel_resize();
		header_position();
		
	});	/* -- Document Ready /- */
	
	
	/* ## Event - Window Scroll */
	$( window ).on("scroll",function() {
		/* - Set Sticky Menu */
		if( $(".header-section .menu-block").length ) {
			sticky_menu();
		}
	});
	
	/* ## Event - Window Resize */
	$( window ).on("resize",function() {
		panel_resize();
		header_position();
	});
	
	/* ## Window Load - Handler for load() called */
	$(window).on("load",function() {
		/* -- Site Loader */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
	});
	
	if( $('.social-share ul').length ) {
		$('.social-share ul > li > a', this).on('click', function() {

			var data_action = $(this).attr('data-action');
			var data_title = $(this).attr('data-title');
			var data_url = $(this).attr('data-url');

			if( data_action == 'facebook' ) {		
				window.open('http://www.facebook.com/share.php?u='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'twitter' ) {
				window.open('http://twitter.com/intent/tweet?status='+encodeURIComponent(data_url)+'+'+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'google-plus' ) {
				window.open('https://plus.google.com/share?url='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'linkedin' ) {
				window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(data_url)+'&title='+encodeURIComponent(data_title)+'&source='+encodeURIComponent(data_url),'sharer','toolbar=0,status=0,width=580,height=325');
			}
			else if( data_action == 'pinterest' ) {
				window.open('http://pinterest.com/pin/create/button/?url='+encodeURIComponent(data_url)+'&media=http://cdn2.wpbeginner.com/wp-content/uploads/2013/12/siteground-74x74.jpg&description='+encodeURIComponent(data_title),'sharer','toolbar=0,status=0,width=580,height=325');
			}
		});
	}

})(jQuery);