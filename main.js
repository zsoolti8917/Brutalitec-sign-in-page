const form = document.getElementById("signup-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    checkFirstName(firstNameValue);
    checkLastName(lastNameValue);
    checkEmail(emailValue);
    checkPhoneNumber(phoneNumberValue);
    checkPassword(passwordValue);
    checkPassword2(passwordValue, password2Value);

}

function checkFirstName(firstNameValue){
    if(firstNameValue === ""){
        setErrorFor(firstName, "First Name cannot be blank");
    }else{
        setSuccessFor(firstName);
    }
}

function checkLastName(lastNameValue){
    if(lastNameValue === ""){
        setErrorFor(lastName, "Last Name cannot be blank");
    }else{
        setSuccessFor(lastName);
    }
}

function checkEmail(emailValue){
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Not a valid email");
    }else{
        setSuccessFor(email);
    }
}

function checkPhoneNumber(phoneNumberValue){
    if(phoneNumberValue === ""){
        setErrorFor(phoneNumber, "Phone Number cannot be blank");
    }else{
        setSuccessFor(phoneNumber);
    }
}

function checkPassword(passwordValue){
    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank");
    }else{
        setSuccessFor(password);
    }
}

function checkPassword2(passwordValue, password2Value){
    if(password2Value === ""){
        setErrorFor(password2, "Password2 cannot be blank");
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, "Passwords does not match");
    }else{
        setSuccessFor(password2);
    }
}

function isEmail(email){
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}

function setErrorFor(input, message){    
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "inputs error";
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "inputs success";
}