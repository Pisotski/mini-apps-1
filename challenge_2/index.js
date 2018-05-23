var express = require('express');
var helperFunctions = require('./helperFunctions');

var storage = [];

var messages = {
  get: function (req, res) {
    statusCode = 200;
    res.status(statusCode).send(storage);
  },
  post: function (req, res) {
    statusCode = 201;
    let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      }).on('end', (err, data) => {
      storage = body;
      res.status(statusCode).send(storage);
    });
  }
}

module.exports.messages = messages;