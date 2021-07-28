// import mysql2 package
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // MySQL password
        password: 'mysqlpassword1$',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// export file
module.exports = db;