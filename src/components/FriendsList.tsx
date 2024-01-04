import React, { useState } from 'react';
import '../styles/friendsList.css'
import { Friend } from '../types/friend';
import { peopleList } from '../data/friendsData';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
interface FriendsListProps  {
    onFriendChange: (friend: Friend) => void;
}


const FriendsList:React.FC<FriendsListProps> = ({ onFriendChange }) => {

const [friends] = useState(peopleList);

const handleChange = (friend: Friend) => {
onFriendChange(friend)

}


    return (
          <div className='friends-list'>
           <div className='friends'>Friends</div> 
           {friends.map((friend: Friend) => (
            <div key={friend.email} onClick={() => handleChange(friend)} className='friend'> 
            {(friend.gender === 'male' && <PersonIcon />) || (friend.gender === 'female' && <Person2Icon />)}
            {friend.firstName} {friend.lastName}</div>
           ))}
          </div>
      )
  }
  
  export default FriendsList;