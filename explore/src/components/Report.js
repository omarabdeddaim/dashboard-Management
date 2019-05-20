import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Report extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotrom mt-5">
          <div className="clo-sm-8 mx-auto">
            <h1 className="text-center">Reports</h1>
            <button>
              <a href="https://natahouse.atlassian.net/secure/BrowseProjects.jspa">
                hello jira
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
