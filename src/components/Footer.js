import React, { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const button = {
  contact: {
    background: "#EE4E54",
    borderColor: "#EE4E54",
    color: "white !important",
    fontSize: "1rem"
  }
};

export default class Footer extends Component {
  render() {
    return (
      <div className="navbar">
        <p>Copywrite Studistics 2020. All rights reserved.</p>
        <Button
          style={ button.contact }
          href={"mailto:" + "studistics@gmail.com"}
        >
          <FontAwesomeIcon icon={ faEnvelope } size="1x" />
          {" Contact us"}
        </Button>
      </div>
    );
  }
}