document.addEventListener("DOMContentLoaded", () => {
    const wishlistCount = document.getElementById("wishlist-count");
    const cartCount = document.getElementById("cart-count");

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateWishlistCount();
    updateCartCount();

    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    function updateCartCount() {
        cartCount.textContent = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.querySelectorAll(".wishlist-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.parentElement;
            const product = {
                id: productElement.dataset.id,
                name: productElement.dataset.name,
                price: productElement.dataset.price
            };

            if (!wishlist.some(item => item.id == product.id)) {
                wishlist.push(product);
                updateWishlistCount();
            }
        });
    });

    document.querySelectorAll(".cart-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.parentElement;
            const product = {
                id: productElement.dataset.id,
                name: productElement.dataset.name,
                price: productElement.dataset.price
            };

            cart.push(product);
            updateCartCount();
        });
    });
});
