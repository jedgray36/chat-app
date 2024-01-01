import React, { useState } from 'react';
import '../styles/friendsList.css'
import { Friend } from '../types/friend';
import { peopleList } from '../data/friendsData';





const FriendsList = () => {

const [friends, setFriends] = useState(peopleList);

    return (
          <div className='friends-list'>
           <div className='friends'>Friends</div> 
           {friends.map((friend: Friend) => (
            <div className='friend'>{friend.firstName} {friend.lastName}</div>
           ))}
          </div>
      )
  }
  
  export default FriendsList;