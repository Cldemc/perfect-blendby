// Handle toggling between Login and Registration forms
document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none'; // Hide login form
    document.getElementById('registrationForm').style.display = 'block'; // Show registration form
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registrationForm').style.display = 'none'; // Hide registration form
    document.getElementById('loginForm').style.display = 'block'; // Show login form
});

// Password validation function
function validatePassword(password) {
    const minLength = 2;
    const maxLength = 12;
    
    // Check if the password length is between minLength and maxLength
    if (password.length < minLength || password.length > maxLength) {
        return `Password must be between ${minLength} and ${maxLength} characters long.`;
    }
    
    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    
    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return "Password must contain at least one number.";
    }

    // If all checks pass, return true
    return true;
}

// Function to clear all input fields and hide validation/error messages
function clearForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');
    const validationMessages = form.querySelectorAll('.validation-message');

    // Clear all inputs
    inputs.forEach(input => input.value = '');

    // Hide any validation messages
    validationMessages.forEach(message => {
        message.style.display = 'none'; // Hide the validation/error messages
    });
}

// Handle form submission for Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('login-fname').value;
    const password = document.getElementById('login-pass').value;

    // Clear any previous validation or error messages
    clearForm('loginForm');

    // Simple validation for login form fields
    if (!fullName || !password) {
        alert('Please fill out both the Full Name and Password fields.');
        return;
    }

    // Simulate successful login, redirect to home.htm
    alert(`Log in Successful!`);
    window.location.href = 'home.htm'; // Redirect to home page (you can change this URL)
});

// Handle form submission for Registration
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('register-fname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-pass').value;
    const confirmPassword = document.getElementById('register-confirm-pass').value;

    // Clear any previous validation or error messages
    clearForm('registrationForm');

    // Simple validation for registration form fields
    if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    // Validate password using the new validatePassword function
    const passwordValidation = validatePassword(password);
    if (passwordValidation !== true) {
        alert(passwordValidation); // Display the error message returned by the function
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // After successful registration:
    alert('Registration successful!');

    // Clear all the form fields in both registration and login forms
    clearForm('registrationForm');
    clearForm('loginForm'); // Clear login form too (in case the user switches right after registration)

    // Hide the registration form and show the login form
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';

    // Remove the success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
