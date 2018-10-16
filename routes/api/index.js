const router = require("express").Router();
const listRoutes = require("./list");
const moviesController = require("../../controllers/moviesController");

// Book routes
router.use("/list", listRoutes);

router.route("/trailers/:title/:year")
	.get(moviesController.trailers);

router.route("/friend/:user")

module.exports = router;