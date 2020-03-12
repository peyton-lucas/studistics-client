import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faFileDownload, faUser, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles.scss";

export default class HowItWorks extends Component {
  render() {
    return (
      <div>
        <Container className="lander">
          <Row className="cta">
            <Col>
              <h4>HOW IT WORKS</h4>
              <div className="header-line"></div>
              <h2>Data-driven approach that visualizes livestock data to help identify your top performers</h2>
              <CardDeck className="text-center">
                <Card>
                  <Card.Header>FIRST</Card.Header>
                  <FontAwesomeIcon icon={ faFileDownload } size="4x" style={{ color: "#EE4E54" }} />
                  <Card.Body>
                    <Card.Title>Download CSV Template</Card.Title>
                    <Card.Text>
                      Log your weights, collection times and ear tags into our CSV template
                    </Card.Text>
                    <Card.Link href="../studistics_data_template.csv" download="studistics_data_template.csv">
                      Download
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>FURTHER</Card.Header>
                  <FontAwesomeIcon icon={ faUser } size="4x" style={{color: "#EE4E54"}} />
                  <Card.Body>
                    <Card.Title>Create an account</Card.Title>
                    <Card.Text>
                      Signup for an account and get ready to upload your data to our analytics tools
                    </Card.Text>
                    <LinkContainer to="/signup">
                      <Card.Link>Signup</Card.Link>
                    </LinkContainer>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Header>FINALLY</Card.Header>
                  <FontAwesomeIcon icon={ faCloudUploadAlt } size="4x" style={{color: "#EE4E54"}} />
                  <Card.Body>
                    <Card.Title>Upload your CSV</Card.Title>
                    <Card.Text>
                      Drag'n Drop your CSV data onto the dropzone and see the results
                    </Card.Text>
                    <LinkContainer to="/login">
                      <Card.Link>Login</Card.Link>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}