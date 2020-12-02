import React, { Component } from "react";

class HandlingEvents extends Component {
  isLogin = false;

  handleLogin = () => {
    this.isLogin = true;
    console.log(this.isLogin);
  };

  handleChange = (slogan) => {
    console.log(slogan);
  };

  renderHtml = () => {
    return (
      <div>
        <button className = "btn btn-success" onClick = {this.handleLogin}>No param</button>
        <button className = "btn btn-primary" onClick = {() => {this.handleChange('hello')}} >param</button>
      </div>
    );
  };

  render() {
  return <div>{this.renderHtml()}</div>
  }
}
export default HandlingEvents;
