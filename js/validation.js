export function showErrorMessage(element, errorMessage) {
	//error message
	const errorContainer = element.parentNode.querySelector('small');
	errorContainer.innerText = errorMessage;
	element.className = 'error';
	return false;
}

export function validatePassword(element) {
	const passwordRegEx =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$/;
	const password = element.value.trim();
	if (!passwordRegEx.test(password)) {
		showErrorMessage(
			element,
			'Password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters.'
		);
	}
	return true;
}
