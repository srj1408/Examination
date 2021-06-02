const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
dotenv.config({ path: './config.env' });
require("./db/connection");
app.use(express.json());
app.use(require("./router/teacher"));

const port =5000;


app.listen(process.env.PORT || port, () => {
    console.log(`app listen on ${PORT}  portal`);
});