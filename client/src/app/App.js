import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PasswordGenerator from './pages/PasswordGenerator.js';

class App extends Component {
  render() {
    const App = () => (
      <div id="appContainer">
        <Switch>
          <Route exact path='/' component={PasswordGenerator}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App style={{background: "url(/images/background1.jpg)"}}/>
      </Switch>
    );
  }
}

export default App;
