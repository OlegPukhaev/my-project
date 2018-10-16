import React, { Component } from 'react';

class PageOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Page One</h1>
        <span>Name: {this.props.data.full_name} </span><br />
        <span>Email: {this.props.data.email} </span>
      </div>
    );
  }
}

export default PageOne;
