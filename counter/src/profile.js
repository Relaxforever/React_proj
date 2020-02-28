import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <img src="https://i.redd.it/5ru7p9szvjt21.jpg" width="350" height="300" alt="pic"/>
        <h1>{this.props.name}</h1>
        <p>{this.props.position}</p>
      </div>
    );
  }
}
export default Profile