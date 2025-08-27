import React from 'react';
import { CalendlyButton } from '../components/Layout';

const BookDemo = () => {
  return (
    <div className="service-page">
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '48px' }}>Book a Demo</h1>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Ready to see how Zautom can transform your business? Book a free discovery call where we'll:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto 32px auto', color: '#e2e8f0' }}>
            <li style={{ marginBottom: '16px' }}>✓ Audit your current workflows and identify automation opportunities</li>
            <li style={{ marginBottom: '16px' }}>✓ Show you live automation demos tailored to your business</li>
            <li style={{ marginBottom: '16px' }}>✓ Provide expert advice on scaling with automation</li>
            <li style={{ marginBottom: '16px' }}>✓ Offer a free custom website chatbot for your business</li>
          </ul>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CalendlyButton className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }}>
            Schedule Your Free Discovery Call
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
};

export default BookDemo; 