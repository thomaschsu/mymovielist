import React, { Component } from "react";
import Nav from "./components/Nav";
import MovieNav from "./components/MovieNav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";

class App extends Component {
	state = {
		movies: [
			{
				image: "sample image",
				status: "completed",
				title: "sample title",
				score: "10",
				director: "sample director",
			},
			{
				image: "different image",
				status: "dropped",
				title: "different title",
				score: "4",
				director: "different director",
			},
			{
				image: "one more image",
				status: "ptw",
				title: "one more title",
				score: "-",
				director: "one more director",
			}
		]
	};

	getMovies = cb => {
		this.setState({
			movies: [
				{
					image: "sample image",
					status: "completed",
					title: "sample title",
					score: "10",
					director: "sample director",
				},
				{
					image: "different image",
					status: "dropped",
					title: "different title",
					score: "4",
					director: "different director",
				},
				{
					image: "one more image",
					status: "ptw",
					title: "one more title",
					score: "-",
					director: "one more director",
				}
			]
		}, cb);
	};

	handleStatusChange = event => {
		switch (event.target.textContent) {
			//All Movies List
			case "All Movies":
				console.log("all route");
				this.getMovies(() => {});
				break;

			//Completed List
			case "Completed":
				console.log("completed route");
				this.getMovies(() => {
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
				console.log("dropped route");
				this.getMovies(() => {
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
				console.log("ptw route");
				this.getMovies(() => {
					const ptwMovies = this.state.movies.filter(movie => (
						movie.status === "ptw"
					));

					this.setState({
						movies: ptwMovies
					});
				});

				break;
		}
	};

	componentDidMount = () => {
		this.getMovies(() => {});
	};

	render() {
		return (
			<div>
				<Nav />
				<Wrapper>
					<Jumbotron>
						<h1 className="jumbo-small">Organize, Discuss, Discover</h1>
						<h1 className="jumbo-title">MyMovieList</h1>
						<h1 className="jumbo-small">HOW MANY MOVIES HAVE YOU SEEN?</h1>
					</Jumbotron>
					<MovieNav function={this.handleStatusChange}></MovieNav>
					<List movies={this.state.movies} />
				</Wrapper>
			</div>
		);
	};
};

export default App;