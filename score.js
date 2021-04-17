document.addEventListener('DOMContentLoaded', function (event) {
	event.preventDefault();
	let again = document.getElementById('playAgain');
	let submitEl = document.getElementById('submit');
	let playerInitials = document.querySelector('initials');
	let submitInitials = playerInitials.value;
	submitData();
	// adding user initials
	function submitData() {
		submitEl.addEventListener('click', function (event) {
			event.preventDefault();
			pushData();
		});
	}
	function pushData() {
		let counter = localStorage.getItem('firstCounter');
		setTimeout(function () {
			console.log(counter);
		}, 1000);

		let finalScore = {
			initials: submitInitials,
			score: counter,
		};
		console.log(finalScore);
		// 	const initials = JSON.parse(localStorage.getItem('initials'));

		again.addEventListener('click', playAgainFunction);
		function playAgainFunction() {
			window.location.href = 'index.html';
		}
	}
});
