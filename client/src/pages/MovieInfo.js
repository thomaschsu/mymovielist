import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API"

class MovieInfo extends Component {
	state = {
		movie: {Ratings: [
			{Value: ""},
			{Value: ""},
			{Value: ""}
		]}
	}

	componentDidMount() {
		const movieId = window.location.href.split("/").pop();
		API.searchOne(movieId).then(res => {
			this.setState({
				movie: res.data
			}, () => {console.log(this.state.movie)});
		});
	}

	render() {
		return(
			<Wrapper>
				<img src={this.state.movie.Poster === "N/A" || !this.state.movie.Poster ? "/nopicture.png" : this.state.movie.Poster} alt="Movie Poster"></img>
				{this.state.movie.Response === "True" ? (
					<div>
						<h2>{this.state.movie.Title}</h2>
						<span>{this.state.movie.Year}</span>
						<p>{this.state.movie.Plot}</p>
						<p>Genres: {this.state.movie.Genre}</p>
						<p>Rated: {this.state.movie.Rated}</p>
						<p>Director: {this.state.movie.Director}</p>
						<p>Actors: {this.state.movie.Actors}</p>
						<p>Writer: {this.state.movie.Writer}</p>
						<p>IMDB Score: {this.state.movie.Ratings[0].Value}</p>
						<p>Rotten Tomatoes Score: {this.state.movie.Ratings[1].Value}</p>
						<p>Metacritic Score: {this.state.movie.Ratings[2].Value}</p>
						<p>Country of Origin: {this.state.movie.Country}</p>
						<p>Original Language: {this.state.movie.Language}</p>
						<p>US Release: {this.state.movie.Released}</p>
						<p>Runtime: {this.state.movie.Runtime}</p>
						<p>Box Office Revenue: {this.state.movie.BoxOffice}</p>
						<p>Producer: {this.state.movie.Production}</p>
						<p>Awards: {this.state.movie.Awards}</p>
					</div>
				) : <h2>Movie not found</h2>}
			</Wrapper>
		);
	}
}

export default MovieInfo;