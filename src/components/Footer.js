
import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/sipnplaynyc/?hl=en" className="footer-link" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      |
      <a href="https://www.facebook.com/sipnplaynyc/" className="footer-link" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    </div>
  );
};

export default Footer;
