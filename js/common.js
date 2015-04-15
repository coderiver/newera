head.ready(function() {

	// tablet, mobile menu
	$(".js-btn").click(function() {
		var width = $(window).width();
		if (width <= 939 && width >=768) {
			$(".js-tablet-menu").addClass("active");
		}
		else {
			$(".js-mobile-menu").addClass("active");
		}
		return false;
	});

	$(".js-close").click(function() {
		$(".js-tablet-menu").removeClass("active");
		$(".js-mobile-menu").removeClass("active");
		return false;
	});


	// tablet menu dropdown
	$('.js-tablet-dropdown').on('click', function(){
	  	if ($(this).hasClass('is-open')) {
	   		$(this).removeClass('is-open');
	   		$(this).next().slideUp('fast');
	  	} else {
			$('.mobile-menu__link').removeClass('is-open');
			$('.dropdown__list').slideUp('fast');
			$(this).addClass('is-open');
			$(this).next().slideDown('fast');
	  	} 
	});

	// mobile menu
	$(".js-mob-link").click(function() {
		$(this).parent().find(".mobile-menu__submenu").addClass("is-open");
		$(".mobile-menu__wrapper").addClass("is-open");
		return false;
	});

	$(".js-mob-back").click(function() {
		$(this).parent().removeClass("is-open");
		$(".mobile-menu__wrapper").removeClass("is-open");
		return false;
	});

	// menu
	$(".nav__item").hover(function() {
		$(this).toggleClass("active");
		return false;
	});

	// our business imgs
	$(".fancybox").fancybox();

	// press release years
	$(".js-years").click(function() {
		$(this).toggleClass("active");
		return false;
	});

	// career item
	$(".js-career").click(function() {
		$(this).toggleClass("active");
		$(this).find(".fa").toggleClass("fa-plus-circle");
		$(this).find(".fa").toggleClass("fa-minus-circle");
		return false;
	});

	// validation
	var form_validate = $('.js-validate');
	if (form_validate.length) {
	  	form_validate.each(function () {
	   		var form_this = $(this);
	   		$.validate({
	    		form : form_this,
	    		onValidate : function() {
	    			alert();
	        		$('.js-button').removeAttr("disabled");
	    		}
	   		});
	  	});
	 };

	// contact map
	function initialize0() {
	  var myLatlng0 = new google.maps.LatLng(50.447378, 30.523349);
	  var mapOptions0 = {
	    zoom: 17,
	    center: myLatlng0
	  }
	  var map0 = new google.maps.Map(document.getElementById('contact-map'), mapOptions0);

	  var marker0 = new google.maps.Marker({
	      position: myLatlng0,
	      map: map0,
	      title: 'Hello World!'
	  });
	}

	if ($('#contact-map').length){
		google.maps.event.addDomListener(window, 'load', initialize0);
	}

	// contact map mobile
	function initialize1() {
	  var myLatlng1 = new google.maps.LatLng(50.447378, 30.523349);
	  var mapOptions1 = {
	    zoom: 17,
	    center: myLatlng1
	  }
	  var map1 = new google.maps.Map(document.getElementById('contact-map-mob'), mapOptions1);

	  var marker1 = new google.maps.Marker({
	      position: myLatlng1,
	      map: map1,
	      title: 'Hello World!'
	  });
	}

	if ($('#contact-map-mob').length){
		google.maps.event.addDomListener(window, 'load', initialize1);
	}
	
	// location map
	var map2;
	var pointsOnMap = [
        [50.426910, 30.543752, 1, {
            'head'    : 'Head Office',
            'address' : '13b Staronavodnitskaya st., Kyiv Ukraine'
        }],
        [49.992163, 36.227460, 2, {
            'head'    : 'Office2',
            'address' : 'Ukraine'
        }],
        [50.746417, 25.32267, 3, {
            'head'    : 'Office3',
            'address' : 'Ukraine'
        }],
        [50.746417, 25.322675, 4, {
            'head'    : 'Office4',
            'address' : 'Ukraine'
        }],
        [46.974544, 31.993577, 5, {
            'head'    : 'Office5',
            'address' : 'Ukraine'
        }],
        [48.683554, 26.581305, 6, {
            'head'    : 'Office6',
            'address' : 'Ukraine'
        }]
    ];

    var image2 = {
        url: 'img/icons/marker-map.png',
        size: new google.maps.Size(28, 42),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(14, 42)
      };

	// Function return array of markers that was create from "locations" and added to "map"
	function setMarkers(map2, locations) {
	        var markers = [];
	        for (var i = 0; i < locations.length; i++) {
	            var point    = locations[i];
	            var myLatlng = new google.maps.LatLng(point[0], point[1]);
	            var marker2   = new google.maps.Marker({
	                position : myLatlng,
	                map      : map2,
	                icon 	 : image2,
	                title    : point[3].head,
	                zIndex   : point[2]
	            });
	            marker2.infoContent = point[3];
	            markers.push(marker2);
	        }
	        return markers;
	    }

	// After function is complete all marker in array will contain object with info for infowindow
	function setInfoWindowContent(arrayOfMarkers, infoWindow) {
	        for (var i = 0; i < arrayOfMarkers.length; i++) {
	            google.maps.event.addListener(arrayOfMarkers[i], 'click', function() {
	                var content = composeInfoWindowContent(this.infoContent);
	                infoWindow.setContent(content);
	                infoWindow.open(map2, this);
	            });
	        }
	    }

	function composeInfoWindowContent(data) {
	    return 	'<div class="marker-info">' +
		    		'<ul class="marker-info__in">' +
		                '<li class="marker-info__head">'     + data.head    + '</li>' +
		                '<li class="marker-info__address">'  + data.address + '</li>' +
		            '</ul>'
		        '</div>';
	    }

	function initialize2() {
	    var mapOptions2 = {
	            zoom: 6,
	            disableDefaultUI: true,
	            scrollwheel: false,
	            center: new google.maps.LatLng(49.0, 31.2)
	        };

	    map2 = new google.maps.Map(document.getElementById('location-map'), mapOptions2);

	    var mapMarkers = setMarkers(map2, pointsOnMap);

	    var mapInfoWindow = new google.maps.InfoWindow();

	    setInfoWindowContent(mapMarkers, mapInfoWindow);
	}

	google.maps.event.addDomListener(window, 'load', initialize2);

});