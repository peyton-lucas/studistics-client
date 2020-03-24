import React, { Component } from "react";
import { Button, Card, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-scroll";
import "../styles.scss";

const button = {
  CTA: {
    background: "#EE4E54",
    borderColor: "#EE4E54",
    color: "white !important",
    padding: "1rem 3rem",
    fontSize: "1.5rem"
  }
};

export default class Hero extends Component {
  render() {
    return (
      <div className="lander">
        <Container>
          <Row className="cta">
            <h1>Studistics</h1>
            <h2>Breed heavier, healthier animals</h2>
            <LinkContainer style={ button.CTA } to="/signup">
              <Button>
                Signup
              </Button>
            </LinkContainer>
            <br />
            <div className="find-out">Find out more below</div>
          </Row>
        </Container>
      </div>
    );
  }
}