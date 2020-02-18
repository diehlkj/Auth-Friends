import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import './utils/styles/css/index.css';

import FriendList from './components/FriendList';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path='/friends' component={FriendList}/>
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
