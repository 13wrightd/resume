const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
 
const https = require('https');
const fs = require('fs');
const jwt = require("jsonwebtoken");

const uuid = require('uuid'); 
const serverID = uuid.v4();

// var key = fs.readFileSync(__dirname + '/selfsigned.key');
// var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
// var options = {
//   key: key,
//   cert: cert
// };
const token_secret = "sd42fsd2j12738gasd34fas41dfasd" //this needs to be changed to something more random and defined in another file.

// DB connect 
var mongoose = require('mongoose');
const dbString = require("./config.js")

mongoose.connect(dbString, { useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected")
});

var User = require('./models/User.js');

const bcrypt = require('bcrypt');

function generateAccessToken(email) {
  // expires after half and hour (1800 seconds = 30 minutes)
  return jwt.sign(email, token_secret, { expiresIn: '1800s' });
}
function authenticateToken(req, res, next) {
  // Gather the jwt access token from the request header
  const jwtoken = req.cookies.jwt
  console.log(jwtoken)
  if (jwtoken == null) return res.sendStatus(401) // if there isn't any token
  jwt.verify(jwtoken, token_secret, (err, user) => {

    console.log(user)
    if (err) return res.send({ 
      message: 'youre not logged in',
      serverid:serverID 
    });
    req.email = user
    next() // pass the execution off to whatever request the client intended
  })
}

const app = express();
app.use(cookieParser())
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/private', authenticateToken, (req, res) => {
  console.log("authentication successful")
  res.send({ message: 'authentication successful',
serverid:serverID });
})
app.post('/api/hello', (req, res) => {
  res.send({ 
    message: 'api/hello get response',
    server_id: serverID 
  });
})
app.get('/api/hello', (req, res) => {
  res.send({ 
    message: 'api/hello get response',
    server_id: serverID
  });
})
app.get('/api/getserver', (req, res) => {
  res.send(serverID);
})
app.get('/api/getshareddata', (req, res) => {
  try{
    console.log("sent shared file")
    res.sendFile("/usr/share/nginx/html/index.html");
  }
  catch{
    console.log("tried to send file")
  }
})
app.post('/api/logout', (req, res) => {
  res.cookie('jwt', "loggedOut", { httpOnly: true });
  res.send({ message: 'logged out' })
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
          const jwt = generateAccessToken({ email: req.body.email });
          //res2.json(token);
          
           res2.cookie('jwt', jwt, { httpOnly: true });
          
          res2.json({ message: 'correct password' });
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
    
    let uuid4 = uuid.v4();
    var a = new User({
      id:uuid4,
      email:req.body.email,
      password:hash,
    })
    a.save((err)=>
    {
      if(err){
        if(err.code==11000){
          res.send({ message: 'Failed. That email already exists.' });
        }
        else{
          res.send({ message: 'sign up not successful' });  
        }
      }
      else{
        setTimeout(()=>{
          res.send({ message: 'sign up successful' });
        },2000)
      }
    })
  });
});

app.get('/crash', (req,res) =>{
  process.nextTick(function () {
  throw new Error('We crashed!!!!!')})
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
 });

// var server = https.createServer(options, app);

// server.listen(port, () => {
//   console.log("server starting on port : " + port)
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
