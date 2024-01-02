import { SELECT_FRIEND } from './actionTypes';


export const selectFriend = (friendId: string) => ({
    type: SELECT_FRIEND,
    payload: friendId,
})