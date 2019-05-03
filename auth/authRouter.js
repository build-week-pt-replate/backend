//* import bcryptjs
const bcrypt = require("bcryptjs");

//* import token generator function
const tokenService = require("./tokenService");

//* import businesses and volunteers helper functions
const businessesDb = require("../data/helpers/businessesDb");
const volunteersDb = require("../data/helpers/volunteersDb");

//* create router
const express = require("express");
const router = express.Router();

//****ADD REGISTER ROUTE HANDLERS ********/

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
      //* generate token
      const token = tokenService.generateToken(newBusiness);
      res.status(201).json({
        ...newBusiness,
        token: token
      });
    } else {
      res.status(500).json({ error: "Unable to register new business" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//* create volunteer register endpoint
router.post("/vol/register", async (req, res) => {
  try {
    const credentials = req.body;
    //* override password w/hash
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;

    //* add new business to db businesses table
    const newVolunteer = await volunteersDb.addVolunteer(credentials);
    if (newVolunteer) {
      //* generate token
      const token = tokenService.generateToken(newVolunteer);
      res.status(201).json({
        ...newVolunteer,
        token: token
      });
    } else {
      res.status(500).json({ error: "Unable to register new volunteer" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//*****ADD LOGIN ROUTE HANDLERS ***********/

//* create business login endpoint
router.post("/bus/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //* grab the business from db if exists
    const business = await businessesDb.getBusinessById(email);
    if (business && bcrypt.compareSync(password, business.password)) {
      //* generate token
      const token = tokenService.generateToken(business);
      res.status(200).json({
        ...business,
        token,
        message: `Welcome ${business.companyName}`
      });
    } else {
      res
        .status(404)
        .json({ error: "Invalid credentials. Check email or password" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Invalid credentials. Check email or password" });
  }
});

//* create volunteer login endpoint
router.post("/vol/login", async (req, res) => {
  try {
    const { email, password } = await req.body;

    //* grab the volunteer from db if exists
    const volunteer = await volunteersDb.getVolunteerByEmail(email);
    if (volunteer && bcrypt.compareSync(password, volunteer.password)) {
      const token = tokenService.generateToken(volunteer);
      res.status(200).json({
        ...volunteer,
        token,
        message: `Welcome ${volunteer.firstName} ${volunteer.lastName}`
      });
    } else {
      res
        .status(404)
        .json({ error: "Invalid credentials. Check username or password" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ err: error.message, foo: "bar" });
  }
});

module.exports = router;
