import React from "react";
import './HomePage.css';
const HomePage = () => {


    return ( 
        <div className="home">
          <h1>Hello! I'm a <u>Full Stack Developer!</u></h1>   
            <p class="home-text">My name is Andrew Rodriguez and I am a software developer!</p>
            <form action={process.env.PUBLIC_URL + "extraFiles/Rodriguez_Resume.pdf"} target='_blank'>
              <button type="submit">Resume</button>
            </form>
        </div> );
}
 
export default HomePage