const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


var router = express.Router();
// const MongoClient = require('mongodb').MongoClient

const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

////////////////////////////////////////////////////////////////
////////////////////////MONGO PART/////////////////////////////
//////////////////////////////////////////////////////////////


mongoose.connect('mongodb://localhost/data');

var db = mongoose.connection;
 
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
name : String,
email : String,
password : String
});
var User = mongoose.model('User', userSchema);
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

app.get('/data', function(req, res) {

});

app.get('/users', function(req, res) {
    User.find(function(err, users) {
      res.send(users)
    });
});

app.post('/data', (req, res) => {
    var user = new User(req.body);
    user.save((err) => {
        User.find(function(err, users) {
        res.send(users)
      });
    });
});
app.listen(port, () => console.log('app is listening on post 3000'));

