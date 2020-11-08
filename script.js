let timerEl= document.querySelector('#timer');
let beginQuestionEl=document.querySelector('#beginQuestion')
let startButton= document.querySelector('#startbtn');
let correctMessage = document.querySelector('#correctMessage');
let questionChoices= document.querySelector('.choices');
let questionContainerEl= document.getElementById('questionContainer');
// let nextBtnEl= document.getElementById('nextBtn');
let currentQuestionIndex = 0;
let rulesEl=document.getElementById('#rules');


let counter = 60;
//Before Quiz Start
// nextBtnEl.style.visibility = 'collapse';

//When the user starts the Quiz
	startButton.addEventListener('click', function () {
	startButton.style.visibility = 'collapse';
	beginQuestionEl.style.visibility = 'collapse';
	// nextBtnEl.style.visibility = 'visible';
	questionContainerEl.style.visibility = 'visible';
	beginQuestionEl.style.visibility = 'collapse';

	// Timer
	let timerInterval=setInterval(function () {
		timerEl.textContent = counter + ' ' + 'seconds left';
		counter--;
		if (counter <=0) {
			endgame();
			clearInterval(timerInterval);
		}
		// if (counter <=0) {
		// 	alert("Time's up! Let's see your scores.");
		// }
	}, 1000);

	quizContent();
});
//Display Questions and Answers
function quizContent() {
	questionChoices.innerHTML="";
	let current_Question = displayQuestionText[currentQuestionIndex];
	questionContainerEl.innerText = current_Question.questionAsked;
	
	for (let i=0;i<current_Question.choices.length;i++){
	let buttons = document.createElement("button");

	buttons.textContent = current_Question.choices[i];
	buttons.addEventListener('click',checkAnswer);
	questionChoices.append(buttons)
	}
	
}

//Checking answer against buttons
function checkAnswer() {
	let current_Question = displayQuestionText[currentQuestionIndex];

	if(this.textContent === current_Question.answer) {
		correctMessage.innerText="CORRECT!";
	}
	else {
		counter-=10;
		correctMessage.innerText="Maybe next time.";
		}
	if(currentQuestionIndex === displayQuestionText.length || counter ===0){
		endgame()
	}
	
	quizContent();
	currentQuestionIndex++;
}
// End Game
function endgame(){
	if (counter ===0){
	setTimeout(function () {
		window.location.href= 'scores.html'; // the redirect goes here
 },1000);

}
}

var displayQuestionText = [
	{
		questionAsked:
			'Which language is not one of the three core languages of the web?',
		choices: ['CSS', 'HTML', 'Java', 'JavaScript'],
		answer: ['Java']
	},
	{
		questionAsked: 'JavaScript variables are written in which type of case?',
		choices: ['lowercase', 'camelCase', 'UPPERCASE', 'CapitalCase'],
		answer: 'camelCase'
	},
	{
		questionAsked:
			'Which language below can change the look and style of a webpage?',
		choices: ['Python', 'CSS', 'JavaScript', 'HTML'],
		answer: 'CSS'
	},
	{
		questionAsked: 'Fill in the blank: Traversing the _______',
		choices: ['Ruby on Rails', 'Python', 'Rust', 'DOM'],
		answer: 'DOM'
	},
	{
		questionAsked: 'Which function will display data in the browser console?',
		choices: ['console.log', 'document.write[]', 'window.alert()', 'interHTML'],
		answer: 'console.log'
	}
];

//nextQuestion()
//function gameover(){
//save to local storage
//pull saved highscores from storage
//show past results
//Questions
