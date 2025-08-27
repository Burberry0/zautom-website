import React from 'react';
import './ServicePage.css';

const Service6 = () => {
  const features = [
    {
      title: "Custom API Development",
      description: "Build custom APIs and connectors for any third-party service or internal system",
      icon: "🔌"
    },
    {
      title: "Legacy System Integration",
      description: "Connect modern automation platforms with legacy systems and databases",
      icon: "🔄"
    },
    {
      title: "Data Transformation",
      description: "Transform and map data between different systems and formats automatically",
      icon: "🔄"
    },
    {
      title: "Webhook Development",
      description: "Create custom webhooks and event-driven integrations for real-time data flow",
      icon: "⚡"
    }
  ];

  const integrationTypes = [
    {
      name: "CRM Integrations",
      icon: "📊",
      description: "Connect any CRM system with your automation workflows"
    },
    {
      name: "ERP Integrations",
      icon: "🏢",
      description: "Integrate enterprise resource planning systems seamlessly"
    },
    {
      name: "Marketing Tools",
      icon: "📢",
      description: "Connect marketing automation and analytics platforms"
    },
    {
      name: "Custom Databases",
      icon: "🗄️",
      description: "Integrate with custom databases and data warehouses"
    }
  ];

  const benefits = [
    "Connect any system or service together",
    "Eliminate manual data entry between systems",
    "Create real-time data synchronization",
    "Build custom workflows for unique business needs",
    "Scale integrations as your business grows",
    "Reduce development time and costs"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">🔌 Custom Connector Development</span>
              <h1>Connect Everything Together</h1>
              <p>Break down data silos with custom connector development. We build specialized integrations using n8n and Make.com that connect any system, service, or database, creating seamless data flow across your entire business ecosystem.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">System Compatibility</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Real-Time</span>
                  <span className="stat-label">Data Sync</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Custom</span>
                  <span className="stat-label">Solutions</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Custom Connector Development" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Complete integration solutions that connect your entire business ecosystem</p>
          
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

      {/* Integration Types Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Types of Integrations We Build</h2>
          <div className="benefits-grid">
            {integrationTypes.map((integration, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">{integration.icon}</span>
                <div>
                  <span className="benefit-text" style={{fontWeight: 'bold', fontSize: '18px'}}>{integration.name}</span>
                  <br />
                  <span className="benefit-text" style={{fontSize: '14px', opacity: 0.8}}>{integration.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Custom Connector Development?</h2>
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
              <h3>System Analysis</h3>
              <p>We analyze your existing systems and identify integration requirements</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>API Documentation Review</h3>
              <p>Review API documentation and determine the best integration approach</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Custom Connector Development</h3>
              <p>Build custom connectors and workflows using n8n and Make.com</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & Deployment</h3>
              <p>Thoroughly test all integrations and deploy to production</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Connect Your Systems?</h2>
          <p>Join businesses that have eliminated data silos with custom integrations</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service6; 