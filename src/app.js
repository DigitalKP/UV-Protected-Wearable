// Sample data fetched from products.json
const products = [
  {
    id: 1,
    name: "Bamboo Cool Coat",
    price: 799,
    stock: true,
    img: "images/coat1.jpg",
    description: "A bamboo fiber-based cool coat, naturally UV-resistant and antibacterial."
  },
  {
    id: 2,
    name: "UV Shield Polyester",
    price: 649,
    stock: false,
    img: "images/coat2.jpg",
    description: "A UV shield polyester coat designed to keep you safe and comfortable in the summer sun."
  },
  {
    id: 3,
    name: "Nylon Summer Zip-Up",
    price: 699,
    stock: true,
    img: "images/coat3.jpg",
    description: "A lightweight nylon zip-up with UV treatment, perfect for summer activities."
  }
];

// Cart array to store added items
let cart = [];

// Update Cart Display
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Add to Cart Function
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product.stock) {
    cart.push(product);
    updateCart();
    alert(`${product.name} has been added to your cart.`);
  } else {
    alert(`${product.name} is out of stock.`);
  }
}

// Display products dynamically on the page
window.onload = function () {
  const productContainer = document.getElementById("product-container");

  if (!productContainer) return;

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-img" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>${product.description}</p>
      <button class="add-to-cart-btn" id="add-coat${product.id}">Add to Cart</button>
    `;

    productContainer.appendChild(productDiv);

    // Add event listener for this product
    const btn = document.getElementById(`add-coat${product.id}`);
    btn.addEventListener("click", () => addToCart(product.id));
  });

  updateCart();
};
