/** Form Submission **/
// import { validatePassword } from './validation.js';

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
	//redirecting to users dashboard page
	event.preventDefault();
	// const passwordField = form.elements['password'];
	// if (validatePassword(passwordField)) {
	window.location = 'registeredReport.html';
	// }

});

