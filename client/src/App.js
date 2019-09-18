import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Header from "./components/layout/Header";
import Todos from "./components/home/Todos";
import AddTodo from "./components/home/AddTodo";
import About from "./components/pages/About";
import Loader from "./components/navio/Loader"
import AnimatedLogo from "./components/layout/AnimatedLogo"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // URL of the API
      url: "",
      // Data from the API
      data: [],
      // Status of loading, true is finish
      status: false
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Header />
            <Loader />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
