import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';
import { Link } from '../types/link';
import '../styles/navBar.css'
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsModal from './settingsModal';



const NavBar = () => {

const [settings, setSettings] = useState(false);


const onClose = () => {
  setSettings(false);
}

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <HomeIcon />;
      case 'Chat':
        return <ChatIcon />;
      default:
        return null;
    }
  };


    return (
          <div className='Sidebar'>
            <ul className='SidebarList'>
              {sidebarData.map((linkData: Link) => (
              <li 
              key={linkData.title}
              className='row'>
              <NavLink className='title' to={linkData.link}>
                <span className='icon'>{getIcon(linkData.icon)} </span>
                {linkData.title}</NavLink>
              </li>
              ))}

            </ul>
            <div className='settings-container'>
              <li onClick={() => setSettings(true)} className='settings'>
                <span className='icon'><SettingsIcon /></span>Settings
                </li>
              </div>
              <SettingsModal show={settings} onClose={onClose}/>
          </div>
          
      )
  }

  
  
  export default NavBar;