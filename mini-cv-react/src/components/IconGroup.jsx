import React, { Component } from "react";
import Icon from "./Icon";

export default class IconGroup extends Component {
  render() {
    return (
      <div className="p-5 w-100 d-flex gap-4 flex flex-wrap justify-content-center align-items-center">
        {this.props.list.map((element, index) => (
          <Icon
            key={index}
            icon={element.icon}
            image={element.image}
            backgroundColor={element.backgroundColor}
            color={element.color}
            name={element.name}
          />
        ))}
      </div>
    );
  }
}
