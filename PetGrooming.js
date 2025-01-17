import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetGrooming.css';
import groomingImg1 from '../assets/groomingImg1.jpg';
import groomingImg2 from '../assets/groomingImg2.jpg';
import groomingImg3 from '../assets/groomingImg3.jpg';
import groomingImg4 from '../assets/groomingImg4.jpg';
import groomingImg5 from '../assets/groomingImg5.jpg';
import groomingImg6 from '../assets/groomingImg6.jpg';
import groomingImg7 from '../assets/groomingImg7.jpg';

const groomingData = [
    {
        name: 'Pawfection Grooming',
        address: '10, Kotturpuram, Chennai, Tamil Nadu',
        owner: 'Ms. Priya Rao',
        hours: 'Mon-Sun: 9 AM - 7 PM',
        phone: '9876543210',
        email: 'priya.rao@example.com',
        img: groomingImg1,
        price: {
            haircut: 500,
            haircutGrooming: 800
        },
        description: 'Expert grooming services to keep your pets looking their best.',
    },
    {
        name: 'Furry Tails Grooming',
        address: '15, Anna Nagar, Chennai, Tamil Nadu',
        owner: 'Mr. Ravi Kumar',
        hours: 'Mon-Sat: 8 AM - 6 PM',
        phone: '9876543222',
        email: 'ravi.kumar@example.com',
        img: groomingImg2,
        price: {
            haircut: 600,
            haircutGrooming: 900
        },
        description: 'Professional grooming for all breeds with a loving touch.',
    },
    {
        name: 'Grooming Paradise',
        address: '20, T Nagar, Chennai, Tamil Nadu',
        owner: 'Ms. Sneha Iyer',
        hours: 'Mon-Sun: 10 AM - 8 PM',
        phone: '9876543233',
        email: 'sneha.iyer@example.com',
        img: groomingImg3,
        price: {
            haircut: 550,
            haircutGrooming: 850
        },
        description: 'A haven for your furry friends with personalized grooming.',
    },
    {
        name: 'Puppy Love Grooming',
        address: '30, Velachery, Chennai, Tamil Nadu',
        owner: 'Mr. Anil Nair',
        hours: 'Mon-Sun: 9 AM - 7 PM',
        phone: '9876543244',
        email: 'anil.nair@example.com',
        img: groomingImg4,
        price: {
            haircut: 500,
            haircutGrooming: 800
        },
        description: 'Where your puppy gets the love and care they deserve.',
    },
    {
        name: 'Elegant Paws Grooming',
        address: '5, OMR, Chennai, Tamil Nadu',
        owner: 'Ms. Meera Singh',
        hours: 'Mon-Fri: 9 AM - 5 PM',
        phone: '9876543255',
        email: 'meera.singh@example.com',
        img: groomingImg5,
        price: {
            haircut: 650,
            haircutGrooming: 950
        },
        description: 'Grooming services that enhance your pet’s beauty.',
    },
    {
        name: 'Canine Spa',
        address: '45, Adyar, Chennai, Tamil Nadu',
        owner: 'Mr. Vikram Mehta',
        hours: 'Mon-Sun: 8 AM - 7 PM',
        phone: '9876543266',
        email: 'vikram.mehta@example.com',
        img: groomingImg6,
        price: {
            haircut: 700,
            haircutGrooming: 1000
        },
        description: 'Luxury grooming for your furry friends.',
    },
    {
        name: 'The Dog Groomery',
        address: '18, Mylapore, Chennai, Tamil Nadu',
        owner: 'Ms. Kavita Joshi',
        hours: 'Mon-Sat: 9 AM - 6 PM',
        phone: '9876543277',
        email: 'kavita.joshi@example.com',
        img: groomingImg7,
        price: {
            haircut: 550,
            haircutGrooming: 850
        },
        description: 'Expert groomers dedicated to pampering your pets.',
    },
];

const PetGrooming = () => {
    const navigate = useNavigate();

    const handleBookNow = (service) => {
        navigate('/booking', {
            state: { service } // Pass the selected service to BookingForm
        });
    };

    const handleSeeFurtherInfo = (service) => {
        navigate('/contact-details', {
            state: { service } // Pass the selected service to ContactDetails
        });
    };

    return (
        <div className="service-list">
            <h2>Pet Grooming Services</h2>
            <div className="card-container">
                {groomingData.map((service, index) => (
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
                            <button className="book-button" onClick={() => handleBookNow(service)}>Book Now</button>
                            <button className="info-button" onClick={() => handleSeeFurtherInfo(service)}>See Further Info</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetGrooming;
