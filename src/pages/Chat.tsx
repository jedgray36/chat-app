import React, { useState } from 'react';
import FriendsList from '../components/FriendsList';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBox from '../components/ChatBox';
import '../styles/chat.css'

const Chat = () => {
  const [friend, setFriend] = useState('');
    return (
      <>
      <div className='container'>
      <div className='page-title'> <ChatIcon fontSize='inherit'/> Chat with Friends</div>
      <div className='chat'>This is a chat with: {friend}</div>
      <div className='content'>
      <ChatBox />
      </div>
      </div>
      <FriendsList />
      </>
    );
  }
  
  export default Chat;