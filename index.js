const dotenv = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
dotenv.config({ path: './config.env' });
require("./db/connection");
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const Question = require("./models/question");
const PORT = process.env.PORT;

app.get('/questions/:scode', async (req, res) => {
    const qbank = await Question.find( { "scode": req.params.scode },{"added":1});
    res.render("qbank",{qbank});
})

app.listen(PORT, () => {
    console.log(`app listen on ${PORT} portal`);
});