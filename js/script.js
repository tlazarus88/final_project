
var quizQuestions = ['.question-1','.question-2','.question-3','.question-4','.question-5','.question-6'];

var i = 0;

//setup array of variables
var food;
var happyHour;
var vibe;
var groupSize;
var outdoors;
var creditCard;

//capture click of button
$('.response').on('click', function (e) {
  e.preventDefault();
		//hide current question
    $(quizQuestions[i]).fadeOut(500, "linear", function () {
		i++;
    //fade in new question
		if (i<=5) {
			$(quizQuestions[i]).fadeIn(500, "linear");
		} else {
      window.location.href = "bars.html";
		};
	});
});

//capture and save quiz values
$(".question-1").on("click", ":submit", function() {
    food = $(this).val();
    localStorage.setItem('food', food);
    //localStorage.getItem('food');
    //alert(food);
    console.log(food);
});

$(".question-2").on("click", ":submit", function() {
    happyHour = $(this).val();
    localStorage.setItem('happyHour', happyHour);
    //alert(happyHour);
    console.log(happyHour);
});

$(".question-3").on("click", ":submit", function() {
    vibe = $(this).val();
    localStorage.setItem('vibe', vibe);
    //alert(vibe);
    console.log(vibe);
});

$(".question-4").on("click", ":submit", function() {
    groupSize = $(this).val();
    localStorage.setItem('groupSize', groupSize);
    //alert(groupSize);
    console.log(groupSize);
});

$(".question-5").on("click", ":submit", function() {
    outdoors = $(this).val();
    localStorage.setItem('outdoors', outdoors);
    //alert(outdoors);
    console.log(outdoors);
});

$(".question-6").on("click", ":submit", function() {
    creditCard = $(this).val();
    localStorage.setItem('creditCard', creditCard);
    console.log(food,happyHour,vibe,groupSize,outdoors,creditCard);
    //var arr = [ food, happyHour, vibe, groupSize, outdoors, creditCard];
    //$.makeArray( food, happyHour, vibe, groupSize, outdoors, creditCard )
    //alert(arr);
});

//filter rules for "Bars" page
$('input').on('change', function() {
    if ($('#yesFood').is(':checked')) {
        $('.noOutdoors').animate({width:'toggle'},500);
        $('.yesOutdoors').fadeIn(500, "linear");
    } else if ($('#noFood').is(':checked')) {
        $('.yesOutdoors').animate({width:'toggle'},500);
        $('.noOutdoors').fadeIn(500, "linear");
    } 
})
$('input').on('change', function() {
    if ($('#yesHh').is(':checked')) {
        $('.noHh').animate({width:'toggle'},500);
        $('.yesHh').fadeIn(500, "linear");
    } else if ($('#noHh').is(':checked')) {
        $('.yesHh').animate({width:'toggle'},500);
        $('.noHh').fadeIn(500, "linear");
    } 
})

//reset bar query parameters
$('#bars-nav').on('click', function(e){
  e.preventDefault();
  food = 'naFood';
  happyHour = 'naHh';
  vibe = 'naVibe';
  groupSize = 'naGroup';
  outdoors = 'naOutdoors';
  creditCard = 'naCredit';
  localStorage.setItem('food', food);
  localStorage.setItem('happyHour', happyHour);
  localStorage.setItem('vibe', vibe);
  localStorage.setItem('groupSize', groupSize);
  localStorage.setItem('outdoors', outdoors);
  localStorage.setItem('creditCard', creditCard);

 // console.log(food,happyHour,vibe,groupSize,outdoors,creditCard);


});


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
