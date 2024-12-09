// src/App.jsx
import React from 'react';
import './App.css';
import Profile from './Profile';

function App() {
  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' },
    { platform: 'GitHub', url: 'https://github.com/johndoe' },
    { platform: 'Twitter', url: 'https://twitter.com/johndoe' },
  ];

  const skills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML & CSS',
    'MongoDB',
  ];

  const hobbies = [
    'Hiking',
    'Photography',
    'Coding',
    'Reading Sci-Fi Novels',
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained full-stack applications using React and Node.js. Worked on improving application performance and implementing new features.'
    },
    {
      role: 'Front-End Developer',
      company: 'WebDev Co.',
      description: 'Designed and developed responsive websites using HTML, CSS, and JavaScript. Improved UI/UX and collaborated with back-end developers to integrate APIs.'
    }
  ];

  return (
    <div className="app-container">
      <Profile
        name="Jasper Jhay M. Sanchez"
        tagline="Full Stack Developer | JavaScript Enthusiast"
        imageSrc="https://i.imgur.com/dBRXFFE.jpeg"
        bio="I am a passionate web developer with a love for creating beautiful and functional websites. I specialize in full-stack development with React, Node.js, and more."
        email="jasperjsanz@gmail.com"
        phone="+123 456 7890"
        socialLinks={socialLinks}
        skills={skills}
        hobbies={hobbies}
        experience={experience}
      />
    </div>
  );
}

export default App;