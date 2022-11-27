const Pool = require('pg').Pool;

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
};

const connecPG = new Pool(config);

module.exports = connecPG;
