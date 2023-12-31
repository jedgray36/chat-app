import React, { useState } from 'react';
import '../styles/home.css'
import HomeIcon from '@mui/icons-material/Home';
import { tabsData } from '../data/tabData';

const TabItem = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <div className='tab' onClick={onClick}>
    <h3>{label}</h3>
  </div>
);

const Home = () => {
  const [tab, setTab] = useState('');
  const types = Array.from(new Set(tabsData.map((item) => item.type)))

  const handleTabClick = (type: string) => {
    setTab(type);
    console.log(type)
  }


    return (
      <>
        <div className='container'>
      <div className='page-title'><HomeIcon fontSize='inherit'/>Welcome to FishBowl</div>
      <div className='content'>
        {types.map((tabItem, index) => (
          <TabItem key={index} label={tabItem} onClick={() => handleTabClick(tabItem)}/>
        ))}
        <div>
          {tabsData.filter((item) => item.type === tab).map((tabData) => (
            <div key={tabData.name}>{tabData.name}</div>
          ))}
        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;