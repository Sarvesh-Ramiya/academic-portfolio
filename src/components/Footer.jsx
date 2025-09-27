// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    // Applied hacker aesthetic (black background, neon green color)
    <footer style={{ padding: '10px 0', backgroundColor: '#000000', color: '#00FF41', textAlign: 'center' }}>
      
      {/* CRITICAL CHANGE: REMOVED inline style: display: 'block' 
        This allows the .footer-content class (defined in index.css 
        with display: flex) to control the layout, forcing one row.
      */}
      <div className="footer-content">
        
        {/* Item 1: Copyright text on the left */}
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>
          &copy; {new Date().getFullYear()} Sarvesh Ramiya | Built with React
        </p>
        
        {/* Item 2: Links/Social in the middle */}
        <div style={{ margin: '0 20px' }}>
          <a href="https://www.linkedin.com/in/sarvesh-r-149aba188/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>LinkedIn</a>
          <a href="https://github.com/Sarvesh-Ramiya" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>GitHub</a>
        </div>
        
        {/* Item 3: Contact Info on the right (Using contact info from original code) */}
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>
          Contact: ramiyasarvesh@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;