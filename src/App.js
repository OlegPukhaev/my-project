import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import createStore from './reducers/createStore';
import {Provider} from 'react-redux';

import User from './components/User';
import NavBar from './components/NavBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PublicHomePage from './components/PublicHomePage';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <Provider store={createStore}>
        <Router >
          <div className="container-fluid">
            <NavBar />
              <div className="container mt-3">
              <Switch>
                  <Route exact path="/" component={PublicHomePage} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/page-one" component={PageOne} />
                  <Route exact path="/page-two" component={PageTwo} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
