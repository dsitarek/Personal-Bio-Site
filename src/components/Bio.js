import React from 'react';
import PropTypes from 'prop-types';

export default function Bio({ aboutData }) {
  return (
    <div className="bio-container">
      <div className="bio-image">
        <img src={aboutData.imageURL} alt={aboutData.name} />
      </div>
      <div className="bio-body">
        <div className="bio-name"><h3>&lt; {aboutData.name} /&gt;<span className="blink" /></h3></div>
        <p>{aboutData.bio}</p>
      </div>
    </div>
  );
}

Bio.propTypes = {
  aboutData: PropTypes.shape({
    name: PropTypes.string,
    imageURL: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
