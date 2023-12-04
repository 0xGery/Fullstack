// import logo from './logo.svg'; 
import './App.css';
import React from 'react';
import Header from './Header';
import ProjectSection from './ProjectSection';
import Footer from './Footer';
import WelcomeSection from './WelcomeSection';

function App() {
  return (
      <div>
          <Header />
          <WelcomeSection />
          <ProjectSection />
          <Footer /> 
      </div>
  );
}

export default App;