import React, { useRef } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const packagesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Ghost Buster Travelers</div>
        <ul>
          <li><button onClick={() => scrollTo(homeRef)}>Home</button></li>
          <li><button onClick={() => scrollTo(aboutRef)}>About Us</button></li>
          <li><button onClick={() => scrollTo(packagesRef)}>Packages</button></li>
          <li><button onClick={() => scrollTo(portfolioRef)}>Portfolio</button></li>
          <li><button onClick={() => scrollTo(contactRef)}>Contact</button></li>
        </ul>
      </nav>
      <div className="container" ref={homeRef}><Home /></div>
      <div className="container" ref={aboutRef}><About /></div>
      <div className="container" ref={packagesRef}><Packages /></div>
      <div className="container" ref={portfolioRef}><Portfolio /></div>
      <div className="container" ref={contactRef}><Contact /></div>
    </>
  );
}

export default App; 