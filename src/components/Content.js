import React, { Component } from 'react';
// import createStore from './../reducers/createStore';
// import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { loggedIn } from './../selectors';

import User from './User';
import NavBar from './../layouts/NavBar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PublicHomePage from './PublicHomePage';
import PageNotFound from './PageNotFound';


class Content extends Component {

  submit = value => {
    console.log(value);
  } 

  render() {
    const {loggedIn} = this.props;
    return (
        <Router >
          <div className="container-fluid">
            <NavBar />
              <div className="container mt-3">
              <Switch>
                  <Route exact path="/"  render={() => <PublicHomePage />} />
                  <Route exact path="/user" render={() => <User onSubmit={this.submit}/>} />
                  <Route exact path="/page-one" render={() => (
                      loggedIn ? (
                        <PageOne />
                      ) : (
                        <Redirect to="/user"/>
                      )
                    )}
                  />
                  <Route exact path="/page-two"  render={() => (
                      loggedIn ? (
                        <PageTwo />
                      ) : (
                        <Redirect to="/user"/>
                      )
                    )} />
                  <Route component={PageNotFound} />

                </Switch>
              </div>
          </div>
        </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
 };

function mapStateToProps (state) {
  return  {
    loggedIn:loggedIn(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
