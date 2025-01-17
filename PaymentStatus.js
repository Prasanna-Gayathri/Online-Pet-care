import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentStatus.css'; // Import your CSS file for styling

const PaymentStatus = () => {
    const location = useLocation();
    const { service, petName, breedType, age, timeSlot } = location.state || {};

    const invoice = (
        <div className="invoice">
            <h2>Payment Invoice</h2>
            <p><strong>Service:</strong> {service.name}</p>
            <p><strong>Pet Name:</strong> {petName}</p>
            <p><strong>Breed Type:</strong> {breedType}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Time Slot:</strong> {timeSlot}</p>
            <p><strong>Amount Due:</strong> ₹{service.price}</p>
            <h3>Status: Payment after Service!</h3>
        </div>
    );

    return (
        <div className="payment-status">
            {invoice}
        </div>
    );
};

export default PaymentStatus;
