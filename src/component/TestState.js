import React, { Component } from "react";

class TestState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      slogan: "Click me",
    };
    console.log(this.state);
  }

  handleLogin1 = () => {
    this.setState(
        {
          isLogin: false,
          slogan: "Hello, I'm A",
        },
        () => console.log(this.state)
      );
  }

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
        slogan: "Hello, I'm A",
      },
      () => console.log(this.state)
    );
  };

  render() {
    return this.state.isLogin ? (
      <button className='btn btn-success'>{this.state.slogan}</button>
    ) : (
      <button onClick={this.handleLogin}>{this.state.slogan}</button>
    );
  }
}
export default TestState;
