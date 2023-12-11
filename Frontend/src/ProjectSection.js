import React, { useState, useEffect } from 'react';
import './ProjectSection.css';

function ProjectSection() {
    const [projects, setProjects] = useState([]);
    const [projectCounts, setProjectCounts] = useState({ total: 0, Past: 0, Mainnet: 0, Testnet: 0, Upcoming: 0 });
    const [selectedType, setSelectedType] = useState('Past'); 

    useEffect(() => {
        fetch('https://api.0xgery.xyz/api/projects')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
                // Calculate counts for each category
                const counts = { total: data.length, Past: 0, Mainnet: 0, Testnet: 0, Upcoming: 0 };
                data.forEach(project => {
                    if (project.type in counts) {
                        counts[project.type]++;
                    }
                });
                setProjectCounts(counts);
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
            return <p className='NoProject'>No projects available under the {type} category.</p>;
        }
    
        return filteredProjects.map(project => (
            <div key={project._id} className="project-item">
                <img src={project.imageUrl} alt={project.name} className="project-image" />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        ));
    };

    const getTypeClassName = (type) => {
        return selectedType === type ? "project-type-title selected" : "project-type-title";
    };

    const renderCategoryCount = (count) => {
        return count === 0 ? "N/A" : count;
    };

    return (
        <div className='containerP' id="sect-P">
            <div className='rowP'>
                <div className="project-section">
                    <h2 className='Title'>SUPPORTED PROJECTS</h2>
                    <p>Total Projects: {renderCategoryCount(projectCounts.total)}</p>
                    <div className="project-types">
                        <h2 className={getTypeClassName('Past')} onClick={() => handleTypeClick('Past')}>Archived ({renderCategoryCount(projectCounts.Past)})</h2>
                        <h2 className={getTypeClassName('Mainnet')} onClick={() => handleTypeClick('Mainnet')}>Mainnet ({renderCategoryCount(projectCounts.Mainnet)})</h2>
                        <h2 className={getTypeClassName('Testnet')} onClick={() => handleTypeClick('Testnet')}>Testnet ({renderCategoryCount(projectCounts.Testnet)})</h2>
                        <h2 className={getTypeClassName('Upcoming')} onClick={() => handleTypeClick('Upcoming')}>Upcoming ({renderCategoryCount(projectCounts.Upcoming)})</h2>
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