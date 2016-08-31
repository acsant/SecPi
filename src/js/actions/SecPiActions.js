var AppDispatcher = require('../dispatcher/AppDispatcher');
var SecPiConstants = require('../constants/SecPiConstants');

var SecPiActions = {
	/**
	*	Start live security feed
	*/
	startFeed: function () {
		AppDispatcher.dispatch({
			actionType: SecPiConstants.STARTFEED
		});
	},

	/**
	*	Stop live feed
	*/
	stopFeed: function (username, password) {
		AppDispatcher.dispatch({
			actionType: SecPiConstants.STOPFEED
		});
	}

	/**
	* Local login
	* @param {string} email
	* @param {string} password
	*/
	localLogin: function (email, password) {
		AppDispatcher.dispatch({
			actionType: SecPiConstants.LOGIN,
			username: email,
			password: this.password
		});
	}

};
module.exports = SecPiActions;