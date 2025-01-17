import React from 'react';
import { Link } from 'react-router-dom';
import groomingImage from '../assets/grooming.jpg'; // Path to grooming image
import daycareImage from '../assets/daycare.jpg';   // Path to daycare image
import veterinaryImage from '../assets/veterinary.jpg'; // Path to veterinary image
import medicineImage from '../assets/medicine.jpg'; // Path to medicine image

const Dashboard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f8ff' }}>
            <h1 style={{ margin: '20px 0' }}>Welcome to Your Dashboard!</h1>
            <h2 style={{ margin: '10px 0' }}>Select an Option:</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/pet-grooming" style={linkStyle}>
                    <img src={groomingImage} alt="Pet Grooming" style={imageStyle} />
                    <p>Pet Grooming</p>
                </Link>
                <Link to="/pet-day-care" style={linkStyle}>
                    <img src={daycareImage} alt="Pet Day Care" style={imageStyle} />
                    <p>Pet Day Care</p>
                </Link>
                <Link to="/pet-veterinary-visit" style={linkStyle}>
                    <img src={veterinaryImage} alt="Veterinary Visit" style={imageStyle} />
                    <p>Pet Veterinary Visit</p>
                </Link>
                <Link to="/pet-medicine-slip" style={linkStyle}>
                    <img src={medicineImage} alt="Medicine Slip" style={imageStyle} />
                    <p>About us</p>
                </Link>
            </div>
        </div>
    );
};

const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    margin: '10px',
};

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    textAlign: 'center',
};

export default Dashboard;
