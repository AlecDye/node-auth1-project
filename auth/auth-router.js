const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  let user = req.body;

  Users.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to submit registration", error });
    });
});

server.post("/api/login", (req, res) => {});

module.exports = router;
