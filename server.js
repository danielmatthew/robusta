// server.js
var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var path = require('path');
var User = require('./models/user');


// New Express app
var app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,\Authorization');
  next();
});

// Connect to MongoDB
mongoose.connect(config.database);

app.use(express.static(__dirname + '/public'));

// Routes
var apiRoutes = require('./routes/api')(app, express);
app.use('/api', apiRoutes);

apiRoutes.post('/authenticate', function(req, res) {
  User.findOne({
    username: req.body.username
  }).select('name username password').exec(function(err, user) {
    if (err) throw err;

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed'
      });
    } else if (user) {
      var validPassword = user.comparePassword(req.body.password);

      if (!validPassword) {
        res.json({
          success: false,
          message: 'Auth failed. Wrong password'
        });
      } else {
        var token = jwt.sign({
          name: user.name,
          username: user.username
        }, config.secret, {
          expiresInMinutes: 1440
        });

        res.json({
          success: true,
          message: 'Token lol',
          token: token
        });
      }
    }
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(config.port);