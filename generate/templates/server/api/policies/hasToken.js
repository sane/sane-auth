var expressJwt = require('express-jwt');
//Create a new secret key here
var secret = '**n0t-S0-s3cr3t-K3y!';

module.exports = expressJwt({secret: secret});