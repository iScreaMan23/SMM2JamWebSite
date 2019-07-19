import React from 'react';
import logo from './ScreamIRLRaw.png';
import './App.css';
import Levels from './components/levels/levels.js';

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Levels />
        </div>
    );
}

export default App;
