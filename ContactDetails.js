import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactDetails = () => {
    const location = useLocation();
    const service = location.state?.service;
    const navigate = useNavigate();

    if (!service) {
        return <p>No service selected. Please go back and select a service.</p>;
    }

    return (
        <div className="contact-details">
            <h2>Contact Details</h2>
            <p><strong>Service Name:</strong> {service.name}</p>
            <p><strong>Owner:</strong> {service.owner}</p>
            <p><strong>Phone:</strong> {service.phone}</p>
            <p><strong>Email:</strong> {service.email}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default ContactDetails;
