/*
	client side js
 */

//initial questions
/*
var recycle = document.getElementsByName('question-1');
var drive = document.getElementsByName('question-2');
var eatAnimals = document.getElementsByName('question-3');
var flying = document.getElementsByName('question-4');*/
//var initialQuestions = document.getElementsByClassName('question');
var groupOfFieldset = document.getElementsByClassName('filter-fieldset'); //array of groups of checkboxes (yes/no)=1place

//Hidden
/*
var driveDistance = document.getElementById('question-2-followup');
var meatFrequency = document.getElementById('question-3-followup');
var flyFrequency = document.getElementById('question-4-followup');
*/
//content
/*
var drivenResult = document.getElementById('question-2-followup-select');
var meatEaten =  document.getElementById('question-3-followup-select');
var flyingAmount =  document.getElementById('question-4-followup-select');
*/
var group = document.getElementsByClassName('yes_no_radio'); //group of checksboxes (yes) = 0, (no) = 1...
var groupFollowUp = document.getElementsByClassName('followup'); //group of hidden followup questions
var selectors = document.getElementsByClassName('filter-input');
//button
var buttonHandler = document.getElementById('check-score-button');// check score button

//eventlistener

//document.getElementById("question-2").addEventListener('input', question2Function);
//document.getElementById("question-3").addEventListener('input', question3Function);
//document.getElementById("question-4").addEventListener('input', question4Function);
//making eventhandler for all groups of checkboxes
for(var i = 0; i < groupOfFieldset.length; i++){
	groupOfFieldset[i].addEventListener('input', questionHandlerFunction);
}
//function call on event handler
function questionHandlerFunction(){
	for(var i = 0; i < group.length-1; i+=2){
		console.log("i : ", i);
		console.log("i+1:", i+1);
		if(group[i].checked){
			groupFollowUp[i/2].style.display = 'block';
			console.log("i when checked", i);
			console.log("i/2 checked", i/2);
		}
		else if(group[i+1].checked){
			groupFollowUp[i/2].style.display = 'none';
			console.log("i/2 : ", i/2);
		}
	}
}
buttonHandler.addEventListener('click', calcGreen);
function calcGreen(){
	var holder = 0;
	for(var i = 0; i < groupFollowUp.length-1; i++){
		holder += parseInt(selectors[i].selectedIndex);
	}
	console.log("total points : ", holder);
}
/*
function question2Function(){
	if(drive[0].checked){
		driveDistance.style.display = 'block'; 					 //try and display the second question
	}
	else if(drive[1].checked){
		driveDistance.style.display = 'none';
	}
}

function question3Function(){
	if(eatAnimals[0].checked){
		meatFrequency.style.display = 'block';
	}
	else if(eatAnimals[1].checked){
		meatFrequency.style.display = 'none';
	}
}

function question4Function(){
	if(flying[0].checked){
		flyFrequency.style.display = 'block';
	}
	else if(flying[1].checked){
		flyFrequency.style.display = 'none';
	}
}
*/

/*
function calculateHowGreen(){
	var driven = drivenResult.selectedIndex;
	var eaten = meatEaten.selectedIndex;
	var fly = flyingAmount.value;
	var k = parseInt(driven) + parseInt(eaten) + parseInt(fly);
	console.log("totalpoints : ", k);
}*/
