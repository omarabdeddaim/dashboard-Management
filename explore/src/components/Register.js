import React, { Component } from "react";
import { register } from "./userEnter";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      type: "",
      image: ""
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
      image: this.state.image
    };
    register(user).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
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
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
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

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    wich Section
                  </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="CEO"
                        defaultChecked
                        value={this.state.type}
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        CEO
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="Employ"
                        value={this.state.type}
                        onChange={this.onChange}
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Employ
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">your Photo</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="image"
                  id="exampleFormControlFile1"
                  placeholder="Enter image"
                  value={this.state.image}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-clock"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
