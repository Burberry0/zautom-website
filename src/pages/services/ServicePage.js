import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = () => (
    <div className="service-cta">
        <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our services can help you achieve your business goals. Schedule a free consultation today.</p>
            <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                <Link to="/book-demo" className="btn btn-secondary">Schedule Demo</Link>
            </div>
        </div>
    </div>
);

export default ServiceCTA; 