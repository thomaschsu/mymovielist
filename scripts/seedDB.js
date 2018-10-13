const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/mymovielist"
);

const userSeed = [
	{
		firstName: "firstName",
		lastName: "lastName",
		username: "testUsername",
		email: "test@email.com",
		password: "password1!",
		movieArr : [
			{
				"title" : "Princess Mononoke",
				"score" : "10",
				"status" : "completed",
				"image" : "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
				"director" : "Hayao Miyazaki"
			},
			{
				"title" : "Captain America: Civil War",
				"score" : "4",
				"status" : "dropped",
				"image" : "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
				"director" : "Joe Russo"
			},
			{
				"title" : "Whiplash",
				"score" : "-",
				"status" : "ptw",
				"image" : "https://ia.media-imdb.com/images/M/MV5BODZjN2E2NDctOWZlMy00MGE0LWFlMmMtYWY0Mzc1NDA2N2VkXkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_SX300.jpg",
				"director" : "Damian Chazelle"
			}
		],
		friendsArray: [],
		createdAt: new Date(Date.now())
	}
];

db.User
	.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.insertedIds.length + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});