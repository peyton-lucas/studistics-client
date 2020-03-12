import React, { Component } from "react";
import Dashboard from "../containers/Dashboard";
import Lander from "../components/Lander"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  renderLander() {
    return (
      <Lander />
    );
  }

  renderDashboard() {
    return (
      <div className="dashboard">
        <Dashboard />
      </div>
    );
  }

  render() {
    return (
      <div className="hero">
        {this.props.isAuthenticated ? this.renderDashboard() : this.renderLander()}
      </div>
    );
  }
}
