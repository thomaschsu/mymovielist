import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
	<form onSubmit={props.submitfunc}>
		<input type="text" className="input-text" placeholder="Enter Your Movie Title Here" onChange={props.changefunc}></input>
		<input type="submit" value="Search" className="search-button btn"></input>
	</form>
);

export default SearchBar;