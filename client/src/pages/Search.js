import React, { Component } from "react";
import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"
import API from "../utils/API"
import Wrapper from "../components/Wrapper";

class Search extends Component {
	state = {
		search: "",
		results: [],
		page: 1,
		maxPage: 1
	};

	handleInputChange = event => {
		this.setState({
			search: event.target.value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.searchAPI();
	};

	searchAPI = () => {
		API.search(this.state.search, this.state.page).then(res => {
			if (res.data.Search) {
				this.setState({
					results: res.data.Search,
					maxPage: Math.ceil(res.data.totalResults / 10)
				});
			}
		});
	};

	handlePagination = event => {
		if (event.target.textContent === "Previous Page") {
			this.setState({
				page: (this.state.page - 1)
			}, this.searchAPI);
		}
		else if (event.target.textContent === "Next Page") {
			this.setState({
				page: (this.state.page + 1)
			}, this.searchAPI);
		}
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
					{this.state.results.length > 0 && this.state.page > 1 ? <button onClick={this.handlePagination}>Previous Page</button> : ""}
					{this.state.results.length > 0 && this.state.page < this.state.maxPage ? <button onClick={this.handlePagination}>Next Page</button> : ""}
					<div>
						{this.state.results.map(element => <SearchResult title={element.Title} image={element.Poster} year={element.Year} key={element.imdbID} imdb={element.imdbID} click={this.handleAddToList} />)}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default Search;