import React from 'react';

function AddProjectForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm;
