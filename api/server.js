const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// Routes
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "live" });
});

module.exports = server;
