// adding user initials
let submitEl = document.getElementById('submit');
submitEl.addEventListener('click', pushData);

function pushData() {
	const initials = document.getElementById('initials').value;
	const score = sessionStorage.getItem('score');
	document.getElementById('pText').innerHTML =
		initials +
		' - Score: ' +
		score +
		' - Date: ' +
		new Date().toLocaleDateString();
}
