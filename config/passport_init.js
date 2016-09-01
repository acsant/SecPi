var facebook = require('./passport');
var localsignup = require('./localsignup');
var locallogin = require('./locallogin');
var User = require('../models/user');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		console.log('serialize user: ');
		console.log(user);
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			console.log('deserialize user: ', user);
			done(err, user);
		});
	});

	facebook(passport);
	localsignup(passport);
	locallogin(passport);
}