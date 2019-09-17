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

  onChange() {
    console.log(this.state);
    this.setState({
      inValue: this.myIn=value
    })
  }

  render() {
    
  }
}

export default App;
