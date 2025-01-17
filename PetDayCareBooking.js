// PetDayCareBooking.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PetDayCareBooking.css'; // Add CSS styling for the background image

const PetDayCareBooking = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate for redirection
    const service = location.state.service; // Access the selected daycare service
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [hours, setHours] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [totalPrice, setTotalPrice] = useState(0); // State for total price

    const shopHours = service.hours.split(': ')[1];
    const [openTime, closeTime] = shopHours.split(' - ').map(time => time.trim());

    useEffect(() => {
        generateTimeSlots(openTime, closeTime);
    }, [openTime, closeTime]);

    // Generate available time slots based on the daycare center's hours
    const generateTimeSlots = (start, end) => {
        const slots = [];
        let startHour = parseInt(start.split(' ')[0]);
        const startPeriod = start.split(' ')[1];
        let endHour = parseInt(end.split(' ')[0]);
        const endPeriod = end.split(' ')[1];

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

    // Calculate total price based on hours
    useEffect(() => {
        const price = hours ? hours * 50 : 0; // 50 Rupees per hour
        setTotalPrice(price);
    }, [hours]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Booking for ${service.name} at ${selectedTime} for ${hours} hours`);
        console.log(`Total Price: ${totalPrice} Rupees`);
        
        // Redirect to booking confirmation after submission
        navigate('/booking-confirmation', {
            state: { 
                message: 'Stylishly done! Your appointment is confirmed. Payment can be done after the service.' 
            }
        });
    };

    return (
        <div className="daycare-booking-form" style={{ backgroundImage: `url(${require('../assets/petbooking.jpg')})` }}>
            <h2>Day Care Booking Form</h2>
            <p><strong>Service Name:</strong> {service.name}</p>

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
                    Duration of Stay (hours):
                    <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} required />
                </label>
                <label>
                    Time Slot:
                    <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                        <option value="">Select Time</option>
                        {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Additional Information:
                    <textarea
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                        placeholder="Describe any special needs or information about your pet"
                    />
                </label>
                <div className="total-price">
                    <p>Total Price: {totalPrice} Rupees</p> {/* Display total price */}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PetDayCareBooking;
