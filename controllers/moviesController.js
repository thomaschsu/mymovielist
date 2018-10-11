const db = require("../models");
const movieTrailer = require('movie-trailer');

module.exports = {
	findAll: function (req, res) {
		db.User
			.find({ username: req.params.user })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	addMovie: function (req, res) {
		db.User
			.updateOne(
				{ username: req.params.user },
				{ $addToSet: { movieArr: req.body } }
			).then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	updateMovie: function (req, res) {
		if (req.body.type === "status") {
			console.log(`updating status of ${req.body.movie} to ${req.body.value} on ${req.params.user}'s list`);
			db.User
				.updateOne(
					{ username: req.params.user, "movieArr.imdbId": req.body.movie },
					{ $set: { "movieArr.$.status": req.body.value } }
				).then(dbModel => {
					console.log(dbModel);
					res.json(dbModel)
				})
				.catch(err => res.status(422).json(err));
		} else if (req.body.type === "score") {
			console.log(`updating score of ${req.body.movie} to ${req.body.value} on ${req.params.user}'s list`);
			db.User
				.updateOne(
					{ username: req.params.user, "movieArr.imdbId": req.body.movie },
					{ $set: { "movieArr.$.score": req.body.value } }
				).then(dbModel => {
					console.log(dbModel);
					res.json(dbModel)
				})
				.catch(err => res.status(422).json(err));
		} else if (req.body.type === "remove") {
			console.log(`removing ${req.body.movie} from ${req.params.user}'s list`);
			db.User
				.updateOne(
					{ username: req.params.user },
					{ $pull: { movieArr: { imdbId: req.body.movie } } }
				).then(dbModel => {
					console.log(dbModel);
					res.json(dbModel)
				})
				.catch(err => res.status(422).json(err));
		}
	},
	trailers: function(req, res) {
		movieTrailer(req.body.title, req.body.year).then(
			response => res.send(response)
		);
	}
};
