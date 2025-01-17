import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
    const location = useLocation();
    const service = location.state.service; // Access the passed service
    const navigate = useNavigate(); // Initialize navigate
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState('haircut'); // Default selection

    const shopHours = service.hours.split(': ')[1];
    const [openTime, closeTime] = shopHours.split(' - ').map(time => time.trim());

    useEffect(() => {
        generateTimeSlots(openTime, closeTime);
    }, [openTime, closeTime]);

    // Generate available time slots based on shop hours
    const generateTimeSlots = (start, end) => {
        const slots = [];
        let startHour = parseInt(start.split(' ')[0]);
        const startPeriod = start.split(' ')[1];
        let endHour = parseInt(end.split(' ')[0]);
        const endPeriod = end.split(' ')[1];

        // Adjust for AM/PM
        if (startPeriod === 'PM' && startHour < 12) startHour += 12;
        if (endPeriod === 'PM' && endHour < 12) endHour += 12;

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour % 24}:${minute === 0 ? '00' : minute}`;
                slots.push(time);
            }
        }
        setTimeSlots(slots);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can handle the booking process (e.g., save to a database)
        console.log(`Booking for ${service.name} at ${selectedTime} for ${selectedServiceType}`);

        // Redirect to the confirmation page
        navigate('/booking-confirmation');
    };

    return (
        <div className="booking-form">
            <h2>Booking Form</h2>
            <p><strong>Service Name:</strong> {service.name}</p>
            
            <label>
                <strong>Select Service Type:</strong>
                <select value={selectedServiceType} onChange={(e) => setSelectedServiceType(e.target.value)}>
                    <option value="haircut">Haircut - ₹{service.price.haircut}</option>
                    <option value="haircutGrooming">Haircut + Grooming - ₹{service.price.haircutGrooming}</option>
                </select>
            </label>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Pet Name:
                    <input type="text" required />
                </label>
                <label>
                    Breed:
                    <input type="text" required />
                </label>
                <label>
                    Age:
                    <input type="number" required />
                </label>
                <label>
                    Timing Slot:
                    <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                        <option value="">Select Time</option>
                        {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
