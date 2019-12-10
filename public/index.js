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


if(eatAnimals[0].checked){
	meatFrequency.style.display = 'block';
}
if(flying[0].checked){
	flyFrequency.style.display = 'block';
}

document.getElementById("question-2").addEventListener('input', question2Function);
document.getElementById("question-3").addEventListener('input', question3Function);
document.getElementById("question-4").addEventListener('input', question4Function);


function question2Function(){
	if(drive[0].checked){
		console.log("==Im printing from inside this function2");
		driveDistance.style.display = 'block';
	}
}

function question3Function(){
	if(drive[0].checked){
		console.log("==Im printing from inside this function3");
		meatFrequency.style.display = 'block';
	}
}

function question4Function(){
	if(drive[0].checked){
		console.log("==Im printing from inside this function4");
		flyFrequency.style.display = 'block';
	}
}