import React, { Component } from "react";

export default class BotonSumar extends Component {
  render() {
    return (
      <button className="btn btn-success" onClick={this.props.aumenta}>
        Aumenta
      </button>
    );
  }
}
