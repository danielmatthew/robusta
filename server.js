// server.js

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://coffee_user:FCj4avfZG2rT@ds039291.mongolab.com:39291/coffee');

// New Express app
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.listen(port);