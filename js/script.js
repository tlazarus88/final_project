
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

$('.bar-filters-button').on('click', (function(e) {
  e.preventDefault();
  if ($('#yesFood:checked')) {
    $('.noFood').fadeOut(500);
        $('.yesFood').fadeIn(500);

  } else if ($('#noFood:checked')) {
    $('.yesFood').fadeOut(500);
    $('.noFood').fadeIn(500);

  };
  /*if ($('#yesHh:checked')) {
    $('.noHh').fadeOut(500);
  };
  if ($('#noHh:checked')) {
    $('.yesHh').fadeOut(500);
  };
  if ($('#lowkey:checked')) {
    $('.loud').fadeOut(500);
  };
  if ($('#loud:checked')) {
    $('.lowkey').fadeOut(500);
  };
  /*if ($('#yesFood').is(':checked')) {
    $('.noFood').fadeOut(500);
  };*/
}));
  


//food options
/*$('input[name="food"]:radio').change( function() {
  if ($('#yesFood').is(':checked')) {
    $(".noFood").slideUp(200, function() {
      $(".noFood").addClass("food-hidden");
      $(".yesFood").removeClass("food-hidden"); 
    });
    $(".yesFood").slideDown(200).not(".food-hidden .happy-hour-hidden,.vibe-hidden, .group-hidden, .outdoors-hidden, credit-hidden");
  };
  if ($('#noFood').is(':checked')) {
    $(".yesFood").slideUp(200, function(){
      $(".yesFood").addClass("food-hidden");
      $(".noFood").removeClass("food-hidden");   
    });
    $(".noFood").slideDown(200).not(".food-hidden .happy-hour-hidden,.vibe-hidden, .group-hidden, .outdoors-hidden, credit-hidden");
  };
});
//happy hour options
$('input[name="happy-hour"]:radio').change( function() {  
  if ($('#yesHh').is(':checked')) {
    $(".noHh").slideUp(200, function() {
      $(".noHh").addClass("happy-hour-hidden");
      $(".yesHh").removeClass("happy-hour-hidden"); 
    });
    $(".yesHh").slideDown(200).not(".food-hidden, .happy-hour-hidden, .vibe-hidden, .group-hidden, .outdoors-hidden, credit-hidden"); 
  };
  if ($('#noHh').is(':checked')) {
    $(".yesHh").slideUp(200);
    $('.tiles-container .clearfix').css("height:100%");      
    $(".noHh").slideDown(200, function(){
      $(".yesHh").addClass("happy-hour-hidden");
      $(".noHh").removeClass("happy-hour-hidden");}).not(".food-hidden, .happy-hour-hidden, .vibe-hidden, .group-hidden, .outdoors-hidden, credit-hidden");
  };
});*/

//filter rules for "Bars" page
/*$('input').on('change', function() {
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
})*/

//$('input').on('change', function() {
//$('h4').on('click', function() {
        //$('.tiles-container').filter(".noFood").animate({width:'toggle'},500);
       // $('.bar-tile-link').filter(".yesFood").fadeOut(1000,"linear");
        //$('.yesOutdoors').fadeIn(500, "linear");
      //}
//);

//target each filter
//toggle hidden class attribute
//hide hidden class element
//show opposite not already hidden

//reset bar query parameters
/*$('#bars-nav').on('click', function(e){
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
*/

