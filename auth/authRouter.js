//* import bcryptjs
const bcrypt = require("bcryptjs");

//* import businesses and volunteers helper functions
const businessesDb = require("../data/helpers/businessesDb");
const volunteersDb = require("../data/helpers/volunteersDb");

//* create router
const express = require("express");
const router = express.Router();

//* create business register endpoint
router.post("/bus/register", async (req, res) => {
  try {
    const credentials = req.body;
    //* override password w/hash
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;

    //* add new business to db businesses table
    const newBusiness = await businessesDb.addBusiness(credentials);
    if (newBusiness) {
      res.status(201).json(newBusiness);
    } else {
      res.status(500).json({ error: "Unable to register new business" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//* create volunteer register endpoint
router.post("/register/bus", (req, res) => {});

module.exports = router;
