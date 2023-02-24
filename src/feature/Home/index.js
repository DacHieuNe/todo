import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>Chào mừng bạn đã đến HOMEPAGE</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    );
  }
}

Home.propTypes = {};

export default Home;
