import React, { Component, Fragment, useState } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Image, Nav, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import { connect } from "react-redux";
import { logout } from "./store/actions";
import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({isAuthenticating: false});
  }

  userHasAuthenticated = authenticated => {
    this.setState({isAuthenticated: authenticated});
  }

  handleLogout = async event => {
    this.props.logout();

    this.userHasAuthenticated(false);

    this.props.history.push("/");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div>
        <Navbar className="App" expand="lg" bg="light">
          <Navbar.Brand>
            <Image
              src="./dna-double-helix_1f9ec.png"
              width={30}
              height={30}
            />
            <Link className="brandLink" to="/"> Studistics</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="inline">
              {this.state.isAuthenticated
                ? <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                : <Fragment>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps, {logout})(App));