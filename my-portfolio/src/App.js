import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Route'
import Header from './components/Header.js';
import AboutMe from './components/Aboutme.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Welcome to my Portfolio!</h2>;
}
