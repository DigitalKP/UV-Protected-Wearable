// cart.js

// Retrieve the cart from localStorage (if it exists)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sample product data
const products = [
  {
    "id": 1,
    "name": "Bamboo Cool Coat",
    "price": 799,
    "stock": true,
    "img": "../images/bamboo-coat.jpg",
    "description": "A bamboo fiber-based cool coat, naturally UV-resistant and antibacterial."
  },
  {
    "id": 2,
    "name": "UV Shield Polyester",
    "price": 649,
    "stock": false,
    "img": "../images/polyester-coat.jpg",
    "description": "A UV shield polyester coat designed to keep you safe and comfortable in the summer sun."
  },
  {
    "id": 3,
    "name": "Nylon Summer Zip-Up",
    "price": 699,
    "stock": true,
    "img": "../images/nylon-coat.jpg",
    "description": "A lightweight nylon zip-up with UV treatment, perfect for summer activities."
  },
  {
    "id": 4,
    "name": "Kids UV Jacket – Boy",
    "price": 599,
    "stock": true,
    "img": "../images/kids_uv_jacket_boy1.png",
    "description": "Designed for energetic boys, offering playful style and full UV protection."
  },
  {
    "id": 7,
    "name": "Kids UV Jacket – Girl",
    "price": 599,
    "stock": true,
    "img": "../images/kids_uv_jacket_girlboy.png",
    "description": "Cute and comfortable UV protection for little girls."
  },
  {
    "id": 8,
    "name": "Family UV Jacket Set",
    "price": 1799,
    "stock": true,
    "img": "../images/family_uv_jacket_boygirl.png",
    "description": "Stylish matching UV jackets for the entire family."
  },
  {
    "id": 5,
    "name": "Kids UV Jacket – Boy (Blue)",
    "price": 599,
    "stock": true,
    "img": "../images/kids_uv_jacket_boy2.png",
    "description": "A premium cool blue UV jacket for young boys, breathable and fun."
  },
  {
    "id": 6,
    "name": "Kids UV Jacket – girl (Orange)",
    "price": 599,
    "stock": true,
    "img": "../images/kids_uv_jacket_girl2.png",
    "description": "A premium cool blue UV jacket for young boys, breathable and fun."
  }
];

// Update Cart Display
function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cartContainer) {
    cartContainer.innerHTML = '';
  }

  let totalPrice = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product && cartContainer) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");

      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <p>₹${product.price}</p>
          <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
        </div>
      `;

      cartContainer.appendChild(productDiv);
      totalPrice += product.price;
    }
  });

  if (cartTotal) {
    cartTotal.textContent = `Total: ₹${totalPrice}`;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product && product.stock) {
    cart.push({ id: product.id });
    updateCart();
  } else {
    alert("This product is out of stock.");
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// Checkout functionality (for demonstration, just logs to console)
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  console.log("Proceeding to checkout...");
  alert("Thanks for your purchase! Checkout complete.");
  cart = [];
  updateCart();
}

// Initial load of the cart when the page loads
window.onload = function () {
  updateCart();

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkout);
  }
};
