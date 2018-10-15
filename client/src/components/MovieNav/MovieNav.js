import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom"
import "./MovieNav.css";

const MovieNav = props => (
  <Router>
    <div className="movie-menu">
	<Link className={`menu-items link-effect ${props.status === "all" ? "movie-nav-active" :""}`} to={`/movielist/${props.username}`} onClick={props.function}>
			All Movies
		</Link>
		<Link className={`menu-items link-effect ${props.status === "completed" ? "movie-nav-active" :""}`} to={`/movielist/${props.username}/completed`} onClick={props.function}>
			Completed
		</Link>
		<Link className={`menu-items link-effect ${props.status === "dropped" ? "movie-nav-active" :""}`} to={`/movielist/${props.username}/dropped`} onClick={props.function}>
			Dropped
		</Link>
		<Link className={`menu-items link-effect ${props.status === "ptw" ? "movie-nav-active" :""}`} to={`/movielist/${props.username}/ptw`} onClick={props.function}>
			Plan to Watch
		</Link>
    </div>
  </Router>
);

export default MovieNav;
