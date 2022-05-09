import React, { Component } from "react";
import About from "./components/sections/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/sections/Portfolio";
import Education from "./components/sections/Education";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Navbar />
          <About />
          <Portfolio />
          <Education />
        </div>
      </>
    );
  }
}
