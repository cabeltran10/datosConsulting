import navio from "navio"
import React, { Component } from 'react';

export default class NavioComp extends Component {

  componentDidMount() {
    console.log(this.myDiv);

    this.update();
  }

  update() {
    
  }

  render() {
    <div ref={myDiv => this.myDiv = myDiv}>

    </div>
  }
}