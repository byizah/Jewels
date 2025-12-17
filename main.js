const sellerNumber = '918891093751';

// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

  // Combo deals data   
  const combos = [
    
  ];

  const products = [
    // Rings - All ₹99
    {id: 101, name: 'Eternal Circle Ring', price: 99, images: ['assets/images/circle.PNG','assets/images/allrings.JPG'], inStock: true, qtyAvailable: 2, category: 'rings', description: 'Elegant classic gold ring. Simple and timeless.'},
    {id: 102, name: 'GoldQuad Ring', price: 99, images: ['assets/images/square.PNG','assets/images/allrings.JPG'], inStock: true, qtyAvailable: 2, category: 'rings', description: 'Beautiful rose gold finish ring. Perfect for everyday wear.'},
    {id: 103, name: 'TriAura Ring', price: 99, images: ['assets/images/triangle.PNG','assets/images/allrings.JPG'], inStock: true, qtyAvailable: 3, category: 'rings', description: 'Minimalist silver band. Sleek and modern.'},
    {id: 104, name: 'Floria Ring', price: 99, images: ['assets/images/flower.JPG','assets/images/allrings.JPG'], inStock: true, qtyAvailable: 4, category: 'rings', description: 'Delicate butterfly design. Charming and elegant.'},
    {id: 105, name: 'Starlet Glow Ring', price: 99, images: ['assets/images/star.PNG','assets/images/allrings.JPG'], inStock: true, qtyAvailable: 2, category: 'rings', description: 'Cute heart design ring. Perfect gift option.'},
    {id: 106, name: 'Divine Heart Ring', price: 99, images: ['assets/images/love.PNG','assets/images/allrings.JPG'], inStock: false, qtyAvailable: 0, category: 'rings', description: 'Cute heart design ring. Perfect gift option.'},
    // Bracelets
    {id: 1, name: 'Gold Heart Double Layer Bracelet', price: 249, images: ['assets/images/Goldheartdoublelayerbracelet.JPG','assets/images/allbracelets.JPG'], inStock:false, qtyAvailable: 0, category: 'bracelets', description: 'Elegant double-layered bracelet with a delicate gold heart charm. Perfect for everyday wear.'},
    {id: 2, name: 'Halo Heart Double Layer Bracelet', price: 249, images: ['assets/images/Haloheartdoublelayerbracelet.JPG','assets/images/allbracelets.JPG'], inStock: true, qtyAvailable: 1, category: 'bracelets', description: 'Stunning halo heart design with double chain layers. A must-have accessory.'},
    {id: 3, name: 'Butterfly Gold Bracelet', price: 249, images: ['assets/images/Butterflygoldbracelet.JPG','assets/images/allbracelets.JPG'], inStock: false, qtyAvailable: 1, category: 'bracelets', description: 'Beautiful butterfly charm bracelet in gold finish. Adds a touch of elegance to any outfit.'},
    {id: 4, name: 'Elegant Star Bracelet', price: 249, images: ['assets/images/Elegantstarbracelet.JPG','assets/images/allbracelets.JPG'], inStock: true, qtyAvailable: 2, category: 'bracelets', description: 'Minimalist star charm bracelet. Perfect for those who love subtle elegance.'},
    {id: 5, name: 'Star Double Layered Gold Bracelet', price: 249, images: ['assets/images/Stardoublelayeredgolfbracelet.JPG','assets/images/allbracelets.JPG'], inStock: false, qtyAvailable: 1, category: 'bracelets', description: 'Double-layered design with star charm. Versatile and stylish.'},
    {id: 6, name: 'Gold Double Layer Bracelet', price: 249, images: ['assets/images/Golddoublelayerbracelet.JPG','assets/images/allbracelets.JPG'], inStock: true, qtyAvailable: 1, category: 'bracelets', description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'},

    // Necklaces
    {id: 301, name: 'Gold Heart Necklace', price: 249, images: ['assets/images/Goldheartnecklace.JPG','assets/images/Goldheartnecklace1.JPG','assets/images/Goldheartnecklace2.png'], inStock: false, qtyAvailable: 0, category: 'necklaces', description: 'Delicate gold heart pendant necklace. A timeless piece for any jewelry collection.'},
    {id: 302, name: 'Mint grace pendant necklace', price: 199, images: ['assets/images/Mintgracependantnecklace20.jpg','assets/images/Mintgracependantnecklace1.JPG','assets/images/Mintgracependantnecklace2.JPG'], inStock: true, qtyAvailable: 1, category: 'necklaces', description: 'A gold-tone chain necklace with a small, rounded square pendant featuring a smooth teal/blue-green stone.'},
    {id: 303, name: 'Black Aura Necklace', price: 199, images: ['assets/images/BlackAuranecklace1.JPG','assets/images/BlackAuranecklace.JPG','assets/images/BlackAuranecklace2.JPG'], inStock: true, qtyAvailable: 1, category: 'necklaces', description: 'A minimalist gold-tone necklace featuring a sleek black stone pendant, perfect for adding a subtle, modern touch to everyday outfits.'},
    {id: 304,name: 'Royal White Charm Necklace', price: 349, images: ['assets/images/RoyalWhiteCharmnecklace.jpg','assets/images/RoyalWhiteCharmnecklace1.JPG','assets/images/RoyalWhiteCharmnecklace2.JPG'], inStock: false, qtyAvailable: 0, category: 'necklaces', description: 'A gold-tone chain necklace with dangling clear baguette-cut and small round cubic zirconia stones.'},
    {id: 305, name: 'Rose Gold Layered Necklace', price: 299, images: ['assets/images/Rosegoldlayerednecklace.JPG','assets/images/Rosegoldlayerednecklace1.png'], inStock: true, qtyAvailable: 1, category: 'necklaces', description: 'Luxurious rose gold layered necklace. Adds sophistication to any look.'},
    {id: 306, name: 'Blue Aura Necklace', price: 189, images: ['assets/images/BlueAuranecklace.jpg','assets/images/BlueAuranecklace1.jpg','assets/images/BlueAuranecklace2.jpg'], inStock: false, qtyAvailable: 1, category: 'necklaces', description: 'A delicate silver-tone necklace featuring a shimmering blue gemstone, designed to add a touch of elegant simplicity to any look.'},
    {id: 307, name: 'Double Layered Snake Chain Necklace', price: 252, images: ['assets/images/Doublelayeredsnakechainnecklace.JPG','assets/images/Doublelayeredsnakechainnecklace1.png'], inStock: true, qtyAvailable: 2, category: 'necklaces', description: 'Sleek double-layered snake chain. Minimalist elegance.'},
    {id: 308, name: 'Royal green charm Necklace', price: 349, images: ['assets/images/RoyalGreenCharmnecklace.jpg','assets/images/RoyalGreenCharmnecklace1.JPG','assets/images/RoyalGreenCharmnecklace2.JPG'], inStock: false, qtyAvailable: 1, category: 'necklaces', description: 'A gold-tone chain necklace with dangling green baguette-cut gemstones and small round green stones.'},
    {id: 309, name: 'Clover Double Chain Necklace', price: 322, images: ['assets/images/Cloverdoublechainnecklace.JPG','assets/images/Cloverdoublechainnecklace1.png'], inStock: true, qtyAvailable: 1, category: 'necklaces', description: 'Lucky clover charm with double chain. Stylish and meaningful.'},
    {id: 310, name: 'Rainbow gem Necklace', price: 369, images: ['assets/images/RainbowDropnecklace.jpg','assets/images/RainbowDropnecklace1.jpg','assets/images/RainbowDropnecklace2.jpg'], inStock: false, qtyAvailable: 0, category: 'necklaces', description: 'A gold-tone chain necklace adorned with multiple small, dangling bezel-set gemstones of various colors.'},
    {id: 311, name: 'Ivory Tear Drop Necklace', price: 199, images: ['assets/images/IvoryTearDropnecklace.jpg','assets/images/IvoryTearDropnecklac1.jpg','assets/images/IvoryTearDropnecklace2.JPG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A delicate gold-tone layered chain necklace with a small teardrop-shaped white/opalescent stone pendant.'},
    {id: 312, name: 'Luna Gold Necklace', price:229, images: ['assets/images/Lunagoldnecklace.JPG','assets/images/Lunagoldnecklace1.JPG','assets/images/Lunagoldnecklace2.JPG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A gold-tone necklace with a small, rounded rectangular white gemstone pendant. '},
    {id: 313, name: 'Hidden Love  Necklace', price:229, images: ['assets/images/hiddenlovependant.JPG','assets/images/hiddenlovependant1.JPG','assets/images/hiddenlovependant2.JPG'], inStock: true, qtyAvailable:2 , category: 'necklaces', description: 'A gold-tone beaded necklace with a round white pendant featuring a small, hidden heart cut-out. '},
    {id: 314, name: 'Golden rose  Necklace', price:229, images: ['assets/images/goldenrose.JPG','assets/images/goldenrose1.JPG','assets/images/goldenrose2.JPG'], inStock: true, qtyAvailable:2 , category: 'necklaces', description: 'A gold-tone necklace with a round, mother-of-pearl pendant featuring a gold rose design '},
    {id: 315, name: 'Ivory square necklace', price:229, images: ['assets/images/ivorysquarenecklace.jpg','assets/images/ivorysquarenecklace1.jpg','assets/images/ivory sqr .JPG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A gold-tone chain necklace with a small, square white gemstone pendant. '},
    {id: 316, name: '11:11 love necklace', price:199, images: ['assets/images/1111lovenecklace.jpg','assets/images/1111lovenecklace1.jpg','assets/images/11 neck 3.JPG'], inStock: false, qtyAvailable:0 , category: 'necklaces', description: 'A gold-tone chain necklace with a small heart-shaped pendant engraved with "11:11".'},
    {id: 317, name: 'Lavender oval pendant', price:199, images: ['assets/images/lavenderovalpendant.jpg','assets/images/lavenderovalpendant1.jpg','assets/images/lavender oval necklace.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A gold-tone necklace with a small, oval purple gemstone pendant.'},
    {id: 318, name: 'Flora dream necklace', price:199, images: ['assets/images/floradreamnecklace.jpg','assets/images/floradreamnecklace1.jpg','assets/images/flora dream necklace.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A gold necklace with an oval floral pendant displaying a purple flower.'},
    {id: 319, name: 'Olive recta  necklace', price:199, images: ['assets/images/oliverectapendant.jpg','assets/images/oliverectapendant1.jpg','assets/images/olive recta.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'Gold-tone necklace with a dark square-cut gemstone pendant.'},
    {id: 320, name: 'Blue lotus pendant ', price:199, images: ['assets/images/bluelotuspendant.jpg','assets/images/bluelotuspendant1.jpg','assets/images/bluelotuspendent.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'Gold-tone necklace with a square floral pendant and pearl detail.'},
    {id: 321, name: 'Lumi stone Necklace', price:199, images: ['assets/images/lumistonenecklace.jpg','assets/images/lumistonenecklace1.jpg','assets/images/lumi stone.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'Gold-tone necklace with a dainty round crystal pendant.'},
    {id: 322, name: 'Golden flower Necklace', price:199, images: ['assets/images/goldenflowernecklace.jpg','assets/images/goldenflowernecklace1.jpg','assets/images/golden flower.PNG'], inStock: true, qtyAvailable:2 , category: 'necklaces', description: 'Gold-tone floral pendant necklace with a subtle crystal accent.'},
    {id: 323, name: 'Lavender recta Necklace', price:199, images: ['assets/images/lavenderrectanecklace.jpg','assets/images/lavenderrectanecklace1.jpg','assets/images/lavender recta.PNG'], inStock: false, qtyAvailable:0 , category: 'necklaces', description: 'Gold-tone necklace with a square-cut crystal pendant.'},
    {id: 324, name: 'Ivory blossom pendant', price:199, images: ['assets/images/ivoryblossompendant.jpg','assets/images/ivoryblossompendant1.jpg','assets/images/ivory blossom.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'A delicate gold-tone necklace featuring a floral-etched pendant with soft pastel details, designed to add a vintage-inspired elegance to everyday wear.'},
    {id: 325, name: 'Crystal frame necklace', price:199, images: ['assets/images/crystalframenecklace.jpg','assets/images/crystalframenecklace1.jpg','assets/images/crystal frame.PNG'], inStock: true, qtyAvailable:2 , category: 'necklaces', description: 'Gold-tone necklace with a clear crystal pendant for timeless elegance. '},
    {id: 326, name: 'Purple Recta Necklace', price:199, images: ['assets/images/purplerectanecklace.jpg','assets/images/purplerectanecklace1.jpg','assets/images/purple recta.PNG'], inStock: true, qtyAvailable:1 , category: 'necklaces', description: 'Minimal gold-tone necklace with a lavender gemstone pendant.'},
    {id: 327, name: 'Heart  Necklace', price:199, images: ['assets/images/heart pendant 1.jpeg','assets/images/heart pendant 2.jpeg','assets/images/heart pendant 3.jpeg'], inStock: false, qtyAvailable:1 , category: 'necklaces', description: 'Gold-tone heart pendant necklace with a sleek, minimal finish.'},
    
    
    
    
    
  
    
    // Earrings
    {id: 201, name: 'Rose Gold Sphere Earrings', price: 342, images: ['assets/images/Rosegoldsphereearrings.JPG','assets/images/Rosegoldsphereearrings1.JPG'], inStock: false, qtyAvailable: 0, category: 'earrings', description: 'Elegant rose gold sphere studs. Perfect for everyday wear.'},
    {id: 202, name: 'Golden Prism Earrings', price: 149, images: ['assets/images/Goldenprismearrings.JPG'], inStock: false, qtyAvailable: 10, category: 'earrings', description: 'Geometric prism design in gold. Modern and eye-catching.'},
    {id: 203, name: 'Flower Cluster Earrings', price: 159, images: ['assets/images/Flowerclusterearrings.JPG'], inStock: false, qtyAvailable: 9, category: 'earrings', description: 'Delicate flower cluster studs. Feminine and charming.'},
    {id: 204, name: 'Gold Huggie Hoop Earrings', price: 286, images: ['assets/images/Goldhuggiehoopearrings.JPG','assets/images/Goldhuggiehoopearrings1.JPG'], inStock: true, qtyAvailable: 1, category: 'earrings', description: 'Classic gold huggie hoops. Versatile and stylish.'},
    {id: 205, name: 'Swirl Earrings', price: 149, images: ['assets/images/Swirlearrings.JPG','assets/images/Swirlearrings1.png'], inStock: false, qtyAvailable: 15, category: 'earrings', description: 'Unique swirl design. Modern and elegant.'},
    {id: 206, name: 'Rose Gold Huggie Hoop Earrings', price: 286, images: ['assets/images/Rosegoldhuggiehoopearrings.JPG','assets/images/Rosegoldhuggiehoopearrings1.JPG'], inStock:false, qtyAvailable: 0, category: 'earrings', description: 'Rose gold huggie hoops. Chic and sophisticated.'},
    {id: 207, name: 'Vema Rose Gold Earrings', price: 254, images: ['assets/images/Vemarosegoldearring.JPG'], inStock: false, qtyAvailable: 1, category: 'earrings', description: 'Elegant Vema design in rose gold. Perfect for any occasion.'},
    {id: 208, name: 'Pearl Elegant Rose Gold Earrings', price: 269, images: ['assets/images/Pearlelegantrosegoldearrings.JPG','assets/images/Pearlelegantrosegoldearrings1.JPG'], inStock: false, qtyAvailable: 1, category: 'earrings', description: 'Beautiful pearl studs in rose gold. Classic elegance.'},
    {id: 209, name: 'Halo Stud Earrings', price: 310, images: ['assets/images/Halostudearrings.JPG'], inStock: true, qtyAvailable: 2, category: 'earrings', description: 'Stunning halo design studs. Sparkle and shine.'},
    {id: 210, name: 'Vema Silver Earrings', price: 254, images: ['assets/images/Vemasilverearrings.JPG'], inStock: false, qtyAvailable: 0, category: 'earrings', description: 'Elegant Vema design in silver. Versatile and beautiful.'},
  


   
  ];

  let cart = [];
  
  // Address form data
  let addressForm = {
    fullName: '',
    phone: '',
    houseNo: '',
    street: '',
    locality: '',
    city: '',
    state: '',
    pinCode: ''
  };

  const fmtINR = n => '₹' + n.toString();

  function calculateDiscount(subtotal) {
    if (subtotal >= 499) {
      return { rate: 0.15, amount: Math.round(subtotal * 0.15) };
    } else if (subtotal >= 299) {
      return { rate: 0.10, amount: Math.round(subtotal * 0.10) };
    }
    return { rate: 0, amount: 0 };
  }

  function renderCombos() {
    const grid = document.getElementById('combo-grid');
    grid.innerHTML = '';
    
    combos.forEach(combo => {
      const col = document.createElement('div');
      col.className = 'mb-3';
      col.innerHTML = `
        <div class="combo-card" onclick="openComboDetail('${combo.id}')">
          
          <img src="${combo.image}" alt="${combo.name}">
          <div class="combo-card-body">
            <div class="combo-title">${combo.name}</div>
            <div class="combo-description">${combo.description}</div>
            <div class="combo-pricing">
              <span class="combo-original-price">${fmtINR(combo.originalPrice)}</span>
              <span class="combo-sale-price">${fmtINR(combo.salePrice)}</span>
              <span class="combo-savings">${combo.discount}</span>
            </div>
            <button class="btn-view-product-combo w-100" onclick="event.stopPropagation(); openComboDetail('${combo.id}')">
              View
            </button>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });
  }

  function openComboDetail(comboId) {
    const combo = combos.find(c => c.id === comboId);
    if (!combo) return;
    
    currentProduct = {
      id: comboId,
      name: combo.name,
      price: combo.salePrice,
      images: [combo.image],
      description: combo.description,
      inStock: combo.inStock,
      qtyAvailable: 10,
      isCombo: false,
      originalPrice: combo.originalPrice,
      discount: combo.discount
    };
    currentImageIndex = 0;
    
    document.getElementById('productModalTitle').innerText = combo.name;
    document.getElementById('detail-name').innerText = combo.name;
    document.getElementById('detail-price').innerHTML = `
      <span style="text-decoration: line-through; color: var(--muted); font-size: 1rem; margin-right: 8px;">${fmtINR(combo.originalPrice)}</span>
      <span style="color: var(--accent-dark);">${fmtINR(combo.salePrice)}</span>
      <span style="background: white; color:rgb(0, 110, 7) ; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; margin-left: 8px;">${combo.discount}</span>
    `;
    document.getElementById('detail-description').innerText = combo.description;
    
    const stockDiv = document.getElementById('detail-stock');
    stockDiv.innerHTML = '';
    
    const actionsDiv = document.getElementById('detail-actions');
    if(combo.inStock){
      actionsDiv.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-3 justify-content-center">
          <button class="btn-qty-classic" onclick="adjustModalQty(-1)">−</button>
          <input type="number" class="form-control form-control-sm text-center" id="modal-qty" value="1" min="1" max="10" style="width:60px;font-weight:700" readonly>
          <button class="btn-qty-classic" onclick="adjustModalQty(1)">+</button>
        </div>
        <button class="btn btn-accent w-100" onclick="addToCartFromModal()">
          <i class="fa fa-shopping-bag"></i> Add to Cart
        </button>
      `;
    } else {
      actionsDiv.innerHTML = `<button class="btn btn-secondary w-100" disabled>Sold Out</button>`;
    }
    
    updateCarouselImages();
    
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
  }

  function renderProducts(){
    const categories = ['necklaces', 'earrings', 'bracelets', 'rings'];
    
    categories.forEach(cat => {
      const section = document.querySelector(`#${cat} .product-grid`);
      if (!section) return;
      section.innerHTML = '';
      
      const categoryProducts = products.filter(p => p.category === cat);
      
      categoryProducts.forEach(p => {
        const soldClass = !p.inStock ? 'img-sold' : '';
        const soldBadge = !p.inStock ? '<div class="sold-overlay">Sold Out</div>' : '';

        const card = document.createElement('div');
        card.innerHTML = `
          <div class="card shadow-sm">
            <div style="position:relative">
              <img src="${p.images[0]}" class="card-img-top ${soldClass}" alt="${p.name}">
              ${soldBadge}
            </div>
            <div class="card-body text-center">
              <div class="name">${p.name}</div>
              <div class="price mb-2">${fmtINR(p.price)}</div>
              <button class="btn-view-product mt-2" onclick="openProductDetail(${p.id})">
                 View
              </button>
            </div>
          </div>
        `;
        section.appendChild(card);
      });
    });
  }

  function renderRingsCarousel() {
    const carousel = document.getElementById('rings-carousel');
    if (!carousel) return;
    
    carousel.innerHTML = '';
    
    const ringProducts = products.filter(p => p.category === 'rings');
    
    ringProducts.forEach(ring => {
      const card = document.createElement('div');
      card.className = 'ring-card';
      card.onclick = () => openProductDetail(ring.id);
      
      card.innerHTML = `
        <img src="${ring.images[0]}" alt="${ring.name}">
        
        <div class="ring-card-overlay">
          <div class="ring-card-name">${ring.name}</div>
          <div class="ring-card-price">₹${ring.price}</div>
        </div>
      `;
      
      carousel.appendChild(card);
    });
    
    // Initialize 3D carousel effect
    initRingsCarousel();
  }

  function initRingsCarousel() {
    const slider = document.getElementById("rings-carousel");
    if (!slider) return;
    
    const cards = [...slider.querySelectorAll(".ring-card")];
    const cardWidth = 220 + 10; // width + gap
    const curveStrength = 30;
    
    function update() {
      const scrollCenter = slider.scrollLeft + slider.clientWidth / 2;
      cards.forEach((card, i) => {
        const cardCenter = i * cardWidth + cardWidth / 2;
        const dx = cardCenter - scrollCenter;
        const angle = dx / 10;
        const depth = -Math.abs(dx) / curveStrength;
        card.style.transform = `
          rotateY(${angle}deg)
          translateZ(${depth}px)
        `;
      });
    }
    
    update();
    slider.addEventListener("scroll", update);
    window.addEventListener("resize", update);
  }

  let currentProduct = null;
  let currentImageIndex = 0;

  function openProductDetail(productId){
    const product = products.find(p => p.id === productId);
    if(!product) return;
    
    currentProduct = product;
    currentImageIndex = 0;
    
    document.getElementById('productModalTitle').innerText = product.name;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-price').innerText = fmtINR(product.price);
    document.getElementById('detail-description').innerText = product.description;
    
    const stockDiv = document.getElementById('detail-stock');
    stockDiv.innerHTML = '';
    
    const actionsDiv = document.getElementById('detail-actions');
    if(product.inStock){
      actionsDiv.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-3 justify-content-center">
          <button class="btn-qty-classic" onclick="adjustModalQty(-1)">−</button>
          <input type="number" class="form-control form-control-sm text-center" id="modal-qty" value="1" min="1" max="${product.qtyAvailable}" style="width:60px;font-weight:700" readonly>
          <button class="btn-qty-classic" onclick="adjustModalQty(1)">+</button>
        </div>
        <button class="btn btn-accent w-100" onclick="addToCartFromModal()">
          <i class="fa fa-shopping-bag"></i> Add to Cart
        </button>
      `;
    } else {
      actionsDiv.innerHTML = `<button class="btn btn-secondary w-100" disabled>Sold Out</button>`;
    }
    
    updateCarouselImages();
    
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
  }

  function updateCarouselImages(){
    if(!currentProduct) return;
    
    const mainImage = document.getElementById('carousel-main-image');
    mainImage.src = currentProduct.images[currentImageIndex];
    
    const indicators = document.getElementById('carousel-indicators');
    indicators.innerHTML = '';
    
    if(currentProduct.images.length > 1) {
      currentProduct.images.forEach((img, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === currentImageIndex ? 'active' : ''}`;
        dot.onclick = () => {
          currentImageIndex = idx;
          updateCarouselImages();
        };
        indicators.appendChild(dot);
      });
    }
  }

  function changeImage(direction){
    if(!currentProduct || currentProduct.images.length <= 1) return;
    currentImageIndex += direction;
    if(currentImageIndex < 0) currentImageIndex = currentProduct.images.length - 1;
    if(currentImageIndex >= currentProduct.images.length) currentImageIndex = 0;
    updateCarouselImages();
  }

  function adjustModalQty(change){
    if(!currentProduct) return;
    const qtyInput = document.getElementById('modal-qty');
    let qty = parseInt(qtyInput.value) + change;
    if(qty < 1) qty = 1;
    const maxQty = currentProduct.isCombo ? 10 : currentProduct.qtyAvailable;
    if(qty > maxQty) qty = maxQty;
    qtyInput.value = qty;
  }

  function addToCartFromModal(){
    if(!currentProduct) return;
    const qty = parseInt(document.getElementById('modal-qty').value);
    const currentCart = getCart();
    currentCart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      qty: qty,
      image: currentProduct.images[0],
      isCombo: currentProduct.isCombo || false
    });
    saveCart(currentCart);
    showToast(`${qty}x ${currentProduct.name} added!`);
    renderCartItems();
    
    const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    productModal.hide();
  }

  function getCart(){ return cart; }
  function saveCart(c){ cart = c; updateCartCount(); }

  function removeFromCart(index){
    const currentCart = getCart();
    currentCart.splice(index,1);
    saveCart(currentCart);
    renderCartItems();
  }

  function clearCart(){
    cart = [];
    addressForm = {
      fullName: '',
      phone: '',
      houseNo: '',
      street: '',
      locality: '',
      city: '',
      state: '',
      pinCode: ''
    };
    updateCartCount();
    renderCartItems();
  }

  function updateCartCount(){
    const count = getCart().length;
    const el = document.getElementById('cart-count');
    if(count>0){ el.style.display='inline-block'; el.innerText = count; } else { el.style.display='none'; }
  }

  function validateAddressForm() {
    const errors = {};
    
    if (!addressForm.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!addressForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(addressForm.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!addressForm.houseNo.trim()) {
      errors.houseNo = 'House/Flat number is required';
    }
    
    if (!addressForm.street.trim()) {
      errors.street = 'Street is required';
    }
    
    if (!addressForm.locality.trim()) {
      errors.locality = 'Locality is required';
    }
    
    if (!addressForm.city.trim()) {
      errors.city = 'City is required';
    }
    
    if (!addressForm.state.trim()) {
      errors.state = 'State is required';
    }
    
    if (!addressForm.pinCode.trim()) {
      errors.pinCode = 'PIN code is required';
    } else if (!/^[0-9]{6}$/.test(addressForm.pinCode.trim())) {
      errors.pinCode = 'Please enter a valid 6-digit PIN code';
    }
    
    return errors;
  }

  function updateAddressField(field, value) {
    addressForm[field] = value;
    
    // Clear error for this field
    const errorElement = document.getElementById(`error-${field}`);
    if (errorElement) {
      errorElement.style.display = 'none';
    }
    
    // Remove red border
    const inputElement = document.getElementById(`input-${field}`);
    if (inputElement) {
      inputElement.style.borderColor = '#ffc0cb';
    }
  }

  function renderCartItems(){
    const container = document.getElementById('cart-items');
    const currentCart = getCart();
    container.innerHTML = '';
    
    if(currentCart.length===0){ 
      container.innerHTML = '<div class="text-center py-5"><i class="fas fa-shopping-bag fa-3x text-muted mb-3"></i><p class="text-muted">Your cart is empty.</p></div>'; 
      document.getElementById('cart-subtotal').innerText = '₹0';
      document.getElementById('cart-discount').innerText = '-₹0';
      document.getElementById('cart-total').innerText = '₹0';
      document.getElementById('discount-row').style.display = 'none';
      document.getElementById('checkout-whatsapp').onclick = null;
      
      // Hide address form when cart is empty
      const addressSection = document.getElementById('address-form-section');
      if (addressSection) {
        addressSection.style.display = 'none';
      }
      
      return; 
    }

    // Show address form when cart has items
    let subtotal = 0;
    currentCart.forEach((item, idx) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-info">Qty: ${item.qty} × ${fmtINR(item.price)}</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-price">${fmtINR(itemTotal)}</div>
          <button class="btn btn-sm btn-link text-danger remove-item p-0" data-index="${idx}">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      `;
      container.appendChild(itemDiv);
    });

    // Add Address Form
    const addressFormHTML = `
      <div id="address-form-section" class="mt-4 p-3" style="background: rgba(255, 240, 245, 0.5); border-radius: 12px; border: 2px solid #ffc0cb;">
        <h6 style="font-weight: 700; margin-bottom: 15px; color: var(--primary); font-size: 1rem;">
          <i class="fas fa-map-marker-alt me-2"></i>Delivery Address
        </h6>
        <div class="row g-2">
          <div class="col-12">
            <input type="text" id="input-fullName" class="form-control form-control-sm" placeholder="Full Name *" 
              value="${addressForm.fullName}" 
              oninput="updateAddressField('fullName', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-fullName" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-12">
            <input type="tel" id="input-phone" class="form-control form-control-sm" placeholder="Phone Number (10 digits) *" 
              value="${addressForm.phone}" 
              oninput="updateAddressField('phone', this.value)"
              maxlength="10"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-phone" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-12">
            <input type="text" id="input-houseNo" class="form-control form-control-sm" placeholder="House/Flat No. *" 
              value="${addressForm.houseNo}" 
              oninput="updateAddressField('houseNo', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-houseNo" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-12">
            <input type="text" id="input-street" class="form-control form-control-sm" placeholder="Street *" 
              value="${addressForm.street}" 
              oninput="updateAddressField('street', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-street" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-12">
            <input type="text" id="input-locality" class="form-control form-control-sm" placeholder="Locality *" 
              value="${addressForm.locality}" 
              oninput="updateAddressField('locality', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-locality" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-6">
            <input type="text" id="input-city" class="form-control form-control-sm" placeholder="City *" 
              value="${addressForm.city}" 
              oninput="updateAddressField('city', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-city" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-6">
            <input type="text" id="input-state" class="form-control form-control-sm" placeholder="State *" 
              value="${addressForm.state}" 
              oninput="updateAddressField('state', this.value)"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-state" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
          <div class="col-12">
            <input type="tel" id="input-pinCode" class="form-control form-control-sm" placeholder="PIN Code (6 digits) *" 
              value="${addressForm.pinCode}" 
              oninput="updateAddressField('pinCode', this.value)"
              maxlength="6"
              style="border: 1px solid #ffc0cb; border-radius: 8px; padding: 10px; font-size: 0.85rem;">
            <small id="error-pinCode" class="text-danger" style="display: none; font-size: 0.75rem;"></small>
          </div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', addressFormHTML);

    const discount = calculateDiscount(subtotal);
    const total = subtotal - discount.amount;

    document.getElementById('cart-subtotal').innerText = fmtINR(subtotal);
    
    if (discount.amount > 0) {
      document.getElementById('cart-discount').innerText = `-${fmtINR(discount.amount)} (${discount.rate * 100}%)`;
      document.getElementById('discount-row').style.display = 'flex';
    } else {
      document.getElementById('discount-row').style.display = 'none';
    }
    
    document.getElementById('cart-total').innerText = fmtINR(total);

    // Update checkout button to validate form
    document.getElementById('checkout-whatsapp').onclick = function(e) {
      e.preventDefault();
      
      const errors = validateAddressForm();
      
      // Display errors
      Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`error-${field}`);
        const inputElement = document.getElementById(`input-${field}`);
        
        if (errorElement && inputElement) {
          errorElement.textContent = errors[field];
          errorElement.style.display = 'block';
          inputElement.style.borderColor = '#dc3545';
        }
      });
      
      // If there are errors, show toast and don't proceed
      if (Object.keys(errors).length > 0) {
        showToast('Please fill all address fields correctly');
        return false;
      }
      
      // If validation passes, create WhatsApp message
      let message = `Hello! I'd like to order from IZAH:%0A%0A`;
      
      currentCart.forEach(item => {
        message += `*${item.name}*%0AQty: ${item.qty} × ₹${item.price} = ₹${item.price * item.qty}%0A%0A`;
      });
      
      message += `Subtotal: ₹${subtotal}%0A`;
      
      if (discount.amount > 0) {
        message += `Discount (${discount.rate * 100}%): -₹${discount.amount}%0A`;
      }
      
      message += `*Total: ₹${total}*%0A%0A`;
      
      message += `*Delivery Address:*%0A`;
      message += `Name: ${addressForm.fullName}%0A`;
      message += `Phone: ${addressForm.phone}%0A`;
      message += `Address: ${addressForm.houseNo}, ${addressForm.street}%0A`;
      message += `${addressForm.locality}, ${addressForm.city}%0A`;
      message += `${addressForm.state} - ${addressForm.pinCode}`;
      
      const waLink = `https://wa.me/${sellerNumber}?text=${message}`;
      window.open(waLink, '_blank');
    };

    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = parseInt(e.currentTarget.getAttribute('data-index'));
        removeFromCart(idx);
      });
    });
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Hamburger Menu Toggle
 

    renderCombos();
    renderProducts();
    renderRingsCarousel();
    renderCartItems();
    updateCartCount();

    document.getElementById('clear-cart').addEventListener('click', () => {
      if(confirm('Clear all items from cart?')) {
        clearCart();
      }
    });

    // Hero carousel
    let heroIndex = 0;
    const heroItems = document.querySelectorAll('.carousel-item-custom');
    setInterval(() => {
      heroItems[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroItems.length;
      heroItems[heroIndex].classList.add('active');
    }, 4000);

    // Rotating hero text
    const heroTitles = ['Delicate.', 'Elegant.', 'Minimal.', 'Timeless.'];
    let titleIndex = 0;
    setInterval(() => {
      titleIndex = (titleIndex + 1) % heroTitles.length;
      document.getElementById('hero-title').innerText = heroTitles[titleIndex];
    }, 2500);












































