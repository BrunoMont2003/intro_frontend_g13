import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.image}
          className="card-img-top"
          alt={this.props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a
            href={this.props.link}
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Visit
          </a>
        </div>
      </div>
    );
  }
}
