import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';
import { Link } from '../types/link';
import '../styles/navBar.css'




const NavBar = () => {
    return (
          <div className='Sidebar'>
            <ul className='SidebarList'>
              {sidebarData.map((linkData: Link) => (
              <li 
              key={linkData.title}
              className='row'>
              <NavLink className="title" to={linkData.link}>{linkData.title}</NavLink>
              </li>
              ))}
              
            </ul>
          </div>
      )
  }
  
  export default NavBar;