(function($) {

	"use strict";
	
	/* - Contact Map */
	function initialize(obj) {

		var lat = $('#'+obj).attr("data-lat");
		var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = $('#'+obj).attr("data-marker");
		var zoomLevel = parseInt($("#"+obj).attr("data-zoom") ,10);
		var styles = [
			{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40}]},
			{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#000000"},{"lightness": 16}]},
			{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
			{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 20}]},
			{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},
			{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},
			{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 21}]},
			{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 17}]},
			{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 29},{"weight": 0.2}]},
			{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},
			{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 16}]},
			{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 19}]},
			{"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 17}]}
		]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		map = new google.maps.Map(document.getElementById(obj), mapOptions);	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300
		});		
		marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
		if(contentString != '') {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});	
		}
	}
	
	window.initMap = function() {}	
	
	
	/* - Gallery */
		function gallery() {
			if($(".gallery-fitrow").length){
				var $container = $(".gallery-fitrow");
				$container.isotope({
					layoutMode: 'fitRows',
					itemSelector: ".gallery-box",
					gutter: 0,
					transitionDuration: "0.5s"
				});
				
				$("#filters a").on("click",function(){
					$('#filters a').removeClass("active");
					$(this).addClass("active");
					var selector = $(this).attr("data-filter");
					$container.isotope({ filter: selector });		
					return false;
				});
			}
		}
		
		/* - Contact Section */
		function cnt_box_height() {	
			if($(".contact-section .cnt-detail-box").length) {
				var maxHeight = 0;
				$(".cnt-detail-box").each(function(){
				   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
				});
				$(".cnt-detail-box").height(maxHeight);
			}
		}
		
		/* - History Section */
		// function history_img() {
		// 	var width = $(window).width();
		// 	var history_content_height = $(".history-section .history-details").height();
		// 	if ( width >= 992 ) {
		// 		$( ".history-section .img-block" ).removeAttr("style");
		// 		$( ".history-section .img-block img" ).remove();
		// 		var history_image = $(".history-section .img-block").attr("data-image");
		// 		$( ".history-section .img-block" ).css({"background-image":"url('" + history_image + "')","height": history_content_height });
		// 	} else {
		// 		$( ".history-section .img-block" ).removeAttr("style");
		// 		$( ".history-section .img-block img" ).remove();
		// 		var history_image = $(".history-section .img-block").attr("data-image");
		// 		$( ".history-section .img-block" ).append("<img src='"+ history_image +"' />")
		// 	}
		// }
		
		/* - Venu Section 2 */
		function venu_img() {
			var width = $(window).width();
			var venu_section_height = $(".venu-section-2").height();
			if ( width >= 992 ) {
				$( ".venu-img" ).removeAttr("style");
				$( ".venu-img img" ).remove();
				var venu_img = $(".venu-img").attr("data-image");
				$( ".venu-img" ).css({"background-image":"url('" + venu_img + "')","height": venu_section_height });
			} else {
				$( ".venu-img" ).removeAttr("style");
				$( ".venu-img img" ).remove();
				var venu_img = $(".venu-img").attr("data-image");
				$( ".venu-img" ).append("<img src='"+ venu_img +"' />")
			}
		}
		
		/* - Events List */
		function event_list() {
			$(".event-section2 .events-content .events-list .events-list-box").each(function(index){
				$(".event-section2 .events-content .events-list .events-list-box > div").removeAttr("style");
				var event_height = $(".event-section2 .events-content .events-list .events-list-box").eq(index).height();
				if( event_height > 80 ) {
					$(".event-section2 .events-content .events-list .events-list-box > div").css("height",event_height);
				} else {
					$(".event-section2 .events-content .events-list .events-list-box > div").css("min-height","80px");
				}
			});
		}
		
		function event_img_block() {
			var width = $(window).width();
			var event_height = $(".event-section2").height();
			if ( width >= 992 ) {
				$(".event-section2 .event-img-block").removeAttr("style");
				$( ".event-section2 .event-img-block > img" ).remove();
				var event_image = $(".event-section2 .event-img-block").attr("data-image");
				$( ".event-section2 .event-img-block" ).css({"background-image":"url('" + event_image + "')","height": event_height });
			} else {
				$(".event-section2 .event-img-block").removeAttr("style");
				$( ".event-section2 .event-img-block > img" ).remove();
				var event_image = $(".event-section2 .event-img-block").attr("data-image");
				$( ".event-section2 .event-img-block" ).prepend("<img src='"+ event_image +"' />")
			}
			if ( width >= 992 ) {
				var event_img_block_height = $(".event-section2 .event-img-block").height();
				var event_img_content_height = $(".event-section2 .event-img-block .event-img-content-box").height();
				var event_img_content_padding = ( event_img_block_height - event_img_content_height ) / 2 ;
				$(".event-section2 .event-img-block").css({"padding-top":event_img_content_padding,"padding-bottom":event_img_content_padding});
			} else {
				$(".event-section2 .event-img-block").removeAttr("style");
			}
		}

	/* Event - Document Ready */
	$(document).on("ready",function() {

		/* - Contact Map Initialization */
		if($("#map-canvas-contact").length==1){
			initialize("map-canvas-contact");
		}
		
		/* - Event Map */
		if($("#map-canvas-event-single").length==1){
			initialize("map-canvas-event-single");
		}
		
		/* - History Section */
		if( $(".history-section").length ) {
			history_img();
		}
		
		/* - Testimonial Carousel */
		if( $(".testimonial-carousel").length ) {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					992:{
						items: 2
					}
				}
			});
		}
		
		/* - Testimonial Section 2 */
		if( $(".testimonial-section2").length ) {
			$("#testimonial2").on('slid.bs.carousel', function () {
				$( "ol.testi-thumb li.active" ).removeClass('active');
				var idx = $('div.active').index('div.item');
				$('ol.testi-thumb li[data-slide-to="'+ idx+'"]').addClass('active');
			});
			
			$('ol.testi-thumb  li').on("click",function(){ 
				$('ol.testi-thumb li.active').removeClass("active");
				$(this).addClass("active");
			});
		}
		
		/* - Counter Section */
		if($(".counter-section").length) {
			$( ".counter-section" ).each(function ()
			{
				var $this = $(this);
				var myVal = $(this).data("value");

				$this.appear(function()
				{		
					var statistics_item_count = 0;
					var statistics_count = 0;					
					statistics_item_count = $( "[id*='statistics_count-']" ).length;
					 
					for(var i=1; i<=statistics_item_count; i++)
					{
						statistics_count = $( "[id*='statistics_count-"+ i +"']" ).attr( "data-statistics_percent" );
						$("[id*='statistics_count-"+ i +"']").animateNumber({ number: statistics_count }, 4000);
					}				
				});
			});
		}
		
		/* - Venu Section 2 */
		if($(".venu-section-2").length){
			venu_img();
		}
		
		/* - Event List */
		if($(".event-section2").length){
			event_list();
			event_img_block();
		}
		
		/* - Gallery Section */
		gallery();
		if($(".gallery-list").length){
			var url;
			$(".gallery-list .gallery-box").magnificPopup({
				delegate: "a.zoom-out",
				type: "image",
				tLoading: "Loading image #%curr%...",
				mainClass: "mfp-img-mobile",
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: "<a href="%url%">The image #%curr%</a> could not be loaded.",				
				}
			});
		}
		
		/* - Client Carousel */
		if( $(".clients-carousel").length ) {
			$(".clients-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				dots: true,
				autoplay: false,
				responsive:{
					0:{
						items: 1
					},
					500:{
						items: 2
					},
					600:{
						items: 3
					},
					1000:{
						items: 5
					}
				}
			});
		}
		
		/* - Video Section */
		$(".video-section a,.intro-section a.video-play-icon").magnificPopup({
			disableOn: 700,
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		
	});	/* Event - Document Ready */
	
	
	/* ## Event - Window Resize */
	$( window ).on("resize",function() {
		/* - History Section */
		history_img();
		
		cnt_box_height();
		
		/* - Venu Section 2 */
		venu_img();
		
		/* - Event List */
		event_list();
		event_img_block();
	});
	
	
	$(window).on("load",function() {
		/* - Gallery Section */
		gallery();
		
		cnt_box_height();
	});

})(jQuery);