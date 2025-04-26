// src/components/Header.js

function Header({ cartCount }) {
    return (
      <header>
        <div className="logo">Kapil Saini UV Wear</div>
        <nav>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="cart.html">
            Cart ({cartCount})
          </a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  