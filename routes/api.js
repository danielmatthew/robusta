var Coffee = require('../models/coffee');
var Bean = require('../models/beans');
var User = require('../models/user');

module.exports = function(app, express) {
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

  router.route('/users')
    .post(function(req, res) {
      var user = new User();
      user.name = req.body.name;
      user.username = req.body.username;
      user.password = req.body.password;

      user.save(function(err) {
        if (err) res.send(err);

        res.json({
          message: 'User saved'
        });
      });
    })

    .get(function(req, res) {
      User.find(function(err, users) {
        if (err) res.send(err);

        res.json(users);
      });
    });

    return router;
};