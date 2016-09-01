var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function (passport) {
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true	
	},
	function (req, email, password, done) {
		process.nextTick(function () {
			User.findOne({'local.email': email}, function (err, user) {
				if (err)
					return done(err);
				if (user) {
					return done(null, false, req.flash('signupMessage', 'User already exists'));
				} else {
					console.log("Local user db");
					var newUser = new User();
					newUser.local.email = email;
					newUser.local.firstName = req.body.firstName;
					newUser.local.lastName = req.body.lastName;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(function (err) {
						if(err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));
};