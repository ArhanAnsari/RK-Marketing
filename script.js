function addToCart(product, price) {
    // Get the current cart from localStorage, or initialize an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push({ product, price });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user that the product has been added
    alert(`${product} has been added to the cart.`);

    // Update the cart display
    updateCart();
}

function updateCart() {
    // Get the cart from localStorage, or initialize an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart display element
    const cartDiv = document.getElementById('cart');

    // If the cart display element is present, update it
    if (cartDiv) {
        cartDiv.innerHTML = '';

        // Add each item in the cart to the display
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.product} - ₹${item.price}`;
            cartDiv.appendChild(itemDiv);
        });

        // Update the total price
        updateTotal();
    }
}

function updateTotal() {
    // Get the cart from localStorage, or initialize an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate the total price of the items in the cart
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    // Update the total price display
    document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
    // Get the cart from localStorage, or initialize an empty array if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // If the cart is empty, notify the user
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        // Otherwise, simulate the checkout process
        alert('Thank you for your purchase!');

        // Clear the cart from localStorage
        localStorage.removeItem('cart');

        // Update the cart display
        updateCart();
    }
}

// Initialize the cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
