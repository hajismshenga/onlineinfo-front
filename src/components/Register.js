import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Worksite" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Register</button>
    </div>
  );
}

export default Register;
