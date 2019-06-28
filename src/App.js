import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')

// Make a request for a user with a given ID
axios.get('https://api.jikan.moe/v3/anime/1/episodes')
  .then(function (response) {
    const res = JSON.stringify(response)
    // handle success
    return res
  })
  .then(function (res) {
    // handle error
    console.log(res);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

console.log("I can see this!")


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

export default App;
