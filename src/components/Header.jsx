// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component receives darkMode state and the toggle function
function Header({ darkMode, toggleTheme }) {
  // 1. State to track if the mobile menu is open (starts closed)
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the navigation links
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Work Experience" },
    { to: "/projects", label: "Research Projects" },
    { to: "/academics", label: "Academics" },
    { to: "/contact", label: "Contact" },
  ];

  // Inline styles for links (will be overridden by CSS media query on mobile)
  const navLinkStyle = {
    margin: '0 10px',
    color: 'white', // Use primary green color
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  // Style for the theme toggle button (will be hidden on mobile in CSS)
  const toggleButtonStyle = {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 255, 65, 0.2)', // Subtle green background
    color: 'var(--color-primary)',
    fontSize: '1rem',
    marginLeft: '20px',
    flexShrink: 0, // Prevent shrinking in the flex container
  };

  return (
    <header style={{ padding: '10px 0', backgroundColor: '#000000' }}>
      <div className="header-content">
        
        {/* Logo/Name */}
        <h1 style={{ margin: '0', fontSize: '1.8rem', color: 'white', textAlign: 'left' }}>
          Sarvesh Ramiya
        </h1>
        
        {/* --- DESKTOP NAVIGATION + THEME TOGGLE (Visible on large screens) --- */}
        <div className="desktop-nav-container">
            <nav id="desktop-nav">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} style={navLinkStyle}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <button onClick={toggleTheme} style={toggleButtonStyle}>
              {darkMode ? '💡' : '🌙'}
            </button>
        </div>
        
        {/* --- MOBILE HAMBURGER ICON (Visible on small screens) --- */}
        <div className="mobile-controls">
            {/* Theme toggle moved here for visibility on mobile, kept outside the menu */}
            <button onClick={toggleTheme} style={{...toggleButtonStyle, marginLeft: 0}}>
              {darkMode ? '💡' : '🌙'}
            </button>
            
            <button 
              className="hamburger-icon" 
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'white', 
                  fontSize: '24px',
                  cursor: 'pointer',
                  zIndex: 1000,
                  marginLeft: '15px',
                  // REMOVE any inline width/height or padding styles that might expand it
                  // Let the CSS handle the precise sizing
              }}
            >
              {/* Display X when open, or the standard hamburger icon */}
              {isOpen ? '✕' : '☰'} 
            </button>
        </div>


        {/* --- MOBILE MENU LINKS (Slides down when 'open') --- */}
        <nav 
          id="mobile-nav"
          className={`nav-links mobile-menu ${isOpen ? 'open' : ''}`}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              // Keep desktop style for color, but use CSS for padding/margin
              style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
              onClick={toggleMenu} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
}

export default Header;