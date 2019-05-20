import React, { Component } from "react";
import { Link } from "react-router-dom";

class menu extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-secondary">
          <Link to="/calendar1" className="nav-link">
            Calendar
          </Link>
        </button>
        <button type="button" className="btn btn-outline-primary">
          <Link to="/Report" className="nav-link">
            Reports
          </Link>
        </button>

        <button type="button" className="btn btn-outline-success">
          <Link to="/Ranking" className="nav-link">
            Ranking
          </Link>
        </button>
      </div>
    );
  }
}

export default menu;
