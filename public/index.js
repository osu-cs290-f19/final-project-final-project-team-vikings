/*
	client side js
 */
//var initialQuestions = document.getElementsByClassName('question');
var groupOfFieldset = document.getElementsByClassName('filter-fieldset'); //array of groups of checkboxes (yes/no)=1place
//content
var group = document.getElementsByClassName('yes_no_radio'); //group of checksboxes (yes) = 0, (no) = 1...
var groupFollowUp = document.getElementsByClassName('followup'); //group of hidden followup questions
var selectors = document.getElementsByClassName('filter-input'); // selectors used to get index of scroller
//button
var buttonHandler = document.getElementById('check-score-button');// check score button
var buttonCloseScore = document.getElementById('close-score');

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
	var scoreHeader = document.getElementsByClassName('score-header');
	var scoreBody = document.getElementsByClassName('score-body');
	var modal = document.getElementsByClassName('hidden');
	for(var i = 0; i < modal.length; i++){
		scoreHeader[i].style.display = 'block';
		scoreBody[i].style.display = 'block';
		modal[i].style.display = 'block';
	}
	console.log("total points : ", holder);
}

buttonCloseScore.addEventListener('click', function(){
	var scoreHeader = document.getElementsByClassName('score-header');
	var scoreBody = document.getElementsByClassName('score-body');
	var modal = document.getElementsByClassName('hidden');
	for(var i = 0; i < modal.length; i++){
		scoreHeader[i].style.display = 'none';
		scoreBody[i].style.display = 'none';
		modal[i].style.display = 'none';
	}
});
