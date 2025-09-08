import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Second<span>Market</span></div>
      <nav>
        <ul>
          <li><a href="#">Electronics</a></li>
          <li><a href="#">Furniture</a></li>
          <li><a href="#">Vehicles</a></li>
          <li><a href="#">Fashion</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
      <div className="nav-right">
        <input type="text" placeholder="Search" className="search" />
        <span className="cart">🛒<span className="badge">3</span></span>
        <a href="#" className="login">Login</a>
        <a href="#" className="btn sign-up">Sign Up</a>
        <a href="#" className="btn sell">Sell Item</a>
      </div>
    </header>
  );
}

export default Navbar;
