import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage.js';
import About from './pages/About/About.js';
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
