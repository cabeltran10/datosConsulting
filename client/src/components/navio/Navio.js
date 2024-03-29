import React, { Component } from "react";
import navio from "navio";

class Navio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    let nv = navio(this.myDiv, 600);

    if (this.props.data.length) {
      nv.data(this.props.data);
      nv.addAllAttribs();
    }
  }

  render() {
    return <div ref={myDiv => (this.myDiv = myDiv)} />;
  }
}

export default Navio;
