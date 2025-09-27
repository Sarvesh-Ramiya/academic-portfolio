// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Required for the clickable card

// Placeholder data for the new structure
const profileData = {
  name: 'Sarvesh Ramiya',
  occupation: 'Software Engineer',
  location: 'Mountain View, CA',
  summary: 'I am currently developing Wear Health services for Android devices (WearOS). I am actively looking to leverage my current skills and transition into a Research Engineering role within the field of Artificial Intelligence.',
  // Placeholder image URL - using a generic avatar placeholder for the hacker theme
  profileImageUrl: 'https://placehold.co/150x150/000000/00FF41?text=SR', 
};

function Hero() {
  return (
    // Wrap the entire card in a Link to the Experience page
    <Link 
      to="/experience" 
      className="hero-badge-link" 
      style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '50px 0' }}
    >
      {/* Center the card within the padding */}
      <div 
        className="hero-badge-card project-card" // Reusing project-card styles
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          maxWidth: '900px', 
          margin: '0 auto',
          // Customize card style for the dark theme
          backgroundColor: 'var(--color-background-main)',
          border: '1px solid var(--color-border)',
        }}
      >
        
        {/* LEFT SIDE: Profile Picture */}
        <div style={{ flexShrink: 0, marginRight: '30px' }}>
          <img 
            src={profileData.profileImageUrl} 
            alt="Sarvesh Ramiya Profile"
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', // Circular image
              objectFit: 'cover',
              border: '4px solid var(--color-primary)', // Neon Green Border
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)' // Green Glow
            }}
            // Fallback for image loading errors (or use a simple text alternative)
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div style={{ flexGrow: 1, textAlign: 'left' }}>
          
          {/* Name & Title */}
          <h2 style={{ margin: '0 0 5px', fontSize: '2.5rem', color: 'var(--color-primary)' }}>
            {profileData.name}
          </h2>
          
          <p style={{ margin: '0 0 10px', fontSize: '1.2rem' }}>
            Occupation: {profileData.occupation}
          </p>
          <p style={{ margin: '0 0 10px', fontSize: '1.2rem' }}>
            Location: {profileData.location}
          </p>
          {/* Location & Summary */}
          <p style={{ margin: '0 0 15px', color: 'var(--color-secondary)' }}>
            Overview: {profileData.summary}
          </p>
        </div>
        
      </div>
    </Link>
  );
}

export default Hero;