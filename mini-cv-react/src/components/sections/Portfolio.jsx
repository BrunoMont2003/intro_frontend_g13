import React, { Component } from "react";
import CardGroup from "../CardGroup";
import pokedex from "../../assets/pokedex.png";
import asteroids from "../../assets/asteroids.png";
import calendar from "../../assets/calendar.png";
const projects = [
  {
    title: "Pokedex",
    image: pokedex,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates sint itaque incidunt, dolor cupiditate, est, quisquam voluptas perspiciatis iure eaque eveniet accusantium consequuntur assumenda! Commodi rem corporis fugit natus.",
  },
  {
    title: "Near Earth Asteroids",
    image: asteroids,
    link: "https://near-earth-asteroids-bruno.netlify.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates sint itaque incidunt, dolor cupiditate, est, quisquam voluptas perspiciatis iure eaque eveniet accusantium consequuntur assumenda! Commodi rem corporis fugit natus.",
  },
  {
    title: "Calendar Utilty",
    image: calendar,
    link: "https://calendar-utility.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates sint itaque incidunt, dolor cupiditate, est, quisquam voluptas perspiciatis iure eaque eveniet accusantium consequuntur assumenda! Commodi rem corporis fugit natus.",
  },
];

export default class Portfolio extends Component {
  render() {
    return (
      <div
        id="portfolio"
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center  container p-5 border-bottom border-dark"
      >
        <h2 className="my-5">Portfolio</h2>
        <CardGroup projects={projects} />
      </div>
    );
  }
}
