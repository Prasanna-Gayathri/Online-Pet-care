import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PetVeterinaryBooking.css';

function PetVeterinaryBooking() {
    const location = useLocation();
    const navigate = useNavigate();

    const petDetails = location.state?.petDetails || {};
    const clinicData = location.state?.service || {}; // Get selected clinic data
    const clinicHours = clinicData.hours || ''; // Extract clinic hours from service data

    const [ownerName, setOwnerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    // Function to parse clinic hours
    const parseClinicHours = (hours) => {
        if (!hours) {
            console.error('Clinic hours are not defined');
            return { startTime: '00:00', endTime: '00:00' }; // Default values if hours are not provided
        }
        
        // Extracting the time range from the string
        const timeRange = hours.split(': ')[1]; // Get the "9 AM - 9 PM" part
        const [startTime, endTime] = timeRange.split(' - ').map(time => {
            const [hour, modifier] = time.trim().split(' '); // Split on space to get hour and modifier
            let [h, m] = hour.split(':').map(Number); // Split hour and minute
            
            // Convert to 24-hour format
            if (modifier === 'PM' && h !== 12) h += 12;
            if (modifier === 'AM' && h === 12) h = 0;
            
            return `${h.toString().padStart(2, '0')}:${m ? m : '00'}`; // Format to HH:MM
        });

        return { startTime, endTime };
    };

    // Generate available appointment times based on clinic hours
    const generateAvailableTimes = useCallback(() => {
        const { startTime, endTime } = parseClinicHours(clinicHours);
        console.log('Parsed Hours:', { startTime, endTime }); // Debugging output
        
        const times = [];
        const startDate = new Date(`1970-01-01T${startTime}:00`);
        const endDate = new Date(`1970-01-01T${endTime}:00`);

        // Generate time slots in 30-minute intervals
        for (let time = startDate; time <= endDate; time.setMinutes(time.getMinutes() + 30)) {
            times.push(time.toTimeString().slice(0, 5)); // Push HH:MM format
        }

        console.log('Available Times:', times); // Debugging output
        setAvailableTimes(times);
    }, [clinicHours]);

    useEffect(() => {
        generateAvailableTimes();
    }, [generateAvailableTimes]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking details submitted:", {
            ownerName,
            contactNumber,
            appointmentDate,
            appointmentTime,
            petDetails,
        });
        // Navigate to confirmation page
        navigate('/booking-confirmation');
    };

    return (
        <div className="booking-form">
            <h2>Book a Veterinary Appointment</h2>
            <h3>Pet Name: {petDetails.name}</h3>
            <h4>Pet Breed: {petDetails.breed}</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="ownerName">Owner's Name:</label>
                    <input
                        type="text"
                        id="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="appointmentDate">Appointment Date:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="appointmentTime">Appointment Time:</label>
                    <select
                        id="appointmentTime"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required
                    >
                        <option value="">Select Time</option>
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
}

export default PetVeterinaryBooking;
