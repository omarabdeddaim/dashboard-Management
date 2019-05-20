import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      image: ""
    };
  }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded);
    this.setState({
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      image: decoded.image
    });
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotrom mt-5">
          <div className="clo-sm-8 mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th> Name</th>
                <th>Email</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.state.id}</td>
                <td>{this.state.name}</td>
                <td>{this.state.email}</td>
                <td>{this.state.image}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
