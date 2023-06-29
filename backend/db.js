const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "valent1602",
    port: 5432,
});

module.exports = pool;