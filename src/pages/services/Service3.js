import React from 'react';
import './ServicePage.css';

const Service3 = () => {
  const features = [
    {
      title: "Multi-Platform Content Creation",
      description: "Automatically generate and adapt content for TikTok, Instagram, Facebook, and LinkedIn",
      icon: "📱"
    },
    {
      title: "Content Scheduling & Publishing",
      description: "Schedule and publish content across all platforms at optimal times automatically",
      icon: "📅"
    },
    {
      title: "Engagement Monitoring",
      description: "Track engagement metrics and automatically respond to comments and messages",
      icon: "📊"
    },
    {
      title: "Trend Integration",
      description: "Automatically incorporate trending topics and hashtags into your content strategy",
      icon: "🔥"
    }
  ];

  const platforms = [
    {
      name: "TikTok",
      icon: "🎵",
      description: "Short-form video content with trending sounds and effects"
    },
    {
      name: "Instagram",
      icon: "📸",
      description: "Visual content with stories, reels, and feed posts"
    },
    {
      name: "Facebook",
      icon: "👥",
      description: "Community engagement and business page management"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professional content and B2B networking"
    }
  ];

  const benefits = [
    "Save 15+ hours per week on content creation",
    "Increase engagement by 200% across all platforms",
    "Maintain consistent posting schedule 24/7",
    "Automatically adapt content for each platform",
    "Track performance and optimize in real-time",
    "Scale your social media presence without hiring"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">📱 Social Media Automation</span>
              <h1>Automate Your Social Media Success</h1>
              <p>Transform your social media presence with intelligent content automation. We build custom workflows using n8n and Make.com that create, schedule, and manage content across TikTok, Instagram, Facebook, and LinkedIn, helping you grow your audience while saving hours every week.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Hours Saved Weekly</span>
                </div>
                <div className="stat">
                  <span className="stat-number">200%</span>
                  <span className="stat-label">More Engagement</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Platforms Automated</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Social Media Automation" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Comprehensive social media automation that handles your entire content workflow</p>
          
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

      {/* Platforms Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Platforms We Automate</h2>
          <div className="benefits-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">{platform.icon}</span>
                <div>
                  <span className="benefit-text" style={{fontWeight: 'bold', fontSize: '18px'}}>{platform.name}</span>
                  <br />
                  <span className="benefit-text" style={{fontSize: '14px', opacity: 0.8}}>{platform.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Social Media Automation?</h2>
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
              <h3>Content Strategy Analysis</h3>
              <p>We analyze your current social media presence and design a custom automation strategy</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Content Template Creation</h3>
              <p>Create engaging content templates that can be automatically adapted for each platform</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Automation Workflow Setup</h3>
              <p>Build custom n8n and Make.com workflows for content creation and scheduling</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Platform Integration & Launch</h3>
              <p>Connect all social media platforms and launch your automated content strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Automate Your Social Media?</h2>
          <p>Join businesses that have transformed their social media presence with intelligent automation</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service3; 