// import mysql2 package
const mysql = require('mysql2');
// import express
const express = require('express');
//PORT designation
const PORT = process.env.PORT || 3001;
//app expression
const app = express();
// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// query database to test connection
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// last route & default response for any other response (not found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});