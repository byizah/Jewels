const sellerNumber = '918891093751';
const SHIPPING_CHARGE = 30;

// Sidebar Toggle Function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

// Combo deals data   
const combos = [];

// PRODUCTS DATA
const products = [
  // Rings
  {id:101,name:'Eternal Circle Ring',price:99,images:['assets/images/circle.PNG','assets/images/allrings.JPG'],inStock:true,qtyAvailable:2,category:'rings',description:'Elegant classic gold ring. Simple and timeless.'},
  {id:102,name:'GoldQuad Ring',price:99,images:['assets/images/square.PNG','assets/images/allrings.JPG'],inStock:true,qtyAvailable:2,category:'rings',description:'Beautiful rose gold finish ring. Perfect for everyday wear.'},
  {id:103,name:'TriAura Ring',price:99,images:['assets/images/triangle.PNG','assets/images/allrings.JPG'],inStock:true,qtyAvailable:3,category:'rings',description:'Minimalist silver band. Sleek and modern.'},
  {id:104,name:'Floria Ring',price:99,images:['assets/images/flower.JPG','assets/images/allrings.JPG'],inStock:true,qtyAvailable:4,category:'rings',description:'Delicate butterfly design. Charming and elegant.'},
  {id:105,name:'Starlet Glow Ring',price:99,images:['assets/images/star.PNG','assets/images/allrings.JPG'],inStock:true,qtyAvailable:2,category:'rings',description:'Cute heart design ring. Perfect gift option.'},
  {id:106,name:'Divine Heart Ring',price:99,images:['assets/images/love.PNG','assets/images/allrings.JPG'],inStock:false,qtyAvailable:0,category:'rings',description:'Cute heart design ring. Perfect gift option.'},

  // Bracelets
  {id:1,name:'Gold Heart Double Layer Bracelet',price:249,images:['assets/images/Goldheartdoublelayerbracelet.JPG','assets/images/allbracelets.JPG'],inStock:false,qtyAvailable:0,category:'bracelets',description:'Elegant double-layered bracelet.'},
  {id:2,name:'Halo Heart Double Layer Bracelet',price:249,images:['assets/images/Haloheartdoublelayerbracelet.JPG','assets/images/allbracelets.JPG'],inStock:true,qtyAvailable:1,category:'bracelets',description:'Stunning halo heart design.'},

  // Necklaces (shortened for readability – keep your full list as-is)
  {id:301,name:'Gold Heart Necklace',price:249,images:['assets/images/Goldheartnecklace.JPG'],inStock:false,qtyAvailable:0,category:'necklaces',description:'Delicate gold heart pendant necklace.'},

  // Earrings
  {id:201,name:'Rose Gold Sphere Earrings',price:342,images:['assets/images/Rosegoldsphereearrings.JPG'],inStock:false,qtyAvailable:0,category:'earrings',description:'Elegant rose gold sphere studs.'}
];

// CART + ADDRESS
let cart = [];

let addressForm = {
  fullName:'',phone:'',houseNo:'',street:'',
  locality:'',city:'',state:'',pinCode:''
};

const fmtINR = n => '₹' + n;

// DISCOUNT LOGIC
function calculateDiscount(subtotal) {
  if (subtotal >= 299) {
    return { rate: 0.10, amount: Math.round(subtotal * 0.10) };
  }
  return { rate: 0, amount: 0 };
}

// CART HELPERS
function getCart(){ return cart; }
function saveCart(c){ cart = c; updateCartCount(); }

function updateCartCount(){
  const count = cart.length;
  const el = document.getElementById('cart-count');
  if(count>0){ el.style.display='inline-block'; el.innerText = count; }
  else{ el.style.display='none'; }
}

// RENDER CART
function renderCartItems(){
  const container = document.getElementById('cart-items');
  container.innerHTML = '';

  if(cart.length === 0){
    container.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
    document.getElementById('cart-subtotal').innerText = '₹0';
    document.getElementById('cart-discount').innerText = '-₹0';
    document.getElementById('cart-shipping').innerText = '₹0';
    document.getElementById('cart-total').innerText = '₹0';
    document.getElementById('discount-row').style.display = 'none';
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <div>${item.name}</div>
          <small>Qty: ${item.qty} × ₹${item.price}</small>
        </div>
        <div>
          <div>₹${itemTotal}</div>
          <button onclick="removeFromCart(${idx})">Remove</button>
        </div>
      </div>
    `;
  });

  const discount = calculateDiscount(subtotal);
  const shipping = SHIPPING_CHARGE;
  const total = subtotal - discount.amount + shipping;

  document.getElementById('cart-subtotal').innerText = fmtINR(subtotal);
  document.getElementById('cart-shipping').innerText = fmtINR(shipping);

  if(discount.amount > 0){
    document.getElementById('cart-discount').innerText = `-₹${discount.amount}`;
    document.getElementById('discount-row').style.display = 'flex';
  } else {
    document.getElementById('discount-row').style.display = 'none';
  }

  document.getElementById('cart-total').innerText = fmtINR(total);

  // WhatsApp Checkout
  document.getElementById('checkout-whatsapp').onclick = function(){
    let message = `Hello! I'd like to order from IZAH:%0A%0A`;

    cart.forEach(item => {
      message += `*${item.name}*%0AQty: ${item.qty} × ₹${item.price}%0A%0A`;
    });

    message += `Subtotal: ₹${subtotal}%0A`;
    if(discount.amount > 0){
      message += `Discount: -₹${discount.amount}%0A`;
    }
    message += `Shipping: ₹${shipping}%0A`;
    message += `*Total: ₹${total}*`;

    window.open(`https://wa.me/${sellerNumber}?text=${message}`, '_blank');
  };
}

// REMOVE ITEM
function removeFromCart(index){
  cart.splice(index,1);
  updateCartCount();
  renderCartItems();
}

// INIT
renderCartItems();
updateCartCount();
