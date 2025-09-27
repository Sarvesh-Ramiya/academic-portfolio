import React from 'react';
import Experience from '../components/Experience';

function ExperiencesPage() {
  return (
    <div className="page-content">
      <h2>Work Experience</h2>
      <p>I primarily work as a Software Engineer in the Watch Software division of the Google Platforms and Devices Organization. My contributions directly impact all generations of pixel watch and also help android developers devoloping Health applications on WearOS devices. My day to day work involves a good amount of Android System Design, API Design, Algorithmic optimizations, and Java + Kotlin Programming. I have also served as a research assisstant for the Eye Disease detection team in the Google Research organization to help them integrate and test out vision transformers in their newest research venture. Apart from these, I also helped develop the Hardware Abstraction layer in C++ for the 2nd generation of Pixel Watch. </p>
      <h2>Interesting and Impactful Projects</h2>
      <Experience />
    </div>
  );
}

export default ExperiencesPage;