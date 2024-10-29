import React from 'react'
import { useState } from 'react';
import Home from '../../pages/Home/Home'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import "./Layout.css"
import Menu from '../Menus/Menu';
import About from '../../pages/About/About';
import Techstack from '../../pages/TechStack/Techstack';
import Project from '../../pages/Projects/Project';

const Layout = () => {
    const [toggle, setToggle] = useState(true);
    //change toggle
    const handleToggle =()=>{
        setToggle(!toggle)
    }
  return (
    <>
      <div className="sidebar-section">
        <div className='menu-fix'>
        <div className={toggle ? "sidebar-toggle":"sidebar"}>
            <div className="sidebar-icons">
                <p onClick={handleToggle}>
                    {toggle ? (
                        <AiOutlineDoubleLeft size={45}/>
                    ) : (
                        <AiOutlineDoubleRight size={45}/>
                    )}
                </p>
            </div>
                    <Menu toggle={toggle} />
                    
        </div>
        </div>
        <div className={toggle ? "container-toggle":"container"}>
            
            <Home/>
            <About/>
            <Techstack/>
            <Project/>
        </div>
      </div>
    </>
  )
}

export default Layout
