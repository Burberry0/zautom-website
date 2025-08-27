import React from 'react';
import './ServicePage.css';

const Service1 = () => {
  const features = [
    {
      title: "Multi-Channel Outreach",
      description: "Automate outreach across email, LinkedIn, Twitter, and other platforms simultaneously",
      icon: "📧"
    },
    {
      title: "Lead Generation Automation",
      description: "Automatically identify and qualify leads based on your criteria",
      icon: "🎯"
    },
    {
      title: "Follow-up Sequence Management",
      description: "Create intelligent follow-up sequences that adapt based on prospect responses",
      icon: "🔄"
    },
    {
      title: "Response Tracking & Analytics",
      description: "Track open rates, response rates, and conversion metrics in real-time",
      icon: "📊"
    }
  ];

  const benefits = [
    "Increase response rates by 300%",
    "Save 20+ hours per week on manual outreach",
    "Scale your outreach without hiring more staff",
    "Personalize messages at scale",
    "Never miss a follow-up opportunity",
    "Track ROI on every outreach campaign"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">📞 Outreach Services</span>
              <h1>Automated Outreach That Actually Works</h1>
              <p>Transform your lead generation with intelligent outreach automation. We build custom workflows using n8n and Make.com that generate qualified leads, nurture prospects, and convert contacts into customers across multiple channels.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">300%</span>
                  <span className="stat-label">Higher Response Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Hours Saved Weekly</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5x</span>
                  <span className="stat-label">More Leads Generated</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Outreach Automation" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Comprehensive outreach automation solutions built for your business</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose Our Outreach Automation?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Strategy</h3>
              <p>We analyze your current outreach process and design a custom automation strategy</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Workflow Development</h3>
              <p>Build custom n8n and Make.com workflows tailored to your specific needs</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Testing & Optimization</h3>
              <p>Test workflows thoroughly and optimize for maximum performance</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Launch & Monitor</h3>
              <p>Deploy your automation and provide ongoing monitoring and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Transform Your Outreach?</h2>
          <p>Join hundreds of businesses that have revolutionized their lead generation with automated outreach</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service1; 