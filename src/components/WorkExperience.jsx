// src/components/WorkExperience.jsx
import React from 'react';

// NOTE: Add unique 'id's that match the ones used in FeaturedExperience.jsx
const workData = [
  {
    id: 'postdoc', // <-- ADD ID
    title: 'Postdoctoral Research Fellow',
    company: 'University of Academic Excellence, AI Lab',
    year: '2022 - Present',
    description: 'Leading research on ethical AI deployment, focusing on bias mitigation in large language models (LLMs). Authored 5 peer-reviewed papers.',
  },
  {
    id: 'datascience', // <-- ADD ID
    title: 'Data Science Intern',
    company: 'Tech Innovations Corp.',
    year: 'Summer 2021',
    description: 'Developed and optimized machine learning pipelines for customer sentiment analysis, resulting in a 15% improvement in processing efficiency.',
  },
];

function WorkExperience() {
  return (
    <section id="experience-details" style={{ padding: '30px 0', borderBottom: '1px solid var(--color-border)' }}>
      <h3>Work Experience 💼</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginTop: '20px' }}>
        {workData.map((job, index) => (
          // CRITICAL CHANGE: Set the anchor ID on the card container
          <div 
            key={index} 
            id={job.id} // <-- SET ID HERE
            className="education-card"
          > 
            <h4>{job.title}</h4>
            <p style={{marginBottom: '5px'}}>
              <strong>{job.company}</strong> | {job.year}
            </p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;