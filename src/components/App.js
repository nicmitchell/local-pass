import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <h2>PassKeeper Thingy</h2>
        </div>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

export default App;
