import React from 'react';
import '../HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Workplace</h1>
        <p>Your success starts here</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a leading company in our industry, committed to providing
          excellent services and support to our clients. Our team of
          professionals is dedicated to ensuring your needs are met.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Consulting Services</li>
          <li>Project Management</li>
          <li>Technical Support</li>
          <li>Training and Development</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Get Started</h2>
        <p>Ready to take the next step? Contact us today!</p>
       
      </section>
    </div>
  );
};

export default HomeComponent;
