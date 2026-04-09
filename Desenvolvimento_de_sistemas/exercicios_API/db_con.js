import './config/env.js'
import pg from 'pg';
const {Pool} = pg;

console.log('PASSWORD:', process.env.DB_PASSWORD);
console.log('HOST:', process.env.DB_HOST);
console.log('USER:', process.env.DB_USER);
console.log('TIPO:', typeof process.env.DB_PASSWORD);

const pool = new Pool ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;