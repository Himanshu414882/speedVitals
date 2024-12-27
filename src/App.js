/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dropdowns from './components/Dropdowns';
import Graph from './components/Graph';
import './App.css';

function App() {
    const [metric, setMetric] = useState('lcp');
    const [device, setDevice] = useState('desktop');

    return (
        <div className="App">
            <Navbar />
            <h1>Performance Report</h1>
            <div className="content">
                <Dropdowns metric={metric} device={device} setMetric={setMetric} setDevice={setDevice} />
                <br></br>
                <Graph metric={metric} device={device} />
            </div>
            
        </div>
    );
}

export default App;

