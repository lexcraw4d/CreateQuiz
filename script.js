let timerEl = document.querySelector('#timer');
let startButton = document.querySelector('#startbtn');
let quizStart = document.querySelector('#quiz-start');
let rules = document.querySelector('#rules');
let correctMessage = document.querySelector('#correct-message');
let questionChoices = document.querySelector('.choices');
let questionContainerEl = document.getElementById('questioncontainer');
let nextBtnEl = document.getElementById('nextBtn');
let userChoice;
let countdownEl = document.querySelector('#countdown');
let mainEl = document.querySelector('main');
let score;

nextBtnEl.style.visibility = 'collapse';

//Event listener for the start button
startButton.addEventListener('click', function () {
	startButton.style.visibility = 'collapse';
	nextBtnEl.style.visibility = 'visible';
	questionContainerEl.style.visibility = 'visible';

	// questionChoices.style.visibility = "display";
	let counter = 60;
	let timerInterval = setInterval(function () {
		timerEl.textContent = counter + ' ' + 'seconds left';
		counter--;
	}, 1000);
	if (counter === 0) {
		clearInterval(timerInterval);
	}
	quizContent();
});
let currentQuestion = quizQuestions.question;
console.log(currentQuestion);
// function quizContent () {
// questionContainerEl.textContent = currentQuestion;

var quizQuestions = [
	{
		question:
			'Which language is not one of the three core languages of the web?',
		choices: ['CSS', 'HTML', 'Java', 'JavaScript'],
		answer: 'Java',
	},
	{
		question: 'JavaScript variables are written in which type of case?',
		choices: ['lowercase', 'camelCase', 'UPPERCASE', 'CapitalCase'],
		answer: 'camelCase',
	},
	{
		question:
			'Which language below can change the look and style of a webpage?',
		choices: ['Python', 'CSS', 'JavaScript', 'HTML'],
		answer: 'CSS',
	},
	{
		question: 'Fill in the blank: Traversing the _______',
		choices: ['Ruby on Rails', 'Python', 'Rust', 'DOM'],
		answer: 'DOM',
	},
	{
		question: 'Which function will display data in the browser console?',
		choices: ['console.log', 'document.write[]', 'window.alert()', 'interHTML'],
		answer: 'console.log',
	},
];

// console.log(quizQuestions);
// console.log(quizQuestions[0]);
// console.log(quizQuestions[i].answer);

// for (i = 0; i < quizQuestions[0].choices.length; i++) {
//     console.log(quizQuestions[0].choices[i])
// }

//WHEN I click the start button

// Event listener for start button - quizQuestions

// Quiz start function starts here
