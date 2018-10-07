import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom"
import "./MovieNav.css";

const MovieNav = props => (
  <Router>
    <div className="movie-menu">
			<Link className="menu-items link-effect" to="/movielist" onClick={props.function}>
			All Movies
		</Link>
			<Link className="menu-items link-effect" to="/movielist/completed" onClick={props.function}>
			Completed
		</Link>
		<Link className="menu-items link-effect" to="/movielist/dropped" onClick={props.function}>
			Dropped
		</Link>
			<Link className="menu-items link-effect" to="/movielist/ptw" onClick={props.function}>
			Plan to Watch
		</Link>
    </div>
  </Router>
);

export default MovieNav;
