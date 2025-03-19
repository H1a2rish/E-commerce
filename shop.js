document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const addToCartButton = product.querySelector('button'); // Assuming the button is the last child in the product div
        addToCartButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the product click event
            window.location.href = 'cart.html'; // Navigate to the cart page
        });

        product.addEventListener('click', () => {
            const productName = product.querySelector('figcaption strong').innerText;
            console.log(`Product clicked: ${productName}`);
            window.location.href = 'shop.html'; // Navigate to the shop page
        });
    });
});
