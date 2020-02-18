import React, { useState, useEffect, useContext } from 'react';
import FriendCard from './FriendCard';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { useForm } from '../utils/useForm';

import FriendContext from '../contexts/FriendContext'

const FriendList = props => {

    const {friendList, setFriendList} = useContext(FriendContext);
    
    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res);
                setFriendList(res.data);
            })
            .catch(err => console.log('AxiosWithAuth Error:', err));
    }, []);

    const submitCallback = () => {
        console.log(values);

        axiosWithAuth()
            .post('/friends', values)
            .then(res => {
                console.log(res);
                setFriendList(res.data);
            })
            .catch(err => console.log('AxiosWithAuth Error:', err));
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
                <input required type='text' name='name' placeholder='Name' onChange={handleChanges} value={values.name} />
                <input required type='number' name='age' placeholder='Age' onChange={handleChanges} value={values.age} />
                <input required type='email' name='email' placeholder='Email Address' onChange={handleChanges} value={values.email} />
                <button type='submit'>Add</button>
            </form>

            {!friendList ? (
                <h1>Loading List</h1>
            ) : (
                <section className='card-container'>
                    {friendList.map((friend, index) => {
                        return <FriendCard key={friend.id} friend={friend} />
                    })}
                </section>
            )}
        </div>
    );
}

export default FriendList;