import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../utils/Auth";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h2>
            <img
              src="https://cdn.auth0.com/website/styleguide/getting-started-icon.svg"
              alt="Jumbotron"
            />
          </h2>
          <h1>Auth0 QuickStart</h1>
          <p>
            Start your next React app with authentication out of the box and
            get to building that next great app in five simple steps.
          </p>

          {this.props.isLoggedIn && (
            <div className="btn btn-danger btn-lg" onClick={logout}>
              Logout
            </div>
          )}
          {!this.props.isLoggedIn && (
            <div className="btn btn-success btn-lg" onClick={this.props.signup}>
              Sign Up for Free
            </div>
          )}
        </section>

        <article className="card-docs">
          <i className="card-docs-icon icon-budicon-499 orange" />
          <h2 className="card-docs-title">Step 1</h2>
          <p className="card-docs-description">
            Sign up for a <strong>free</strong> Auth0 account and get your{" "}
            <strong>Client ID</strong> and <strong>Domain</strong>. Set{" "}
            <code>{window.location.href}callback</code> as an{" "}
            <strong>allowed callback url</strong> in your Auth0 client.
          </p>
        </article>

        <article className="card-docs">
          <i className="card-docs-icon icon-budicon-499 orange" />
          <h2 className="card-docs-title">Step 2</h2>
          <p className="card-docs-description">
            Add your credentials in the <code>Auth.config.js</code> file located
            in the <code>/utils/</code> folder
          </p>
        </article>

        <article className="card-docs">
          <i className="card-docs-icon icon-budicon-499 orange" />
          <h2 className="card-docs-title">Step 3</h2>

          {this.props.isLoggedIn && (
            <p className="card-docs-description">
              You are already logged in. Proceed to next step!
            </p>
          )}
          {!this.props.isLoggedIn && (
            <p className="card-docs-description">
              <a className="btn btn-success" onClick={login}>
                Login
              </a>
            </p>
          )}
        </article>

        <article className="card-docs">
          <i className="card-docs-icon icon-budicon-499 orange" />
          <h2 className="card-docs-title">Step 4</h2>
          <p className="card-docs-description">
            Access <Link to="/account">protected page</Link>.
            <strong>You must be logged in to do this!</strong>
            <br />
            {this.props.isLoggedIn && <span>You are logged in!</span>}
            {!this.props.isLoggedIn && (
              <span>You're currently not logged in! </span>
            )}
          </p>
        </article>

        <article className="card-docs">
          <i className="card-docs-icon icon-budicon-499 orange" />
          <h2 className="card-docs-title">Step 5</h2>
          <p className="card-docs-description">
            Export your project from StackBlitz and build the rest of your app!{" "}
            <br />{" "}
            <a href="https://auth0.com/docs/quickstart/spa/react?utm_source=stackblitz&utm_medium=devsponsor&utm_campaign=stackblitz-react">
              Read the docs
            </a>{" "}
            to learn more!
          </p>
        </article>

        <div className="try-banner">
          <span>Don't have an account yet?</span>
          <a className="btn btn-success btn-lg" onClick={this.props.signup}>
            Try Auth0 for Free
          </a>
        </div>
      </div>
    );
  }
}
