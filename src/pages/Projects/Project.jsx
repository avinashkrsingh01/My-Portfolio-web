import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="project-container" id="projects">
        <h1>My Projects</h1>
        <p className="tech-contant">
          here is my top 6 projects with live links and sources code Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Incidunt qui totam quo
          amet officiis debitis repudiandae officia aliquid magnam sit, delectus
          perferendis esse nisi ut distinctio dicta? Deserunt, aperiam eligendi.
        </p>
        <div className="projects-cards">
            
          <div className="project-card">
            <span className="card-notify-badge">Full-stack</span>
            <img src="https://th.bing.com/th/id/OIP.5qDsMnKCfnfQ124iaR1ddwHaEc?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">React</div>
            <div className="techstack-used">Node.js</div>
            <div className="techstack-used">Express</div>
            </div>
              <h5 className="card-title">RozaarAI</h5>
              <p className="card-text">
              A comprehensive platform offering a one-stop solution for job seekers with personalized career guidance.
              </p>
              <a href="https://github.com/avinashkrsingh01/RozgaarAI" className="btn btn-primary">
               CLICK TO VIEW
              </a>
            </div>
          </div>
          <div className="project-card">
          <span className="card-notify-badge">Frontend</span>
            <img src="https://th.bing.com/th/id/OIP.xow4mqfTDmvci0PJuOG7TgHaEf?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">HTML</div>
            <div className="techstack-used">CSS</div>
            <div className="techstack-used">Javascript</div>
            </div>
              <h5 className="card-title">WeatherApp</h5>
              <p className="card-text">
              A dynamic Weather App website delivering real-time Weather updates with HTML, CSS, and JavaScript.
              </p>
              <a href="https://github.com/avinashkrsingh01/WeatherApp" className="btn btn-primary">
              CLICK TO VIEW
              </a>
            </div>
          </div>
          <div className="project-card">
          <span className="card-notify-badge">Fullstack</span>
            <img src="https://th.bing.com/th/id/OIP.5qDsMnKCfnfQ124iaR1ddwHaEc?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">React</div>
            
            </div>
              <h5 className="card-title">Dumb Charades</h5>
              <p className="card-text">
              A fun Dumb Charades website allowing users to play and guess words in an interactive game format.
              </p>
              <a href="https://github.com/avinashkrsingh01/Dumb_charades" className="btn btn-primary">
              CLICK TO VIEW
              </a>
            </div>
          </div>
          <div className="project-card">
          <span className="card-notify-badge">MobileApp</span>
            <img src="https://www.inry.com/hs-fs/hubfs/INRY/IMG/insights/content/4046/servicenow-ppm-use-cases.png?width=635&name=servicenow-ppm-use-cases.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">Mop</div>
            <div className="techstack-used">MobileApp</div>
            <div className="techstack-used">MobileApp</div>
            </div>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
              CLICK TO VIEW
              </a>
            </div>
          </div>
          <div className="project-card">
          <span className="card-notify-badge">Fullstack</span>
            <img src="https://th.bing.com/th/id/OIP.5qDsMnKCfnfQ124iaR1ddwHaEc?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">Mop</div>
            <div className="techstack-used">MobileApp</div>
            <div className="techstack-used">MobileApp</div>
            </div>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
              CLICK TO VIEW
              </a>
            </div>
          </div>
          <div className="project-card">
          <span className="card-notify-badge">Frontend</span>
            <img src="https://th.bing.com/th/id/OIP.qEsa_caAtgcPq1_U02Dc9QAAAA?w=474&h=266&rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
            <div className="card-body">
            <div className="teckstackss-usedd">
            <div className="techstack-used">CSS</div>
            <div className="techstack-used">HTML</div>
            <div className="techstack-used">MobileApp</div>
            </div>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
              CLICK TO VIEW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
