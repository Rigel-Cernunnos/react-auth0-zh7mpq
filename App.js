import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Callback from "./components/Callback";
import Account from "./components/Account";

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  privateprops,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...privateprops} />
        ) : (
          <div>You are not authorized to see this page</div>
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Home {...this.props} />} />
            <Route path="/callback" component={Callback} />
            <PrivateRoute
              path="/account"
              component={Account}
              privateprops={this.props}
              isLoggedIn={this.props.isLoggedIn}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
