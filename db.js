const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ivanuser1',
    host: 'localhost',
    password: 'root',
    database: 'node_postgres',
    port: 5432,
})

module.exports = pool