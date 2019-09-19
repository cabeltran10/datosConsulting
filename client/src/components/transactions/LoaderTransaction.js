import React, { Component } from "react";

import "../navio/loader.css";

import Navio from "../navio/Navio";

class LoaderTransaction extends Component {
  // Style

  getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    return (
      <React.Fragment>
        <div className="container navioRow">
          <Navio data={this.props.data} />
        </div>
      </React.Fragment>
    );
  }
}
export default LoaderTransaction;
