import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Links from '../components/Links';

function Play() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Play.js</code> and save to reload.
        </p>
        <Links />
      </header>
    </div>
  );
}

export default Play;
