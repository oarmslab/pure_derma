let cart = [];

function addToCart(button) {
    const product = button.parentElement;
    const name = product.querySelector('h3').innerText;
    const price = parseFloat(product.dataset.price);
    const quantityInput = product.querySelector('input[name="quantity"]');
    const quantity = parseInt(quantityInput.value);

    const cartItemIndex = cart.findIndex(item => item.name === name);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].quantity += quantity;
    } else {
        const cartItem = { name, price, quantity };
        cart.push(cartItem);
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    let itemCount = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
        itemCount += item.quantity;
    });

    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('cart-count').innerText = itemCount;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Checkout functionality is not implemented in this demo.');
    // Here you would integrate with a payment gateway
}





