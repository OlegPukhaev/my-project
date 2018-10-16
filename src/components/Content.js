import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { loggedIn } from './../selectors';
import { getCurrentUserInfo } from './../reducers/user';

import User from './User';
import NavBar from './../layouts/NavBar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PublicHomePage from './PublicHomePage';
import PageNotFound from './PageNotFound';


class Content extends Component {

  submit = value => {
    console.log(value.email, value.password);
    this.props.getCurrentUserInfo(value.email, value.password);
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
      // userFetchRequest,
      getCurrentUserInfo
    },
    dispatch
  );
};

function mapStateToProps (state) {
  return  {
    loggedIn:loggedIn(state),
    user:state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
