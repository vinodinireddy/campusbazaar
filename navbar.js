import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Second<span>Market</span></div>
      <nav>
        <ul>
          <li><Link to="/">Electronics</Link></li>
          <li><Link to="/">Furniture</Link></li>
          <li><Link to="/">Vehicles</Link></li>
          <li><Link to="/">Fashion</Link></li>
          <li><Link to="/">Services</Link></li>
        </ul>
      </nav>
      <div className="nav-right">
        <input type="text" placeholder="Search" className="search" />
        <span className="cart">🛒<span className="badge">3</span></span>
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="btn sign-up">Sign Up</Link>   {/* 👈 fixed */}
        <a href="#" className="btn sell">Sell Item</a>
      </div>
    </header>
  );
}

export default Navbar;

