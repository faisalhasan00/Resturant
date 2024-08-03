let cart = [];

function addToCart(itemName, itemPrice) {
    // Find if the item is already in the cart
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="item-name">${item.name} (${item.quantity})</span>
            <span class="item-price">₹${itemTotal}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = total;
}

function removeFromCart(itemName) {
    const index = cart.findIndex(item => item.name === itemName);
    if (index > -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

document.getElementById('proceed-to-checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Implement the payment processing or redirection here
    alert('Proceeding to payment...');
});
