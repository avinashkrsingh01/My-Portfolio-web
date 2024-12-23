import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/AvinashUpdateResume.pdf"


export default function Home() {
  return (
    <>

    
      <div className="heading-container" id="home">
        <div className="main-heading-container">
          <h1 >Hii 👋 i'm a</h1>
          <h2><Typewriter
            options={{
              strings: ["Frontend Developer!", "Backend Developer!", "Mern Stack Developer!"],
              autoStart: true,
              loop: true,
            }}
          /></h2>
          <div className="buttons">
          <a className="hire-btn" href="https://www.linkedin.com/in/avinashkrsingh01/">Hire Me</a>
          <a className="cv-btn" href={Resume} download="Avinash.Resume.pdf">My Resume</a>
          </div>
        </div>
      </div>

    </>
  );
}
