var knexfile = require('./knexfile.js');
if (process.env.NODE_ENV === "production") {
  var knex = require('knex')(knexfile.production);
} else {
  var knex = require('knex')(knexfile.development);
}


module.exports = knex;
