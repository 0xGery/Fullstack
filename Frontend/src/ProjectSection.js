import React, { useState, useEffect } from 'react';
import './ProjectSection.css';

function ProjectSection() {
    const [projects, setProjects] = useState([]);
    const [selectedType, setSelectedType] = useState('Mainnet'); // Set Mainnet as default

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const categorizeProjects = (type) => {
        return projects.filter(project => project.type === type);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const renderProjects = (type) => {
        const filteredProjects = categorizeProjects(type);
        if (filteredProjects.length === 0) return <p>No projects available under this category.</p>;

        return filteredProjects.map(project => (
            <div key={project._id} className="project-item">
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
                    <div className="project-types">
                        <h2 className={getTypeClassName('Past')} onClick={() => handleTypeClick('Past')}>Past Projects</h2>
                        <h2 className={getTypeClassName('Mainnet')} onClick={() => handleTypeClick('Mainnet')}>Mainnet</h2>
                        <h2 className={getTypeClassName('Testnet')} onClick={() => handleTypeClick('Testnet')}>Testnet</h2>
                        <h2 className={getTypeClassName('Upcoming')} onClick={() => handleTypeClick('Upcoming')}>Upcoming</h2>
                    </div>
                    {selectedType && renderProjects(selectedType)}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
