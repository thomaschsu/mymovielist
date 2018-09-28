import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="bg-primary nav">
    <Link className="navbar-brand" to="/">
      MyMovieList
    </Link>
    <div>
      <ul className="navbar-nav right">
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/movielist"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/movielist" className="nav-link">
            Movie List
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
