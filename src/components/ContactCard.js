import React from 'react';
import PropTypes from 'prop-types';

export default function ContactCard({ contactData }) {
  return (
    <div className="contact-container">

      <a href={contactData.github} target="_blank" rel="noreferrer"><span className="contact-icon contact-icon-link"><i className="fab fa-github"> </i></span></a><br />
      <a href={contactData.linkedIn} target="_blank" rel="noreferrer"><span className="contact-icon contact-icon-link"><i className="fab fa-linkedin"> </i></span></a><br />
      <span className="contact-icon-container"><span className="contact-icon contact-page-icon"><i className="fas fa-envelope" /> <br />{contactData.email}</span></span><br />
      <span className="contact-icon-container"><span className="contact-icon contact-page-icon"><i className="fas fa-phone" /> <br />{contactData.phone}</span></span>

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
