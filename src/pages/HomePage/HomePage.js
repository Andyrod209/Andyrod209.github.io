import React, { useState } from "react";
import './HomePage.css'


const HomePage = () => {

    const homeImage = process.env.PUBLIC_URL+"images/pic-of-andrew-rodriguez.jpg"

    return ( 
        <div className="home">
            <img className="home-image" src={homeImage} 
                alt ="Picture of Andrew Rodriguez"
                style={{border:"", width: "30%"}}/>
            <p class="home-text"> Hello! I'm a <u><b>Full Stack Developer!</b></u> 
            <br/>My name is Andrew Rodriguez and I am a software developer!</p>
        </div> 
    );
}
//  figure out how to style image
export default HomePage