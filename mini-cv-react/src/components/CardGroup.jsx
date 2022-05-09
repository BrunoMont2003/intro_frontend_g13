import React, { Component } from "react";
import Card from "./Card";

export default class CardGroup extends Component {
  render() {
    return (
      <article className="row row-cols-1 row-cols-md-3 g-4">
        {this.props.list.map(
          ({ title, description, image, link, imageStyle }, index) => (
            <div className="col" key={index}>
              <Card
                title={title}
                description={description}
                image={image}
                link={link}
                imageStyle={imageStyle}
              />
            </div>
          )
        )}
      </article>
    );
  }
}
