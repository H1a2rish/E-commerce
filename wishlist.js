document.addEventListener("DOMContentLoaded", () => {
    const wishlistItems = document.getElementById("wishlist-items");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    function displayWishlist() {
        wishlistItems.innerHTML = "";
        if (wishlist.length === 0) {
            wishlistItems.innerHTML = "<p>Your wishlist is empty.</p>";
        } else {
            wishlist.forEach((item, index) => {
                let li = document.createElement("li");
                li.innerHTML = `${item.name} - $${item.price} 
                <button onclick="removeFromWishlist(${index})">❌ Remove</button>`;
                wishlistItems.appendChild(li);
            });
        }
    }

    window.removeFromWishlist = function(index) {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        displayWishlist();
    };

    displayWishlist();
});
