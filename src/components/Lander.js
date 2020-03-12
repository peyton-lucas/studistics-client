import React, { Component } from "react";
import Hero from "../components/Hero";
import HowItWorks from "./HowItWorks";
import Roadmap from "./WhatsNext";
import Footer from "../components/Footer";

export default class Lander extends Component {
  render() {
    return (
      <div>
        <Hero />
        <HowItWorks />
        <Roadmap />
        <Footer />
      </div>
    );
  }
}