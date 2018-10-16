import React, { Component } from 'react';

class PageOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Profile</h1>
        <h3>Welcome: {this.props.data.full_name} </h3><br />
        <span>Email: {this.props.data.email} </span>
      </div>
    );
  }
}

export default PageOne;
