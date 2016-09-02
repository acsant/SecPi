var LocalStrategy = require('passport-local').Strategy;
import SecPiActions from '../src/js/actions/SecPiActions';
var User = require('../models/user');

module.exports = function (passport) {
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, 
	function (req, email, password, done) {
		process.nextTick(function () {
			User.findOne({'local.email': email}, function (err, user) {
				if (err)
					return done(err);
				if (!user) {
					return done(null, false);
				}
				SecPiActions.login(user.email, null);
				return done(null, user);
			});
		});
	}));
};