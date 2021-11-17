import React from 'react';
import PropTypes from 'prop-types';

export default function TechCard({ tech }) {
  return (
    <div className="tech-card">
      <img src={tech.imageURL} className="tech-image" alt={tech.name} />
      {tech.name}
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
  }).isRequired,
};
