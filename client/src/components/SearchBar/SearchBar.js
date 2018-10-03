import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
	<form onSubmit={props.submitfunc} {...props}>
		<input type="text" className="input-text" placeholder="Enter Your Movie Title Here" onChange={props.changefunc} {...props}></input>
		<input type="submit" value="Search" className="search-button btn"></input>
	</form>
);

export default SearchBar;