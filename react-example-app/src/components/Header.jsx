import React, { Component } from "react";
import Description from "./Description";
import Imagen from "./Imagen";
import Titulo from "./Titulo";
import Link from "./Link";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Imagen />
        <Description />
        <Link />
        <Titulo />
      </header>
    );
  }
}
