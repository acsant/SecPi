'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');
var AuthenticationStore = require('../stores/AuthenticationStore');

var SecPiActions = {
	/**
 * Local/facebook login
 * @param {string} email
 * @param {string} password
 */
	login: function login(email, access_token) {
		// AppDispatcher.handleLoginAction({
		// 	actionType: SecPiConstants.LOGIN,
		// 	username: email,
		// 	token: access_token
		// });
		console.log("Registered callback: ", AuthenticationStore.dispatchToken);
		console.log("Login param: ", this.email);
		AppDispatcher.handleLoginAction({
			actionType: SecPiConstants.LOGIN,
			email: this.email,
			token: access_token
		});
	}

};
module.exports = SecPiActions;