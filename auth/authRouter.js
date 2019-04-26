//* import bcryptjs
const bcrypt = require("bcryptjs");

//* import businesses and volunteers helper functions
const businessesDb = require("../data/helpers/businessesDb");
const volunteersDb = require("../data/helpers/volunteersDb");

//* create router
const express = require("express");
const router = express.Router();
