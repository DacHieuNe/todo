import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./Nav.scss";

class NavCustom extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="nav-link"
                activeClassName="bg-success"
                to="/"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="bg-success"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="bg-success"
                to="/users"
              >
                Users
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="bg-success"
                to="/songs"
              >
                Songs
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

NavCustom.propTypes = {};

export default NavCustom;
