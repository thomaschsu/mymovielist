import React, { Component } from "react";
import "./FriendBar.css"
import axios from 'axios';

let foundFriends = [];
let newF;

class FriendBar extends Component {

	constructor() {
		super();
		this.state = {
			friendSearch: "",
			setCount: 0
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	componentDidUpdate() {
		this.formEmpty();
		this.userCall();
	}

	formEmpty() {
		// console.log(this.state.friendSearch.length)
		if (this.state.friendSearch.length === 0) {
			document.getElementById("friendResult").innerHTML = "";
		}
	}

	addFriend(event) {
		event.preventDefault();
		console.log("clicked");
		console.log(event.target.id)
		let friend = event.target.id
		window.location.replace("http://localhost:3000/movielist/" + friend)
		// API.addFriend(sessionStorage.getItem("username").slice(1, -1), friend).then(console.log("added"))
	}

	userCall() {
		axios.get('/auth/friends').then(response => {
			// console.log("got it")
			for (let j = 0; j < response.data.length; j++) {
				let currentFriend = response.data[j].username;
				if (this.state.friendSearch === currentFriend.substring(0, 1)) {
					foundFriends.push(currentFriend)
					newF = foundFriends.map((f) =>
						<div>
							<li className="friend-name">{f}</li>
							<a onClick={this.addFriend} className="btn-floating btn-small waves-effect waves-light green friend-button"><i id={f} className="material-icons">search
</i></a>
							<hr></hr>
						</div>
					)

				}
			}
		})
	}


	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						className="input-text"
						name="friendSearch"
						value={this.state.friendSearch}
						placeholder="Search friends here"
						onChange={this.handleChange}
					>
					</input>

				</form>
				<div id="friendResult">{newF}</div>

			</div>

		)
	}
}


export default FriendBar;