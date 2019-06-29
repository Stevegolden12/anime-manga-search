import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')


class App extends React.Component {
  constructor(props) {
    super(props);

    this.getRequest = this.getRequest.bind(this);
  }
  // Make a request for a user with a given ID
  getRequest() {
    const genre = document.getElementById('genreOption').value;
    console.log(genre)


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
  }



  render() {
    return (
      <div className="App">
        <h1>Main Header</h1>
        < SelectOption />
        <button onClick={this.getRequest}>Get Request</button>
      </div>
    )
  }
}



function SubmitOption(functCall){
  return(
      <button onClick = { functCall } > Submit</button>
    )
  }

function SelectOption(){
  return (
    <div>
      <h2>Select an option:</h2>
      <select id="genreOption">
        <option value="" selected></option>
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
    </div>
  )
}

export default App;
