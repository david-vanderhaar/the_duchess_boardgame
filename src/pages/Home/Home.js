import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Links from '../../components/Links';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <Links />
      </header>
    </div>
  );
}

export default Home;
