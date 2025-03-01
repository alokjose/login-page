// Show/Hide Password
function togglePassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Login Validation
function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "alokjose" && password === "Alokjo01*") {
        alert("Login Successful!");
        return true;
    } else {
        errorMessage.innerText = "Incorrect Username or Password!";
        return false;
    }
}
