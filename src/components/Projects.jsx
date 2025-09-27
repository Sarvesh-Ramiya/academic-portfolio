// src/components/Projects.jsx
import React from 'react';
// Import your images
import project1Image from '../assets/ba_pic.png'; // Make sure paths are correct
import project2Image from '../assets/dqn.jpg'; // Make sure paths are correct
import project3Image from '../assets/lstm.jpg';
import project4Image from '../assets/path-planning.jpg'; // Make sure paths are correct
// If you add more, import them here

const projectData = [
  {
    title: 'Binding Affinity Predictions using Graph Neural Networks',
    description: 'Predicting Protein-Ligand Binding Affinity With Graph Neural Networks and Meta-Learning ',
    link: 'https://medium.com/stanford-cs224w/predicting-protein-ligand-binding-affinity-with-graph-neural-networks-and-meta-learning-63409f4da7ba',
    tags: ['Machine Learning', 'Python', 'Graph Neural Networks'],
    imageUrl: project1Image, // <--- ADD IMAGE URL HERE
  },
  {
    title: 'Deep Q Networks for Profitable Stock Trading',
    description: 'Implementing a Deep Q-Netowrk (DQN) Agent for profitable trading in the stock market.',
    link: 'https://github.com/Sarvesh-Ramiya/Deep_Learning_For_Stock_Trading',
    tags: ['Python', 'Deep learning'],
    imageUrl: project2Image, // <--- ADD IMAGE URL HERE
  },
  {
    title: 'Analyzing Effect of Hyperparameter Optimization techniques',
    description: 'Exploring Hyperparameter optimization techniques for LSTMs and Transformers that predict stock prices ',
    link: 'https://github.com/Sarvesh-Ramiya/Hyperparameter_Optimization',
    tags: ['Python', 'Engineering Design Optimization', 'LSTMs', 'Transformers'],
    imageUrl: project3Image, // <--- ADD IMAGE URL HERE
  },
  {
    title: 'Efficient Path Planning using Reinforcement Learning Techniques',
    description: 'Implementing RL techniques like Forward Search, Monte Carlo Tree Search and Value Iteration for efficient path planning ',
    link: 'https://github.com/Sarvesh-Ramiya/RL_Based_Path_Planning',
    tags: ['Julia', 'Reinforcement Learning', 'Decision Making'],
    imageUrl: project4Image, // <--- ADD IMAGE URL HERE
    
  },
];

function Projects() {
  return (
    <section id="projects" style={{ padding: '30px 0' }}>
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          {/* Use Flexbox to arrange content and image */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            {/* Left side: Project Details */}
            <div style={{ flex: '2' }}> {/* This div takes more space */}
              <h3>{project.title}</h3>
              <p style={{marginBottom: '10px'}}>{project.description}</p>
              <p>
                <strong>Skills:</strong> {project.tags.join(', ')}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--color-primary)', 
                  textDecoration: 'none', 
                  fontWeight: 'bold', 
                  display: 'inline-block', 
                  marginTop: '10px' 
                }}
              >
                Project Link
              </a>
            </div>

            {/* Right side: Project Image (if available) */}
            {project.imageUrl && (
              <div style={{ flex: '1', minWidth: '150px', maxWidth: '350px' }}> {/* This div takes less space */}
                <img 
                  src={project.imageUrl} 
                  alt={`Image for ${project.title}`} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // Optional: add a slight shadow
                  }} 
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;