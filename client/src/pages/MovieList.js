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
		allMovies: [],
		username: "",
		status: "all",
		sort: ""
	};

	getMovies = cb => {
		API.getMovies(this.state.username)
		.then(res => this.setState({ allMovies: res.data[0].movieArr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)) }, cb))
			.catch(err => console.log(err));
	}

	resetMovies = cb => {
		this.setState({
			movies: this.state.allMovies
		}, cb);
	};

	handleSort = event => {
		console.log("handle sort");
		let sorted = this.state.movies;
 		this.setState({
			sort: event.target.textContent
		}, () => {
			switch (this.state.sort) {
				case "Score":
					sorted.sort((a, b) => b.score - a.score);
					this.setState({
						movies: sorted
					});
					break;
 				case "Status":
					sorted.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0));
					this.setState({
						movies: sorted
					});
					break;
 				case "Director":
					sorted.sort((a,b) => (a.director > b.director) ? 1 : ((b.director > a.director) ? -1 : 0));
					this.setState({
						movies: sorted
					});
					break;
 				default:
					sorted.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
					this.setState({
						movies: sorted
					});
					break;
			}
		});
 	}

	handleStatusChange = event => {
		switch (event.target.textContent) {
			//All Movies List
			case "All Movies":
				this.resetMovies(() => { });

				this.setState({
					status: "all"
				});
				break;

			//Completed List
			case "Completed":
				this.resetMovies(() => {
					const completedMovies = this.state.movies.filter(movie => (
						movie.status === "completed"
					));

					this.setState({
						movies: completedMovies,
						status: "completed"
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
						movies: droppedMovies,
						status: "dropped"
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
						movies: ptwMovies,
						status: "ptw"
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
			this.state.username,
			event.target.dataset.imdb,
			event.target.dataset.ddtype,
			event.target.value
		).then(this.getMovies(() => {}));
	};

	handleRemove = event => {
		event.persist();
		API.removeMovie(
			this.state.username,
			event.target.dataset.imdb
		).then(this.getMovies(() => {event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)}));
	};

	componentDidMount = () => {
		let urlArr = window.location.href.split("/");
		const status = urlArr[urlArr.length-1];
		let user = "";
		if (status === "completed" || status === "dropped" || status === "ptw")
			user = urlArr[urlArr.length-2];
		else
			user = status

		this.setState({
			username: user
		}, () => {
			this.getMovies(() => {
				this.resetMovies(() => {
					switch (status) {
						case "completed":
							this.handleStatusChange({target: {textContent: "Completed"}});
							break;

						case "dropped":
							this.handleStatusChange({target: {textContent: "Dropped"}});
							break;

						case "ptw":
							this.handleStatusChange({target: {textContent: "Plan to Watch"}});
							break;

						default:
							this.handleStatusChange({target: {textContent: "All Movies"}});
							break;
					}
				});
			});
		})
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
					<MovieNav currentUser={this.state.username === sessionStorage.getItem("username").slice(1, -1)} status={this.state.status} username={this.state.username} function={this.handleStatusChange}></MovieNav>
					<List currentUser={this.state.username === sessionStorage.getItem("username").slice(1, -1)} sort={this.handleSort} delete={this.handleRemove} dropdown={this.handleDropdowns} movies={this.state.movies}/>
				</Wrapper>
				<SideNav />
			</div>
		);
	}
}

export default MovieList;