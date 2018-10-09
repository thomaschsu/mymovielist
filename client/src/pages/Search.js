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
		maxPage: 1,
		listIds: []
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
		if (event.target.textContent === "Previous") {
			this.setState({
				page: (this.state.page - 1)
			}, this.searchAPI);
		}
		else if (event.target.textContent === "Next") {
			this.setState({
				page: (this.state.page + 1)
			}, this.searchAPI);
		}
	};

	handleAddToList = event => {
		event.persist();
		if (event.target.textContent === "clear") {
			this.handleDeleteFromList(event);
			return;
		}
		const movieId = event.target.dataset.imdb;
		let movie = {};
		API.searchOne(movieId).then(res => {
			movie = {
				title: res.data.Title,
				imdbId: movieId,
				score: "-",
				status: "completed",
				image: res.data.Poster,
				director: res.data.Director
			};
			API.addMovie(sessionStorage.getItem("username").slice(1, -1), movie).then(() => {
				this.setState({
					listIds: [...this.state.listIds, movieId]
				});
			});
		});
	};

	handleDeleteFromList = event => {
		const movieId = event.target.dataset.imdb;

		API.removeMovie(sessionStorage.getItem("username").slice(1, -1), movieId).then(() => {
			let newList = this.state.listIds;
			newList.splice(this.state.listIds.indexOf(movieId), 1);
			console.log(newList)
			this.setState({
				listIds: newList
			});
		});
	};

	componentDidMount() {
		API.getMovies(sessionStorage.getItem("username").slice(1, -1)).then(res => {
			this.setState({
				listIds: res.data[0].movieArr.map(movie => movie.imdbId)
			}, () => {console.log(this.state.listIds)});
		});
	}

	render() {
		return (
			<div>
				<Wrapper>
					<SearchBar changefunc={this.handleInputChange} submitfunc={this.handleFormSubmit} />
					{this.state.results.length > 0 && this.state.page > 1 ? <button onClick={this.handlePagination} className="previous-page">Previous</button> : ""}
					{this.state.results.length > 0 && this.state.page < this.state.maxPage ? <button onClick={this.handlePagination} className="next-page">Next</button> : ""}
					<div>
						{this.state.results.map(element => <SearchResult title={element.Title} image={element.Poster} year={element.Year} key={element.imdbID} imdb={element.imdbID} click={this.handleAddToList} added={this.state.listIds.includes(element.imdbID)} />)}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default Search;