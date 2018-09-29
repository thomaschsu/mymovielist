import React from "react";
import "./SearchBar.css"

const SearchBar = props => (
	<form onSubmit={props.submitfunc} {...props}>
		<input type="text" onChange={props.changefunc} {...props}></input>
		<input type="submit" value="Search"></input>
	</form>
);

export default SearchBar;