var FacebookStrategy = require('passport-facebook').Strategy;
var bCrypt = require('bcrypt-nodejs');

var User = require('../models/user');

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
			console.log('profile', profile);

			process.nextTick(function () {
				User.findOne({'id': profile.id}, function (err, user) {
					if (err)
						return done(err);
					if (user) {
						return done(null, user);
					} else {
						var newUser = new User();

						newUser.fb.id = profile.id;
						newUser.fb.access_token = access_token;
						newUser.fb.firstName = profile.name.givenName;
						newUser.fb.lastName = profile.name.familyName;
						console.log(profile);
						newUser.fb.email = profile.emails[0].value;

						newUser.save(function (err) {
							if (err)
								throw err;
							return done(null, newUser);
						});
					}
				});
			});
		}	
	));

	var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }
}