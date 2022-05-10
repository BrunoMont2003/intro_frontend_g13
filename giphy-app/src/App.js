import axios from "axios";
import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";

export default class App extends Component {
  state = {
    search: "",
    results: [],
    loading: true,
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };
  handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_GIPHY_API;
    const question = this.state.search;
    const limit = 20;
    const rating = "G";
    const URI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${question}&limit=${limit}&rating=${rating}`;
    const {
      data: { data },
    } = await axios.get(URI);
    console.log(data);
    this.setState({ results: data, loading: false });
  };

  render() {
    return (
      <div className="min-vh-100 bg-dark container-fluid p-5">
        <SearchBar
          handleChange={(e) => this.handleChange(e)}
          handleSearch={(e) => this.handleSearch(e)}
          search={this.state.search}
        />
        <section className="w-100 py-5 my-5 d-flex gap-5 flex-wrap justify-content-center align-items-center">
          {this.state.results.map(
            (
              {
                images: {
                  downsized: { url },
                },
                title,
              },
              index
            ) => (
              <figure
                style={{ minWidth: "150px", maxWidth: "250px" }}
                key={index}
              >
                <img src={url} alt={title} className="img-fluid" />
              </figure>
            )
          )}
        </section>
      </div>
    );
  }
}
