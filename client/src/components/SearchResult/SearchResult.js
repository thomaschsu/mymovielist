import React from "react"
import "./SearchResult.css"

const SearchResult = props => (
	<div className="movSearch">
		<img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image}></img>
		<br />
		<span>{props.title}</span>
		<span>{props.year}</span>
	</div>
);

export default SearchResult;