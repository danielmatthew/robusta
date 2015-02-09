// server.js

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Coffee = require('./models/coffee');
var Bean = require('./models/beans');

// Connect to MongoDB
mongoose.connect('mongodb://coffee_user:FCj4avfZG2rT@ds039291.mongolab.com:39291/coffee');

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

var router = express.Router();

router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
})

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

router.route('/beans')
  .post(function(req, res) {
    var bean = new Bean();
    bean.farm = req.body.farm;
    bean.process = req.body.process;
    bean.varietal = req.body.varietal;
    bean.notes = req.body.notes;

    bean.save(function(err) {
      if (err) res.send(err);

      res.json({
        message: 'Bean saved'
      });
    });
  })

  .get(function(req, res) {
    Bean.find(function(err, beans) {
      if (err) res.send(err);

      res.json(beans);
    });
  });

app.use('/api', router);

var port = process.env.PORT || 3000;
app.listen(port);