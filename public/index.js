/*
	client side js
 */
 var numQuestions = 7 + 1;
//var initialQuestions = document.getElementsByClassName('question');
var groupOfFieldset = document.getElementsByClassName('filter-fieldset'); //array of groups of checkboxes (yes/no)=1place
//content
var group = document.getElementsByClassName('yes_no_radio'); //group of checksboxes (yes) = 0, (no) = 1...
var groupFollowUp = document.getElementsByClassName('followup'); //group of hidden followup questions
var selectors = document.getElementsByClassName('filter-input'); // selectors used to get index of scroller
//button
var buttonHandler = document.getElementById('check-score-button');// check score button
var buttonCloseScore = document.getElementById('close-score');

//Modal
var scoreHeader = document.getElementsByClassName('score-header');
var scoreBody = document.getElementsByClassName('score-body');
var modal = document.getElementsByClassName('hidden');

//making eventhandler for all groups of checkboxes
for(var i = 0; i < groupOfFieldset.length; i++){
	groupOfFieldset[i].addEventListener('input', questionHandlerFunction);
}
//function call on event handler
function questionHandlerFunction(){
	for(var i = 0; i < group.length; i+=2){
		if(group[i].checked){
			groupFollowUp[i/2].style.display = 'block';
		}
		else if(group[i+1].checked){
			groupFollowUp[i/2].style.display = 'none';
		}
	}
}
buttonHandler.addEventListener('click', calcGreen);
function calcGreen(){
	var holder = 0;
	for(var i = 0; i < groupFollowUp.length-1; i++){
		holder += parseInt(selectors[i].selectedIndex);
	}
	var stars = document.getElementsByClassName('image-backdrop');
	for(var i = 0; i < modal.length; i++){
		scoreHeader[i].style.display = 'block';
		scoreBody[i].style.display = 'block';
		modal[i].style.display = 'block';
	}
	
	if(holder == 0){
	var amountOfStars = 5;
	} else {
		var amountOfStars = parseInt(numQuestions - holder/5);
	}
	var howGreenText;

	for(var i = 0; i < amountOfStars; i++){
		stars[i].style.display = 'inline';
	}
	
	switch(amountOfStars){
		case 1: 
			howGreenText = "you have got 1 star, you really should consider how you can help save the environment";
			break;
		case 2:
			howGreenText = "you have got 2 stars, you are doing alittle for the environment, but you should try and help more";
			break;
		case 3:
			howGreenText = "you have got 3 stars, you are average in terms of helping the environment.";
			break;
		case 4:
			howGreenText = "you have got 4 stars, you are above average in terms of helping the environment";
			break;
		case 5:
			howGreenText = "you have got 5 stars, you are doing the best you can for the environment, keep up the good work";
			break;
		default:
			howGreenText = "you have probably been saying no to everything, a true environment-savior";
			break;
	}
	alert("how green are you? \n" + howGreenText);
}

buttonCloseScore.addEventListener('click', function(){
var stars = document.getElementsByClassName('image-backdrop');
	for(var i = 0; i < modal.length; i++){
		scoreHeader[i].style.display = 'none';
		scoreBody[i].style.display = 'none';
		modal[i].style.display = 'none';
		for(var i = 0; i < 5; i++){
			stars[i].style.display = 'none';
		}
	}
});
