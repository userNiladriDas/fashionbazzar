const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'doraemon',
  database: 'myDB',
});

module.exports = pool;
