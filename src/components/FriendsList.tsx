import React, { useState } from 'react';
import '../styles/friendsList.css'
import { Friend } from '../types/friend';





const FriendsList = () => {

const [friends, setFriends] = useState([]);

    return (
          <div className='friends-list'>
           <div className='friends'>Friend List</div> 
           {friends.map((friend: Friend) => (
            <div>{friend.name}</div>
           ))}
          </div>
      )
  }
  
  export default FriendsList;