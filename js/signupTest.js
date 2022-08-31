/** Form Submission **/
import { validatePassword, showErrorMessage } from './validation.js';
import { setData, getData } from './common.js';

const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
	//redirecting to users dashboard page
	event.preventDefault();
	const emailField = form.elements['email'];
	const usernameField = form.elements['username'];
	const phoneField = form.elements['tel'];
	const passwordField = form.elements['password'];
	const confirmPasswordField = form.elements['confirmPassword'];

	//comparison for validity of password given
	if (passwordField.value !== confirmPasswordField.value) {
		showErrorMessage(confirmPasswordField, 'Password does not match');
	}

	//validating strength of password
	if (validatePassword(passwordField)) {
		//save user record
	}

	const userData = {
		emailField: emailField.value,
		usernameField: usernameField.value,
		phoneField: phoneField.value,
		passwordField: passwordField.value,
		confirmPasswordField: confirmPasswordField.value,
	};

	setData('registeredUsers', JSON.stringify(userData));
});
