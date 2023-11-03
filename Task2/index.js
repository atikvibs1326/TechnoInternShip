function validateForm() {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('confirmpass').value;

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var passwordConfirmError = document.getElementById('password-confirm-error');

    // Reset error messages
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';
    passwordConfirmError.innerHTML = '';

    var isValid = true;

    // Name validation (required)
    if (name.trim() === '') {
        nameError.innerHTML = 'Name is required';
        isValid = false;
    }

    // Email validation (required and basic format check)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '' || !email.match(emailPattern)) {
        emailError.innerHTML = 'Invalid email address';
        isValid = false;
    }

    // Password validation (required and length check)
    if (password.trim() === '' || password.length < 6) {
        passwordError.innerHTML = 'Password must be at least 6 characters long';
        isValid = false;
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        passwordConfirmError.innerHTML = 'Passwords do not match';
        isValid = false;
    }
    if (isValid) {
        // If all validations pass, show a success message in a dialog box
        window.alert('Registration successful! You can now log in.');
        window.location.href = 'login.html' ; // Replace 'login.html' with the actual URL of your login page

    }

    return false;
}
