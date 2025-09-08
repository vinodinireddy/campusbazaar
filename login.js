import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCaptcha === captcha) {
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid captcha, try again.");
      generateCaptcha();
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="avatar">👤</div>
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-group">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" required />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
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

          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        <div className="social-login">
          <button className="social-btn sm1">Login with Socialmedia 1</button>
          <button className="social-btn sm2">Login with Socialmedia 2</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
