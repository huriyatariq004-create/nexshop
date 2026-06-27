// cart-page.js — NexShop Cart Page Logic

function renderCart() {
  const cart = getCart();
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartContent = document.getElementById('cartContent');

  if (cart.length === 0) {
    cartEmpty.classList.remove('d-none');
    cartContent.classList.add('d-none');
    return;
  }

  cartEmpty.classList.add('d-none');
  cartContent.classList.remove('d-none');

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item" id="cartItem-${item.id}">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="handleQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="handleQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="text-end">
        <div class="fw-bold mb-2">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="btn-remove" onclick="handleRemove(${item.id})" title="Remove">
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Totals
  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('shipping').textContent = subtotal > 0 ? 'Free' : '$0.00';
}

function handleQty(id, delta) {
  updateQuantity(id, delta);
  renderCart();
}

function handleRemove(id) {
  removeFromCart(id);
  renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
