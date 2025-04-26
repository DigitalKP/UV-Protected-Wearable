// For saving and loading cart data using localStorage
export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  export function loadCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
  