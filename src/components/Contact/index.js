import React from 'react';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { FaAddressBook } from 'react-icons/fa';
import Header from '../Header';
import './index.css';
const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <h1 className="contact-heading">CONTACT US</h1>
      <div className="total-icon-container">
        <div className="icon-container">
          <AiFillPhone className="icon" />
        </div>
        <a href="tel://+918169961396" className="anchor">
          +91 8169961396
        </a>
      </div>
      <div className="total-icon-container">
        <div className="icon-container">
          <AiTwotoneMail className="icon" />
        </div>
        <a href="mailto:patcoproductions@gmail.com" className="anchor">
          patcoproductions@gmail.com
        </a>
      </div>
      <div className="total-icon-container">
        <div className="icon-container">
          <FaAddressBook className="icon" />
        </div>
        <p className="anchor-para">
          66, Harminder Singh Road, Aram Nagar Part 1,Versova, Mumbai-400061
        </p>
      </div>
    </div>
  );
};

export default Contact;
