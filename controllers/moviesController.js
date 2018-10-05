const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .find({username: req.params.user})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
