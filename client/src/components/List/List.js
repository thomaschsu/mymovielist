import React from "react";
import ListItem from "./ListItem"
import "./List.css";

const List = (props) => {
  return (
    <div className="list-overflow-container">
      <table>
		  <thead>
			<tr>
				<th>Image</th>
				<th>Movie Title</th>
				<th>Score</th>
				<th>Director</th>
			</tr>
		  </thead>
		  <tbody>
			  {props.movies.map(movie => (
				  <ListItem image={movie.image} title={movie.title} score={movie.score} status={movie.status} director={movie.director} />
			  ))}
		  </tbody>
	  </table>
    </div>
  );
};

export default List;