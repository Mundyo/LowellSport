const express = require("express");
const app = express();
const mongoose = require("mongoose");
const EventRouter = require("./routes/EventRoute");
const Event = require("./models/Event");
const Sport = require("./models/Model");
const bodyParser = require("body-parser");
const SportRouter = require("./routes/route");
const morgan = require("morgan");

const DB =
  "mongodb+srv://Mundyo:Kasongi2014@lowellsport.wlprqwj.mongodb.net/Lowell";

console.log(DB);

mongoose.set("strictQuery", true);

const connectDB = async () => {
  await mongoose.connect(DB, {
    useUnifiedTopology: true,
  });
  console.log("Mongodb is connected");
};

connectDB();

app.set("view engine", "ejs");
// ejs will be looking at the views folder  and render the file
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");

});

app.get('/soccer', function(req, res) {
    Sport.find({type: 'soccer'}, function(err, Sport) {
      if (err) throw err;
      res.render('soccer', {Sport: Sport});
      
  
    });
})

app.get("/soccer", function (req, res) {
  Sport.find({ type: "soccer" }, function (err, Sport) {
    if (err) throw err;
    res.render("soccer", { Sport: Sport });
  

})
});



 app.use('/', SportRouter);
//   app.use('/event', EventRouter);



app.listen(process.env.PORT || 5000)





