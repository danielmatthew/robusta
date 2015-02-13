// server.js
var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// New Express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,\Authorization');
  next();
});

// Connect to MongoDB
mongoose.connect(config.database);

app.use(express.static(__dirname + '/public_html'));

// Routes
var apiRoutes = require('./routes/api')(app, express);
app.use('/api', apiRoutes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public_html/app/views/index.html'));
});

app.listen(config.port);
