/*
	client side js
 */

//initial questions
var recycle = document.getElementById('question-1');
var drive = document.getElementById('question-2');
var eatAnimals = document.getElementById('question-3');
var flying = document.getElementById('question-4');

//follow up
var driveDistance = document.getElementById('question-2-followup');
var meatFrequency = document.getElementById('question-3-followup');
var flyFrequency = document.getElementById('question-4-followup');

if(recycle[0].checked){
	//show followup question-1
}
else{
	//nothing
}

recycle.addEventListener('click', function (event) {
	if(recycle[0].checked){
		driveDistance.style.display = 'block';
		//show followup question-1
	}
});