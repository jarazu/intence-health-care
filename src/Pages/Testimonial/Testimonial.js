import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="container mt-5">
            <div>
                <p className="review-top">Trusted Reviews</p>
                <h2>What My Patients Say</h2>
            </div>
            <div className="testimonial-individual">
                <h4>Alice Roxy</h4>
                <img src="https://image.freepik.com/free-photo/cheerful-teenager-with-toothy-smile-afro-hairstyle-holds-modern-cell-phone-chats-online-with-boyfriend_273609-30470.jpg" alt="" />
                <p>WiSpa is the gift that keeps on giving! Besides the 24- hour availability, the variety of services, and the next remedy reasonably entry fee, it’s a great place to meet the most unlikely variety of people. It’s really a must-do experience. Highly recommend!</p>
            </div>
            
            <div className="testimonial-individual">
                <h4>Alice Roxy</h4>
                <img src="https://image.freepik.com/free-photo/funny-dark-skinned-man-cannot-understand-what-girlfriend-wants-from-him-raises-hand-bewilderment_273609-23827.jpg" alt="" />
                <p>WiSpa is the gift that keeps on giving! Besides the 24- hour availability, the variety of services, and the next remedy reasonably entry fee, it’s a great place to meet the most unlikely variety of people. It’s really a must-do experience. Highly recommend!</p>
            </div>
            <div className="testimonial-individual">
                <h4>Alice Roxy</h4>
                <img src="https://img.freepik.com/free-photo/puzzled-hesitant-young-african-american-woman-spreads-palms-feels-unsure-looks-bewilderment-stands-questioned-wears-green-casual-t-shirt-one-color-with-background-takes-hard-decision_273609-38413.jpg?size=338&ext=jpg" alt="" />
                <p>WiSpa is the gift that keeps on giving! Besides the 24- hour availability, the variety of services, and the next remedy reasonably entry fee, it’s a great place to meet the most unlikely variety of people. It’s really a must-do experience. Highly recommend!</p>
            </div>
        </div>
    );
};

export default Testimonial;