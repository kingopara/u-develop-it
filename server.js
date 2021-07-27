// import express
const express = require('express');
//PORT designation
const PORT = process.env.PORT || 3001;
//app expression
const app = express();
// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test the connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'hello world'
//     });
// });




// last route & default response for any other response (not found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});