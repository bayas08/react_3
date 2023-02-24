
import './App.css';

import React from 'react';


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Geektech",
      age: 15
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Geeks",
      age: 15
    })
  }
  render() {
    return (
        <div>
          <p>Name: {this.state.name}  age: {this.state.age}</p>
          <button onClick={this.handleClick}>click</button>
        </div>
    );
  }
}

export default Box;