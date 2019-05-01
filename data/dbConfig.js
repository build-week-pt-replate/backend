const knex = require("knex");

//* import knex configuration
const knexConfig = require("../knexfile");

//* create and export database/knex connection
const environment = process.env.NODE_ENV || "development";
module.exports = knex(knexConfig[environment]);
