import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom"
import "./MovieNav.css";

const MovieNav = props => (
  <Router>
    <div className="movie-menu">
		<Link className="menu-items" to="/all" onClick={props.function}>
			All Movies
		</Link>
		<Link className="menu-items" to="/completed" onClick={props.function}>
			Completed
		</Link>
		<Link className="menu-items" to="/dropped" onClick={props.function}>
			Dropped
		</Link>
		<Link className="menu-items" to="/ptw" onClick={props.function}>
			Plan to Watch
		</Link>
		<a href="/search" className="menu-items"><i className="tiny material-icons">search</i></a>
    </div>
  </Router>
);

export default MovieNav;
