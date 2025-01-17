import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Users' credentials
    const users = [
        { email: 'prasanna@gmail.com', password: 'Pras1155' },
        { email: 'sharmila@gmail.com', password: 'Sharmi2233' },
        { email: 'gayathri@gmail.com', password: 'Gg3333' },
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the entered email and password match any user
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } else {
            alert('Invalid email or password'); // Display error message
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-input">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
