import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus('Sending...');
  
      emailjs.sendForm('service_uqetjso', 'template_8xgafwa', e.target, '4XSn8Nrjo-g5-RkpJ')
        .then((result) => {
          setStatus('Message sent successfully!');
          e.target.reset();
        }, (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('Failed to send message. Please try again later.');
        });
    };
  
    return (
      <div className="contact-page">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as possible.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    );
  };
  
  export default Contact; 