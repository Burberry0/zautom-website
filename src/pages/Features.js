import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Supercharge Your Business?</h2>
        <p>Explore Zautom's features and see how we can help you achieve your goals.</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Start Free Trial</button>
          <Link to="/book-demo" className="cta-btn secondary">Book a Demo</Link>
        </div>
      </div>
    </section>
  );

export default CTA; 