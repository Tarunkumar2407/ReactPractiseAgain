import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            data: "tarun"
        }
    }
  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <button onClick={() => this.setState({data: "kumar"})}>Click Me</button>
      </div>
    )
  }
}
