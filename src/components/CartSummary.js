// src/components/CartSummary.js

function CartSummary({ cart, totalPrice }) {
    return (
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <p>Total: ₹{totalPrice}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    );
  }
  
  export default CartSummary;
  