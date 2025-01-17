import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [greetingVisible, setGreetingVisible] = useState(false); // State to control greeting visibility
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Registration logic (you can add your logic here)
        setGreetingVisible(true); // Show greeting when the button is clicked
        navigate('/dashboard');
    };

    return (
        <div className="signin-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-input">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {greetingVisible && (
                <p className="greeting-message">Welcome to our website!</p> // Greeting message
            )}
        </div>
    );
};

export default SignInPage;
