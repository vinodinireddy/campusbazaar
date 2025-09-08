import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>
        Building the <span className="blue">Marketplace</span><br />
        <span className="green">Ecosystem</span> for the Future
      </h1>
      <p>
        We revolutionize second-hand trading by connecting buyers and sellers
        through transparent, AI-powered marketplace solutions that build trust
        and community.
      </p>
      <div className="buttons">
        <a href="#" className="btn primary">Start Shopping</a>
        <a href="#" className="btn secondary">Learn More</a>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for electronics, furniture, vehicles, fashion..."
        />
        <button>🔍</button>
      </div>
      <div className="stats">
        <div><h2>500K+</h2><p>Happy Customers</p></div>
        <div><h2>2M+</h2><p>Items Sold</p></div>
        <div><h2>98%</h2><p>Satisfaction Rate</p></div>
      </div>
    </section>
  );
}

export default Hero;
