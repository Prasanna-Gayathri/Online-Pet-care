// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to Pet Care!</h1>
            <p>Your one-stop solution for all pet services.</p>
            <div className="service-buttons">
                <Link to="/login" className="service-button">Log In</Link>
                <Link to="/signin" className="service-button">Sign In</Link>
            </div>
            <div className="services">
                <h2>Our Services</h2>
                <div className="service-card">
                    <h3>Pet Grooming</h3>
                    <p>Keep your pets looking their best!</p>
                    <Link to="/pet-grooming" className="service-link">Learn More</Link>
                </div>
                <div className="service-card">
                    <h3>Pet Day Care</h3>
                    <p>Your pet's home away from home!</p>
                    <Link to="/pet-day-care" className="service-link">Learn More</Link>
                </div>
                <div className="service-card">
                    <h3>Veterinary Visits</h3>
                    <p>Quality care for your furry friends!</p>
                    <Link to="/pet-veterinary-visit" className="service-link">Learn More</Link>
                </div>
                <div className="service-card">
                    <h3>About us</h3>
                    <p>See how our system works!</p>
                    <Link to="/pet-medicine-system" className="service-link">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
