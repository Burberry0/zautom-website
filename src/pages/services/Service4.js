import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const Service4 = () => {
  const features = [
    {
      title: "Automated Report Generation",
      description: "Generate comprehensive reports automatically from multiple data sources",
      icon: "📊"
    },
    {
      title: "Real-Time Dashboard Creation",
      description: "Create live dashboards that update automatically with the latest data",
      icon: "📈"
    },
    {
      title: "Data Integration & Cleaning",
      description: "Automatically collect, clean, and integrate data from various sources",
      icon: "🔗"
    },
    {
      title: "Scheduled Report Delivery",
      description: "Automatically send reports to stakeholders at scheduled intervals",
      icon: "📧"
    }
  ];

  const reportTypes = [
    {
      name: "Sales Reports",
      icon: "💰",
      description: "Revenue tracking, conversion rates, and sales performance metrics"
    },
    {
      name: "Marketing Analytics",
      icon: "📢",
      description: "Campaign performance, ROI tracking, and audience insights"
    },
    {
      name: "Operational Reports",
      icon: "⚙️",
      description: "Process efficiency, resource utilization, and operational metrics"
    },
    {
      name: "Financial Reports",
      icon: "📋",
      description: "Profit & loss, cash flow, and financial performance analysis"
    }
  ];

  const benefits = [
    "Save 10+ hours per week on report creation",
    "Eliminate manual data entry and errors",
    "Get real-time insights across all departments",
    "Improve decision-making with accurate data",
    "Automatically share reports with stakeholders",
    "Scale reporting without additional staff"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">📊 Analytics & Reporting</span>
              <h1>Automate Your Data Insights</h1>
              <p>Transform your business intelligence with automated analytics and reporting. We build custom workflows using n8n and Make.com that collect, analyze, and present your data automatically, giving you real-time insights without the manual work.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Hours Saved Weekly</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Error-Free Reports</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Real-Time Data</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Analytics and Reporting" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Complete analytics automation that transforms your data into actionable insights</p>
          
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

      {/* Report Types Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Types of Reports We Automate</h2>
          <div className="benefits-grid">
            {reportTypes.map((report, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">{report.icon}</span>
                <div>
                  <span className="benefit-text" style={{fontWeight: 'bold', fontSize: '18px'}}>{report.name}</span>
                  <br />
                  <span className="benefit-text" style={{fontSize: '14px', opacity: 0.8}}>{report.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Analytics Automation?</h2>
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
              <h3>Data Source Analysis</h3>
              <p>We identify all your data sources and determine the best way to integrate them</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Report Requirements Gathering</h3>
              <p>Define what reports you need and how often they should be generated</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Automation Workflow Setup</h3>
              <p>Build custom n8n and Make.com workflows for data collection and report generation</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Dashboard Creation & Testing</h3>
              <p>Create interactive dashboards and thoroughly test all automation workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Automate Your Analytics?</h2>
          <p>Join businesses that have transformed their decision-making with automated insights</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service4; 