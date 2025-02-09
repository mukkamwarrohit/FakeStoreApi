const API_BASE = 'https://fakestoreapi.com';

async function fetchData(endpoint, options = {}) {
    const response = await fetch(`${API_BASE}${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}

export async function getProducts() {
    return fetchData('/products');
}

export async function getProduct(id) {
    return fetchData(`/products/${id}`);
}

export async function createProduct(data) {
    return fetchData('/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function updateProduct(id, data) {
    return fetchData(`/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function deleteProduct(id) {
    return fetchData(`/products/${id}`, {
        method: 'DELETE'
    });
}

export async function getCarts() {
    return fetchData('/carts');
}

export async function getCart(id) {
    return fetchData(`/carts/${id}`);
}

export async function createCart(data) {
    return fetchData('/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function updateCart(id, data) {
    return fetchData(`/carts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function deleteCart(id) {
    return fetchData(`/carts/${id}`, {
        method: 'DELETE'
    });
}

export async function getUsers() {
    return fetchData('/users');
}

export async function getUser(id) {
    return fetchData(`/users/${id}`);
}

export async function createUser(data) {
    return fetchData('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function updateUser(id, data) {
    return fetchData(`/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export async function deleteUser(id) {
    return fetchData(`/users/${id}`, {
        method: 'DELETE'
    });
}

export async function loginUser(username, password) {
    return fetchData('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
}

export async function getCategories() {
    return fetchData('/products/categories');
}

export async function getProductsByCategory(category) {
    return fetchData(`/products/category/${category}`);
}
