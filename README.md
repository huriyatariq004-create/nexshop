 NexShop — E-Commerce Capstone Project

> **QWETRUM Technologies · Web Development Internship 2026 · Final Week Capstone**

![NexShop](https://img.shields.io/badge/NexShop-E--Commerce-00c896?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

Live Demo

**[https://huriyatariq004-create.github.io/nexshop](https://huriyatariq004-create.github.io/nexshop)**

> Replace `your-username` with your actual GitHub username after deployment.

---

 Project Overview

NexShop is a **complete, fully functional multi-page e-commerce website** built as the capstone project for the QWETRUM Technologies Web Development Internship 2026.

It covers the full shopping journey — from homepage browsing to checkout confirmation — using only HTML, CSS, JavaScript, and Bootstrap 5. No backend or database is required; all state is managed via the browser's **localStorage API**.

---

 Pages

| Page | File | Description |
|------|------|-------------|
|  Homepage | `index.html` | Hero section, stats, categories, featured products |
|  Shop | `shop.html` | All products with live search, filter, and sort |
|  Product Detail | `product-detail.html` | Individual product with qty selector & related items |
|  Cart | `cart.html` | Cart management — add, remove, update qty, totals |
|  Checkout | `checkout.html` | Validated form + order confirmation modal |

---

 Features

- 5 Complete Pages** — Home, Shop, Product Detail, Cart, Checkout
- 12 Products** across 4 categories (Electronics, Fashion, Home, Sports)
- Full Cart System** — Add, remove, update quantity; persisted via localStorage
- Real-time Search** — Live search across product names & descriptions
- Filter by Category** — Electronics, Fashion, Home & Living, Sports
- Sort Options** — Price (low/high), Name (A–Z), Top Rated
- Product Detail Pages** — Dynamic routing via URL params (`?id=1`)
- Checkout Form Validation** — All fields validated with inline error messages
- Card Number Formatting** — Auto-formats as user types (`1234 5678...`)
- Responsive Design** — Mobile-first with Bootstrap 5 grid
- Toast Notifications** — Confirmation on add-to-cart actions
- Order Confirmation** — Modal with unique order number on successful checkout
- Consistent Navigation** — Cart count badge updates across all pages

---

 File Structure

```
nexshop/
├── index.html              # Homepage
├── shop.html               # Products listing
├── product-detail.html     # Single product view
├── cart.html               # Cart page
├── checkout.html           # Checkout with validation
├── css/
│   └── style.css           # All custom styles
└── js/
    ├── products.js         # Product data + renderProductCard()
    ├── cart.js             # Cart CRUD + localStorage logic
    ├── app.js              # Shared init (updateCartCount on load)
    ├── shop.js             # Search, filter, sort logic
    ├── product-detail.js   # Dynamic product page
    ├── cart-page.js        # Cart page render + qty controls
    └── checkout.js         # Form validation + order placement
```

---

 Tech Stack

| Technology | Use |
|------------|-----|
| **HTML5** | Semantic page structure, 5 pages |
| **CSS3** | Custom properties, animations, responsive layout |
| **JavaScript (ES6)** | DOM manipulation, localStorage, modular JS files |
| **Bootstrap 5.3** | Grid system, responsive components, utilities |
| **Bootstrap Icons** | Icon library (1,800+ icons) |
| **localStorage API** | Client-side cart persistence across pages |

---

 Setup & Running Locally

 Option 1 — Open directly
```bash
git clone https://github.com/huriyatariq004-create/nexshop.git
cd nexshop
# Open index.html in any modern browser
```

 Option 2 — VS Code Live Server (recommended)
```bash
git clone https://github.com/huriyatariq004-create/nexshop.git
cd nexshop
# Install "Live Server" extension in VS Code
# Right-click index.html → "Open with Live Server"
```

---

 Deployment (GitHub Pages)

1. Push code to a public GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch → `/ (root)` → **Save**
5. Your site will be live at `https://your-username.github.io/nexshop`

---


 Key Technical Decisions

### localStorage for Cart Persistence
Cart data is serialized as JSON and stored under the key `nexshop_cart`. Every page loads the cart on `DOMContentLoaded`, ensuring the badge count and cart state stay in sync without a server.

 Modular JavaScript
Logic is split across 7 JS files, each with a single responsibility:
- `products.js` — data + shared render function
- `cart.js` — all CRUD operations
- `app.js` — shared init
- Page-specific files for each page's unique logic

 Form Validation Architecture
A reusable `validateField(fieldId, conditionFn, errorMsg)` function handles all validation. It checks the condition, shows/hides error messages, and adds/removes `is-invalid` classes. All fields are validated in sequence on form submit.

---

 Reflection (200 words)

Four weeks ago, I could write a basic HTML page with some CSS styling. Today, I've built a complete e-commerce platform with five interconnected pages, a persistent cart system, real-time search and filtering, and full form validation — entirely from scratch.

The journey from plain HTML/CSS to a fully functional e-commerce site wasn't linear. Week 1 taught me the foundations: semantic HTML, the CSS box model, flexbox, and grid. Week 2 introduced JavaScript, and the breakthrough moment was understanding that the DOM is just an API — once I grasped that, everything clicked.

Week 3's Bootstrap module showed me the value of building on proven tools. The real learning wasn't knowing Bootstrap classes — it was knowing when to use a utility class vs. write custom CSS.

The capstone week was most challenging and most rewarding. Building the cart system forced me to think about state management for the first time: how does data flow between pages? How do I keep UI in sync with data? Using localStorage taught me patterns that will apply to backend databases later.

If I could tell Week 1 me one thing: **don't be afraid to break things**. Every bug was a lesson. NexShop isn't just a project — it's four weeks of problem-solving, documented in code.

---

 Author

**QWETRUM Internship 2026 — Web Development Track**  
Capstone Project · Submitted Saturday, 27 June 2026

---

License

This project was created for educational purposes as part of the QWETRUM Technologies Internship Program 2026.
