const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        reuired: true
    }
});
module.exports = mongoose.model('Admin', admin);
