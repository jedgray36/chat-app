import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import FriendsList from '../components/FriendsList';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBox from '../components/ChatBox';
import '../styles/chat.css'
import FriendDetails from '../components/FriendDetails';
import { Button } from 'react-bootstrap';
import { selectFriend } from '../actions/actions';

const Chat = () => {

const selectedFriend = useSelector((state: any) => state.selectedFriend)
const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

const handleFriendChange = (friend: any) => {
  dispatch(selectFriend(friend))
}

    return (
      <>
      <div className='container'>
      <div className='page-title'> <ChatIcon fontSize='inherit'/> Chat with Friends</div>
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
      <ChatBox />
      </div>
      ): ""}

      </div>
      <FriendsList onFriendChange={handleFriendChange}/>
      </>
    );
  }
  
  export default Chat;