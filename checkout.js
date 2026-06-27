// checkout.js — NexShop Checkout + Validation

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCheckoutSummary();
  setupCardFormatting();
});

function renderCheckoutSummary() {
  const cart = getCart();
  const container = document.getElementById('checkoutItems');

  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="co-item">
      <div class="co-item-emoji">${item.emoji}</div>
      <div class="co-item-info">
        <div class="co-item-name">${item.name}</div>
        <div class="co-item-qty">Qty: ${item.quantity}</div>
      </div>
      <div class="co-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  document.getElementById('coSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('coTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('coTotal').textContent = `$${(subtotal + tax).toFixed(2)}`;
}

function setupCardFormatting() {
  const cardInput = document.getElementById('cardNumber');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      e.target.value = val.replace(/(.{4})/g, '$1 ').trim();
    });
  }
  const expiryInput = document.getElementById('expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2);
      e.target.value = val;
    });
  }
}

// Validation helpers
function showError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  const err = document.getElementById(fieldId + 'Err');
  field.classList.add('is-invalid');
  if (err) { err.textContent = msg; err.classList.add('show'); }
  return false;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const err = document.getElementById(fieldId + 'Err');
  field.classList.remove('is-invalid');
  if (err) err.classList.remove('show');
}

function validateField(fieldId, condition, msg) {
  clearError(fieldId);
  const val = document.getElementById(fieldId).value.trim();
  if (!condition(val)) return showError(fieldId, msg);
  return true;
}

function placeOrder() {
  let valid = true;

  valid &= validateField('firstName', v => v.length >= 2, 'First name must be at least 2 characters.');
  valid &= validateField('lastName', v => v.length >= 2, 'Last name must be at least 2 characters.');
  valid &= validateField('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email address.');
  valid &= validateField('phone', v => /^\+?[\d\s\-()]{7,}$/.test(v), 'Please enter a valid phone number.');
  valid &= validateField('address', v => v.length >= 5, 'Please enter a valid street address.');
  valid &= validateField('city', v => v.length >= 2, 'Please enter a valid city.');
  valid &= validateField('state', v => v.length >= 2, 'Please enter a valid state.');
  valid &= validateField('zip', v => /^\d{4,10}$/.test(v), 'Please enter a valid ZIP/postal code.');
  valid &= validateField('cardNumber', v => v.replace(/\s/g,'').length === 16, 'Card number must be 16 digits.');
  valid &= validateField('expiry', v => /^\d{2}\/\d{2}$/.test(v), 'Use format MM/YY.');
  valid &= validateField('cvv', v => /^\d{3}$/.test(v), 'CVV must be 3 digits.');

  if (!valid) return;

  // Success
  const orderNum = 'NX-' + Date.now().toString().slice(-6);
  document.getElementById('orderNum').textContent = orderNum;
  clearCart();
  const modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();
}
