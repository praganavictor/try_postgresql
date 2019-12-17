const envirement = process.env.NODE_ENV || "development";
const config = require("../knexfile");
const envirementConfig = config[envirement];
const knex = require("knex");
const connection = knex(envirementConfig);

module.exports = connection;
