import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import FriendsList from '../components/FriendsList';
import ChatBox from '../components/ChatBox';
import '../styles/chat.css'
import FriendDetails from '../components/FriendDetails';
import { Button } from 'react-bootstrap';
import { selectFriend } from '../actions/actions';
import { io } from 'socket.io-client';

const Chat = () => {

  const socket = io('http://localhost:3001', {
    transports: ['websocket']
});

const selectedFriend = useSelector((state: any) => state.selectedFriend)
const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

const handleFriendChange = (friend: any) => {
  dispatch(selectFriend(friend))
}

    return (
      <>
      <div className='container'>
      <div className='page-title'>Chat with Friends</div>
      {selectedFriend ? (
        <>
        <div className='chat'>
          This is a chat with: {selectedFriend?.firstName} 
        <Button variant='secondary' onClick={() => setShowDetails(true)}>Details</Button>
        </div>
        </>
      ) : (<div className='chat'>Please Select a friend on the sidebar to start a chat</div>)}
      
       
      
      {selectedFriend && showDetails ? (
        <>
        
      <FriendDetails 
      friend={selectedFriend}
      show={showDetails}
      onClose={() => setShowDetails(false)}/>
      </>
      ) : ""}

      {selectedFriend ? (
      <div className='content'>
      <ChatBox socket={socket}/>
      </div>
      ): ""}

      </div>
      <FriendsList onFriendChange={handleFriendChange}/>
      </>
    );
  }
  
  export default Chat;