import React, { useContext, useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { useForm } from '../utils/useForm';

import FriendContext from '../contexts/FriendContext'

const FriendCard = props => {

    const {friendList, setFriendList} = useContext(FriendContext);
    const [editing, setEditing] = useState(false);

    // Editing::
    const submitCallback = () => {
        setEditing(false);
        console.log(values);
        console.log('Look! Im handling the [PUT] for Friend:::- ', props.friend.id);

        axiosWithAuth()     
            .put(`/friends/${props.friend.id}`, values)
            .then(res => {
                console.log('DATA UPDATE RESPONSE: ', res);
                setFriendList(res.data);
            })
            .catch(err => console.log('AxiosWithAuth Error:', err));
    };

    const [values, handleChanges, handleSubmit] = useForm({
        name: props.friend.name,
        age: props.friend.age,
        email: props.friend.email
    },
        submitCallback
    );

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

    const toggleEdit = e => {
        e.preventDefault();
        setEditing(true);
    }

    return (
        <div className='card'>
            <div className='card-main'>
                <h1>{props.friend.name}</h1>
                <h4>{props.friend.age}</h4>
                <p>{props.friend.email}</p>
            </div>
            <div className='card-buttons'>
                <button className='button-update' onClick={toggleEdit}>Update</button>
                <button className='button-remove' onClick={handleRemove}>Remove</button>
            </div>
            {!editing ? (
                <></>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input required type='text' name='name' placeholder={props.friend.name} onChange={handleChanges} value={values.name} />
                    <input required type='number' name='age' placeholder={props.friend.age} onChange={handleChanges} value={values.age} />
                    <input required type='email' name='email' placeholder={props.friend.email} onChange={handleChanges} value={values.email} />
                    <button type='submit'>Save Changes</button>

                </form>
            )}
        </div>
    );
}

export default FriendCard;