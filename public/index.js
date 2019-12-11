/*
	client side js
 */

//initial questions
var recycle = document.getElementsByName('question-1');
var drive = document.getElementsByName('question-2');
var eatAnimals = document.getElementsByName('question-3');
var flying = document.getElementsByName('question-4');

//Hidden
var driveDistance = document.getElementById('question-2-followup');
var meatFrequency = document.getElementById('question-3-followup');
var flyFrequency = document.getElementById('question-4-followup');

//content
var drivenResult = document.getElementById('question-2-followup-select');
var meatEaten =  document.getElementById('question-3-followup-select');
var flyingAmount =  document.getElementById('question-4-followup-select');

//button
var buttonHandler = document.getElementById('check-score-button');

//eventlistener
document.getElementById("question-2").addEventListener('input', question2Function);
document.getElementById("question-3").addEventListener('input', question3Function);
document.getElementById("question-4").addEventListener('input', question4Function);

//function call on event handler
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
	else if(drive[1].checked){
		meatFrequency.style.display = 'none';
	}
}

function question4Function(){
	if(flying[0].checked){
		flyFrequency.style.display = 'block';
	}
	else if(drive[1].checked){
		flyFrequency.style.display = 'none';
	}
}

buttonHandler.addEventListener('click', calculateHowGreen);

function calculateHowGreen(){
	var driven = drivenResult.selectedIndex;
	var eaten = meatEaten.selectedIndex;
	var fly = flyingAmount.value;
	var k = parseInt(driven) + parseInt(eaten) + parseInt(fly);
	console.log("totalpoints : ", k);	
}