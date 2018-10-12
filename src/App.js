import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import User from './components/User';
import NavBar from './components/NavBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <Router >
        <div className="container-fluid">
          <NavBar />
            <div className="container mt-3">
             <Switch>
                <Route exact path="/user" component={User} />
                <Route exact path="/" component={Profile} />
                <Route exact path="/page-one" component={PageOne} />
                <Route exact path="/page-two" component={PageTwo} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
