import React from "react";
import "./About.css"

const About = () => {
    return ( 
        <div className="about">
            <img className="image-of-andrew" src={process.env.PUBLIC_URL+"images/pic-of-andrew-rodriguez.jpg"} 
                alt="Picture of Andrew Rodriguez"/>

            <span>
                <h4>About Me</h4>
                <p>Hello I am Andrew Rodriguez a Full Stack Software Developer. I went through a fast paced 
                    14-week full stack course ( You can find my certification of completion 
                    <a href={process.env.PUBLIC_URL + "extraFiles/AndrewRodriguezCertificate.pdf"} target="_blank"> here</a> ).
                    I am an aspiring developer looking for work. I am motivated to expand my knowledge in this field. 
                </p>
            </span>
        </div> );
}
 
export default About;