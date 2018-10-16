import React, { Component } from 'react';
import createStore from './reducers/createStore';
import { Provider } from 'react-redux';
import Content from './components/Content';
// import { getCurrentUserInfo } from './reducers/user';


class App extends Component {

  render() {
    return (
      <Provider store={createStore}>
        <Content />
      </Provider>
    );
  }
}
// store.dispatch(getCurrentUserInfo('ID23'));

export default App;
