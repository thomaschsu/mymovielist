import React from "react"
import "./SearchResult.css"

const SearchResult = props => (
	<div className="movSearch animated fadeInDownBig delay-2s">
		<img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image}></img>
		<a class="btn-floating btn-med waves-effect waves-light red"><i class="material-icons">add</i></a>
		<br />
		<div className="titleContainer">
		<span className="movTitle">{props.title} </span>
		<span className="movYear">({props.year})</span>
		</div>

	</div>
);

export default SearchResult;