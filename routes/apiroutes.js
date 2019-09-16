var db = require("../models");
const bcrypt = require('bcrypt');

module.exports = function(app) {
  app.post("/api/users", async function(req, res) {
    //create new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: hashedPassword
    })
    .then(post => {
      res.json(post);
    })
  });
}