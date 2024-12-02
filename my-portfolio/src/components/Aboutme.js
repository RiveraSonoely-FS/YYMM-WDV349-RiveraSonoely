import React from 'react';
import './css/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="profile-image">
        <img src="profile.jpg" alt="Sonoely" />
      </div>
      <div className="bio">
        <h2>About Me</h2>
        <p>Hi, I'm Sonoely Rivera, a passionate web developer specializing in front-end development using React. I love solving problems and building dynamic, user-friendly applications.</p>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React, Node.js, Axios)</li>
          <li>HTML, CSS, & Bootstrap</li>
          <li>Git & GitHub</li>, 
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
