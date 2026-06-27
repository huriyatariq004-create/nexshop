// products.js — NexShop Product Catalog

const products = [
  {
    id: 1,
    name: "Pro Wireless Headphones",
    category: "electronics",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 324,
    emoji: "🎧",
    badge: "Sale",
    description: "Premium noise-cancelling wireless headphones with 40-hour battery life, studio-quality sound, and foldable design. Perfect for music lovers and remote workers.",
    features: ["40-hour battery", "Active noise cancellation", "Bluetooth 5.3", "Foldable design", "Fast charging (10 min = 3 hrs)"],
    stock: 45
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "electronics",
    price: 149.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 218,
    emoji: "⌚",
    badge: "New",
    description: "Advanced fitness tracker with heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery. Water resistant up to 50 meters.",
    features: ["Heart rate & SpO2 monitor", "Built-in GPS", "7-day battery", "50m water resistant", "100+ workout modes"],
    stock: 23
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    category: "fashion",
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviews: 156,
    emoji: "👟",
    badge: "Sale",
    description: "Timeless leather sneakers crafted from genuine leather with cushioned insoles. Versatile style for casual and semi-formal occasions.",
    features: ["Genuine leather upper", "Memory foam insole", "Rubber outsole", "Available in 6 colors", "Sizes 6–13"],
    stock: 67
  },
  {
    id: 4,
    name: "Minimalist Backpack",
    category: "fashion",
    price: 54.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    emoji: "🎒",
    badge: null,
    description: "Sleek 25L backpack with laptop compartment (fits up to 16\"), water-resistant fabric, and ergonomic padded straps for all-day comfort.",
    features: ["25L capacity", "16\" laptop compartment", "Water-resistant", "USB charging port", "Anti-theft back pocket"],
    stock: 34
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 445,
    emoji: "🔊",
    badge: "Hot",
    description: "360-degree surround sound speaker with 12-hour playtime, waterproof IPX7 rating, and built-in microphone for hands-free calls.",
    features: ["360° surround sound", "12-hour battery", "IPX7 waterproof", "Built-in mic", "Pair two for stereo"],
    stock: 89
  },
  {
    id: 6,
    name: "Scented Soy Candle Set",
    category: "home",
    price: 29.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    emoji: "🕯️",
    badge: "Best Seller",
    description: "Set of 4 hand-poured soy wax candles in calming lavender, vanilla, eucalyptus, and cedar scents. Each burns for 50+ hours.",
    features: ["100% soy wax", "Set of 4 scents", "50+ hour burn time", "Cotton wicks", "Gift-ready packaging"],
    stock: 120
  },
  {
    id: 7,
    name: "Yoga Mat Pro",
    category: "sports",
    price: 44.99,
    originalPrice: 64.99,
    rating: 4.7,
    reviews: 201,
    emoji: "🧘",
    badge: "Sale",
    description: "Extra-thick 6mm yoga mat with alignment lines, non-slip grip on both sides, and carrying strap. Eco-friendly TPE material.",
    features: ["6mm thickness", "Alignment lines", "Double non-slip grip", "Eco-friendly TPE", "Includes carry strap"],
    stock: 55
  },
  {
    id: 8,
    name: "Cozy Knit Sweater",
    category: "fashion",
    price: 49.99,
    originalPrice: null,
    rating: 4.3,
    reviews: 73,
    emoji: "🧥",
    badge: "New",
    description: "Ultra-soft chunky knit sweater in merino wool blend. Oversized relaxed fit, perfect for layering in autumn and winter.",
    features: ["60% merino wool", "Oversized fit", "Machine washable", "Available in 8 colors", "Sizes XS–3XL"],
    stock: 28
  },
  {
    id: 9,
    name: "Ceramic Coffee Mug Set",
    category: "home",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 187,
    emoji: "☕",
    badge: null,
    description: "Set of 4 hand-glazed ceramic mugs in matte earth tones. 14oz capacity, dishwasher and microwave safe.",
    features: ["Set of 4 mugs", "14oz capacity", "Dishwasher safe", "Microwave safe", "Stackable design"],
    stock: 76
  },
  {
    id: 10,
    name: "Resistance Band Set",
    category: "sports",
    price: 24.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 298,
    emoji: "💪",
    badge: null,
    description: "5-piece progressive resistance band set for home workouts, physical therapy, and stretching. Includes carry bag and exercise guide.",
    features: ["5 resistance levels", "Natural latex", "Anti-snap design", "Carry bag included", "Exercise guide PDF"],
    stock: 143
  },
  {
    id: 11,
    name: "Mechanical Keyboard",
    category: "electronics",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 512,
    emoji: "⌨️",
    badge: "Sale",
    description: "TKL mechanical keyboard with RGB backlight, hot-swappable switches, and aluminum frame. Compatible with Windows, Mac, and Linux.",
    features: ["Hot-swap switches", "Per-key RGB", "Aluminum frame", "N-key rollover", "USB-C detachable cable"],
    stock: 19
  },
  {
    id: 12,
    name: "Succulent Plant Kit",
    category: "home",
    price: 19.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 423,
    emoji: "🪴",
    badge: "Best Seller",
    description: "5 mini succulent plants in hand-painted ceramic pots. Low maintenance, pet-friendly varieties — perfect for desks and windowsills.",
    features: ["5 live succulents", "Ceramic pots included", "Pet-friendly varieties", "Care guide included", "Ready to gift"],
    stock: 200
  }
];

// Helper: render star rating
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '★';
    else if (i - rating < 1) stars += '½';
    else stars += '☆';
  }
  return stars;
}

// Helper: render product card HTML
function renderProductCard(p) {
  const discount = p.originalPrice
    ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)
    : null;

  return `
    <div class="col-sm-6 col-lg-3">
      <div class="product-card">
        <div class="product-img-wrap">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <span class="product-emoji">${p.emoji}</span>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category}</div>
          <div class="product-name">
            <a href="product-detail.html?id=${p.id}">${p.name}</a>
          </div>
          <div class="product-rating">
            ${renderStars(p.rating)} <small class="text-muted">(${p.reviews})</small>
          </div>
          <div class="product-price">
            $${p.price.toFixed(2)}
            ${p.originalPrice ? `<span class="original">$${p.originalPrice.toFixed(2)}</span>` : ''}
            ${discount ? `<span class="ms-2 text-success" style="font-size:0.75rem;font-weight:700;">-${discount}%</span>` : ''}
          </div>
        </div>
        <div class="product-footer">
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            <i class="bi bi-bag-plus me-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}
