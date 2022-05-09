import React, { Component } from "react";
import me from "../../assets/me.png";
export default class About extends Component {
  render() {
    return (
      <div
        id="about"
        className="min-vh-100 d-flex justify-content-center align-items-center  container p-5 border-bottom border-dark"
      >
        <div className="row h-100">
          <div className="col-md-4 d-flex justify-content-center align-items-center my-5 my-md-0">
            <img
              className="img-fluid rounded-circle shadow"
              src={me}
              alt="brunomont"
            />
          </div>
          <div className=" col-md-8 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-5 fw-bold">Hi I'm Bruno Mont</h1>
            <h2 className="fw-normal">Web Developer</h2>
            <div className="col-lg-6">
              <p className="lead mb-4">
                I've been learning to code for 3 years ago. I started with
                frontend fundamentals, html - css - js. Now I'm open to learn
                new technologies
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 gap-3"
                >
                  Portfolio
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
