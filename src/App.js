import React, { Component } from 'react';
import createStore from './reducers/createStore';
import { Provider } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { loggedIn } from './selectors';

import User from './components/User';
import NavBar from './components/NavBar';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PublicHomePage from './components/PublicHomePage';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  constructor () {
    super();

    this.state = {loggedIn: true}
  }

  render() {
    const {loggedIn} = this.state;
    return (
      <Provider store={createStore}>
        <Router >
          <div className="container-fluid">
            <NavBar />
              <div className="container mt-3">
              <Switch>
                  <Route exact path="/"  render={() => <PublicHomePage />} />
                  <Route exact path="/user" render={() => <User />} />
                  <Route exact path="/page-one" render={() => (
                      loggedIn ? (
                        <PageOne />
                        // <Redirect to="/page-one"/>
                      ) : (
                        <Redirect to="/user"/>
                      )
                    )}
                  />
                  <Route exact path="/page-two"  render={() => (
                      loggedIn ? (
                        <PageTwo />
                        // <Redirect to="/page-two"/>
                      ) : (
                        <Redirect to="/user"/>
                      )
                    )} />
                  <Route component={PageNotFound} />

                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {

//     },
//     dispatch
//   );
//  };

// function mapStateToProps (state) {
//   return  {
//     loggedIn:loggedIn(state)
//   }
// }

// // export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
