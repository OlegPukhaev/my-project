import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
    <div className="row align-center">
      <ul className="nav">
        <li className="nav-item">
          <a href ="#!" className="nav-link active" href="#">
            <Link to="/user">
              User Login
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
          <Link to="/page-one">
            Page One
          </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            <Link to="/page-two">
              Page Two
            </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            <Link to="/">
              Profile
            </Link>
          </a>
        </li>
      </ul>
    </div>
    );
  }
}

export default NavBar;
