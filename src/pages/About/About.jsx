import React from "react";
import "./About.css";
import AboutPic from "../../assets/images/AboutPic.jpg";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="about-img">
            <img
              className="imgg"
              src={AboutPic}
              alt="My Photo"
              height={520}
              width={360}
            />
          </div>
          <div className="col-md-6 about-contant">
            <h1> About Me</h1>
            <p>
              Hello! I'm Avinash Kumar Singh, a passionate and driven B.Tech
              student at Polaris School of Technology in Gurugram, Haryana,
              graduating in 2027. My expertise lies in front-end development,
              competitive coding, and building innovative projects that solve
              real-world problems. Through extensive training at FunctionUp, I
              honed my technical skills in front-end technologies such as React,
              JavaScript, HTML, CSS, and Tailwind CSS. I also dive deep into
              backend technologies, mastering Express.js, JSON, and API
              creation. My journey is defined by continuous learning—whether
              it’s mastering Java, exploring number theory for competitive
              programming, or contributing to open-source projects. I’m a keen
              problem-solver, always pushing my limits by participating in
              hackathons and coding competitions. Recently, my team secured 2nd
              place in the Hack With Uttarakhand Hackathon, where we presented
              "Rozgaar AI," an AI-powered solution for job seekers. I also have
              a strong interest in localization and love staying updated with
              current global events. In addition to coding, I’m working on my
              portfolio website and job portal, where developers can share
              insights, create resumes, and prepare effectively for interviews.
              Let’s connect and create something impactful together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
