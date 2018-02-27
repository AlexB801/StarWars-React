import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import people from './components/People.js';
// import planets from './components/Planets.js';
// import films from './components/Films.js';
// import species from './components/Species.js';
// import vehicles from './components/Vehicles.js';
// import starships from './components/Starships.js'

const url = "https://swapi.co/api/"  //BaseURL

class App extends Component {
  state = { data: {} }

  componentWillMount = () => {
    axios.get(url)
      .then( res => this.setState({ data: res.data }) )
    .catch(function (err) {
      console.log(err)
    })
  }

  render() {
    let {
      data: {
        people,
        planets,
        films,
        species,
        vehicles,
        starships
      }
    } = this.state

    return (
      <div>
        <div className="App">
            <h1 className="App-title">Star Wars!</h1>
        </div>
        <div>
          PEOPLE: {people}
        </div>
        <div>
          PLANETS: {planets}
        </div>
        <div>
          FILMS: {films}
        </div>
        <div>
          SPECIES: {species}
        </div>
        <div>
          VEHICLES: {vehicles}
        </div>
        <div>
          STARSHIPS: {starships}
        </div>
      </div>
    );
  }
}

export default App;
