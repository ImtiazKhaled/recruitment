import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#" />
      Total Potential New Members
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
