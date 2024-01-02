import React, { useState } from 'react';
import FriendsList from '../components/FriendsList';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBox from '../components/ChatBox';
import '../styles/chat.css'
import FriendDetails from '../components/FriendDetails';
import { Friend } from '../types/friend';
import { Button } from 'react-bootstrap';

const Chat = () => {
  const [friend, setFriend] = useState<Friend>();
  const [showDetails, setShowDetails] = useState(false);
    return (
      <>
      <div className='container'>
      <div className='page-title'> <ChatIcon fontSize='inherit'/> Chat with Friends</div>
      {friend ? (
        <>
        <div className='chat'>
          This is a chat with: {friend?.firstName} 
        <Button variant='secondary' onClick={() => setShowDetails(true)}>Details</Button>
        </div>
        </>
      ) : (<div className='chat'>Please Select a friend on the sidebar to start a chat</div>)}
      
      
      
      {friend && showDetails ? (
        <>
        
      <FriendDetails 
      friend={friend}
      show={showDetails}
      onClose={() => setShowDetails(false)}/>
      </>
      ) : ""}

      {friend ? (
      <div className='content'>
      <ChatBox />
      </div>
      ): ""}

      </div>
      <FriendsList onFriendChange={setFriend}/>
      </>
    );
  }
  
  export default Chat;