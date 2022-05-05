import React, { Component } from "react";

export default class Contador extends Component {
  render() {
    return (
      <p className="my-5 text-warning font-monospace fs-3">
        {this.props.contador}
      </p>
    );
  }
}
