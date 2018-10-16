import React from "react";
import ListItem from "./ListItem"
import "./List.css";

const List = (props) => {
  return (
    <div className="list-overflow-container">
      <table>
		  <thead>
			<tr className="table-head">
				<th className="status"></th>
				<th>Image</th>
				<th><a onClick={props.sort}>Movie Title</a></th>
				<th><a onClick={props.sort}>Score</a></th>
				<th><a onClick={props.sort}>Status</a></th>
				<th><a onClick={props.sort}>Director</a></th>
				<th className="delete"></th>
			</tr>
		  </thead>
		  <tbody>
			  {props.movies.map((movie, index) => (
				  <ListItem key={index} delete={props.delete} dropdown={props.dropdown} imdb={movie.imdbId} image={movie.image} title={movie.title} score={movie.score} status={movie.status} director={movie.director} />
			  ))}
		  </tbody>
	  </table>
    </div>
  );
};

export default List;