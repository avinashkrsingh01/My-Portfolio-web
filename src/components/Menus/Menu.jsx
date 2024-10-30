import React from 'react'
import "./Menu.css";
import pic from "./ProfilePic.jpeg";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { RiJavaLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { BsFillProjectorFill } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { Link } from "react-scroll";



export default function Menu({toggle}) {
  return (
    <>
        <div className="navbar-profile-pic">
        {toggle &&<img  src={pic} alt="Profile pic" />}
      </div>
      <div>
        <div className="nav-items">
            <div className="nav-item">
                <div className='nav-link'>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                <IoHome />
                    {toggle && "Menu"}
                  </Link>
                </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>

                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <IoPerson />
                    {toggle && "About me"}
                  </Link>
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>

                <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                <IoBookSharp />
                {toggle && "Eductions"}
                    
                  </Link>
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <RiJavaLine />
                {toggle && "Tech Stack"}
                  </Link>
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>

                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <BsFillProjectorFill />
                {toggle && "Projects"}
                  </Link>
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <MdWorkHistory />
                {toggle && "Experience"}
                  </Link>

                </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <Link
                    to="Acchivment"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <GiPodiumWinner />
                {toggle && "Acchivments"}
                  </Link>

                </div>
            </div>
            
            <div className="nav-item">
                <div className='nav-link'>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    
                <FaPhoneAlt />
                {toggle && "Contact"}
                  </Link>
                    </div>
            </div>
            
        </div>
      </div>
      
    </>
        

    
  )
}
