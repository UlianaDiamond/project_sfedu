
/*import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import '../styles/Sidebar.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showOtherComponent, setShowOtherComponent] = useState(false)

    const openSidebar = () => {
        setIsOpen(!isOpen);
    }

    const handleTabClick = () => {

        setShowOtherComponent(true)

    }

    return (
        <div>
            <button className="select" onClick={openSidebar}><FaBars /></button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className="sidebarHeader">Menu</li>
                    
                        <li className="selectedLi" onClick={handleTabClick}>Users</li>
                        <li className="selectedLi" onClick={handleTabClick}>Snippets</li>
                        <li className="selectedLi" onClick={openSidebar}>Back to main page</li>
                    
                </ul>
            </div>
        </div>

    );
};

export default Sidebar;

/*import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import { IconContext } from "react-icons";
//import "../styles/App.css";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(sidebar);


    
  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
   /* return (
        <>
        <IconContext.Provider value={{ color: "undefined"}}>
            <div className="sidebar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                 <ul className="nac-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                            </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.tittle}</span>
                                        </Link>
                                        </li>
                                )
                            })}
                 </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar;*/