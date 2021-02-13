import React from "react";
import PropTypes from 'prop-types';


const FriendListItem = ({avatar,name,isOnline}) => {
    return (
<li className="item">
  <span className="status" style={{backgroundColor: isOnline ? "green" : "red"}}>{isOnline}</span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li>
)
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


export default FriendListItem;