import React from "react";

const ListItem = props => (
  <tr className="list-group-item">
    <td>{props.image}</td>
    <td>{props.title}</td>
    <td>{props.score}</td>
    <td>{props.status}</td>
    <td>{props.director}</td>
  </tr>
);

export default ListItem;