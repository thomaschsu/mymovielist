import React, { Component } from "react";
import MovieNav from "../components/MovieNav";
import Jumbotron from "../components/Jumbotron";
import List from "../components/List";
import SideNav from "../components/SideNav";
import API from "../utils/API"
import "../components/MovieList/MovieList.css";
import Wrapper from "../components/Wrapper";

class MovieList extends Component {
	state = {
		movies: [],
		allMovies: []
	};

	getMovies = cb => {
		API.getMovies(sessionStorage.getItem("username").slice(1, -1))
			.then(res => this.setState({ allMovies: res.data[0].movieArr }, cb))
			.catch(err => console.log(err));
	}

	resetMovies = cb => {
		this.setState({
			movies: this.state.allMovies
		}, cb);
	};

	handleStatusChange = event => {
		switch (event.target.textContent) {
			//All Movies List
			case "All Movies":
				this.resetMovies(() => { });
				break;

			//Completed List
			case "Completed":
				this.resetMovies(() => {
					const completedMovies = this.state.movies.filter(movie => (
						movie.status === "completed"
					));

					this.setState({
						movies: completedMovies
					});
				});
				break;

			//Dropped List
			case "Dropped":
				this.resetMovies(() => {
					const droppedMovies = this.state.movies.filter(movie => (
						movie.status === "dropped"
					));

					this.setState({
						movies: droppedMovies
					});
				});
				break;

			//PTW List
			case "Plan to Watch":
				this.resetMovies(() => {
					const ptwMovies = this.state.movies.filter(movie => (
						movie.status === "ptw"
					));

					this.setState({
						movies: ptwMovies
					});
				});
				break;

			default:
				this.resetMovies(() => { });
				break;
		}
	};

	handleDropdowns = event => {
		API.updateMovie(
			sessionStorage.getItem("username").slice(1, -1),
			event.target.dataset.imdb,
			event.target.dataset.ddtype,
			event.target.value
		).then(this.getMovies(() => {}));
	};

	handleRemove = event => {
		API.removeMovie(
			sessionStorage.getItem("username").slice(1, -1),
			event.target.dataset.imdb
		).then(this.getMovies(() => {}));
	};

	componentDidMount = () => {
		this.getMovies(this.resetMovies);
	};

	render() {
		return (
			<div>
				<Wrapper>
					<Jumbotron>
						<h1 className="jumbo-small">Organize, Discuss, Discover</h1>
						<h1 className="jumbo-title">MyMovieList</h1>
						<h1 className="jumbo-small">HOW MANY MOVIES HAVE YOU SEEN?</h1>
					</Jumbotron>
					<MovieNav function={this.handleStatusChange}></MovieNav>
					<List delete={this.handleRemove} dropdown={this.handleDropdowns} movies={this.state.movies} />
				</Wrapper>
				<SideNav />
			</div>
		);
	}
}

export default MovieList;
