import { loginUser } from './api.js';

document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await loginUser(username, password);
    if (response.token) {
        localStorage.setItem('token', response.token);
        alert('Login Successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
});
