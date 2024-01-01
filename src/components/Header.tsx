import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import '../styles/header.css'
import PhishingIcon from '@mui/icons-material/Phishing';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Header = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
            <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </div>

          </>
      )
  }
  
  export default Header;