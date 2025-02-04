function showForm(type) {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (type === 'register') {
        registerForm.classList.remove('d-none');
        loginForm.classList.add('d-none');
    } else if (type === 'login') {
        loginForm.classList.remove('d-none');
        registerForm.classList.add('d-none');
    }
}

const regForm = document.getElementById('regForm');
const loginFormTag = document.getElementById('loginFormTag'); // Correct ID
const regButton = document.getElementById('regButton');
const loginButton = document.getElementById('loginButton');

regButton.addEventListener('click', register);
loginButton.addEventListener('click', login);

function register(e) {
    e.preventDefault(); // Crucial: Prevent form submission

    const fullname = document.getElementById('regFullname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        alert("Email already exists. Please login or use a different email.");
        return;
    }

    users.push({ fullname, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registration successful! Please login.");

    regForm.reset(); // Clear the form fields

    showForm('login'); // Automatically switch to login form
}

function login(e) {
    e.preventDefault(); // Crucial: Prevent form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login successful! Welcome " + user.fullname);
        loginFormTag.reset(); // Clear the form fields
    } else {
        alert("Invalid email or password.");
    }
}

// Show the registration form initially
showForm('register');