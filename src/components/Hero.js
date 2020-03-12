import React, { Component } from "react";
import { Button, Card, Container, Nav, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
            <Button style={ button.CTA }>
              <LinkContainer className="brandLink" to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </Button>
          </Row>
        </Container>
        <Card.Link className="bottom brandLink" href="#HowItWorks">Find out more below</Card.Link>
        <div className="arrow"></div>
      </div>
    );
  }
}