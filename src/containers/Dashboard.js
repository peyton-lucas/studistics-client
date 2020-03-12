import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { userDataFetch } from "../store/actions";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import Bellcurve from "../components/Bellcurve";
import DataDropzone from "../components/DataDropzone";
import livestockAnalytics from "../livestockAnalytics";
import DNALoader from "../components/DNALoader";
import "../styles.scss";

const cardStyles = {
  card: {
    background: "#ffffff",
    borderColor: "#bdbdbd",
    boxShadow: "0px 0px 5px #bdbdbd"
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sixtyDays: {
        backgroundColor: "#1BA8B7",
        title: "60 Days"
      },
      ninetyDays: {
        backgroundColor: "#EBC11C",
        title: "90 Days"
      },
      oneTwentyDays: {
        backgroundColor: "#EE4E54",
        title: "120 Days"
      }
    };
  }

  async componentDidMount() {
    let self = this;
    setTimeout(
      function() {
        try {
          self.getUserData();
        } catch (e) {
          console.error(e);
        }
      },
      3000
    );
    // setInterval(
    //   function() {
    //     try {
    //       self.getUserData();
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   },
    //   300000
    // );
  }

  getUserData() {
    return Auth.currentCredentials().then(creds => this.props.userDataFetch(creds.data.IdentityId.split(":")[1]));
  }

  render() {
    if(!this.props.userData) {
      return <DNALoader />
    }
    const predictedData = livestockAnalytics(this.props.userData);
    return(
      <Container>
        <br/>
        <Row>
          <DataDropzone />
        </Row>
        <br />
        <Row>
          <CardDeck className="text-center" style={{ margin: "0 auto" }}>
            <Card className="kpi" style={ cardStyles.card }>
              <Card.Body>
                <Card.Title className="kpi-header">Lbs-Weaned / Exposed Female</Card.Title>
                <Card.Text className="kpi-description">
                    460 Lbs
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="kpi" style={ cardStyles.card }>
              <Card.Body>
                <Card.Title className="kpi-header">Revenue / Breeding Female</Card.Title>
                <Card.Text className="kpi-description">
                    $950.00
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="kpi" style={ cardStyles.card }>
              <Card.Body>
                <Card.Title className="kpi-header">Net Income Ratio</Card.Title>
                <Card.Text className="kpi-description">
                    {"<"} 5%
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
        <br />
        <Row>
          <Col>
            <Bellcurve
              color={this.state.sixtyDays.backgroundColor}
              title={this.state.sixtyDays.title}
              value={predictedData["day60"]}
            />
          </Col>
          <Col>
            <Bellcurve
              color={this.state.ninetyDays.backgroundColor}
              title={this.state.ninetyDays.title}
              value={predictedData["day90"]}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Bellcurve
              color={this.state.oneTwentyDays.backgroundColor}
              title={this.state.oneTwentyDays.title}
              value={predictedData["day120"]}
            />
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.data.data
  };
}

export default connect(
  mapStateToProps,
  { userDataFetch }
)(Dashboard);