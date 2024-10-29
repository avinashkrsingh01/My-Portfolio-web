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
                <IoHome />
                    {toggle && "Menu"}
                </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <IoPerson />
                    {toggle && "About me"}
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <IoBookSharp />
                {toggle && "Eductions"}
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <RiJavaLine />
                {toggle && "Tech Stack"}
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <BsFillProjectorFill />
                {toggle && "Projects"}
                    </div>
            </div>
            <div className="nav-item">
                <div className='nav-link'>
                <MdWorkHistory />
                {toggle && "Experience"}

                </div>
            </div>
            
            <div className="nav-item">
                <div className='nav-link'>
                <FaPhoneAlt />
                {toggle && "Contact"}
                    </div>
            </div>
            
        </div>
      </div>
      
    </>
        

    
  )
}
