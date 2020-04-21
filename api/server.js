const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const session = require("express-session");

// Routes
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");
const authenticator = require("../auth/authenticator");

const server = express();

const sessionConfig = {
  name: "",
  secret: process.env.SESSION_SECRET || "keep it secret and/or safe",
  resave: false,
  saveUninitialized: process.env.SEND_COOKIES || true,
  cookie: {
    // 10 minutes in milli-seconds
    maxAge: 1000 * 60 * 10,
    secure: process.env.USE_SECURE_COOKIES || false,
    httpOnly: true,
  },
};

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "live" });
});

module.exports = server;
