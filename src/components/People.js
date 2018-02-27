import React, { Component } from 'react';
import axios from 'axios';

class People extends Component {
  state = { data: {} }

  componentWillMount = () => {
    axios.get(`https://swapi.co/api/people/`)
      .then( res => this.setState({ data: res.data }) )
    .catch(function (err) {
      console.log(err)
    })
  }

  render() {
    let {
      data: {
        name,
        birth_year,
        eye_color,
        gender,
        hair_color,
        height,
        mass,
        skin_color,
        homeworld,
        films,
        species,
        starships,
        vehicles
      }
    } = this.state

    return (
      <div>
        <div>
          PEOPLE: {people}  //Unsure of this return...
        </div>
      </div>
    );
  }
}

export default People;
