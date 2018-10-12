import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
    <div className="row">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">User Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Page One</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Page Two</a>
        </li>
      </ul>
    </div>
    );
  }
}

export default NavBar;
