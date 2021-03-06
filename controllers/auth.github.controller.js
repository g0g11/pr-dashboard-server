const passport = require('passport');

// mongoose models
require('../models/User');

module.exports.auth = () => {
  return passport.authenticate('github', {
    session: false,
    scope: ['user:email', 'public_repo'],
  });
};

module.exports.private = () => {
  return passport.authenticate('github', {
    session: false,
    scope: ['user:email', 'repo'],
  });
};

module.exports.callback = () => {
  return passport.authenticate('github', {
    session: false,
  });
};
