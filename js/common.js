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

	var infobox = new infoBox({
	    content: document.getElementById("infobox1"),
	    disableAutoPan: false,
	    maxWidth: 150,
	    pixelOffset: new google.maps.Size(-140, 0),
	    zIndex: null,
	    boxStyle: {
	                background: "url('../img/icons/bg_point.png') center no-repeat",
	                opacity: 1,
	                width: "215px",
	                padding: "20px"
	        },
	    closeBoxMargin: "12px 4px 2px 2px",
	    closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
	    infoBoxClearance: new google.maps.Size(1, 1)
	});

	// After function is complete all marker in array will contain object with info for infowindow
	function setInfoBoxContent(arrayOfMarkers, infoBox) {
	        for (var i = 0; i < arrayOfMarkers.length; i++) {
	            google.maps.event.addListener('click', function() {
	                infoBox.open(map2, this);
	                map2.panTo(loc);
	            });
	        }
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

	    setInfoBoxContent(mapMarkers, infoBox);
	}

	google.maps.event.addDomListener(window, 'load', initialize2);






	/* An InfoBox is like an info window, but it displays
	 * under the marker, opens quicker, and has flexible styling.
	 * @param {GLatLng} latlng Point to place bar at
	 * @param {Map} map The map on which to display this InfoBox.
	 * @param {Object} opts Passes configuration options - content,
	 * offsetVertical, offsetHorizontal, className, height, width
	 */

	function InfoBox(opts) {
	    google.maps.OverlayView.call(this);
	    this.latlng_ = opts.latlng;
	    this.map_ = opts.map;
	    this.content = opts.content;
	    this.offsetVertical_ = -195;
	    this.offsetHorizontal_ = 5;
	    this.height_ = 165;
	    this.width_ = 266;
	    var me = this;
	    this.boundsChangedListener_ =
	        google.maps.event.addListener(this.map_, "bounds_changed", function () {
	            return me.panMap.apply(me);
	        });
	    // Once the properties of this OverlayView are initialized, set its map so
	    // that we can display it. This will trigger calls to panes_changed and
	    // draw.
	    this.setMap(this.map_);
	}
	/* InfoBox extends GOverlay class from the Google Maps API
	 */
	InfoBox.prototype = new google.maps.OverlayView();
	/* Creates the DIV representing this InfoBox
	 */
	InfoBox.prototype.remove = function () {
	    if (this.div_) {
	        this.div_.parentNode.removeChild(this.div_);
	        this.div_ = null;
	    }
	};
	/* Redraw the Bar based on the current projection and zoom level
	 */
	InfoBox.prototype.draw = function () {
	    // Creates the element if it doesn't exist already.
	    this.createElement();
	    if (!this.div_) return;
	    // Calculate the DIV coordinates of two opposite corners of our bounds to
	    // get the size and position of our Bar
	    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
	    if (!pixPosition) return;
	    // Now position our DIV based on the DIV coordinates of our bounds
	    this.div_.style.width = this.width_ + "px";
	    this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
	    this.div_.style.height = this.height_ + "px";
	    this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
	    this.div_.style.display = 'block';
	};
	/* Creates the DIV representing this InfoBox in the floatPane. If the panes
	 * object, retrieved by calling getPanes, is null, remove the element from the
	 * DOM. If the div exists, but its parent is not the floatPane, move the div
	 * to the new pane.
	 * Called from within draw. Alternatively, this can be called specifically on
	 * a panes_changed event.
	 */
	InfoBox.prototype.createElement = function () {
	    var panes = this.getPanes();
	    var div = this.div_;
	    if (!div) {
	        // This does not handle changing panes. You can set the map to be null and
	        // then reset the map to move the div.
	        div = this.div_ = document.createElement("div");
	            div.className = "infobox"
	        var contentDiv = document.createElement("div");
	            contentDiv.className = "content"
	            contentDiv.innerHTML = this.content;
	        var closeBox = document.createElement("div");
	            closeBox.className = "close";
	            closeBox.innerHTML = "x";
	        div.appendChild(closeBox);

	        function removeInfoBox(ib) {
	            return function () {
	                ib.setMap(null);
	            };
	        }
	        google.maps.event.addDomListener(closeBox, 'click', removeInfoBox(this));
	        div.appendChild(contentDiv);
	        div.style.display = 'none';
	        panes.floatPane.appendChild(div);
	        this.panMap();
	    } else if (div.parentNode != panes.floatPane) {
	        // The panes have changed. Move the div.
	        div.parentNode.removeChild(div);
	        panes.floatPane.appendChild(div);
	    } else {
	        // The panes have not changed, so no need to create or move the div.
	    }
	}
	/* Pan the map to fit the InfoBox.
	 */
	InfoBox.prototype.panMap = function () {
	    // if we go beyond map, pan map
	    var map = this.map_;
	    var bounds = map.getBounds();
	    if (!bounds) return;
	    // The position of the infowindow
	    var position = this.latlng_;
	    // The dimension of the infowindow
	    var iwWidth = this.width_;
	    var iwHeight = this.height_;
	    // The offset position of the infowindow
	    var iwOffsetX = this.offsetHorizontal_;
	    var iwOffsetY = this.offsetVertical_;
	    // Padding on the infowindow
	    var padX = 40;
	    var padY = 40;
	    // The degrees per pixel
	    var mapDiv = map.getDiv();
	    var mapWidth = mapDiv.offsetWidth;
	    var mapHeight = mapDiv.offsetHeight;
	    var boundsSpan = bounds.toSpan();
	    var longSpan = boundsSpan.lng();
	    var latSpan = boundsSpan.lat();
	    var degPixelX = longSpan / mapWidth;
	    var degPixelY = latSpan / mapHeight;
	    // The bounds of the map
	    var mapWestLng = bounds.getSouthWest().lng();
	    var mapEastLng = bounds.getNorthEast().lng();
	    var mapNorthLat = bounds.getNorthEast().lat();
	    var mapSouthLat = bounds.getSouthWest().lat();
	    // The bounds of the infowindow
	    var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
	    var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
	    var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
	    var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;
	    // calculate center shift
	    var shiftLng =
	        (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
	        (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
	    var shiftLat =
	        (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
	        (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);
	    // The center of the map
	    var center = map.getCenter();
	    // The new map center
	    var centerX = center.lng() - shiftLng;
	    var centerY = center.lat() - shiftLat;
	    // center the map to the new shifted center
	    map.setCenter(new google.maps.LatLng(centerY, centerX));
	    // Remove the listener after panning is complete.
	    google.maps.event.removeListener(this.boundsChangedListener_);
	    this.boundsChangedListener_ = null;
	};

	function initialize() {
	    var markers = []; // makers array
	  
	    var myOptions = { // map settings
	        zoom: 8,
	        center: new google.maps.LatLng(-33.397, 150.644),
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        sensor: 'true'
	    }
	    var map = new google.maps.Map(document.getElementById("canvas-map"), myOptions);
	  
	    var data = [ // map data
	      {
	        'id':1,
	        'content':'Hello my name is marker, I\'m from Google',
	        'position': {
	          'lat':-33,
	          'lng':150
	         }
	      },
	      {
	        'id':2,
	        'content':'I am the content of this infobox. Wow, what a text.<br><br><a href="#">The good thing is: Tags are also possible</a>',
	        'position': {
	          'lat':-34,
	          'lng':150
	         }
	      },
	    ]
	      
	    for (var i = 0; i < data.length; i++) {
	      var current = data[i];
	  
	      var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(current.position.lat, current.position.lng),
	        map: map,
	        content: current.content
	      });
	  
	      markers.push(marker);
	  
	      google.maps.event.addListener(markers[i], "click", function (e) {
	        var infoBox = new InfoBox({
	            latlng: this.getPosition(),
	            map: map,
	            content: this.content
	        });
	      });
	    }
	}

	jQuery(document).ready(function(){
	    initialize();
	});

});