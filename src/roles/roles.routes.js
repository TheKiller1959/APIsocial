const router = require('express').Router();
const roleHttpHandler = require('./roles.http');
const passport = require('passport');
require('../tools/auth')(passport);


router.route('/')
  .get(passport.authenticate('jwt', { session: false }), roleHttpHandler.getAllRoles)
  .post(passport.authenticate('jwt', { session: false }), roleHttpHandler.createRole);


router.route('/:id')
  .get(passport.authenticate('jwt', { session: false }), roleHttpHandler.getRoleById)
  .put(passport.authenticate('jwt', { session: false }), roleHttpHandler.editRole)
  .delete(passport.authenticate('jwt', { session: false }), roleHttpHandler.deleteRole);


module.exports = {
  router
};


exports.router = router;