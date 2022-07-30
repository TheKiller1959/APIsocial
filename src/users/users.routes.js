const router = require('express').Router();
const userHttpHandler = require('./users.http')
const passport = require('passport');
require('../tools/auth')(passport) //? Import auth.js

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), userHttpHandler.getAllUsers)

router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), userHttpHandler.getUserById)
  .delete(passport.authenticate('jwt', { session: false }), userHttpHandler.deleteUser)
  .put(passport.authenticate('jwt', { session: false }), userHttpHandler.updateUser)


// router.route('/')
//   .get(userHttpHandler.getAllUsers)

// router.route('/:id')
//   .get(userHttpHandler.getUserById)
//   .delete(userHttpHandler.deleteUser)
//   .put(userHttpHandler.updateUser)


exports.router = router;