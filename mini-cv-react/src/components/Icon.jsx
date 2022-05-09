import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    return (
      <div
        className="myIcon shadow"
        style={{ backgroundColor: this.props.backgroundColor || "black" }}
      >
        {this.props.icon ? (
          <FontAwesomeIcon
            icon={this.props.icon}
            style={{ color: this.props.color || "white" }}
          />
        ) : (
          <img src={this.props.image} alt={this.props.title} />
        )}
      </div>
    );
  }
}
