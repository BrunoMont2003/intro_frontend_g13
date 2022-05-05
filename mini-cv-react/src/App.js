import React, { Component } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Navbar />
          <About />
          <Portfolio />
        </div>
      </>
    );
  }
}
