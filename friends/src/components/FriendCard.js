import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <div className='card'>
            <div className='card-main'>
                <h1>{friend.name}</h1>
                <h4>{friend.age}</h4>
                <p>{friend.email}</p>
            </div>
            <div className='card-buttons'>
                <button className='button-update'>Update</button>
                <button className='button-remove'>Remove</button>
            </div>
        </div>
    );
}

export default FriendCard;