import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import IconGroup from "../IconGroup";
import Layout from "../Layout";
import mysql from "../../assets/mysql.png";
import tailwind from "../../assets/tailwind.png";
import nextjs from "../../assets/nextjs.png";
const skills = [
  {
    name: "Html5",
    icon: faHtml5,
    color: "white",
    backgroundColor: "#FC490B",
  },
  {
    name: "Css3",
    icon: faCss3,
    color: "white",
    backgroundColor: "#2196F3",
  },
  {
    name: "JavaScript",
    icon: faJsSquare,
    backgroundColor: "#e0c200",
    color: "#ffffff",
  },
  {
    name: "Node",
    icon: faNodeJs,
    backgroundColor: "#5AA946",
    color: "white",
  },
  {
    name: "ReactJs",
    icon: faReact,
    backgroundColor: "black",
    color: "#5ADAFD",
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    backgroundColor: "#7952B3",
  },
  {
    name: "TailwindCss",
    image: tailwind,
    backgroundColor: "#0F172A",
  },
  {
    name: "MySql",
    image: mysql,
    backgroundColor: "#c1b3adcc",
  },
  {
    name: "NextJs",
    image: nextjs,
    backgroundColor: "black",
  },
];

export default class Skills extends Component {
  render() {
    return (
      <Layout section="skills" className="flex-column">
        <h2 className="my-5">Skills</h2>
        <IconGroup list={skills} />
      </Layout>
    );
  }
}
