import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bellcurve from "./Bellcurve";
import "../styles.scss";

const sampleBellcurve = {
  backgroundColor: "",
  title: "",
  value: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
    2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
    2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
    2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
    3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
    2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
    3.2, 3.3, 3, 2.5, 3, 3.4, 3]
};

export default class WhatsNext extends Component {
  render() {
    return (
      <div>
        <Container className="lander">
          <Row className="cta">
            <Col>
              <h4>WHAT'S NEXT?</h4>
              <div className="header-line"></div>
              <br />
              <h3>Something wordy and super cool makes the user want to convert and blah blah blah</h3>
              <Bellcurve
                color={this.state.ninetyDays.backgroundColor}
                title={this.state.ninetyDays.title}
                value={predictedData["day90"]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}