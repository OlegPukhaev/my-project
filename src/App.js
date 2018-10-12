import React, { Component } from 'react';
import createStore from './reducers/createStore';
import { Provider } from 'react-redux';
import Content from './components/Content';

class App extends Component {

  render() {
    return (
      <Provider store={createStore}>
        <Content />
      </Provider>
    );
  }
}

export default App;
