import { getUsers } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const userList = document.getElementById('user-list');
    if (userList) {
        const users = await getUsers();
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'user';
            userElement.innerHTML = `
                <h3>${user.username}</h3>
                <p>Email: ${user.email}</p>
                <button onclick="viewUser(${user.id})">View</button>
            `;
            userList.appendChild(userElement);
        });
    }
});

window.viewUser = (id) => {
    window.location.href = `user.html?id=${id}`;
};