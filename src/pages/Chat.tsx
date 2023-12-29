import React from 'react';
import FriendsList from '../components/FriendsList';
import ChatIcon from '@mui/icons-material/Chat';


const Chat = () => {
    return (
      <>
      <div className='page-title'> <ChatIcon fontSize='inherit'/> Chat with Friends</div>
      <FriendsList />
      </>
    );
  }
  
  export default Chat;