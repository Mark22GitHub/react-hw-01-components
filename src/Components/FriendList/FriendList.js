import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
    <ul className="friend-list">
{ friends.map(friend => (<FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
    ))}
</ul>
)
}


FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}


export default FriendList;