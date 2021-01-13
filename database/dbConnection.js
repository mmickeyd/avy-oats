const config = require('./config.js');
const { Pool } = require('pg');

const pool = new Pool(config);

const dbConnection = pool.connect()
  .then( console.log('Postgres database connected') )
  .catch( e => console.error(e) );

module.exports = pool;