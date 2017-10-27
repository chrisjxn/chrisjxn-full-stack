import React, { Component } from 'react';

import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Private from './components/Private/Private';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Login} exact />
          <Route path='/private' component={Private} />
        </div>
      </HashRouter>
    );
  }
}

export default App;


// note I dropped the database table so this app won't work anymore until I recreate the database. See completed example (full-stack-auth-example) for the SQL table to create. Everything should work again after that
