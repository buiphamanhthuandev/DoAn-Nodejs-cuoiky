const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
})
db.getConnection(()=>{
    console.log('db connected!')
})

module.exports = db;