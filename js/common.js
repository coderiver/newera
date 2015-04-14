head.ready(function() {

	// tablet menu
	$(".js-tablet-btn").click(function() {
		$(".js-tablet-menu").addClass("active");
		return false
	});

	$(".js-tablet-close").click(function() {
		$(".js-tablet-menu").removeClass("active");
		return false
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

	// menu
	$(".nav__item").click(function() {
		$(this).toggleClass("active");
		return false
	});

	// career item
	$(".js-career").click(function() {
		$(this).toggleClass("active");
		$(this).find(".fa").toggleClass("fa-plus-circle");
		$(this).find(".fa").toggleClass("fa-minus-circle");
		return false
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
	  var myLatlng = new google.maps.LatLng(50.447378, 30.523349);
	  var mapOptions0 = {
	    zoom: 17,
	    center: myLatlng
	  }
	  var map0 = new google.maps.Map(document.getElementById('contact-map'), mapOptions0);

	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map0,
	      title: 'Hello World!'
	  });
	}

	if ($('#contact-map').length){
		google.maps.event.addDomListener(window, 'load', initialize0);
	}

	// contact map mobile
	function initialize1() {
	  var myLatlng = new google.maps.LatLng(50.447378, 30.523349);
	  var mapOptions1 = {
	    zoom: 17,
	    center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('contact-map-mob'), mapOptions1);

	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map1,
	      title: 'Hello World!'
	  });
	}

	if ($('#contact-map-mob').length){
		google.maps.event.addDomListener(window, 'load', initialize1);
	}
	
	// location map
	function initialize2(){
    
	var myLatlng = new google.maps.LatLng(49.013904, 31.285831);
	        var pos1 = new google.maps.LatLng(50.426910, 30.543752);
	        var pos2 = new google.maps.LatLng(49.992163, 36.227460);
	        var pos3 = new google.maps.LatLng(50.746417, 25.322675);
	        var pos4 = new google.maps.LatLng(48.465713, 35.029196);
	        var pos5 = new google.maps.LatLng(46.974544, 31.993577);
	        var pos6 = new google.maps.LatLng(48.683554, 26.581305);
	  var mapOptions2 = {
	    zoom: 6,
	    center: myLatlng
	  }
	  var map2 = new google.maps.Map(document.getElementById('location-map'), mapOptions2);
	 
	  var marker1 = new google.maps.Marker({
	      position: pos1,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker2 = new google.maps.Marker({
	      position: pos2,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker3 = new google.maps.Marker({
	      position: pos3,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker4 = new google.maps.Marker({
	      position: pos4,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });

	  var marker5 = new google.maps.Marker({
	      position: pos5,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });

	  var marker6 = new google.maps.Marker({
	      position: pos6,
	      map: map2,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	    
	}
	if ($('#location-map').length){
		google.maps.event.addDomListener(window, 'load', initialize2);
	}

});