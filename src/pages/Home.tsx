import React, { useState } from 'react';
import '../styles/home.css'
import HomeIcon from '@mui/icons-material/Home';
import { tabsData } from '../data/tabData';

const TabItem = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <div className={active ? 'tabActive' : 'tabs'} onClick={onClick}>
    <h3>{label}</h3>
  </div>
);

const Home = () => {
  const [tab, setTab] = useState('About');
  const types = Array.from(new Set(tabsData.map((item) => item.type)))

  const handleTabClick = (type: string) => {
    setTab(type);
    console.log(type)
  }


    return (
      <>
        <div className='container'>
      <div className='page-title'>Welcome to FishBowl</div>
      <div className='content'>
        <div className='tabs'>
        {types.map((tabItem, index) => (
            <TabItem key={index} active={tabItem === tab} label={tabItem} onClick={() => handleTabClick(tabItem)}/>
        ))}
        </div>
        <div className='data'> 
          {tabsData.filter((item) => item.type === tab).map((tabData) => (
            <div key={tabData.name}>{tabData.data}</div>
          ))}
        </div>
      </div>
      </div>
      </>
    );
  }
  
  export default Home;