import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { signInUser, signOutUser } from '../api/auth';

export default function Footer({ isUser }) {
  const history = useHistory();
  return (
    <div className="footer">
      <span><a href="https://github.com/dsitarek" target="_blank" rel="noreferrer"><span className="contact-icon"><i className="fab fa-github"> </i></span></a></span>
      <span>Copyright © Daniel Sitarek 2021</span>
      <span><a href="https://www.linkedin.com/in/daniel-sitarek/" target="_blank" rel="noreferrer"><span className="contact-icon footer-icon"><i className="fab fa-linkedin"> </i></span></a></span>
      <button type="button" className="auth-btn" onClick={isUser ? () => signOutUser().then(history.push('/')) : signInUser}>.</button>
    </div>
  );
}

Footer.propTypes = {
  isUser: PropTypes.bool.isRequired,
};
