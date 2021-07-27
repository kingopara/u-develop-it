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

// query database to test connection & get all candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// Get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// last route & default response for any other response (not found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});