import React, { Component } from 'react';
import Menu from './common/MainMenu';
import TitleBar from './common/TitleBar';
import Footer from './common/Footer';
import MainContent from './homePage/IndexHome';

import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar/>
        <Menu />
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
