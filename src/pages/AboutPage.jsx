import React from 'react';
import Hero from '../components/Hero'; // Reusing your existing Hero component
import Education from '../components/Education'; // Reusing your existing Education component
import FeaturedExperience from '../components/FeaturedExperiences'; // <-- NEW IMPORT

function AboutPage() {
  return (
    <div className="page-content">
      <Hero />
      {/* NEW: Display the clickable summary cards */}
      <FeaturedExperience /> 
      <Education />
    </div>
  );
}

export default AboutPage;