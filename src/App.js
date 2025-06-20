import { useState, useEffect } from 'react';
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
import heroImage from './assets/c7bc567e53_7167_0_1750392894.png';
import Layout from './components/Layout';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections that should animate on scroll
    const sections = document.querySelectorAll('.feature-section, .why-us-section, .badge-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Streamline Your Workflow with Zautom
          </h1>
          <p>
            Empowering businesses to automate processes, reduce manual tasks, and scale smarter—faster.
          </p>
          <div className="hero-buttons">
            <Link to="/features" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/book-demo" className="btn btn-secondary">
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Zautom Automation Platform" className="hero-img" />
        </div>
      </section>
      
      <section className="why-us-section">
         <h2>
           Why Businesses Choose Zautom to Save Time, Eliminate Busywork, and Scale Smarter
         </h2>
      </section>

      {/* Feature 1: All-in-One Automation */}
      <section className="feature-section">
        <div className="feature-text">
          <h2>All-in-One Automation Platform Built for Scale</h2>
          <p>
            Stop wasting time with scattered apps and manual tasks. Zautom brings your workflows, integrations, and automation logic into one seamless platform. From trigger to action, your systems finally talk to each other—so your business runs smoother, faster, and smarter.
          </p>
          <Link to="/features" className="btn btn-primary">Learn More</Link>
        </div>
        <div className="feature-image-container">
          <img src="/assets/all-in-one-marketing-platforms-1.png" alt="All-in-One Automation Platform" className="feature-image" />
        </div>
      </section>

      {/* Feature 2: Effortless Automation */}
      <section className="feature-section">
        <div className="feature-image-container">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Workflow Automation Interface" className="feature-image" />
        </div>
        <div className="feature-text">
          <h2>Reclaim Hours with Effortless Automation</h2>
          <p>
            Manually updating spreadsheets, copying data between apps, and chasing follow-ups? Not anymore. Zautom automates your repetitive tasks across tools like Slack, Gmail, Trello, and more—so your team can focus on work that actually moves the needle. Build once, run forever.
          </p>
          <Link to="/features" className="btn btn-primary">Learn More</Link>
        </div>
      </section>

      {/* Trustworthy Automation Section */}
      <section className="feature-section">
          <div className="feature-text">
              <h2>Automation You Can Trust, Even When You're Off the Clock</h2>
              <p>
                  Zautom keeps your systems running—day, night, and weekends. With real-time monitoring, fail-safes, and smart alerts, you'll never wonder if a workflow fired or a task slipped through the cracks. Set it, forget it, and stay confidently hands-off.
              </p>
              <Link to="/features" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="feature-image-container">
              <img src="/assets/automtn_pltforms.jpg" alt="Trustworthy Automation" className="feature-image"/>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
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
                  <Link to="/book-demo" className="btn btn-secondary">Book a Free Demo Now</Link>
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
