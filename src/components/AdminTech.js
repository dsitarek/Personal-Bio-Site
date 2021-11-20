import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AdminTech({ tech, handleSubmit, handleDelete }) {
  const [formInput, setFormInput] = useState(tech);

  const handleChange = (e) => {
    setFormInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div className="project-admin-card">
      <form onSubmit={(e) => handleSubmit(e, 'updateTech', tech.firebaseKey, formInput)}>
        Tech Name:
        <input type="text" id="techName" name="name" value={formInput.name} onChange={handleChange} />
        Tech Image URL:
        <input type="text" id="techImageURL" name="imageURL" value={formInput.imageURL} onChange={handleChange} />
        <button type="submit" className="btn btn-success">Update</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete('tech', tech.firebaseKey)}>Delete</button>
      </form>
    </div>
  );
}

AdminTech.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
