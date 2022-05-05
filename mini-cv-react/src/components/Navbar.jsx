import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-md navbar-light bg-white  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#about">
            Bruno <b>Mont</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-end "
            id="myNavbar"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#about">
                About me
              </a>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a className="nav-link" href="#education">
                Education
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
