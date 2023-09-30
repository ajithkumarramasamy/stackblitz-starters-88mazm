import React from 'react';
import Header from '../Header';
import './index.css';

const Services = () => {
  return (
    <div className="services">
      <Header />
      <h1 className="heading1">Our services</h1>
      <div className="total-ser">
        <div className="service-container">
          <h5 className="con-heading">EXPLAINER VIDEOS</h5>
          <hr className="line" />
          <p className="con-para">
            Unveil your brand s potential with our captivating explainer videos.
            Engaging visuals, seamless animations, and strategic storytelling
            that educates and inspires action. Elevate your brand with Patco
            Productions. Let s bring your story to life.
          </p>
        </div>
        <div className="service-container">
          <h5 className="con-heading">Motion graphics</h5>
          <hr className="line" />
          <p className="con-para">
            Captivating motion graphics that bring your brand to life. Enhance
            your content with dynamic visuals, engaging animations, and seamless
            transitions. Elevate your message with our expert motion graphics
            services.
          </p>
        </div>
        <div className="service-container">
          <h5 className="con-heading">3D/VFX</h5>
          <hr className="line" />
          <p className="con-para">
            Experience the power of 3D VFX. Mind blowing visual effects,
            realistic simulations, and immersive virtual worlds. Take your
            visuals to new dimensions with cutting edge 3D VFX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
