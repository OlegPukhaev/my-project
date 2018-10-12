import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
    <div className="row align-center">
      <ul className="nav">
        <li className="nav-item">
            <Link to="/user" className="nav-link">
              User Login
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/page-one" className="nav-link">
            Page One
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/page-two" className="nav-link">
              Page Two
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/" className="nav-link">
              PublicHomePage
            </Link>
        </li>
      </ul>
    </div>
    );
  }
}

export default NavBar;
