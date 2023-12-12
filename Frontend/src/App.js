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
import RomanClock from './RomanClock';

// Footer
import Footer from './Footer';


function App() {
  return (
      <div>
          <Header />
          <div id="Welcome"><WelcomeSection /></div>
          <RomanClock />
          <div id="Project"><ProjectSection /></div>
          <div id="Service"><ServiceSection /></div>
          <div id="Team"><TeamSection /></div>
          <div id="Contact"><ContactSection /></div>
      </div>
  );
}


export default App;