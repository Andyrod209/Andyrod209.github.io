import React, { useState } from "react";
import './HomePage.css';
const HomePage = () => {


    return ( 
        <div className="home">
          <h1>Hello! I'm a <u>Full Stack Developer!</u></h1>
            <img className="image-of-andrew" src={process.env.PUBLIC_URL+"images/pic-of-andrew-rodriguez.jpg"} 
                alt ="Picture of Andrew Rodriguez"/>
                
            <p class="home-text">My name is Andrew Rodriguez and I am a software developer!</p>

            <button href={process.env.PUBLIC_URL+"extraFiles/Rodriguez_Resume.pdf"}>Resume</button>
            <button>Projects</button>
        </div> );
}
 
export default HomePage