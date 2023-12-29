import React from 'react';
import '../styles/home.css'
import HomeIcon from '@mui/icons-material/Home';


const Home = () => {
    return (
      <>
      <div className='page-title'><HomeIcon fontSize='inherit'/>Welcome to FishBowl</div>
      <div className='mainContent'></div>
      </>
    );
  }
  
  export default Home;