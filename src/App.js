import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./containers/Header";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
