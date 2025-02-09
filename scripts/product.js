import { getProducts, getCategories, getProductsByCategory } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');
    const categoryDropdown = document.getElementById('category-filter');
    const sortDropdown = document.getElementById('sort-products');

    const loadProducts = async () => {
        let products = [];
        const selectedCategory = categoryDropdown.value;
        const selectedSort = sortDropdown.value;
        
        if (selectedCategory) {
            products = await getProductsByCategory(selectedCategory);
        } else {
            products = await getProducts();
        }

        if (selectedSort === 'price-asc') {
            products.sort((a, b) => a.price - b.price);
        } else if (selectedSort === 'price-desc') {
            products.sort((a, b) => b.price - a.price);
        }

        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="viewProduct(${product.id})">View</button>
            `;
            productList.appendChild(productElement);
        });
    };

    categoryDropdown.addEventListener('change', loadProducts);
    sortDropdown.addEventListener('change', loadProducts);

    const categories = await getCategories();
    categoryDropdown.innerHTML = '<option value="">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryDropdown.appendChild(option);
    });

    loadProducts();
});

window.viewProduct = (id) => {
    window.location.href = `product.html?id=${id}`;
};

window.placeOrder = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    window.location.reload();
};