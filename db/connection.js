const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/examination';

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
    console.log("Database Connected!")
});