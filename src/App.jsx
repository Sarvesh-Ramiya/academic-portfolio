// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import AcademicsPage from './pages/AcademicsPage';
import ContactPage from './pages/ContactPage';

// Helper function to get theme preference from local storage or default to false
const getInitialMode = () => {
  const isReturningUser = 'dark' in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (isReturningUser) {
    return savedMode;
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  // Effect to apply the class to the <body> tag and save preference
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark', JSON.stringify(darkMode));

     // 2. Hash Scroll Logic (for anchor links)
     if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Use setTimeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top on normal navigation
      window.scrollTo(0, 0);
    }
    
  }, [darkMode, location.pathname, location.hash]); // Depend on location changes

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <BrowserRouter>
      {/* Pass the theme state and toggle function to the Header */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} /> 
      
      <div className="content-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencesPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="*" element={<h1 style={{padding: '50px', textAlign: 'center'}}>404: Page Not Found</h1>} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;