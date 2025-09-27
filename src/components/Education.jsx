// src/components/Education.jsx
import React from 'react';
import { Link } from 'react-router-dom'

const educationData = [
  // ... (data remains the same)
  {
    degree: 'BS Computer Engineering & Electrical Engineering',
    institution: 'University of Texas at Dallas',
    year: '2018 - 2021',
  },
  {
    degree: 'Graduate Certificate - Artifical Intelligence',
    institution: 'Stanford University',
    year:'2024 - 2025'
  }
];

function Education() {
  return (
    <section id="education" style={{ padding: '30px 0', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
      <h3>Academic History 🎓</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {educationData.map((edu, index) => (
          
          // CRITICAL CHANGE: Wrap the card in the Link component
          <Link 
            key={index} 
            to="/academics" // Links to the top of the Experiences page
            className="education-card-link" 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="education-card">
              <h4>{edu.degree}</h4>
              <p><strong>{edu.institution}</strong></p>
              <p>{edu.year}</p>
            </div>
          </Link>

        ))}
      </div>
    </section>
  );
}

export default Education;