const mongoose = require('mongoose');

/*const DB = 'mongodb://localhost:27017/examination';

>>>>>>> 0d7bd8f03f9a67e0c4c64f4bfdc1714ee48d741f

mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
    console.log("Database Connected!")
});
*/
//

// const DB = process.env.DATABASE_URL;
const DB = 'mongodb://localhost:27017/examination';
// const DB = 'mongodb+srv://Srj1408:Suraj@140899@cluster0.dcblo.mongodb.net/examination?retryWrites=true&w=majority'

mongoose.connect(DB,{useNewUrlParser:true , useUnifiedTopology:true}).then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log(err);
})