import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>Title</h3>
      <ul>
        <li>
          <NavLink to="#">Home </NavLink>
        </li>
        <li>
          <NavLink to="#"> About </NavLink>
        </li>
        <li>
          <NavLink to="#">Blog</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact</NavLink>
        </li>
        <li>
          <button>Button</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
