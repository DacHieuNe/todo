import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageError.scss";

class PageError extends Component {
  handleBackButton = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Alert variant="danger">
        <Alert.Heading>You got an Page Error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <button onClick={this.handleBackButton} className="error-btn">
          Back
        </button>
      </Alert>
    );
  }
}

PageError.propTypes = {};

export default withRouter(PageError);
