import React, { useState, useEffect } from "react";
import "./Signup.css";

function Signup() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  // generate captcha when page loads
  useEffect(() => {
    generateCaptcha();
  }, []);

  // captcha generator
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha === captcha) {
      alert("✅ Registration successful!");
    } else {
      alert("❌ Wrong captcha, try again.");
      generateCaptcha();
      setUserCaptcha("");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>

          {/* Captcha Section */}
          <div className="captcha-box">
            <span className="captcha">{captcha}</span>
            <button type="button" onClick={generateCaptcha}>↻</button>
          </div>
          <input
            type="text"
            placeholder="Enter captcha"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
            required
          />

          <button type="submit" className="signup-btn">Register</button>

          <p className="signin-text">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
