import React, { Component } from "react";
import Gif from "./Gif";

export default class GifGroup extends Component {
  render() {
    return (
      <section className="w-100 py-5 my-5 d-flex gap-5 flex-wrap justify-content-center align-items-center bg-danger">
        {this.props.results.map(
          (
            {
              images: {
                downsized: { url },
              },
              title,
            },
            index
          ) => (
            <Gif key={index} title={title} url={url} />
          )
        )}
      </section>
    );
  }
}
