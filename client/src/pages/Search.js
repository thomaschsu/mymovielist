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
			this.setState({
				results: res.data.Search
			}, () => {console.log(this.state.results)});
		});
	};

	handleAddToList = event => {

	};

	render() {
		return (
			<div>
				<Wrapper>
					<SearchBar changefunc={this.handleInputChange} submitfunc={this.handleFormSubmit} />
					<div>
						{this.state.results.map(element => <SearchResult title={element.Title} image={element.Poster} year={element.Year} key={element.imdbID} id={element.imdbID} />)}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default Search;