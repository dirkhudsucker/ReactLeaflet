import React, { Component } from 'react';

import './App.css';
import './map';
import LeafletMap from './map';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LeafletMap></LeafletMap>
      </div>
    );
  }
}

export default App;
