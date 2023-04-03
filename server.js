const express= require('express');
const app= express();
const mongoose= require('mongoose');
const Sport= require('./models/Model');
const SportRouter= require('./routes/route');
const morgan = require('morgan');

const MongoDB= 'mongodb+srv://Mundyo:Kasongi2014@lowellsport.wlprqwj.mongodb.net/Lowell?retryWrites=true&w=majority'
// const MongoDB= 'mongodb+srv://Mundyo:Kasongi2014@lowellsport.wlprqwj.mongodb.net/Lowell';
 
console.log(MongoDB);

mongoose.set('strictQuery', true);

const connectDB= async () =>{
    await mongoose.connect(MongoDB,{
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
app.use('/', SportRouter);

app.listen(3000);
