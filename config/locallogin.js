var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function (passport) {
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallBack: true
	}, 
	function (req, email, password, done) {
		console.log("EMAIL: ", email);
		console.log(password);
		process.nextTick(function () {
			User.findOne({'local.email': email}, function (err, user) {
				console.log(email);
				console.log(password);
				if (err)
					return done(err);
				if (!user) {
					return done(null, false);
				}
				return done(null, user);
			});
		});
	}));
};