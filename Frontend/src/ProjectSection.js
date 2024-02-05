import React, { useState, useEffect } from 'react';
import './ProjectSection.css';

function ProjectSection() {
    const [projects, setProjects] = useState([]);
    const [projectCounts, setProjectCounts] = useState({ total: 0, Past: 0, Mainnet: 0, Testnet: 0, Upcoming: 0 });
    const [selectedType, setSelectedType] = useState('Past');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        fetch('https://api.nocturnode.tech/api/projects')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
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
        setCurrentPage(1); 
    };

    const renderProjects = (type) => {
        const indexLastItem = currentPage * itemsPerPage;
        const indexFirstItem = indexLastItem - itemsPerPage;
        const filteredProjects = categorizeProjects(type).slice(indexFirstItem, indexLastItem);

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
        return count === 0 ? "n/a" : count;
    };

    const renderPaginationControls = () => {
        const pageNumbers = [];
        const totalProjects = projects.filter(project => project.type === selectedType).length;
    
        for (let i = 1; i <= Math.ceil(totalProjects / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
    
        return totalProjects > itemsPerPage ? (
            <div className='pagination-controls'>
                {pageNumbers.map(number => (
                    // Add conditional class 'selected' based on currentPage
                    <span key={number} 
                          className={`page-number ${currentPage === number ? 'selected' : ''}`} 
                          onClick={() => setCurrentPage(number)}>
                        {number}
                    </span>
                ))}
            </div>
        ) : null;
    };    

    return (
        <div className='containerP' id="sect-P">
            <div className='rowP'>
                <div className="project-section">
                    <h2 className='Title'>SUPPORTED NETWORK</h2>
                    <h3 className='TotalP'>Total Network: {renderCategoryCount(projectCounts.total)}</h3>
                    <div className="project-types">
                        <h2 className={getTypeClassName('Past')} onClick={() => handleTypeClick('Past')}>Archived ({renderCategoryCount(projectCounts.Past)})</h2>
                        <h2 className={getTypeClassName('Mainnet')} onClick={() => handleTypeClick('Mainnet')}>Mainnet ({renderCategoryCount(projectCounts.Mainnet)})</h2>
                        <h2 className={getTypeClassName('Testnet')} onClick={() => handleTypeClick('Testnet')}>Testnet ({renderCategoryCount(projectCounts.Testnet)})</h2>
                        <h2 className={getTypeClassName('Upcoming')} onClick={() => handleTypeClick('Upcoming')}>Upcoming ({renderCategoryCount(projectCounts.Upcoming)})</h2>
                    </div>
                    <div className="project-container">
                        {selectedType && renderProjects(selectedType)}
                    </div>
                    {renderPaginationControls()}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
