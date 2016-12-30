var AppDispatcher = require('../dispatchers/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');
var AuthenticationStore = require('../stores/AuthenticationStore');

var SecPiActions = {
	/**
	* Local/facebook login
	* @param {String} id
	* @param {string} email
	* @param {string} password
	*/
	login: function (id, email, access_token) {
		AppDispatcher.handleLoginAction(
			{
				actionType: SecPiConstants.LOGIN,
				userId: id,
				email: email,
				access_token: access_token
			}
		);
	}

};
module.exports = SecPiActions;
