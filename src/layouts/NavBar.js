import React, { Component } from 'react';
import {NavLink } from "react-router-dom";

class NavBar extends Component {
  
  render() {

    return (
    <div className="row align-center">
      <ul className="nav">
        <li className="nav-item">
            <NavLink  to="/user" className="nav-link" >
              User Login
            </NavLink >
        </li>
        <li className="nav-item">
          <NavLink  to="/page-one" className="nav-link" >
            Page One
          </NavLink >
        </li>
        <li className="nav-item">
            <NavLink  to="/page-two" className="nav-link" >
              Page Two
            </NavLink >
        </li>
        <li className="nav-item">
            <NavLink  to="/" className="nav-link" >
              PublicHomePage
            </NavLink >
        </li>
      </ul>
    </div>
    );
  }
}

export default NavBar;
