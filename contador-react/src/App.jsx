import React, { Component } from "react";
import BotonSumar from "./components/BotonSumar";
import Contador from "./components/Contador";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }
  aumenta() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  decrementa() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center flex-column p-5">
          <BotonSumar aumenta={() => this.aumenta()} />
          <Contador contador={this.state.contador} />
          <button className="btn btn-danger" onClick={() => this.decrementa()}>
            Decrementa
          </button>
        </div>
      </>
    );
  }
}
