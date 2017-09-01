

//create global variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var countDownTest;


//ask user to start game without questions visable

$("#quiz").hide();
$("#answerpage").hide();


//when user clicks the start button,  show quiz questions and begin countdown

$("#startbutton").on("click", function() {
	$("#quiz").show();
	$("#welcome").hide();
	countdown ();
	countDownTest = setInterval(countdown,1000);
});


//create countdown function. run this when user clicks start button. 
//when time is less than 0, show the user the answer page

// var number = 30;
var number = 30;

var countdown = function() {
	// setTimeout (countdown, 1000);
	$('#counter').html("You have " + number + " seconds remaining!");
	number--;
	if (number < 0) {
		answerPage ();
	}
}


//create function when submit button is pressed

$(".submit").on("click", function () {
	
	answerPage ();


});



//create function to count number of questions answered correctly, incorrectly or not at all

function answerPage () {
	$("#quiz").hide();
	$("#counter").hide();
	$("#welcome").hide();
	$("#answerpage").show();
	//clear
	console.log("count down cleared")
	clearInterval(countDownTest);
  	checkAnswers ();
}

function checkAnswers () {
	var q1 = $('input:radio[name="q1"]:checked').val();
	var q2 = $('input:radio[name="q2"]:checked').val();
	var q3 = $('input:radio[name="q3"]:checked').val();
	var q4 = $('input:radio[name="q4"]:checked').val();
	var q5 = $('input:radio[name="q5"]:checked').val();


//else if statement for Question 1
	if (q1 == "right") {
		correct++;
		$('#correct').html(correct);
	}
	else if (q1 == undefined) {
		unanswered++;
		$('#unanswered').html(unanswered);
	}

	else {
		incorrect ++;
		$('#incorrect').html(incorrect);
	}

//else if statement for Question 2

	if (q2 == "right") {
		correct++;
		$('#correct').html(correct);
	}
	else if (q2 == undefined) {
		unanswered++;
		$('#unanswered').html(unanswered);
	}

	else {
		incorrect ++;
		$('#incorrect').html(incorrect);
	}

//else if statement for Question 3

	if (q3 == "right") {
		correct++;
		$('#correct').html(correct);
	}
	else if (q3 == undefined) {
		unanswered++;
		$('#unanswered').html(unanswered);
	}

	else {
		incorrect ++;
		$('#incorrect').html(incorrect);
	}

//else if statement for Question 4

	if (q4 == "right") {
		correct++;
		$('#correct').html(correct);
	}
	else if (q4 == undefined) {
		unanswered++;
		$('#unanswered').html(unanswered);
	}

	else {
		incorrect ++;
		$('#incorrect').html(incorrect);
	}

//else if statement for Question 5

	if (q5 == "right") {
		correct++;
		$('#correct').html(correct);
	}
	else if (q5 == undefined) {
		unanswered++;
		$('#unanswered').html(unanswered);
	}

	else {
		incorrect ++;
		$('#incorrect').html(incorrect);
	}

}




	



