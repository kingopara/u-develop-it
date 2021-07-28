// import express
const express = require('express');
// import connection.js file
const db = require('./db/connection');
//connecting route
const apiRoutes = require('./routes/apiRoutes');

//PORT designation
const PORT = process.env.PORT || 3001;
//app expression
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// using routes
app.use('/api', apiRoutes);

// last route & default response for any other response (not found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start server
// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});