const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

// DB connect 
var mongoose = require('mongoose');
const dbString = require("./config.js")

mongoose.connect(dbString, { useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});

var User = require('./models/User.js');

// var a = new User({
//   id:uuid4,
//   username:'dan',
//   password:hashh,
// })
// a.save()

// bcrypt
const bcrypt = require('bcrypt');
// bcrypt.hash('myPassword', 10, function(err, hash) {
//   // Store hash in database
//   var uuid = require('uuid');

// let uuid4 = uuid.v4();
// console.log(uuid4)
//   var a = new User({
//     id:uuid4,
//     username:'dan',
//     password:hash,
//   })
//   a.save()
// });


// var test
// User.findOne({id:1 }, function (err, docs) { 
//   if (err){ 
//       console.log(err) 
//   } 
//   else{ 
//       test=docs.password
//       // docs.username="test22"
//       // docs.save()
//       console.log("saved hash")
//       console.log(docs.password)
//       bcrypt.compare('myPasxsword', docs.password, function(err, res) {
//         if(res) {
//          // Passwords match
//          console.log("they match")

//         } else {
//          // Passwords don't match
//         } 
//       });


//   } 
// }); 


// var MyModel = mongoose.model('User', new Schema({ name: String }));
// Works
// MyModel.findOne(function(error, result) { /* ... */ });


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
})
app.post('/api/login', (req, res2) => {
  console.log("login post")
  console.log(req.body.password)

  User.findOne({email:req.body.email}, function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
      test=docs.password
      // docs.username="test22"
      // docs.save()
      console.log("saved hash")
      console.log(docs.password)
      bcrypt.compare(req.body.password, docs.password, function(err, res) {
        if(res) {
          // Passwords match
          console.log("they match")
          res2.send({ message: 'correct password' });
        } 
        else {
          // Passwords don't match
          console.log("wrong password")
          res2.send({ message: 'bad password' });
        }
      })
    }
  }) 
})
app.post('/api/signup', (req, res) => {
  console.log(req.body)

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    // Store hash in database
    var uuid = require('uuid');
  
  let uuid4 = uuid.v4();
  console.log(uuid4)
    var a = new User({
      id:uuid4,
      email:req.body.email,
      password:hash,
    })
    a.save()
  });

  res.send({ express: 'Hello From Express' });
});

app.get('/', (req, res) => {
  console.log(req.body)
  res.send({ express: 'Home From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// var server = https.createServer(options, app);

// server.listen(port, () => {
//   console.log("server starting on port : " + port)
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
