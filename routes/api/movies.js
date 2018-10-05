const router = require("express").Router();
const moviesController = require("../../controllers/moviesController");

router.route("/:user")
  .get(moviesController.findAll);

module.exports = router;
