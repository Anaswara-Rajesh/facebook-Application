import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from './LoginHeader';
import Login from './Login';
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import './App.css';
import { auth } from './firebase.js';
import HomeHeader from './HomeHeader.js';
import Sidebar from './Sidebar.js';

function App() {

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
          <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
            <div className="app__page">
              <Sidebar user={user} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
