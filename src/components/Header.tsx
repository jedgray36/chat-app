import React from 'react';
import {useLocation } from 'react-router-dom';
import '../styles/header.css'




const Header = () => {

const location = useLocation();

const getPageName = () => {
    const path = location.pathname;
    let pageName = path.substring(path.lastIndexOf('/') + 1)
    if (location.pathname === "/") {
        pageName = "Home";
        return pageName
    } else {
        return pageName;
    }
}

    return (
        <>
          <div className='header'>
          <div className='logo'>Fish Bowl</div>
            <div>{getPageName()}</div>
          </div>
          </>
      )
  }
  
  export default Header;