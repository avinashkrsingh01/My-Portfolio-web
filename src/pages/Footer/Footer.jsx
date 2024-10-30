// src/Footer.js
import React from 'react';
import { FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Avinash Kumar Singh</h3>
        <p>Passionate Developer | Open to Opportunities</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/avinashkrsingh01/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/avinashkrsingh01" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/avinash_kr_yadav01/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Avinash Kumar Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
