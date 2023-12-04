import React, { useState, useEffect } from 'react';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {projects.map(project => (
                <div key={project._id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    {/* Display other project details as needed */}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
