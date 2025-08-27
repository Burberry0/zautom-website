import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Features from './Features';
import Service1 from './pages/services/Service1';
import Service2 from './pages/services/Service2';
import Service3 from './pages/services/Service3';
import Service4 from './pages/services/Service4';
import Service5 from './pages/services/Service5';
import Service6 from './pages/services/Service6';
import BookDemo from './pages/BookDemo';
import Contact from './pages/Contact';
import Layout, { CalendlyButton } from './components/Layout';

const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Special handling for process section rows
          if (entry.target.classList.contains('process_section')) {
            const rows = entry.target.querySelectorAll('.timeline-row');
            rows.forEach((row, index) => {
              setTimeout(() => {
                row.classList.add('visible');
              }, index * 200); // Stagger the animations
            });
          }
        }
      });
    }, observerOptions);

    // Observe all sections that should animate on scroll
    const sections = document.querySelectorAll('.feature-section, .why-us-section, .badge-section, .process_section, .services_section');
    sections.forEach(section => observer.observe(section));

    // Add scroll spy functionality for navigation highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link[onclick*="scrollToSection"]');
      
      let current = '';
      const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        const sectionId = link.getAttribute('onclick')?.match(/scrollToSection\('([^']+)'\)/)?.[1];
        if (sectionId === current) {
          link.setAttribute('data-active', 'true');
        } else {
          link.removeAttribute('data-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section" id="home">
        <div className="hero-text">
          <h1>
            Streamline Your Workflow with Zautom
          </h1>
          <p>
            Empowering businesses to automate processes, reduce manual tasks, and scale smarter—faster.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
                  const elementPosition = servicesSection.offsetTop - headerHeight - 20;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn btn-primary"
            >
              Learn More
            </button>
            <CalendlyButton className="btn btn-secondary">
              Book a Demo
            </CalendlyButton>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/assets/simplified.png" alt="Zautom Automation Platform" className="hero-img" draggable="false" />
        </div>


      </section>
      
      <section className="why-us-section" id="why-us">
         <h2>
           Why Businesses Choose Zautom to Save Time, Eliminate Busywork, and Scale Smarter
         </h2>
         <div style={{ textAlign: 'center', marginTop: '32px' }}>
           <button 
             onClick={() => {
               const servicesSection = document.getElementById('services');
               if (servicesSection) {
                 const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
                 const elementPosition = servicesSection.offsetTop - headerHeight - 20;
                 window.scrollTo({
                   top: elementPosition,
                   behavior: 'smooth'
                 });
               }
             }}
             className="btn btn-secondary"
             style={{ 
               fontSize: '16px', 
               padding: '12px 24px',
               background: 'rgba(255, 255, 255, 0.1)',
               border: '1px solid rgba(255, 255, 255, 0.2)',
               color: 'white'
             }}
           >
             Explore Our Services →
           </button>
         </div>
      </section>

      {/* Feature 1: All-in-One Automation */}
      <section className="feature-section" id="features">
        <div className="feature-text">
          <h2>All-in-One Automation Platform Built for Scale</h2>
          <p>
            Stop wasting time with scattered apps and manual tasks. Zautom brings your workflows, integrations, and automation logic into one seamless platform. From trigger to action, your systems finally talk to each other—so your business runs smoother, faster, and smarter.
          </p>
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
                const elementPosition = servicesSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="btn btn-primary"
          >
            Learn More
          </button>
        </div>
        <div className="feature-image-container">
          <img src="/assets/all-in-one-marketing-platforms-1.png" alt="All-in-One Automation Platform" className="feature-image" />
        </div>
      </section>

      {/* Feature 2: Effortless Automation */}
      <section className="feature-section" id="automation">
        <div className="feature-image-container">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Workflow Automation Interface" className="feature-image" />
        </div>
        <div className="feature-text">
          <h2>Reclaim Hours with Effortless Automation</h2>
          <p>
            Manually updating spreadsheets, copying data between apps, and chasing follow-ups? Not anymore. Zautom automates your repetitive tasks across tools like Slack, Gmail, Trello, and more—so your team can focus on work that actually moves the needle. Build once, run forever.
          </p>
          <button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
                const elementPosition = servicesSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="btn btn-primary"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Trustworthy Automation Section */}
      <section className="feature-section" id="trust">
          <div className="feature-text">
              <h2>Automation You Can Trust, Even When You're Off the Clock</h2>
              <p>
                  Zautom keeps your systems running—day, night, and weekends. With real-time monitoring, fail-safes, and smart alerts, you'll never wonder if a workflow fired or a task slipped through the cracks. Set it, forget it, and stay confidently hands-off.
              </p>
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 100;
                    const elementPosition = servicesSection.offsetTop - headerHeight - 20;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="btn btn-primary"
              >
                Learn More
              </button>
          </div>
          <div className="feature-image-container">
              <img src="/assets/automtn_pltforms.jpg" alt="Trustworthy Automation" className="feature-image"/>
          </div>
      </section>

      {/* Process Section */}
      <section className="process_section" id="process">
        <div className="container">
          <div className="process-header">
            <h2>Our Proven Process</h2>
          </div>
          
          <div className="process-timeline">
            {/* Step 1 */}
            <div className="timeline-row">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery Call</h3>
                <p>A discovery is an audit of your business and workflows. We take time to understand your people, processes, and problems (not symptoms). We use our expertise to see where AI and automation can create leverage for you. This is a key point where we learn your business and can become partners. We'll also demo any automations for you to see live.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-row reverse">
              <div className="step-content">
                <h3>Design & Proof of Concept</h3>
                <p>The design is all about understanding your systems, tech stack, and business needs. It may be clear immediately what your business needs, or we may need to peel back a few layers to get to the right catalyst for growth. Once that's clear, we will create a blueprint proposal and validate that the tech and timeline works for you.</p>
              </div>
              <div className="step-number">02</div>
            </div>

            {/* Step 3 */}
            <div className="timeline-row">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Build & Testing</h3>
                <p>With a proven concept in hand, we bring the full solution to life. This is where rubber hits the road and we start providing value immediately. You can expect clear timelines, deliverables, and updates based on a prioritized list of tasks across projects. We fold into your preferred communication method and systems.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-row reverse">
              <div className="step-content">
                <h3>Implementation & Success</h3>
                <p>Automation go-live is perhaps the most exciting part about our partnership. We launch your new automations, provide support, train your staff, provide documentation, and monitor the success. You can sit back and enjoy.</p>
              </div>
              <div className="step-number">04</div>
            </div>

            {/* Step 5 */}
            <div className="timeline-row">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Partnership & Improvement</h3>
                <p>Our work doesn't stop at implementation. We see this as the start of a partnership, where we work together to ensure your systems evolve your business, the market, and tech. Once you see the value of automation in your business, you'll want to leverage it across all of your operations.</p>
              </div>
            </div>
          </div>

          <div className="process-cta">
            <CalendlyButton className="btn btn-primary">Book A Discovery Call</CalendlyButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services_section" id="services">
        <div className="container">
          <div className="services-header">
            <h1>Transform and Scale your Business</h1>
            <h2>We Build Automations to Systemize and Integrate Each Part of your Business ⏬</h2>
          </div>
          
          <div className="services-grid">
            {/* Marketing/Sales */}
            <div className="service-category">
              <h3>Marketing/Sales</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Lead Capture & CRM Optimization</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Funnel Management (Contact→Contract)</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Speed to Lead Automation</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Cold Lead Reactivation</span>
                </div>
              </div>
            </div>

            {/* Onboarding/Fulfillment */}
            <div className="service-category">
              <h3>Onboarding/Fulfillment</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Automated Intake & Onboarding</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Personalized Customer Email/SMS/Calls</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Automated Estimate & Contract Creation</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Job & Task Tracking</span>
                </div>
              </div>
            </div>

            {/* Admin/Documentation */}
            <div className="service-category">
              <h3>Admin/Documentation</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Automated Data Entry</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Legal & Contractual Documents</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Routine Task Automation</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>SOP Creation & Training</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div className="service-category">
              <h3>Customer Service</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>24/7 Customer Service AI Agents</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Proactive Customer Follow Ups</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Automated Task Creation & Assignment</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Review & Referral Collection</span>
                </div>
              </div>
            </div>

            {/* Invoicing/Payment */}
            <div className="service-category">
              <h3>Invoicing/Payment</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Invoice Creation & Notice</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>A/R Notifications & Follow Ups</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Expense Management & Review</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>KPI Monitoring & Reporting</span>
                </div>
              </div>
            </div>

            {/* Industry-Specific */}
            <div className="service-category">
              <h3>Industry-Specific</h3>
              <div className="service-features">
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Digital Asset Creation</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Web Scraping Workflows</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Customer Lifecycle Management</span>
                </div>
                <div className="feature-item">
                  <div className="check-icon">✓</div>
                  <span>Tech Stack Modernization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-header">
          <h2>Our Pricing</h2>
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <div className="pricing-title">
              <h3>Discovery Call</h3>
              <p className="pricing-subtitle"><em>Always Free</em></p>
            </div>
            <div className="pricing-features">
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Audit Your Workflows</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Gain Expert Advice</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Live Automation Demos</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span><strong>Free Custom Website Chatbot</strong><br/><strong>For Your Business</strong></span>
              </div>
            </div>
            <CalendlyButton className="btn btn-primary pricing-btn">BOOK A DISCOVERY CALL</CalendlyButton>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-title">
              <h3>Retainer</h3>
              <p className="pricing-subtitle"><em>Starting at $3000/mo.</em></p>
            </div>
            <div className="pricing-features">
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Multiple High-Value Automations<br/>Per Month</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Done-For-You Automation Systems</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Prioritized Task Deliveries</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span><strong>30-Day Results Guarantee</strong></span>
              </div>
            </div>
            <CalendlyButton className="btn btn-primary pricing-btn">CLAIM A SPOT NOW</CalendlyButton>
          </div>

          <div className="pricing-card">
            <div className="pricing-title">
              <h3>Project Based</h3>
              <p className="pricing-subtitle"><em>On Request</em></p>
            </div>
            <div className="pricing-features">
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>One-Off Projects For Businesses<br/>Looking to Start</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>Clear Deliverables & Timeline</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span>No Ongoing Costs</span>
              </div>
              <div className="feature-row">
                <div className="check-icon">✓</div>
                <span><strong>30-Day Results Guarantee</strong></span>
              </div>
            </div>
            <CalendlyButton className="btn btn-secondary pricing-btn">GET A QUOTE</CalendlyButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section" id="cta">
          <div className="final-cta-text">
              <h2>See Everything Zautom Can Do for Your Business</h2>
              <p>
                  Curious how much time and money you could save with automation? Our complete feature guide walks you through everything Zautom offers—from building workflows in minutes to syncing data across your apps, systems, and teams.
              </p>
              <p>
                  We'll break down what's included, how fast you can get started, and how Zautom helps you eliminate manual work while staying in full control.
              </p>
              <p className="sync-text">
                  Your workflows. Your tools. Your business—finally automated, your way.
              </p>
              <div className="final-cta-buttons">
                  <button className="btn btn-dark">Download Feature Guide</button>
                  <CalendlyButton className="btn btn-secondary">Book a Free Demo Now</CalendlyButton>
              </div>
          </div>
          <div className="final-cta-image-container">
            <img src="/assets/future-digital.jpg" alt="Modern Automation Setup" className="final-cta-image" />
          </div>
      </section>

    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/service4" element={<Service4 />} />
          <Route path="/service5" element={<Service5 />} />
          <Route path="/service6" element={<Service6 />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
