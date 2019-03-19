// REQUIRED for dotenv to work properly in knex.
require('dotenv').config();
// const pg = require('pg')
// pg.defaults.ssl = true
// Check this for heroku setup:
// https://elements.heroku.com/addons/heroku-postgresql

module.exports = {


  production: {
    client: 'pg',
    connection: {
      host : process.env.REACT_APP_DATABASE_URL,
      user : process.env.REACT_APP_SERVER_KNEX_PROD_DB_USERNAME,
      password : process.env.REACT_APP_SERVER_KNEX_PROD_DB_PASSWORD,
      database : process.env.REACT_APP_SERVER_KNEX_PROD_DB_NAME,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};
