import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between p-2 align-items-center">
      <h3>Quotes central</h3>
      <div className="d-flex align-items-center text-end">
        <NavLink
          to='/'
          className="text-decoration-none text-secondary">Quotes</NavLink>
        <NavLink
          to='/add-quote'
          className="btn btn-outline-info ms-3 d-inline-block">Submit new quote</NavLink>
      </div>
    </div>
  );
};

export default Header;