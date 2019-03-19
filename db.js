const pg = require('pg')

if (process.env.NODE_ENV === "production") {

  const config = {
    user: process.env.REACT_APP_DATABASE_URL,
    ssl: true,
    user: process.env.REACT_APP_SERVER_KNEX_PROD_DB_USERNAME,
    database: process.env.REACT_APP_SERVER_KNEX_PROD_DB_NAME,
    password: process.env.REACT_APP_SERVER_KNEX_PROD_DB_PASSWORD,
  }

  const pool = new pg.Pool(config);

} else {

  const dbPassword = process.env.REACT_APP_SERVER_KNEX_DEV_DB_PASSWORD;

  const config = {
    user: process.env.REACT_APP_SERVER_KNEX_DEV_DB_USERNAME,
    databasce: process.env.REACT_APP_SERVER_KNEX_DEV_DB_NAME,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
  }

  const pool = new pg.Pool(config);

}


module.exports = pool;
