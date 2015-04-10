head.ready(function() {

	$(".js-career").click(function() {
		$(this).toggleClass("active");
		$(".fa").toggleClass("fa-plus-circle");
		$(".fa").toggleClass("fa-minus-circle");
		return false
	});

	$(".nav__item").click(function() {
		$(this).toggleClass("active");
		return false
	});

	function initialize() {
	  var myLatlng = new google.maps.LatLng(50.447378, 30.523349);
	  var mapOptions = {
	    zoom: 17,
	    center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);

	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  });
	}

	if ($('#contact-map').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	

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
	  var map1 = new google.maps.Map(document.getElementById('location-map'), mapOptions2);
	 
	  var marker1 = new google.maps.Marker({
	      position: pos1,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker2 = new google.maps.Marker({
	      position: pos2,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker3 = new google.maps.Marker({
	      position: pos3,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	        
	  var marker4 = new google.maps.Marker({
	      position: pos4,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });

	  var marker5 = new google.maps.Marker({
	      position: pos5,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });

	  var marker6 = new google.maps.Marker({
	      position: pos6,
	      map: map1,
	      title: 'Head Office 13b Staronavodnitskaya st., Kyiv Ukraine'
	  });
	    
	}
	if ($('#location-map').length){
		google.maps.event.addDomListener(window, 'load', initialize2);
	}

});