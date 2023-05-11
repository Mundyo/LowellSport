const express= require('express');
const app= express();
const mongoose= require('mongoose');

const Sport= require('./models/Model');
const Event= require('./models/Event')
const SportRouter= require('./routes/route');
const morgan = require('morgan');


// mongoose.connect('mongodb+srv://Mundyo:<password>@cluster0.suxct1m.mongodb.net/', {useNewUrlParser: true});
// mongoose.set('strictQuery', false);


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("connected to database")
// });
// const MongoDB = 'mongodb+srv://Mundyo:Kasongi2014@cluster0.suxct1m.mongodb.net/blog?retryWrites=true&w=majority';

// console.log(MongoDB);

// mongoose.set('strictQuery', true);


// const connnectDB = async () => {
//     await mongoose.connect(MongoDB, {
//         useUnifiedTopology: true,
//     });
//     console.log("MongoDB is connected")
// }

// connnectDB();

 const DB= 'mongodb+srv://Mundyo:Kasongi2014@lowellsport.wlprqwj.mongodb.net/Lowell';

console.log(DB);

mongoose.set('strictQuery', true);

const connectDB= async () =>{
    await mongoose.connect(DB,{
        useUnifiedTopology:true,
    });
    console.log('Mongodb is connected')
}

connectDB();





app.set('view engine', 'ejs');
// ejs will be looking at the views folder  and render the file
app.use(express.urlencoded({extended:false}));
app.use(morgan('tiny'));
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.render('index')
});

app.get('/soccer', function(req, res) {
    Sport.find({type: 'soccer'}, function(err, Sport) {
      if (err) throw err;
      res.render('soccer', {Sport: Sport});
    });
});

  

 app.use('/', SportRouter);


app.listen(8000);



// Insert a few documents into the sales collection.



