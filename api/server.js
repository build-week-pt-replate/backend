//* Create Express Server
const express = require("express");
const server = express();

//* Add middleware to server
const middlewareConfig = require("./middleware.js");
middlewareConfig(server);

module.exports = server;
