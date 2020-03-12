import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.scss";

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
              <ul className="timeline timeline-centered">
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Studistics MVP</h3>
                    <p>The application takes your livestock data in CSV format, predicts your animals' growth rates and
                    graphs the results so you can see who's who.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>SOON</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Reports</h3>
                    <p>Receive reports about which animals are your top performers. This will help you decide which
                      bloodlines to cultivate and which to cull, increasing your net income ratio.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>TBD</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Family Trees</h3>
                    <p>Offering tree visualization within the animal reports, so you have a better understanding the why
                    behind your animal's performance. Eventually, the goal is to map genetic traits within the trees.</p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Mobile App</h3>
                    <p>A mobile app to make measuring weights easier.</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}