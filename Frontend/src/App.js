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
          <WelcomeSection />
          <ProjectSection />
          <ServiceSection />
          <TeamSection />
          <ContactSection />
          <Footer /> 
      </div>
  );
}

export default App;