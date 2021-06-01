const mongoose = require('mongoose');

const marks = new mongoose.Schema({
    roll: {
        type: Number,
        required: true
    },
    scode: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Mark', marks);