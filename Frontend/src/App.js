// import logo from './logo.svg'; 
import './App.css';
import React from 'react';

// Nav
import Header from './Header';

// Section
import WelcomeSection from './WelcomeSection';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';

// Footer
import Footer from './Footer';


function App() {
  return (
      <div>
          <Header />
          <WelcomeSection />
          <ProjectSection />
          <ServiceSection />
          <Footer /> 
      </div>
  );
}

export default App;