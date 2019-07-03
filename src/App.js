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

  // Make a request for a user with a given ID
  getSearchRequest() {
    const genre = document.getElementById('genreSearch').value;  
    const searchCh = document.getElementById('searchchar').value;

    const genreApi = 'https://api.jikan.moe/v3/search/' + genre + "?q=" + searchCh + "&page=1";
    console.log(genreApi)

    axios.get(genreApi)
      .then(function (response) {
        console.log(response.data.results)
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
        <SelectOption gRequest={this.getRequest}/>
      
        <br />
        <SearchOption />
        <button onClick={this.getSearchRequest}>Search</button>
        <br />

      </div>
    )
  }
}

function SelectOption(props) {
  return (
    <div>
      <h2>Find a random anime or manga:</h2>
      <form action="/random" method="GET">
        <select id="genreOption">
          <option value=""></option>
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>
        <br/>
        <button onClick={props.gRequest}>Get Request</button> 
      </form>
    </div>
  )
}


function SearchOption(){
  return(
    <div>
      <h2>Search:</h2>
      <select id="genreSearch">
        <option value=""></option>
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
        <option value="person">Person</option>
        <option value="character">Character</option>
      </select>
      <br/>
      <label id="searchfield">What to search for:</label>
      <br/>
      <input id="searchchar" name="searchfield" type="text" minLength="3" placeholder="Must be 3 characters" />
      <br/>
    </div>
    )
  }



export default App;
