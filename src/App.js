import React from 'react';
import './App.css';

function App () {
  return (
    <div className="App">
      <header id="navbar">
        <h1>HOME</h1>
        <h1>ABOUT</h1>
        <h1>PORTFOLIO</h1>
        <h1>BLOG</h1>
        <h1>CONTACT</h1>
      </header>
      <div className="App-header">
        <h1 className="App-title">Niharika Narain</h1>
        <h3>Technology Consultant >>> Project Manager >>> Scrum Master >>> Fullstack Developer</h3>
      </div>

      <div id="about-section">
        <h1>ABOUT ME</h1>
        <p>I am a fullstack developer with an expertise in Javascript, and knowledge of development processes through my background in technology consulting and agile project management. I love the constant challenge that programming brings with it, and the vast ocean of knowledge and learning opportunities that exist in the space. I have a passion for building beautiful applications with a seamless user experience, while solving problems that people face. See more on me below and reach out if you would like to connect, build something together, or share something!</p>
        <p>Some of my skills:</p>
        <div id="skills-wrapper">
          <div className="skills-item">
            <img src="/images/javascript.png" />
            <h3>Javascript</h3>
            <p>Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript </p>
          </div>
          <div className="skills-item">
            <img src="/images/laptop.png" />
            <h3>Front-End Development</h3>
            <p>Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript </p>
          </div>
          <div className="skills-item">
            <img src="/images/database.png" />
            <h3>Back-End Development</h3>
            <p>Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript </p>
          </div>
          <div className="skills-item">
            <img src="/images/planning.png" />
            <h3>Development Methodologies</h3>
            <p>Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript Javascript </p>
          </div>
        </div>
      </div>

      <div id="portfolio-section">
        <h1>PORTFOLIO</h1>
        <div className="portfolio-wrapper">
          <div className="portfolio-item">
          </div>
          <div className="portfolio-item">
          </div>
          <div className="portfolio-item">
          </div>
        </div>
      </div>

      <div id="blog-section">
        <h1>BLOG</h1>
        <h2>Latest posts</h2>
        <h3><a href="https://medium.com/@niharikanarain/fullstack-academy-junior-phase-and-the-wish-i-had-knowns-761e056e616e">Fullstack Academy - Junior Phase and the Wish-I-had-knowns</a></h3>
        <h3><a href="https://medium.com/@niharikanarain/trying-out-firebase-thoughts-and-getting-started-guide-with-react-4a160c82c45a">Trying out Firebase - Thoughts and Getting Started Guide (with React)</a></h3>
      </div>

    </div>
  );
}

export default App;
