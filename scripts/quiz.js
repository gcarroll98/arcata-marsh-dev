/*

	CS 458 Project, Quiz Game Functional Area
	Jordan Abbott
	11/5/2021
	
	**** POTENTIAL TO DO ITEMS: ****
	
		- Animations
		- Photos
		- GPS location and map

*/

//testQuestions is an array of JSON objects of the following structure:
// {
//		question: The test question (string)
//		answers: An array of possible answers (array of strings)
//		correct_answer: an integer indicating the index of the correct answer, found in the answers array (integer)
// }

//These should really come from a database or maybe just a file on the server that can be edited, but this will suffice for testing
var testQuestions = [
	{
		"question": "Test Question 1 (4 possible answers)",
		"answers": [
			"Test Answer 1",
			"Test Answer 2",
			"Test Answer 3",
			"Test Answer 4"
		],
		"correct_answer": 1
	},
	{
		"question": "Test Question 2 (5 possible answers)",
		"answers": [
			"Test Answer 1",
			"Test Answer 2",
			"Test Answer 3",
			"Test Answer 4",
			"Test Answer 5"
		],
		"correct_answer": 3
	},
	{
		"question": "Test Question 3 (6 possible answers)",
		"answers": [
			"Test Answer 1",
			"Test Answer 2",
			"Test Answer 3",
			"Test Answer 4",
			"Test Answer 5",
			"Test Answer 6"
		],
		"correct_answer": 4
	}
	
]

var currentQuestion;

//Called when the window is finished loading
window.onload = function () {
	
	//Start with the first question
	currentQuestion = testQuestions[0];
	
	//Load the first question
	loadQuestion();
};

//Removes answers and calls the loadQuestion() function
function removeAnswers() {
	var oldAnswers = document.getElementsByClassName("answerButton");
	if(oldAnswers.length > 0) {
		for(var i = oldAnswers.length - 1; i >= 0; i--) {
			oldAnswers[i].remove();
		}
	}
	loadQuestion();
}


//Load question function
function loadQuestion() {
	
	//Grab the relevant HTML DOM objects
	var quizQuestionText = document.getElementById("quizQuestionText");
	var answerButtons = document.getElementById("answerButtons");
	
	//Set the quiz question text
	quizQuestionText.innerHTML = currentQuestion["question"];
		
	for(var answer in currentQuestion["answers"]) {
		var newQuizButton = document.createElement("div");
		newQuizButton.className += "answerButton";
		newQuizButton.innerHTML = currentQuestion["answers"][answer];
		newQuizButton.addEventListener("click", function() {
			testAnswer(this.innerHTML);
		});
		answerButtons.appendChild(newQuizButton);
	}
}

//Test Answer function
function testAnswer(_answer) {
	var correctAnswer = currentQuestion["answers"][currentQuestion["correct_answer"]];
	if(_answer == correctAnswer) {
		alert("Answer correct!");
		nextQuestion();
	}
	else {
		alert("Answer incorrect");
	}
}

//Next Question function
function nextQuestion() {
	var currentIndex = testQuestions.indexOf(currentQuestion);
	if(currentIndex >= testQuestions.length - 1) {
		currentQuestion = testQuestions[0];
	}
	else {
		currentQuestion = testQuestions[currentIndex + 1];
	}
	removeAnswers();
}