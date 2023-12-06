import React, { useState, useEffect } from 'react';
import './TeamSection.css';

function TeamSection() {
    const [projects, setProjects] = useState([]);
    const [selectedType, setSelectedType] = useState('Mainnet'); // Set Mainnet as default

    useEffect(() => {
        // Fetch data from your API
        fetch('http://localhost:3001/api/Team')
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Set your state with the fetched data
                setProjects(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const categorizeProjects = (type) => {
        return projects.filter(project => project.type === type);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const renderProjects = (type) => {
        const filteredProjects = categorizeProjects(type);
        if (filteredProjects.length === 0) {
            return <p>No projects available under the {type} category.</p>;
        }
    
        return filteredProjects.map(project => (
            <div key={project._id} className="project-item">
                <img src={project.imageUrl} alt={project.name} className="project-image" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {/* Add more details about the project here */}
            </div>
        ));
    };
    

    const getTypeClassName = (type) => {
        return selectedType === type ? "project-type-title selected" : "project-type-title";
    };

    return (
        <div className='container' id="sect-1">
            <div className='row'>
                <div className="project-section">
                    <h2 className='Title'>Project List</h2>
                    <div className="project-types">
                        <h2 className={getTypeClassName('Past')} onClick={() => handleTypeClick('Past')}>Past Projects</h2>
                        <h2 className={getTypeClassName('Mainnet')} onClick={() => handleTypeClick('Mainnet')}>Mainnet</h2>
                        <h2 className={getTypeClassName('Testnet')} onClick={() => handleTypeClick('Testnet')}>Testnet</h2>
                        <h2 className={getTypeClassName('Upcoming')} onClick={() => handleTypeClick('Upcoming')}>Upcoming</h2>
                    </div>
                    <div className="project-container">
                        {selectedType && renderProjects(selectedType)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
