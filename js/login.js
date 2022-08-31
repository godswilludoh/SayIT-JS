const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

})

function checkInputs() {
    // get value from the inputs
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()


    if (usernameValue === '') {
        // setting the error message
        let errorMessage = "Username cannot be empty";

        // targeting the DOM element to display the error message
        let targetErrorMessage = document.getElementById("error-message")

        // displaying the error message
        targetErrorMessage.style.visibility = "visible"
        targetErrorMessage.innerText = errorMessage;
    }else{
        // I don't the data of user from the sign-up page
         
    }
    
    if (passwordValue === '') {
        // setting the error message
        let errorMessage = "Password cannot be empty"

        // targeting the DOM element to display the error message
        let targetErrorMessage = document.getElementById("error-message")

        // displaying the error message
        targetErrorMessage.style.visibility = "visible"
        targetErrorMessage.innerText = errorMessage;
    }else{
        // I don't the data of user from the sign-up page

        
    }
}

