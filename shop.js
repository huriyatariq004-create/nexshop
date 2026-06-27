// shop.js — NexShop Shop Page Logic

let filteredProducts = [...products];

function renderGrid(list) {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const resultCount = document.getElementById('resultCount');

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('d-none');
    resultCount.textContent = 'No products found';
    return;
  }

  noResults.classList.add('d-none');
  resultCount.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;
  grid.innerHTML = list.map(p => renderProductCard(p)).join('');
}

function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase().trim();
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortSelect').value;

  let list = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search) ||
                        p.category.toLowerCase().includes(search) ||
                        p.description.toLowerCase().includes(search);
    const matchCat = category === 'all' || p.category === category;
    return matchSearch && matchCat;
  });

  // Sort
  switch (sort) {
    case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
  }

  filteredProducts = list;
  renderGrid(list);
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('categoryFilter').value = 'all';
  document.getElementById('sortSelect').value = 'default';
  applyFilters();
}

document.addEventListener('DOMContentLoaded', () => {
  // Check URL param for category
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  if (cat) {
    const catSelect = document.getElementById('categoryFilter');
    // Map URL category to option values
    if (cat === 'new') {
      // Show new badge items
    } else if (catSelect) {
      catSelect.value = cat;
    }
  }

  applyFilters();

  // Live search
  document.getElementById('searchInput').addEventListener('input', applyFilters);
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  document.getElementById('sortSelect').addEventListener('change', applyFilters);
});
