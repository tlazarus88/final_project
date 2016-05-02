var quizQuestions = ['.question-1','.question-2','.question-3','.question-4','.question-5','.question-6'];

var i = 0;

// mobile filters menu
$('.mobile-filters').click(function() {
  $('.filters-leftside').slideToggle("fast", function(){
    $('.unopened-filters-mobile').toggle();
    $('.opened-filters-mobile').toggle();
  });
});

//citations popup window
$('#dialog-open').on('click', function() {
  $('#window').show();
});
$('#dialog-close').on('click', function() {
  $('#window').hide();
});

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
    console.log(food);
});

$(".question-2").on("click", ":submit", function() {
    happyHour = $(this).val();
    localStorage.setItem('happyHour', happyHour);
    console.log(happyHour);
});

$(".question-3").on("click", ":submit", function() {
    vibe = $(this).val();
    localStorage.setItem('vibe', vibe);
    console.log(vibe);
});

$(".question-4").on("click", ":submit", function() {
    groupSize = $(this).val();
    localStorage.setItem('groupSize', groupSize);
    console.log(groupSize);
});

$(".question-5").on("click", ":submit", function() {
    outdoors = $(this).val();
    localStorage.setItem('outdoors', outdoors);
    console.log(outdoors);
});

$(".question-6").on("click", ":submit", function() {
    creditCard = $(this).val();
    localStorage.setItem('creditCard', creditCard);
    console.log(creditCard);
});

//load quiz responses
$(function loadQuizEntries () {
  if ($('body.bars-list').length > 0) {
    food = localStorage.getItem('food');
    happyHour = localStorage.getItem('happyHour');
    vibe = localStorage.getItem('vibe');
    groupSize = localStorage.getItem('groupSize');
    outdoors = localStorage.getItem('outdoors');
    creditCard = localStorage.getItem('creditCard');
    loadFilterChecks();
    //console.log(food,happyHour,vibe,groupSize,outdoors,creditCard);
  }
});

//add quiz responses to filters sidebar
function loadFilterChecks() {
  if (food === 'yesFood') {
    $('#yesFood').prop('checked', true);
  } else if (food === 'noFood') {
    $('#noFood').prop('checked', true);
  };

  if (happyHour === 'yesHh') {
    $('#yesHh').prop('checked', true);
  } else if (happyHour === 'noHh') {
    $('#noHh').prop('checked', true);
  };

  if (vibe === 'lowkey') {
    $('#lowkey').prop('checked', true);
  } else if (vibe === 'loud') {
    $('#loud').prop('checked', true);
  };

  if (groupSize === 'yesGroup') {
    $('#yesGroup').prop('checked', true);
  } else if (groupSize === 'noGroup') {
    $('#noGroup').prop('checked', true);
  };

  if (outdoors === 'yesOutdoors') {
    $('#yesOutdoors').prop('checked', true);
  } else if (outdoors === 'noOutdoors') {
    $('#noOutdoors').prop('checked', true);
  };

  if (creditCard === 'yesCredit') {
    $('#yesCredit').prop('checked', true);
  } else if (creditCard === 'noCredit') {
    $('#noCredit').prop('checked', true);
  };
};

//clear button
$('.clear-button').on('click', function(e) {
  e.preventDefault();
  food = 'naFood';
  happyHour = 'naHh';
  vibe = 'naVibe';
  groupSize = 'naGroup';
  outdoors = 'naOutdoors';
  creditCard = 'naCredit';
  //console.log(food,happyHour,vibe,groupSize,outdoors,creditCard);
  $('input').prop('checked', false);
  localStorage.setItem('food', food);
  localStorage.setItem('happyHour', happyHour);
  localStorage.setItem('vibe', vibe);
  localStorage.setItem('groupSize', groupSize);
  localStorage.setItem('outdoors', outdoors);
  localStorage.setItem('creditCard', creditCard);
});

  
//filters function
var tiles = $('.tiles-container .bar-tile-link');
var filters = [];
var showTile;
var removeFilterIndex;

$('.filter-value').change(function(){
  // console.log( $(this).val(), $(this).attr('data-remove'), filters, filters.indexOf( $(this).val()) );

  // only push if it doesn't exist in the array
  if (filters.indexOf( $(this).val()) < 0) {
    filters.push($(this).val());
  }

  removeFilterIndex = filters.indexOf($(this).attr('data-remove'));
  if (removeFilterIndex > -1) {
    filters.splice(removeFilterIndex, 1);
  }
  //console.log(filters);

  //option 1
  //$('.tiles-container .bar-tile-link').hide();
  $.each(tiles, function(t,tile){
    showTile = true;

    $.each(filters, function(f,filter){
      if (!$(tile).hasClass(filter)) {
        showTile = false;
      }

      if (f === (filters.length-1)) {
        // console.log(showTile);
        if (showTile) {
          $(tile).slideDown();
        }
        //option 2
         else {
           $(tile).slideUp();
        }
      }
    });
  });
});

// Map Code
    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(40.647369,-73.960019),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
        }
        var mapElement = document.getElementById('BeerBookBars');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['The Adirondack', 'hi', 'hi', 'hi', 'hi', 40.652597, -73.9757957, 'https://mapbuildr.com/assets/img/markers/default.png'],['Alchemy', '', '', 'undefined', '', 40.6813578, -73.9773317, 'https://mapbuildr.com/assets/img/markers/default.png'],['Bar Chord', 'undefined', 'undefined', 'undefined', 'undefined', 40.639153, -73.968396, 'https://mapbuildr.com/assets/img/markers/default.png'],['Berg\'n', 'undefined', 'undefined', 'undefined', 'undefined', 40.6774542, -73.9571563, 'https://mapbuildr.com/assets/img/markers/default.png'],['Branch Ofc.', 'undefined', 'undefined', 'undefined', 'undefined', 40.6686888, -73.9532084, 'https://mapbuildr.com/assets/img/markers/default.png'],['Building on Bond', 'undefined', 'undefined', 'undefined', 'undefined', 40.6864689, -73.9853112, 'https://mapbuildr.com/assets/img/markers/default.png'],['Catfish', 'undefined', 'undefined', 'undefined', 'undefined', 40.6741284, -73.953602, 'https://mapbuildr.com/assets/img/markers/default.png'],['Coney Island Brewing Co.', 'undefined', 'undefined', 'undefined', 'undefined', 40.5748057, -73.9844943, 'https://mapbuildr.com/assets/img/markers/default.png'],['Covenhoven', 'undefined', 'undefined', 'undefined', 'undefined', 40.675246, -73.960244, 'https://mapbuildr.com/assets/img/markers/default.png'],['Dean Street', 'undefined', 'undefined', 'undefined', 'undefined', 40.6797985, -73.9651405, 'https://mapbuildr.com/assets/img/markers/default.png'],['DSK', 'undefined', 'undefined', 'undefined', 'undefined', 40.6857666, -73.9735353, 'https://mapbuildr.com/assets/img/markers/default.png'],['The Emerson', 'undefined', 'undefined', 'undefined', 'undefined', 40.6941165, -73.9617891, 'https://mapbuildr.com/assets/img/markers/default.png'],['Freddy\'s Bar & Backroom', 'undefined', 'undefined', 'undefined', 'undefined', 40.6632905, -73.9910771, 'https://mapbuildr.com/assets/img/markers/default.png'],['Hamilton\'s', 'undefined', 'undefined', 'undefined', 'undefined', 40.6485991, -73.9772036, 'https://mapbuildr.com/assets/img/markers/default.png'],['High Dive', 'undefined', 'undefined', 'undefined', 'undefined', 40.6749187, -73.9812136, 'https://mapbuildr.com/assets/img/markers/default.png'],['Hollow Nickel', 'undefined', 'undefined', 'undefined', 'undefined', 40.6855771, -73.9819258, 'https://mapbuildr.com/assets/img/markers/default.png'],['Hope & Anchor', 'undefined', 'undefined', 'undefined', 'undefined', 40.6771451, -74.012924, 'https://mapbuildr.com/assets/img/markers/default.png'],['The JakeWalk', 'undefined', 'undefined', 'undefined', 'undefined', 40.6822422, -73.9937397, 'https://mapbuildr.com/assets/img/markers/default.png'],['Kimoto Rooftop Beer Garden', 'undefined', 'undefined', 'undefined', 'undefined', 40.6914679, -73.9846796, 'https://mapbuildr.com/assets/img/markers/default.png'],['Krupa Grocery', 'undefined', 'undefined', 'undefined', 'undefined', 40.6598324, -73.9805332, 'https://mapbuildr.com/assets/img/markers/default.png'],['Lowlands', 'undefined', 'undefined', 'undefined', 'undefined', 40.6684745, -73.9931871, 'https://mapbuildr.com/assets/img/markers/default.png'],['Mekelburg\'s', 'undefined', 'undefined', 'undefined', 'undefined', 40.687523, -73.962323, 'https://mapbuildr.com/assets/img/markers/default.png'],['Midwood Flats', 'undefined', 'undefined', 'undefined', 'undefined', 40.6596342, -73.9604088, 'https://mapbuildr.com/assets/img/markers/default.png'],['No. 7 Restaurant', 'undefined', 'undefined', 'undefined', 'undefined', 40.6860413, -73.973095, 'https://mapbuildr.com/assets/img/markers/default.png'],['Robert Bar', 'undefined', 'undefined', 'undefined', 'undefined', 40.6866234, -73.9851595, 'https://mapbuildr.com/assets/img/markers/default.png'],['The Saint Catherine', 'undefined', 'undefined', 'undefined', 'undefined', 40.6783718, -73.9640591, 'https://mapbuildr.com/assets/img/markers/default.png'],['Sycamore Bar & Flower Shop', 'undefined', 'undefined', 'undefined', 'undefined', 40.6397477, -73.9671652, 'https://mapbuildr.com/assets/img/markers/default.png'],['Threes Brewing', 'undefined', 'undefined', 'undefined', 'undefined', 40.679716, -73.9821873, 'https://mapbuildr.com/assets/img/markers/default.png'],['The Vanderbilt', 'undefined', 'undefined', 'undefined', 'undefined', 40.6795993, -73.9684432, 'https://mapbuildr.com/assets/img/markers/default.png'],['Werkstatt', 'undefined', 'undefined', 'undefined', 'undefined', 40.6452616, -73.9702023, 'https://mapbuildr.com/assets/img/markers/default.png'],['Wheated', 'undefined', 'undefined', 'undefined', 'undefined', 40.6466826, -73.970529, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
        /* Resize centering, but no mobiliti
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
          })*/
 }
}