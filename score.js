let againEl = document.getElementById('playAgain');
// adding user initials
let submitEl = document.getElementById('submit');
submitEl.addEventListener('click', pushData);
function pushData() {
	
		let initialsVal = document.getElementbyId('initials').value;
		setTimeout(function () {
		let finalScore = {
		'initials': initialsVal,
		'score':counter
		}
		localStorage.setItem('userScore', JSON.stringify (finalScore))
		}, 1000);

	const score = JSON.parse(localStorage.getItem('score'));
	const initials = JSON.parse(localStorage.getItem('initials'));

	document.getElementById('pText').innerHTML =
		initials +
		' - Score: ' +
		score +
		' - Date: ' +
		new Date().toLocaleDateString();
	
}
againEl.addEventListener('click', playAgainFunction);
function playAgainFunction() {
	window.location.href = 'index.html';
}
