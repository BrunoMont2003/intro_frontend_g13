import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <section
        id={this.props.section}
        className={`min-vh-100 d-flex justify-content-center align-items-center  container p-5 border-bottom border-dark ${this.props.className}`}
      >
        {this.props.children}
      </section>
    );
  }
}
