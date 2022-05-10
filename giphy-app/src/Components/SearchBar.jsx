import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <form
        action="#"
        onSubmit={async (e) => {
          await this.props.handleSearch(e);
        }}
        className="d-flex gap-3"
      >
        <input
          type="text"
          placeholder="Search all the GIFs and Stickers"
          className="form-control w-auto"
          value={this.props.search}
          onChange={(e) => this.props.handleChange(e)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    );
  }
}
