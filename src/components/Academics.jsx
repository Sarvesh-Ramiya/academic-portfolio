// src/components/Academics.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 

const academicData = [
  {
    Institution: 'University of Texas at Dallas',
    Major: 'BS Computer Engineering & Electrical Engineering (Double Major)',
    Date: '2018-2021',
    Grade: '4.0 / 4.0',
    degreeLink: '', 
    Honors2: 'Summa Cum Laude',
    Honors: 'Academic Excellence Scholar',
    // RENAME and EXPAND the Capstone field into a detailed object
    CapstoneProject: {
        Title: 'HoboLoco: Foot Operated Game Controller',
        Link: 'https://example.com/hobo-loco-link', // If there's a demo or project site
        Abstract: 'HoboLoco is a patented, two-foot-plate controller—inspired by a hoverboard—that\'s revolutionizing computer input and virtual world interaction, even extending to robot locomotion. By combining the independent toe-down and heel-down tilts of both footplates, it enables intuitive, multi-dimensional movement (forward, backward, pivoting, and strafing).',
        Contributions: [
          'Designed, built, and tested an optimized Printed Circuit Board (PCB) with Wi-Fi, Bluetooth Low Energy (BLE), and USB capabilities.',
          'Implemented Human Interface Device (HID) emulation (keyboard, mouse, gamepad) across all three communication channels.',
          'Developed a web interface hosted on the PCB for users to manage game profiles and configure custom controls.',
        ],
      },
    summary: 'Completed a total of 146 Credits over the course of 3 years. I was particularly interested in exploring the intersection of Software and Hardware so pursed a double major in Computer Engineering and Electrical engineering that would give me a good exposure to the entire field. I really enjoyed subjects like Machine Learning, Embedded Systems, Computer Architecture, Operating Systems, Computer Networks, and Database Systems. My undergraduate degree also gave me the math exposure required to pursue further studies in the field of Machine Learning',
    Coursework: ['Machine Learning', 'Probability & Statistics', 'Linear Algebra', 'Advanced Engineering Math', 'Data Structures & Algorithms', 'Embedded Systems', 'Signals & Systems', 'RF Design Principles', 'Systems And Controls', 'Electormagnetic Engineering']
  },
  {
    Institution: 'Stanford Univeristy',
    Major: 'Graduate Certificate - Artificial Intelligence Principles and Techniques',
    Date: '2024-2025',
    Grade: '3.983 / 4.0',
    degreeLink: 'https://stanford.edu/certificate-link', 
    CapstoneProject: null, // Example of conditional data
    summary: 'Pursued 18 Graduate credits at Stanford as a Non Degree seeking student while working full time as a Software Engineer. I was primarily interested in gaining a stronger academic foundation in subjects like Reinforcement learning, Natural Language Processing and Graph Machine Learning. The graduate certificate was able to provide me with a opportunity to expand my skillset with the help of some super interesting research style academic projects.',
    Coursework: ['Artifical Intelligence Principles', 'Natural Language Processing','Machine Learning with Graphs', 'Decision Making Under Uncertainity', 'Engineering Design Optimization']
  },
];

function Academics() {
  return (
    <section id="academics-details" style={{ padding: '30px 0' }}>
      {academicData.map((academic, index) => (
        
        // Wrap the card in a link if degreeLink exists (using 'a' tag for external link)
        <a 
          key={index}
          href={academic.degreeLink || undefined} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="academic-card-link"
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <div className="project-card">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
              
              {/* Institution and Major - Primary Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px' }}>
                  {academic.Institution}
                </h3>
                <p style={{ margin: '0', fontSize: '1.1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  {academic.Major}
                </p>
                {/* INTEGRATION: General Academic Summary */}
                {academic.summary && (
                  <p style={{ margin: '8px 0 0', fontSize: '0.95rem', color: 'var(--color-secondary)' }}>
                    {academic.summary}
                  </p>
                )}
              </div>

              {/* Date, Grade, and Honors - Secondary Info */}
              <div style={{ textAlign: 'right', minWidth: '160px', marginLeft: '20px' }}>
                <p style={{ margin: '0', fontWeight: 'bold' }}>
                  {academic.Date}
                </p>
                <p style={{ margin: '5px 0 0', fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 'bolder' }}>
                  {academic.Grade}
                </p>
                {/* INTEGRATION: Honors (Conditional) */}
                {academic.Honors && (
                  <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#28a745', fontWeight: 'bold' }}>
                    {academic.Honors}
                  </p>
                )}
                {/* INTEGRATION: Honors (Conditional) */}
                {academic.Honors2 && (
                  <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#28a745', fontWeight: 'bold' }}>
                    {academic.Honors2}
                  </p>
                )}
              </div>
            </div>

            {/* INTEGRATION: Capstone/Thesis Project (Conditional and Separated) */}
            {academic.CapstoneProject && (
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '15px', marginBottom: '15px' }}>
                    <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>
                        Undergraduate Capstone:
                        {/* Display the Title and Link */}
                        {academic.CapstoneProject.Link ? (
                        <a href={academic.CapstoneProject.Link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', marginLeft: '10px' }}>
                            {academic.CapstoneProject.Title} 
                        </a>
                        ) : (
                        <span style={{ marginLeft: '10px', fontStyle: 'italic', color: 'var(--color-secondary)' }}>
                            {academic.CapstoneProject.Title}
                        </span>
                        )}
                    </p>
                    
                    {/* Abstract */}
                    <p style={{ margin: '5px 0 10px', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-secondary)' }}>
                        {academic.CapstoneProject.Abstract}
                    </p>

                    {/* Key Contributions (Displayed as a clean list) */}
                    <p style={{ margin: '0 0 5px', fontWeight: 'bold' }}>
                        Key Contributions:
                    </p>
                    <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc', fontSize: '0.9rem' }}>
                        {academic.CapstoneProject.Contributions.map((contribution, i) => (
                            <li key={i} style={{ marginBottom: '5px', color: 'var(--color-secondary)' }}>
                                {contribution}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {/* Coursework - Displayed as Badges/Pills */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '15px' }}>
              <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>
                Key Coursework:
              </p>
              <div className="coursework-badges">
                {academic.Coursework.map((course, i) => (
                  <span key={i} className="skill-badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Academics;