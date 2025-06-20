import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const Service2 = () => {
  const features = [
    {
      title: "Automated Proposal Generation",
      description: "Create professional proposals automatically based on client requirements and project scope",
      icon: "📄"
    },
    {
      title: "Timeline Management",
      description: "Automatically generate and update project timelines with real-time progress tracking",
      icon: "📅"
    },
    {
      title: "Invoice Automation",
      description: "Generate and send invoices automatically based on milestones and deliverables",
      icon: "💰"
    },
    {
      title: "Email Sequence Management",
      description: "Create intelligent email sequences that nurture clients through the entire process",
      icon: "📧"
    }
  ];

  const benefits = [
    "Reduce proposal creation time by 80%",
    "Eliminate manual invoice generation",
    "Improve client communication consistency",
    "Track project progress automatically",
    "Reduce administrative overhead",
    "Increase client satisfaction with timely updates"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">📧 Unified Email Services</span>
              <h1>Streamline Your Client Communication</h1>
              <p>Automate your entire client communication workflow with unified email services. From proposal generation to invoice delivery, we create seamless automation workflows using n8n and Make.com that keep your clients informed and your business running smoothly.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">80%</span>
                  <span className="stat-label">Time Saved</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Automated</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Client Updates</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Unified Email" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Complete email automation solutions that handle your entire client communication process</p>
          
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
          <h2>Why Choose Our Unified Email Services?</h2>
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
              <h3>Workflow Analysis</h3>
              <p>We analyze your current email and document processes to identify automation opportunities</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Template Creation</h3>
              <p>Create professional templates for proposals, timelines, and invoices that match your brand</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Automation Setup</h3>
              <p>Build custom n8n and Make.com workflows that trigger based on your business rules</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Integration & Testing</h3>
              <p>Integrate with your existing tools and thoroughly test all automation workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Unify Your Email Communication?</h2>
          <p>Join businesses that have eliminated manual email tasks and improved client satisfaction</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service2; 