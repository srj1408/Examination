const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
dotenv.config({ path: './config.env' });
require("./db/connection");

const app = express();
app.use(express.json());



app.use(require('./router/question'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app listen on ${PORT} portal`);
});