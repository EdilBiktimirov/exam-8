import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between">
      <h3>Quotes central</h3>
      <NavLink to='/'>Quotes</NavLink>
      <NavLink to='/add-quote'>Submit new quote</NavLink>
    </div>
  );
};

export default Header;