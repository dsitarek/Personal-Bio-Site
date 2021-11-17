import React from 'react';
import PropTypes from 'prop-types';

export default function TechCard({ tech }) {
  return (
    <div>
      {tech.name}
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
