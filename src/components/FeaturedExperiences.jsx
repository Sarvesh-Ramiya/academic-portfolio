// src/components/FeaturedExperience.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Data for the summary cards
const featuredExperienceData = [
  {
    id: 'swe3',
    title: 'Software Engineer III',
    company: 'Google LLC',
    date: '2024-Present',
  },
  {
    id: 'swe2',
    title: 'Software Engineer II',
    company: 'Google LLC',
    date: '2021-2024',
  },
  {
    id: 'intern',
    title: 'Software Developer Intern',
    company: 'BNY Mellon',
    date: '2020',
  },
];

function FeaturedExperience() {
  return (
    <section 
      id="featured-experience" 
      style={{ padding: '30px 0 50px', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}
    >
      <h3>Work Experience 💼</h3>
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px', 
          marginTop: '20px' 
        }}
      >
        {featuredExperienceData.map((job) => (
          // Link to the specific ID anchor on the /experience page
          <Link 
            key={job.id} 
            to={`/experience`} 
            className="experience-card-summary" // New class for styling
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="education-card" style={{ transition: 'none' }}> {/* Reusing education-card style */}
              <h4 style={{ marginBottom: '5px' }}>{job.title}</h4>
              <p style={{ marginBottom: '10px', fontSize: '0.95rem' }}>
                <strong>{job.company}</strong>
              </p>
              <p>{job.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedExperience;