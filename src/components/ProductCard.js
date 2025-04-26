// src/components/ProductCard.js

function ProductCard({ product, onAddToCart }) {
    return (
      <div className="product-card">
        <img src={product.img} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product.id)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  