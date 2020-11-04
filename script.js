let timerEl= document.querySelector('#timer');
let startButton= document.querySelector('#startbtn');
let correctMessage = document.querySelector('#correct-message');
let questionChoices= document.querySelector('.choices');
let questionContainerEl= document.getElementById('questioncontainer');
let nextBtnEl= document.getElementById('nextBtn');
let beginQuestionEl=document.getElementById('beginQuestion');
let currentQuestionIndex = 0;

//Before Quiz Start
nextBtnEl.style.visibility = 'collapse';

//When the user starts the Quiz
startButton.addEventListener('click', function () {
	startButton.style.visibility = 'collapse';
	nextBtnEl.style.visibility = 'visible';
	questionContainerEl.style.visibility = 'visible';
	beginQuestionEl.style.visibility = 'collapse';

	
//Initial Timer Settings
	let counter = 60;
	let timerInterval = setInterval(function () {
		timerEl.textContent = counter + ' ' + 'seconds left';
		counter--;
		if (counter === -1) {
			clearInterval(timerInterval);
		}
		if (counter === -1) {
			alert("Time's up! Let's see your scores.");
		}
		
	}, 1000);
	quizContent();
});
//Display Questions and Answers
function quizContent() {
	let question = quizQuestions[currentQuestionIndex];
	questionContainerEl.innerText = question.question;
	for (let i=0;i<question.choices.length;i++){
	var buttons = document.createElement("button");
	buttons.textContent = question.choices[i];
	questionChoices.append(buttons)}
	buttons.addEventListener('click',checkAnswer());
	
	}



function checkAnswer(answer) {
	let question = quizQuestions[currentQuestionIndex];
	if(answer === question.answer) {
		correctMessage.innerText
	}
	if (answer === !question.answer){
		counter=-10;
	}
	//next button?
	currentQuestionIndex++;
	quizContent();

}
//End game psuedo
//make elements hide
//create div for scores
//save/initials
//button to take to html highscore
//create local storage for current score


//High Scores
//make score div hide
//div highscore
//retrieve from local storage
//display previous scores in div



//Questions
var quizQuestions = [
	{
		question:
			'Which language is not one of the three core languages of the web?',
		choices: ['CSS', 'HTML', 'Java', 'JavaScript'],
		answer: 'Java'
	},
	{
		question: 'JavaScript variables are written in which type of case?',
		choices: ['lowercase', 'camelCase', 'UPPERCASE', 'CapitalCase'],
		answer: 'camelCase'
	},
	{
		question:
			'Which language below can change the look and style of a webpage?',
		choices: ['Python', 'CSS', 'JavaScript', 'HTML'],
		answer: 'CSS'
	},
	{
		question: 'Fill in the blank: Traversing the _______',
		choices: ['Ruby on Rails', 'Python', 'Rust', 'DOM'],
		answer: 'DOM'
	},
	{
		question: 'Which function will display data in the browser console?',
		choices: ['console.log', 'document.write[]', 'window.alert()', 'interHTML'],
		answer: 'console.log'
	},
];