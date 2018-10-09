import React from "react";

const ListItem = props => (
  <tr className="list-group-item">
    <td></td>
    <td><img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image} className="list-item-img" alt="movie-poster"></img></td>
    <td>{props.title}</td>
    <td>
      <select data-imdb={props.imdb} data-ddtype="score" onChange={props.dropdown}>
        <option value="10" selected={props.score === "10"}>10</option>
        <option value="9" selected={props.score === "9"}>9</option>
        <option value="8" selected={props.score === "8"}>8</option>
        <option value="7" selected={props.score === "7"}>7</option>
        <option value="6" selected={props.score === "6"}>6</option>
        <option value="5" selected={props.score === "5"}>5</option>
        <option value="4" selected={props.score === "4"}>4</option>
        <option value="3" selected={props.score === "3"}>3</option>
        <option value="2" selected={props.score === "2"}>2</option>
        <option value="1" selected={props.score === "1"}>1</option>
        <option value="-" selected={props.score === "-"}>-</option>
      </select></td>
    <td><select data-imdb={props.imdb} data-ddtype="status" onChange={props.dropdown}>
        <option value="completed" selected={props.status === "completed"}>Completed</option>
        <option value="dropped" selected={props.status === "dropped"}>Dropped</option>
        <option value="ptw" selected={props.status === "ptw"}>Plan to Watch</option>
      </select></td>
    <td>{props.director}</td>
    <td><a onClick={props.delete} className="btn-floating btn-small waves-effect waves-light red"><i data-imdb={props.imdb} className="material-icons">clear</i></a></td>
  </tr>
);

export default ListItem;