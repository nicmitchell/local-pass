import React, { Component } from 'react';
import Account from './components/AccountForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to PassKeeper Thingy</h2>
          <Account />
        </div>
      </div>
    );
  }
}

export default App;
