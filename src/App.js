import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
