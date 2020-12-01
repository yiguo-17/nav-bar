import React, { Component } from "react";

import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Public from "./components/public/Public";
import PrivatePage from "./components/privatePage/PrivagePage";

export default class App extends Component {
  state = {
    isAuth: false,
    message: "",
  };

  handleOnSignIn = () => {
    this.setState({
      isAuth: true,
      message: "you are signed in.",
    });
  };

  logOut = () => {
    this.setState({
      isAuth: false,
      message: "you are not signed in.",
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Nav isAuth={this.state.isAuth} logOut={this.logOut} />

          <Switch>
            <Route exact path="/"></Route>

            <Route
              exact
              path="/public"
              component={Public}
              isAuth={this.state.isAuth}
            />
            <Route
              exact
              path="/private"
              isAuth={this.state.isAuth}
              component={(props) => (
                <PrivatePage
                  // {...props}
                  isAuth={this.state.isAuth}
                  handleOnSignIn={this.handleOnSignIn}
                  logOut={this.logOut}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
