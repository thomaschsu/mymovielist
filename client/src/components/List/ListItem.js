import React from "react";

const ListItem = props => (
  <tr className="list-group-item">
    <td></td>
    <td><img src={props.image === "N/A" || !props.image ? "/nopicture.png" : props.image} alt="displays site name"></img></td>
    <td>{props.title}</td>
    <td>
      <select>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>

      </select></td>
    <td><select>
        <option value="completed">Completed</option>
        <option value="dropped">Dropped</option>
        <option value="plantowatch">Plan to Watch</option>
      </select></td>
    <td>{props.director}</td>
  </tr>
);

export default ListItem;