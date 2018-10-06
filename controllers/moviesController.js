const db = require("../models");

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
		console.log(`updating ${req.body.type} of ${req.body.movie} to ${req.body.value} on ${req.params.user}'s list`);
		if (req.body.type === "status") {
			console.log("in status");
			db.User
				.updateOne(
					{ username: req.params.user, "movieArr.title": req.body.movie },
					{ $set: {"movieArr.$.status": req.body.value} }
				).then(dbModel => {
					console.log(dbModel);
					res.json(dbModel)
				})
				.catch(err => res.status(422).json(err));
		} else if (req.body.type === "score") {
			console.log("in score");
			db.User
				.updateOne(
					{ username: req.params.user, "movieArr.title": req.body.movie },
					{ $set: {"movieArr.$.score": req.body.value} }
				).then(dbModel => {
					console.log(dbModel);
					res.json(dbModel)
				})
				.catch(err => res.status(422).json(err));
		}
	},
	removeMovie: function (req, res) {
		db.User
			.updateOne(
				{ username: req.params.user },
				{ $pull: { "moiveArr.title": req.body } }
			).then(dbModel => {
				console.log(dbModel);
				res.json(dbModel)
			})
			.catch(err => res.status(422).json(err));
	}
};
