var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local: {
		firstName: String,
		lastName: String,
		email: String,
		password: String 
	}
	,
	fb: {
		id: String,
		access_token: String,
		firstName: String,
		lastName: String,
		email: String
	}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.isValidPassword = function(password) {
	console.log(password);
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
