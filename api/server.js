//* Create Express Server
const express = require("express");
const server = express();

//* Add middleware to server
const middlewareConfig = require("./middleware.js");
middlewareConfig(server);

//* Configure server to use routers
const businessesRouter = require("../resources/businesses/businessesRouter");
server.use("/api/business", businessesRouter);

module.exports = server;
