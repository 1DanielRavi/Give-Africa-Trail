import React, { useState, useRef } from 'react';
import './Header.css';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150); // 150ms delay
  };

  const handleProgramsMouseEnter = () => {
    if (programsTimeoutRef.current) {
      clearTimeout(programsTimeoutRef.current);
    }
    setIsProgramsDropdownOpen(true);
  };

  const handleProgramsMouseLeave = () => {
    programsTimeoutRef.current = setTimeout(() => {
      setIsProgramsDropdownOpen(false);
    }, 150); // 150ms delay
  };

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar"></div>
      
      {/* Main navigation */}
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <img src="/logo.webp" alt="Give AFRICA Corporation" className="logo-image" />
            </div>
            <div className="logo-text">
              <span className="logo-primary">Give AFRICA</span>
              <span className="logo-secondary">Corporation</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            <div 
              className="nav-link dropdown-trigger"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              About Us
              <svg className={`chevron ${isAboutDropdownOpen ? 'rotated' : ''}`} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              {isAboutDropdownOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <a 
                    href="#our-team" 
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('our-team');
                      setIsAboutDropdownOpen(false);
                    }}
                  >
                    Our Team
                  </a>
                  <a 
                    href="#our-mission" 
                    className="dropdown-item"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('our-mission');
                      setIsAboutDropdownOpen(false);
                    }}
                  >
                    Our Mission
                  </a>
                </div>
              )}
            </div>
            <div 
              className="nav-link dropdown-trigger"
              onMouseEnter={handleProgramsMouseEnter}
              onMouseLeave={handleProgramsMouseLeave}
            >
              Programs
              <svg className={`chevron ${isProgramsDropdownOpen ? 'rotated' : ''}`} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              {isProgramsDropdownOpen && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={handleProgramsMouseEnter}
                  onMouseLeave={handleProgramsMouseLeave}
                >
                  <a href="#become-philanthropist" className="dropdown-item">Become an African Philanthropist</a>
                  <a href="#project-sponsorship" className="dropdown-item">Project Sponsorship</a>
                  <a href="#crowdfunding-education" className="dropdown-item">Crowdfunding, Education & Training</a>
                  <a href="#fiscal-sponsorship" className="dropdown-item">Fiscal Sponsorship</a>
                </div>
              )}
            </div>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="nav-actions">
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="menu-icon" viewBox="0 0 24 24">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#about" className="mobile-nav-link">About Us</a>
              <a href="#programs" className="mobile-nav-link">Programs</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}