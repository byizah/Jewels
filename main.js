/* ================================
   GLOBAL CONSTANTS & STATE
================================ */

const sellerNumber = '918891093751';

let cart = [];
let currentProductImages = [];
let currentImageIndex = 0;

/* ================================
   SIDEBAR TOGGLE (CRITICAL)
================================ */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  /* ✅ FIX: HARD GUARD (prevents fatal JS stop) */
  if (!sidebar || !overlay) {
    console.error('Sidebar or overlay element missing');
    return;
  }

  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

/* ================================
   DOM READY SAFETY
================================ */

document.addEventListener('DOMContentLoaded', () => {
  try {
    initHeroCarousel();
    initProducts();
    updateCartUI();
  } catch (err) {
    console.error('Init error:', err);
  }
});
/* ================================
   PRODUCT & COMBO DATA
================================ */

const combos = [];

const products = [
  /* Rings */
  {
    id: 101,
    name: 'Eternal Circle Ring',
    price: 99,
    images: ['assets/images/circle.PNG', 'assets/images/allrings.JPG'],
    inStock: true,
    qtyAvailable: 2,
    category: 'rings',
    description: 'Elegant classic gold ring. Simple and timeless.'
  },
  {
    id: 102,
    name: 'GoldQuad Ring',
    price: 99,
    images: ['assets/images/square.PNG', 'assets/images/allrings.JPG'],
    inStock: true,
    qtyAvailable: 2,
    category: 'rings',
    description: 'Beautiful rose gold finish ring. Perfect for everyday wear.'
  }
  /* NOTE: other products continue exactly as in your file */
];

/* ================================
   INITIALIZE PRODUCTS
================================ */

function initProducts() {
  const grids = document.querySelectorAll('.product-grid');
  if (!grids.length) return;

  products.forEach(product => {
    grids.forEach(grid => {
      if (grid.closest(`#${product.category}`)) {
        grid.appendChild(createProductCard(product));
      }
    });
  });

  renderRingsCarousel();
}

/* ================================
   CREATE PRODUCT CARD
================================ */

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
    <div class="card-body">
      <div class="name">${product.name}</div>
      <span class="price">₹${product.price}</span>
      <button class="btn-view-product" onclick="openProductModal(${product.id})">
        View Product
      </button>
    </div>
  `;

  return card;
}

/* ================================
   RINGS SPECIAL CAROUSEL
================================ */

function renderRingsCarousel() {
  const carousel = document.getElementById('rings-carousel');
  if (!carousel) return;

  const rings = products.filter(p => p.category === 'rings');

  rings.forEach(product => {
    const card = document.createElement('div');
    card.className = 'ring-card';

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}">
      <div class="ring-card-overlay">
        <div class="ring-card-name">${product.name}</div>
        <div class="ring-card-price">₹${product.price}</div>
      </div>
    `;

    card.onclick = () => openProductModal(product.id);
    carousel.appendChild(card);
  });
}

/* ================================
   CART CORE LOGIC
================================ */

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  cart.push({ ...product, qty: 1 });
  updateCartUI();
  showToast('Added to cart');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cartCount');

  /* ✅ FIX: HARD GUARDS */
  if (!cartItems || !cartCount) return;

  cartItems.innerHTML = '';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img src="${item.images[0]}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-info">Qty: ${item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-price">₹${item.price}</div>
        <button class="btn remove-item" onclick="removeFromCart(${item.id})">
          Remove
        </button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  cartCount.style.display = cart.length ? 'inline-block' : 'none';
}
/* ================================
   PRODUCT MODAL LOGIC
================================ */

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentProductImages = product.images;
  currentImageIndex = 0;

  /* ✅ HARD GUARDS */
  const modalTitle = document.getElementById('productModalTitle');
  const mainImage = document.getElementById('carousel-main-image');
  const indicators = document.getElementById('carousel-indicators');
  const detailName = document.getElementById('detail-name');
  const detailPrice = document.getElementById('detail-price');
  const detailDescription = document.getElementById('detail-description');
  const detailActions = document.getElementById('detail-actions');

  if (
    !modalTitle ||
    !mainImage ||
    !indicators ||
    !detailName ||
    !detailPrice ||
    !detailDescription ||
    !detailActions
  ) {
    console.error('Product modal elements missing');
    return;
  }

  modalTitle.textContent = product.name;
  detailName.textContent = product.name;
  detailPrice.textContent = `₹${product.price}`;
  detailDescription.textContent = product.description;

  mainImage.src = currentProductImages[0];
  indicators.innerHTML = '';

  currentProductImages.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => setImage(index);
    indicators.appendChild(dot);
  });

  detailActions.innerHTML = `
    <button class="btn btn-accent w-100" onclick="addToCart(${product.id})">
      Add to Cart
    </button>
  `;

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

/* ================================
   IMAGE CAROUSEL (PRODUCT MODAL)
================================ */

function changeImage(direction) {
  if (!currentProductImages.length) return;

  currentImageIndex =
    (currentImageIndex + direction + currentProductImages.length) %
    currentProductImages.length;

  updateCarouselImage();
}

function setImage(index) {
  currentImageIndex = index;
  updateCarouselImage();
}

function updateCarouselImage() {
  const mainImage = document.getElementById('carousel-main-image');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!mainImage) return;

  mainImage.src = currentProductImages[currentImageIndex];

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentImageIndex);
  });
}

/* ================================
   HERO CAROUSEL AUTO ROTATE
================================ */

function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-item-custom');
  if (!slides.length) return;

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
}

/* ================================
   TOAST NOTIFICATION
================================ */

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/* ================================
   FINAL SAFETY (BOOTSTRAP MODAL)
================================ */

/* ✅ FIX: Prevent body shift & scroll lock issues */
document.addEventListener('shown.bs.modal', () => {
  document.body.style.paddingRight = '0px';
});
