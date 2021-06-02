const express = require('express');
const router = express.Router();
const Question = require("../models/question");

router.get('/questions/:scode', async (req, res) => {
    const qbank = await Question.find( { "scode": req.params.scode },{"added":1});
    res.send(qbank.added);
})

module.exports = router;