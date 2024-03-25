document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.cart-btn');
    const cartItemsList = document.querySelector('.cart-items');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            addToCart(name, price);
            updateTotal(price);
        });
    });

    function addToCart(name, price) {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `${name} - $${price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    }

    function updateTotal(price) {
        total += price;
        document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
    }
});
