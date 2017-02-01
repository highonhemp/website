import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './common/Menu';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>High On Hemp</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu />
      </div>
    );
  }
}

export default App;
