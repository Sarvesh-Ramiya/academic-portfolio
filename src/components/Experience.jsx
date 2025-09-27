import React from 'react';

const experience = [
  {
    title: 'Real Time Bike Stats for Pixel Devices',
    description: 'Built a Kotlin Cross Device Communication library which controls real time biking exercise data between the phone and the watch'
  },
  {
    title: 'Multi-Segment Exercises in Health Services',
    description: 'Built Exercise Control and Metric Aggregation logic for Multi-Segment exercises in WearOS Health Services'
  },
  {
    title: 'Health Services Optimization & Concurrency',
    description: 'Developed a multi-threaded architecture for Health services to ensure efficient system utilization and also optimized data processing logic to reduce data delivery latency by over 40%'
  },
  {
    title: 'Pixel Watch Activity Recognition',
    description: 'Ensured proper Exercise Auto-Start and Auto-Stop signal detection and propogation. Also developed the backdating metric aggregation logic for Auto-started exercises'
  },
];

function Experience() {
  return (
    <section id="experience" style={{ padding: '30px 20px', borderTop: '1px solid #ccc' }}>
        {experience.map((experience, index) => (
          <div key={index} className="project-card">
             <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <div style={{ flex: '2' }}> {/* This div takes more space */}
                <h3>{experience.title}</h3>
                <p style={{marginBottom: '10px'}}>{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}

export default Experience;