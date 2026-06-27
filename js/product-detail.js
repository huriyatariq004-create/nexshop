// product-detail.js — NexShop Product Detail Page

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = products.find(p => p.id === id);
  const container = document.getElementById('productDetail');

  if (!product) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-exclamation-circle fs-1 text-muted"></i>
        <h4 class="mt-3 text-muted">Product not found</h4>
        <a href="shop.html" class="btn btn-accent mt-2">Back to Shop</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — NexShop`;
  document.getElementById('breadProduct').textContent = product.name;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  container.innerHTML = `
    <div class="col-lg-5">
      <div class="detail-img-wrap">
        ${product.badge ? `<span class="detail-badge mb-3 d-inline-block">${product.badge}</span>` : ''}
        <span class="detail-emoji">${product.emoji}</span>
      </div>
    </div>
    <div class="col-lg-7">
      <span class="product-category" style="font-size:0.85rem;">${product.category.toUpperCase()}</span>
      <h1 class="fw-800 mt-1 mb-2" style="font-weight:800;">${product.name}</h1>
      <div class="detail-rating mb-2">
        ${renderStars(product.rating)}
        <span class="text-muted ms-2" style="font-size:0.9rem;">${product.rating} (${product.reviews} reviews)</span>
      </div>
      <div class="mb-4">
        <span class="detail-price">$${product.price.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="detail-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
        ${discount ? `<span class="badge bg-success ms-2">Save ${discount}%</span>` : ''}
      </div>
      <p class="text-muted mb-4">${product.description}</p>
      <h6 class="fw-bold mb-2">Features:</h6>
      <ul class="mb-4">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="d-flex align-items-center gap-3 mb-3">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-num" id="detailQty">1</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <span class="text-muted small">${product.stock} in stock</span>
      </div>
      <div class="d-flex gap-3 flex-wrap">
        <button class="btn btn-accent btn-lg px-5" onclick="addToCartFromDetail(${product.id})">
          <i class="bi bi-bag-plus me-2"></i>Add to Cart
        </button>
        <a href="shop.html" class="btn btn-outline-secondary btn-lg">
          <i class="bi bi-arrow-left me-1"></i>Back to Shop
        </a>
      </div>
    </div>
  `;

  // Related products (same category, exclude current)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  document.getElementById('relatedProducts').innerHTML = related.map(p => renderProductCard(p)).join('');
});

let detailQty = 1;

function changeQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  document.getElementById('detailQty').textContent = detailQty;
}

function addToCartFromDetail(productId) {
  addToCart(productId, detailQty);
}
