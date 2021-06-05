const express = require('express');
const app = express();
const router = express.Router();
const Question = require("../models/question");

router.get('/questions/:scode', async (req, res) => {
    res.send("Welcome to questions");
    /*const qbank = await Question.find( { "subjectCode": req.params.scode },{"added":1});
    for(let q of qbank){
        console.log(q.added);
    }
    */
});

module.exports = router;