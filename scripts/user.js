import { getUser } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    const userDetails = document.getElementById('user-details');

    if (userId) {
        const user = await getUser(userId);
        userDetails.innerHTML = `
            <div class="user-detail">
                <h2>${user.username}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>
            </div>
        `;
    } else {
        userDetails.innerHTML = '<p>User not found</p>';
    }
});