import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.css";

import Header from "./components/layout/Header";
import Loader from "./components/navio/Loader"
import Transactions from "./components/transactions/Transactions"
import LoaderTransaction from "./components/transactions/LoaderTransaction"
import Toggle from "./components/layout/Toggle"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Data from the API
      data: [],
      // Status of loading, true is finish
      status: false,
      // Page counter
      cont: 1,
      // Transaction information
      transactions: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/transactions")
      .then(res => this.setState({ transactions: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      transactions: this.state.transactions.map(transaction => {
        if (transaction.id === id) {
          transaction.completed = !transaction.completed;
        }
        return transaction;
      })
    });
  };

  // ChooseData
  chooseData = (url) => {
    axios
      .get(url)
      .then(res => {
        this.setState({ data: res.data })
      })
      .catch(() => { alert("The API URL is not valid") })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="App">
            <Header />
            <Toggle />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Loader />
                </React.Fragment>
              )}
            />
            <Route
              path='/transactions'
              render={(props) => (
                <React.Fragment>
                  <h1>All Transactions</h1>
                  <p>Scroll down to see all the transactions</p>
                  <LoaderTransaction
                    data={this.state.data}
                  />
                  <Transactions
                    transactions={this.state.transactions}
                    markComplete={this.markComplete}
                    loadData={this.loadData}
                    chooseData={this.chooseData}
                  />
                </React.Fragment>
              )}
            />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
