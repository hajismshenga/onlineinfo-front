import React from 'react';
import logo from '../assets/smz.png'; // Ensure path is correct
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="System Logo" className="header-logo" />
      <div className="system-name">Online Information Records Management System</div>
    </div>
  );
}

export default Header;
