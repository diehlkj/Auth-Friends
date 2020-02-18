import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useForm } from '../utils/useForm';
import { axiosWithAuth } from '../utils/AxiosWithAuth';

const Login = () => {
    let history = useHistory();

    const submitCallback = () => {
        axiosWithAuth()
            .post("/login", values)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/friends');
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log('invalid login: ', err)
            })
    }

    const [values, handleChanges, handleSubmit] = useForm({
        username: '',
        password: ''
    },
        submitCallback
    );

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input required type='text' name='username' placeholder='Username' onChange={handleChanges} value={values.username} />
                <input required type='password' name='password' placeholder='Password' onChange={handleChanges} value={values.password} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;