import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
