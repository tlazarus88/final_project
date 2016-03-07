var quizQuestions = ['.question-1','.question-2','.question-3','.question-4','.question-5','.question-6'];

//var quizResponses = ['.responses-1','.responses-2','.responses-3','.responses-4','.responses-5','.responses-6'];

var i = 0;

$('.quiz-response').on('click', function () {
	$(quizQuestions[i]).fadeOut(1000, "linear", function () {
		i++;
		if (i<5) {
			$(quizQuestions[i]).fadeIn(1000, "linear");
		} else if (i=5) {
			$(window).load("http://google.com");
		};
	});
});
//setup array of variables

//capture click of button

//hide current question

//fade in new question




// creates generic map
/*function initMap() {
	var mapDiv = document.getElementById('destination-map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
    });
}*/

/**
 * @fileoverview Sample showing capturing a KML file click
 *   and displaying the contents in a side panel instead of
 *   an InfoWindow
 */
 /*

var map;
var src = 'https://developers.google.com/maps/tutorials/kml/westcampus.kml';

/**
 * Initializes the map and calls the function that creates polylines.
 */
 /*
function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(-19.257753, 146.823688),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  loadKmlLayer(src, map);
}

/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
 /*
function loadKmlLayer(src, map) {
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  google.maps.event.addListener(kmlLayer, 'click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById('capture');
    testimonial.innerHTML = content;
  });
}*/
