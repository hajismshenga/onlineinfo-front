// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MinistryText from './components/MinistryText';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
    return (
        <Router>
            <div className="outer-box">
                <div className="left-side">
                    <Header />
                    <nav className="navbar">
                        <a href="/">Home</a>
                        <a href="#about">About</a>
                        <a href="/login">Sign In</a>
                        <a href="/register">Sign Up</a>
                    </nav>
                </div>
                <div className="right-side">
                    <MinistryText />
                </div>
                <div className="inner-box">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
