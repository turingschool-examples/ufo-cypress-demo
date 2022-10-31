import React from "react";
import { Redirect } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: "",
      description: "",
      redirect: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInputs = () => {
    this.setState({ location: "", description: "", redirect: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newSighting = {
      location: this.state.location,
      description: this.state.description,
    };

    this.props.addNewSighting(newSighting);
    this.clearInputs();
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to="/" />
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Location of sighting"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            placeholder="Description of sighting"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" value="Report sighting" />
        </form>
      );
    }
  }
}
