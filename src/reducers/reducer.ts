import { combineReducers } from 'redux';
import { SELECT_FRIEND } from '../actions/actionTypes';



const selectedFriendReducer = (state = null, action: any ) => {
    switch (action.type) {
        case SELECT_FRIEND:
            return action.payload;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    selectedFriend: selectedFriendReducer
})

export default rootReducer;