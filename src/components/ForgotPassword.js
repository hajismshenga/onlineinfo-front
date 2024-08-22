import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Password reset instructions have been sent to your email.');
            } else {
                alert('Failed to send reset instructions');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="forgot-password">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Instructions</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
