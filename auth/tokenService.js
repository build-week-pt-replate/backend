//* import json web token and secrets object
const jwt = require("jsonwebtoken");
const secrets = require("./authConfig");

//* Create function to generate token
function generateToken(resource) {
  const payload = {
    subject: resource.id,
    email: resource.email
  };

  const options = {
    expiresIn: "1d"
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);
  return token;
}

module.exports = {
  generateToken
};
