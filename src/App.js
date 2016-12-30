import React, { Component } from 'react';
import AccountsList from './components/AccountsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to PassKeeper Thingy</h2>
        </div>
        <AccountsList />
      </div>
    );
  }
}

export default App;
