let timerEl= document.querySelector('#timer');
let beginQuestionEl=document.querySelector('#beginQuestion')
let startButton= document.querySelector('#startbtn');
let correctMessage = document.querySelector('#correct-message');
let questionChoices= document.querySelector('.choices');
let questionContainerEl= document.getElementById('questioncontainer');
let nextBtnEl= document.getElementById('nextBtn');
let countdownEl= document.querySelector('#countdown');
let score=0;
let currentQuestionIndex = 0;
let currentChoiceIndex =0;

nextBtnEl.style.visibility = 'collapse';

//Event listener for the start button
startButton.addEventListener('click', function () {
	startButton.style.visibility = 'collapse';
	beginQuestionEl.style.visibility = 'collapse';
	nextBtnEl.style.visibility = 'visible';
	questionContainerEl.style.visibility = 'visible';

	// Timer
	let counter= 60;
	let timerInterval=setInterval(function () {
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
	let buttons = document.createElement("button");
	buttons.textContent = question.choices[i];
	questionChoices.append(buttons)}
	buttons.addEventListener('click',checkAnswer());
	
	}
//Checking answer against buttons
function checkAnswer(answer) {
	let question = quizQuestions[currentQuestionIndex];
	if(answer === question.answer) {
		correctMessage.innerText="CORRECT!"
	}
	currentQuestionIndex++;
	quizContent();
}
//End Game
//hide all other elements
//clear div 
//prompt user for initials
//save to local storage
//link highscore.html
//pull saved highscores from storage
//show past results
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


