var facebook = require('./passport');
var localsignup = require('./localsignup');
var locallogin = require('./locallogin');
var User = require('../models/user');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	facebook(passport);
	localsignup(passport);
	locallogin(passport);
}
