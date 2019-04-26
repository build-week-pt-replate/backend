//* Create Express Server
const express = require("express");
const server = express();

//* Add middleware to server
const middlewareConfig = require("./middleware.js");
middlewareConfig(server);

//* Configure server to use routers
const businessesRouter = require("../resources/businesses/businessesRouter");
server.use("/api/business", businessesRouter);
const volunteersRouter = require("../resources/volunteers/volunteersRouter");
server.use("/api/volunteer", volunteersRouter);

module.exports = server;
