const router = require('express').Router();
const authHttpHandler = require('./auth.http');
const passport = require('passport');
require('../tools/auth')(passport);


router.route('/login')
  .post(passport.authenticate('jwt', { session: false }), authHttpHandler.loginUser);

router.route('/signup')
  .post(authHttpHandler.registerUser);

router.route('/verify-account')
  .get(authHttpHandler.verifyAccount)
  .post(authHttpHandler.newToken);

router.route('/verify-account/:token&:userId')
  .get(authHttpHandler.verifyAccount);

router.route('/reset-password')
  .post(authHttpHandler.resetPassword);

router.route('/reset-token')
  .get(authHttpHandler.resetToken);

module.exports = {
  router
};


exports.router = router;