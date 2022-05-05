import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div
        id="portfolio"
        className="min-vh-100 d-flex justify-content-center align-items-center  container p-5 border-bottom border-dark"
      >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div class="card">
              <img
                src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/6244da3f3629660008a91be9/screenshot_2022-03-30-22-31-36-0000.png"
                class="card-img-top"
                alt="Near Earth Asteroids"
              />
              <div class="card-body">
                <h5 class="card-title">Near Earth Asteroids</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://near-earth-asteroids-bruno.netlify.app/"
                  target="_blank"
                  class="btn btn-primary"
                  rel="noreferrer"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/6244d9bec0aa6500081336fb/screenshot_2022-03-30-22-29-26-0000.png"
                class="card-img-top"
                alt="Pokedex"
              />
              <div class="card-body">
                <h5 class="card-title">Pokedex</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://pokedex-bruno.netlify.app/"
                  target="_blank"
                  class="btn btn-primary"
                  rel="noreferrer"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://gateway.pinata.cloud/ipfs/QmRzYQ3BWEcgEnbKG5DADQZT7AWmfAKBJpBgpJWCGEYYEP"
                class="card-img-top"
                style={{ maxHeight: "207px", objectFit: "contain" }}
                alt="Calendar Utilty"
              />
              <div class="card-body">
                <h5 class="card-title">Calendar Utilty</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://calendar-utility.vercel.app/"
                  target="_blank"
                  class="btn btn-primary"
                  rel="noreferrer"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
