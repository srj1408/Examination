const express = require('express');
const app = express();
const router = express.Router();
const Question = require("../models/question");

router.get('/questions/:scode', async (req, res) => {
    const qbank = await Question.find( { "subjectCode": req.params.scode },{"added":1});
    for(let q of qbank){
        console.log(q.added);
    }
    
});
router.get('/questions/:scode/:year', async (req,res) => {
    const scode = req.params.scode;
    const year = req.params.year;
    const question = await Question.find( { "subjectCode": scode, "added": year });
    res.send(question);
})

module.exports = router;