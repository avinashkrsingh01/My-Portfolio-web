// src/Contact.js
import React from 'react';
import './Contact.css';
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";


const Contact = () => {
  return (

    <>
    <div className="contact" id='contact'>
    <h1>CONTACT ME</h1>
    <div className="contact-container">
        
      <div className="contact-left">
        <img src="https://th.bing.com/th/id/OIP.qlfco3c6dt9s59qiXWQG-AAAAA?w=414&h=238&rs=1&pid=ImgDetMain" alt="Contact Us" className="contact-image" />
      </div>
      <div className="contact-right">
        <h3>Contact With Icons</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/avinashkrsingh01/" target="_blank" rel="noopener noreferrer">
            
            <AiFillLinkedin size={30} color="#0077B5" />
          </a>
          <a href="https://github.com/avinashkrsingh01" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={30} color="#000" />
          </a>
          <a href="https://www.instagram.com/avinash_kr_yadav01/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare  size={30} color="#c13584" />
          </a>
        </div>
        <div className="or">
        <h5>-------OR-------</h5>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Enter your Name" className="form-input" />
          <input type="email" placeholder="Enter Your Email Address" className="form-input" />
          <textarea placeholder="Write your message" className="form-input textarea"></textarea>
          <button type="submit" className="send-button">SEND MESSAGE</button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
