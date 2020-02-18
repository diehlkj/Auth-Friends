import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { useForm } from '../utils/useForm';

const FriendList = () => {

    const [friends, setFriends] = useState();
    
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => console.log('AxiosWithAuth Error:', err));
    }, []);

    const submitCallback = () => {
        console.log(values);
    };

    const [values, handleChanges, handleSubmit] = useForm({
        name: '',
        age: '',
        email: ''
    },
        submitCallback
    );
        
    return (
        <div className='friend-list'>

            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name' onChange={handleChanges} value={values.name} />
                <input type='number' name='age' placeholder='Age' onChange={handleChanges} value={values.age} />
                <input type='email' name='email' placeholder='Email Address' onChange={handleChanges} value={values.email} />
                <button type='submit'>Add</button>
            </form>

            {!friends ? (
                <h1>Loading List</h1>
            ) : (
                <section className='card-container'>
                    {friends.map((friend) => {
                        return <FriendCard key={friend.id} friend={friend} />
                    })}
                </section>
            )}
        </div>
    );
}

export default FriendList;