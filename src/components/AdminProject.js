import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AdminProject({ project, handleSubmit, handleDelete }) {
  const [formInput, setFormInput] = useState(project);

  const handleChange = (e) => {
    setFormInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div className="project-admin-card">
      <form onSubmit={(e) => handleSubmit(e, 'updateProject', project.firebaseKey, formInput)}>
        Project Name:
        <input type="text" id="projectName" name="name" value={formInput.name} onChange={handleChange} />
        Project Title:
        <input type="text" id="projectTitle" name="title" value={formInput.title} onChange={handleChange} />
        <button type="submit" className="btn btn-success">Update</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete('projects', project.firebaseKey)}>Delete</button>
      </form>
    </div>
  );
}

AdminProject.propTypes = {
  project: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
