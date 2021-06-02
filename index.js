const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
require("./db/connection");

const app = express();
app.use(express.json());

dotenv.config({ path: './config.env' });

app.use(require('./router/question'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app listen on ${PORT} portal`);
});