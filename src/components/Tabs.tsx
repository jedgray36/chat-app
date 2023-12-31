import { useState } from 'react';
import { Tab }from 'react-bootstrap';






const Tabs = () => {

    const [key, setKey] = useState('home');

    

    return (
    <>
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
      </>
         
      )
  }
  
  export default Tabs;