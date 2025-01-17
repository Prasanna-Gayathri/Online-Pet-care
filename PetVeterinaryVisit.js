import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetVeterinaryVisit.css';
import vetImg1 from '../assets/vetImg1.jpg';
import vetImg2 from '../assets/vetImg2.jpg';
import vetImg3 from '../assets/vetImg3.jpg';
import vetImg4 from '../assets/vetImg4.jpg';
import vetImg5 from '../assets/vetImg5.jpg';
import vetImg6 from '../assets/vetImg6.jpg';
import vetImg7 from '../assets/vetImg7.jpg';

const vetData = [
    {
        name: 'Happy Paws Veterinary Clinic',
        address: '12, T. Nagar, Chennai, Tamil Nadu',
        owner: 'Dr. Priya Menon',
        hours: 'Mon-Sun: 9 AM - 9 PM',
        img: vetImg1,
        description: 'Compassionate care for your pets with a full range of veterinary services.',
        email: 'happypaws@example.com',
        phone: '9876543210'
    },
    {
        name: 'Furry Tails Veterinary Hospital',
        address: '25, Mylapore, Chennai, Tamil Nadu',
        owner: 'Dr. Vikram Reddy',
        hours: 'Mon-Sat: 8 AM - 6 PM',
        img: vetImg2,
        description: 'Advanced medical care for your pets with a focus on comfort and well-being.',
        email: 'furrytails@example.com',
        phone: '8765432109'
    },
    {
        name: 'Paws and Claws Veterinary Clinic',
        address: '45, Anna Nagar, Chennai, Tamil Nadu',
        owner: 'Dr. Anjali Gupta',
        hours: 'Mon-Sun: 10 AM - 8 PM',
        img: vetImg3,
        description: 'Expert veterinary services with a gentle touch for all your pets.',
        email: 'pawsandclaws@example.com',
        phone: '7654321098'
    },
    {
        name: 'Canine Care Veterinary Hospital',
        address: '30, Velachery, Chennai, Tamil Nadu',
        owner: 'Dr. Arvind Rao',
        hours: 'Mon-Sat: 9 AM - 5 PM',
        img: vetImg4,
        description: 'Providing top-notch medical care and vaccinations for your furry friends.',
        email: 'caninecare@example.com',
        phone: '6543210987'
    },
    {
        name: 'Pet Wellness Clinic',
        address: '50, Kotturpuram, Chennai, Tamil Nadu',
        owner: 'Dr. Neeta Iyer',
        hours: 'Mon-Fri: 8 AM - 7 PM',
        img: vetImg5,
        description: 'Comprehensive pet care services including dental and surgical care.',
        email: 'petwellness@example.com',
        phone: '5432109876'
    },
    {
        name: 'Vet Care Animal Hospital',
        address: '15, Ekkatuthangal, Chennai, Tamil Nadu',
        owner: 'Dr. Raghav Sharma',
        hours: 'Mon-Sun: 9 AM - 6 PM',
        img: vetImg6,
        description: 'Specialized care for pets with modern diagnostic and treatment options.',
        email: 'vetcare@example.com',
        phone: '4321098765'
    },
    {
        name: 'Healthy Pets Veterinary Clinic',
        address: '20, Taramani, Chennai, Tamil Nadu',
        owner: 'Dr. Suman Verma',
        hours: 'Mon-Sat: 10 AM - 7 PM',
        img: vetImg7,
        description: 'A welcoming place for pets with a focus on preventative health care.',
        email: 'healthypets@example.com',
        phone: '3210987654'
    },
];

const PetVeterinaryVisit = () => {
    const navigate = useNavigate();

    const handleBooking = (service) => {
        navigate('/pet-veterinary-booking', { state: { service } }); // Navigate to the booking page with selected service details
    };

    const handleFurtherInfo = (service) => {
        navigate('/contact-details', { state: { service } }); // Navigate to contact details page
    };

    return (
        <div className="service-list">
            <h2>Veterinary Services in Chennai</h2>
            <div className="card-container">
                {vetData.map((service, index) => (
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

export default PetVeterinaryVisit;
