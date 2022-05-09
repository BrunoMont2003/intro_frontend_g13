import React, { Component } from "react";
import Layout from "../Layout";
import CardGroup from "../CardGroup";
import unt from "../../assets/unt.jpg";
import devf from "../../assets/devf.png";

const education = [
  {
    title: "National University of Trujillo ~ Peru",
    image: unt,
    description:
      "I am currently studying the 5th cycle of Systems Ingeneering career.",
  },
  {
    title: "DEV.F ~ Mexico",
    image: devf,
    imageStyle: { objectFit: "cover", height: "175px" },
    description:
      "I am currently studying a frontend program of the professional on coding bootcamp. ",
  },
];
export default class Education extends Component {
  render() {
    return (
      <Layout section="education" className="flex-column">
        <h2 className="my-5">Education</h2>
        <CardGroup list={education} />
      </Layout>
    );
  }
}
