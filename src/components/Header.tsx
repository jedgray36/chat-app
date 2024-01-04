import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import '../styles/header.css'
import PhishingIcon from '@mui/icons-material/Phishing';
import Button from 'react-bootstrap/Button';
import SignIn from './SignIn';



const Header = () => {

const [show, setShow] = useState(false);
const [signedIn, setSignedIn] = useState(true);
const [signedInUser, setSignedInUser] = useState(true);
const handleClose = () => setShow(false);

const handleShow = (signedIn: boolean) => {
    if (signedIn === true) {
        setSignedIn(true)
    } else {
        setSignedIn(false);
    }
    setShow(true);
}

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
          <div className='logo'>FishBowl <PhishingIcon /></div>
            <div>{getPageName()}</div>
            <div className='signIn'>
            <Button className='buttons' variant="primary" onClick={() => handleShow(true)}>
        Sign In
      </Button>
      </div>
      {signedInUser ? (
              <Button className='buttons' variant="light" onClick={() => handleShow(false)}>
              Create Account
             </Button>
      ) : ""}

      </div>
      <SignIn show={show} onClose={handleClose} type={signedIn}/>
          </>
      )
  }
  
  export default Header;