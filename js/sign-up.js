const form = document.getElementById("form");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // calling the function to validate the form
    if(checkInputs() == true) {
        window.location.href = "registeredReport.html"

    }else{
        checkInputs()
    }


})

// declaring the function that will validate the form
function checkInputs() {
    // get the values from the inputs
    const emailValue = email.value.trim()
    const phoneNumberValue = phoneNumber.value.trim()
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    // conditional statement for the Email input
   
    if(emailValue === "") {
        // show error and add error class

        setErrorFor(email, "Pls, enter your email address ")

    }else if(isEmail(emailValue)) {

        setErrorFor(email, "Invalid email")
    }else{
        setSuccessFor(email)  
    }

    // conditional statement for the Phone Number input
    if(phoneNumberValue === "") {
        // show error and add error class

        setErrorFor(phoneNumber, "Pls, enter your phone number ")

    }else if(!isPhoneNumber(phoneNumberValue)) {
        setErrorFor(phoneNumber, "Invalid phone number")
    }else{
        setSuccessFor(phoneNumber)

        
    }

    // conditional statement for the Username input
    if(usernameValue === "") {
        // show error and add error class

        setErrorFor(username, "Pls, enter your username ")

    }else{
        // add success class
        setSuccessFor(username)

      
    }

    // conditional statement for the Password input
    if(passwordValue === "") {
        // show error and add error class
        setErrorFor(password, "Pls, Enter your password ")

    
    }else if(!isPassword(passwordValue)) {
        setErrorFor(password, "Your password should be alphanumeric and\nIt is should contain capital and small letters.\nE.g SayIT01")

    }else{
        setSuccessFor(password)
    }

    // conditional statement for the Confirm Password input
    if(confirmPasswordValue === "") {
        // show error and add error class
        setErrorFor(confirmPassword, "Pls, Enter your password again ")
        
    }else if(isPasswordConfirm(passwordValue, confirmPasswordValue)) {
        setErrorFor(confirmPassword, "Confirm password does not match with password")

    }else{
        setSuccessFor(confirmPassword)

        return true
    }


}

// declaring the function that set error messages
function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control class
    const small  = formControl.querySelector("small")

    // add the error message inside the small tag
    small.innerText = message;

    // add error class
    formControl.className = "form-control error"
}

// declaring the function that indicate a correct input
function setSuccessFor(input) {
    const formControl = input.parentElement // .form-control class
    formControl.className = "form-control success"
}

// declaring the function that validate Email
function isEmail(email) {

    return ! /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

}

// declaring the function that validate Phone Number
function isPhoneNumber(number) {
    return /^\d{11}$/.test(number)
}

// declaring the function that validate Password
function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/.test(password)
}

// declaring the function that validate Confirm Password
function isPasswordConfirm(password, confirmPassword) {

    if(password !== confirmPassword) {
        return true
    }

}