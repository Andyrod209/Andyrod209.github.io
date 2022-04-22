import React, { useState } from "react";
const HomePage = () => {


    return ( 
        <div className="home">
            <p>Hello!</p><h1>Hello! I'm a <u>Full Stack Developer!</u></h1>
            <img src={process.env.PUBLIC_URL+"images/pic-of-andrew-rodriguez.jpg"} 
                alt ="Picture of Andrew Rodriguez"
                style={{width: "40%"}}/>
                
            <p class="home-text">My name is Andrew Rodriguez and I am a software developer!</p>
        </div> );
}
 
export default HomePage