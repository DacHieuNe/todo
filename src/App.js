import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import "./App.css";
import Home from "./feature/Home";
import Contact from "./feature/Contact";
import Users from "./feature/Users";
import Songs from "./feature/Songs";
import DetailUser from "./feature/DetailUser/DetailUser";
import NavCustom from "./feature/Nav";
import PageError from "./feature/PageError/PageError";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavCustom />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/users" component={Users} exact />
          <Route path="/users/:id" component={DetailUser} />
          <Route path="/songs" component={Songs} />
          <Route component={PageError}></Route>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
