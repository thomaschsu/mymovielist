const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('../../passport')

// this route is just used to get the user basic info
router.get('/user', function(req, res) {
	User.find({}, function(err, docs) {
		if (!err){
			console.log(docs);
			res.json(docs)
		} else {throw err;}
	});

})

router.get('/friends', function(req, res) {
	User.find({}, function(err, docs) {
		if (!err) {
			console.log("here")	// for some reason, if I dont have anything here it cannot get the API call
			res.json(docs)
		} else {throw err;}
	});
})

router.post('/login', (req, res, next) => {
		console.log(req.body)
		console.log('========Pre-Authentication=========')
		next()
	},
	passport.authenticate('local'), (req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { firstName, lastName, username, email, password } = req.body
	console.log(req.body);

	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with that username: ${username}`
			})
		}
		const newUser = new User({
			'firstName': firstName,
			'lastName': lastName,
			'username': username,
			'email': email,
			'password': password,
			'movieData': ""
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router