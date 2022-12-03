import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-secondary p-2 mb-2">
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
          <NavLink className="nav-link" to="/famous-people">Famous People</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saying">Saying</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/humour">Humor</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/motivational">Motivational</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;