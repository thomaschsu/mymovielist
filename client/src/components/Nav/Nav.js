import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="bg-primary nav">
    <span className="navbar-brand" to="/">
      My<span class="nav-blue">Movie</span>List
    </span>
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
            Your List
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
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a>
        <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Sign Up</a>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </ul>
    </div>
  </nav>
);

export default Nav;
