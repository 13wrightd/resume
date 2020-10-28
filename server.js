const express = require('express');
const bodyParser = require('body-parser');


// DB connect
var mongoose = require('mongoose');
var dbString=require("./config.js")
console.log(dbString)

mongoose.connect(dbString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});

var User = require('./models/User.js');

// var a = new User({
//   id:34,
//   username:'dannyboy2',
//   password:'pass',
// })
// a.save()
User.findOne({id:34 }, function (err, docs) { 
  if (err){ 
      console.log(err) 
  } 
  else{ 
      console.log("Result : ", docs); 
      docs.username="test22"
      docs.save()
  } 
}); 


// var MyModel = mongoose.model('User', new Schema({ name: String }));
// Works
// MyModel.findOne(function(error, result) { /* ... */ });


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
