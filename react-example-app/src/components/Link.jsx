import React, { Component } from "react";

export default class Link extends Component {
  render() {
    return (
      <a
        href="https://reactjs.org/docs/getting-started.html"
        target="_blank"
        className="btn btn-outline-light my-5"
        rel="noreferrer"
      >
        Learn More
      </a>
    );
  }
}
