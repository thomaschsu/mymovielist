import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
	<nav className="bg-primary nav">
		<span className="navbar-brand" to="/">
			My<span className="nav-blue">Movie</span>List
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
				<a className="waves-effect waves-light btn modal-trigger" href="#modal1">Signin</a>

				<div id="modal1" className="modal">
					<div className="modal-content">
						<h4>Modal Header</h4>
						<p>A bunch of text</p>
					</div>
					<div className="modal-footer">
						<a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
					</div>
				</div>
				<a className="waves-effect waves-light btn blue">Sign Up</a>
			</ul>
		</div>
	</nav>
);

export default Nav;
