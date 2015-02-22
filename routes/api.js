var Coffee = require('../models/coffee');
var Bean = require('../models/beans');
var User = require('../models/user');

var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = function(app, express) {
  var router = express.Router();

  router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
  })

  router.post('/authenticate', function(req, res) {
    console.log(req.body.username);

    User.findOne({
      username: req.body.username
    }).select('password').exec(function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({
          success: false,
          message: 'Auth failed. User not found'
        });
      } else if (user) {
        var validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {
          res.json({
            success: false,
            message: 'Auth failed. Wrong password'
          });
        } else {
          var token = jwt.sign(user, config.secret, {
            expiresInMinutes: 1440
          });

          res.json({
            success: true,
            message: 'Enjoy your token',
            token: token
          });
        }
      }
    });
  });

  // router.use(function(req, res, next) {
  //   var token = req.body.token || req.param('token') || req.headers['x-access-token'];
  //
  //   if (token) {
  //     jwt.verify(token, config.secret, function(err, decoded) {
  //       if (err) {
  //         return res.json({
  //           success: false,
  //           message: 'Failed to authenticate token'
  //         });
  //       } else {
  //         req.decoded = decoded;
  //         next();
  //       }
  //     });
  //   } else {
  //     return res.status(403).send({
  //       success: false,
  //       message: 'No token provided'
  //     });
  //   }
  // });

  router.get('/', function(req, res) {
    res.json({
      message: 'Welcome to the API'
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

  router.route('/users/:user_id')
    .get(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);

        res.json(user);
      });
    })

    .put(function(req, res) {
      User.findById(req.params.user_id, function(err, user) {
        if (err) res.send(err);

        if (req.body.name) user.name = req.body.name;
        if (req.body.username) user.username = req.body.username;
        if (req.body.password) user.password = req.body.password;

        user.save(function(err) {
          if (err) res.send(err);

          res.json({
            message: 'User updated'
          });
        });
      });
    })

    .delete(function(req, res) {
      User.remove({
        _id: req.params.user_id
      }, function(err, user) {
        if (err) res.send(err);

        res.json({
          message: 'User deleted'
        });
      });
    });


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

    router.get('/me', function(req, res) {
      res.send(req.decoded);
    });

  return router;
};
