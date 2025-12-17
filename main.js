const sellerNumber = '918891093751';

// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Combo deals data
const combos = [];

const products = [
    // Rings - All ₹99
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
    },
    {
        id: 103,
        name: 'TriAura Ring',
        price: 99,
        images: ['assets/images/triangle.PNG', 'assets/images/allrings.JPG'],
        inStock: true,
        qtyAvailable: 3,
        category: 'rings',
        description: 'Minimalist silver band. Sleek and modern.'
    },
    {
        id: 104,
        name: 'Floria Ring',
        price: 99,
        images: ['assets/images/flower.JPG', 'assets/images/allrings.JPG'],
        inStock: true,
        qtyAvailable: 4,
        category: 'rings',
        description: 'Delicate butterfly design. Charming and elegant.'
    },
    {
        id: 105,
        name: 'Starlet Glow Ring',
        price: 99,
        images: ['assets/images/star.PNG', 'assets/images/allrings.JPG'],
        inStock: true,
        qtyAvailable: 2,
        category: 'rings',
        description: 'Cute heart design ring. Perfect gift option.'
    },
    {
        id: 106,
        name: 'Divine Heart Ring',
        price: 99,
        images: ['assets/images/love.PNG', 'assets/images/allrings.JPG'],
        inStock: false,
        qtyAvailable: 0,
        category: 'rings',
        description: 'Cute heart design ring. Perfect gift option.'
    },

    // Bracelets
    {
        id: 1,
        name: 'Hexagon bracelet',
        price: 379,
        images: ['assets/images/hexagonbracelet.jpg', 'assets/images/hexagonbracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Elegant double-layered bracelet with a delicate gold heart charm. Perfect for everyday wear.'
    },
    {
        id: 2,
        name: 'Halo Heart Double Layer Bracelet',
        price: 249,
        images: ['assets/images/Haloheartdoublelayerbracelet.JPG', 'assets/images/allbracelets.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Stunning halo heart design with double chain layers. A must-have accessory.'
    },
    {
        id: 3,
        name: 'Trinity multi bracelet',
        price: 399,
        images: ['assets/images/trinitymultibracelet.jpg', 'assets/images/trinitymultibracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Beautiful butterfly charm bracelet in gold finish. Adds a touch of elegance to any outfit.'
    },
    {
        id: 4,
        name: 'Elegant Star Bracelet',
        price: 249,
        images: ['assets/images/Elegantstarbracelet.JPG', 'assets/images/allbracelets.JPG'],
        inStock: true,
        qtyAvailable: 2,
        category: 'bracelets',
        description: 'Minimalist star charm bracelet. Perfect for those who love subtle elegance.'
    },
    {
        id: 5,
        name: 'Roman race bracelet',
        price: 249,
        images: ['assets/images/Stardoublelayeredgolfbracelet.JPG', 'assets/images/allbracelets.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Double-layered design with star charm. Versatile and stylish.'
    },
    {
        id: 6,
        name: 'Gold Double Layer Bracelet',
        price: 249,
        images: ['assets/images/Golddoublelayerbracelet.JPG', 'assets/images/allbracelets.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 7,
        name: 'Rose gold roman bracelets ',
        price: 269,
        images: ['assets/images/rosegoldromanbracelet.jpg', 'assets/images/rosegoldromanbracelets1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 8,
        name: 'Gold ivory bracelet',
        price: 349,
        images: ['assets/images/goldivorybracelet.jpg', 'assets/images/goldivorybracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 9,
        name: 'Lyra rose gold bracelet',
        price: 299,
        images: ['assets/images/lyrarosegoldbracelet.jpg', 'assets/images/lyrarosegoldbracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 10,
        name: 'Seren rose gold bracelet',
        price: 299,
        images: ['assets/images/serenrosegoldbracelet.jpg', 'assets/images/serenrosegoldbracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 11,
        name: 'Maze line rose gold bracelet',
        price: 269,
        images: ['assets/images/mazelinerosegoldbracelet.jpg', 'assets/images/mazelinerosegoldbracelet1.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 12,
        name: 'Gold stone bracelet',
        price: 179,
        images: ['assets/images/goldstonebracelet.jpg', 'assets/images/goldstonebracelet1.jpg'],
        inStock: true,
        qtyAvailable: 2,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 13,
        name: 'Midnight clover bracelet',
        price: 249,
        images: ['assets/images/midnightcloverbracelet.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 14,
        name: 'Golden curve bracelet',
        price: 229,
        images: ['assets/images/goldencurvebracelet.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
   

    // Necklaces
    {
        id: 301,
        name: 'Gold Heart Necklace',
        price: 249,
        images: ['assets/images/Goldheartnecklace.JPG', 'assets/images/Goldheartnecklace1.JPG', 'assets/images/Goldheartnecklace2.png'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Delicate gold heart pendant necklace. A timeless piece for any jewelry collection.'
    },
    {
        id: 302,
        name: 'Mint grace pendant necklace',
        price: 199,
        images: ['assets/images/Mintgracependantnecklace20.jpg', 'assets/images/Mintgracependantnecklace1.JPG', 'assets/images/Mintgracependantnecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small, rounded square pendant featuring a smooth teal/blue-green stone.'
    },
    {
        id: 303,
        name: 'Black Aura Necklace',
        price: 199,
        images: ['assets/images/BlackAuranecklace1.JPG', 'assets/images/BlackAuranecklace.JPG', 'assets/images/BlackAuranecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A minimalist gold-tone necklace featuring a sleek black stone pendant, perfect for adding a subtle, modern touch to everyday outfits.'
    },
    {
        id: 304,
        name: 'Royal White Charm Necklace',
        price: 349,
        images: ['assets/images/RoyalWhiteCharmnecklace.jpg', 'assets/images/RoyalWhiteCharmnecklace1.JPG', 'assets/images/RoyalWhiteCharmnecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with dangling clear baguette-cut and small round cubic zirconia stones.'
    },
    {
        id: 305,
        name: 'Rose Gold Layered Necklace',
        price: 299,
        images: ['assets/images/Rosegoldlayerednecklace.JPG', 'assets/images/Rosegoldlayerednecklace1.png'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Luxurious rose gold layered necklace. Adds sophistication to any look.'
    },
    {
        id: 306,
        name: 'Blue Aura Necklace',
        price: 189,
        images: ['assets/images/BlueAuranecklace.jpg', 'assets/images/BlueAuranecklace1.jpg', 'assets/images/BlueAuranecklace2.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate silver-tone necklace featuring a shimmering blue gemstone, designed to add a touch of elegant simplicity to any look.'
    },
    {
        id: 307,
        name: 'Double Layered Snake Chain Necklace',
        price: 252,
        images: ['assets/images/Doublelayeredsnakechainnecklace.JPG', 'assets/images/Doublelayeredsnakechainnecklace1.png'],
        inStock: true,
        qtyAvailable: 2,
        category: 'necklaces',
        description: 'Sleek double-layered snake chain. Minimalist elegance.'
    },
    {
        id: 308,
        name: 'Royal green charm Necklace',
        price: 349,
        images: ['assets/images/RoyalGreenCharmnecklace.jpg', 'assets/images/RoyalGreenCharmnecklace1.JPG', 'assets/images/RoyalGreenCharmnecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with dangling green baguette-cut gemstones and small round green stones.'
    },
    {
        id: 309,
        name: 'Clover Double Chain Necklace',
        price: 322,
        images: ['assets/images/Cloverdoublechainnecklace.JPG', 'assets/images/Cloverdoublechainnecklace1.png'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Lucky clover charm with double chain. Stylish and meaningful.'
    },
    {
        id: 310,
        name: 'Rainbow gem Necklace',
        price: 369,
        images: ['assets/images/RainbowDropnecklace.jpg', 'assets/images/RainbowDropnecklace1.jpg', 'assets/images/RainbowDropnecklace2.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace adorned with multiple small, dangling bezel-set gemstones of various colors.'
    },
    {
        id: 311,
        name: 'Ivory Tear Drop Necklace',
        price: 199,
        images: ['assets/images/IvoryTearDropnecklace.jpg', 'assets/images/IvoryTearDropnecklac1.jpg', 'assets/images/IvoryTearDropnecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate gold-tone layered chain necklace with a small teardrop-shaped white/opalescent stone pendant.'
    },
    {
        id: 312,
        name: 'Luna Gold Necklace',
        price: 229,
        images: ['assets/images/Lunagoldnecklace.JPG', 'assets/images/Lunagoldnecklace1.JPG', 'assets/images/Lunagoldnecklace2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a small, rounded rectangular white gemstone pendant.'
    },
    {
        id: 313,
        name: 'Hidden Love Necklace',
        price: 229,
        images: ['assets/images/hiddenlovependant.JPG', 'assets/images/hiddenlovependant1.JPG', 'assets/images/hiddenlovependant2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone beaded necklace with a round white pendant featuring a small, hidden heart cut-out.'
    },
    {
        id: 314,
        name: 'Golden rose Necklace',
        price: 229,
        images: ['assets/images/goldenrose.JPG', 'assets/images/goldenrose1.JPG', 'assets/images/goldenrose2.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a round, mother-of-pearl pendant featuring a gold rose design'
    },
    {
        id: 315,
        name: 'Ivory square necklace',
        price: 229,
        images: ['assets/images/ivorysquarenecklace.jpg', 'assets/images/ivorysquarenecklace1.jpg', 'assets/images/ivory sqr .JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small, square white gemstone pendant.'
    },
    {
        id: 316,
        name: '11:11 love necklace',
        price: 199,
        images: ['assets/images/1111lovenecklace.jpg', 'assets/images/1111lovenecklace1.jpg', 'assets/images/11 neck 3.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small heart-shaped pendant engraved with "11:11".'
    },
    {
        id: 317,
        name: 'Lavender oval pendant',
        price: 199,
        images: ['assets/images/lavenderovalpendant.jpg', 'assets/images/lavenderovalpendant1.jpg', 'assets/images/lavender oval necklace.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a small, oval purple gemstone pendant.'
    },
    {
        id: 318,
        name: 'Flora dream necklace',
        price: 199,
        images: ['assets/images/floradreamnecklace.jpg', 'assets/images/floradreamnecklace1.jpg', 'assets/images/flora dream necklace.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold necklace with an oval floral pendant displaying a purple flower.'
    },
    {
        id: 319,
        name: 'Olive recta necklace',
        price: 199,
        images: ['assets/images/oliverectapendant.jpg', 'assets/images/oliverectapendant1.jpg', 'assets/images/olive recta.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a dark square-cut gemstone pendant.'
    },
    {
        id: 320,
        name: 'Blue lotus pendant',
        price: 199,
        images: ['assets/images/bluelotuspendant.jpg', 'assets/images/bluelotuspendant1.jpg', 'assets/images/bluelotuspendent.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a square floral pendant and pearl detail.'
    },
    {
        id: 321,
        name: 'Lumi stone Necklace',
        price: 199,
        images: ['assets/images/lumistonenecklace.jpg', 'assets/images/lumistonenecklace1.jpg', 'assets/images/lumi stone.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a dainty round crystal pendant.'
    },
    {
        id: 322,
        name: 'Golden flower Necklace',
        price: 199,
        images: ['assets/images/goldenflowernecklace.jpg', 'assets/images/goldenflowernecklace1.jpg', 'assets/images/golden flower.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone floral pendant necklace with a subtle crystal accent.'
    },
    {
        id: 323,
        name: 'Lavender recta Necklace',
        price: 199,
        images: ['assets/images/lavenderrectanecklace.jpg', 'assets/images/lavenderrectanecklace1.jpg', 'assets/images/lavender recta.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a square-cut crystal pendant.'
    },
    {
        id: 324,
        name: 'Ivory blossom pendant',
        price: 199,
        images: ['assets/images/ivoryblossompendant.jpg', 'assets/images/ivoryblossompendant1.jpg', 'assets/images/ivory blossom.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate gold-tone necklace featuring a floral-etched pendant with soft pastel details, designed to add a vintage-inspired elegance to everyday wear.'
    },
    {
        id: 325,
        name: 'Crystal frame necklace',
        price: 199,
        images: ['assets/images/crystalframenecklace.jpg', 'assets/images/crystalframenecklace1.jpg', 'assets/images/crystal frame.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a clear crystal pendant for timeless elegance.'
    },
    {
        id: 326,
        name: 'Purple Recta Necklace',
        price: 199,
        images: ['assets/images/purplerectanecklace.jpg', 'assets/images/purplerectanecklace1.jpg', 'assets/images/purple recta.PNG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Minimal gold-tone necklace with a lavender gemstone pendant.'
    },
    {
        id: 327,
        name: 'Heart Necklace',
        price: 199,
        images: ['assets/images/heart pendant 1.jpeg', 'assets/images/heart pendant 2.jpeg', 'assets/images/heart pendant 3.jpeg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone heart pendant necklace with a sleek, minimal finish.'
    },

    // Earrings
    {
        id: 201,
        name: 'Crescent white earrings ',
        price: 349,
        images: ['assets/images/crescentwhiteearrings.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant rose gold sphere studs. Perfect for everyday wear.'
    },
    {
        id: 202,
        name: 'Gold rose studs',
        price: 99,
        images: ['assets/images/goldrosestuds.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Geometric prism design in gold. Modern and eye-catching.'
    },
    {
        id: 203,
        name: 'Heart Enamel earrings',
        price: 129,
        images: ['assets/images/heartenamelearrings.jpg'],
        inStock: true,
        qtyAvailable: 9,
        category: 'earrings',
        description: 'Delicate flower cluster studs. Feminine and charming.'
    },
    {
        id: 204,
        name: 'Gold Huggie Hoop Earrings',
        price: 286,
        images: ['assets/images/Goldhuggiehoopearrings.JPG', 'assets/images/Goldhuggiehoopearrings1.JPG'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Classic gold huggie hoops. Versatile and stylish.'
    },
    {
        id: 205,
        name:'Dangle stud',
        price: 109,
        images: ['assets/images/danglestud.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Unique swirl design. Modern and elegant.'
    },
    {
        id: 206,
        name: 'Pear petal earrings ',
        price: 129,
        images: ['assets/images/pearpetalearrings.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Rose gold huggie hoops. Chic and sophisticated.'
    },
    {
        id: 207,
        name: 'Gold pepper hoops',
        price: 119,
        images: ['assets/images/goldpepperhoops.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in rose gold. Perfect for any occasion.'
    },
    {
        id: 208,
        name: 'Golden hoop earrings',
        price: 119,
        images: ['assets/images/goldenhoop.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Beautiful pearl studs in rose gold. Classic elegance.'
    },
    {
        id: 209,
        name: 'Halo Stud Earrings',
        price: 310,
        images: ['assets/images/Halostudearrings.JPG'],
        inStock: true,
        qtyAvailable: 2,
        category: 'earrings',
        description: 'Stunning halo design studs. Sparkle and shine.'
    },
    {
        id: 210,
        name: 'Blossom drop earrings ',
        price: 109,
        images: ['assets/images/blossomdropearrings.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    },
    {
        id: 211,
        name: 'Triangle Huggie Earrings ',
        price: 129,
        images: ['assets/images/trianglehuggieearring.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    },
    {
        id: 212,
        name: 'Rose red drops  Earrings ',
        price: 169,
        images: ['assets/images/rosereddrops.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    },
    {
        id: 213,
        name: 'Locket Love  Earrings ',
        price: 116,
        images: ['assets/images/locketloveearring.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    },
    {
        id: 214,
        name: 'Gold Recta Earrings ',
        price: 129,
        images: ['assets/images/goldrectaearring.jpg'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    },
];

/* ================= Cart ================= */
let cart = [];

const fmtINR = n => '₹' + n;

/* ================= Discount ================= */
function calculateDiscount(subtotal) {
    if (subtotal >= 499) return { rate: 0.15, amount: Math.round(subtotal * 0.15) };
    if (subtotal >= 299) return { rate: 0.10, amount: Math.round(subtotal * 0.10) };
    return { rate: 0, amount: 0 };
}

/* ================= Products ================= */
function renderProducts() {
    const categories = ['necklaces','earrings','bracelets','rings'];

    categories.forEach(cat => {
        const section = document.querySelector(`#${cat} .product-grid`);
        if (!section) return;

        section.innerHTML = '';
        products.filter(p => p.category === cat).forEach(p => {
            section.innerHTML += `
                <div class="card shadow-sm">
                    <img src="${p.images[0]}" class="card-img-top">
                    <div class="card-body text-center">
                        <div class="name">${p.name}</div>
                        <div class="price">${fmtINR(p.price)}</div>
                        <button class="btn-view-product mt-2" onclick="openProductDetail(${p.id})">View</button>
                    </div>
                </div>
            `;
        });
    });
}

/* ================= Product Modal ================= */
let currentProduct = null;

function openProductDetail(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('detail-name').innerText = currentProduct.name;
    document.getElementById('detail-price').innerText = fmtINR(currentProduct.price);
    document.getElementById('detail-description').innerText = currentProduct.description;
    document.getElementById('carousel-main-image').src = currentProduct.images[0];

    document.getElementById('detail-actions').innerHTML = `
        <div class="d-flex justify-content-center mb-2">
            <button onclick="adjustModalQty(-1)">−</button>
            <input id="modal-qty" value="1" readonly style="width:50px;text-align:center">
            <button onclick="adjustModalQty(1)">+</button>
        </div>
        <button class="btn btn-accent w-100" onclick="addToCartFromModal()">Add to Cart</button>
    `;

    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function adjustModalQty(v) {
    const i = document.getElementById('modal-qty');
    let q = parseInt(i.value) + v;
    if (q < 1) q = 1;
    if (q > currentProduct.qtyAvailable) q = currentProduct.qtyAvailable;
    i.value = q;
}

function addToCartFromModal() {
    const qty = parseInt(document.getElementById('modal-qty').value);
    cart.push({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, qty, image: currentProduct.images[0] });
    updateCartCount();
    renderCartItems();
    bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
}

/* ================= Cart UI ================= */
function updateCartCount() {
    const el = document.getElementById('cart-count');
    el.innerText = cart.length;
    el.style.display = cart.length ? 'inline-block' : 'none';
}

function calculateCartTotals() {
    let subtotal = 0;
    cart.forEach(i => subtotal += i.price * i.qty);

    const d = calculateDiscount(subtotal);
    const total = subtotal - d.amount;

    document.getElementById('cart-subtotal').innerText = fmtINR(subtotal);
    document.getElementById('cart-discount').innerText = '- ' + fmtINR(d.amount);
    document.getElementById('cart-total').innerText = fmtINR(total);
}

function renderCartItems() {
    const c = document.getElementById('cart-items');
    c.innerHTML = '';

    if (!cart.length) {
        c.innerHTML = `<p class="text-center text-muted">Your cart is empty</p>`;
        document.getElementById('cart-summary').style.display = 'none';
        document.getElementById('checkout-form').style.display = 'none';
        return;
    }

    document.getElementById('cart-summary').style.display = 'block';
    document.getElementById('checkout-form').style.display = 'block';

    cart.forEach((i, idx) => {
        c.innerHTML += `
            <div class="cart-item">
                <img src="${i.image}" class="cart-item-img">
                <div>${i.name}<br><small>Qty: ${i.qty}</small></div>
                <div>${fmtINR(i.price * i.qty)}
                    <button onclick="cart.splice(${idx},1);renderCartItems();updateCartCount()">✕</button>
                </div>
            </div>
        `;
    });

    calculateCartTotals();
}

/* ================= WhatsApp Order ================= */
function placeOrder() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const pin = document.getElementById('cust-pincode').value.trim();

    if (!name || !phone || !address || !pin) {
        alert('Fill all customer details');
        return;
    }

    let msg = `*New Order*%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0APincode: ${pin}%0A%0A`;
    let subtotal = 0;

    cart.forEach(i => {
        subtotal += i.price * i.qty;
        msg += `${i.name} × ${i.qty} = ₹${i.price * i.qty}%0A`;
    });

    const d = calculateDiscount(subtotal);
    msg += `%0ASubtotal: ₹${subtotal}%0ADiscount: ₹${d.amount}%0A*Total: ₹${subtotal - d.amount}*`;

    window.open(`https://wa.me/${sellerNumber}?text=${msg}`, '_blank');
}

/* ================= Init ================= */
renderProducts();
renderCartItems();
updateCartCount();




