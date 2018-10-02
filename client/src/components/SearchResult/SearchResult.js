import React from "react"
import "./SearchResult.css"

const SearchResult = props => (
	<div>
		<img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image}></img>
		<p>{props.title}</p>
		<p>{props.year}</p>
	</div>
);

export default SearchResult;