function validate() {
    const username = document.getElementById("username").value;
    const usernameErrorMessage = document.getElementById("error-message");

    let isValid = true;

    if (username === "") {
        usernameErrorMessage.textContent = "Username is required!";
        isValid = false;
    } else {
        usernameErrorMessage.textContent = "";
    }

    return isValid;  // return whether the username is valid //
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordErrorMessage = document.getElementById("password-error-message");

    let isValid = true;

    if (password === "") {
        passwordErrorMessage.textContent = "Password is required!";
        isValid = false;
    } else if (password.length < 6) {
        passwordErrorMessage.textContent = "Password must be at least 6 characters long!";
        isValid = false;
    } else {
        passwordErrorMessage.textContent = "";
    }

    return isValid;  // return whether the password is valid //
}

function validateForm() {
    const isUsernameValid = validate();
    const isPasswordValid = validatePassword();

    if (isUsernameValid && isPasswordValid) {
        alert("Form submitted successfully!");
        // You can add form submission logic here
    }
}
