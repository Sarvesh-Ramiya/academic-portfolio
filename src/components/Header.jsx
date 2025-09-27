// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Component receives darkMode state and the toggle function
function Header({ darkMode, toggleTheme }) {
  const navLinkStyle = { 
    margin: '0 10px', 
    color: 'white', 
    textDecoration: 'none',
    fontWeight: 'bold', 
  };
  
  // Style for the theme toggle button
  const toggleButtonStyle = {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Subtle button background
    color: 'white',
    fontSize: '1rem',
    marginLeft: '20px'
  };

  return (
    <header style={{ padding: '10px 0', backgroundColor: '#000000' }}>  
      
      <div className="header-content"> 
        
        <h1 style={{ margin: '0', fontSize: '1.8rem', color: 'white', textAlign: 'left' }}>
          Sarvesh Ramiya
        </h1>
        
        {/* Wrapper for navigation and the toggle button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav>
              <Link to="/" style={navLinkStyle}>Home</Link>
              <Link to="/experience" style={navLinkStyle}> Work Experience</Link>
              <Link to="/projects" style={navLinkStyle}> Research Projects</Link>
              <Link to="/academics" style={navLinkStyle}> Academics</Link>
              <Link to="/contact" style={navLinkStyle}>Contact</Link>
            </nav>

            <button onClick={toggleTheme} style={toggleButtonStyle}>
              {darkMode ? '💡' : '🌙'}
            </button>
        </div>
        
      </div>
    </header>
  );
}

export default Header;