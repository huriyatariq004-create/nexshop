// cart.js — NexShop Cart Logic (localStorage)

const CART_KEY = 'nexshop_cart';

// Get cart from localStorage
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      emoji: product.emoji,
      category: product.category,
      quantity: quantity
    });
  }

  saveCart(cart);
  updateCartCount();
  showToast(`"${product.name}" added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
}

// Update item quantity
function updateQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart(cart);
  updateCartCount();
}

// Get cart total
function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Get total item count
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

// Update cart badge in navbar
function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'flex';
  });
}

// Clear entire cart
function clearCart() {
  saveCart([]);
  updateCartCount();
}

// Toast notification
function showToast(msg) {
  const toastEl = document.getElementById('cartToast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toastEl) return;
  if (toastMsg) toastMsg.textContent = msg;
  const toast = new bootstrap.Toast(toastEl, { delay: 2500 });
  toast.show();
}
