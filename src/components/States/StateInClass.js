import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(){
        super();
        this.state= {
            data : "Tarun"
        }
}
 handleState () {
    this.setState({data : "kumar"})
 }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.handleState()}>Update</button>
      </div>
    )
  }
}
