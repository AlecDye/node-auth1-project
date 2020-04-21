const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "live" });
});

server.post("/api/register", (req, res) => {
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

module.exports = server;
