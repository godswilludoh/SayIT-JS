/** Form Submission **/
// Getting the input field
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorMessage = document.getElementById('ErrorMessage');

// Getting data from the localStorage
let registeredUserData =
	JSON.parse(localStorage.getItem('createdUserInfo')) || [];

form.addEventListener('submit', (event) => {
	//Preventing the login form from submitting.
	event.preventDefault();
	let isValidUser = verifyUser();
	// Verification Conditional Statement
	if (isValidUser) {
		setCurrentUser(isValidUser);
		window.location.href = 'registeredReport.html';
	} else {
		setErrorMessage('Invalid Username or Password');
		// verifyUser()
	}
});

// Login Verification
function verifyUser() {
	// getting the input values
	let usernameValue = username.value.trim();
	let passwordValue = password.value.trim();

	let validUser = registeredUserData.filter(
		(userData) =>
			usernameValue === userData.username && passwordValue === userData.password
	);
	console.log(validUser);
	return validUser[0];
}

function setErrorMessage(message) {
	errorMessage.innerHTML = message;

	errorMessage.className = 'showError';
}

function setCurrentUser(userData) {
	localStorage.setItem('currentUser', JSON.stringify(userData));
}
