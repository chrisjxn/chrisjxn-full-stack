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
