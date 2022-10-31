import React from 'react';
import Sightings from '../Sightings/Sightings';
import Form from '../Form/Form';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sightings: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/sightings')
      .then(res => res.json())
      .then(sightings => this.setState({sightings: sightings.reverse()}))
      .catch(error => this.setState({error: error}))
  }

  addNewSighting = newSighting => {
    console.log(newSighting)
    fetch('http://localhost:3001/sightings', {
      method: 'POST',
      body: JSON.stringify(newSighting),
      headers: {"Content-Type": "application/json"}
    })
      .then(res => res.json())
      .then(response => this.setState({sightings: [response, ...this.state.sightings]}))
      .catch(error => this.setState({error: error}));
  }

  render() {
    return (
      <>
        <h1>👁 SkyWatcher 👁</h1>
        <nav>
          <NavLink exact to='/'>Sightings</NavLink>
          <NavLink to='/report'>Report a new sighting</NavLink>
        </nav>

        {this.state.error && <p>{this.state.error}</p>}
        {!this.state.sightings.length && <p>Loading ...</p>}
        {this.state.sightings.length && 
          <Route exact path="/"
            render={() => <Sightings sightings={this.state.sightings} />} />
        }
        <Route exact path='/report' render={() => <Form addNewSighting={this.addNewSighting} />} />
      </>
    )
  }
}