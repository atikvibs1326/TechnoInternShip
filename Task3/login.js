document.addEventListener('DOMContentLoaded', function () {
    event.preventDefault();
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'your_username' && password === 'your_password') {
            window.alert('Login Successfull!')
            // Successful login, redirect to another page or perform an action.
            window.location.href = 'welcome.html';
        } else {
            // Display an error message for an unsuccessful login.
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
