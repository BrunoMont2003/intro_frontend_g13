import React, { Component } from "react";

export default class Gif extends Component {
  render() {
    return (
      <figure style={{ minWidth: "150px", maxWidth: "250px" }}>
        <img
          src={this.props.url}
          alt={this.props.title}
          className="img-fluid"
        />
      </figure>
    );
  }
}
