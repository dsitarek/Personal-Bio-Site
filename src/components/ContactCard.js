import React from 'react';
import PropTypes from 'prop-types';

export default function ContactCard({ contactData }) {
  return (
    <div className="contact-container">
      <div>
        <a href={contactData.github} target="_blank" rel="noreferrer"><span className="contact-icon"><i className="fab fa-github"> </i></span></a><br />
        <a href={contactData.linkedIn} target="_blank" rel="noreferrer"><span className="contact-icon"><i className="fab fa-linkedin"> </i></span></a><br />
        <span className="contact-icon"><i className="fas fa-envelope" /> {contactData.email}</span><br />
        <span className="contact-icon"><i className="fas fa-phone" /> {contactData.phone}</span><br />
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contactData: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
  }).isRequired,
};
