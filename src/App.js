import React, { Component } from "react";
import "./App.css";
import Navio from "./components/navio/navio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", items: [], isLoaded: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(this.value)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value, isLoaded: true });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Link:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <label>
              Link:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              Name: {item.no} | Email: {item.departamento}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
