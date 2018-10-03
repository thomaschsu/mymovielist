import React from "react";

const ListItem = props => (
  <tr className="list-group-item">
    <td></td>
    <td><img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image}></img></td>
    <td>{props.title}</td>
    <td>{props.score}</td>
    <td>{props.status}</td>
    <td>{props.director}</td>
  </tr>
);

export default ListItem;