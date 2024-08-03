document.addEventListener('DOMContentLoaded', () => {
    const paymentItems = document.getElementById('payment-items');
    const paymentTotal = document.getElementById('payment-total');

    // Retrieve cart data from localStorage or another method
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} (${item.quantity}) - ₹${itemTotal}`;
        paymentItems.appendChild(listItem);
    });

    paymentTotal.textContent = total;

    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle payment processing here
        alert('Payment successful!');
        // Optionally redirect to a confirmation page or home page
        window.location.href = 'index.html'; // Redirect to home page or confirmation page
    });
});
