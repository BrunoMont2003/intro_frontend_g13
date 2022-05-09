import React, { Component } from "react";
import Card from "./Card";

export default class CardGroup extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {this.props.projects.map(
          ({ title, description, image, link }, index) => (
            <div className="col" key={index}>
              <Card
                title={title}
                description={description}
                image={image}
                link={link}
              />
            </div>
          )
        )}
      </div>
    );
  }
}
