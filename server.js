// server.js

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Coffee = require('./models/coffee');

// Connect to MongoDB
mongoose.connect('mongodb://coffee_user:FCj4avfZG2rT@ds039291.mongolab.com:39291/coffee');

// New Express app
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var router = express.Router();
router.route('/coffees')
  .post(function(req, res) {
    var coffee = new Coffee();
    coffee.prepMethod = req.body.prepMethod;
    coffee.review = req.body.review;

    coffee.save(function(err) {
      if (err) res.send(err);

      res.json({
        message: 'Coffee added'
      });
    });
  })

  .get(function(req, res) {
    Coffee.find(function(err, coffees) {
      if (err) res.send(err);

      res.json(coffees);
    });
  });

// router.route('/coffees/:coffee_id')
//   .put()
//   .get()
//   .delete();

app.use('/api', router);

var port = process.env.PORT || 3000;
app.listen(port);