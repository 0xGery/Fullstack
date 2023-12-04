// import logo from './logo.svg'; 
import './App.css';
import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import AddProjectForm from './AddProjectForm';
import Footer from './Footer';
import WelcomeSection from './WelcomeSection';

function App() {
  return (
      <div>
          <Header />
          <WelcomeSection />
          <ProjectList />
          <AddProjectForm />
          <Footer /> 
      </div>
  );
}



export default App;