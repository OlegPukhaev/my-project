import React, { Component } from 'react';
import User from './components/User';
import NavBar from './components/NavBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
          <Router >
            <div className="row">
                <Route exact path="/user" component={User} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/page-one" component={PageOne} />
                <Route exact path="/page-two" component={PageTwo} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
