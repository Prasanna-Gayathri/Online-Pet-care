// PetDayCare.js
import React from 'react';
import './ServiceList.css'; // Import your CSS file for styling
import daycareImg1 from '../assets/daycare1.jpg';
import daycareImg2 from '../assets/daycare2.jpg'; 
import daycareImg3 from '../assets/daycare3.jpg'; 
import daycareImg4 from '../assets/daycare4.jpg'; 
import daycareImg5 from '../assets/daycare5.jpg'; 
import daycareImg6 from '../assets/daycare6.jpg'; 
import daycareImg7 from '../assets/daycare7.jpg'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const daycareData = [
    {
        name: 'Happy Paws Daycare',
        address: '11, 4th Main Road, Velachery, Chennai, Tamil Nadu',
        owner: 'Mr. Arjun Singh',
        hours: 'Mon-Sun: 7 AM - 7 PM',
        img: daycareImg1,
        description: 'Safe and fun environment for pets with trained staff and engaging activities.',
        phone: '123-456-7890',
        email: 'arjun@happypaws.com',
        landline: '01-23456789',
    },
    {
        name: 'Furry Friends Daycare',
        address: '25, Kotturpuram, Chennai, Tamil Nadu',
        owner: 'Ms. Riya Gupta',
        hours: 'Mon-Fri: 8 AM - 6 PM',
        img: daycareImg2,
        description: 'A home away from home for your pets, providing love and care.',
        phone: '234-567-8901',
        email: 'riya@furryfriends.com',
        landline: '01-23456788',
    },
    {
        name: 'Pet Paradise Daycare',
        address: '30, Thiruvanmiyur, Chennai, Tamil Nadu',
        owner: 'Mr. Vikram Rao',
        hours: 'Mon-Sun: 8 AM - 8 PM',
        img: daycareImg3,
        description: 'Tailored care plans and activities for every pet.',
        phone: '345-678-9012',
        email: 'vikram@petparadise.com',
        landline: '01-23456787',
    },
    {
        name: 'Wagging Tails Daycare',
        address: '5, Ekkatuthangal, Chennai, Tamil Nadu',
        owner: 'Ms. Anushka Sharma',
        hours: 'Mon-Sat: 9 AM - 5 PM',
        img: daycareImg4,
        description: 'Luxurious boarding and daycare for dogs of all breeds.',
        phone: '456-789-0123',
        email: 'anushka@waggingtails.com',
        landline: '01-23456786',
    },
    {
        name: 'Canine Kingdom Daycare',
        address: '20, OMR, Chennai, Tamil Nadu',
        owner: 'Mr. Sanjay Mehta',
        hours: 'Tue-Sun: 9 AM - 6 PM',
        img: daycareImg5,
        description: 'A safe haven for your beloved pets with enriching activities.',
        phone: '567-890-1234',
        email: 'sanjay@caninekingdom.com',
        landline: '01-23456785',
    },
    {
        name: 'Paw Patrol Daycare',
        address: '45, Adyar, Chennai, Tamil Nadu',
        owner: 'Ms. Neha Kumar',
        hours: 'Mon-Fri: 7 AM - 5 PM',
        img: daycareImg6,
        description: 'Fun-filled daycare with lots of playtime and socialization.',
        phone: '678-901-2345',
        email: 'neha@pawpatrol.com',
        landline: '01-23456784',
    },
    {
        name: 'Fur Haven Daycare',
        address: '18, Anna Nagar, Chennai, Tamil Nadu',
        owner: 'Mr. Ramesh Iyer',
        hours: 'Mon-Sun: 8 AM - 7 PM',
        img: daycareImg7,
        description: 'Caring and attentive staff ensuring the best for your pets.',
        phone: '789-012-3456',
        email: 'ramesh@furhaven.com',
        landline: '01-23456783',
    },
];

const PetDayCare = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBooking = (service) => {
        navigate('/pet-day-care-booking', { state: { service } }); // Pass the selected service to the booking form
    };

    const handleFurtherInfo = (service) => {
        navigate('/contact-details', { state: { service } }); // Pass the service data to the further info page
    };

    return (
        <div className="service-list">
            <h2>Pet Day Care Services in Chennai</h2>
            <div className="card-container">
                {daycareData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.img} alt={service.name} className="service-image" />
                        <div className="service-details">
                            <h3>{service.name}</h3>
                            <p><strong>Address:</strong> {service.address}</p>
                            <p><strong>Owner:</strong> {service.owner}</p>
                            <p><strong>Hours:</strong> {service.hours}</p>
                            <p className="service-description">{service.description}</p>
                        </div>
                        <div className="service-buttons">
                            <button className="book-button" onClick={() => handleBooking(service)}>Book Now</button>
                            <button className="info-button" onClick={() => handleFurtherInfo(service)}>See Further Info</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetDayCare;
