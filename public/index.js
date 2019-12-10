/*
	client side js
 */

//initial questions
var recycle = document.getElementsByName('question-1');
var drive = document.getElementsByName('question-2');
var eatAnimals = document.getElementsByName('question-3');
var flying = document.getElementsByName('question-4');

//follow up
var driveDistance = document.getElementById('question-2-followup');
var meatFrequency = document.getElementById('question-3-followup');
var flyFrequency = document.getElementById('question-4-followup');

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

function calculateHowGreen(){
	console.log("howGreen: ", driveDistance.value);
}