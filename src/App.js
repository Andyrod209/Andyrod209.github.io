import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage.js';
import About from './pages/About/About.js';
import { Routes, Route, } from "react-router-dom";
import Projects from './pages/Projects/Projects.js';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
