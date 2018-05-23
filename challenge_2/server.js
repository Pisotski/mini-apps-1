// The server must flatten the JSON hierarchy,
// mapping each item in the JSON to a single line of CSV report
const express = require('express');
var controller = require('./index');
var morgan = require('morgan');
// var parser = require('body-parser');

const app = express();

app.use(express.static('client'));
app.use(morgan('dev'));
// app.use(parser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
    res.sendFile(__dirname, 'client/index.html');
});

app.get('/reports', controller.messages.get);
app.post('/reports', controller.messages.post);

app.listen(3000, () => console.log('app listening on port 3000!'))