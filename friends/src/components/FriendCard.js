import React from 'react';

const FriendCard = ({ friend }) => {

    // Editing::
    const handlePut = e => {
        e.preventDefault();
        console.log('Look! Im handling the [PUT] for Friend:::- ', friend.id);
    }
    
    // Deleting::
    const handleDelete = e => {
        e.preventDefault();
        console.log('Look! Im handling the [DELETE] for Friend:::- ', friend.id);
    }

    return (
        <div className='card'>
            <div className='card-main'>
                <h1>{friend.name}</h1>
                <h4>{friend.age}</h4>
                <p>{friend.email}</p>
            </div>
            <div className='card-buttons'>
                <button className='button-update' onClick={handlePut}>Update</button>
                <button className='button-remove' onClick={handleDelete}>Remove</button>
            </div>
        </div>
    );
}

export default FriendCard;