import React from 'react';
import './ServicePage.css';

const Service5 = () => {
  const features = [
    {
      title: "Lead Scoring & Qualification",
      description: "Automatically score and qualify leads based on behavior and engagement patterns",
      icon: "🎯"
    },
    {
      title: "Pipeline Management",
      description: "Automatically move leads through your sales pipeline with intelligent workflows",
      icon: "🔄"
    },
    {
      title: "Follow-up Automation",
      description: "Create intelligent follow-up sequences that adapt based on prospect responses",
      icon: "📧"
    },
    {
      title: "Sales Activity Tracking",
      description: "Automatically track all sales activities and update CRM records in real-time",
      icon: "📊"
    }
  ];

  const pipelineStages = [
    {
      name: "Lead Generation",
      icon: "🔍",
      description: "Automated lead capture and initial qualification"
    },
    {
      name: "Lead Nurturing",
      icon: "🌱",
      description: "Intelligent nurturing sequences and engagement tracking"
    },
    {
      name: "Opportunity Management",
      icon: "💼",
      description: "Automated opportunity creation and pipeline movement"
    },
    {
      name: "Deal Closure",
      icon: "✅",
      description: "Automated contract generation and deal completion"
    }
  ];

  const benefits = [
    "Increase sales conversion rates by 150%",
    "Reduce sales cycle time by 40%",
    "Automatically qualify and score leads",
    "Never miss a follow-up opportunity",
    "Track all sales activities automatically",
    "Scale your sales team without hiring"
  ];

  return (
    <div className="service-page">
      
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <span className="service-badge">💼 CRM & Sales Pipeline</span>
              <h1>Automate Your Sales Success</h1>
              <p>Revolutionize your sales process with intelligent CRM and pipeline automation. We build custom workflows using n8n and Make.com that qualify leads, manage your pipeline, and close deals automatically, helping you increase revenue while reducing manual work.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">150%</span>
                  <span className="stat-label">Higher Conversions</span>
                </div>
                <div className="stat">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Faster Sales Cycle</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Lead Processing</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Schedule Demo</button>
              </div>
            </div>
            <div className="service-hero-image">
              <img src="https://images.unsplash.com/photo-1600880292203-942bb68b3be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="CRM and Sales Pipeline Automation" className="service-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>What We Deliver</h2>
          <p className="section-subtitle">Complete sales automation that handles your entire pipeline from lead to close</p>
          
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

      {/* Pipeline Stages Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Sales Pipeline Stages We Automate</h2>
          <div className="benefits-grid">
            {pipelineStages.map((stage, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">{stage.icon}</span>
                <div>
                  <span className="benefit-text" style={{fontWeight: 'bold', fontSize: '18px'}}>{stage.name}</span>
                  <br />
                  <span className="benefit-text" style={{fontSize: '14px', opacity: 0.8}}>{stage.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Sales Automation?</h2>
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
              <h3>Sales Process Analysis</h3>
              <p>We analyze your current sales process and identify automation opportunities</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>CRM Integration Setup</h3>
              <p>Integrate with your existing CRM and set up data synchronization</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Automation Workflow Creation</h3>
              <p>Build custom n8n and Make.com workflows for each stage of your pipeline</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & Optimization</h3>
              <p>Test all workflows thoroughly and optimize for maximum performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Automate Your Sales Process?</h2>
          <p>Join businesses that have transformed their sales with intelligent automation</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Start Your Free Trial</button>
            <button className="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Service5; 