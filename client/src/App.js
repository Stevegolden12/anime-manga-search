import React from 'react';
import './App.css';


const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: '',
      post: '',
      responseToPost: '',
      data: [],
    };
    this.getRequest = this.getRequest.bind(this);
  }



  /*
    componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: "placeholder" }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello'); 
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
*/

  // Make a request for a user with a given ID
  getRequest() {
    const genre = document.getElementById('genreOption').value;
    const randomNum = String(Math.floor(Math.random() * 5000))
    console.log(randomNum)

    const genreApi = 'https://api.jikan.moe/v3/' + genre + '/' + randomNum;
    console.log(genreApi)

    axios.get(genreApi)
      .then((response)=> {
        console.log(response.data)  

        this.setState({
          data: [response.data.title,
                 response.data.image_url,
                response.data.synopsis,
          ]
        })
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
      })

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
        <SelectOption gRequest={this.getRequest} data={this.state.data}/>      
        <br />

        {/* 
        <SearchOption />
        <button onClick={this.getSearchRequest}>Search</button>
        <br />
        <h2>Testing</h2>
        <p>{this.state.response}</p>
        */}
      </div>
    )
  }
}

function SelectOption(props) {
  console.log("props.data: " + props.data)
  return (
    <div>
      <h2>Find a random anime or manga:</h2>     
        <select id="genreOption">
          <option value=""></option>
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>
        <br/>
        {/* onClick={props.gRequest} */}
        <button onClick={props.gRequest}>Get Request</button>    
      <section id="showResults"></section>
      <div>
        <br/>
        <img src={props.data[1]}></img>
        <h3>{props.data[0]}</h3>
        <p id="searchSummary">{props.data[2]}</p>
      </div>
    </div>
  )
}

/*
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
  */


export default App;
