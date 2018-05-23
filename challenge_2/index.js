var express = require('express');
// var helperFunctions = require('./helperFunctions.js');

var storage = [];

const test = (string) => console.log('I WAS INVOKED' + string);

var addTop = function (text) {
    var top = 'firstName lastName county city role sales \n';
    return top + text;
}
var objectFlattener = function(obj) {
  var arr = [];
  for (var key in obj) {
    if (key === 'children') {
      arr.push('\n');
    } else {
       arr.push(obj[key]);
    };
  }
  return arr;
}

var dataFlattener = function (obj, result = []) {
  result = objectFlattener(obj);
    if (obj.children.length > 0) {
      obj.children.forEach(function(ob) {
        result = result.concat(dataFlattener(ob));
      })
    }
  return result.join(' ');
}

var messages = {
  get: function (req, res) {
    statusCode = 200;
    res.status(statusCode).send(storage);
  },
  post: function (req, res) {
    test(' OUTSIDE');
    statusCode = 201;
    // console.log(req.body);
    let body = ''; //json object
      req.on('data', (chunk) => {
        body += chunk;
      }).on('end', (err, data) => {
        JSON.parse(body);
        // var result = addTop(dataFlattener(body));
        // console.log(typeof JSON.parse(body)); 

        res.status(statusCode).send(body);
    });
  }








}

module.exports.messages = messages;