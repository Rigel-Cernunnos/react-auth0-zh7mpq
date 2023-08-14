import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Account extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h2>
          <img width="100%" src={this.props.profile.picture} alt="Profile" />
        </h2>
        <h1>{this.props.profile.name}</h1>
        <p>Well done!</p>
        <Link to="/">
          <div className="btn btn-success btn-lg">Back to Homepage</div>
        </Link>
      </section>
    );
  }
}
