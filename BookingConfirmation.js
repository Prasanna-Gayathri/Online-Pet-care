// src/components/BookingConfirmation.js
import React from 'react';
import './BookingConfirmation.css'; // Optional: create a CSS file for styling

const BookingConfirmation = () => {
    return (
        <div className="confirmation-container">
            <h1>Done!</h1>
            <p>Your schedule is booked.</p>
            <p>Payment can be done after the service.</p>
        </div>
    );
};

export default BookingConfirmation;
