import React from 'react';
import './PaymentConfirmation.css'; // You can create a CSS file for styling

const PaymentConfirmation = () => {
    return (
        <div className="payment-confirmation">
            <h2>Booking Successful!</h2>
            <p>Your grooming appointment has been successfully booked.</p>
            <p>Payment can be made after the service is completed.</p>
            <p>Thank you for choosing our services!</p>
            <button onClick={() => window.history.back()}>Back to Services</button>
        </div>
    );
};

export default PaymentConfirmation;
