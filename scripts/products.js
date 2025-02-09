import { getProduct } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productDetails = document.getElementById('product-details');

    if (productId) {
        const product = await getProduct(productId);
        productDetails.innerHTML = `
            <div class="product-detail">
                <img src="${product.image}" alt="${product.title}" class="product-image-large">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <h3>Price: $${product.price}</h3>
                <button onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
            </div>
        `;
    } else {
        productDetails.innerHTML = '<p>Product not found</p>';
    }
});

window.addToCart = (id, title, price, image) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
};
