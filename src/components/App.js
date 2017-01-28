import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './App.css';
import './style.css';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <div className="header">
          <h2><Glyphicon glyph="lock" /> PassKeeper</h2>
        </div>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

export default App;
