import React, { Component } from "react";
import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"
import API from "../utils/API"

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
			this.setState({
				results: res.data.Search
			}, () => {console.log(this.state.results)});
		});
	}

	render() {
		return (
			<div>
				<SearchBar changefunc={this.handleInputChange} submitfunc={this.handleFormSubmit} />
				<div>
					{this.state.results.map(element => <SearchResult title={element.Title} image={element.Poster} year={element.Year} />)}
				</div>
			</div>
		);
	}
}

export default Search;