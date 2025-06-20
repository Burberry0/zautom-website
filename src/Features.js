import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const services = [
    {
      id: 1,
      title: "Outreach Services",
      description: "Comprehensive outreach automation using n8n and Make.com. We build automated outreach campaigns that generate leads, nurture prospects, and convert contacts into customers across multiple channels.",
      icon: "📞",
      features: [
        "Multi-channel outreach campaigns",
        "Lead generation automation",
        "Follow-up sequence management",
        "Response tracking and analytics"
      ],
      color: "teal"
    },
    {
      id: 2,
      title: "Unified Email with Automated Proposals",
      description: "Streamlined email automation with integrated proposal generation, timeline management, and invoice processing. Connect your CRM to automatically create and send professional proposals and invoices.",
      icon: "📧",
      features: [
        "Automated proposal generation",
        "Timeline and milestone tracking",
        "Invoice creation and sending",
        "Payment status monitoring"
      ],
      color: "blue"
    },
    {
      id: 3,
      title: "Social Media Automation Content",
      description: "Automated content creation and posting for TikTok, Instagram, Facebook, and LinkedIn. We build workflows that generate, schedule, and publish engaging content across all your social media platforms.",
      icon: "📱",
      features: [
        "Multi-platform content scheduling",
        "Content generation workflows",
        "Engagement tracking and analytics",
        "Cross-platform posting automation"
      ],
      color: "purple"
    },
    {
      id: 4,
      title: "CRM & Sales Pipeline Automation",
      description: "Automated lead scoring, sales pipeline management, and customer relationship workflows using popular CRMs like Salesforce, HubSpot, or Pipedrive.",
      icon: "📊",
      features: [
        "Lead qualification automation",
        "Sales pipeline tracking",
        "Customer lifecycle management",
        "Deal stage automation"
      ],
      color: "orange"
    },
    {
      id: 5,
      title: "Analytics & Reporting Automation",
      description: "Automated data collection, analysis, and reporting workflows that pull data from multiple sources and generate insights.",
      icon: "📈",
      features: [
        "Multi-source data aggregation",
        "Automated report generation",
        "KPI tracking dashboards",
        "Alert and notification systems"
      ],
      color: "green"
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, monitoring, and support for your automation workflows. Keep your outreach, email, and social media automations running smoothly 24/7.",
      icon: "🛠️",
      features: [
        "24/7 workflow monitoring",
        "Performance optimization",
        "Bug fixes and updates",
        "Documentation and training"
      ],
      color: "red"
    }
  ];

  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "Gmail", icon: "📧" },
    { name: "Google Sheets", icon: "📈" },
    { name: "Salesforce", icon: "☁️" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Airtable", icon: "📊" },
    { name: "Notion", icon: "📝" },
    { name: "Trello", icon: "📋" },
    { name: "Asana", icon: "✅" },
    { name: "Monday.com", icon: "📅" },
    { name: "Zapier", icon: "⚡" },
    { name: "Microsoft Teams", icon: "👥" },
    { name: "Discord", icon: "🎮" },
    { name: "Shopify", icon: "🛒" },
    { name: "Stripe", icon: "💳" },
    { name: "QuickBooks", icon: "💰" },
    { name: "Mailchimp", icon: "📬" },
    { name: "Typeform", icon: "📋" },
    { name: "Webhook", icon: "🔗" },
    { name: "REST API", icon: "🌐" }
  ];

  return (
    <div className="features-page">
      
      {/* Hero Section */}
      <section className="features-hero">
        <div className="features-hero-content">
          <h1>Powerful Automation Services</h1>
          <p>Discover how Zautom can transform your business with intelligent automation solutions designed for scale and efficiency.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Integrations</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2>Our Core Services</h2>
          <p className="section-subtitle">Everything you need to automate your business processes</p>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className={`service-card ${service.color}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/service${service.id}`} className="service-btn">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <h2>Popular Integrations</h2>
          <p className="section-subtitle">Connect with the tools you already use</p>
          
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-item">
                <span className="integration-icon">{integration.icon}</span>
                <span className="integration-name">{integration.name}</span>
              </div>
            ))}
          </div>
          
          <div className="integrations-cta">
            <p>Don't see your favorite tool? We can build custom integrations!</p>
            <button className="btn btn-primary">Request Integration</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to Automate Your Business?</h2>
          <p>Join thousands of businesses that have transformed their operations with Zautom</p>
          <div className="cta-buttons">
            <Link to="/book-demo" className="btn btn-secondary">Schedule Demo</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Features; 