// import logo from './logo.svg'; 
import './App.css';
import React from 'react';

// Nav
import Header from './Header';

// Section
import WelcomeSection from './WelcomeSection';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';

// Footer
import Footer from './Footer';


function App() {
  return (
      <div>
          <Header />
          <div id="welcome-section"><WelcomeSection /></div>
          <div id="project-section"><ProjectSection /></div>
          <div id="service-section"><ServiceSection /></div>
          <div id="team-section"><TeamSection /></div>
          <div id="contact-section"><ContactSection /></div>
          <Footer /> 
      </div>
  );
}


export default App;