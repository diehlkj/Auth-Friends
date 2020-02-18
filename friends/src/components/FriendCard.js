import React, { useContext } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

import FriendContext from '../contexts/FriendContext'

const FriendCard = props => {

    const {friendList, setFriendList} = useContext(FriendContext);

    // Editing::
    const handlePut = e => {
        e.preventDefault();
        console.log('Look! Im handling the [PUT] for Friend:::- ', props.friend.id);

        // axios     
        //     .put(`http://somecoolurl.com/${couldHaveDynamicId}`, updatedData)
        //     .then(response => {
        //         response is the response we get back from the server
        //         Whatever resource was changed should be reflected in our client
        //     })
        //     .catch(err => {
        //         if something goes wrong, we handle any errors here
        //     });
    }
    
    // Deleting::
    const handleRemove = e => {
        e.preventDefault();
        console.log('Look! Im handling the [DELETE] for Friend:::- ', props.friend.id);

        axiosWithAuth()     
            .delete(`/friends/${props.friend.id}`)
            .then(res => {
                console.log('DELETED RESPONSE: ', res);
                setFriendList(res.data);
            })
            .catch(err => console.log('AxiosWithAuth Error:', err));
    }

    return (
        <div className='card'>
            <div className='card-main'>
                <h1>{props.friend.name}</h1>
                <h4>{props.friend.age}</h4>
                <p>{props.friend.email}</p>
            </div>
            <div className='card-buttons'>
                <button className='button-update' onClick={handlePut}>Update</button>
                <button className='button-remove' onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default FriendCard;