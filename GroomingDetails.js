import React from 'react';
import { useLocation } from 'react-router-dom';

const GroomingDetails = () => {
    const location = useLocation();
    const { service } = location.state; // Get the service data passed from PetGrooming

    return (
        <div>
            <h2>{service.name}</h2>
            <p><strong>Address:</strong> {service.address}</p>
            <p><strong>Owner:</strong> {service.owner}</p>
            <p><strong>Hours:</strong> {service.hours}</p>
            <p><strong>Contact:</strong> {service.phone}</p>
            <p><strong>Landline:</strong> {service.landline}</p>
            <p><strong>Email:</strong> {service.email}</p>
            <p>{service.description}</p>
            {/* Add any other details you want to show */}
        </div>
    );
};

export default GroomingDetails;
