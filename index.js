const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
dotenv.config({ path: './config.env' });
require("./db/connection");

const app = express();
app.use(express.json());
<<<<<<< HEAD
app.use(require("./router/teacher"));

const port =5000;


app.listen(process.env.PORT || port, () => {
    console.log(`app listen on ${PORT}  portal`);
=======



app.use(require('./router/question'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app listen on ${PORT} portal`);
>>>>>>> 0d7bd8f03f9a67e0c4c64f4bfdc1714ee48d741f
});