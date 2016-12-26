var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var SecPiActions = require('../src/js/actions/SecPiActions');

var configAuth = require('./auth');

module.exports = function (passport) {

	passport.use('facebook', new FacebookStrategy(
		{
			clientID	:  configAuth.facebookAuth.clientID,
			clientSecret:  configAuth.facebookAuth.clientSecret,
			callbackURL	:  configAuth.facebookAuth.callbackURL,
			profileFields: configAuth.facebookAuth.profileFields 
		},
		
		function (access_token, refresh_token, profile, done) {

			process.nextTick(function () {
				User.findOne({'fb.id': profile.id}, function (err, user) {
					if (err)
						return done(err);
					if (user) {
						SecPiActions.login(user.fb.email, user.fb.access_token);
						return done(null, user);
					} else {
						var newUser = new User();

						newUser.fb.id = profile.id;
						newUser.fb.access_token = access_token;
						newUser.fb.firstName = profile.name.givenName;
						newUser.fb.lastName = profile.name.familyName;
						newUser.fb.email = profile.emails[0].value;

						newUser.save(function (err) {
							if (err)
								throw err;

							SecPiActions.login(newUser.fb.email, newUser.fb.access_token);
							return done(null, newUser);
						});
					}
				});
			});
		}	
	));
}
