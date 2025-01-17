// src/components/BookingForPet.js
import React, { useState } from 'react';
import PetDayCare from './PetDayCare';
import PetDayCareBooking from './PetDayCareBooking';
import './BookingForPet.css'; // Optional: create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const BookingForPet = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        petName: '',
        ownerName: '',
        contactNumber: '',
        additionalInfo: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic to save form data to your backend here
        setIsSubmitted(true);
    };

    return (
        <div className="booking-container">
            <h2>Book Your Pet Day Care Service</h2>

            {!isSubmitted ? (
                <>
                    <PetDayCare onServiceSelect={handleServiceSelect} />
                    {selectedService && <PetDayCareBooking service={selectedService} />}
                    
                    <form onSubmit={handleSubmit} className="booking-form">
                        <h3>Booking Details</h3>
                        <label>
                            Pet Name:
                            <input
                                type="text"
                                name="petName"
                                value={formData.petName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Owner Name:
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Contact Number:
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Additional Info:
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                placeholder="Any special needs for your pet?"
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </>
            ) : (
                <div className="confirmation-message">
                    <h3>Stylishly Done!</h3>
                    <p>Your appointment is fixed. Payment can be made after the service.</p>
                    <button onClick={() => navigate('/home')}>Go to Home</button> {/* Redirect to home or desired route */}
                </div>
            )}
        </div>
    );
};

export default BookingForPet;
