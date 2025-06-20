import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import '../App.css'; 

const BookDemo = () => {
  return (
    <div className="service-page">
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '48px' }}>Book a Demo</h1>
        <InlineWidget url="https://calendly.com/shopworldwide3000/demo?month=2025-06" styles={{ height: '1000px' }} />
      </div>
    </div>
  );
};

export default BookDemo; 