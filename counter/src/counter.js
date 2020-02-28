import React,  { Component } from "react";

class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
  this.setState({
    counter: this.state.counter + 1
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <p>This is our current count: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
export default Counter