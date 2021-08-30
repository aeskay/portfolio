import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import './viewports.css';
import Home from './components/Home';
import Navigation from './components/layouts/Navigation';
import './loaders.js'
import Skills from './components/Skills';
import Services from './components/Services';
import ContactPop from './components/ContactPop';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function Container() {

  const handlePopOpen = () => {
    document.querySelector('.popBack').classList.remove('hidden')
    document.querySelector('.popBack').classList.add('showing')
}

  return (
    <div className="App">
      <div className="popBack hidden">
        <ContactPop/>
      </div>
      <div className="navSection">
        <Navigation/>
      </div>
      <div className="otherSection">
        <div className="firstSection">
          <div className="centralize logo-text">
            <span className="span1 samuel">SAMUEL</span> <span className="span2 alalade">ALALADE</span>
            <button onClick={handlePopOpen} className="contactBtn">Contact Me</button>
          </div>
          <Home/>
        </div>
        <div className="secondSection">
          <Skills/>
        </div>
        <div className="">
          <Services/>
        </div>
        <div>
          <Portfolio/>
        </div>
        <div>
          <Testimonials/>
        </div>
        <div>
          <Contact/>
        </div>
        <div className="darkMode">
          <img src="/images/nightday.png" alt="Dark/Light Mode" width="50px"/>
        </div>
        <div className="footerBtn">
            Copyright &copy;2021 SKA Technologies
        </div>
      </div>
      
    </div>
  );
}

export default Container;
