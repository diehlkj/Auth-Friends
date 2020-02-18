import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import './utils/styles/css/index.css';

import FriendList from './components/FriendList';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import FriendContext from './contexts/FriendContext';

function App() {

  const [friendList, setFriendList] = useState();

  return (
    <FriendContext.Provider value={{friendList, setFriendList}} >
      <div className="App">
        <Switch>
          <ProtectedRoute exact path='/friends' component={FriendList}/>
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </FriendContext.Provider>
  );
}

export default App;
