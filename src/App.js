import React from 'react';
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
    const randomNum = String(Math.floor(Math.random() * 10000))
    console.log(randomNum)

    const genreApi = 'https://api.jikan.moe/v3/' + genre + '/' + randomNum;
    console.log(genreApi)

    axios.get(genreApi)
      .then(function (response) {
        console.log(response.data)
        /********************************************************
         * Access the information and then display it below or a redirect file with express.
         * 
         * 
         * 
         * 
         * ********************************************************/

        // handle success
        return response
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
        <h1>Anime/Manga Searcher</h1>
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
      <h2>Find a random anime or manga:</h2>
      <select id="genreOption">
        <option value="" selected></option>
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
    </div>
  )
}

export default App;
