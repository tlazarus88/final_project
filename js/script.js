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