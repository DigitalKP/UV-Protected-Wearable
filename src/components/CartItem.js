// src/components/CartItem.js

function CartItem({ product, onRemove }) {
    return (
      <div className="cart-item">
        <img src={product.img} alt={product.name} className="cart-item-img" />
        <div className="cart-item-info">
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => onRemove(product.id)} className="remove-btn">Remove</button>
        </div>
      </div>
    );
  }
  
  export default CartItem;
  