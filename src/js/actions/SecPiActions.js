var AppDispatcher = require('../dispatchers/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');
var AuthenticationStore = require('../stores/AuthenticationStore');
var FBAuthenticate = require('../services/FBAuthenticate');

var SecPiActions = {
	/**
	* Authenticate with fb
	*/
	getCurrentUser: function (userId) {
		AppDispatcher.handleRequestAction(
			{
				actionType: SecPiConstants.GET_USER,
				userId: this.userId
			}
		);
		FBAuthenticate.getCurrentUser(userId);
	},

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
				userId: this.id,
				email: this.email,
				token: this.access_token
			}
		);
	}
};
module.exports = SecPiActions;
