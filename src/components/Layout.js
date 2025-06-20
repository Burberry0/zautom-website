import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <div className="logo-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    </div>
    <div className="logo-text">
      <h1>Zautom</h1>
      <p>Automation made easy</p>
    </div>
  </div>
);

const NavLink = ({ children, href, hasDropdown }) => (
  <Link to={href} className="nav-link">
    {children}
    {hasDropdown && (
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    )}
  </Link>
);

const GetStartedButton = ({ isMobile = false }) => (
  <button className={`get-started-btn ${isMobile ? 'mobile' : ''}`}>
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
    </svg>
    Get Started
  </button>
);

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <header className="header">
    <nav className="nav">
      <Link to="/">
        <Logo />
      </Link>
      <div className="nav-links">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
      <GetStartedButton />
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
    {isMenuOpen && (
      <div className="mobile-menu">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <GetStartedButton isMobile />
      </div>
    )}
  </header>
);

const Footer = () => (
    <footer className="footer">
      <div className="sub-footer">
        <Logo />
        <div className="sub-footer-links">
          <span>Copyright 2025 Zautom |</span>
          <a href="/privacy">Privacy Policy</a> |
          <a href="/terms">Terms of Service</a> |
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };
  
  export default Layout; 