import React, { Component } from "react";
import { login } from "./userEnter";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      id: this.state.id,
      password: this.state.password
    };
    login(user).then(res => {
      if (res) {
        this.props.history.push(`/menu`);
      }
    });
  }

  render() {
    return (
      <>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/thanks" className="nav-link">
              Log-out
            </Link>
          </li>
        </ul>

        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">
                  Could you please sign in
                </h1>
                <div className="form-group">
                  <label htmlFor="Id">Your ID</label>
                  <input
                    type="id"
                    className="form-control"
                    name="id"
                    placeholder="Enter ID"
                    value={this.state.id}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Your password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-clock"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
