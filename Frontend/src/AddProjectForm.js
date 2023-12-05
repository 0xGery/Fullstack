import React from 'react';

function AddProjectForm({ onAddProject }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const projectData = Object.fromEntries(formData.entries());

        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData),
        })
        .then(response => response.json())
        .then(data => {
            onAddProject(data); // Update the project list
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm;
