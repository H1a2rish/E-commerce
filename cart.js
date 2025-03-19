document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartItems.innerHTML = "";
        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            cart.forEach((item, index) => {
                let li = document.createElement("li");
                li.innerHTML = `${item.name} - $${item.price} 
                <button onclick="removeFromCart(${index})">❌ Remove</button>`;
                cartItems.appendChild(li);
            });
        }
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    };

    displayCart();
});
