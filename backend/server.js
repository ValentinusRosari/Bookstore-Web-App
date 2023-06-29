const express = require("express");
const bookRoutes = require('./src/routes/book');
const db = require("./db");

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/books', bookRoutes);

app.listen(port, () => console.log('app listening on port ${port}'));
