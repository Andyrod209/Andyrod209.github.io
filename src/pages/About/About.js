import React from "react";
import "./About.css"

const About = () => {
    return ( 
        <div className="about">
            <img className="image-of-andrew" src={process.env.PUBLIC_URL+"images/pic-of-andrew-rodriguez.jpg"} 
                alt="Picture of Andrew Rodriguez"/>

            <span><p>Hello I am Andrew Rodriguez a Full Stack Software Developer. I can build all types of
            websites if you need me to! I can study and pull data from a database. I can do anything 
            anything in this field. I just need a company to build more experience. Trust me I will be 
            your best candidate for any coding related job becuase I'll be getting better and better at it!
            Hire me!
            </p></span>
        </div> );
}
 
export default About;