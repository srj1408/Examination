const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
dotenv.config({ path: './config.env' });
require("./db/connection");
const cookieParser=require('cookie-parser');


const app = express();
app.use(cookieParser());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(require("./router/teacher"));
app.use(require("./router/question"));
app.use(require("./router/student"));
app.use(require("./router/teacherAuth"));
app.use(require("./router/studentAuth"));
app.use(require("./router/logout"));
app.use(require("./router/admin"));

app.get('/', (req, res) => {
    res.send('Welcome to Examination System');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app listen on ${PORT} portal`);
});