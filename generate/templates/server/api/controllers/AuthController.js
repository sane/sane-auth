var passport = require('passport');
var jwt = require('jsonwebtoken');
//Change this secret. Same as in the hasToken policy
var secret = '**n0t-S0-s3cr3t-K3y!';
/**
 * AuthController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  //With sails actions turned on this route is available at localhost:1337/api/v1/auth/login
  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        res.send({
          success: false,
          message: 'invalidPassword'
        });
        return;
      } else {
        if (err) {
          res.send({
            success: false,
            message: 'unknownError',
            error: err
          });
        } else {
          var token = jwt.sign(user, secret, { expiresInMinutes: 60*24 });
          res.send({
            success: true,
            user: user,
            token: token
          });
        }
      }
    })(req, res);
  },

  //Logout at localhost:1337/api/v1/auth/logout
  logout: function(req, res) {
    req.logout();
    res.send({
      success: true,
      message: 'logoutSuccessful'
    });
  },
  _config: {}
};