/** Form Submission **/
// Getting the input field
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("ErrorMessage");

// Getting data from the localStorage
let localStorageData = localStorage.getItem("createdUserInfo")
localStorageData = JSON.parse(localStorageData)


form.addEventListener('submit', (event) => {
	//Preventing the login form from submitting.
	event.preventDefault();
	
	// Verification Conditional Statement
	if (verifyUser() == true) {
        window.location.href = "registeredReport.html"
    } else {
		setErrorMessage("Invalid Username or Password")
        verifyUser()
    }


});

// Login Verification
function verifyUser() {
	
	// getting the input values
	let usernameValue = username.value.trim();
	let passwordValue = password.value.trim();


	let result = localStorageData.some((userData) => 
		usernameValue === userData.username && passwordValue === userData.password
	)
	return result
}

function setErrorMessage(message) {
	errorMessage.innerHTML = message

	errorMessage.className = "showError"
}

