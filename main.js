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
        images: ['https://via.placeholder.com/300x300?text=Ring+1', 'https://via.placeholder.com/300x300?text=Ring+1+Alt'],
        inStock: true,
        qtyAvailable: 2,
        category: 'rings',
        description: 'Elegant classic gold ring. Simple and timeless.'
    },
    {
        id: 102,
        name: 'GoldQuad Ring',
        price: 99,
        images: ['https://via.placeholder.com/300x300?text=Ring+2', 'https://via.placeholder.com/300x300?text=Ring+2+Alt'],
        inStock: true,
        qtyAvailable: 2,
        category: 'rings',
        description: 'Beautiful rose gold finish ring. Perfect for everyday wear.'
    },
    {
        id: 103,
        name: 'TriAura Ring',
        price: 99,
        images: ['https://via.placeholder.com/300x300?text=Ring+3', 'https://via.placeholder.com/300x300?text=Ring+3+Alt'],
        inStock: true,
        qtyAvailable: 3,
        category: 'rings',
        description: 'Minimalist silver band. Sleek and modern.'
    },
    {
        id: 104,
        name: 'Floria Ring',
        price: 99,
        images: ['https://via.placeholder.com/300x300?text=Ring+4', 'https://via.placeholder.com/300x300?text=Ring+4+Alt'],
        inStock: true,
        qtyAvailable: 4,
        category: 'rings',
        description: 'Delicate butterfly design. Charming and elegant.'
    },
    {
        id: 105,
        name: 'Starlet Glow Ring',
        price: 99,
        images: ['https://via.placeholder.com/300x300?text=Ring+5', 'https://via.placeholder.com/300x300?text=Ring+5+Alt'],
        inStock: true,
        qtyAvailable: 2,
        category: 'rings',
        description: 'Cute heart design ring. Perfect gift option.'
    },
    {
        id: 106,
        name: 'Divine Heart Ring',
        price: 99,
        images: ['https://via.placeholder.com/300x300?text=Ring+6', 'https://via.placeholder.com/300x300?text=Ring+6+Alt'],
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
        images: ['https://via.placeholder.com/300x300?text=Bracelet+1', 'https://via.placeholder.com/300x300?text=Bracelet+1+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Elegant double-layered bracelet with a delicate gold heart charm. Perfect for everyday wear.'
    },
    {
        id: 2,
        name: 'Halo Heart Double Layer Bracelet',
        price: 249,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+2', 'https://via.placeholder.com/300x300?text=Bracelet+2+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Stunning halo heart design with double chain layers. A must-have accessory.'
    },
    {
        id: 3,
        name: 'Trinity multi bracelet',
        price: 399,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+3', 'https://via.placeholder.com/300x300?text=Bracelet+3+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Beautiful butterfly charm bracelet in gold finish. Adds a touch of elegance to any outfit.'
    },
    {
        id: 4,
        name: 'Elegant Star Bracelet',
        price: 249,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+4', 'https://via.placeholder.com/300x300?text=Bracelet+4+Alt'],
        inStock: true,
        qtyAvailable: 2,
        category: 'bracelets',
        description: 'Minimalist star charm bracelet. Perfect for those who love subtle elegance.'
    },
    {
        id: 5,
        name: 'Roman race bracelet',
        price: 249,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+5', 'https://via.placeholder.com/300x300?text=Bracelet+5+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Double-layered design with star charm. Versatile and stylish.'
    },
    {
        id: 6,
        name: 'Gold Double Layer Bracelet',
        price: 249,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+6', 'https://via.placeholder.com/300x300?text=Bracelet+6+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 7,
        name: 'Rose gold roman bracelets ',
        price: 269,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+7', 'https://via.placeholder.com/300x300?text=Bracelet+7+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 8,
        name: 'Gold ivory bracelet',
        price: 349,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+8', 'https://via.placeholder.com/300x300?text=Bracelet+8+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 9,
        name: 'Lyra rose gold bracelet',
        price: 299,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+9', 'https://via.placeholder.com/300x300?text=Bracelet+9+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 10,
        name: 'Seren rose gold bracelet',
        price: 299,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+10', 'https://via.placeholder.com/300x300?text=Bracelet+10+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 11,
        name: 'Maze line rose gold bracelet',
        price: 269,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+11', 'https://via.placeholder.com/300x300?text=Bracelet+11+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 12,
        name: 'Gold stone bracelet',
        price: 129,
        images: ['https://via.placeholder.com/300x300?text=Halo+Heart+Bracelet', 'https://via.placeholder.com/300x300?text=Halo+Heart+Bracelet+2', 'https://via.placeholder.com/300x300?text=Halo+Heart+Bracelet+3'],
        inStock: true,
        qtyAvailable: 2,
        category: 'bracelets',
        description: 'Classic double-layer gold bracelet. Simple yet sophisticated.'
    },
    {
        id: 13,
        name: 'Midnight clover bracelet',
        price: 249,
        images: ['https://via.placeholder.com/300x300?text=Bracelet+13'],
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
        images: ['https://via.placeholder.com/300x300?text=Necklace+1', 'https://via.placeholder.com/300x300?text=Necklace+1+Alt', 'https://via.placeholder.com/300x300?text=Necklace+1+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Delicate gold heart pendant necklace. A timeless piece for any jewelry collection.'
    },
    {
        id: 302,
        name: 'Mint grace pendant necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Gold+Heart+Necklace', 'https://via.placeholder.com/300x300?text=Gold+Heart+Necklace+2', 'https://via.placeholder.com/300x300?text=Gold+Heart+Necklace+3'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small, rounded square pendant featuring a smooth teal/blue-green stone.'
    },
    {
        id: 303,
        name: 'Black Aura Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+3', 'https://via.placeholder.com/300x300?text=Necklace+3+Alt', 'https://via.placeholder.com/300x300?text=Necklace+3+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A minimalist gold-tone necklace featuring a sleek black stone pendant, perfect for adding a subtle, modern touch to everyday outfits.'
    },
    {
        id: 304,
        name: 'Royal White Charm Necklace',
        price: 349,
        images: ['https://via.placeholder.com/300x300?text=Necklace+4', 'https://via.placeholder.com/300x300?text=Necklace+4+Alt', 'https://via.placeholder.com/300x300?text=Necklace+4+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with dangling clear baguette-cut and small round cubic zirconia stones.'
    },
    {
        id: 305,
        name: 'Rose Gold Layered Necklace',
        price: 299,
        images: ['https://via.placeholder.com/300x300?text=Necklace+5', 'https://via.placeholder.com/300x300?text=Necklace+5+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Luxurious rose gold layered necklace. Adds sophistication to any look.'
    },
    {
        id: 306,
        name: 'Blue Aura Necklace',
        price: 89,
        images: ['https://via.placeholder.com/300x300?text=Clover+Necklace', 'https://via.placeholder.com/300x300?text=Clover+Necklace+2', 'https://via.placeholder.com/300x300?text=Clover+Necklace+3'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate silver-tone necklace featuring a shimmering blue gemstone, designed to add a touch of elegant simplicity to any look.'
    },
    {
        id: 307,
        name: 'Double Layered Snake Chain Necklace',
        price: 252,
        images: ['https://via.placeholder.com/300x300?text=Necklace+7', 'https://via.placeholder.com/300x300?text=Necklace+7+Alt'],
        inStock: true,
        qtyAvailable: 2,
        category: 'necklaces',
        description: 'Sleek double-layered snake chain. Minimalist elegance.'
    },
    {
        id: 308,
        name: 'Royal green charm Necklace',
        price: 349,
        images: ['https://via.placeholder.com/300x300?text=Necklace+8', 'https://via.placeholder.com/300x300?text=Necklace+8+Alt', 'https://via.placeholder.com/300x300?text=Necklace+8+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with dangling green baguette-cut gemstones and small round green stones.'
    },
    {
        id: 309,
        name: 'Clover Double Chain Necklace',
        price: 322,
        images: ['https://via.placeholder.com/300x300?text=Necklace+9', 'https://via.placeholder.com/300x300?text=Necklace+9+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Lucky clover charm with double chain. Stylish and meaningful.'
    },
    {
        id: 310,
        name: 'Rainbow gem Necklace',
        price: 369,
        images: ['https://via.placeholder.com/300x300?text=Necklace+10', 'https://via.placeholder.com/300x300?text=Necklace+10+Alt', 'https://via.placeholder.com/300x300?text=Necklace+10+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace adorned with multiple small, dangling bezel-set gemstones of various colors.'
    },
    {
        id: 311,
        name: 'Ivory Tear Drop Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+11', 'https://via.placeholder.com/300x300?text=Necklace+11+Alt', 'https://via.placeholder.com/300x300?text=Necklace+11+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate gold-tone layered chain necklace with a small teardrop-shaped white/opalescent stone pendant.'
    },
    {
        id: 312,
        name: 'Luna Gold Necklace',
        price: 229,
        images: ['https://via.placeholder.com/300x300?text=Necklace+12', 'https://via.placeholder.com/300x300?text=Necklace+12+Alt', 'https://via.placeholder.com/300x300?text=Necklace+12+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a small, rounded rectangular white gemstone pendant.'
    },
    {
        id: 313,
        name: 'Hidden Love Necklace',
        price: 229,
        images: ['https://via.placeholder.com/300x300?text=Necklace+13', 'https://via.placeholder.com/300x300?text=Necklace+13+Alt', 'https://via.placeholder.com/300x300?text=Necklace+13+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone beaded necklace with a round white pendant featuring a small, hidden heart cut-out.'
    },
    {
        id: 314,
        name: 'Golden rose Necklace',
        price: 229,
        images: ['https://via.placeholder.com/300x300?text=Necklace+14', 'https://via.placeholder.com/300x300?text=Necklace+14+Alt', 'https://via.placeholder.com/300x300?text=Necklace+14+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a round, mother-of-pearl pendant featuring a gold rose design'
    },
    {
        id: 315,
        name: 'Ivory square necklace',
        price: 229,
        images: ['https://via.placeholder.com/300x300?text=Necklace+15', 'https://via.placeholder.com/300x300?text=Necklace+15+Alt', 'https://via.placeholder.com/300x300?text=Necklace+15+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small, square white gemstone pendant.'
    },
    {
        id: 316,
        name: '11:11 love necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+16', 'https://via.placeholder.com/300x300?text=Necklace+16+Alt', 'https://via.placeholder.com/300x300?text=Necklace+16+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone chain necklace with a small heart-shaped pendant engraved with "11:11".'
    },
    {
        id: 317,
        name: 'Lavender oval pendant',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+17', 'https://via.placeholder.com/300x300?text=Necklace+17+Alt', 'https://via.placeholder.com/300x300?text=Necklace+17+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold-tone necklace with a small, oval purple gemstone pendant.'
    },
    {
        id: 318,
        name: 'Flora dream necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+18', 'https://via.placeholder.com/300x300?text=Necklace+18+Alt', 'https://via.placeholder.com/300x300?text=Necklace+18+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A gold necklace with an oval floral pendant displaying a purple flower.'
    },
    {
        id: 319,
        name: 'Olive recta necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+19', 'https://via.placeholder.com/300x300?text=Necklace+19+Alt', 'https://via.placeholder.com/300x300?text=Necklace+19+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a dark square-cut gemstone pendant.'
    },
    {
        id: 320,
        name: 'Blue lotus pendant',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+20', 'https://via.placeholder.com/300x300?text=Necklace+20+Alt', 'https://via.placeholder.com/300x300?text=Necklace+20+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a square floral pendant and pearl detail.'
    },
    {
        id: 321,
        name: 'Lumi stone Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+21', 'https://via.placeholder.com/300x300?text=Necklace+21+Alt', 'https://via.placeholder.com/300x300?text=Necklace+21+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a dainty round crystal pendant.'
    },
    {
        id: 322,
        name: 'Golden flower Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+22', 'https://via.placeholder.com/300x300?text=Necklace+22+Alt', 'https://via.placeholder.com/300x300?text=Necklace+22+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone floral pendant necklace with a subtle crystal accent.'
    },
    {
        id: 323,
        name: 'Lavender recta Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+23', 'https://via.placeholder.com/300x300?text=Necklace+23+Alt', 'https://via.placeholder.com/300x300?text=Necklace+23+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a square-cut crystal pendant.'
    },
    {
        id: 324,
        name: 'Ivory blossom pendant',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+24', 'https://via.placeholder.com/300x300?text=Necklace+24+Alt', 'https://via.placeholder.com/300x300?text=Necklace+24+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'A delicate gold-tone necklace featuring a floral-etched pendant with soft pastel details, designed to add a vintage-inspired elegance to everyday wear.'
    },
    {
        id: 325,
        name: 'Crystal frame necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+25', 'https://via.placeholder.com/300x300?text=Necklace+25+Alt', 'https://via.placeholder.com/300x300?text=Necklace+25+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone necklace with a clear crystal pendant for timeless elegance.'
    },
    {
        id: 326,
        name: 'Purple Recta Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+26', 'https://via.placeholder.com/300x300?text=Necklace+26+Alt', 'https://via.placeholder.com/300x300?text=Necklace+26+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Minimal gold-tone necklace with a lavender gemstone pendant.'
    },
    {
        id: 327,
        name: 'Heart Necklace',
        price: 199,
        images: ['https://via.placeholder.com/300x300?text=Necklace+27', 'https://via.placeholder.com/300x300?text=Necklace+27+Alt', 'https://via.placeholder.com/300x300?text=Necklace+27+Alt2'],
        inStock: true,
        qtyAvailable: 1,
        category: 'necklaces',
        description: 'Gold-tone heart pendant necklace with a sleek, minimal finish.'
    },

    // Earrings
    {
        id: 201,
        name: 'Rose Gold Sphere Earrings',
        price: 342,
        images: ['https://via.placeholder.com/300x300?text=Earring+1', 'https://via.placeholder.com/300x300?text=Earring+1+Alt'],
        inStock: false,
        qtyAvailable: 0,
        category: 'earrings',
        description: 'Elegant rose gold sphere studs. Perfect for everyday wear.'
    },
    {
        id: 202,
        name: 'Golden Prism Earrings',
        price: 149,
        images: ['https://via.placeholder.com/300x300?text=Earring+2'],
        inStock: false,
        qtyAvailable: 10,
        category: 'earrings',
        description: 'Geometric prism design in gold. Modern and eye-catching.'
    },
    {
        id: 203,
        name: 'Flower Cluster Earrings',
        price: 79,
        images: ['https://via.placeholder.com/300x300?text=Flower+Earrings', 'https://via.placeholder.com/300x300?text=Flower+Earrings+2', 'https://via.placeholder.com/300x300?text=Flower+Earrings+3'],
        inStock: false,
        qtyAvailable: 9,
        category: 'earrings',
        description: 'Delicate flower cluster studs. Feminine and charming.'
    },
    {
        id: 204,
        name: 'Gold Huggie Hoop Earrings',
        price: 286,
        images: ['https://via.placeholder.com/300x300?text=Earring+4', 'https://via.placeholder.com/300x300?text=Earring+4+Alt'],
        inStock: true,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Classic gold huggie hoops. Versatile and stylish.'
    },
    {
        id: 205,
        name: 'Swirl Earrings',
        price: 149,
        images: ['https://via.placeholder.com/300x300?text=Earring+5', 'https://via.placeholder.com/300x300?text=Earring+5+Alt'],
        inStock: false,
        qtyAvailable: 15,
        category: 'earrings',
        description: 'Unique swirl design. Modern and elegant.'
    },
    {
        id: 206,
        name: 'Rose Gold Huggie Hoop Earrings',
        price: 286,
        images: ['https://via.placeholder.com/300x300?text=Earring+6', 'https://via.placeholder.com/300x300?text=Earring+6+Alt'],
        inStock: false,
        qtyAvailable: 0,
        category: 'earrings',
        description: 'Rose gold huggie hoops. Chic and sophisticated.'
    },
    {
        id: 207,
        name: 'Vema Rose Gold Earrings',
        price: 254,
        images: ['https://via.placeholder.com/300x300?text=Earring+7'],
        inStock: false,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Elegant Vema design in rose gold. Perfect for any occasion.'
    },
    {
        id: 208,
        name: 'Pearl Elegant Rose Gold Earrings',
        price: 269,
        images: ['https://via.placeholder.com/300x300?text=Earring+8', 'https://via.placeholder.com/300x300?text=Earring+8+Alt'],
        inStock: false,
        qtyAvailable: 1,
        category: 'earrings',
        description: 'Beautiful pearl studs in rose gold. Classic elegance.'
    },
    {
        id: 209,
        name: 'Halo Stud Earrings',
        price: 310,
        images: ['https://via.placeholder.com/300x300?text=Earring+9'],
        inStock: true,
        qtyAvailable: 2,
        category: 'earrings',
        description: 'Stunning halo design studs. Sparkle and shine.'
    },
    {
        id: 210,
        name: 'Vema Silver Earrings',
        price: 254,
        images: ['https://via.placeholder.com/300x300?text=Earring+10'],
        inStock: false,
        qtyAvailable: 0,
        category: 'earrings',
        description: 'Elegant Vema design in silver. Versatile and beautiful.'
    }
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
        return {
            rate: 0.15,
            amount: Math.round(subtotal * 0.15)
        };
    } else if (subtotal >= 299) {
        return {
            rate: 0.10,
            amount: Math.round(subtotal * 0.10)
        };
    }
    return {
        rate: 0,
        amount: 0
    };
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
        <span style="background: white; color:rgb(0, 110, 7); padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; margin-left: 8px;">${combo.discount}</span>
    `;
    document.getElementById('detail-description').innerText = combo.description;

    const stockDiv = document.getElementById('detail-stock');
    stockDiv.innerHTML = '';

    const actionsDiv = document.getElementById('detail-actions');
    if (combo.inStock) {
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

function renderProducts() {
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
            <img src="${ring.images[0]}" alt="${ring.name}
        ">
            <div class="ring-card-overlay">
                <div class="ring-card-name">${ring.name}</div>
                <div class="ring-card-price">${fmtINR(ring.price)}</div>
            </div>
        `;
        carousel.appendChild(card);
    });

    initRingsCarousel();
}

function initRingsCarousel() {
    const slider = document.getElementById('rings-carousel');
    if (!slider) return;

    const cards = [...slider.querySelectorAll('.ring-card')];
    const cardWidth = 230;
    const curveStrength = 30;

    function update() {
        const center = slider.scrollLeft + slider.clientWidth / 2;

        cards.forEach((card, i) => {
            const cardCenter = i * cardWidth + cardWidth / 2;
            const dx = cardCenter - center;
            const angle = dx / 10;
            const depth = -Math.abs(dx) / curveStrength;

            card.style.transform = `rotateY(${angle}deg) translateZ(${depth}px)`;
        });
    }

    update();
    slider.addEventListener('scroll', update);
    window.addEventListener('resize', update);
}

/* ================= Product Modal ================= */

let currentProduct = null;
let currentImageIndex = 0;

function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    currentImageIndex = 0;

    document.getElementById('productModalTitle').innerText = product.name;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-price').innerText = fmtINR(product.price);
    document.getElementById('detail-description').innerText = product.description;

    const actionsDiv = document.getElementById('detail-actions');

    if (product.inStock) {
        actionsDiv.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span style="font-weight: 700; font-size: 1.1rem;">Price:</span>
                <span style="font-size: 1.3rem; font-weight: 700; color: var(--accent);">${fmtINR(product.price)}</span>
            </div>
            <div class="d-flex align-items-center gap-2 mb-3 justify-content-center">
                <button class="btn-qty-classic" onclick="adjustModalQty(-1)">−</button>
                <input type="number" id="modal-qty" value="1" min="1" max="${product.qtyAvailable}"
                    class="form-control form-control-sm text-center"
                    style="width:60px;font-weight:700" readonly>
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

    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function updateCarouselImages() {
    if (!currentProduct) return;

    document.getElementById('carousel-main-image').src =
        currentProduct.images[currentImageIndex];

    const indicators = document.getElementById('carousel-indicators');
    indicators.innerHTML = '';

    currentProduct.images.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === currentImageIndex ? 'active' : ''}`;
        dot.onclick = () => {
            currentImageIndex = idx;
            updateCarouselImages();
        };
        indicators.appendChild(dot);
    });
}

function changeImage(dir) {
    if (!currentProduct) return;

    currentImageIndex += dir;

    if (currentImageIndex < 0) {
        currentImageIndex = currentProduct.images.length - 1;
    }
    if (currentImageIndex >= currentProduct.images.length) {
        currentImageIndex = 0;
    }

    updateCarouselImages();
}

function adjustModalQty(change) {
    const input = document.getElementById('modal-qty');
    let qty = parseInt(input.value) + change;

    if (qty < 1) qty = 1;
    if (qty > currentProduct.qtyAvailable) qty = currentProduct.qtyAvailable;

    input.value = qty;
}

function addToCartFromModal() {
    const qty = parseInt(document.getElementById('modal-qty').value);

    cart.push({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        qty,
        image: currentProduct.images[0]
    });

    updateCartCount();
    renderCartItems();

    bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    showToast(`${qty} × ${currentProduct.name} added`);
}

/* ================= Cart ================= */

function updateCartCount() {
    const count = cart.length;
    const el = document.getElementById('cart-count');

    if (count > 0) {
        el.style.display = 'inline-block';
        el.innerText = count;
    } else {
        el.style.display = 'none';
    }
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const subtotal = calculateSubtotal();
    const shipping = 30; // Flat ₹30 shipping charge
    const total = subtotal + shipping;
    
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-bag fa-3x text-muted mb-3"></i>
                <p class="text-muted">Your cart is empty.</p>
            </div>
        `;
        return;
    }

    cart.forEach((item, idx) => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-details">
                    <div>${item.name}</div>
                    <small>Qty: ${item.qty}</small>
                </div>
                <div>
                    ${fmtINR(item.price * item.qty)}
                    <button class="btn btn-link text-danger p-0 ms-2"
                        onclick="cart.splice(${idx},1); renderCartItems(); updateCartCount();">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });
    
    // Update the order summary
    document.getElementById('cart-subtotal').textContent = fmtINR(subtotal);
    document.getElementById('shipping-amount').textContent = fmtINR(shipping);
    document.getElementById('cart-total').textContent = fmtINR(total);
}

/* ================= Toast ================= */

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<i class="fas fa-check-circle me-2"></i>${msg}`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
}

/* ================= Init ================= */

// Initialize the app
renderCombos();
renderProducts();
renderRingsCarousel();
renderCartItems();
updateCartCount();

// Add event listener for WhatsApp checkout
document.getElementById('checkout-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get customer details
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const state = document.getElementById('customer-state').value.trim();
    const country = document.getElementById('customer-country').value.trim();
    const pincode = document.getElementById('customer-pincode').value.trim();
    
    // Validate form
    if (!name || !phone || !address || !state || !country || !pincode) {
        showToast('Please fill in all shipping details');
        return;
    }
    
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    // Format order details
    let orderDetails = '📦 *NEW ORDER* \n\n';
    orderDetails += `👤 *Name:* ${name}\n`;
    orderDetails += `📱 *Phone:* ${phone}\n`;
    orderDetails += `📍 *Address:* ${address}, ${state}, ${country} - ${pincode}\n\n`;
    orderDetails += '🛍️ *Order Items:*\n';
    
    cart.forEach((item, index) => {
        orderDetails += `${index + 1}. ${item.name} (Qty: ${item.qty}) - ${fmtINR(item.price * item.qty)}\n`;
    });
    
    const subtotal = calculateSubtotal();
    const shipping = 30;
    const total = subtotal + shipping;
    
    orderDetails += '\n';
    orderDetails += `💰 *Subtotal:* ${fmtINR(subtotal)}\n`;
    orderDetails += `🚚 *Shipping:* ${fmtINR(shipping)}\n`;
    orderDetails += `💵 *Total:* ${fmtINR(total)}\n\n`;
    orderDetails += 'Thank you for your order! We\'ll contact you shortly to confirm the details. 🎉';
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappUrl = `https://wa.me/918891093751?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
});

// Clear cart button
document.getElementById('clear-cart').addEventListener('click', function() {
    if (cart.length > 0 && confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        renderCartItems();
        updateCartCount();
        showToast('Cart cleared');
    }
});

