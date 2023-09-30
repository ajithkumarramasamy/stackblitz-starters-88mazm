import React from 'react';
import Header from '../Header';
import './index.css';
const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="total-container">
        <div className="first-container">
          <h3 className="first-heading">About Us</h3>
          <p className="first-para">
            "Delivering Stunning <br />
            Visual narratuves"
          </p>
          <p className="first-paragraph">
            From concept to final edit, we tailor our production process to suit
            your unique needs, ensuring the highest quality results.
          </p>
        </div>
        <div className="second-container">
          <h3 className="first-heading">our story</h3>
          <p className="first-paragraph">
            {' '}
            <span className="first-para">PATCO PRODUCTIONS</span> has earned its
            reputation in the market for its services. We aim to grow as the
            most prominent firm for our Customers, Business Associates &
            Stakeholders and we take pride that the intense vision of our
            experienced personnel encourages us to create a niche in the
            industry by serving clients across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
