import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-secondary p-2">
      <ul className="navbar-nav">
        {/*<li className="nav-item">*/}
        {/*  <Link className="nav-link me-5" to="/">My blog</Link>*/}
        {/*</li>*/}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">All</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/star-wars">Star Wars</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Famous People</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts">Saying</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts">Humor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts">Motivational</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;