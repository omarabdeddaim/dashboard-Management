import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import GetIn from "./components/getIn";
import Register from "./components/Register";
import Login from "./components/Login";
// import Profile from "./components/Profile";
import Report from "./components/Report";
import Menu from "./components/menu";
import Calendar from "./components/Calendar1";
import Thanks from "./components/thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchBar />
        <Route exact path="/" component={GetIn} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/Report" component={Report} />
          <Route exact path="/Calendar1" component={Calendar} />
          <Route exact path="/thanks" component={Thanks} />
          {/* <Route exact path="/profile" component={Profile} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
