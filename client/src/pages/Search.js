import React, { Component } from "react";
import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"
import API from "../utils/API"
import Wrapper from "../components/Wrapper";

class Search extends Component {
	state = {
		search: "",
		results: []
	}

	handleInputChange = event => {
		this.setState({
			search: event.target.value
		}, () => {console.log(this.state.search)});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		API.search(this.state.search).then(res => {
			if (res.data.Search) {
				this.setState({
					results: res.data.Search
				}, () => {console.log(this.state.results)});
			}
		});
	};

	handleAddToList = event => {
		const movieId = event.target.dataset.imdb;
		let movie = {};
		API.searchOne(movieId).then(res => {
			movie = {
				title: res.data.Title,
				score: "-",
				status: "completed",
				image: res.data.Poster,
				director: res.data.Director
			};
			API.addMovie(sessionStorage.getItem("username").slice(1, -1), movie)
		});
	};

	render() {
		return (
			<div>
				<Wrapper>
					<SearchBar changefunc={this.handleInputChange} submitfunc={this.handleFormSubmit} />
					<div>
						{this.state.results.map(element => <SearchResult title={element.Title} image={element.Poster} year={element.Year} key={element.imdbID} imdb={element.imdbID} click={this.handleAddToList} />)}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default Search;