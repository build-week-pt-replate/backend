//* import json web token & secrets/authConfig object
const jwt = require("jsonwebtoken");
const secrets = require("./authConfig");

//* create verification function
function verify(req, res, next) {
  //* grab the token
  const token = req.headers.authorization;

  if (token) {
    //* verify the token
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: `Unable to validate credentials` });
      } else {
        //* provide decoded token to rest of api so payload can be retrived
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: `Error in validating credentials` });
  }
}

module.exports = {
  verify
};
